<template>
  <v-container>
    <v-row class="text-center">
      <v-col
          cols="12"
      >
        <v-card
            elevation="8"
            shaped
            tile
        >
          <v-list>
            <template v-for="item in animes">
              <v-list-item :key="item.id">
                <v-list-item-content>
                  <v-row>
                    <v-col cols="1">
                      <v-img
                          :src="item.attributes.posterImage ? item.attributes.posterImage.small : ''"></v-img>
                    </v-col>
                    <v-col>
                      <v-list-item-title v-html="item.attributes.titles.en"></v-list-item-title>
                      <v-list-item-subtitle v-html="item.attributes.titles.en_jp"></v-list-item-subtitle>
                      <div>{{ item.attributes.nextRelease }}</div>
                    </v-col>
                    <v-col cols="1">
                      <div v-if="item.attributes.status === 'finished'">
                        <v-icon
                            color="secondary"
                            large>
                          mdi-calendar-check
                        </v-icon>
                      </div>
                      <div v-else-if="item.attributes.status === 'current'">
                        <v-icon
                            color="secondary"
                            large>
                          mdi-calendar-clock
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="item.id"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ListAnimes',
  props: {
    animes: [
      {
        id: String,
        attributes: {
          createdAt: '',
          updatedAt: Date,
          slug: String,
          synopsis: String,
          description: String,
          coverImageTopOffset: Number,
          titles: {
            en_jp: String,
            en: String
          },
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
          posterImage: {
            small: String
          },
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
  },
  data() {
    return {}
  },
}
</script>
