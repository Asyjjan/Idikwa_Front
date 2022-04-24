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
          <v-text-field
            label="Nom d'utilisateur"
            v-model="input.username"
          ></v-text-field>
          <v-text-field
            label="Mot de passe"
            v-model="input.password"
            type="password"
          ></v-text-field>
          <v-btn @click="login()" color="grey darken-3">Connexion</v-btn>
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
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      dialogueConnexion: false,
      snakbar_text: "",
      snak_visible: false,
    };
  },
  methods: {
    initiliser() {
      this.dialogueConnexion = true;
    },
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (this.input.username == "root" && this.input.password == "root") {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "Accueil" });
          this.dialogueConnexion = false;
        } else {
          console.log("The username and / or password is incorrect");
          this.snackbarVisible(
            "Le nom d'utilisateur ou le mot de passe sont incorrect."
          );
        }
      } else {
        console.log("A username and password must be present");
        this.snackbarVisible("Veuillez remplir tous les champs.");
      }
    },
    snackbarVisible(text) {
      this.snakbar_text = text;
      this.snak_visible = true;
    },
  },
  mounted() {
    this.initiliser();
  },
};
</script>

<style scoped>
#v-sheet {
  margin: auto;
  margin-top: 200px;
}
</style>