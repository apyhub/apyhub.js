import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { handleEndPointConvert } from "../utils/handleEndpointConvert";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Converts a spreadsheet file or URL to a PDF file.
 * @param {Object} params - The parameters for the conversion.
 * @param {(string|Buffer)} params.input - The file or URL to convert.
 * @param {"url"|"file"} params.responseFormat - The desired response format.
 * @param {string} [params.output] - The desired file name for the output PDF.
 * @return {Promise<{data: string}|undefined>} - A promise that resolves with the resulting PDF file or URL as a string, or undefined if the conversion failed.
 */
async function spreadsheetToPdf({
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
    "spreadsheet",
    "pdf",
    inputType,
    responseFormat
  )}?output=${output ?? "output.pdf"}`;

  return await client.request(
    "post",
    requestUrl,
    inputType === "file" ? { file: input } : { url: input },
    { headers: { "Content-Type": contentType } }
  );
}

export { spreadsheetToPdf };
