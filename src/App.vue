<template>
  <v-app>
    <v-app-bar app clipped-left dense flat color="primary" dark>
      <v-btn value="Accueil" to="/Accueil" text>
        <div class="d-flex">
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
          <v-btn icon dark v-bind="attrs" v-on="on">
            <v-icon dark> mdi-account-circle </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item value="Utilisateur" to="/Utilisateur"
            ><v-icon color="blue">mdi-account-circle</v-icon>
            Profil</v-list-item
          >
          <v-list-item value="About" to="/About"
            ><v-icon color="blue">mdi-information-outline</v-icon> A
            propos</v-list-item
          >
          <v-list-item
            v-if="authenticated"
            to="/login"
            v-on:click.native="logout()"
            replace
          >
            <v-icon color="error">mdi-power-standby</v-icon
            >Deconnexion</v-list-item
          >
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view @authenticated="setAuthenticated" />
    </v-main>
    <v-footer class="text-center"
      ><v-col class="font-weight-thin caption">
        Site réalisé par: Louane PRAME, Alexis SEHY, Nathan HANEN, Kévin ROSSI
        et Sylvio GYSONY</v-col
      ></v-footer
    >
  </v-app>
</template>

<script>
import { getCurrentUser, logout } from "./services/authService";
export default {
  name: "App",
  data() {
    return {
      authenticated: null,
      mockAccount: {
        username: "root",
        password: "root",
      },
    };
  },
  mounted() {
    this.authenticated = getCurrentUser();
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    logout() {
      logout();
      this.$router.replace({ name: "login" });
    },
    setAuthenticated(status) {
      this.authenticated = status;
    },
  },
};
</script>

<style>
body {
  background-color: #f0f0f0;
}
h1 {
  padding: 0;
  margin-top: 0;
}
.v-main {
  background-color: #111114;
}
</style>
