import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { handleEndPoint } from "../utils/handleEndpoint";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Resizes an image file or URL.
 *
 * @param {Object} params - The parameters for the image resizing.
 * @param {"url"|"file"} params.responseFormat - The desired response format.
 * @param {string|Buffer} params.input - The image file or URL to resize.
 * @param {number} params.height - The desired height of the resized image.
 * @param {number} params.width - The desired width of the resized image.
 * @param {string} [params.output] - The desired file name for the output resized image.
 * @return {Promise<{data: string}>} - A promise that resolves with an object containing the resulting resized image file or URL as a string.
 *
 * @example
 *
 * const { imageProcessor } = require("apyhub");
 *
 * const resize = async () => {
 *   const data = await imageProcessor.resize({
 *     responseFormat: "url",
 *     input: "https://assets.apyhub.com/samples/sample.pdf",
 *     height: 200,
 *     width: 200,
 *     output: "output.png"
 *   });
 *   return data;
 * };
 */

async function resize({
  input,
  responseFormat,
  height,
  width,
  output,
}: {
  input: string | Buffer;
  responseFormat: "url" | "file";
  height: number;
  width: number;
  output?: string;
}): Promise<{ data: string } | undefined> {
  const client = getInstance();
  checkMissingParams({ input, responseFormat, height, width });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const inputType = isFileOrUrl(input);

  const requestUrl = `https://api.apyhub.com/processor/image/${handleEndPoint(
    "resize",
    inputType,
    responseFormat
  )}?output=${output ?? "output.png"}&height=${height}&width=${width}`;

  return await client.request(
    "post",
    requestUrl,
    inputType === "file" ? getFormData(input, "image") : { url: input }
  );
}

export { resize };
