import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";

// generate jsdocs for the vat validator

/**
 * Validates a VAT number.
 * @param {Object} options - The options for the function.
 * @param {string} options.vat - The VAT number to validate.
 * @returns {Promise<{data: boolean}>} - A promise that resolves to an object with the validation result.
 *
 * @example
 *
 * const { validate } = require("apyhub");
 *
 * const validateVat = async () => {
 *   const data = await validate.vat({
 *     vat: "GB123456789"
 *   });
 *   return data;
 * };
 */
async function vat(vat: string): Promise<{ data: boolean }> {
  const client = getInstance();
  checkMissingParams({ vat });
  const url = `https://api.apyhub.com/validate/vat`;
  return await client.request("post", url, { vat });
}

export { vat };
