<template>
    <el-card class="whole">
        <div class="top">
            <div class="first" ref="person"></div>
            <div class="first" ref="seller"></div>
            <div class="first" ref="sale"></div>
            <div class="first" ref="money"></div>
        </div>
        <div class="bottom">
            <div class="line" ref="line"></div>
        </div>
    </el-card>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
const person = ref()
const seller = ref()
const sale = ref()
const money = ref()
const line = ref()
const initPerson = () => {
    let personChart = echarts.init(person.value)
    let option = {
        backgroundColor: "#062a44",
        title: {
            text: "当前用户总数",
            x: 'center',
            y: 'bottom', textStyle: {
                fontSize: 20,
                fontWeight: 'bolder',
                // color: '#333'        // 主标题文字颜色
                color: '#fff'
            },
        },
        series: [{
            name: '刻度',
            type: 'gauge',
            radius: '90%',
            min: 0,
            max: 100,
            splitNumber: 5, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']]
                }
            },//仪表盘轴线
            axisLabel: {
                show: true,
                color: '#fff',
                distance: 30
            },//刻度标签。
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 1
                },
                length: -8
            },//刻度样式
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                    color: '#fff'
                }
            },//分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {


            type: 'gauge',
            radius: '80%',
            center: ['50%', '50%'],

            splitNumber: 0, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    color: [
                        [
                            0.98, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#ae3df6'
                                },
                                {
                                    offset: 1,
                                    color: '#53bef9'
                                }
                            ]
                            )
                        ],
                        [
                            1, '#222e7d'
                        ]
                    ]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                show: true,
                offsetCenter: [0, '-20%'], // x, y，单位px
                textStyle: {
                    color: '#ddd',
                    fontSize: 50
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, 0],
                color: '#ddd',
                formatter: function (params) {
                    return params
                },
                textStyle: {
                    fontSize: 20
                }
            },
            data: [{
                // name: "当前用户总数",
                value: 10
            }]
        }
        ]
    };
    personChart.setOption(option)
}
const initSeller = () => {
    let sellerChart = echarts.init(seller.value)
    let option = {
        backgroundColor: "#062a44",
        title: {
            text: "当前卖家总数",
            x: 'center',
            y: 'bottom', textStyle: {
                fontSize: 20,
                fontWeight: 'bolder',
                // color: '#333'        // 主标题文字颜色
                color: '#fff'
            },
        },
        series: [{
            name: '刻度',
            type: 'gauge',
            radius: '90%',
            min: 0,
            max: 100,
            splitNumber: 5, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']]
                }
            },//仪表盘轴线
            axisLabel: {
                show: true,
                color: '#fff',
                distance: 30
            },//刻度标签。
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 1
                },
                length: -8
            },//刻度样式
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                    color: '#fff'
                }
            },//分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {


            type: 'gauge',
            radius: '80%',
            center: ['50%', '50%'],

            splitNumber: 0, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    color: [
                        [
                            0.98, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#ae3df6'
                                },
                                {
                                    offset: 1,
                                    color: '#53bef9'
                                }
                            ]
                            )
                        ],
                        [
                            1, '#222e7d'
                        ]
                    ]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                show: true,
                offsetCenter: [0, '-20%'], // x, y，单位px
                textStyle: {
                    color: '#ddd',
                    fontSize: 50
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, 0],
                color: '#ddd',
                formatter: function (params) {
                    return params
                },
                textStyle: {
                    fontSize: 20
                }
            },
            data: [{
                // name: "当前用户总数",
                value: 5
            }]
        }
        ]
    };
    sellerChart.setOption(option)
}
const initSale = () => {
    let saleChart = echarts.init(sale.value)
    let option = {
        backgroundColor: "#062a44",
        title: {
            text: "当前销售总数",
            x: 'center',
            y: 'bottom', textStyle: {
                fontSize: 20,
                fontWeight: 'bolder',
                // color: '#333'        // 主标题文字颜色
                color: '#fff'
            },
        },
        series: [{
            name: '刻度',
            type: 'gauge',
            radius: '90%',
            min: 0,
            max: 100,
            splitNumber: 5, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']]
                }
            },//仪表盘轴线
            axisLabel: {
                show: true,
                color: '#fff',
                distance: 30
            },//刻度标签。
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 1
                },
                length: -8
            },//刻度样式
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                    color: '#fff'
                }
            },//分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {


            type: 'gauge',
            radius: '80%',
            center: ['50%', '50%'],

            splitNumber: 0, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    color: [
                        [
                            0.98, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#ae3df6'
                                },
                                {
                                    offset: 1,
                                    color: '#53bef9'
                                }
                            ]
                            )
                        ],
                        [
                            1, '#222e7d'
                        ]
                    ]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                show: true,
                offsetCenter: [0, '-20%'], // x, y，单位px
                textStyle: {
                    color: '#ddd',
                    fontSize: 50
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, 0],
                color: '#ddd',
                formatter: function (params) {
                    return params
                },
                textStyle: {
                    fontSize: 20
                }
            },
            data: [{
                // name: "当前用户总数",
                value: 10
            }]
        }
        ]
    };
    saleChart.setOption(option)
}
const initMoney = () => {
    let moneyChart = echarts.init(money.value)
    let option = {
        backgroundColor: "#062a44",
        title: {
            text: "当前成交额",
            x: 'center',
            y: 'bottom', textStyle: {
                fontSize: 20,
                fontWeight: 'bolder',
                // color: '#333'        // 主标题文字颜色
                color: '#fff'
            },
        },
        series: [{
            name: '刻度',
            type: 'gauge',
            radius: '90%',
            min: 0,
            max: 100,
            splitNumber: 5, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']]
                }
            },//仪表盘轴线
            axisLabel: {
                show: true,
                color: '#fff',
                distance: 30
            },//刻度标签。
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 1
                },
                length: -8
            },//刻度样式
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                    color: '#fff'
                }
            },//分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {


            type: 'gauge',
            radius: '80%',
            center: ['50%', '50%'],

            splitNumber: 0, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    color: [
                        [
                            0.98, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#ae3df6'
                                },
                                {
                                    offset: 1,
                                    color: '#53bef9'
                                }
                            ]
                            )
                        ],
                        [
                            1, '#222e7d'
                        ]
                    ]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                show: true,
                offsetCenter: [0, '-20%'], // x, y，单位px
                textStyle: {
                    color: '#ddd',
                    fontSize: 50
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, 0],
                color: '#ddd',
                formatter: function (params) {
                    return params
                },
                textStyle: {
                    fontSize: 20
                }
            },
            data: [{
                // name: "当前用户总数",
                value: 10
            }]
        }
        ]
    };
    moneyChart.setOption(option)
}
const initLine = () => {
    const lineChart = echarts.init(line.value)
    let option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '14%'];
            }
        },

        legend: {
            data: ['今日投诉曲线', '平均线', '目标线'],
            x: 'right',
            top: "20px",
            bottom: "20px"
        },

        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            boundaryGap: true,

            data: ['0.1', '1', '1.9', '2.8', '3.7', '4.6', '5.5', '6.4', '7.3', '8.2', '9.1', '10', '10.9', '11.8', '12.7', '13.6']
        },
        yAxis: [{
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    type: 'dotted',
                }
            },
            splitArea: {//背景条纹
                show: true,
                areaStyle: {
                    color: [
                        'rgba(255,255,255,0)',
                        'rgba(242,243,248,1)'
                    ]
                }

            },
            min: 0,
            splitNumber: 5,
        }],
        dataZoom: [{
            type: "slider", /*类型*/
            xAxisIndex: 0, /*对应的轴*/
            bottom: "10", /*位置，定位*/
            start: 20, /*开始*/
            end: 100, /*结束*/
            handleIcon: "M0,0 v9.7h5 v-9.7h-5 Z",
            handleStyle: { /*手柄的样式*/
                color: "#40bcf9",
                borderColor: "#1fb2fb"
            },
            backgroundColor: "#e2f3ff", /*背景 */
            dataBackground: { /*数据背景*/
                lineStyle: {
                    color: "#000000"
                },
                areaStyle: {
                    color: "#d4d9dd"
                }
            },
            fillerColor: "rgba(31,178,251,0.2)", /*被start和end遮住的背景*/
            labelFormatter: function (value, params) { /*拖动时两端的文字提示*/
                var str = "";
                if (params.length > 4) {
                    str = params.substring(0, 4) + "…";
                } else {
                    str = params;
                }
                return str;
            }
        }],
        grid: {
            left: '1rem',
            right: '4%',
            bottom: '20%',
            top: '14%',
            containLabel: true,
            borderWidth: '0'
        },
        series: [
            {
                name: "今日投诉曲线",
                type: "line",
                smooth: true,
                symbol: 'circle',
                symbolSize: 10,
                data: [0, 0.5, 0.8, 1, 1.2, 1.5, 1.6, 1.8, 2.5, 3, 4, 4.8, 6, 7.4, 8.4, 9.2],
                itemStyle: {
                    normal: {
                        color: '#5fbdff',
                        lineStyle: {
                            width: 3
                        }
                    }
                }

            },
            {
                name: "平均线",
                type: "line",
                smooth: true,
                symbol: 'circle',
                symbolSize: 10,
                data: [0, 0.9, 1.1, 1.5, 2, 1.5, 1.6, 1.8, 1.9, 2, 2.4, 2.8, 3, 3.5, 4, 5],
                itemStyle: {
                    normal: {
                        color: '#ff975f',
                        lineStyle: {
                            width: 3,
                            type: 'dotted',
                        }
                    }
                }

            },
            {
                name: "目标线",
                type: "line",
                smooth: true,
                symbol: 'circle',
                symbolSize: 10,
                data: [0, 1, 1.2, 1.3, 1.6, 1.8, 2, 3, 3.5, 4, 4.5, 4.5, 4.6, 7, 6.5, 7],
                itemStyle: {
                    normal: {
                        color: '#86ce80',
                        lineStyle: {
                            width: 3,
                            type: 'dotted',
                        }
                    }
                }

            }
        ]
    };
    lineChart.setOption(option)
}
const init = () => {
    initPerson()
    initSeller()
    initSale()
    initMoney()
    initLine()
}
onMounted(() => {
    init()
})
</script>
<style lang="scss" scoped>
.whole {
    .top {
        background-color: #062a44;
        display: flex;
        text-align: center;
        justify-content: space-around;

        .first {
            width: 200px;
            height: 200px;
        }
    }

    .bottom {
        .line {
            width: 100%;
            min-height: 400px;
        }
    }

}
</style>