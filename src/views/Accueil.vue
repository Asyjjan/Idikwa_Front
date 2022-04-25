<template>
  <v-container dark>
    <h2 class="text-center">
      Voici tous vos enregistrements qui ont été upload
    </h2>
    <v-sheet
      height="1"
      width="100%"
      color="white"
      class="ml-0 pl-0 mt-15"
    ></v-sheet>
    <div v-for="(audio, a) in audios" :key="a.id">
      <div class="d-flex">
        <v-col
          ><h4>{{ audio.title }}</h4></v-col
        >
        <v-col class="text-center">Date: {{ audio.createdAt }}</v-col>
        <v-col>
          <audio controls :src="getAudioUrl(audio)"></audio>
        </v-col>
        <v-col class="text-right"
          >Durée: {{ audio.duree }}s / Taille: {{ audio.taille }}Ko
          <v-btn icon @click="download(audio.id)">
            <v-icon color="white">mdi-download</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="blue">mdi-export-variant</v-icon>
          </v-btn>
          <v-btn icon @click="deleteAudio(audio.id)">
            <v-icon color="error">mdi-delete</v-icon>
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
import {
  findAllAudios,
  deleteAudio,
  downloadAudio,
} from "../services/audioService";
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
      return "http://localhost:3000/api/audios/" + audio.id; // Requête pour récupérer un seul audio
    },
    deleteAudio: async function (id) {
      try {
        await deleteAudio(id);
      } catch (ex) {
        console.log(ex);
      }
    },
    download: async function (id) {
      downloadAudio(id);
    },
  },
  async mounted() {
    const { data } = await findAllAudios();
    this.audios = data;
  },
};
</script>
