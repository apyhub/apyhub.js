import * as fs from 'fs';

function isValidUrl(url: string): boolean {
  try {
    const isValid = new URL(url);
    return !!isValid;
  } catch (error) {
    return false;
  }
}

/**
 * Downloads data to the specified file path.
 *
 * @param {Blob | string | { data: string; type?: string; arrayBuffer?: () => Promise<ArrayBuffer> }} data - The data to download. Can be a Blob, a string, or an object with a `data` property and optionally a `type` property and an `arrayBuffer` function that returns a Promise for an ArrayBuffer.
 * @param {string} filePath - The file path to save the downloaded data to.
 * @returns {Promise<void>} A Promise that resolves when the download is complete.
 * @throws {Error} If the data is invalid or there is an error writing the file.
 */

// TODO : fix this type for data
// | Blob
//     | string
//     | { data: string; type?: string; arrayBuffer?: () => Promise<ArrayBuffer> }

export async function download(data: any, filePath: string): Promise<void> {
  let buffer: Buffer = Buffer.alloc(0);
  if (typeof data === 'string') {
    buffer = Buffer.from(data);
  } else if (typeof data === 'object' && data.data) {
    if (isValidUrl(data.data)) {
      const response = await fetch(data.data);
      buffer = Buffer.from(await response.arrayBuffer());
    } else if (typeof data.data === 'string') {
      buffer = Buffer.from(data.data);
    } else if ('data' in data && typeof data.data === 'object') {
      buffer = Buffer.from(JSON.stringify(data.data));
    } else {
      throw new Error('Invalid data.data');
    }
  } else if (
    typeof data === 'object' &&
    data.type &&
    typeof data.arrayBuffer === 'function'
  ) {
    buffer = Buffer.from(await data.arrayBuffer());
  } else {
    throw new Error('Invalid data');
  }

  fs.writeFile(filePath, buffer, err => {
    if (err) {
      throw err;
    }
  });
}
