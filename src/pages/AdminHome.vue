<template>
  <div id="adminIndex" class="flex justify-center q-mt-md">
    <div class="container">
      <h2 class="text-center">管理首頁</h2>

      <div class="row">
        <div class="col-12">
          <div class="q-pt-md">
            <q-table
              :columns="columns"
              :data="articles"
              row-key="artTitle"
              ref="articleTable"
              :filter="filter"
              :loading="loading"
              :pagination="initialPagination"
              :selected-rows-label="getSelectedString"
              selection="multiple"
              :selected.sync="selected"
            >
              <template v-slot:top>
                <div class="text-h6 text-blue-8">最新好文</div>
                <q-space />
                <q-input outlined dense debounce="300" color="primary" v-model="filter" placeholder="查詢" >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>

              <template v-slot:body-cell-image="props">
                <q-td :props="props">
                  <div
                    key="image"
                    :props="props"
                  >
                    <img
                      v-if="props.row.image"
                      :src="props.row.image"
                      style="height: 50px"
                    />
                  </div>
                </q-td>
              </template>

              <template v-slot:body-cell-showing="props">
                <q-td :props="props">
                  <div
                    key="showing"
                    :props="props"
                  >
                    {{ props.row.showing ? "V" : "" }}
                  </div>
                </q-td>
              </template>

              <template v-slot:body-cell-action="props">
                <q-td :props="props">
                  <div
                    key="action"
                    :props="props"
                  >
                    <q-btn
                      flat
                      round
                      color="grey"
                      icon="edit_note"
                      @click="editArticle(props.rowIndex)"
                    />
                  </div>
                </q-td>
              </template>
            </q-table>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="q-pt-md">
            <q-table
              :columns="columns"
              :data="articles"
              row-key="artTitle"
              ref="articleTable"
              :filter="filter"
              :loading="loading"
              :pagination="initialPagination"
              :selected-rows-label="getSelectedString"
              selection="multiple"
              :selected.sync="selected01"
            >
              <template v-slot:top>
                <div class="text-h6 text-blue-8">看地圖 還世界 | 美食</div>
                <q-space />
                <q-input outlined dense debounce="300" color="primary" v-model="filter" placeholder="查詢" >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>

              <template v-slot:body-cell-image="props">
                <q-td :props="props">
                  <div
                    key="image"
                    :props="props"
                  >
                    <img
                      v-if="props.row.image"
                      :src="props.row.image"
                      style="height: 50px"
                    />
                  </div>
                </q-td>
              </template>

              <template v-slot:body-cell-showing="props">
                <q-td :props="props">
                  <div
                    key="showing"
                    :props="props"
                  >
                    {{ props.row.showing ? "V" : "" }}
                  </div>
                </q-td>
              </template>

              <template v-slot:body-cell-action="props">
                <q-td :props="props">
                  <div
                    key="action"
                    :props="props"
                  >
                    <q-btn
                      flat
                      round
                      color="grey"
                      icon="edit_note"
                      @click="editArticle(props.rowIndex)"
                    />
                  </div>
                </q-td>
              </template>
            </q-table>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="q-pt-md">
            <q-table
              :columns="columns"
              :data="articles"
              row-key="artTitle"
              ref="articleTable"
              :filter="filter"
              :loading="loading"
              :pagination="initialPagination"
              :selected-rows-label="getSelectedString"
              selection="multiple"
              :selected.sync="selected02"
            >
              <template v-slot:top>
                <div class="text-h6 text-blue-8">台灣真美</div>
                <q-space />
                <q-input outlined dense debounce="300" color="primary" v-model="filter" placeholder="查詢" >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>

              <template v-slot:body-cell-image="props">
                <q-td :props="props">
                  <div
                    key="image"
                    :props="props"
                  >
                    <img
                      v-if="props.row.image"
                      :src="props.row.image"
                      style="height: 50px"
                    />
                  </div>
                </q-td>
              </template>

              <template v-slot:body-cell-showing="props">
                <q-td :props="props">
                  <div
                    key="showing"
                    :props="props"
                  >
                    {{ props.row.showing ? "V" : "" }}
                  </div>
                </q-td>
              </template>

              <template v-slot:body-cell-action="props">
                <q-td :props="props">
                  <div
                    key="action"
                    :props="props"
                  >
                    <q-btn
                      flat
                      round
                      color="grey"
                      icon="edit_note"
                      @click="editArticle(props.rowIndex)"
                    />
                  </div>
                </q-td>
              </template>
            </q-table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'adminHome',
  data () {
    return {
      selected: [],
      selected01: [],
      selected02: [],
      articles: [],
      columns: [
        {
          name: 'artTitle',
          required: true,
          label: '標題',
          field: (row) => row.artTitle,
          align: 'left',
          sortable: true
        },
        {
          name: 'image',
          label: '封面照片',
          field: 'image',
          align: 'center'
        },
        {
          name: 'type',
          label: '主題類型',
          field: 'type',
          align: 'left',
          sortable: true
        },
        {
          name: 'category',
          label: '分類',
          field: 'category',
          align: 'left',
          sortable: true
        },
        {
          name: 'showing',
          label: '狀態',
          field: 'showing',
          align: 'center',
          sortable: true
        },
        {
          name: 'author',
          label: '作者',
          field: 'author',
          align: 'center'
        },
        {
          name: 'date',
          label: '時間',
          field: 'date',
          align: 'center',
          sortable: true
        }
      ],
      loading: false,
      filter: '',
      dialog: false,
      maximizedToggle: true,
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        rowsPerPage: 7
      },
      form: {
        artTitle: '',
        description: '',
        type: null,
        category: null,
        image: null,
        showing: true,
        author: 'user.account',
        _id: ''
      }
    }
  },
  methods: {
    getSelectedString () {
      return this.selected?.length === 0 ? '' : `已選取 ${this.selected?.length} 個`
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/articles/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
      this.articles = data.result.map(article => {
        if (article.image) {
          article.image = `${process.env.VUE_APP_API}/files/${article.image}`
        }
        article.date = new Date(article.date).toLocaleString()
        article.author = this.$store.state.user.user.account
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
