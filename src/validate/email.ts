import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";

/**
 * Validates an email address.
 *
 * @example
 *   const { validate } = require("apyhub");
 *
 *   const email = async () => {
 *     const data = await validate.email({
 *       email: "hello@apyhub.com",
 *       checkType: "dns",
 *     });
 *     return data;
 *   };
 *
 * @param {Object} options - The options for the function.
 * @param {string} options.email - The email address to validate.
 * @param {"dns" | "academic"} options.checkType - The type of validation to
 *   perform. Can be either "dns" or "academic".
 * @returns {Promise<{ data: boolean }>} - A promise that resolves to an object
 *   with the validation result.
 * @link https://apyhub.com/utility/validator-dns-email
 * @link https://apyhub.com/utility/validator-academic-email
 */
async function email({
  email,
  checkType,
}: {
  email: string;
  checkType: "dns" | "academic";
}): Promise<{ data: boolean }> {
  const client = getInstance();
  checkMissingParams({ email, checkType });
  checkParamTypes({ checkType }, ["dns", "academic"]);

  const url = `https://api.apyhub.com/validate/email/${checkType}`;
  return await client.request("post", url, { email });
}

export { email };
