import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { handleEndPointConvert } from "../utils/handleEndpointConvert";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Convert markdown to HTML.
 *
 * This function converts the given markdown input to HTML and returns the result.
 *
 * @param {Object} params - The parameters for the conversion.
 * @param {(string|Buffer)} params.input - The markdown input. Can be a file or URL.
 * @param {"url"|"file"} params.responseFormat - The format of the response. Can be "url" or "file".
 * @param {string} [params.output] - The name of the output file.
 * @return {Promise<{data: string}|undefined>} - A promise that resolves with the HTML output.
 */
async function markdownToHtml({
  input,
  responseFormat,
  output,
}: {
  input: string | Buffer;
  responseFormat: "url" | "file";
  output?: string;
}): Promise<{ data: string } | undefined> {
  const client = getInstance();
  checkMissingParams({ input, responseFormat });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const inputType = isFileOrUrl(input);
  const contentType =
    inputType === "file" ? "multipart/form-data" : "application/json";

  const requestUrl = `https://api.apyhub.com/convert/${handleEndPointConvert(
    "md",
    "html",
    inputType,
    responseFormat
  )}?output=${output ?? "output.html"}`;

  return await client.request(
    "post",
    requestUrl,
    inputType === "file" ? { file: input } : { url: input },
    { headers: { "Content-Type": contentType } }
  );
}

export { markdownToHtml };