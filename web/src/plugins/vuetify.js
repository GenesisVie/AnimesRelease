import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#0CCFC8',
                secondary: '#CBF5DF',
                accent: '#11BCD0',
                error: '#C2BD1E',
            }
        }
    }
});
