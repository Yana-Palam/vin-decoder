import { useEffect } from "react";

const APP_NAME = "VIN Decoder";

export const useDocumentTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} | ${APP_NAME}` : APP_NAME;
  }, [title]);
};
