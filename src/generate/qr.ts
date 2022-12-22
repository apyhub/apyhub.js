import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";

/**
 * Generates a QR code image from a string.
 * @param {Object} params - The parameters for the QR code generation.
 * @param {string} params.input - The string to generate the QR code from.
 * @param {"file"|"url"} params.responseFormat - The desired response format.
 * @param {string} [params.output] - The desired file name for the output QR code image.
 * @return {Promise<{data: string}>} - A promise that resolves with an object containing the resulting QR code image file or URL as a string.
 */
async function qr({
  input,
  responseFormat,
  output,
}: {
  input: string;
  responseFormat: "file" | "url";
  output?: string;
}): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ input, responseFormat });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const url = `https://api.apyhub.com/generate/qr-code/${responseFormat}?output=${
    output ?? "output.png"
  }`;
  return await client.request("post", url, { content: input });
}

export { qr };
