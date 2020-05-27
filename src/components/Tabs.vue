<template>
    <div class="tabs">
       <ul>
           <li 
              v-for="(item, index) in tabList" 
              :key="index"
              @click="switchRouter(item)"
              :style="{ 'background': item.router == $route.name ? '#3eaf7c' : '', 'color': item.router == $route.name ? '#fff' : '' }">
               <span v-if="item.title">{{item.title}}</span>
               <span v-if="item.name">{{item.name}}</span>
               <i v-if="item.name" class="el-icon-circle-close" @click="closeTabClick(item)"></i>
           </li>
       </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Tabs",
    props: ['sidebarList'],
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState('app', ['tabList', 'isCurrentRoute'])
    },
    methods: {
        closeTabClick(item) {
            console.log(6666);
            console.log(item);
           //区分是否来自关闭按钮
           this.$store.commit('app/SET_IS_CLOSE', true);
           //传入需要删除的值
           this.$store.commit('app/SET_TAB_LIST', item);
        },
        //路由切换
        switchRouter(item) {
            this.$router.push(item.router);
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/common/variable.less";
.tabs {
    width: 100%;
    border-bottom: 1px solid @ccc;
    overflow-x: auto;
    background: @fff;
    height: 40px;
    padding: 0 10px;
    ul {
        display: flex;
        margin-top: 5px;
        li {
            box-sizing: border-box;
            height: 30px;
            padding: 5px;
            border: 1px solid @ccc;
            margin: 0 5px;
            cursor: pointer;
        }
    }
}
</style>