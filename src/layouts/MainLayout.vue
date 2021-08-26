<template>
  <q-layout view="lHh Lpr lFf">
    <q-header id="navbar" bordered class="bg-white text-secondary flex " >
      <q-toolbar class="flex">
        <!-- pc版 -->
        <div class="nav-pc">
          <div class="flex justify-center items-center">
            <q-avatar>
              <img src="../assets/backpacker-logo-app.png">
            </q-avatar>
            <q-toolbar-title>背包客棧自助旅行論壇</q-toolbar-title>
          </div>

          <div class="text-grey-8">
            <q-btn flat class="q-mr-md" to='/'>首頁</q-btn>
            <q-btn flat class="q-mr-md" to='/travelForum'>旅遊論壇</q-btn>
            <q-btn flat class="q-mr-md" to='/discount'>優惠折扣</q-btn>
          </div>

          <div class="text-grey-8">

            <q-btn v-if="!user.isLogin" flat  class="q-mr-md" to='/login'> 登入</q-btn>
            <q-btn v-if="!user.isLogin" outline to='/register'>註冊</q-btn>

            <q-btn v-if="user.isAdmin && user.isLogin" flat class="q-mr-md" to='/admin'>後臺管理</q-btn>

            <q-btn v-if="user.isLogin" flat round to='/myPage'>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-btn>

            <q-btn-dropdown v-if="user.isLogin" flat round color="secondary" icon="settings">
              <q-list>
                <q-item clickable v-close-popup to="/postArticle" v-if="user.isLogin">
                  <q-item-section>
                    <q-item-label>撰寫文章</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup to="/myArticleFile" v-if="user.isLogin">
                  <q-item-section>
                    <q-item-label>所有文章</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup to="/setting" v-if="user.isLogin">
                  <q-item-section>
                    <q-item-label>設定</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="logout" v-if="user.isLogin">
                  <q-item-section>
                    <q-item-label>登出</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>

        <!-- m版 出現 -->
        <div class="nav-m flex justify-between">
          <div class="flex justify-center items-center">
            <q-avatar>
              <img src="../assets/backpacker-logo-app.png">
            </q-avatar>
          <q-toolbar-title>背包客棧自助旅行論壇</q-toolbar-title>
          </div>
          <q-btn dense flat round  @click="right = !right" icon="menu" />
        </div>
        <q-drawer class="nav-m-drawer" show-if-above
          v-model="right" side="right"
          overlay bordered behavior="mobile">
              <q-scroll-area class="fit">
                <div>
                  <q-list>
                    <q-item v-if="user.isAdmin && user.isLogin">
                      <q-item-section avatar>
                        <q-avatar>
                          <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                        </q-avatar>
                      </q-item-section>
                      <q-item-section>name</q-item-section>
                    </q-item>

                    <q-item v-if="!user.isAdmin && !user.isLogin">
                      <q-item-section avatar>
                        <q-avatar>
                          <img src="../assets/backpacker-logo-app.png">
                        </q-avatar>
                      </q-item-section>
                      <q-item-section>背包客棧 自助旅行論壇</q-item-section>
                    </q-item>

                    <q-item clickable exact exact-active-class="nav-m-link" v-ripple to='/'>
                      <q-item-section avatar>
                        <q-icon name="home" />
                      </q-item-section>
                      <q-item-section>首頁</q-item-section>
                    </q-item>

                    <q-item clickable exact exact-active-class="nav-m-link" v-ripple to='/travelForum'>
                      <q-item-section avatar>
                        <q-icon name="article" />
                      </q-item-section>
                      <q-item-section>旅遊論壇</q-item-section>
                    </q-item>

                    <q-item clickable exact exact-active-class="nav-m-link" v-ripple to='/discount'>
                      <q-item-section avatar>
                        <q-icon name="sell" />
                      </q-item-section>
                      <q-item-section>優惠折扣</q-item-section>
                    </q-item>

                    <q-item clickable exact exact-active-class="nav-m-link" v-ripple to='/myPage' v-if="user.isAdmin && user.isLogin">
                      <q-item-section avatar>
                        <q-icon name="auto_stories" />
                      </q-item-section>
                      <q-item-section>我的頁面</q-item-section>
                    </q-item>

                    <q-item clickable exact exact-active-class="nav-m-link" v-ripple to='/postArticle' v-if="user.isAdmin && user.isLogin">
                      <q-item-section avatar>
                        <q-icon name="create" />
                      </q-item-section>
                      <q-item-section>撰寫文章</q-item-section>
                    </q-item>

                    <q-item clickable exact exact-active-class="nav-m-link" v-ripple to='/myArticleFile' v-if="user.isAdmin && user.isLogin">
                      <q-item-section avatar>
                        <q-icon name="folder" />
                      </q-item-section>
                      <q-item-section>所有文章</q-item-section>
                    </q-item>

                    <q-item clickable exact exact-active-class="nav-m-link" v-ripple to='/setting' v-if="user.isAdmin && user.isLogin">
                      <q-item-section avatar>
                        <q-icon name="settings" />
                      </q-item-section>
                      <q-item-section>設定</q-item-section>
                    </q-item>

                    <q-item clickable exact exact-active-class="nav-m-link" v-ripple t v-if="user.isAdmin && user.isLogin" to='/admin'>
                      <q-item-section avatar>
                        <q-icon name="dashboard" />
                      </q-item-section>
                      <q-item-section>後臺管理</q-item-section>
                    </q-item>

                    <q-item clickable exact exact-active-class="nav-m-link" v-ripple to='/login' v-if="!user.isLogin" >
                      <q-item-section avatar>
                        <q-icon name="login" />
                      </q-item-section>
                      <q-item-section>登入</q-item-section>
                    </q-item>

                    <q-item clickable exact exact-active-class="nav-m-link" v-ripple @click="logout" v-if="user.isAdmin && user.isLogin">
                      <q-item-section avatar>
                        <q-icon name="logout" />
                      </q-item-section>
                      <q-item-section>登出</q-item-section>
                    </q-item>

                    <q-item clickable exact exact-active-class="nav-m-link" v-ripple to='/register'  v-if="!user.isLogin">
                      <q-item-section avatar>
                        <q-icon name="account_circle" />
                      </q-item-section>
                      <q-item-section>註冊</q-item-section>
                    </q-item>

                  </q-list>
                </div>
              </q-scroll-area>
        </q-drawer>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <vue-page-transition name="fade-in-down">
        <router-view />
      </vue-page-transition>
    </q-page-container>

    <!-- footer -->
    <footer id="footer">
      <div>&copy; 2021 泰山職訓局專題製作 by Wang Yunn Dian &emsp; | &emsp; 網站內的圖片來源自 Unsplash </div>
    </footer>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      articles: [],
      right: false
    }
  },
  methods: {
    onItemClick () {},
    async logout () {
      try {
        await this.$axios.delete('/users/logout', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.$store.commit('user/logout') // logout 在 modules 的 user 是裡的功能
        if (this.$route.path !== '/') { this.$router.push('/') }
      } catch (error) {
        console.log(this.$store.state)
        console.log(error)
        this.$q.dialog({
          title: '錯誤',
          message: '發生錯誤',
          color: 'red-13',
          ok: true
        })
      }
    }
  }
}
</script>
