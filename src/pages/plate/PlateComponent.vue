<template>
    <div class="el-platecomp">
        板块成分股
        <Table 
          :border="true"
          :tableData="tableData"
          :tableHead="tableHead"
          :tableOption="tableOption"
          :selectionShow="true"
          :indexShow="true"
          indexLabel="编号"
          indexWidth="50"
          >
        </Table>
    </div>
</template>

<script>
import Table from '../../components/Table';
export default {
    name: "plateComponent",
    components: {
        Table
    },
    data() {
        return {
            tableHead: [
                { label: '用户名', param: 'usr',sortable:true },
                { label: '公司名称', param: 'company' },
                { label: '办公邮箱', param: 'email', width:'200' },
                { label: '注册时间', param: 'registTime', sortable:true },
                { label: '审核状态', param: 'status', sortable:true, render:  (row) => {
                    // console.log(this.formatTime);
                    // return this.formatTime(row);
                        if (row.status === 0) {
                            return '未审核'
                        } else if (row.status === 1) {
                            return '审核通过'
                        } else if(row.status ===2) {
                            return '审核不通过'
                        } else {
                            return '禁用'
                        }
                    }        
                }
            ],
            //操作按钮
            tableOption: {
                label: '操作',
                width: '200',
                options: [
                    { label: '预览', type: 'primary',  methods: 'preview' },
                    { label: '审核', type: 'primary',  methods: 'audit' },
                ]
            },
            // 表格基础数据
            tableData:[
                {
                    usr: '2016-05-02',
                    company: '王小虎',
                    email: '上海市普陀区金沙江路 1518 弄',
                    registTime: "2016",
                    status: "未审核"
                    }, {
                    usr: '2016-05-04',
                    company: '王小虎',
                    email: '上海市普陀区金沙江路 1517 弄',
                    registTime: "2017",
                    status: "审核通过",
                    }, {
                    usr: '2016-05-01',
                    company: '王小虎',
                    email: '上海市普陀区金沙江路 1519 弄',
                    registTime: "2018",
                    status: "禁用",
                    },
            ],
        }
    },
    methods: {
        formatTime(row) {
            console.log(row);
        }
    }
}
</script>

<style scoped lang="less">
@import '~@/common/css/plate/plateComponent.less';
</style>