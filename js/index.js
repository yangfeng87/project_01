
$('.monitor .tabs').on('click', 'a', function () {
    $(this).addClass('active').siblings('a').removeClass('active');
    var index = $(this).index();
    $('.monitor .content').eq(index).show().siblings('.content').hide();
});

// 1. 克隆marquee里面所有的行（row）
$(".marquee-view .marquee").each(function () {
    // console.log($(this));
    var rows = $(this)
        .children()
        .clone();
    $(this).append(rows);
});

// 点位图模块
(function () {
    var myCharts = echarts.init(document
        .querySelector('.pie'));
    var option = {
        tooltip: {
            // 触发方式 item图像触发
            trigger: 'item',
            // a表示seried内name名称
            // b代表series data的name
            // c代表series data的value
            // d代表所占百分比
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [
            {
                name: '点位统计',
                type: 'pie',
                // 设置内圆和外圆半径 如果用百分比需要加引号
                radius: ['10%', '70%'],
                // 设置图在容器的位置 left 和top
                center: ['50%', '50%'],
                // 占比展示形式 area面积展示，radius 半径展示
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "四川" },
                    { value: 42, name: "湖北" }
                ],
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 6,
                    length2: 8
                }
            }
        ]
    };
    myCharts.setOption(option);

    // 图标等比例缩放
    window.addEventListener('resize', function () {
        myCharts.resize();
    })
})();

// 用户统计柱状图
(function () {
    var myCharts = echarts.init(document.querySelector('.bar'));
    var item = {
        name: '',
        value: 1200,
        // 修改当前柱形样式颜色
        itemStyle: {
            color: "#254065"
        },
        // 鼠标经过不高亮显示
        emphasis: {
            itemStyle: {
                color: "#254065"
            }
        },
        // 鼠标经过不显示tooltip
        tooltip: {
            extraCssText: "opacity:0"
        }
    }
    var option = {
        color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
                { offset: 0, color: "#00fffb" },
                {
                    offset: 1, color: "#0061ce"
                }
            ]
        ),
        tooltip: {
            trigger: 'item',
            // 坐标轴指示器, 坐标轴触发方式有效,
            // 默认为直线, 可改为shadow阴影效果
            // axisPointer: {
            //     type: 'shadow'
            // }
        },
        grid: {
            left: '0%',
            top: '5%',
            right: '3%',
            bottom: '3%',
            // 是否显示刻度label
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            borderColor: 'rgba(0,240,255,0.3)'
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "上海",
                    "广州",
                    "北京",
                    "深圳",
                    "合肥",
                    "",
                    "......",
                    "",
                    "杭州",
                    "厦门",
                    "济南",
                    "成都",
                    "重庆"
                ],
                axisTick: {
                    alignWithLabel: false,
                    // 隐藏x轴刻度
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,240,255,0.3)'

                    }
                }
            }

        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    alignWithLabel: false,
                    // 隐藏x轴刻度
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,240,255,0.3)'

                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0,240,255,0.3)'
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [
                    2100,
                    1900,
                    1700,
                    1560,
                    1400,
                    item,
                    item,
                    item,
                    900,
                    750,
                    600,
                    480,
                    240
                ]
            }
        ]
    };
    myCharts.setOption(option);
    // 图标等比例缩放
    window.addEventListener('resize', function () {
        myCharts.resize();
    })
})();

// 订单tab栏切换

$('.order .filter').on('click', 'a', function () {
    $(this).addClass('active').siblings('a').removeClass('active');
    var index = $(this).index();
    $('.order .content').eq(index).show().siblings('.content').hide();
});

// 销售统计模块

(function () {

    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    var myCharts = echarts.init(document.querySelector('.line'));
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            right: "10%",
            textStyle: {
                color: "#4c9bfd",
                fontSize: 8
            },
            // series如果有了那么  打他可以省略
        },
        grid: {
            left: '3%',
            top: "15%",
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false//去除刻度线
            },
            axisLabel: {
                color: "#4c9bfd"//文本颜色
            },
            axisLine: {
                show: false//去除轴线
            },
            boundaryGap: false,//去除轴内边距
            data: ['1月', '2月', '3月', '4月', '5月',
                '6月', '7月', '8月', '9月', '10月', '11月',
                '12月']
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false//去除刻度线
            },
            axisLabel: {
                color: "#4c9bfd",//文本颜色
                fontSize: 10
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a",
                }
            }
        },
        series: [
            {
                name: '预期销售额',
                type: 'line',
                stack: 'Total',
                smooth: true,//线条书否圆滑
                data: data.year[0]
            },
            {
                name: '实际销售额',
                type: 'line',
                smooth: true,
                stack: 'Total',
                data: data.year[1]
            },


        ]
    };
    myCharts.setOption(option);
    window.addEventListener('resize', function () {
        myCharts.resize();
    })

    // 点击tab切换图标
    $('.sales .caption').on('click', 'a', function () {
        index = $(this).index() - 1;
        $(this).addClass('active').siblings('a').removeClass('active');
        // console.log(this.dataset.type);
        var arr = data[this.dataset.type];//返回数组
        option.series[0].data = arr[0];
        option.series[1].data = arr[1];
        myCharts.setOption(option);
    })

    // 自动切换
    var as = $('.sales .caption a');
    var index = 0;
    var timer = setInterval(function () {
        index++;
        if (index >= 4) index = 0;
        as.eq(index).click();
    }, 1000)

    //鼠标经过停止计时器
    $('.sales').hover(function () {
        clearInterval(timer);
    }, function () {
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            if (index >= 4) index = 0;
            as.eq(index).click();
        }, 1000)
    });
})();

//销售渠道 累到图
(function () {
    var myCharts = echarts.init(document.querySelector('.radar'));
    const dataBJ = [
        [90, 19, 56, 11, 34, 76],

    ];

    var option = {
        tooltip: {
            show: true,
            position: ["60%", "10%"],
        },
        radar: {
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 },
            ],
            //修改雷达图大小，最外大圆半径
            radius: "55%",
            shape: 'circle',
            //分割圆圈个数
            splitNumber: 4,
            axisName: {
                color: '#4cbfd',
            },
            //分割圆圈线条样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,0.5)"
                }
            },
            splitArea: {
                show: false
            },
            //坐标轴线
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,0.5)"
                }
            }
        },
        series: [
            {
                name: 'Beijing',
                type: 'radar',
                lineStyle: {
                    color: "#fff",
                    width: 1,
                    opacity: .5
                },
                data: dataBJ,
                //设置图形标记
                symbol: 'circle',
                //设置标记大小
                symbolSize: 5,
                //设置标记样式
                itemStyle: {
                    color: "#fff"
                },
                //小圆点显示数据
                label: {
                    show: true,
                    color: "#fff",
                },
                itemStyle: {
                    color: '#F9713C'
                },
                //修饰区域填充色
                areaStyle: {
                    color: "rgba(238,197,102,0.6)"
                }
            }

        ]
    };
    myCharts.setOption(option);
    window.addEventListener('resize', function () {
        myCharts.resize();
    })
})();

//销售进度

(function () {
    var myCharts = echarts.init(document.querySelector('.gauge'));
    var option = {
        series: [
            {
                name: '销售进度',
                type: 'pie',
                radius: ['130%', '150%'],
                center: ["48%", "80%"],
                //启用标签防止重叠
                // avoidLabelOverlap: false,
                labelLine: {
                    show: false
                },
                //设置饼形起始角度
                startAngle: 180,
                hoverOffset: 0,
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#00c9e0" },
                                    {
                                        offset: 1, color: "#005fc1"
                                    }
                                ]
                            ),
                        }
                    },
                    {
                        value: 100, itemStyle: {
                            color: "#12274d"
                        }
                    },
                    {
                        value: 200,
                        itemStyle: {
                            color: "transparent"
                        }
                    },

                ]
            }
        ]
    };
    myCharts.setOption(option);
    window.addEventListener('resize', function () {
        myCharts.resize();
    })
})();


//全国热榜

(function () {
    // 1. 准备相关数据
    var hotData = [
        {
            city: "北京", // 城市
            sales: "25, 179", // 销售额
            flag: true, //  上升还是下降
            brands: [
                //  品牌种类数据
                { name: "可爱多", num: "9,086", flag: true },
                { name: "娃哈哈", num: "8,341", flag: true },
                { name: "喜之郎", num: "7,407", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "6,724", flag: false },
                { name: "好多鱼", num: "2,170", flag: true }
            ]
        },
        {
            city: "河北",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "3,457", flag: false },
                { name: "娃哈哈", num: "2,124", flag: true },
                { name: "喜之郎", num: "8,907", flag: false },
                { name: "八喜", num: "6,080", flag: true },
                { name: "小洋人", num: "1,724", flag: false },
                { name: "好多鱼", num: "1,170", flag: false }
            ]
        },
        {
            city: "上海",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "2,345", flag: true },
                { name: "娃哈哈", num: "7,109", flag: true },
                { name: "喜之郎", num: "3,701", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "2,724", flag: false },
                { name: "好多鱼", num: "2,998", flag: true }
            ]
        },
        {
            city: "江苏",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "2,156", flag: false },
                { name: "娃哈哈", num: "2,456", flag: true },
                { name: "喜之郎", num: "9,737", flag: true },
                { name: "八喜", num: "2,080", flag: true },
                { name: "小洋人", num: "8,724", flag: true },
                { name: "好多鱼", num: "1,770", flag: false }
            ]
        },
        {
            city: "山东",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "9,567", flag: true },
                { name: "娃哈哈", num: "2,345", flag: false },
                { name: "喜之郎", num: "9,037", flag: false },
                { name: "八喜", num: "1,080", flag: true },
                { name: "小洋人", num: "4,724", flag: false },
                { name: "好多鱼", num: "9,999", flag: true }
            ]
        }
    ];

    //遍历hotdata
    var hotHtml = "";
    $.each(hotData, function (index, item) {

        hotHtml += `<li><span>${item.city}</span>
        <span>${item.sales}
        <s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;


    });
    $(".sup").html(hotHtml);


    $('.sup').on('mouseenter', 'li', function () {
        index = $(this).index();
        rendar($(this));
    });
    //默认触发第一个数据

    $('.sup li').eq(0).mouseenter();
    //自动切换
    var index = 0;
    var timer = setInterval(function () {
        index++;
        if (index >= 5) index = 0;
        rendar($('.sup li').eq(index));
    }, 1000);
    $('.sup').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            index++;
            if (index >= 5) index = 0;
            rendar($('.sup li').eq(index));
        }, 1000);
    });
    //enter高亮显示 解决mouseenter冲突问题
    var hotcityHtml = "";
    function rendar(obj) {
        obj.addClass('active').siblings().removeClass('active');


        hotcityHtml = ""
        $.each(hotData[obj.index()].brands, function (index, item) {
            hotcityHtml += `<li><span>${item.name}</span>
        <span>${item.num}
        <s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
        });
        $(".sub").html(hotcityHtml)
    }
})();