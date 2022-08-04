import data from '../assets/data/channels.json';

export function getChannels() {
  return data;
}

export function getChannel(id) {
  return data.find((channel) => channel.id === id);
}
