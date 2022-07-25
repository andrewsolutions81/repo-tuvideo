import data from '../assets/data/videos.json';

export function getVideos() {
  return data;
}

export function getVideo(id) {
  return data.find(video => video.id === id);
}
export function getVideoByCategory(category) {
  return data.find(video => video.category === category);
}

