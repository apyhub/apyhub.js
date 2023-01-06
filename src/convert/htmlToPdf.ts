import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { handleEndPointConvert } from "../utils/handleEndpointConvert";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Converts an HTML file or URL to a PDF file.
 *
 * @example
 *   const { convert } = require("apyhub");
 *
 *   const htmlToPdf = async () => {
 *     const data = await convert.htmlToPdf({
 *       input: "https://assets.apyhub.com/samples/sample.html",
 *       responseFormat: "url",
 *     });
 *     return data;
 *   };
 *
 * @param {Object} params - The parameters for the conversion.
 * @param {string | Buffer} params.input - The HTML file or URL.
 * @param {"url" | "file"} params.responseFormat - The format for the response.
 * @param {string} [params.output] - The name for the output PDF file.
 * @returns {Promise<{ data: string } | undefined>} A promise that resolves to
 *   the data for the output file or `undefined` if the response format is not
 *   "url".
 * @link https://apyhub.com/utility/converter-html-pdf
 */
async function htmlToPdf({
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
    "html",
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

export { htmlToPdf };
