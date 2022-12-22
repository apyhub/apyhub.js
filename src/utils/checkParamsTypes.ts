export const checkParamTypes = (
  params: Record<string, any>,
  values: string | string[]
): void => {
  // check if the `values` parameter is a string or an array of strings
  const stringValues = typeof values === "string" ? [values] : values;

  // check if all the values in `params` are strings and are equal to one of the values in `values`
  const invalidParams = Object.entries(params).filter(
    ([, value]) => typeof value !== "string" || !stringValues.includes(value)
  );

  if (invalidParams.length > 0) {
    const errorMessage = `Invalid parameters: ${invalidParams
      .map(([key]) => key)
      .join(", ")}. \nSupported values are: ${stringValues.join(", ")}`;
    throw new Error(errorMessage);
  }
};
