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
      
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark> mdi-account-circle </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item value="Utilisateur" to="/Utilisateur">Profil</v-list-item>
        <v-list-item value="About" to="/About">A propos</v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>

    <v-main>
      <router-view v-on:authentifier="authentifier" />
    </v-main>
    <v-footer class="text-center"><v-col class="font-weight-thin caption"> Site réalisé par: Louane PRAME, Alexis SEHY, Nathan HANEN, Kévin ROSSI et Sylvio GYSONY</v-col></v-footer>
  </v-app>
</template>

<script>
import { variables } from "./plugins/fonctions";
export default {
  name: "App",
  data() {
    return {
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
