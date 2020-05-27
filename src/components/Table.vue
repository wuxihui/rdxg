<template>
    <div class="new-table">
        <el-table
            :data="tableData"
            :border="border"
            @selection-change="handleSelectionChange"
            style="width: 100%">
            <!-- 多选列 highlight-current-row 是否高亮当前行-->
            <el-table-column
                v-if="selectionShow"
                type="selection"
                align="center"
                highlight-current-row	
                width="55">
            </el-table-column>
            <!-- 排序列 -->
            <el-table-column
                v-if="indexShow"
                :label="indexLabel"
                :width="indexWidth"
                align="center"
                >
                <template slot-scope="scope">
                    <span>{{scope.$index + 1}}</span>
                </template>
            </el-table-column>
            <!-- 数据展示区 -->
            <el-table-column 
                v-for="(item,index) in tableHead" 
                :width="item.width" 
                :key="index" 
                align="center" 
                :label="item.label" 
                :prop="item.param" 
                >
                <template slot-scope="scope">
                    <span v-if="item.render">
                        {{item.render(scope.row)}}
                    </span>
                    <span v-else>{{scope.row[item.param]}}</span>
                </template>
            </el-table-column>
            <el-table-column v-if="tableOption.label" :width="tableOption.width" :label="tableOption.label" align="center" class-name="small-padding fixed-width">
                <template slot-scope="scope">
                <el-button  v-for="(item,index) in tableOption.options" :key="index" :type="item.type" :icon="item.icon" @click="handleButton(item.methods,scope.row,scope.row)" size="mini">
                    {{item.label}}
                </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "Table",
    props: {
        selectionShow: Boolean, //是否显示多选列
        tableOption: Object, //操作列
        indexShow: Boolean, //排序列
        border: Boolean, //是否带边框
        filterShow: Boolean, //是否过滤
        indexLabel: null, //排序列名称
        indexWidth: null, //排序列宽度
        tableHead: Array,  // 表头数据
        tableData: Array, // 表格数据
    },
    methods: {
      handleButton(methods) {
         console.log(methods);
      },
      handleSelectionChange(val) {
        console.log(val);
        
      }
    }
}
</script>

<style lang="less" scoped>

</style>