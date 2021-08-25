<template>
<div id="formRes" >
  <h2 class="text-center q-mb-lg q-mt-lg">有話要說</h2>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md"
  >
    <div class="row">
      <div class="col-6 q-pr-lg q-mb-md">
        <q-input
          outlined
          v-model="resForm.name"
          label="您的名子 *"
          hint="請輸入帳號或稱呼"
          lazy-rules
          :rules="[ val => val && val.length > 0 || '請輸入名子']"
        />
      </div>
      <div class="col-6 q-mb-md">
        <q-input
          outlined
          v-model="resForm.email"
          label="信箱 *"
          lazy-rules
          :rules="[val => !!val || '請輸入可使用的信箱', isValidEmail]"
        />
      </div>
      <div class="col-8 q-pr-lg q-mb-md">
        <q-select outlined v-model="resForm.type" :options="optType" label="主題類型" />
      </div>
      <div class="col-4 q-mb-md">
        <q-select outlined v-model="resForm.category" :options="optCat" label="分類" />
      </div>
      <div class="col-12 q-mb-md">
        <q-input
          v-model="resForm.text"
          label="請輸入建議，會盡快回覆給您！"
          outlined
          type="textarea"
        />
      </div>
      <div class="col-12 q-mb-xl flex justify-center">
        <q-btn label="傳送" type="submit" color="primary" unelevated />
        <q-btn label="重寫" type="reset" color="secondary" outline class="q-ml-md" />
      </div>
    </div>
  </q-form>
</div>
</template>

<script>
export default {
  name: 'formRes',
  data () {
    return {
      resForm: {
        name: '',
        email: '',
        type: '',
        text: '',
        category: ''
      },

      optType: [
        '東北亞',
        '東南亞',
        '歐洲',
        '中國港澳',
        '台灣',
        '美洲',
        '紐澳',
        '太平洋諸島',
        '南亞',
        '非西',
        '非洲',
        '其他'
      ],
      optCat: ['飲食', '住宿', '交通', '遊記', '景點', '金錢', '氣候', '其他']
    }
  },
  methods: {
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || '請確認信箱是否正確'
    },
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>
