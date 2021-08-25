<template>
  <div id="article" class="flex justify-center">
    <div class="container bg-white shadow-7">

      <div class="row">
        <div class="col-12 q-mb-md">
          <q-btn flat round color="primary" icon="arrow_back" class="text-grey" to="/travelForum" />
        </div>
        <div class="col-12 q-mb-md">
          <div class="text-h3 q-mb-md">{{ artTitle }}</div>
          <div class="text-h5 text-grey">{{ type }} | {{ category }}</div>
        </div>
        <div class="col-12 q-my-md flex justify-between">
          <div class="flex q-mb-md items-center">
            <q-avatar size="40px">
              <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
            <div class="text-secondary q-ml-md">jane</div>
          </div>
          <div class="inline-block q-mb-md text-right">
            <q-btn flat round color="secondary" icon="local_florist" />
            <q-btn flat round color="secondary" icon="o_bookmark_add" />
          </div>
        </div>
        <div class="col-12 q-mb-md flex justify-center">
          <q-img :src="image" :ratio="16/9" class="bg-grey-3" />
        </div>
        <div class="col-12 q-mb-md">
          <p v-html="description" />
        </div>
        <div class="col-12 q-my-lg flex justify-between">
          <div class="inline-block">
            <q-btn flat round color="secondary" icon="local_florist" />
          </div>
          <div class="inline-block text-right">
            <q-btn flat round color="secondary" icon="share" />
            <q-btn flat round color="secondary" icon="o_bookmark_add" />
          </div>
        </div>
      </div>

      <q-inner-loading :showing="showing === false">
        <div>
          <h6 class="text-primary">
          <q-spinner-cube
            color="primary"
            size="2em"
          /> 文章已關閉</h6>
          <q-tooltip :offset="[0, 8]">QSpinnerCube</q-tooltip>
        </div>
      </q-inner-loading>

    </div>
  </div>
</template>

<script>
export default {
  name: 'article',
  data () {
    return {
      artTitle: '',
      description: '',
      image: '',
      showing: true,
      type: '',
      category: ''
    }
  },
  // methods: {
  //   beforePath () {
  //     this.$router.go(-1)
  //   }
  // },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/articles/' + this.$route.params.id)
      this.artTitle = data.result.artTitle
      this.description = data.result.description
      this.image = `${process.env.VUE_APP_API}/files/${data.result.image}`
      this.type = data.result.type
      this.category = data.result.category
      this.showing = data.result.showing
      document.title = ` ${this.artTitle} | 背包客棧`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
