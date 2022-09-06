/* eslint-disable no-param-reassign */
const setTime = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const dateSet = new Date(timestamp);

  return dateSet.toLocaleDateString('en-US', options);
};

export default setTime;
