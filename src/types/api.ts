export interface DecodeVinItem {
  Value: string | null;
  ValueId: string | null;
  Variable: string;
  VariableId: number;
}

export interface DecodeVinResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: DecodeVinItem[];
}

export interface VehicleVariable {
  ID: number;
  Name: string;
  Description: string;
}

export interface VehicleVariablesResponse {
  Count: number;
  Message: string;
  Results: VehicleVariable[];
}
