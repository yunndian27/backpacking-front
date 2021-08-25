<template>
  <div id="myPage">
    <div class="container q-pb-md">
      <!-- self -->
      <div id="mySelf" class="flex column justify-center items-center bg-white rounded-borders">
        <q-avatar size="120px">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg">
        </q-avatar>
        <div class=" myName text-h5 q-mt-md"> Brunhilde Panswick </div>
        <div class=" myUserName text-h6"> @bpanswick4 </div>
      </div>
      <!-- content -->
      <div class="myContent">
        <!-- left -->
        <div id="left">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              align="justify"
            >
              <q-tab class="postTab" name="postArticle" label="發文分享" />
              <q-tab class="postTab" name="collectArticle" label="收藏文章" />
              <q-tab class="postTab" name="niceArticle" label="按讚文章" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="postArticle" class="tabInfo">
                <q-list bordered separator>
                  <q-item clickable v-ripple  v-for="article in articles" :key="article._id" :article="article">
                    <router-link :to="'/article/'+article._id">
                      <q-item-section >
                        <div class="oneArticle">
                          <div class="oneArtCont col-8">
                              <div class="pageType">{{ article.type }}</div>
                              <div class="pageTitle text-h6">{{ article.artTitle }}</div>
                              <p class="pageDesc ellipsis" v-html="article.description" />
                          </div>
                          <div class="oneArtPic col-4 flex items-center">
                            <q-img
                              :src="article.image"
                              :ratio="16/9"
                              style="height: 180px"
                            />
                          </div>
                        </div>
                      </q-item-section>
                    </router-link>
                  </q-item>
                </q-list>
              </q-tab-panel>

              <q-tab-panel name="collectArticle">
                <div class="row q-pl-md">
                  <p>coming soon</p>
                </div>
              </q-tab-panel>

              <q-tab-panel name="niceArticle">
                <div class="row q-pl-md">
                  <p>Coming Soon</p>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
        <!-- right -->
        <div id="right">
          <q-list bordered class="rightTop bg-white rounded-borders">
            <q-item>
              <q-item-section >
                <img src="https://cdn.quasar.dev/img/mountains.jpg">
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label overline>自我介紹</q-item-label>
                <q-item-label>喜歡旅行與分享的女孩</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label overline>居住地</q-item-label>
                <q-item-label>台灣</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label overline>興趣</q-item-label>
                <q-item-label>旅行、攝影、享受生活</q-item-label>
              </q-item-section>
            </q-item>

            <q-item >
              <q-item-section>
                <q-item-label overline>職業</q-item-label>
                <q-item-label>攝影師</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label overline>性別</q-item-label>
                <q-item-label>女生</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label overline>註冊日期</q-item-label>
                <q-item-label>2021-08-05</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <q-list bordered class="rightBottom bg-white rounded-borders q-mt-md">
            <q-item>
              <q-item-section >
                <q-carousel
                  animated
                  v-model="slide"
                  navigation
                  infinite
                >
                  <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                  <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                  <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                  <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                </q-carousel>
              </q-item-section>
            </q-item>

          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articles: [],
      tab: 'postArticle',
      slide: 1
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
