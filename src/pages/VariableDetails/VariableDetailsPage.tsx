import { Link, Navigate, useParams } from "react-router-dom";

import { useVariables } from "../../hooks/useVariables";
import HtmlContent from "../../ui/HtmlContent";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";
import EmptyState from "../../ui/EmptyState";

import styles from "./VariableDetailsPage.module.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const VariableDetailsPage = () => {
  const { variableId } = useParams();

  const { data: variablesData, isPending, isError } = useVariables();

  const id = Number(variableId);

  const variable = variablesData?.Results.find(({ ID }) => ID === id);

  useDocumentTitle(variable?.Name ?? "Variable details");

  if (!variableId) {
    return <Navigate to="/variables" replace />;
  }

  if (isPending) {
    return <Loader />;
  }

  if (isError || !variablesData) {
    return <ErrorMessage />;
  }

  if (!variable) {
    return (
      <>
        <Link to="/variables" className={styles.back}>
          ← Back to variables
        </Link>

        <EmptyState message="Variable not found." />
      </>
    );
  }

  return (
    <>
      <Link to="/variables" className={styles.back}>
        ← Back to variables
      </Link>

      <h1 className={styles.title}>{variable.Name}</h1>

      <HtmlContent
        className={styles.description}
        content={variable.Description}
      />
    </>
  );
};

export default VariableDetailsPage;
