import { useMutation } from "@tanstack/react-query";
import { decodeVin } from "../api/vin";

export const useDecodeVin = () =>
  useMutation({
    mutationFn: decodeVin,
  });
