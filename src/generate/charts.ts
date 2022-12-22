import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";

/**
 * Generates a chart image from data and chart options.
 * @param {Object} params - The parameters for the chart generation.
 * @param {"file"|"url"} params.responseFormat - The desired response format.
 * @param {"bar"|"pie"|"stacked"} params.chartType - The type of chart to generate.
 * @param {string} [params.output] - The desired file name for the output chart image.
 * @param {Object} params.options - The chart options.
 * @param {string} params.options.title - The chart title.
 * @param {"light"|"dark"} params.options.theme - The chart theme.
 * @param {Array<{value: number, label: string}>} params.options.data - The data for the chart.
 * @return {Promise<{data: string}>} - A promise that resolves with an object containing the resulting chart image file or URL as a string.
 */
async function charts({
  responseFormat,
  chartType,
  options,
  output,
}: {
  responseFormat: "file" | "url";
  chartType: "bar" | "pie" | "stacked";
  output?: string;
  options: {
    output?: string;
    title: string;
    theme: "light" | "dark";
    data: Array<{ value: number; label: string }>;
  };
}): Promise<{ data: string }> {
  const client = getInstance();
  console.log(options);
  const { title, theme, data } = options;

  checkMissingParams({ responseFormat, chartType, options, data });
  checkParamTypes({ responseFormat }, ["file", "url"]);
  checkParamTypes({ chartType }, ["bar", "pie", "stacked"]);
  checkParamTypes({ theme }, ["light", "dark"]);

  const url = `https://api.apyhub.com/generate/charts/${chartType}/${responseFormat}?output=${output ??
    "output.png"}`;
  const payload = {
    title,
    theme: theme[0].toUpperCase() + theme.slice(1),
    data,
  };
  console.log(payload);
  return await client.request("post", url, payload);
}

export { charts };
