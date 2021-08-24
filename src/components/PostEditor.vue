<template>
  <div id="postEditor">
    <form
      @submit="submitForm"
      @reset="resetForm"
      class="row"
      :fields="fields"
      autocorrect="off"
      autocapitalize="off"
      autocomplete="off"
      spellcheck="false"
    >
      <!-- title -->
      <div class="editTitle">
        <q-input
        v-model="form.artTitle"
        label="標題"
        lazy-rules
        :state="state.artTitle"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      </div>
      <div class="editButton">
        <q-btn class="eButton" outline label="清除" type="reset" icon="restart_alt" color="grey-7" />
        <q-btn class="eButton" label="送出" type="submit" icon="send" color="primary" @click="alert = true" />

        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">完成</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              恭喜完成文章編寫！
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" @click="checkout"  />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>

      <!-- content -->
      <div class="editor">
        <form>
          <q-editor
            v-model="form.description"
            min-height=70vh
            ref="editor_ref"
            toolbar-color="secondary"
            toolbar-bg="grey-2"
            placeholder="輸入你要分享的旅行故事吧..."
            @paste.native="evt => pasteCapture(evt)"
            :definitions="{
              photo: {
                tip: '插入圖片',
                icon: 'insert_photo'
              },
            }"
            :toolbar="[
              ['left', 'center', 'right', 'justify'],
              ['bold', 'italic', 'strike', 'underline',
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
              ['photo','link',],
              ['undo', 'redo']
            ]"
          />
        </form>
      </div>
      <div class="editSetting">
        <div class="editSetTitle">文章設定</div>
        <div class="editSetInfo">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="label"
              label="標籤"
              default-opened
            >
              <q-card class="q-pl-md">
                <q-card-section>
                  <q-select v-model="form.type" :options="optType" label="主題類型" />
                  <q-select v-model="form.category" :options="optCat" label="分類" />
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="image"
              label="封面照片"
              default-opened
            >
              <div class="flex justify-center q-pb-md">
                <img-inputer v-model="form.image" theme="light" size="small" placeholder="點擊或拖曳選擇圖片" bottom-text="點擊或拖曳以修改" />
              </div>
            </q-expansion-item>

            <!-- <q-expansion-item
              expand-separator
              icon="public"
              label="狀態"
              default-opened
            >
              <q-card class="q-pl-md">
                <q-card-section>
                  <q-radio v-model="form.showing" :val="true" label="發布" />
                  <q-radio v-model="form.showing" :val="false" label="隱藏" />
                </q-card-section>
              </q-card>
            </q-expansion-item> -->

          </q-list>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'postEditor',
  data () {
    return {
      articles: [],
      fields: [
        {
          key: 'artTitle',
          label: '標題'
        },
        {
          key: 'description',
          label: '內容'
        },
        {
          key: 'type',
          label: '主題類型'
        },
        {
          key: 'category',
          label: '分類'
        },
        {
          key: 'image',
          label: '封面照片'
        }
      ],
      form: {
        artTitle: '',
        description: '',
        type: null,
        category: null,
        image: null
      },
      optType: ['東北亞', '東南亞', '歐洲', '中國港澳', '台灣', '美洲', '紐澳', '太平洋諸島', '南亞及西亞', '非西', '非洲'],
      optCat: ['飲食', '住宿', '交通', '遊記', '景點', '金錢', '氣候', '其他'],
      alert: false
    }
  },
  computed: {
    state () {
      return {
        artTitle: this.form.artTitle.length === 0 ? null : true,
        description: this.form.description?.length === 0 ? null : this.form.description > 100
      }
    }
  },
  methods: {
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
    resetForm () {
      this.form = {
        artTitle: '',
        description: '',
        type: '',
        category: '',
        image: null
        // _id: ''
      }
    },
    //  送出
    async submitForm () {
      try {
        const fd = new FormData()
        for (const key in this.form) {
          fd.append(key, this.form[key])
        }
        await this.$axios.post('/users/myFile', fd, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        // await this.$axios.post('/articles', fd, {
        //   headers: {
        //     authorization: 'Bearer ' + this.$store.state.user.jwt.token
        //   }
        // })
        // this.$router.push('/myArticleFile')
      } catch (error) {
        console.log(error)
        this.$q.dialog({
          title: '錯誤',
          message: error.response.data.message,
          color: 'red-13',
          ok: true
        })
      }
    },
    //  確認
    async checkout () {
      try {
        await this.$axios.post('/users/checkout', {}, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.$router.push('/myArticleFile')
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
    //  加入資料夾
    //   async addMyFile () {
    //     if (this.$store.state.user.jwt.token?.length === 0) {
    //       this.$q.dialog({
    //         icon: 'error',
    //         title: '錯誤',
    //         message: '請先登入',
    //         color: 'red-13',
    //         ok: true
    //       })
    //       return
    //     }

    //     try {
    //       const fd = new FormData()
    //       for (const key in this.form) {
    //         fd.append(key, this.form[key])
    //       }
    //       await this.$axios.post('/users/myFile', fd, {
    //         headers: {
    //           authorization: 'Bearer ' + this.$store.state.user.jwt.token
    //         }
    //       })
    //       // this.$router.push('/myArticleFile')
    //     } catch (error) {
    //       console.log(error)
    //       this.$q.dialog({
    //         title: '錯誤myfile',
    //         message: error.response.data.message,
    //         color: 'red-13',
    //         ok: true
    //       })
    //     }
    //   }
    // }
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
        article.date = new Date(article.date).toLocaleString()
        article.author = this.$store.state.user.user.account
        return article
      })
    } catch (error) {
      console.log(error)
      this.$q.dialog({
        title: '錯誤',
        message: '取得文章失敗，請確認是否都填寫',
        color: 'red-13',
        ok: true
      })
    }
  }
}
</script>
