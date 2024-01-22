export const truncateText = (str: string) => {
    return str.length > 25 ? str.substring(0, 25) + "..." : str;
  };