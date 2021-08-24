<template>
<div id="personalFile">
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md"
  >
  <div class="q-mb-md">
    <h2 class="text-bold">編輯個人檔案</h2>
    <div class="text-grey">造訪你的個人檔案的使用者會看到以下資訊</div>
  </div>
  <div class="q-mb-md">
    <div class="setTitle">照片</div>
    <div class="flex items-center">
      <q-avatar size="100px" class="q-mr-md">
        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
      </q-avatar>
      <q-btn class="button" unelevated rounded color="primary" label="變更"  @click="form.confirm = true"/>
      <q-dialog v-model="form.confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <div class="col-12 text-center text-dark q-mb-lg">變更你的照片</div>
            <div class="col-12 flex justify-center q-pb-md">
              <img-inputer v-model="form.userImg" theme="light" size="small" placeholder="點擊或拖曳選擇圖片" bottom-text="點擊或拖曳以修改" />
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="關閉" color="primary" v-close-popup />
            <q-btn flat label="確認" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
  <div class="q-mb-md">
    <div class="setTitle">使用者名稱</div>
    <q-input rounded outlined v-model="form.userName" :state="state.  userName" placeholder="帳號名稱" />
  </div>
  <div class="q-mb-md">
    <div class="setTitle">自我介紹</div>
    <q-input
      v-model="form.userDesc"
      outlined
      type="textarea"
      placeholder="敘述一下自己吧"
    />
  </div>
  <div class="q-mb-md">
    <div class="setTitle">居住地</div>
    <q-input rounded outlined v-model="form.userPlace" placeholder="住在..." />
  </div>
  <div class="q-mb-md">
    <div class="setTitle">興趣</div>
    <q-input
      v-model="form.userInterest"
      outlined
      type="textarea"
      placeholder="興趣與愛好"
    />
  </div>
  <div class="q-mb-md">
    <div class="setTitle">職業</div>
    <q-input rounded outlined v-model="form.userCareer" placeholder="職業" />
  </div>
  <div class="q-mb-lg">
    <div class="setTitle">性別</div>
      <div class="q-gutter-sm">
      <q-radio v-model="form.userSex" val="male" label="男性" />
      <q-radio v-model="form.userSex" val="female" label="女性" />
      <q-radio v-model="form.userSex" val="secret" label="不公開" />
    </div>
  </div>
  <div class="flex justify-end">
    <q-btn class="button" unelevated rounded label="儲存" type="submit" color="secondary"/>
    <q-btn class="button q-ml-md" unelevated rounded label="重設" type="reset" color="dark" outline />
  </div>
  </q-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        userImg: null,
        userName: '',
        userDesc: '',
        userPlace: '',
        userInterest: '',
        userCareer: '',
        confirm: false,
        userSex: 'male'
      }
    }
  },
  computed: {
    state () {
      const userName = this.form.userName
      return {
        userName: userName.length === 0 ? null : userName.length >= 4 && userName.length <= 20
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        const fd = new FormData()
        for (const key in this.form) {
          fd.append(key, this.form[key])
        }
        if (this.form._id?.length === 0) {
          await this.$axios.post('/users', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.user.jwt.token
            }
          })
        } else {
          await this.$axios.patch('/users/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.user.jwt.token
            }
          })

          if (this.accept !== true) {
            this.$q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: '個人檔案修改成功'
            })
          }
        }
      } catch (error) {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.form = {
        userImg: null,
        userName: '',
        userDesc: '',
        userPlace: '',
        userInterest: '',
        userCareer: '',
        confirm: false,
        userSex: 'male'
      }
    }
  },
  async mounted () {
    try {
      await this.$axios.get('/users/' + this.$store.state.user.user._id, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
    } catch (error) {
      console.log(error)
      this.$q.dialog({
        title: '錯誤',
        message: '取得帳號失敗',
        color: 'red-13',
        ok: true
      })
    }
  }
}
</script>
