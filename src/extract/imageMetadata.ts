import { getInstance } from '../ApyClient';
import { checkMissingParams } from '../utils/checkMissingParams';
import { getFormData } from '../utils/getFormData';
import { isFileOrUrl } from '../utils/isFileOrUrl';

/**
 * Extracts metadata from an image.
 *
 * @param {string | File | Blob} image - The image file or URL.
 * @returns {Promise<{data: string}>} A promise that resolves to the metadata for the image.
 */
async function imageMetadata(image: string): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({ image });

  const inputType = isFileOrUrl(image) === 'file' ? 'file' : 'file-urls';
  // const contentType =
  //   inputType === "file" ? "multipart/form-data" : "application/json";

  const url = `https://api.apyhub.com/processor/image/metadata/${inputType}`;

  return await client.request(
    'post',
    url,
    inputType === 'file' ? getFormData(image, 'image') : { url: image }
    // { headers: { "Content-Type": contentType } }
  );
}

export { imageMetadata };