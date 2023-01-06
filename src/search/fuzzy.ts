import { getInstance } from "../ApyClient";

/**
 * Fuzzy search.
 *
 * @example
 *   const { search } = require("apyhub");
 *
 *   const fuzzy = async () => {
 *     const data = await search.fuzzy({
 *       source: "taching",
 *       target: "teaching is the best qualifying compare another profession",
 *       unicodeNormalized: false,
 *     });
 *     return data;
 *   };
 *
 * @param {Object} options - The options for the function.
 * @param {string} options.source - The source text.
 * @param {string} options.target - The target text.
 * @param {boolean} [options.unicodeNormalized] - Whether the text is unicode
 *   normalized. Default is false.
 * @returns {Promise<{ data: string } | undefined>} - A promise that resolves to
 *   an object with the fuzzy search result, or undefined if the response format
 *   is invalid.
 * @link https://apyhub.com/utility/search-fuzzy-text
 */
async function fuzzy({
  source,
  target,
  unicodeNormalized = false,
}: {
  source: string;
  target: string;
  unicodeNormalized?: boolean;
}): Promise<{ data: string[] } | undefined> {
  const client = getInstance();

  const requestUrl = `https://api.apyhub.com/search/text/fuzzy?unicode-normalized=${unicodeNormalized.toString()}`;

  // return empty array if source or target is empty string
  if (!source || !target) {
    return { data: [] };
  }

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
