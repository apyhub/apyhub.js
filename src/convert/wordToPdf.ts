import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { handleEndPointConvert } from "../utils/handleEndpointConvert";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Converts a Word file or URL to a PDF file.
 *
 * @example
 *   const { convert } = require("apyhub");
 *
 *   const wordToPdf = async () => {
 *     const data = await convert.wordToPdf({
 *       input: "https://assets.apyhub.com/samples/sample.docx",
 *       responseFormat: "url",
 *     });
 *     return data;
 *   };
 *
 * @param {Object} params - The parameters for the conversion.
 * @param {string | Buffer} params.input - The file or URL to convert.
 * @param {"url" | "file"} params.responseFormat - The desired response format.
 * @param {string} [params.output] - The desired file name for the output PDF.
 * @returns {Promise<{ data: string } | undefined>} - A promise that resolves
 *   with the resulting PDF file or URL as a string, or undefined if the
 *   conversion failed.
 * @link https://apyhub.com/utility/converter-doc-pdf
 */
async function wordToPdf({
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

  const requestUrl = `https://api.apyhub.com/convert/${handleEndPointConvert(
    "word",
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

export { wordToPdf };
