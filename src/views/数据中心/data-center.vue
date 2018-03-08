<template>
  <div class="page-common">
    <div class="tab">

      <Tabs type="card" >
        <TabPane label="微信号备份">
          <div class="data-table">

            <div class="search-wrapper">
              <label>微信号码:</label>
            <IInput class="search-input" v-model="search_wechat" placeholder="请输入要搜索的微信号码(可选)" ></IInput>
              <label>手机号码:</label>
            <IInput class="search-input" v-model="search_phone" placeholder="请输入要搜索的电话号码(可选)" ></IInput>
              <label>备注信息:</label>
            <IInput class="search-input" v-model="search_remark" placeholder="请输入要搜索的备注信息(可选)" ></IInput>
              <Button type="primary">搜索</Button>
            </div>

            <Table border :columns="columnsWechatNumuber" :data="wechatNumberData" width="900" >

            </Table>
            <Page class="data-table-page" :total="100" show-elevator>

            </Page>
          </div>
        </TabPane>
      </Tabs>
    </div>

    <Modal v-model="delete_modal" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>确认删除</span>
      </p>
      <div style="text-align:center">
        <p>确定要删除此条信息吗?</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long :loading="modal_loading" @click="del_item(0)">删除</Button>
      </div>
    </Modal>

  </div>
</template>

<script>

  import {
    Tabs,
    Tabpane,
    Page,
    Input
  } from 'iview'

  export default{
    name:"data-center",
    data(){
      return {
        delete_modal: false,
        modal_loading: false,
        search_wechat: null,
        search_phone: null,
        search_remark: null,
        columnsWechatNumuber: [
          {
            title: '微信号码',
            key: 'wechat_number',
            render: (h, params) => {
              return h('div', [
                h('strong', params.row.wechat_number)
              ])
            },
            width: 200,
            align: 'center'
          },
          {
            title:'手机号码',
            key:'telephone',
            width: 200,
            align: 'center'
          },
          {
            title: '备注',
            key: 'remark',
            width: 200,
            align: 'center'
          },
          {
            title: '操作',
            key: 'action',
            width: 300,
            align: 'center',
            render: (h, parmas) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {

                      this.delete_modal=true
                    }
                  }
                }, '查看详情'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.delete_modal=true
                    }
                  }
                }, '删除'),
              ],

              );
            }
          }
        ],
        wechatNumberData: [
          {
            wechat_number: '12344556',
            telephone: '15982827227',
            remark: '备注',

          },
        ]
      }
    },
    components: {
      Tabs : Tabs,
      Tabpane: Tabpane,
      Page: Page,
      IInput:Input
    },

    methods: {
      viewDetai(index){
        console.log(index)
      },
      deleteWechatNumber(index){
        console.log(index)
      },
      del_item(index){
        this.modal_loading = true
      }
    }
  }
</script>

<style scoped>

  @import '../../styles/common/common.css';

  .tab {
    margin-top: 20px!important;
  }

  .data-table {
    width: 90%;
  }

  .data-table-page {
    margin-top: 20px!important;
    width: 90%;
  }

  .data-table * {
    margin: 0 auto;
  }

  .search-wrapper {
    margin-bottom: 20px!important;
    width: 90%;
  }

  .search-input {
    width: 200px;
  }


</style>