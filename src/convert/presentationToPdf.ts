import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { handleEndPointConvert } from "../utils/handleEndpointConvert";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Convert a presentation to PDF.
 *
 * This function converts the given presentation input to PDF and returns the result.
 *
 * @param {Object} params - The parameters for the conversion.
 * @param {(string)} params.input - The presentation input. Can be a file or URL.
 * @param {"url"|"file"} params.responseFormat - The format of the response. Can be "url" or "file".
 * @param {string} [params.output] - The name of the output file.
 * @return {Promise<{data: string}|undefined>} - A promise that resolves with the PDF output.
 */
async function presentationToPdf({
  input,
  responseFormat,
  output,
}: {
  input: string;
  responseFormat: "url" | "file";
  output?: string;
}): Promise<{ data: string } | undefined> {
  const client = getInstance();
  checkMissingParams({ input, responseFormat });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const inputType = isFileOrUrl(input);

  const requestUrl = `https://api.apyhub.com/convert/${handleEndPointConvert(
    "presentation",
    "pdf",
    inputType,
    responseFormat
  )}?output=${output ?? "output.pdf"}`;

  return await client.request(
    "post",
    requestUrl,
    inputType === "file" ? getFormData(input, "file") : { url: input }
  );
}

export { presentationToPdf };
