export const VIN_LENGTH = 17;

export const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/;

export const VALIDATION_MESSAGES = {
  required: "VIN is required.",
  invalidLength: `VIN must contain exactly ${VIN_LENGTH} characters.`,
  invalidCharacters: "VIN contains invalid characters.",
} as const;
