<template>
        <div class="cateListContainer" v-if="cateListObj">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="cateListObj">
                <van-swipe-item v-for="(swiperItem, index) in cateListObj.category.bannerUrlList" :key="index">
                    <img :src="swiperItem" alt="">
                </van-swipe-item>
            </van-swipe>
            <div class="title">{{cateListObj.category.name}}</div>
            <div class="desc">{{cateListObj.category.frontDesc}}</div>
            <!-- 商品列表 -->
            <ShopList :cateList="cateListObj.itemList"/>
        </div>
</template>

<script type="text/ecmascript-6">
import {reqCateList} from "../../api";
import ShopList from "../ShopList";
export default {
    name: 'CateList',
    components: {
        ShopList
    },
    props: ['navId'],
    data() {
        return {
            cateList: []
        }
    },
    methods: {
        async getCateList() {
            this.cateList = await reqCateList()
        },
    },
    mounted() {
        this.getCateList()
    },
    computed: {
        cateListObj(){
            console.log("-----------------------")
            console.log(this.cateList.find(item => item.category.parentId === this.navId))
            return this.cateList.find(item => item.category.parentId === this.navId)
        }
    }
}
</script>

<style lang="less" scoped>
.cateListContainer {
    text-align: center;
    .my-swipe {
        width: 100%;
        height: 350px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .title {
        font-size: 32px;
        margin-top: 10px;
    }
    .desc {
        color: #999;
        margin-top: 10px;
    }
}
 
</style>
