<template>
  <div class="min-h-screen dark:bg-midnight">
    <left-nav-bar :is-production="isProductionMode" :current-active-left-nav="currentActiveLeftNav"
                  :set-current-active-left-nav="setCurrentActiveLeftNav"></left-nav-bar>
    <content-padded v-if="isDBLoaded" :current-active-left-nav="currentActiveLeftNav"
                    :set-current-active-left-nav="setCurrentActiveLeftNav">
    </content-padded>
    <overlay-box v-if="isSomethingUnderProcess" :lists="listOfProcess"></overlay-box>
  </div>
</template>

<script>

import ContentPadded from "@/components/ContentPaddedRouterView.vue";
import OverlayBox from "@/components/OverlayBox.vue";
import LeftNavBar from "@/components/LeftNavBar.vue";

export default {
  name: 'App',
  data() {
    return {
      currentActiveLeftNav: 'welcome',
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    setCurrentActiveLeftNav(name) {
      this.currentActiveLeftNav = name;
    }
  },
  computed: {
    isProductionMode() {
      return process.env.VUE_APP_PRODUCTION === 'true';
    },
    isDBLoaded() {
      return this.$store.state.isDBLoaded;
    },
    isSomethingUnderProcess() {
      return this.$store.state.processingList.length > 0;
    },
    listOfProcess() {
      return this.$store.state.processingList;
    }
  },
  components: {LeftNavBar, OverlayBox, ContentPadded},
  async created() {
    await this.$store.dispatch('initializeDB');
  },
  provide(){
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,300&family=Roboto:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap');
@import "bootstrap-icons";

</style>