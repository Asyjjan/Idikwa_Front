<template>
  <v-container dark>
    <h2 class="text-center">Votre profil {{ username }}</h2>
    <div v-if="premium == 1">
      <h4>Vous êtes Premium</h4>
    </div>
    <div v-else>
      <h4>Vous n'êtes par encore Premium</h4>
      C'est ici pour devenir Premium
      <v-btn @click="premium = 1">Clique ici</v-btn>
    </div>
    <h2 class="text-center">Voici tous vos enregistrements upload</h2>
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
  findAllMyAudios,
  deleteAudio,
  downloadAudio,
} from "../services/audioService";
import { getCurrentUser } from "../services/authService";
// @ is an alias to /src
export default {
  name: "About",
  data() {
    return {
      username: "",
      premium: 0,
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
    formatDate: function (date) {
      return new Date(date).toISOString().slice(0, 19).replace("T", " ");
    },
  },
  async mounted() {
    const user = getCurrentUser();
    this.username = user.username;
    this.premium = user.premium;
    const { data } = await findAllMyAudios();
    this.audios = data;
  },
};
</script>
