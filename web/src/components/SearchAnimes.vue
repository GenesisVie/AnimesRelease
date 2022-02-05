<template>
  <v-container>
    <v-row class="text-center">
      <v-col
          cols="12"
      >
        <v-text-field
            label="Type a anime title ..."
            color="primary"
            v-model="queryTitle"/>
        <strong v-if="notFound">Not found</strong>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios'

export default {
  name: 'SearchAnimes',

  data: () => ({
    queryTitle: '',
    animesList: [
      {
        id: String,
        attributes: {
          createdAt: '',
          updatedAt: Date,
          slug: String,
          synopsis: String,
          description: String,
          coverImageTopOffset: Number,
          titles: {},
          canonicalTitle: String,
          abbreviatedTitles: String,
          averageRating: String,
          userCount: Number,
          favoritesCount: Number,
          startDate: String,
          endDate: String,
          nextRelease: undefined,
          popularityRank: Number,
          ratingRank: Number,
          ageRating: String,
          ageRatingGuide: String,
          subtype: String,
          status: String,
          tba: String,
          posterImage: {},
          coverImage: {},
          episodeCount: Number,
          episodeLength: Number,
          totalLength: Number,
          youtubeVideoId: String,
          showType: String,
          nsfw: Boolean,
        }
      }
    ],
    notFound: false
  }),
  watch: {
    queryTitle: function (val) {
      this.fetchAnimes(val)
    }
  },
  methods: {
    async fetchAnimes(q) {
      await axios
          .get(`http://localhost:3000/animes/title/${q}`)
          .then(
              (res) => {
                this.notFound = false
                this.animesList = res.data.message
              }
          )
          .catch(() => {
            this.notFound = true
          })
      this.animesList.map((item) => {
        console.log(item.attributes);
      })
      this.$emit('Animes', this.animesList)
    }
  }
}
</script>
