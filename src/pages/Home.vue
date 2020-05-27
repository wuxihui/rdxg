<template>
  <div class="el-home">
    <el-row style="height: 100%;">
      <el-col :span="3" style="min-height: 100;">
      <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" active-text-color="#409EFF" router>
        <!-- :index="'' + item.id"  index只能是字符串形式 -->
          <div v-for="item in sidebarList" :key="item.id" @click="sidebarClick(item)">
            <el-submenu :index="'' + item.id" v-if="item.isChildren">
              <template slot="title"><span>{{item.title}}</span></template>
                <el-menu-item 
                  v-for="itemi in item.chlidren" :key="itemi.id" :index="itemi.router">{{itemi.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.router">
                <template slot="title">
                  <span>{{item.title}}</span>
                </template>
            </el-menu-item>
          </div>
        </el-menu>
      </el-col>
      <el-col :span="21" style="height: 100%;overflow: auto;">
        <new-tabs :sidebarList="sidebarList"></new-tabs>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue';
export default {
  name: "home",
  components: {
    "new-tabs": Tabs
  },
  data() {
    return {
      sidebarList: [
        {
          id: 1, title: "测试", isChildren: false, chlidren: [], router: "test"
        },
        { id: 2, title: "板块战区", isChildren: true, chlidren: [ 
          { id: 100, name: "板块战区列表", isChildren: true, router: "plateManagement"}, 
          { id: 101, name: "板块战区成分股", isChildren: true, router: "warZoneComponent" }
          ] },
        { id: 3, title: "雷达管理", isChildren: true, chlidren: [
          { id: 102, name: "雷达列表", isChildren: true, router: "radarMessage" }, 
          { id: 103, name: "成分股管理", isChildren: true, router: "radarComShareMessage" }
        ] }, {
          id: 4, title: "指标算法", isChildren: true, chlidren: [
            { id: 104, name: "运行日志", router: "operaTionLog" },
          ]
        }, {
          id: 5, title: "系统管理", isChildren: true, chlidren: [
            { id: 105, name: "缓存管理", router: "cacheMessage" }
          ]
        }
      ],
    }
  },
  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    this.sidebarClick();
  },
  methods: {
    sidebarClick(item) {
      this.$store.commit('app/SET_IS_CLOSE', false);
      console.log(item);
      for(let itemi of this.sidebarList) {
          if(!itemi.isChildren) {
              this.$store.commit('app/SET_TAB_LIST', itemi);
          }
          for(let itemj of itemi.chlidren) {
            if(itemi.isChildren) {
                if(this.$route.name == itemj.router) {
                    console.log(itemj);
                    this.$store.commit('app/SET_TAB_LIST', itemj);
                }
            }
          }
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "~@/common/css/home.less";
</style>