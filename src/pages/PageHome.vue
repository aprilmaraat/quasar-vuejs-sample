<template>
  <q-page class="constrain q-pa-md">
    <q-card class="card-post">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>dawnblaze</q-item-label>
          <q-item-label caption>Philippines</q-item-label>
        </q-item-section>
      </q-item>

      <!-- <img src="https://cdn.quasar.dev/img/parallax2.jpg"> -->
      <q-separator />

      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

      <q-card-section>
        <div>Golden Gate Bridge</div>
        <div class="text-caption text-grey">May 4, 2021</div>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome'
}
</script>
<style lang="sass">
  .card-post
    .q-img
      min-height: 200px
</style>