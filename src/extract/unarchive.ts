import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { getFormData } from "../utils/getFormData";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Extracts the contents of an archive file (zip) to a list of files or URLs.
 * @example
 *
 * const { extract } = require("apyhub");
 *
 * const unarchive = async () => {
 *  const data = await extract.unarchive({
 *   input: "https://assets.apyhub.com/samples/sample.zip",
 * });
 * return data;
 * };
 *
 * @param {Object} params - The parameters for the archive extraction.
 * @param {string | Buffer} params.input - The archive file or URL to extract.
 * @param {string} [params.password] - The password to use for secure extraction.
 *
 * @returns {Promise<{ data: Buffer }>} - A promise that resolves with an object containing the resulting extracted files or URLs as a Buffer.
 *
 * @link https://apyhub.com/utility/extract-file-unarchive
 * @link https://apyhub.com/utility/extract-file-secure-unarchive
 */
export async function unarchive({
  input,
  password,
}: {
  input: string | Buffer;
  password?: string;
}): Promise<{ data: Buffer }> {
  const client = getInstance();
  checkMissingParams({ input });

  const inputType = isFileOrUrl(input) === "file" ? "file" : "url";

  const url = `https://api.apyhub.com/extract/${
    password ? "secure-archive" : "archive"
  }/${inputType}/file-urls`;

  const formData = () => {
    const formData = getFormData(input, "file");
    password && formData.append("password", password);
    return formData;
  };

  const data =
    inputType === "url"
      ? {
          urls: input,
          password: password ?? undefined,
        }
      : formData();

  return await client.request("post", url, data);
}
