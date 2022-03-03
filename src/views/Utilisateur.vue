<template>
  <v-container dark>
      <h2 class="text-center">Votre profil {{nom}}</h2>
      <div v-if="premuim==1">
        <h4>Vous êtes Premuim </h4>
      </div>
      <div v-else>
          <h4>Vous n'êtes par encore Premuim</h4>
          C'est ici pour devenir Premuim
          <v-btn @click="premuim=1">Clique ici</v-btn>
      </div>
      <div>Vous avez upload {{nbson}} qui pèse {{poidson}}Ko, vous pouvez encore upload {{espaceDisponible}}Ko</div>
      
  </v-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: "About",
  data() {
    return {
      nom: "Manmeni", 
      premuim:1, 
      nbson:2, 
      poidson:650, 
      espaceDisponible: 350,
    };
  },
  methods: {},
  mounted() {},
};
</script>