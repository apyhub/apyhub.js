import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";

/**
 * Converts an amount in one currency to another.
 *
 * @example
 *   import { data } from "apyhub";
 *
 *   const currencyConverter = async () => {
 *     const response = await data.currencyConverter({
 *       source: "USD",
 *       target: "EUR",
 *       date: "2021-01-01",
 *     });
 *     return response;
 *   };
 *
 * @param {Object} params - The parameters for the conversion.
 * @param {string} params.source - The source currency.
 * @param {string} params.target - The target currency.
 * @param {string} [params.date] - The date for the conversion (in the format
 *   "YYYY-MM-DD"). If not provided, the current date is used.
 * @returns {Promise<{ data: number }>} - A promise that resolves with an object
 *   containing the converted amount.
 * @link https://apyhub.com/utility/currency-conversion
 */
async function currencyConverter({
  source,
  target,
  date,
}: {
  // TODO - add typescript types for all currencies
  source: string;
  target: string;
  date?: string;
}): Promise<{ data: number }> {
  const client = getInstance();
  checkMissingParams({ source, target });

  const url = `https://api.apyhub.com/data/convert/currency`;

  const body = {
    source: source.toLowerCase(),
    target: target.toLowerCase(),
    date,
  };

  return await client.request("post", url, body);
}

export { currencyConverter };
