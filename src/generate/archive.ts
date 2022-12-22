import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Creates an archive file (zip) from a list of files or URLs.
 * @param {Object} params - The parameters for the archive creation.
 * @param {"url"|"file"} params.responseFormat - The desired response format.
 * @param {string} [params.output] - The desired file name for the output archive.
 * @param {any[]} params.input - The list of files or URLs to include in the archive.
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
  input: any[];
  password?: string;
}): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ responseFormat, input });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const endpoint = password !== undefined ? "secure-archive" : "archive";
  const responseType =
    responseFormat === "file" ? "archive-file" : "archive-url";
  const inputType = isFileOrUrl(input[0]) === "file" ? "files" : "file-urls";
  const url = `
    https://api.apyhub.com/generate
  }/${endpoint}/${inputType}/${responseType}?output=${output ?? "output.zip"}`;

  const data = {
    [isFileOrUrl(input[0]) + "s"]: input,
    password: password ?? undefined,
  };

  return await client.request("post", url, data, {
    headers: {
      "Content-Type":
        responseFormat === "file" ? "multipart/form-data" : "application/json",
    },
  });
}

export { archive };
