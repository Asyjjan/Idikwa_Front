<template>
  <v-container dark>
    <h2 class="text-center">Voici tous vos enregistrements qui ont été upload</h2>
    <v-sheet height="1" width="100%" color="white" class="ml-0 pl-0 mt-15"></v-sheet>
    <div v-for="(unEnregistrement,e) in enregistrements" :key="e+50">
      <div class="d-flex">
        <v-col><h4>{{unEnregistrement.nom}}</h4></v-col>
        <v-col class="text-center">Date: {{unEnregistrement.date}}</v-col>
        <v-col class="text-right">Durée: {{unEnregistrement.duree}}s / Taille: {{unEnregistrement.taille}}Ko 
          <v-btn icon>
            <v-icon color="blue">mdi-export-variant</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="error">mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </div>
      <v-sheet height="1" width="100%" color="white" class="ml-0 pl-0"></v-sheet>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: "About",
  data() {
    return {
      enregistrements: [
        { nom: "test.mp3", date: "2022-02-28", duree: 10, taille: 50},
        { nom: "unautretest.mp3", date: "2022-03-01", duree: 60, taille: 600 },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>