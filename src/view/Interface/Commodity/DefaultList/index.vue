<template>
    <div class="whole">
        <!-- 轮播图 -->
        <div class="carousel">
            <div class="left">
                <!-- 分类 -->
                <ul v-for="item in classification" :key="item.id">
                    <li>
                        <span class="majorCategory">{{ item.word }}</span>
                        <span v-for="(type) in item.children" :key="type.id" class="subclass">{{ type.word
                            }}</span>
                    </li>
                </ul>
            </div>
            <div class="center">
                <!-- 轮播 -->
                <el-carousel trigger="click" height="350px">
                    <el-carousel-item v-for="item in carouselData" :key="item.id">
                        <img :src="item.imgUrl" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="right">
                <!-- 个人 -->
                <button @click="back()">前往后台</button>
                <img :src="Home" alt="">
                <div class="title">欢迎来到该平台</div>
            </div>
        </div>
        <!-- 模块展示 -->
        <div class="module">
            <div v-for="item in moduleData" :key="item.id" class="m">
                <div class="left">{{ item.name }}</div>
                <div class="right">
                    <img :src="item.imgUrl" alt="">
                </div>
            </div>
        </div>
        <!-- 物品展示 -->
        <div class="goods">
            <module></module>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// 图片
import C1 from '@/assets/images/carousel/c1.png'
import C2 from '@/assets/images/carousel/c2.png'
import C3 from '@/assets/images/carousel/c3.png'
import C4 from '@/assets/images/carousel/c4.png'
import M1 from '@/assets/images/module/m1.png'
import M2 from '@/assets/images/module/m2.png'
import M3 from '@/assets/images/module/m3.png'
import M4 from '@/assets/images/module/m4.png'
import M5 from '@/assets/images/module/m5.png'
import M6 from '@/assets/images/module/m6.png'
// 
import Home from '@/assets/images/home.jpg'
// 
import Module from '@/components/module.vue'
const router = useRouter()
const classification: any = ref([
    {
        id: 1,
        word: "电子产品",
        children: [
            {
                id: 1,
                word: "手机",
            },
            {
                id: 2,
                word: "平板电脑",
            },
            {
                id: 3,
                word: "笔记本电脑",
            },
        ]
    },
    {
        id: 2,
        word: "家居用品",
        children: [
            {
                id: 1,
                word: "家具"
            },
            {
                id: 2,
                word: "家电",
            },
            {
                id: 3,
                word: "厨房用具"
            }
        ]
    },
    {
        id: 3,
        word: "服装和配饰",
        children: [
            {
                id: 1,
                word: "衣服",
            },
            {
                id: 2,
                word: "鞋子",
            },
            {
                id: 3,
                word: "包",
            },
            {
                id: 4,
                word: "手表"
            }
        ]
    },
    {
        id: 4,
        word: "体育用品",
        children: [
            {
                id: 1,
                word: "自行车",
            },
            {
                id: 2,
                word: "滑板",
            },
            {
                id: 3,
                word: "运动器材",
            },
        ]
    },
    {
        id: 5,
        word: "书籍和学习资料",
        children: [
            {
                id: 1,
                word: "教科书"
            },
            {
                id: 2,
                word: "小说",
            },
            {
                id: 3,
                word: "杂志"
            },
        ]
    },
    {
        id: 6,
        word: "玩具和儿童用品",
        children: [
            {
                id: 1,
                word: "婴儿车",
            },
            {
                id: 2,
                word: "玩具"
            },
            {
                id: 3,
                word: "童车",
            },
        ]
    },
    {
        id: 7,
        word: "艺术品和手工艺品",
        children: [
            {
                id: 1,
                word: "绘画"
            },
            {
                id: 2,
                word: "手工制品"
            }
        ]
    },
    {
        id: 8,
        word: "汽车和摩托车配件",
        children: [
            {
                id: 1,
                word: "轮胎"
            },
            {
                id: 2,
                word: "零件"
            },
        ]
    },
    {
        id: 9,
        word: "办公用品",
        children: [
            {
                id: 1,
                word: "桌子",
            },
            {
                id: 2,
                word: "椅子"
            },
            {
                id: 3,
                word: "打印机"
            },
            {
                id: 4,
                word: "文具"
            }
        ]
    },
    {
        id: 10,
        word: "收藏品",
        children: [
            {
                id: 1,
                word: "硬币"
            },
            {
                id: 2,
                word: "邮票",
            },
            {
                id: 3,
                word: "纪念品"
            }
        ]
    }
])
const carouselData: any = ref([
    {
        id: 1,
        imgUrl: C1,
    },
    {
        id: 2,
        imgUrl: C2
    },
    {
        id: 3,
        imgUrl: C3,
    },
    {
        id: 4,
        imgUrl: C4
    }
])
const moduleData: any = ref([
    {
        id: 1,
        name: "电子产品",
        imgUrl: M6
    },
    {
        id: 2,
        name: "服装和配饰",
        imgUrl: M5
    },
    {
        id: 3,
        name: "艺术品和手工制品",
        imgUrl: M1
    },
    {
        id: 4,
        name: "玩具",
        imgUrl: M2
    },
    {
        id: 5,
        name: "字画",
        imgUrl: M3
    },
    {
        id: 6,
        name: "中外名酒",
        imgUrl: M4
    }
])
const goRouter = () => {
    router.push("/authentication")
}
const goToStore = () => {
    router.push("/store_page")
}
const back = () => {
    router.push("/layout")
}
</script>
<style lang="scss" scoped>
.whole {
    .carousel {
        display: flex;
        height: 350px;

        .left {
            width: 20%;
            background-color: #434343;

            ul {
                li {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    padding: 5px 10px;
                    box-sizing: border-box;

                    .majorCategory {
                        color: #ffffff;
                        font-size: 15px;
                        margin-right: 10px;
                    }

                    .subclass {
                        font-size: 12px;
                        margin: 0 1px;
                        color: #ccc;
                    }

                    span:hover {
                        color: #6772FF;
                    }
                }
            }
        }

        .center {
            width: 60%;
            text-align: center;

            .el-carousel {
                img {
                    width: 100%;
                    height: 350px;
                }
            }
        }

        .right {
            width: 20%;
            background-color: #ffffff;
            text-align: center;

            img {
                margin: 60px 0 20px 0;
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
        }
    }

    // 
    .module {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .m {
            min-width: 33%;
            display: flex;
            height: 150px;
            background-image: linear-gradient(to right, rgb(28, 157, 175), rgb(64, 205, 167));
            line-height: 150px;
            margin: 5px 0;

            .left {
                width: 50%;
                text-align: center;
            }

            .right {
                width: 50%;
                text-align: center;

                img {
                    width: 150px;
                }
            }
        }
    }
}
</style>