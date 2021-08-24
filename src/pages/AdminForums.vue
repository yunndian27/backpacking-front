<template>
  <div id="adminFourm" class="flex justify-center q-mt-md">
    <div class="container">
      <h2>論壇管理</h2>

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
                <div class="text-h6 text-blue-8">論壇</div>
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

<script></script>
