<template>
  <q-card class="my-card q-pb-md">
      <q-img :ratio="1" :src="article.image" />

      <q-card-section >
        <div class="text-h6 ellipsisTitle">{{ article.artTitle }}</div>
        <div class="text-subtitle2">{{ article.type }} | {{ article.category }}</div>
      </q-card-section>

      <q-card-section class="ellipsisContent q-pt-none q-pb-none" >
        <div class="ellipsis" v-html="article.description"></div>
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.my-card {

  .q-img {
    background: $grey-3;
  }
  .ellipsisContent {
    padding: 0 1rem;

    .ellipsis {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding-right: 2rem;
    }
  }

  .ellipsisTitle{
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

}

</style>
