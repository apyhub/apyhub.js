export const checkMissingParams = (params: Record<string, any>): void => {
  const missingParams = Object.entries(params).filter(([, value]) => !value);
  if (missingParams.length > 0) {
    const errorMessage = `Missing parameters: ${missingParams
      .map(([key]) => key)
      .join(', ')}`;
    throw new Error(errorMessage);
  }
};
