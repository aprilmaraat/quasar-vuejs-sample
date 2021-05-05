<template>
  <q-page class="constrain q-pa-md">

    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-8">
        <q-card
          v-for="post in posts"
          :key="post.id"
          class="card-post q-mb-md"
          bordered
          flat
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar5.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>dawnblaze</q-item-label>
              <q-item-label caption>{{ post.location }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-img :src="post.imgUrl" />

          <q-card-section>
            <div>{{ post.caption }}</div>
            <div class="text-caption text-grey">{{ post.date | niceDate }}</div>
          </q-card-section>

        </q-card>
      </div>
      <div class="col-12 col-md-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar size="48px">
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>dawnblaze</q-item-label>
            <q-item-label caption>Carcar City, Cebu, Philippines</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'PageHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'Lumina Homes',
          date: 1620181387741,
          location: 'Carcar',
          imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 2,
          caption: 'Camella Homes',
          date: 1620181387741,
          location: 'Talisay',
          imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 3,
          caption: 'Happy Homes',
          date: 1620181387741,
          location: 'Lapulapu',
          imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        }
      ]
    }
  },
  filters: {
    niceDate(value){
      return date.formatDate(value, 'MMMM D, YYYY h:mm A')
    }
  },
}
</script>
<style lang="sass">
  .card-post
    .q-img
      min-height: 200px
</style>