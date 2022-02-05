<template>
  <v-app>
    <SearchAnimes @Animes="animes"/>
    <ListAnimes :animes="listAnimes"/>
  </v-app>
</template>

<script>
import SearchAnimes from "../components/SearchAnimes";
import ListAnimes from "../components/ListAnimes";

export default {
  name: 'Home',
  components: {
    SearchAnimes,
    ListAnimes,
  },
  data () {
    return {
      listAnimes: []
    }
  },
  methods: {
    animes(data) {
      this.listAnimes = data
    }
  }
}
</script>
