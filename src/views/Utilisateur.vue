<template>
  <v-container dark>
    <h2 class="text-center">Votre profil {{ username }}</h2>
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
          Taille: {{ audio.size }}Ko
          <v-btn icon @click="download(audio.id)">
            <v-icon color="white">mdi-download</v-icon>
          </v-btn>
          <v-btn icon @click="getLink(audio.id)">
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
import config from "../config.json";

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
      return config.apiBaseUrl + "/audios/" + audio.id; // Requête pour récupérer un seul audio
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
