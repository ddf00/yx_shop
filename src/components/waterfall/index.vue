<template>
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
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
    name: 'waterfall',
    data() {
        return {
            worthList: [],
            worthListLeft: [],
            worthListRight: [],
            worthUpdate: []
        }
    },
    props: ['scrollBttom'],
    methods: {
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
                item.topics.forEach((item, index)=>{
                    this.worthUpdate.push(item) 
                })
            })
            console.log(this.worthUpdate)
        },
        WorthBuyUpdate() {
            console.log(this.scrollBttom)
        }
    },
    mounted() {
        // 第一次
        this.getWorthBuy()
        // 触底加载
        this.getWorthBuyUpdate()
        // 更新
        this.WorthBuyUpdate()
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
    }
}
</script>

<style lang="less" scoped>
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
</style>
