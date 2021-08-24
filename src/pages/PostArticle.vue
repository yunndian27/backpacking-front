<template>
  <div id="postArticle" class="flex justify-center">
    <div class="articlePlace bg-white">
      <PostEditor />
    </div>
  </div>
</template>

<script>
import PostEditor from '../components/PostEditor.vue'

export default {
  name: 'PostArticle',
  components: {
    PostEditor
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/articles', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
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
