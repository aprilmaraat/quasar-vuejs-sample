<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10" bordered>
      <q-toolbar class="constrain">
        <q-btn to="/camera" class="large-screen-only q-mr-sm" icon="eva-camera-outline" size="18px" flat round dense/>
        <q-separator class="large-screen-only" vertical spaced/>
        <q-toolbar-title class="text-grand-hotel text-bold">
          Quasargram
        </q-toolbar-title>
        <q-btn to="/" class="large-screen-only" icon="eva-home-outline" size="18px" flat round dense/>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white small-screen-only" bordered>
      <q-banner
        v-if="showAppInstallBanner"
        inline-actions
        class="text-white bg-primary">
        Install Quasargram?
        <template v-slot:action>
          <q-btn
            flat
            color="white"
            label="Install App" />
          <q-btn flat color="white" label="Close" />
        </template>
      </q-banner>
      <q-tabs class="text-grey-10" active-color="primary" indicator-color="transparent">
        <q-route-tab to="/" icon="eva-home-outline"/>
        <q-route-tab to="/camera" icon="eva-camera-outline"/>
      </q-tabs>
    </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

export default {
  name: 'MainLayout',
  data () {
    return {
      showAppInstallBanner: false
    }
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      this.showAppInstallBanner = true;
    });
  },
  methods: {
    installApp() {
      // Hide the app provided install promotion
      this.showAppInstallBanner = false
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.userChoice.then ((choiceResult) => {
        if (choiceResult.outcom === 'accepted'){
          console.log('Yes');
        } else {
          console.log('No');
        }
      });
    }
  }
}
</script>
<style lang="sass">
  .q-toolbar
    @media (min-width: $breakpoint-xs-max)
      height: 77px
  .q-toolbar__title
    @media (max-width: $breakpoint-xs-max)
      text-align: center
    font-size: 30px
  .q-footer
    .q-tab__icon
      font-size: 30px
</style>