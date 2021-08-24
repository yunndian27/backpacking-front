<template>
  <div id="register" class="flex justify-center items-center">
    <div class="regCard">
      <div class="regform">
        <h2 class="regTitle">註冊</h2>
        <div class="regInfo">請輸入您想要的帳號名稱，請注意，此帳號名稱將不可隨意更換。<br>登入後可從設定中編輯個人檔案，使用者名稱如同筆名，可以編輯更換。</div>
        <div class="regFormBox">
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
              v-model="form.email"
              label="Email"
              hint="請輸入有效的信箱"
              lazy-rules
              :state="state.email"
              :rules="[val => !!val || 'Email is missing', isValidEmail]"
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
            <q-checkbox
              v-model="form.accept"
              size="sm" val="sm"
              color="secondary"
            >我已閱讀，並且同意遵守背包客棧自助旅行<div flat class="textLink" @click="fixed = true" >論壇規則</div>。
            </q-checkbox>
            <q-dialog v-model="fixed">
              <q-card>
                <q-card-section>
                  <div class="text-h6">論壇規則</div>
                </q-card-section>

                <q-separator />

                <q-card-section class="scroll dialogCard">
                  <p>
                  使用者於本站註冊即代表同意遵守下列所有項目，不同意者不得註冊。<br><br>
                  一、背包客棧為交流旅行資訊的園地，以推廣自助旅行並協助網友取得旅遊資訊為最高宗旨。<br>
                  二、發言時必需尊重他人，不得發表毀謗他人、人身攻擊、族群歧視、政治敏感、蓄意挑釁及任何違反法律或善良風俗及之言論。<br>
                  三、若有發現違反本站宗旨或偏離主題的言論，站內管理人員有權不經事先告知直接對您的發言做編修或刪除。<br>
                  四、不得發表違反著作權之內容，若需引用他人文章或圖片，必需註明出處並取得必要之許可。發文者必須自行遵守相關法規並承擔責任，本站無義務為使用者過濾發文內容或負擔法律責任。<br>
                  五、發文者於本站發表之文章，同意供維奇系統為平台的背包攻略所使用，並遵守背包攻略之授權規範。同時發文者同意本站相關人員將其文章彙整編輯為精華文章，除非發文者明確表達反對之意。<br>
                  六、您的文章可能透過本站之RSS系統被其他網站引用，或由站方摘要部分文字及照片至外站作為推廣之用。<br>
                  七、各版面管理人員有權基於個人主觀判斷進行版面管理，包括修改、編輯、移動、刪除等，對管理人員的處置有所疑義時，請直接向系統管理員反應，使用者於公開版面中討論站務管理問題將視同離題文章處理之。<br>
                  八、經系統管理員認定不遵守本站規定或不適應站內文化者，系統管理員有權做出刪除帳號或禁止發表等必要處分。<br>
                  九、未經當事人同意不得公佈他人隱私資料於本站，例如姓名、地址、電話等。任何不利於他人之言論與指涉，無論是否屬實，發文者須自負法律責任。<br>
                  十、您必須閱讀並同意本站隱私權政策。<br>
                  十一、本守則得由系統管理員隨時增訂編修，即刻生效並朔及既往，不同意新條文者須於三日內自行刪除於本站內發表之文章。<br>
                  十二、使用者於本站註冊即代表同意遵守本守則中所有項目，若不同意者不得註冊。<br>
                  </p>
                </q-card-section>

                <q-separator />
                <q-card-actions align="right">
                  <q-btn flat label="同意" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>

            <div class="flex justify-center">
              <q-btn unelevated label="註冊" type="submit" color="primary" class="q-px-md"/>
              <q-btn outline label="重置" type="reset" color="grey-9" class="q-px-md q-ml-lg" />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isEmail from 'validator/es/lib/isEmail'

export default {
  data () {
    return {
      form: {
        account: '',
        email: '',
        password: '',
        accept: false
      },
      fixed: false
    }
  },
  computed: {
    state () {
      const account = this.form.account
      const password = this.form.password
      const email = this.form.email
      const accept = this.form.accept
      return {
        account: account.length === 0 ? null : account.length >= 4 && account.length <= 20,
        password: password.length === 0 ? null : password.length >= 6 && password.length <= 20,
        email: email.length === 0 ? null : isEmail(email),
        accept: accept === false ? null : true
      }
    }
  },
  methods: {
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || '請確認信箱是否正確'
    },
    async onSubmit () {
      try {
        await this.$axios.post('/users', this.form)
        this.$q.dialog({
          title: '註冊成功',
          message: '歡迎成為會員',
          color: 'red-13',
          ok: true,
          preventClose: true
        })
        this.$router.push('/') // 回到首頁
      } catch (error) {
        console.log(error)
        this.$q.dialog({
          title: '註冊失敗',
          message: '再試一次',
          color: 'red-13',
          ok: true
        })
      }
    },
    onReset () {
      this.form.account = ''
      this.form.email = ''
      this.form.password = ''
      this.form.accept = false
    }
  }
}
</script>
