<template>
  <v-container dark>
    <h2 class="text-center">Voici tous les enregistrements publics upload</h2>
    <v-sheet
      height="1"
      width="100%"
      color="white"
      class="ml-0 pl-0 mt-15"
    ></v-sheet>
    <div v-for="(audio, a) in audios" :key="a.id">
      <div class="d-flex">
        <v-col
          ><h4>{{ audio.title }}</h4>
          <p>{{ audio.description }}</p></v-col
        >
        <v-col class="text-center"
          >Date: {{ formatDate(audio.createdAt) }}</v-col
        >
        <v-col>
          <audio controls :src="getAudioUrl(audio)"></audio>
        </v-col>
        <v-col class="text-right">
          Taille: {{ Math.trunc(audio.size) }}Ko
          <v-btn icon @click="download(audio.id)">
            <v-icon color="white">mdi-download</v-icon>
          </v-btn>
          <v-btn icon @click="getLink(audio.id)">
            <v-icon color="blue">mdi-export-variant</v-icon>
          </v-btn>
        </v-col>
      </div>
      <v-sheet
        height="1"
        width="100%"
        color="white"
        class="ml-0 pl-0"
      ></v-sheet>
    </div>
  </v-container>
</template>

<script>
import { findAllAudios, downloadAudio } from "../services/audioService";
import config from "../config.json";
// @ is an alias to /src
export default {
  name: "About",
  data() {
    return {
      audios: [],
    };
  },
  methods: {
    getAudioUrl: function (audio) {
      return config.apiBaseUrl + "/audios/" + audio.id; // Requête pour récupérer un seul audio
    },

    download: async function (id) {
      downloadAudio(id);
    },
    formatDate: function (date) {
      return new Date(date).toISOString().slice(0, 19).replace("T", " ");
    },
    getLink: function (id) {
      navigator.clipboard.writeText(`${config.apiBaseUrl}/audios/${id}`).then(
        () => {
          alert("Copied");
        },
        (error) => {
          alert(error);
        }
      );
    },
  },
  async mounted() {
    const { data } = await findAllAudios();
    this.audios = data;
  },
};
</script>
