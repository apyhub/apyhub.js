import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";

/**
 * Generates a PDF file from an HTML string or URL.
 * @param {Object} params - The parameters for the PDF generation.
 * @param {string} params.input - The HTML string or URL to generate the PDF from.
 * @param {"url"|"file"} params.responseFormat - The desired response format.
 * @param {boolean} [params.landscape] - Whether to generate the PDF in landscape orientation.
 * @return {Promise<{data: string}>} - A promise that resolves with an object containing the resulting PDF file or URL as a string.
 */
async function pdf({
  input,
  responseFormat,
  landscape,
}: {
  input: string;
  responseFormat: "url" | "file";
  landscape?: boolean;
}): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ input, responseFormat });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  // check if input string is valid url without using isFileOrUrl
  // TODO - move this to utils refactor isFileOrUrl to use this
  const isUrl = (url: string): boolean => {
    try {
      const isValid = new URL(url);
      return !!isValid;
    } catch (error) {
      return false;
    }
  };

  const inputType = isUrl(input) ? "webpage" : "html-content";
  const inputField = isUrl(input) ? "url" : "content";
  const url = `https://api.apyhub.com/generate/${inputType}/pdf-${responseFormat}?&landscape=${
    landscape === true ? "true" : "false"
  }`;

  console.log(url);

  return await client.request("post", url, { [inputField]: input });
}
export { pdf };
