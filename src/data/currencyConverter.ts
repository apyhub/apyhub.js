import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";

/**
 * Converts an amount in one currency to another.
 * @param {Object} params - The parameters for the conversion.
 * @param {string} params.source - The source currency.
 * @param {string} params.target - The target currency.
 * @param {string} [params.date] - The date for the conversion (in the format "YYYY-MM-DD"). If not provided, the current date is used.
 * @return {Promise<{data: number}>} - A promise that resolves with an object containing the converted amount.
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
