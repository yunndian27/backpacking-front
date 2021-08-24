<template>
<div id="carouselTaiwan">
  <q-carousel
    v-model="slide02"
  >
    <q-carousel-slide :name="1" class="column no-wrap">
      <div class="row no-wrap">
        <div class="col-12 col-md-6 col-xl-3 q-pa-md" v-for="article in articles"
            :key="article._id" >
            <router-link  :to="'/article/'+article._id" replace>
              <ArticleCard :article="article" />
            </router-link>
        </div>
      </div>
    </q-carousel-slide>
</q-carousel>
</div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue'

export default {
  name: 'PageIndex',
  data () {
    return {
      articles: [],
      slide02: 1
    }
  },
  components: {
    ArticleCard
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/articles/stw')
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
