import fetch from 'cross-fetch';
import FormData from 'form-data';

class ApyClient {
  protected readonly baseUrl = 'https://api.apyhub.com';
  protected readonly headers: any;
  private readonly requestQueue: any[];
  private readonly rateLimit: number;
  private readonly rateLimitPeriod: number;
  private rateLimitTimer: any;
  private requestPromises: any[];

  constructor(apyToken: string, options?: { rateLimit: number }) {
    this.headers = {
      // "Content-Type": "application/json",
      'apy-token': apyToken,
    };
    this.requestQueue = [];
    this.rateLimit = options?.rateLimit ?? 1;
    this.rateLimitPeriod = 1000; // Set the rate limit period to 1 second (1000 milliseconds)
    this.rateLimitTimer = null;
    this.requestPromises = [];
  }

  async request(
    method: 'get' | 'post',
    url: string,
    data?: any,
    options: any = {}
  ): Promise<any> {
    if (!this.headers['apy-token']) {
      throw new Error('apy-token is required');
    }

    const headers = { ...this.headers, ...options.headers };

    // Push the request to the request queue
    this.requestQueue.push({ method, url, data, headers });

    // Create a new promise to store the request response
    const requestPromise = new Promise(resolve => {
      // Push the promise to the requestPromises array
      this.requestPromises.push(resolve);
    });

    // Check if the rate limit timer is running
    if (this.rateLimitTimer) {
      // If the timer is running, do nothing
      return await requestPromise;
    }

    // Start the rate limiter
    this.startRateLimiter();

    return await requestPromise;
  }

  private startRateLimiter(): void {
    // Start the rate limit timer
    this.rateLimitTimer = setTimeout(() => {
      // Reset the timer
      this.rateLimitTimer = null;

      // Process the request queue
      void this.processRequestQueue();
    }, this.rateLimitPeriod);
  }

  private async processRequestQueue(): Promise<void> {
    // Take the first n requests from the queue, where n is the rate limit
    const requests = this.requestQueue.splice(0, this.rateLimit);

    // Process the requests
    for (let i = 0; i < requests.length; i++) {
      const request = requests[i];

      let response: any;
      switch (request.method) {
        case 'get':
          response = await fetch(request.url, {
            method: 'GET',
            headers: request.headers,
          }).then(handleResponse);
          break;
        case 'post':
          response = await fetch(request.url, {
            method: 'POST',
            headers: request.headers,
            body:
              request.data instanceof FormData
                ? request.data
                : JSON.stringify(request.data),
          }).then(handleResponse);
          break;
      }

      // Resolve the corresponding request promise with the response
      this.requestPromises[i](response);
    }

    // Clear the requestPromises array
    this.requestPromises = [];

    // Check if there are any more requests in the queue
    if (this.requestQueue.length > 0) {
      // If there are more requests, start the rate limiter again
      this.startRateLimiter();
    }
  }
}

const handleResponse = async (response: Response): Promise<any> => {
  if (!response.ok) {
    const error = await response.text();
    const errorCode = response.status;
    throw new Error(`${errorCode}: ${error}`);
  }
  const contentType = response.headers.get('Content-Type') ?? '';
  const blobTypes = new Set([
    'image/png',
    'image/jpeg',
    'application/zip',
    'application/pdf',
  ]);

  const handleBlob = async (responseData: Response): Promise<Blob> =>
    await responseData.blob();
  const handleText = async (
    responseData: Response
  ): Promise<string | undefined> => await responseData.text();
  const handleJson = async (
    responseData: Response
  ): Promise<Record<string, any> | undefined> => await responseData.json();

  switch (true) {
    case contentType.includes('text/plain'):
    case contentType.includes('text/html'):
      return await handleText(response);
    default:
      return blobTypes.has(contentType)
        ? await handleBlob(response)
        : await handleJson(response);
  }
};

let instance: ApyClient | null = null;

function getInstance(
  apyToken?: string,
  options?: {
    rateLimit: number;
  }
): ApyClient {
  if (!instance) {
    if (!apyToken) {
      throw new Error('apyToken is required');
    }
    instance = new ApyClient(apyToken, options);
  }
  return instance;
}

/**
 * Initializes the Apyhub API client.
 * @param {string} apyToken - The Apyhub API token.
 * @param {Object} [options] - Options for the API client.
 * @param {number} [options.rateLimit] - The rate limit for the API client.
 */
function initApyhub(
  apyToken: string,
  options?: {
    rateLimit: number;
  }
): void {
  getInstance(apyToken, options);
}

export { initApyhub, getInstance };