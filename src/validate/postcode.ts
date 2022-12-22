import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
// generate jsdocs for the postcode validator

/**
 * Validates a postcode.
 * @param {Object} options - The options for the function.
 * @param {string} options.postcode - The postcode to validate.
 * @param {"in"|"uk"} options.countryCode - The country code of the postcode. Can be either "in" or "uk".
 * @returns {Promise<{data: boolean}>} - A promise that resolves to an object with the validation result.
 */
async function postcode({
  postcode,
  countryCode,
}: {
  postcode: string;
  countryCode: "in" | "uk";
}): Promise<{ data: boolean }> {
  const client = getInstance();
  checkMissingParams({ postcode, countryCode });
  checkParamTypes({ countryCode }, ["in", "uk"]);

  const url = `https://api.apyhub.com/validate/email/postcodes/${countryCode.toLowerCase()}`;
  return await client.request("post", url, { postcode });
}

export { postcode };