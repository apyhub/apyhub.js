import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { handleEndPointConvert } from "../utils/handleEndpointConvert";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Converts a CSV file or URL to an Excel file.
 * @param {Object} params - The parameters for the conversion.
 * @param {string | Buffer} params.input - The input CSV file or URL.
 * @param {"url" | "file"} params.responseFormat - The format for the response.
 * @param {string} [params.output] - The name for the output Excel file.
 * @returns {Promise<{data: string} | undefined>} A promise that resolves to the data for the output file or `undefined` if the response format is not "url".
 */
async function csvToExcel({
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
  const contentType =
    inputType === "file" ? "multipart/form-data" : "application/json";

  const requestUrl = `https://api.apyhub.com/convert/${handleEndPointConvert(
    "csv",
    "excel",
    inputType,
    responseFormat
  )}?output=${output ?? "output.xlsx"}`;

  return await client.request(
    "post",
    requestUrl,
    inputType === "file" ? { file: input } : { url: input },
    { headers: { "Content-Type": contentType } }
  );
}

export { csvToExcel };
