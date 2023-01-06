import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFormData } from "../utils/getFormData";
import { handleEndPointConvert } from "../utils/handleEndpointConvert";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Convert a presentation to PDF.
 *
 * This function converts the given presentation input to PDF and returns the
 * result.
 *
 * @example
 *   const { convert } = require("apyhub");
 *
 *   const presentationToPdf = async () => {
 *     const data = await convert.presentationToPdf({
 *       input: "https://assets.apyhub.com/samples/sample.pptx",
 *       responseFormat: "url",
 *     });
 *     return data;
 *   };
 *
 * @param {Object} params - The parameters for the conversion.
 * @param {string | Buffer} params.input - The presentation input.
 * @param {"url" | "file"} params.responseFormat - The format of the response.
 *   Can be "url" or "file".
 * @param {string} [params.output] - The name of the output file.
 * @returns {Promise<{ data: string } | undefined>} - A promise that resolves
 *   with the PDF output.
 * @link https://apyhub.com/utility/converter-presentation-pdf
 */
async function presentationToPdf({
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
    "presentation",
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

export { presentationToPdf };
