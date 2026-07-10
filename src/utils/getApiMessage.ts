export const getApiMessage = (message: string) => {
  return message.split("NOTE:")[0].trim();
};
