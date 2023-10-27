<script>

import TopNavBar from "@/components/TopNavBar.vue";

export default {
  components: {TopNavBar},
  props: {
    currentActiveLeftNav: String,
    setCurrentActiveLeftNav: Function
  }
}
</script>

<template>
  <div class="pb-20 md:pb-0 md:pl-20">
    <top-nav-bar></top-nav-bar>
    <div class="px-0 sm:px-4 dark:bg-midnight dark:text-slate-500">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<style scoped>

</style>