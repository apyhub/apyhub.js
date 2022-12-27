import { getInstance } from "../ApyClient";

/**
 *  Fuzzy search.
 * @param {Object} options - The options for the function.
 * @param {string} options.source - The source text.
 * @param {string} options.target - The target text.
 * @param {boolean} [options.unicodeNormalized] - Whether the text is unicode normalized. Default is false.
 * @returns {Promise<{data: string}|undefined>} - A promise that resolves to an object with the fuzzy search result, or undefined if the response format is invalid.
 */
async function fuzzy({
  source,
  target,
  unicodeNormalized = false,
}: {
  source?: string;
  target?: string;
  unicodeNormalized?: boolean;
}): Promise<{ data: string } | undefined> {
  const client = getInstance();

  const requestUrl = `https://api.apyhub.com/search/text/fuzzy?unicode-normalized=${unicodeNormalized.toString()}`;

  return await client.request(
    "post",
    requestUrl,
    {
      source,
      target,
    },
    { headers: { "Content-Type": "application/json" } }
  );
}

export { fuzzy };
