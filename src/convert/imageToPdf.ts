import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { handleEndPointConvert } from "../utils/handleEndpointConvert";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Converts an image file or URL to a PDF file.
 * @param {Object} params - The parameters for the conversion.
 * @param {string | Buffer} params.input - The image file or URL.
 * @param {"url" | "file"} params.responseFormat - The format for the response.
 * @param {string} [params.output] - The name for the output PDF file.
 * @returns {Promise<{data: string} | undefined>} A promise that resolves to the data for the output file or `undefined` if the response format is not "url".
 *
 * @example
 *
 * const { convert } = require("apy");
 *
 * const imageToPdf = async () => {
 *   const response = await convert.imageToPdf({
 *     input: "https://apyhub.com/docs/assets/images/sample.png",
 *     responseFormat: "url",
 *   });
 * }
 *
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

  const requestUrl = `https://api.apyhub.com/convert/${handleEndPointConvert(
    "image",
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

export { imageToPdf };
