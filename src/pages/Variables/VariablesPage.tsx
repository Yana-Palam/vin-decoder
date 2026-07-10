import { useState } from "react";
import VariableList from "../../components/VariableList";
import { useVariables } from "../../hooks/useVariables";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import Input from "../../ui/Input";
import ErrorMessage from "../../ui/ErrorMessage";
import Loader from "../../ui/Loader";
import EmptyState from "../../ui/EmptyState";
import styles from "./VariablesPage.module.css";

const VariablesPage = () => {
  const { data: variablesData, isPending, isError } = useVariables();
  const [search, setSearch] = useState("");

  useDocumentTitle("Variables");

  const query = search.trim().toLowerCase();

  const filteredVariables = variablesData
    ? variablesData.Results.filter(({ Name, Description }) => {
        if (!query) {
          return true;
        }

        return (
          Name.toLowerCase().includes(query) ||
          Description.toLowerCase().includes(query)
        );
      })
    : [];

  if (isPending) {
    return <Loader />;
  }

  if (isError || !variablesData) {
    return <ErrorMessage />;
  }

  return (
    <>
      <h1 className={styles.title}>Vehicle Variables</h1>

      <p className={styles.description}>
        Browse all available vehicle variables provided by the NHTSA API.
      </p>
      <Input
        className={styles.search}
        type="search"
        placeholder="Search variables..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <p className={styles.counter}>
        Showing {filteredVariables.length} of {variablesData.Count} variables
      </p>

      {filteredVariables.length ? (
        <VariableList items={filteredVariables} />
      ) : (
        <EmptyState message="No variables found." />
      )}
    </>
  );
};

export default VariablesPage;
