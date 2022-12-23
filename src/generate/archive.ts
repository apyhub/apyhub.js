import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Creates an archive file (zip) from a list of files or URLs.
 * @param {Object} params - The parameters for the archive creation.
 * @param {"url"|"file"} params.responseFormat - The desired response format.
 * @param {string} [params.output] - The desired file name for the output archive.
 * @param {string[]} params.input - The list of files or URLs to include in the archive.
 * @param {string} [params.password] - The password to use for secure archiving.
 * @return {Promise<{data: string}>} - A promise that resolves with an object containing the resulting archive file or URL as a string.
 */
async function archive({
  responseFormat,
  output,
  input,
  password,
}: {
  responseFormat: "url" | "file";
  output?: string;
  input: string[] | Buffer[];
  password?: string;
}): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ responseFormat, input });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const endpoint = password ? "secure-archive" : "archive";

  const responseType =
    responseFormat === "file" ? "archive-file" : "archive-url";
  const inputType = isFileOrUrl(input[0]) === "file" ? "files" : "file-urls";
  const url = `
    https://api.apyhub.com/generate/${endpoint}/${inputType}/${responseType}?output=${output ??
    "output.zip"}`;

  console.log(url);

  const formData = () => {
    const formData = getFormData(input, "files");
    password && formData.append("password", password);
    return formData;
  };

  const data =
    inputType === "file-urls"
      ? {
          urls: input,
          password: password ?? undefined,
        }
      : formData();

  return await client.request("post", url, data);
}

export { archive };
