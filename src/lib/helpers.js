
export const formatCurrency = (amount, currency) => {
  const numericAmount = Number(amount) || 0;

  if (!currency) {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericAmount);
  }

  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase().trim(),
    }).format(numericAmount);
  } catch (error) {
    console.error("Error formatting currency:", error);
    const formattedAmount = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericAmount);
    return `${formattedAmount} ${currency}`;
  }
};