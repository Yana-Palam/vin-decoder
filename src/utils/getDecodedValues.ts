import type { DecodeVinItem } from "../types/api";

export const getDecodedValues = (results: DecodeVinItem[]) => {
  return results.filter(({ Value }) => Value !== null && Value.trim() !== "");
};
