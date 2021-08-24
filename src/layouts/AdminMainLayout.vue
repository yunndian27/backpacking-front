<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-grey-9 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/backpacker-logo-app.png">
          </q-avatar>
          背包客棧後台
        </q-toolbar-title>
        <q-btn flat class="q-mr-md" @click="logout">登出 &ensp; <q-icon name="logout" /></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above bordered v-model="left" side="left" content-class="bg-dark text-white">
      <!-- drawer content -->
      <div>
        <q-list padding style="max-width: 318px">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>Brunhilde Panswick</q-item-section>
        </q-item>

        <div class="q-mb-xl">
          <q-item
            clickable
            v-ripple
            exact
            exact-active-class="my-menu-link"
            to='/admin'
          >
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>管理首頁</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            exact
            exact-active-class="my-menu-link"
            to="/admin/forums"
          >
            <q-item-section avatar>
              <q-icon name="article" />
            </q-item-section>

            <q-item-section>論壇管理</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            exact
            exact-active-class="my-menu-link"
            to="/admin/articles"
          >
            <q-item-section avatar>
              <q-icon name="subject" />
            </q-item-section>

            <q-item-section>文章管理</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            exact
            exact-active-class="my-menu-link"
            to="/admin/users"
          >
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section>會員管理</q-item-section>
          </q-item>
        </div>

          <q-separator spaced />

          <q-item
            clickable
            v-ripple
            @click="$router.replace('/')"
          >
            <q-item-section avatar>
              <q-icon name="store" />
            </q-item-section>

            <q-item-section>回前台</q-item-section>
          </q-item>

    </q-list>
  </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      articles: [],
      left: true
    }
  },
  methods: {
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
        console.log(error)
        this.$q.dialog({
          title: '錯誤',
          message: '發生錯誤',
          color: 'red-13',
          ok: true
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/articles')
      this.articles = data.result.map((article) => {
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
