<template>
      <div class="header-Container">
    <!-- 头部 -->
      <div class="header">
        <img class="logo" src="../../static/images/logo.png" alt="">
        <div class="searchInput" @click="toSearch">
            <i class='iconfont icon-sousuo'></i>
        </div>
        <div class="btn">登录</div>
      </div>
      <!-- 导航滑屏 -->
        <div class="navScroll" ref="navScroll">
          <ul class="navList" ref="navList" v-if="indexData.kingKongModule">
            <li class="navItem" @click="changeNavId(0, 0)" :class="{activeClass: navIndex === 0}">
              推荐
            </li>
            <li class="navItem" @click="changeNavId((index + 1),  navItem.L1Id)" :class="{activeClass: navIndex === (index + 1)}" v-for="(navItem, index) in indexData.kingKongModule.kingKongList" :key="index">
              {{navItem.text}}
            </li>
          </ul>
            <div class="arrow"><van-icon class="icon" name="arrow-down" size="20" /></div>
        </div>
        <!-- 内容区域 -->
        <Recommend v-show="navIndex === 0"/>
        <CateList v-show="navIndex !== 0" :navId="navId"/>
    </div>
</template>

<script type="text/ecmascript-6">
import Recommend from "../../components/Recommend";
import CateList from "../../components/CateList";
import BSscroll from "better-scroll";
import { mapState } from "vuex";
export default {
    name: 'HeaderNav',
    data() {
        return {
          navIndex: 0,
          navId: 0, // 导航动态class标识
        }
    },
    components: {
      Recommend,
      CateList
    },
    methods: {
        changeNavId(navIndex, navId) {
            this.navIndex = navIndex
            this.navId = navId
            // 非等于0  
            if(navIndex  !== 0) {
                console.log('111')
            }
        },
        initScroll() {
            let navScroll = new BSscroll(this.$refs.navScroll, {
            click: true, 
            scrollX: true,
            })
        },
        toSearch() {
          this.$router.replace('/search')
        }
    },
    mounted(){
        this.$store.dispatch('getIndexData')
    },
    computed: {
        ...mapState({
        indexData: state => state.indexData.indexData
        })
    },

    watch: {
      indexData: {
        handler: function () {
          this.initScroll()
        },
        deep: true
      }
    }
}
</script>

<style lang="less" scoped>
 .header-Container {
      width: 100%;
      height: 100%;
      z-index: 999 !important;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #fff;
    }
    .header{
			display: flex;
			width: 100%;
			height: 60px;
			padding: 10px 0;
			.logo{
				width: 140px;
				height: 40px;
				margin: 10px 30px;
      }
			.searchInput {
				height: 60px;
				width: 420px;
				background: #ededed;
				position: relative;
				border-radius: 10px;
				.iconfont{
					font-size: 30px;
					position: absolute;
					left: 10px; 
					top: 25%;
        }
				input{
					border-radius: 10px;
					height: 60px;
					width: 370px;
					margin-left: 50px;
        }
				.placeholder{
					font-size: 24px;
					color: #666;
        }
      }
			.btn{
				width: 100px;
				height: 50px;
				padding: 0 4px;
				color: #b4282d;
				line-height: 56px;
				text-align: center;
				font-size: 24px;
				margin: 0 20px;
				white-space: nowrap;
				overflow: hidden;
        text-overflow: ellipsis;
        border: 1px solid #b4282d;
        border-radius: 100px;
      }
    }
    .navScroll {
      display: flex;
      overflow: hidden;
      height: 60px;
      width: calc(100vw - 30px);
      position: relative;
      .navList{
        white-space: nowrap;
        height: 60px;
        display: flex;
        .navItem {
          display: inline-block;
          height: 100%;
          font-size: 30px;
          line-height: 60px;
          text-align: center;
          margin: 0 30px;
          box-sizing: border-box;
          &.activeClass {
            color: #dd1a21;
            border-bottom: 5px solid #dd1a21;
          }
        }
      }
      .arrow {
        position: absolute;
        right: -10px;
        top: 10px;
        width: 100px;
        height: 60px;
        background-color: #fff;
        text-align: center;
        line-height: 60px;
        .icon {
          color: #666;
        }
      }
    }
</style>
