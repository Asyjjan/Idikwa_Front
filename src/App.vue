<template>
  <v-app>
    <v-app-bar app clipped-left dense flat color="primary" dark>
      <div class="d-flex">
        <v-img :src="require('./assets/Logo.png')" max-height="30" max-width="30"></v-img>
        Idikwa
      </div>
      <v-spacer></v-spacer>
      <v-icon dark> mdi-account-circle </v-icon>
    </v-app-bar>

    <v-container></v-container>

    <v-main class="text-center">
      <router-view v-on:authentifier="authentifier" />
    </v-main>
  </v-app>
</template>

<script>
import { variables } from "./plugins/fonctions";
export default {
  name: "App",
  data() {
    return {
      drawer: true,
      authentification: variables.authentifie,
      autorisation: variables.autorisation,
    };
  },
  methods: {
    deconnexion() {
      variables.authentifie = false;
      this.$router.push("/Connexion");
      this.authentification = false;
      this.autorisation = "";
    },
    authentifier() {
      this.authentification = variables.authentifie;
      this.autorisation = variables.autorisation;
    },
  },
  mounted() {
    this.authentification = variables.authentifie;
    this.autorisation = variables.autorisation;
  },
};
</script>

<style scoped>
.v-main {
  background-color:#111114;
}
</style>
