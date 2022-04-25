import http from "./httpServices";

const audioUrl = "/audios";

export function findAllAudios() {
  return http.get(audioUrl);
}
export function loadAudio(id) {
  return http.get(audioUrl + "/" + id);
}
