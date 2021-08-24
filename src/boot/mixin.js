// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ Vue }) => {
  // 全域引用
  Vue.mixin({
    computed: {
      user () {
        return this.$store.getters['user/user']
      }
    }
  })
}
