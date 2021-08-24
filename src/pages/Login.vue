<template>
  <q-page>
    <div id="login">
      <div class="logCard">
        <div class="logform">
          <h2 class="logTitle text-grey-9">登入論壇</h2>
          <div class="logform">
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
            >
              <q-input
                  outlined
                  class="inputBg"
                  v-model="form.account"
                  type="text"
                  label="帳號 *"
                  hint="帳號長度限制為 4 到 20 個字"
                  lazy-rules
                  :state="state.account"
                  :rules="[ val => val && val.length >= 4 || '帳號長度限制為 4 到 20 個字']"
                />
              <q-input
                outlined
                class="inputBg"
                v-model="form.password"
                type="password"
                label="密碼"
                hint="密碼長度限制為 6 到 20 個字"
                lazy-rules
                :state="state.password"
                :rules="[ val => val && val.length >= 6 || '密碼長度限制為 6 到 20 個字']"
              />

              <div class="q-gutter-sm reglog">
                <div flat class="textLink" to='/register'>註冊帳號</div>, <div flat class="textLink" @click="fixedLog = true">忘記帳號/密碼?</div>
                <!-- <q-checkbox v-model="right" label="保持登入" /> -->
              </div>

              <q-dialog v-model="fixedLog" persistent>
                <q-card style="min-width: 350px">
                  <q-card-section>
                    <div class="text-h6">輸入信箱</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
                  </q-card-section>

                  <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="關閉" v-close-popup />
                    <q-btn flat label="送出" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>

              <div class="flex justify-center q-pt-lg">
                <q-btn unelevated label="登入" type="submit" color="primary" class="q-px-md"/>
                <q-btn outline label="重置" type="reset" color="grey" class="q-px-md q-ml-lg" />
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      },
      right: false,
      fixedLog: false,
      address: ''
    }
  },
  computed: {
    state () {
      const account = this.form.account
      const password = this.form.password
      return {
        account: account.length === 0 ? null : account.length >= 4 && account.length <= 20,
        password: password.length === 0 ? null : password.length >= 6 && password.length <= 20
      }
    }
  },
  methods: {
    onReset () {
      this.form.account = ''
      this.form.password = ''
    },
    async onSubmit () {
      try {
        const { data } = await this.$axios.post('/users/login', this.form)
        this.$q.dialog({
          title: '登入成功',
          message: '歡迎登入背包客棧',
          color: 'red-13',
          ok: true,
          preventClose: true
        })
        this.$store.commit('user/login', data)
        this.$router.push('/') // 回到首頁
      } catch (error) {
        console.log(error)
        this.$q.dialog({
          title: '失敗',
          message: error.response.data.message,
          color: 'red-13',
          ok: true
        })
      }
    }
  }
}
</script>
