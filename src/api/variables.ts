import { apiClient } from "./client";
import type { VehicleVariablesResponse } from "../types/api";

export const getVariables = async (): Promise<VehicleVariablesResponse> => {
  const { data } = await apiClient.get<VehicleVariablesResponse>(
    "/vehicles/GetVehicleVariableList?format=json",
  );

  return data;
};
