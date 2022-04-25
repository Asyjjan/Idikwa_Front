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
  </v-container>
</template>

<script>
import { getCurrentUser } from "../services/authService";
// @ is an alias to /src
export default {
  name: "About",
  data() {
    return {
      username: "",
      premium: 0,
    };
  },
  methods: {},
  mounted() {
    const user = getCurrentUser();
    this.username = user.username;
    this.premium = user.premium;
  },
};
</script>
