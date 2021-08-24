<template>
<div id="tabForIndex">
  <div class="mapAll">
    <div class="mapPic">
        <q-img src="https://picsum.photos/600/400/?random=1" :ratio="4/3" />
    </div>
    <div class="mapList">
      <q-card>
        <q-tabs
          v-model="tab"
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="food" label="美食" />
          <q-tab name="viewpoint" label="景點" />
          <q-tab name="stay" label="住宿" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>

          <q-tab-panel name="food">

            <q-list bordered separator>
              <q-item clickable v-ripple  v-for="article in articles" :key="article._id" :article="article">
                <router-link :to="'/article/'+article._id" replace>
                  <q-item-section >
                    <div class="text-h6">{{ article.type }} | {{ article.artTitle }}</div>
                    <p class="ellipsis" v-html="article.description" />
                  </q-item-section>
                </router-link>
              </q-item>
            </q-list>

          </q-tab-panel>

          <q-tab-panel name="viewpoint" >
            <q-item clickable v-ripple  v-for="article in articles" :key="article._id" :article="article">
                <router-link :to="'/article/'+article._id" replace>
                  <q-item-section >
                    <div class="text-h6">{{ article.type }} | {{ article.artTitle }}</div>
                    <p class="ellipsis" v-html="article.description" />
                  </q-item-section>
                </router-link>
              </q-item>
          </q-tab-panel>

          <q-tab-panel name="stay" @click="tabStay">
            <q-item clickable v-ripple  v-for="article in articles" :key="article._id" :article="article">
                <router-link :to="'/article/'+article._id" replace>
                  <q-item-section >
                    <div class="text-h6">{{ article.type }} | {{ article.artTitle }}</div>
                    <p class="ellipsis" v-html="article.description" />
                  </q-item-section>
                </router-link>
              </q-item>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'tabForIndex',
  data () {
    return {
      articles: [],
      tab: 'food'
    }
  },
  methods: {
    async viewpoint () {
      try {
        const { data } = await this.$axios.get('/articles/stv')
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
    async tabStay () {
      try {
        const { data } = await this.$axios.get('/articles/sts')
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
      const { data } = await this.$axios.get('/articles/stf')
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
