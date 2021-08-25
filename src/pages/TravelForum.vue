<template>
<div id="travelForum" class="flex justify-center">
  <div class="forumBanner q-mb-lg">
    <div class="forumTitle">旅遊論壇</div>
  </div>
  <div class="container">
    <div class="row flex justify-center q-mb-lg">
      <div class="col-12 col-md-8 q-mb-sm" max-width="400px">
        <q-input
          class="inputBg"
          outlined bottom-slots
          v-model="search.text"
          label="搜尋"
        >
          <template v-slot:append>
            <q-icon v-if="search.text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-12 q-mb-md-sm">
        <div class="fourmType flex justify-center q-gutter-md">
          <!-- <q-btn outline rounded color="primary" label="旅遊論壇" />
          <q-btn outline rounded color="primary" label="同好論壇" />
          <q-btn outline rounded color="primary" label="客棧論壇" /> -->
          <q-btn outline rounded color="primary" @click="type01" label="東北亞" />
          <q-btn outline rounded color="primary" @click="type02" label="東南亞" />
          <q-btn outline rounded color="primary" @click="type03" label="歐洲" />
          <q-btn outline rounded color="primary" @click="type04" label="中國港澳" />
          <q-btn outline rounded color="primary" @click="type05" label="台灣" />
          <q-btn outline rounded color="primary" @click="type06" label="美洲" />
          <q-btn outline rounded color="primary" @click="type07" label="紐澳" />
          <q-btn outline rounded color="primary" @click="type08" label="太平洋諸島" />
          <q-btn outline rounded color="primary" @click="type09" label="南亞及西亞" />
          <q-btn outline rounded color="primary" @click="type10" label="非西" />
          <q-btn outline rounded color="primary" @click="type11" label="非洲" />
          <q-btn outline rounded color="primary" @click="getArticle" label="全部" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-xl-3 q-pa-md" v-for="article in articles" :key="article._id">
        <router-link  :to="'/article/'+article._id">
          <ArticleCard
            :article="article"
          />
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue'

export default {
  name: 'PageIndex',
  data () {
    return {
      articles: [],
      search: {
        text: ''
      }
    }
  },
  components: {
    ArticleCard
  },
  methods: {
    async type01 () {
      try {
        const { data } = await this.$axios.get('/articles/stype01')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    },
    async type02 () {
      try {
        const { data } = await this.$axios.get('/articles/stype02')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    },
    async type03 () {
      try {
        const { data } = await this.$axios.get('/articles/stype03')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    },
    async type04 () {
      try {
        const { data } = await this.$axios.get('/articles/stype04')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    },
    async type05 () {
      try {
        const { data } = await this.$axios.get('/articles/stype05')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    },
    async type06 () {
      try {
        const { data } = await this.$axios.get('/articles/stype06')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    },
    async type07 () {
      try {
        const { data } = await this.$axios.get('/articles/stype07')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    },
    async type08 () {
      try {
        const { data } = await this.$axios.get('/articles/stype08')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    },
    async type09 () {
      try {
        const { data } = await this.$axios.get('/articles/stype09')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    },
    async type10 () {
      try {
        const { data } = await this.$axios.get('/articles/stype10')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    },
    async type11 () {
      try {
        const { data } = await this.$axios.get('/articles/stype11')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    },
    async getArticle () {
      try {
        const { data } = await this.$axios.get('/articles')
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
          message: '沒成功',
          color: 'red-13',
          ok: true
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/articles')
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
