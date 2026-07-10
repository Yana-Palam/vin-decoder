import { useState } from "react";

import DecodeResult from "../../components/DecodeResult";
import History from "../../components/History";
import Section from "../../components/Section";
import VinForm from "../../components/VinForm";

import { useDecodeVin } from "../../hooks/useDecodeVin";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

import { getHistory, saveHistory } from "../../services/history";

import { getApiMessage } from "../../utils/getApiMessage";
import { getDecodedValues } from "../../utils/getDecodedValues";

import Alert from "../../ui/Alert";
import ErrorMessage from "../../ui/ErrorMessage";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const [history, setHistory] = useState<string[]>(getHistory());
  const [selectedVin, setSelectedVin] = useState("");

  useDocumentTitle();

  const decodeVinMutation = useDecodeVin();

  const decodedItems = decodeVinMutation.data
    ? getDecodedValues(decodeVinMutation.data.Results)
    : [];

  const apiMessage = decodeVinMutation.data
    ? getApiMessage(decodeVinMutation.data.Message)
    : null;

  const handleDecode = (vin: string) => {
    decodeVinMutation.mutate(vin, {
      onSuccess: () => {
        setHistory(saveHistory(vin));
        setSelectedVin(vin);
      },
    });
  };

  const handleHistorySelect = (vin: string) => {
    setSelectedVin(vin);
    handleDecode(vin);
  };

  return (
    <>
      <h1 className={styles.title}>VIN Decoder</h1>

      <p className={styles.description}>
        Decode a vehicle identification number using the NHTSA public API.
      </p>

      {apiMessage && <Alert message={apiMessage} />}

      {decodeVinMutation.isError && (
        <ErrorMessage message="Unable to decode VIN." />
      )}

      <div className={styles.sections}>
        <Section title="VIN">
          <VinForm
            vin={selectedVin}
            onSubmit={handleDecode}
            isLoading={decodeVinMutation.isPending}
          />
        </Section>

        <Section title="Recent searches">
          <History items={history} onSelect={handleHistorySelect} />
        </Section>

        <Section title="Decoded information">
          <DecodeResult items={decodedItems} />
        </Section>
      </div>
    </>
  );
};

export default HomePage;
