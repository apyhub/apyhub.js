import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";

/**
 * Takes a screenshot of a webpage.
 * @param {Object} params - The parameters for the screenshot generation.
 * @param {string} params.input - The URL of the webpage to take a screenshot of.
 * @param {string} [params.output] - The desired file name for the output screenshot image.
 * @param {number} [params.delay] - The delay, in seconds, before taking the screenshot.
 * @param {1|2|3|4|5} [params.quality] - The quality of the screenshot image.
 * @param {"file"|"url"} params.responseFormat - The desired response format.
 * @return {Promise<{data: string}>} - A promise that resolves with an object containing the resulting screenshot image file or URL as a string.
 *
 * @example
 *
 * const { generate } = require("apyhub");
 *
 * const screenshot = async () => {
 *   const data = await generate.screenshot({
 *     responseFormat: "url",
 *     input: "https://apyhub.com",
 *     delay: 5,
 *     quality: 3,
 *     output: "screenshot.png"
 *   });
 *   return data;
 * };
 */
async function screenshot({
  input,
  output,
  delay,
  quality,
  responseFormat,
}: {
  input: string;
  output?: string;
  delay?: number;
  quality?: 1 | 2 | 3 | 4 | 5;
  responseFormat: "file" | "url";
}): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ input, responseFormat });
  checkParamTypes({ responseFormat }, ["file", "url"]);
  quality &&
    checkParamTypes(
      { quality: quality?.toString() },
      [1, 2, 3, 4, 5].map(i => i.toString())
    );

  const url = `
        https://api.apyhub.com/generate/screenshot/webpage/image-${responseFormat}?output=${output ??
    "output.png"}&delay=${delay ?? 3}&quality=${quality ?? 5}&url=${input}`;

  return await client.request("get", url);
}

export { screenshot };
