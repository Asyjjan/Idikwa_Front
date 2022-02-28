import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import fr from "vuetify/lib/locale/fr";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { fr },
    current: "fr",
  },
  theme: {
    dark:true,
    themes: {
      dark: {
        primary: "#575761",
        secondary: "#73737e",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});
