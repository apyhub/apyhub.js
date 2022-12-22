import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**

Generates a thumbnail image from the given input and returns the thumbnail in the specified format.
@param {Object} options - The options object.
@param {(string)} options.input - The input image. This can be either a file path or a Buffer containing the image file.
@param {"url"|"file"} options.responseFormat - The format in which the thumbnail should be returned. Valid values are "url" or "file".
@param {string} [options.output] - The file path where the thumbnail should be saved. This parameter is only used if responseFormat is "file".
@param {number} options.width - The desired width of the thumbnail image.
@param {number} options.height - The desired height of the thumbnail image.
@returns {Promise<{data: string}|undefined>} A promise that resolves with the thumbnail data if successful, or undefined if an error occurred.
*/
async function thumbnail({
  input,
  responseFormat,
  output,
  width,
  height,
}: {
  input: string;
  responseFormat: "url" | "file";
  output?: string;
  width: number;
  height: number;
}): Promise<{ data: string } | undefined> {
  const client = getInstance();
  checkMissingParams({ input, responseFormat, width, height });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const inputType = isFileOrUrl(input);
  let endpoint = "";

  if (inputType === "file" && responseFormat === "file") {
    endpoint = "file";
  } else if (inputType === "file" && responseFormat === "url") {
    endpoint = "file/url";
  } else if (inputType === "url" && responseFormat === "file") {
    endpoint = "url/file";
  } else if (inputType === "url" && responseFormat === "url") {
    endpoint = "file-urls";
  }

  const requestUrl = `https://api.apyhub.com/generate/image/thumbnail/${endpoint}?output=${output ??
    "thumbnail.png"}&width=${width}&height=${height}`;

  return await client.request(
    "post",
    requestUrl,
    inputType === "file" ? getFormData(input, "image") : { url: input }
  );
}

export { thumbnail };
