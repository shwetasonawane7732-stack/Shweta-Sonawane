/**
 * Indian Rupee (INR) currency formatting utility
 * Formats numbers according to Indian numbering standards (e.g., ₹1,49,000)
 */
export const formatINR = (amount: number): string => {
  return `₹${Math.round(amount).toLocaleString('en-IN')}`;
};
