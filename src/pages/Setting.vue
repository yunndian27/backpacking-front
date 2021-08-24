<template>
<div id="setting" class="flex justify-center">
  <div class="container">
    <div class="settingAll q-mt-lg">
      <div class="settingInfo q-mb-md">
        <q-page-container style="padding-top: 0">
          <router-view />
        </q-page-container>
      </div>
      <!-- pc -->
      <div class="settingSelect ">
        <q-list bordered padding class="rounded-borders text-secondary">
          <q-item
            clickable
            v-ripple
            exact
            exact-active-class="menu-link"
            to="/setting"
          >
            <q-item-section avatar>
              <q-icon name="account_box" />
            </q-item-section>

            <q-item-section>編輯個人檔案</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            exact
            exact-active-class="menu-link"
            to="/setting/account"
          >
            <q-item-section avatar>
              <q-icon name="manage_accounts" />
            </q-item-section>

            <q-item-section>帳號設定</q-item-section>
          </q-item>
        </q-list>
      </div>
      <!-- m -->
      <div class="settingSelectM">
        <q-btn-group outline spread>
          <q-btn class="selectButton"
            outline exact
            color="secondary"
            label="編輯個人檔案"
            icon="account_box"
            to="/setting" />
          <q-separator />
          <q-btn class="selectButton"
            outline
            color="secondary"
            indicator-color="purple"
            label="帳號設定"
            icon="manage_accounts"
            to="/setting/account" />
        </q-btn-group>
      </div>
    </div>
  </div>
</div>
</template>

<script>

</script>
