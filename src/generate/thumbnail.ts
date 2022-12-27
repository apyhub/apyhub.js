import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Creates a thumbnail image from a file or URL.
 *
 * @param {Object} params - The parameters for the thumbnail creation.
 * @param {"url"|"file"} params.responseFormat - The desired response format.
 * @param {string} [params.output] - The desired file name for the output thumbnail.
 * @param {string|Buffer} params.input - The file or URL to create a thumbnail from.
 * @param {number} params.width - The desired width of the thumbnail.
 * @param {number} params.height - The desired height of the thumbnail.
 * @return {Promise<{data: string}>} - A promise that resolves with an object containing the resulting thumbnail file or URL as a string.
 *
 * @example
 *
 * const { generate } = require("apyhub");
 *
 * const thumbnail = async () => {
 *   const data = await generate.thumbnail({
 *     responseFormat: "url",
 *     input: "https://assets.apyhub.com/samples/sample.pdf",
 *     width: 200,
 *     height: 200,
 *   });
 *  return data;
 * };
 */
async function thumbnail({
  input,
  responseFormat,
  output,
  width,
  height,
}: {
  input: string | Buffer;
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
