<template>
  <q-carousel
    id="carouselCard"
    v-model="slide02"
  >

    <q-carousel-slide :name="1" class="column no-wrap">
      <div class="row no-wrap">
        <div class="col-12 col-md-6 col-xl-3 q-pa-md" v-for="article in articles"
            :key="article._id" >
            <router-link :to="'/article/'+article._id" replace>
              <ArticleCard :article="article" />
            </router-link>
        </div>
      </div>
    </q-carousel-slide>

  </q-carousel>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue'

export default {
  name: 'CarouselCard',
  data () {
    return {
      articles: [],
      slide02: 1
    }
  },
  components: {
    ArticleCard
  },
  // methods: {
  //   showArticleCard () {
  //   }
  // },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/articles/show')
      this.articles = data.result.map(article => {
        if (article.image) {
          article.image = `${process.env.VUE_APP_API}/files/${article.image}`
        }
        return article
      })
    } catch (error) {
      console.log(error)
      this.$q.dialog({
        title: '錯誤',
        message: '取得文章失敗',
        color: 'red-13',
        ok: true
      })
    }
  }
}
</script>
