<template>
  <v-app>
    <v-app-bar app clipped-left dense flat color="primary" dark>
      <v-btn value="Accueil" to="/" text>
        <div  value="Accueil" to="/" class="d-flex">
          <v-img
            :src="require('./assets/Logo.png')"
            max-height="30"
            max-width="30"
          ></v-img>
          <h4>Idikwa</h4>
        </div>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn value="About" to="/About" text>A propos</v-btn>
      <v-icon dark> mdi-account-circle </v-icon>
    </v-app-bar>

    <v-main>
      <router-view v-on:authentifier="authentifier" />
    </v-main>
    <v-footer> A propos</v-footer>
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
  background-color: #111114;
}
</style>
