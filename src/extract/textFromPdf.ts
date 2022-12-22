import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Extracts text from a PDF file.
 *
 * @param {string | File | Blob} pdf - The PDF file or URL.
 * @returns {Promise<{data: string}>} A promise that resolves to the text for the PDF.
 */
async function textFromPdf(
  pdf: string | File | Blob
): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ pdf });

  console.log(typeof pdf);

  const inputType = isFileOrUrl(pdf) === "file" ? "file" : "url";
  const contentType =
    inputType === "file" ? "multipart/form-data" : "application/json";

  console.log(inputType);
  const url = `https://api.apyhub.com/extract/text/pdf-${inputType}`;
  console.log(url);
  return await client.request(
    "post",
    url,
    inputType === "file" ? { file: pdf } : { url: pdf },
    { headers: { "Content-Type": contentType } }
  );
}

export { textFromPdf };
