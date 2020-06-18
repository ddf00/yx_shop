<template>
  <div class="cateGoryContainer">
    <div class="header">
      <div class="input">
        <i class='iconfont icon-sousuo'></i>
        <span>搜索商品, 共33516款好物</span>
      </div>
    </div>
    <div class="contntContainer">
      <div class="leftNav" ref="leftNav">
        <ul class="navList">
          <li class="navItem" :class="{active: navId === itemList.id}" @click="changeNavId(itemList.id)" v-for="itemList in cateList" :key="itemList.id">{{itemList.name}}</li>
        </ul>
      </div>
      <div class="rightList" ref="rightList" v-if="cateGoryObj">
        <div class="listContainer" ref="listContainer">
        <img class="banner" :src="cateGoryObj.imgUrl" alt="">
            <ul class="list">
              <li class="Item" v-for="item in cateGoryObj.subCateList" :key="item.id">
                <img :src="item.wapBannerUrl" alt="">
                <div>{{item.name}}</div>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BSscroll from "better-scroll";
import { mapState, mapActions } from "vuex";
import {reqListData} from "../../api";
export default {
    name: 'CateGory',
    data() {
      return {
        navId: '',
        cateList: [],
        indexId: 0
      }
    },
    methods: {
      initScroll() {
        this.$nextTick(()=>{
          let leftNavScroll = new BSscroll(this.$refs.leftNav,{
            click: true,
            scrollY: true
          })
          let rightNavScroll = new BSscroll(this.$refs.rightList,{
            click: true,
            scrollY: true
          })
          let scrollList = new BSscroll(this.$refs.listContainer,{
            click: true,
            scrollY: true
          })
        })
      },
      async getCateGoryList() {
        let cateList = await reqListData()
        this.cateList = cateList
        this.navId = this.cateList[0].id
      },
      changeNavId(navId) {
        this.navId = navId
      }
      
    },
    mounted() {
      this.getCateGoryList()
    },
    beforeUpdate(){
      this.initScroll()

    },
    computed: {
      cateGoryObj(){
        return this.cateList.find(item => item.id === this.navId)
      }
    }
}
</script>

<style lang="less" scoped>
.cateGoryContainer {
  .header {
    width: 100%;
    height: 90px;
    padding: 18px 0;
    box-sizing: border-box;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    .input {
      width: 690px;
      height: 56px;
      background-color: #ededed;
      border-radius: 10px;
      margin: 0 auto;
      text-align: center;
      line-height: 56px;
      .iconfont {
        font-size: 30px;
        margin-right: 10px;
      }
    }
  }
  .contntContainer {
    margin-top: 100px;
    display: flex;
    height: calc(100vh - 180px);
    box-sizing: border-box;
    border-top: 1px solid #ccc;
    overflow: hidden;
    .leftNav {
      width: 25%;
      overflow: hidden;
      box-sizing: border-box;
      border-right: 1px solid #ccc;
      .navList {
        .navItem {
          width: 100%;
          height: 50px;
          margin-top: 40px;
          font-size: 28px;
          text-align: center;
          position: relative;
          &.active {
            &::after{
              content: "";
              height: 70%;
              width: 2px;
              position: absolute;
              top: 0;
              left: 6px;
              background-color: #B4282D;
            }
          }
        }
      }
    }
    .rightList {
      width: 80%;
      padding: 30px 30px 21px 30px;
      .banner {
        width: 528px;
        height: 192px;
        display: block;
      }
        .list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
          .Item {
            width: 144px;
            height: 216px;
            img {
              width: 100%;
              height: 144px;
            }
          }
        }
    }
  }
}
 
</style>
