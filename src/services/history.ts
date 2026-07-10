import { STORAGE_KEYS } from "../constants/storage";

const MAX_HISTORY_ITEMS = 3;

export const getHistory = (): string[] => {
  const history = localStorage.getItem(STORAGE_KEYS.vinHistory);

  if (!history) {
    return [];
  }

  try {
    return JSON.parse(history);
  } catch {
    return [];
  }
};

export const saveHistory = (vin: string): string[] => {
  const history = getHistory();

  const updatedHistory = [vin, ...history.filter((item) => item !== vin)].slice(
    0,
    MAX_HISTORY_ITEMS,
  );

  localStorage.setItem(STORAGE_KEYS.vinHistory, JSON.stringify(updatedHistory));

  return updatedHistory;
};
