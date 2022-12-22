import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { handleEndPointConvert } from "../utils/handleEndpointConvert";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Converts an image file or URL to a PDF file.
 * @param {Object} params - The parameters for the conversion.
 * @param {string | Buffer} params.input - The input image file or URL.
 * @param {"url" | "file"} params.responseFormat - The format for the response.
 * @param {string} [params.output] - The name for the output PDF file.
 * @returns {Promise<{data: string} | undefined>} A promise that resolves to the data for the output file or `undefined` if the response format is not "url".
 */
async function imageToPdf({
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
    "image",
    "pdf",
    inputType,
    responseFormat
  )}?output=${output ?? "output.pdf"}`;

  return await client.request(
    "post",
    requestUrl,
    inputType === "file" ? { file: input } : { url: input },
    { headers: { "Content-Type": contentType } }
  );
}

export { imageToPdf };
