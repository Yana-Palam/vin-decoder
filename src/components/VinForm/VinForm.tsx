import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../ui/Button";
import Input from "../../ui/Input";

import { vinSchema, type VinFormValues } from "../../schemas/vin";

import styles from "./VinForm.module.css";

interface VinFormProps {
  vin?: string;
  isLoading?: boolean;
  onSubmit: (vin: string) => void;
}

const VinForm = ({ vin, onSubmit, isLoading = false }: VinFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VinFormValues>({
    resolver: zodResolver(vinSchema),
    defaultValues: {
      vin: vin ?? "",
    },
  });

  useEffect(() => {
    reset({
      vin: vin ?? "",
    });
  }, [vin, reset]);

  const handleFormSubmit = (data: VinFormValues) => {
    onSubmit(data.vin);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
    >
      <label htmlFor="vin" className={styles.label}>
        Vehicle Identification Number
      </label>

      <div className={styles.inputWrapper}>
        <Input
          id="vin"
          aria-invalid={!!errors.vin}
          aria-describedby={errors.vin ? "vin-error" : undefined}
          placeholder="Enter VIN"
          autoComplete="off"
          {...register("vin")}
        />

        {errors.vin && (
          <p id="vin-error" className={styles.error}>
            {errors.vin.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Decoding..." : "Decode"}
      </Button>
    </form>
  );
};

export default VinForm;
