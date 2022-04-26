import http from "./httpServices";
import config from "../config.json";
const audioUrl = "/audios";
const buildAudioUrl = (id) => {
  return audioUrl + "/" + id;
};
export function findAllAudios() {
  return http.get(audioUrl);
}
export function loadAudio(id) {
  return http.get(buildAudioUrl(id));
}

export function deleteAudio(id) {
  return http.delete(buildAudioUrl(id));
}
export function saveAudio(audio) {
  delete audio.id;
  return http.put(buildAudioUrl(audio.id), audio);
}
export function findAllMyAudios() {
  return http.get(audioUrl + "/me");
}
export function downloadAudio(id) {
  window.location.href = `${config.apiBaseUrl}${buildAudioUrl(id)}/dl`;
}
