import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { getFormData } from "../utils/getFormData";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Extracts text from a PDF file.
 *
 * @example
 *   const { extract } = require("apyhub");
 *
 *   const textFromPdf = async () => {
 *     const data = await extract.textFromPdf(
 *       "https://assets.apyhub.com/samples/sample.pdf"
 *     );
 *     return data;
 *   };
 *
 * @param {string | Buffer} pdf - The PDF file or URL.
 * @returns {Promise<{ data: string }>} A promise that resolves to the text for
 *   the PDF.
 * @link https://apyhub.com/utility/extractor-pdf-text
 */
async function textFromPdf(pdf: string | Buffer): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ pdf });

  const inputType = isFileOrUrl(pdf) === "file" ? "file" : "url";

  const url = `https://api.apyhub.com/extract/text/pdf-${inputType}`;
  return await client.request(
    "post",
    url,
    inputType === "file" ? getFormData(pdf, "file") : { url: pdf }
  );
}

export { textFromPdf };
