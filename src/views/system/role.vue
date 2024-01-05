<template>
  <div class="role-page">
    <a-card size="small">
      <a-form
        :model="formState"
        name="basic"
        layout="inline"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="角色名称"
          name="roleName"
        >
          <a-input v-model:value="formState.role" />
        </a-form-item>

        <a-form-item
          label="状态"
          name="status"
        >
          <a-select v-model:value="formState.status" style="width: 180px">
            <a-select-option value="0">停用</a-select-option>
            <a-select-option value="1">启用</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">查询</a-button>
        </a-form-item>
      </a-form>
    </a-card>
   
    <a-card size="small" title="角色列表" class="mt-3">
      <a-table
        size="middle"
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 50 }"
        :scroll="{ y: 240 }"
      >
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'create'">
            <span>{{ $dayjs(text).format('YYYY-MM-DD hh:mm:ss') }}</span>
          </template>
          <template v-if="column.dataIndex === 'status'">
            <a-switch
              checked-children="启用"
              un-checked-children="停用"
              :checked="record.status === 1"
              @change="changeStatus(record as RecordItem)"
            />
          </template>
          <template v-if="column.dataIndex === 'action'">
            <a @click="edit(record.key)">Edit</a>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
const formState = reactive({
  role: '',
  status: '',
})
const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}


const columns = ref([
  {
    title: '角色名称',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '角色值',
    dataIndex: 'value',
    width: 150,
  },
  {
    title: '创建时间',
    dataIndex: 'create',
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    width: 120,
  },
])


const data = ref([...Array(100)].map((_, i) => ({
  key: i,
  name: `Edward King ${ i }`,
  status: i % 2 === 0 ? 1 : 0,
  value: i,
  create: Date.now(),
  address: `London, Park Lane no. ${ i }`,
})))
type RecordItem = typeof data.value[0]

const edit = (key:string) => {}

const changeStatus = (record: RecordItem) => {
  record.status = record.status ? 0 : 1
}
</script>

<style lang="scss" scoped></style>
