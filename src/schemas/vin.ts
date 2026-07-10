import { z } from "zod";
import {
  VIN_LENGTH,
  VIN_REGEX,
  VALIDATION_MESSAGES,
} from "../constants/validation";

export const vinSchema = z.object({
  vin: z
    .string()
    .trim()
    .min(1, VALIDATION_MESSAGES.required)
    .length(VIN_LENGTH, VALIDATION_MESSAGES.invalidLength)
    .regex(VIN_REGEX, VALIDATION_MESSAGES.invalidCharacters),
});

export type VinFormValues = z.infer<typeof vinSchema>;
