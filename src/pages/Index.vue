<template>
  <q-page class="flex flex-start">
    <div id="home">
      <!-- section01 輪播 -->
      <div id="section01">
        <q-carousel
          animated
          v-model="slide01"
          infinite
          arrows
          navigation
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="../assets/img-header-unsplash.jpg">
            <h2 class="title">背包客棧是一個互助與分享經驗的論壇</h2>
            <h2 class="titleM">旅遊分享論壇</h2>
          </q-carousel-slide>

          <q-carousel-slide :name="2" img-src="../assets/travelforum-unsplash.jpg">
            <h2 class="title">分享旅遊經驗賺得快樂回憶</h2>
            <h2 class="titleM">分享旅遊經驗</h2>
          </q-carousel-slide>

          <q-carousel-slide :name="3" img-src="../assets/discount-unsplash.jpg">
            <h2 class="title">史上最好的優惠折扣報你知</h2>
            <h2 class="titleM">優惠折扣<br>報你知</h2>
          </q-carousel-slide>
        </q-carousel>
      </div>

      <!-- section02 最新好文 -->
      <div id="section02" class="flex justify-center ">
        <div class="container">
          <div class="indexTitle">
            <h2 class="text-center">最新好文</h2>
          </div>
          <div>
            <CarouselCard/>
          </div>
        </div>
      </div>

      <!-- section03 搜尋 -->
      <div id="section03" class=" bg-red-1  flex justify-center ">

        <q-parallax :height="200">
          <template v-slot:media>
            <img src="../assets/together-unsplash.jpg">
          </template>

          <template v-slot:content="scope">
            <div
              class="absolute column items-center"
              :style="{
                top: (scope.percentScrolled * 58) + '%',
                left: 0,
                right: 0
              }"
            >

              <div class="searchAll q-px-lg">
                <div class="serchTitle q-pr-lg">
                  <h3 class="section03Title">
                    為旅遊同好解決各種旅遊疑問的討論區
                  </h3>
                  <h3 class="section03TitleM">
                    為旅遊同好解決各種旅遊疑問
                  </h3>
                </div>
                <div class="serachInput">
                  <div >
                    <q-input
                      class="inputBg"
                      filled bottom-slots
                      v-model="text"
                      label="搜尋"
                      counter
                      maxlength="30"
                    >
                      <template v-slot:append>
                        <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                        <q-icon name="search" />
                      </template>
                    </q-input>
                  </div>
                </div>
              </div>

              </div>
            </template>
        </q-parallax>
      </div>

    <!-- section04 地圖 -->
    <div id="section04" class="flex justify-center ">
      <div class="container">
        <div class="indexTitle">
          <h2 class="text-center">看地圖 環世界</h2>
        </div>
        <TabForIndex/>
      </div>
    </div>

    <!-- section05 台灣 -->
      <div id="section05" class="flex justify-center">
        <div class="container">
          <div class="indexTitle">
            <h2 class="text-center">台灣真美</h2>
          </div>
          <div>
            <CarouselTaiwan/>
          </div>
        </div>
      </div>

    <!-- section06 關於背包客棧 -->
    <div id="section06" class="flex justify-center ">
      <div class="container">
        <div class="row flex items-center q-mb-md">
          <div class="col-12">
            <div class="indexTitle">
              <h2 class="text-center">關於背包客棧</h2>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <q-img src="../assets/about-unsplash.jpg" :ratio="16/9" />
          </div>
          <div class="col-12 col-md-6  q-mt-xs-md">
            <div class="q-px-md-lg">
              <p>
                背包客棧，俗稱背包論壇、背包客論壇、背包客網站，是臺灣的一個以旅遊資訊分享為基礎的網路論壇，乃由網名「小眼睛先生」與「布大俠」等二人創設於2004年，創立的初衷為提供一個讓熱愛旅遊或剛接觸旅遊的人一個互相幫助與分享經驗的平台。<br><br>論壇內含旅遊文章、心得攻略、機票與訂房比價，全球景點資訊，可提供想到某地旅遊的背包客概括性的觀念，以利事先規劃。
              </p>
              <q-btn outline rounded color="primary" ><a href="https://www.backpackers.com.tw/forum/" target="_blank" class="text-primary">背包客棧</a></q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- section07 form -->
    <div id="section07">
      <div class="form">
        <FormRes />
      </div>
    </div>

    </div>
  </q-page>

</template>

<script>
import CarouselCard from '../components/CarouselCard.vue'
// import ArticleCard from '../components/ArticleCard.vue'
import TabForIndex from '../components/TabForIndex.vue'
import CarouselTaiwan from '../components/CarouselTaiwan.vue'
import FormRes from '../components/FormRes.vue'

export default {
  name: 'PageIndex',
  data () {
    return {
      articles: [],
      search: {
        text: ''
      },
      slide01: 1,
      autoplay: true,
      text: ''
    }
  },
  components: {
    CarouselCard,
    // ArticleCard,
    TabForIndex,
    CarouselTaiwan,
    FormRes
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.email = null
      this.accept = false
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
