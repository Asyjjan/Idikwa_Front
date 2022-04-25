<template>
  <v-container class="d-flex">
    <v-dialog v-model="dialogueConnexion" persistent width="500px">
      <v-card>
        <v-card-title>
          Connexion
          <v-spacer></v-spacer>
          <v-img
            :src="require('../assets/Logo.png')"
            max-height="30"
            max-width="30"
          ></v-img>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Email" v-model="input.email"></v-text-field>
          <v-text-field
            label="Mot de passe"
            v-model="input.password"
            type="password"
          ></v-text-field>
          <v-btn @click="login()" color="grey darken-3">Connexion</v-btn>
          <router-link :to="`/register`">Inscription</router-link>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snak_visible"
      >{{ snakbar_text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          timeout="5100"
          v-bind="attrs"
          @click="snak_visible = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { getCurrentUser, login } from "../services/authService";
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
      dialogueConnexion: false,
      snakbar_text: "",
      snak_visible: false,
    };
  },
  methods: {
    initialiser() {
      this.dialogueConnexion = true;
    },
    async login() {
      try {
        await login(this.input.email, this.input.password);
        this.$router.replace({ name: "Accueil" });
        this.dialogueConnexion = false;
      } catch (ex) {
        this.snackbarVisible("L'email ou le mot de passe sont incorrect.");
      }
      if (this.input.email == "" || this.input.password == "") {
        this.snackbarVisible("Veuillez remplir tous les champs.");
      }
    },
    snackbarVisible(text) {
      this.snakbar_text = text;
      this.snak_visible = true;
    },
  },
  mounted() {
    if (getCurrentUser() !== null) this.$router.replace({ name: "Accueil" });
    this.initialiser();
  },
};
</script>

<style scoped>
#v-sheet {
  margin: auto;
  margin-top: 200px;
}
</style>
