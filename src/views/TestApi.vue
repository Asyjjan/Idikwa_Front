<template>
  <v-container dark>
    <ul>
      <li v-for="audio in info" :key="audio.id">
        <audio controls :src="getAudioUrl(audio)"></audio>
      </li>
    </ul>
  </v-container>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      info: null,
    };
  },
  methods: {
    getAudioUrl: function (audio) {
      return "http://localhost:3000/api/audios/" + audio.id; // Requête pour récupérer un seul audio
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/audios") // Récupère la liste de tous les audios
      .then((response) => (this.info = response.data));
  },
};
</script>
