import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { handleEndPoint } from "../utils/handleEndpoint";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Crops an image file or URL.
 *
 * @param {Object} params - The parameters for the image cropping.
 * @param {"url"|"file"} params.responseFormat - The desired response format.
 * @param {string|Buffer} params.input - The image file or URL to crop.
 * @param {number} params.height - The desired height of the cropped image.
 * @param {number} params.width - The desired width of the cropped image.
 * @param {string} [params.output] - The desired file name for the output cropped image.
 * @return {Promise<{data: string}>} - A promise that resolves with an object containing the resulting cropped image file or URL as a string.
 *
 * @example
 *
 * const { imageProcessor } = require("apyhub");
 *
 * const crop = async () => {
 *   const data = await imageProcessor.crop({
 *     responseFormat: "url",
 *     input: "https://assets.apyhub.com/samples/sample.pdf",
 *     height: 200,
 *     width: 200,
 *     output: "output.png"
 *   });
 *   return data;
 * };
 */

async function crop({
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

  const url = `https://api.apyhub.com/processor/image/${handleEndPoint(
    "crop",
    inputType,
    responseFormat
  )}?output=${output ?? "output.png"}&height=${height}&width=${width}`;

  return await client.request(
    "post",
    url,
    inputType === "file" ? getFormData(input, "image") : { url: input }
  );
}

export { crop };
