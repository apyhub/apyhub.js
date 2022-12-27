import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { getFormData } from "../utils/getFormData";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Extracts text from a Word document.
 *
 * @param {string | Buffer} word - The Word document file or URL.
 * @returns {Promise<{data: string}>} A promise that resolves to the text for the Word document.
 */
async function textFromWord(word: string | Buffer): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ word });

  const inputType = isFileOrUrl(word) === "file" ? "file" : "url";

  const url = `https://api.apyhub.com/extract/text/word-${inputType}`;

  return await client.request(
    "post",
    url,
    inputType === "file" ? getFormData(word, "file") : { url: word }
  );
}

export { textFromWord };
