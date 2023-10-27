<script>
export default {
  name: "TopArticles",
  props: {
    topArticles: Array
  },
  methods: {
    articleLink(articleId) {
      return `/article/${articleId}`;
    },
    formatDate(timestamp) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(timestamp); // Convert the timestamp to milliseconds
      return date.toLocaleDateString('en-US', options);
    }
  },
  data() {
    return {}
  },
  inject:['publicPath']
}
</script>

<template>
  <div class="font-bold text-xl mb-4 dark:text-gray-300">
    <h2>Top {{ topArticles.length }} articles</h2>
  </div>
  <div class="columns-1 md:columns-2 pb-4 mb-4 border-b dark:border-b-gray-900">
    <div v-for="(article, index) in topArticles" :key="index">
      <router-link :to="{ path: publicPath+articleLink(article.id)}">
        <div
            class="flex flex-col md:flex-row mb-3 gap-3 dark:hover:bg-slate-900 md:border dark:border-slate-900 p-2 md:hover:shadow-md md:hover:cursor-pointer md:rounded">
          <div class="w-full lg:w-28 h-40 md:h-24 overflow-hidden object-contain bg-cover rounded"
               style="background-image: url('https://tecdn.b-cdn.net/img/new/slides/041.webp')"></div>
          <div class="flex flex-col w-56">
            <div class="article-title mb-1">
              <h2 class="text-xs line-clamp-2 font-bold leading-tight dark:text-gray-300">{{ article.title }}</h2>
            </div>
            <div class="article-description line-clamp-3 mb-1">
              <h4 class="text-[10px] font-bold text-gray-400"
                  v-html="JSON.parse(article.json_content).blocks[0].data.text"></h4>
            </div>
            <div class="article-created-at">
              <h4 class="text-[9px] font-bold text-gray-400">
                {{ formatDate(article.createdAt) }}
              </h4>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>