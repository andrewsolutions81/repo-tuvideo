/* donation actions */
export const setDonation = (donation) => ({
  type: 'SET_DONATION', // esto tiene que ser como el reducer
  payload: donation,
});
export const clearDonations = () => ({
  type: 'CLEAR_DONATIONS',
});
