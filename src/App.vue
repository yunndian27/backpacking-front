<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
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
  },
  async mounted () {
    console.log('mounted')
    if (this.$store.state.user.jwt.token?.length === 0) return
    const diff = Date.now() - this.$store.state.user.jwt.received
    try {
      // 1000 * 60 * 60 * 24 * 6 = 6天的毫秒 (有時間差)
      if (diff > 1000 * 60 * 60 * 24 * 6) {
        const { data } = await this.$axios.post('/users/extend', {}, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.$store.commit('extend', data.result)
      }
      const { data } = await this.$axios.get('/users/', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
      this.$store.commit('user/getinfo', data.result)
    } catch (error) {
      this.$store.commit('user/logout')
    }
  }
}
</script>
