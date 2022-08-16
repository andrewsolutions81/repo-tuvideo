import data from '../assets/data/channels.json';

const BASE_URL = 'https://tuvideo-backend.herokuapp.com/api';

export async function getChannels() {
  const result = fetch(`${BASE_URL}/channel`)
    .then((response) => response.json());
  return result;
}

export async function getChannel(id) {
  const result = await data.find((channel) => channel.id === id);
  return result;
}
