import { apiClient } from "./client";
import type { DecodeVinResponse } from "../types/api";

export const decodeVin = async (vin: string): Promise<DecodeVinResponse> => {
  const { data } = await apiClient.get<DecodeVinResponse>(
    `/vehicles/DecodeVin/${vin}?format=json`,
  );

  return data;
};
