import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Extracts text from a Word document.
 *
 * @param {string | File | Blob} word - The Word document file or URL.
 * @returns {Promise<{data: string}>} A promise that resolves to the text for the Word document.
 */
async function textFromWord(
  word: string | File | Blob
): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ word });

  const inputType = isFileOrUrl(word) === "file" ? "file" : "url";
  const contentType =
    inputType === "file" ? "multipart/form-data" : "application/json";

  const url = `https://api.apyhub.com/extract/text/word-${inputType}`;

  return await client.request(
    "post",
    url,
    inputType === "file" ? { file: word } : { url: word },
    { headers: { "Content-Type": contentType } }
  );
}

export { textFromWord };
