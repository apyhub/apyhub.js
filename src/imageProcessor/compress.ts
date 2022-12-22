import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { handleEndPoint } from "../utils/handleEndpoint";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**

Compresses an image.
@param {Object} options - The options for the function.
@param {(string)} options.input - The input image as a file path or URL, or as a Buffer if it is a file.
@param {"url"|"file"} options.responseFormat - The desired response format. Can be either "url" or "file".
@param {number} options.quality - The desired quality of the output image. Must be a number between 1 and 99.
@param {string} [options.output] - The desired file name for the output image. Default is "output.png".
@returns {Promise<{data: string}|undefined>} - A promise that resolves to an object with the compressed image as a URL or file, or undefined if the response format is invalid.
*/
async function compress({
  input,
  responseFormat,
  quality,
  output,
}: {
  input: string;
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
