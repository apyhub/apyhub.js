import FormData from "form-data";
import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
import { getFile } from "../utils/getFormData";
import { handleEndPoint } from "../utils/handleEndpoint";
import { isFileOrUrl } from "../utils/isFileOrUrl";

/**
 * Adds a watermark to an image.
 *
 * @example
 *   const { imageProcessor } = require("apyhub");
 *
 *   const watermark = async () => {
 *     const data = await imageProcessor.watermark({
 *       input: "https://assets.apyhub.com/samples/sample.pdf",
 *       watermark: "https://assets.apyhub.com/samples/sample.pdf",
 *       responseFormat: "url",
 *       output: "output.png",
 *     });
 *     return data;
 *   };
 *
 * @param {Object} options - The options for the function.
 * @param {string | Buffer} options.input - The input image as a file path or
 *   URL, or as a Buffer if it is a file.
 * @param {string} options.watermark - The watermark image as a file path or
 *   URL, or as a Buffer if it is a file.
 * @param {"url" | "file"} options.responseFormat - The desired response format.
 *   Can be either "url" or "file".
 * @param {string | Buffer} [options.output] - The desired file name for the
 *   output image. Default is "output.png".
 * @returns {Promise<{ data: string } | undefined>} - A promise that resolves to
 *   an object with the watermarked image as a URL or file, or undefined if the
 *   response format is invalid.
 * @link https://apyhub.com/utility/image-processor-watermark
 */

async function watermark({
  input,
  watermark,
  responseFormat,
  output,
}: {
  input: string | Buffer;
  watermark: string | Buffer;
  responseFormat: "url" | "file";
  output?: string;
}): Promise<{ data: string } | undefined> {
  const client = getInstance();
  checkMissingParams({ input, watermark, responseFormat });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const inputType = isFileOrUrl(input);

  const requestUrl = `https://api.apyhub.com/processor/image/${handleEndPoint(
    "watermark",
    inputType,
    responseFormat
  )}?output=${output ?? "output.png"}`;

  const formData = (): FormData => {
    const formData = new FormData();

    formData.append("image", input instanceof Buffer ? input : getFile(input), {
      filename: "image.png",
      contentType: "application/octet-stream",
    });
    formData.append(
      "watermark",
      watermark instanceof Buffer ? watermark : getFile(watermark),
      {
        filename: "watermark.png",
        contentType: "application/octet-stream",
      }
    );

    return formData;
  };
  return await client.request(
    "post",
    requestUrl,
    inputType === "file"
      ? formData()
      : { imageUrl: input, watermarkUrl: watermark }
  );
}

export { watermark };
