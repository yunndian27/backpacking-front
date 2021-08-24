<template>
  <div
    id="adminArticles"
    class="flex justify-center q-mt-md"
  >
    <div class="container">
      <div class="row">
        <div class="col-2 flex justify-center items-center">
          <!-- <q-btn outline rounded color="primary" label="+ 新文章" to="/admin/adminPostArticle" /> -->
          <div>
            <q-btn
              outline
              rounded
              label="+ 新文章"
              color="primary"
              @click="dialog = true"
            />
            <q-dialog
              id="dialog-article"
              ref="dialog"
              v-model="dialog"
              persistent
              :title="form._id.length > 0 ? '編輯商品' : '新增商品'"
              :maximized="maximizedToggle"
              transition-show="slide-up"
              transition-hide="slide-down"
            >
              <q-card class="bg-white text-dark">
                <q-bar>
                  <q-space />
                  <q-btn
                    dense
                    flat
                    icon="close"
                    v-close-popup
                  >
                    <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                  </q-btn>
                </q-bar>

                <q-card-section class="q-pt-none">
                  <div class="arTitle q-pt-lg flex justify-center">
                    <div class="container">
                      <form
                        @submit="submitForm"
                        @reset="resetForm"
                        autocorrect="off"
                        autocapitalize="off"
                        autocomplete="off"
                        spellcheck="false"
                        class="row"
                      >
                        <!-- title -->
                        <div class="col-9 q-pr-md">
                          <q-input
                            v-model="form.artTitle"
                            label="標題"
                            lazy-rules
                            :state="state.artTitle"
                            :rules="[
                              val =>
                                (val && val.length > 0) || '請輸入標題'
                            ]"
                          />
                        </div>
                        <div class="col-3 flex justify-center items-start q-pt-md">
                          <q-btn
                            outline
                            label="清除"
                            type="reset"
                            icon="restart_alt"
                            color="grey-7"
                            class="q-mr-md"
                          />
                          <q-btn
                            label="送出"
                            type="submit"
                            icon="send"
                            color="primary"
                          />
                        </div>

                        <!-- content -->
                        <div class="arContent col-12 q-mt-lg">
                          <div class="row">
                            <div class="col-12 col-md-9">
                              <div class="q-gutter-sm q-pr-lg">
                                <q-editor
                                  v-model="form.description"
                                  :state="state.description"
                                  min-height="70vh"
                                  ref="editor_ref"
                                  toolbar-color="secondary"
                                  toolbar-bg="grey-2"
                                  placeholder="輸入你要分享的旅行故事吧..."
                                  @paste.native="evt => pasteCapture(evt)"
                                  :definitions="{
                                    photo: {
                                      tip: '插入圖片',
                                      icon: 'insert_photo'
                                    }
                                  }"
                                  :toolbar="[
                                    ['left', 'center', 'right', 'justify'],
                                    [
                                      'bold',
                                      'italic',
                                      'strike',
                                      'underline',
                                      {
                                        icon: $q.iconSet.editor.fontSize,
                                        fixedLabel: true,
                                        fixedIcon: true,
                                        list: 'no-icons',
                                        options: [
                                          'size-1',
                                          'size-2',
                                          'size-3',
                                          'size-4',
                                          'size-5',
                                          'size-6',
                                          'size-7'
                                        ]
                                      },
                                      'removeFormat'
                                    ],
                                    ['quote', 'unordered', 'ordered'],
                                    ['photo', 'link'],
                                    ['undo', 'redo']
                                  ]"
                                />
                              </div>
                            </div>
                            <div class="col-12 col-md-3 bg-white">
                              <h3
                                class="textTitle text-h4 text-secondary"
                                style="margin: 0"
                              >
                                文章設定
                              </h3>
                              <div class="q-pt-md">
                                <q-list
                                  bordered
                                  class="rounded-borders"
                                >
                                  <q-expansion-item
                                    expand-separator
                                    icon="label"
                                    label="標籤"
                                    class="text-grey-9 q-gutter-md"
                                    default-opened
                                  >
                                    <q-card class="q-pl-md">
                                      <q-card-section>
                                        <q-select
                                          v-model="form.type"
                                          :options="optType"
                                          label="主題類型"
                                        />
                                        <q-select
                                          v-model="form.category"
                                          :options="optCat"
                                          label="分類"
                                        />
                                      </q-card-section>
                                    </q-card>
                                  </q-expansion-item>

                                  <q-expansion-item
                                    expand-separator
                                    icon="image"
                                    label="封面照片"
                                    class="text-grey-9"
                                    default-opened
                                  >
                                    <div class="flex justify-center q-pb-md">
                                      <img-inputer
                                        v-model="form.image"
                                        theme="light"
                                        size="small"
                                        placeholder="點擊或拖曳選擇圖片"
                                        bottom-text="點擊或拖曳以修改"
                                      />
                                    </div>
                                  </q-expansion-item>

                                  <q-expansion-item
                                    expand-separator
                                    icon="public"
                                    label="狀態"
                                    class="text-grey-9"
                                    default-opened
                                  >
                                    <q-card class="q-pl-md">
                                      <q-card-section>
                                        <q-radio
                                          v-model="form.showing"
                                          :val="true"
                                          label="發布"
                                        />
                                        <q-radio
                                          v-model="form.showing"
                                          :val="false"
                                          label="隱藏"
                                        />
                                      </q-card-section>
                                    </q-card>
                                  </q-expansion-item>
                                </q-list>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
        </div>
        <div class="col-8">
          <h2 class="text-center">文章管理</h2>
        </div>
        <div class="col-2 flex justify-center items-center">
          <q-btn
            outline
            rounded
            color="primary"
            label="管理"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="q-pt-md">
            <q-table
              :columns="columns"
              :data="articles"
              row-key="name"
              ref="articleTable"
              :filter="filter"
              :loading="loading"
              :pagination="initialPagination"
            >
              <template v-slot:top>
                <div class="text-h6 text-grey-7">所有文章</div>
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
  name: 'adminArticles',
  data () {
    return {
      articles: [],
      columns: [
        {
          name: 'artTitle',
          label: '標題',
          field: (row) => row.artTitle,
          align: 'left'
        },
        {
          name: 'type',
          label: '主題類型',
          field: 'type',
          align: 'center'
        },
        {
          name: 'category',
          label: '分類',
          field: 'category',
          align: 'center'
        },
        {
          name: 'image',
          label: '封面照片',
          field: 'image',
          align: 'center'
        },
        {
          name: 'showing',
          label: '狀態',
          field: 'showing',
          align: 'center'
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
        },
        {
          name: 'action',
          label: '編輯',
          field: 'action',
          align: 'center'
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
      },
      optType: ['東北亞', '東南亞', '歐洲', '中國港澳', '台灣', '美洲', '紐澳', '太平洋諸島', '南亞及西亞', '非西', '非洲'],
      optCat: ['飲食', '住宿', '交通', '遊記', '景點', '金錢', '氣候', '其他']
    }
  },
  computed: {
    state () {
      return {
        artTitle: this.form.artTitle.length === 0 ? null : true,
        description:
          this.form.description?.length === 0 ? null : this.form.description > 100
      }
    }
  },
  methods: {
    editArticle (rowIndex) {
      this.form = {
        artTitle: this.articles[rowIndex].artTitle,
        description: this.articles[rowIndex].description,
        type: this.articles[rowIndex].type,
        category: this.articles[rowIndex].category,
        image: this.articles[rowIndex].image,
        showing: this.articles[rowIndex].showing,
        _id: this.articles[rowIndex]._id,
        rowIndex
      }
      this.$refs.dialog.show('dialog-article')
    },
    // 文字複製貼上
    pasteCapture (evt) {
      // Let inputs do their thing, so we don't break pasting of links.
      if (evt.target.nodeName === 'INPUT') return
      let text, onPasteStripFormattingIEPaste
      evt.preventDefault()
      if (evt.originalEvent && evt.originalEvent.clipboardData.getData) {
        text = evt.originalEvent.clipboardData.getData('text/plain')
        this.$refs.editor_ref.runCmd('insertText', text)
      } else if (evt.clipboardData && evt.clipboardData.getData) {
        text = evt.clipboardData.getData('text/plain')
        this.$refs.editor_ref.runCmd('insertText', text)
      } else if (window.clipboardData && window.clipboardData.getData) {
        if (!onPasteStripFormattingIEPaste) {
          onPasteStripFormattingIEPaste = true
          this.$refs.editor_ref.runCmd('ms-pasteTextOnly', text)
        }
        onPasteStripFormattingIEPaste = false
      }
    },
    //  重製
    resetForm (event) {
      this.form = {
        artTitle: '',
        description: '',
        type: '',
        category: '',
        image: null,
        showing: true,
        _id: ''
      }
    },
    //  送出
    async submitForm () {
      try {
        const fd = new FormData()
        for (const key in this.form) {
          fd.append(key, this.form[key])
        }
        if (this.form._id?.length === 0) {
          await this.$axios.post('/articles', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.user.jwt.token
            }
          })
        } else {
          const { data } = await this.$axios.patch(
            '/articles/' + this.form._id, fd, {
              headers: {
                authorization: 'Bearer ' + this.$store.state.user.jwt.token
              }
            })
          this.articles[this.form.rowIndex] = {
            artTitle: this.form.artTitle,
            description: this.form.description,
            type: this.form.type,
            category: this.form.category,
            showing: this.form.showing,
            image: `${process.env.VUE_APP_API}/files/${data.result.image}`,
            _id: this.form._id
          }
          this.$q.dialog({
            title: '完成',
            message: '請刷新頁面喔!',
            color: 'red-13',
            ok: true
          })
        }
        this.$refs.dialog.hide('dialog-article')
        // this.$router.push('/admin/articles').catch(() => {})
      } catch (error) {
        console.log(error)
        this.$q.dialog({
          title: '錯誤',
          message: error.response.data.message,
          color: 'red-13',
          ok: true
        })
      }
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
  // updated () {
  //   this.$nextTick(function () {
  //     this.$router.push('/admin/articles')
  //   })
  // }
}
</script>
