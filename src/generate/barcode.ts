import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";

/**
 * Generates a barcode image from a string of up to 80 characters.
 * @param {Object} params - The parameters for the barcode generation.
 * @param {string & {maxLength: 80}} params.input - The string to generate the barcode from.
 * @param {"file"|"url"} params.responseFormat - The desired response format.
 * @param {string} [params.output] - The desired file name for the output barcode image.
 * @return {Promise<{data: string}>} - A promise that resolves with an object containing the resulting barcode image file or URL as a string.
 *
 * @example
 *
 * const { generate } = require("apyhub");
 *
 * const barcode = async () => {
 *   const data = await generate.barcode({
 *     responseFormat: "url",
 *     input: "https://apyhub.com",
 *   });
 *   return data;
 * };
 */
async function barcode({
  input,
  responseFormat,
  output,
}: {
  input: string & { maxLength: 80 };
  responseFormat: "file" | "url";
  output?: string;
}): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ input, responseFormat });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const url = `https://api.apyhub.com/generate/barcode/${responseFormat}?output=${output ??
    "output.png"}`;
  return await client.request("post", url, { content: input });
}

export { barcode };
