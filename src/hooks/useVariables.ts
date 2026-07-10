import { useQuery } from "@tanstack/react-query";
import { getVariables } from "../api/variables";

export const useVariables = () =>
  useQuery({
    queryKey: ["variables"],
    queryFn: getVariables,
  });
