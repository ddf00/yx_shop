<template>
  <div class="wothBuyContainer">
      <!-- 头部 -->
      <Header title="值得买"/>
      <div class="scrollY" ref="scrollY">
        <div class="Sliding-ele" ref="Sliding">
          <div class="header-swiper">
            <img class="bg" src="http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
            <div class="swiper-title">
              <img src="http://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
              <span>严选好物 用心生活</span>
            </div>
            <!-- 轮播 -->
            <div class="swiperContainer">
                  <van-swipe class="my-swipe" ref="my-swipe" indicator-color="#dd1a21" :show-indicators="true" :loop="false" :width="90">
                  <ul class="swiperList">
                    <van-swipe-item style="height: 50%;" v-for="(navItem, index) in navListData" :key="index">
                        <li class="swiperItem">
                          <div class="itme">
                            <img :src="navItem.picUrl" alt="">
                            <span class="title">{{navItem.mainTitle}}</span>
                            <span class="desc">{{navItem.viceTitle}}</span>
                          </div>
                      </li>
                    </van-swipe-item>
                  </ul>
                  </van-swipe>
            </div>
          </div>
          <!-- 瀑布列表 -->
          <!-- <Waterfall :scrollBttom="scrollBttom"/> -->
           <div class="waterfallContainer"> 
            <div class="boxLeft">
                <div class="item" v-for="(leftItem, index) in worthListLeft" :key="index">
                    <img :src="leftItem.newAppBanner ? leftItem.newAppBanner : leftItem.picUrl" alt="">
                    <div class="desc">{{leftItem.title}}</div>
                    <div class="user">
                        <img :src="leftItem.avatar" alt="">
                        <span class="username">{{leftItem.nickname}}</span>
                        <div class="look">{{leftItem.readCount}}</div>
                    </div>
                </div>
            </div>
            <div class="boxRight">
                <div class="item" v-for="(leftItem, index) in worthListRight" :key="index">
                    <img :src="leftItem.newAppBanner ? leftItem.newAppBanner : leftItem.picUrl" alt="">
                    <div class="desc">{{leftItem.title}}</div>
                    <div class="user">
                        <img :src="leftItem.avatar" alt="">
                        <span class="username">{{leftItem.nickname}}</span>
                        <div class="look">{{leftItem.readCount}}</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BSscroll from "better-scroll";
import Header from "../../components/Header";
import {reqWorthBuy} from "../../api";
import axios from "axios";
export default {
  name: 'WorthBuy',
  components: {
    Header,
  },
  data() {
    return {
      navListData: [],
      worthList: [],
      worthListLeft: [],
      worthListRight: [],
      worthUpdate: [],
      size: 0
    }
  },
  methods: {
    initScroll() {
      this.$nextTick(()=>{
        let scrollEle = new BSscroll(this.$refs.scrollY, {
          click: true,
          scrollY: true,
          // momentum:false,
          // bounce: false,
          scrollbar: true,
          probeType:1,
          scrollEnd: true,
          pullUpLoad:true
        })
        scrollEle.on('scroll',(pos)=>{
          
            if(scrollEle.y < scrollEle.maxScrollY+30) {
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                  console.log('触底了')
                  this.updateup()
                  this.size++
                },100);
            }
        })
      })
    },
    // 上拉更新
    updateup() {
      this.worthUpdate.forEach((item,index)=>{
          if(index % 2 === 0) {
            this.worthListLeft.push(item[this.size])
          }else {
            this.worthListRight.push(item[this.size])
          }
      })
    },
    async getWorthBuyNav() {
      let result = await axios.get('/m/topic/v1/know/navWap.json')
      this.navListData = result.data.data.navList
    } ,
    // 第一次
        async getWorthBuy() {
            let worthListData = await axios.get('/m/topic/v1/find/recManual.json')
            worthListData.data.data.forEach((item, index) => {
                item.topics.forEach((item, index)=>{
                    this.worthList.push(item) 
                })
            })
        },
        // 触底加载
        async getWorthBuyUpdate() {
            let worthListData = await axios.get('m//topic/v1/find/recAuto.json')
            console.log(worthListData)
            worthListData.data.data.result.forEach((item, index) => {
                // item.topics.forEach((item, index)=>{
                //     this.worthUpdate.push(item) 
                // })
                this.worthUpdate.push(item.topics) 
            })
        },
    // async getWorthTop() {
    //   let result = await axios.get('/m/topic/v1/find/recManual.json')
    //   this.topics = result.data.data[0].topics
    //   this.topics2 = result.data.data[1].topics
    // },
    // async getWorthList(page,size,update=false) {
    //   if(update) {
    //     let result = await axios.get(`/m/topic/v1/find/recAuto.json?page=${page++}&size=${size}`)
    //     let data = result.data.data.result[0].topics
    //     data.forEach((item)=>{
    //         this.page1List.push(item)
    //       })
    //     }else {
    //       let result = await axios.get(`/m/topic/v1/find/recAuto.json?page=1&size=1`)
    //       let data = result.data.data.result[0].topics
    //       this.page1List = data
    //     }
    // },
    // async getWorthListR(page,size,update=false) {
    //   if(update) {
    //       let result = await axios.get(`/m/topic/v1/find/recAuto.json?page=${page}&size=${size}`)
    //       let data = result.data.data.result[0].topics
    //       data.forEach((item)=>{
    //         this.page2List.push(item)
    //       })
    //     }else {
    //       let result = await axios.get(`/m/topic/v1/find/recAuto.json?page=2&size=1`)
    //       let data = result.data.data.result[0].topics
    //       this.page2List = data
    //     }
    // },
  },
  mounted() {
    this.initScroll()
    this.getWorthBuyNav()
    // this.getWorthTop()
    // this.getWorthList(1,1)
    // this.getWorthListR(2,1)

     // 第一次
    this.getWorthBuy()
    // 触底加载
    this.getWorthBuyUpdate()
  },
  computed: {
        // 0 1 2 3 4
        // l : 0 2 4
        // r : 1 3
        worthListObj() {
            return this.worthList.forEach((item, index)=>{
                if(index % 2 === 0) {
                    this.worthListLeft.push(item)
                }else {
                    this.worthListRight.push(item)
                }
            })
        },
    },
}
</script>

<style lang="less" scoped>
.wothBuyContainer {
  width: 100%;
  background-color: #eee;
  .scrollY {
    height: calc(100vh - 200px);
    margin-top: 100px;
  }
 .header-swiper {
   height: 684px;
   position: relative;
   overflow: hidden;
   padding: 0 20px;
   .bg {
     position: absolute;
     top: 0;
     left: 0;
     z-index: -1;
     width: 100%;
     height: 518px;
   }
   .swiper-title {
     img {
       display: inline-block;
       width: 130px;
       height: 68px;
       margin-top: 60px;
     }
     span {
       position: absolute;
       top: 80px;
       left: 160px;
       font-size: 30px;
       color: #fff;
     }
   }
   .swiperContainer {
     width: 710px;
     height: 540px;
     background-color: #fff;
     border-radius: 20px;
     overflow: hidden;
     .my-swipe {
       height: 540px;
       .custom-indicator {
         width: 100px;
         height: 100px;
         background-color: red;
       }
     }
     .swiperList {
       height: 100%;
       width: 50%;
       display: flex;
       flex-wrap: wrap;
       .swiperItem {
         height: 50%;
         .itme{
           height: 50%;
           text-align: center;
           font-size: 24px;
           box-sizing: border-box;
           padding: 40px 0 0 10px;
           img {
             width: 120px;
             height: 120px;
             margin: 0 auto;
           }
           .title {
             font-weight: bold;
             display: block;
           }
           .desc {
             color: #c5c5c5;
           }
         }
       }
     }
   }
 }
 .waterfallContainer {
    background-color: #eee;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .boxLeft, .boxRight {
        width: 48%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        .item {
            margin: 10px auto;
            width: 100%;
            height: auto;
            background-color: #fff;
            border-radius: 20px;
        }
        img {
            border-radius: 20px 20px 0 0 ;
            width: 100%;
            height: auto;
        }
        .desc {
            font-size: 30px;
            box-sizing: border-box;
            padding: 10px 10px 0 10px;
        }
        .user {
            width: 100%;
            height: 90px;
            line-height: 90px;
            box-sizing: border-box;
            padding: 10px 10px 0 10px;
            img {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                vertical-align: middle;
                margin-right: 10px;
            }
            .look {
                float: right;
                margin-right: 10px;
            }
        }
    }
}
  // .waterfall {
  //   width: 100%;
  //   display: flex;
  //   box-sizing: border-box;
  //   padding: 30px 20px 0 20px;
  //   justify-content: space-between;
  //   .listLeft {
  //     .itemLeft {
  //       width: 345px;
  //       height: auto;
  //       background-color: #fff;
  //       border-radius: 20px;
  //       margin-bottom: 20px;
  //       // text-align: center;
  //       &:first-child {
  //         width: 345px;
  //         height: 555px;
  //         .lookDetail {
  //           margin-top: 30px;
  //           .userImg {
  //             margin: 0 20px;
  //           }
  //         }
  //       }
  //       &:nth-child(2) {
  //         width: 345px;
  //         height: 400px;
  //         img {
  //           width: 346px;
  //           height: 200px;
  //         }
  //         .lookDetail {
  //           margin-top: 30px;
  //         }
  //       }
  //       img{
  //         width: 345px;
  //         height: 355px;
  //         border-radius: 20px;
  //       }
  //       .desc {
  //         font-size: 30px;
  //         display: block;
  //         width: 100%;
  //         padding: 10px 10px 0 10px;
  //       }
  //       .lookDetail {
  //         width: 100%;
  //         margin-top: 10px;
  //         .userImg {
  //           width: 48px;
  //           height: 48px;
  //           vertical-align: middle;
  //           margin: 0 20px;
  //         }
  //       }
  //     }
  //   }
  //   .listRight {
  //     .itemRight {
  //       width: 345px;
  //       height: 500px;
  //       background-color: #fff;
  //       border-radius: 20px;
  //       margin-bottom: 20px;
  //       &:first-child {
  //         width: 345px;
  //         height: 500px; 
  //       }
  //       &:nth-child(2) {
  //         width: 345px;
  //         height: 400px;
  //         img {
  //           width: 346px;
  //           height: 200px;
  //         }
  //         .lookDetail {
  //           margin-top: 30px;
  //         }
  //       }
  //       img{
  //         width: 355px;
  //         height: 355px;
  //         border-radius: 20px;
  //       }
  //       .desc {
  //         font-size: 30px;
  //         display: block;
  //         width: 100%;
  //         padding: 10px 10px 0 10px;
  //       }
  //       .lookDetail {
  //         width: 100%;
  //         .userImg {
  //           width: 48px;
  //           height: 48px;
  //           vertical-align: middle;
  //           margin: 0 20px;
  //         }
  //       }
  //     }
  //   }
  // }
}
 
</style>
