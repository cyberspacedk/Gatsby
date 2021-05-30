const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatMoney = (cents) => formatter.format(cents / 100);
