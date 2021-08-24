<template>
  <div id="account">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <div class="q-mb-md">
        <h2 class="text-bold">帳號設定</h2>
        <div class="text-grey">在此設定你的偏好設定，協助我們提供個人化體驗，以及進行重要帳號變更<br>如果想修改登入用的帳號名稱，請寄信給管理員詢問洽詢！</div>
        <h3 class="text-bold text-h5">基本資訊</h3>
      </div>
      <div class="q-mb-md">
        <div class="setTitle">帳號</div>
        <q-input rounded outlined disable v-model="form.account" placeholder="帳號" />
      </div>
      <div class="q-mb-md">
        <div class="setTitle">電子郵件</div>
        <q-input rounded outlined v-model="form.email" placeholder="電子信箱" />
      </div>
      <div class="q-mb-lg">
        <div class="setTitle">密碼</div>
        <q-input rounded outlined disable v-model="form.password" placeholder="密碼" />
      </div>
      <div class="flex justify-end">
        <q-btn class="button" unelevated rounded label="儲存" type="submit" color="secondary"/>
        <q-btn unelevated rounded label="重設" type="reset" color="dark" outline class="button q-ml-md" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        account: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: '修改成功'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: '請重新再試一次'
        })
      }
    },

    onReset () {
      this.form = {
        name: null,
        age: null,
        accept: false
      }
    }
  },
  async mounted () {
    try {
      await this.$axios.get('/getAccount', {
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
