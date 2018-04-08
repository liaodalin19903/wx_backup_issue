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
    margin-bottom: 20px!important;
  }

  .data-table > * {
    /*margin: 0 auto;*/
    margin-left: 80px;
  }

  .search-wrapper {
    margin-bottom: 20px!important;
    width: 90%;
  }

  .search-input {
    width: 200px;
  }

  .create-input {
    width: 300px;
  }


  .new-add-button {
    width: 64px;
    margin-bottom: 10px;
  }



</style>

<template>
  <div class="page-common">
    <div class="tab">

      <Tabs type="card" >
        <TabPane label="微信号备份">
          <div class="data-table">

            <div class="search-wrapper">
              <label>微信号码:</label>
            <IInput class="search-input" v-model="search_data.search_wechat" placeholder="请输入要搜索的微信号码(可选)" ></IInput>
              <label>手机号码:</label>
            <IInput class="search-input" v-model="search_data.search_phone" placeholder="请输入要搜索的电话号码(可选)" ></IInput>
              <label>备注信息:</label>
            <IInput class="search-input" v-model="search_data.search_remark" placeholder="请输入要搜索的备注信息(可选)" ></IInput>
              <Button type="primary" @click="search">搜索</Button>
            </div>

            <Button type="success" class="new-add-button" @click="modal.add_modal=true" >新增</Button>

            <Table border :columns="columnsWechatNumuber" :data="wechatNumberData" width="900" >

            </Table>
            <Page  class="data-table-page" :total="wechat_num_count" :page-size="20" @on-change="page_change" show-elevator>

            </Page>
          </div>
        </TabPane>
      </Tabs>
    </div>

    <Modal v-model="modal.delete_modal" width="360">
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

    <Modal
      v-model="modal.add_modal"
      title="添加微信号码"
      @on-ok="create_ok"
      @on-cancel="create_cancle">
      <p><IInput class="create-input" v-model="create_data.wechat_num" placeholder="请输入微信号"></IInput></p>
      <p><IInput class="create-input" v-model="create_data.telephone_num" placeholder="请输入手机号码"></IInput></p>
      <p><IInput class="create-input" v-model="create_data.remark" placeholder="请输入备注"></IInput></p>
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

        modal: {
          add_modal: false,
          delete_modal: false,
        },
        modal_loading: false,
        search_data: {
          search_wechat: null,
          search_phone: null,
          search_remark: null
        },
        create_data: {
          wechat_num: null,
          telephone_num: null,
          remark: null
        },
        columnsWechatNumuber: [
          {
            title: '微信号码',
            key: 'wechat_num',
            render: (h, params) => {
              return h('div', [
                h('strong', params.row.wechat_num)
              ])
            },
            width: 200,
            align: 'center'
          },
          {
            title:'手机号码',
            key:'telephone_num',
            width: 200,
            align: 'center'
          },
          {
            title: '备注',
            key: 'remark',
            width: 350,
            align: 'center'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
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

                      this.$router.push({ path: this.$Paths.dataCenterDetail + '/' + params.row.id })
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
                      this.modal.delete_modal=true
                    }
                  }
                }, '删除'),
              ],

              );
            }
          }
        ],
        wechatNumberData: [],
        wechat_num_count: 0
      }
    },
    components: {
      Tabs : Tabs,
      Tabpane: Tabpane,
      Page: Page,
      IInput:Input
    },

    methods: {

      get_wx_obj_list(page){

        var params = {
          page: page
        }

        this.$http.get(this.$Urls.wx_numbers.list(), {params}).then(response => {

          this.wechat_num_count = Number(response.data.count)
          this.wechatNumberData = response.data.results
        }).catch(response => {

          this.$Message.error(this.$Utils.convert_error_data_to_str(response.statusText, response.data))
        })
      },
      viewDetai(index){
        console.log(index)
      },
      deleteWechatNumber(index){
        console.log(index)
      },
      del_item(index){
        this.modal_loading = true
      },
      // 页面的页数改变
      page_change(index) {
        this.get_wx_obj_list(index)
      },
      create_ok(){

        // 验证
        if(!this.create_data.wechat_num  && !this.create_data.telephone_num  && !this.create_data.remark) {
          this.$Message.error("请填写信息")
          return
        }

        var params = this.create_data

        this.$http.post(this.$Urls.wx_numbers.create(), params).then((response) => {

          this.$Message.success("添加成功")

          // 触发请求第一页
          this.page_change(1)

        }).catch((response) => {
          this.$Message.error(this.$Utils.convert_error_data_to_str(response.statusText, response.data))
        })
      },
      create_cancle(){

      },

      // 搜索
      search() {

        var params = {
          wechat_num: this.search_data.search_wechat,
          telephone_num: this.search_data.search_phone,
          remark: this.search_data.search_remark
        }

        this.$http.get(this.$Urls.wx_numbers.list(), {params: params}).then(response => {

          this.wechatNumberData = response.data.results
          this.$Message.success("搜索成功")
        }).catch(response => {

          this.$Message.error(this.$Utils.convert_error_data_to_str(response.statusText, response.data))
        })
      },

    },

    // 生命周期钩子
    created(){

      debugger
      // 判断是否登录
      if(!this.$Utils.is_login()) {

        this.$Message.error("请登录用户")
        this.$router.push({path: this.$Paths.home})
      }

      this.get_wx_obj_list(1)  // 获取第一页微信数据
    }


  }
</script>

