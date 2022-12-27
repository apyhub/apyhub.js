import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { handleEndPoint } from "../utils/handleEndpoint";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Compresses an image file or URL.
 *
 * @param {Object} params - The parameters for the image compression.
 * @param {"url"|"file"} params.responseFormat - The desired response format.
 * @param {string|Buffer} params.input - The image file or URL to compress.
 * @param {number} params.quality - The desired quality of the compressed image.
 * @param {string} [params.output] - The desired file name for the output compressed image.
 * @return {Promise<{data: string}>} - A promise that resolves with an object containing the resulting compressed image file or URL as a string.
 *
 * @example
 *
 * const { imageProcessor } = require("apyhub");
 *
 * const compress = async () => {
 *   const data = await imageProcessor.compress({
 *     responseFormat: "url",
 *     input: "https://assets.apyhub.com/samples/sample.png",
 *     quality: 50,
 *     output: "compressed.png"
 *   });
 *   return data;
 * };
 */
async function compress({
  input,
  responseFormat,
  quality,
  output,
}: {
  input: string | Buffer;
  responseFormat: "url" | "file";
  // TODO: add typescript support for quality > 1 && < 99
  quality: number;
  output?: string;
}): Promise<{ data: string } | undefined> {
  const client = getInstance();
  checkMissingParams({ input, responseFormat, quality });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const inputType = isFileOrUrl(input);

  const requestUrl = `https://api.apyhub.com/processor/image/${handleEndPoint(
    "compress",
    inputType,
    responseFormat
  )}?output=${output ?? "output.png"}&quality=${quality}`;

  return await client.request(
    "post",
    requestUrl,
    inputType === "file" ? getFormData(input, "image") : { url: input }
  );
}

export { compress };
