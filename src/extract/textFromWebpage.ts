import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";

/**
 * Extracts text from a webpage.
 *
 * @param {string} url - The URL of the webpage.
 * @returns {Promise<{data: string}>} A promise that resolves to the text for the webpage.
 */
async function textFromWebpage(url: string): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ url });

  const requestUrl = `https://api.apyhub.com/extract/text/webpage?url=${url}`;

  return await client.request("get", requestUrl);
}

export { textFromWebpage };
