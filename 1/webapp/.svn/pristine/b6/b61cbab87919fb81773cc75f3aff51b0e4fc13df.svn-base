// 用户分布
function userMapList() {
	//$('#user-map-list').html("");
	var myChart = echarts.init(document.getElementById('user-map-list'));
	// 指定图表的配置项和数据
	var option = {
		title : {
			text : '用户分布',
			left : 'center'
		},
		tooltip : {
			trigger : 'item'
		},
		legend : {
			left : 'center',
			top : 'bottom',
			data : [ 'PC', '公众号', '手机' ]
		},
		visualMap : {
			min : 0,
			max : 2500,
			left : 'left',
			top : 'bottom',
			text : [ '高', '低' ], // 文本，默认为数值文本
			calculable : true
		},
		toolbox : {
			show : true,
			orient : 'vertical',
			left : 'right',
			top : 'center',
			feature : {
				saveAsImage : {
					show : true,
					pixelRatio : 3
				}
			}
		},
		series : [ {
			name : 'PC',
			type : 'map',
			mapType : 'china',
			roam : false,
			label : {
				normal : {
					show : true
				},
				emphasis : {
					show : true
				}
			},
			data : [ {
				name : '北京',
				value : randomData()
			}, {
				name : '天津',
				value : randomData()
			}, {
				name : '上海',
				value : randomData()
			}, {
				name : '重庆',
				value : randomData()
			}, {
				name : '河北',
				value : randomData()
			}, {
				name : '河南',
				value : randomData()
			}, {
				name : '云南',
				value : randomData()
			}, {
				name : '辽宁',
				value : randomData()
			}, {
				name : '黑龙江',
				value : randomData()
			}, {
				name : '湖南',
				value : randomData()
			}, {
				name : '安徽',
				value : randomData()
			}, {
				name : '山东',
				value : randomData()
			}, {
				name : '新疆',
				value : randomData()
			}, {
				name : '江苏',
				value : randomData()
			}, {
				name : '浙江',
				value : randomData()
			}, {
				name : '江西',
				value : randomData()
			}, {
				name : '湖北',
				value : randomData()
			}, {
				name : '广西',
				value : randomData()
			}, {
				name : '甘肃',
				value : randomData()
			}, {
				name : '山西',
				value : randomData()
			}, {
				name : '内蒙古',
				value : randomData()
			}, {
				name : '陕西',
				value : randomData()
			}, {
				name : '吉林',
				value : randomData()
			}, {
				name : '福建',
				value : randomData()
			}, {
				name : '贵州',
				value : randomData()
			}, {
				name : '广东',
				value : randomData()
			}, {
				name : '青海',
				value : randomData()
			}, {
				name : '西藏',
				value : randomData()
			}, {
				name : '四川',
				value : randomData()
			}, {
				name : '宁夏',
				value : randomData()
			}, {
				name : '海南',
				value : randomData()
			}, {
				name : '台湾',
				value : randomData()
			}, {
				name : '香港',
				value : randomData()
			}, {
				name : '澳门',
				value : randomData()
			} ]
		}, {
			name : '公众号',
			type : 'map',
			mapType : 'china',
			label : {
				normal : {
					show : true
				},
				emphasis : {
					show : true
				}
			},
			data : [ {
				name : '北京',
				value : randomData()
			}, {
				name : '天津',
				value : randomData()
			}, {
				name : '上海',
				value : randomData()
			}, {
				name : '重庆',
				value : randomData()
			}, {
				name : '河北',
				value : randomData()
			}, {
				name : '安徽',
				value : randomData()
			}, {
				name : '新疆',
				value : randomData()
			}, {
				name : '浙江',
				value : randomData()
			}, {
				name : '江西',
				value : randomData()
			}, {
				name : '山西',
				value : randomData()
			}, {
				name : '内蒙古',
				value : randomData()
			}, {
				name : '吉林',
				value : randomData()
			}, {
				name : '福建',
				value : randomData()
			}, {
				name : '广东',
				value : randomData()
			}, {
				name : '西藏',
				value : randomData()
			}, {
				name : '四川',
				value : randomData()
			}, {
				name : '宁夏',
				value : randomData()
			}, {
				name : '香港',
				value : randomData()
			}, {
				name : '澳门',
				value : randomData()
			} ]
		}, {
			name : '手机',
			type : 'map',
			mapType : 'china',
			label : {
				normal : {
					show : true
				},
				emphasis : {
					show : true
				}
			},
			data : [ {
				name : '北京',
				value : randomData()
			}, {
				name : '天津',
				value : randomData()
			}, {
				name : '上海',
				value : randomData()
			}, {
				name : '广东',
				value : randomData()
			}, {
				name : '台湾',
				value : randomData()
			}, {
				name : '香港',
				value : randomData()
			}, {
				name : '澳门',
				value : randomData()
			} ]
		} ]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
function randomData() {
	return Math.round(Math.random() * 1000);
}
// 用户每日访问
function userActList() {
	var myChart = echarts.init(document.getElementById('user-act-list'));
	var option = {
		title : {
			text : '日访问量',
			x : 'center'
		},
		tooltip : {
			trigger : 'item',
			formatter : "{a} <br/>{b} : {c} ({d}%)"
		},
		toolbox : {
			show : true,
			orient : 'vertical',
			left : 'right',
			top : 'center',
			feature : {
				saveAsImage : {
					show : true,
					pixelRatio : 3
				}
			}
		},
		legend : {
			left : 'center',
			top : 'bottom',
			data : [ 'PC', '微信公众号', '手机' ]
		},
		series : [ {
			name : '访问来源',
			type : 'pie',
			radius : '55%',
			center : [ '50%', '60%' ],
			data : [ {
				value : 335,
				name : 'PC'
			}, {
				value : 310,
				name : '微信公众号'
			}, {
				value : 234,
				name : '手机'
			} ],
			itemStyle : {
				emphasis : {
					shadowBlur : 10,
					shadowOffsetX : 0,
					shadowColor : 'rgba(0, 0, 0, 0.5)'
				}
			}
		} ]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
};
// 用户累计访问
function userMonthList() {
	var myChart = echarts.init(document.getElementById('user-month-list'));
	var option = {
		title : {
			text : '访问时间',
			x : 'center'
		},
		tooltip : {
			trigger : 'axis',
			axisPointer : {
				type : 'cross',
				crossStyle : {
					color : '#999'
				}
			}
		},
		toolbox : {
			show : true,
			orient : 'vertical',
			left : 'right',
			top : 'center',
			feature : {
				magicType : {
					show : true,
					type : [ 'line', 'bar' ]
				},
				restore : {
					show : true
				},
				saveAsImage : {
					show : true,
					pixelRatio : 3
				}
			}
		},
		legend : {
			left : 'center',
			top : 'bottom',
			data : [ 'PC', '微信公众号', '手机', '平均' ]
		},
		xAxis : [ {
			type : 'category',
			data : [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月',
					'10月', '11月', '12月' ],
			axisPointer : {
				type : 'shadow'
			}
		} ],
		yAxis : [ {
			type : 'value',
			name : '人次',
			min : 0,
			max : 250,
			interval : 50,
			axisLabel : {
				formatter : '{value}'
			}
		} ],
		series : [
				{
					name : 'PC',
					type : 'bar',
					data : [ 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2,
							32.6, 20.0, 6.4, 3.3 ]
				},
				{
					name : '微信公众号',
					type : 'bar',
					data : [ 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2,
							48.7, 18.8, 6.0, 2.3 ]
				},
				{
					name : '手机',
					type : 'bar',
					data : [ 3.6, 2.9, 4.0, 23.4, 22.7, 73.7, 172.6, 123.2,
							48.7, 18.8, 6.0, 2.3 ]
				},
				{
					name : '平均',
					type : 'line',
					data : [ 2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0,
							16.5, 12.0, 6.2 ]
				} ]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
};
// 用户浏览
function userHtmlList() {
	var userHtmlList = {
		"nodes" : [ {
			"name" : "Total"
		}, {
			"name" : "Environment"
		}, {
			"name" : "Land use"
		}, {
			"name" : "Cocoa butter (Organic)"
		}, {
			"name" : "Cocoa mass (Organic)"
		}, {
			"name" : "Hazelnuts (Organic)"
		}, {
			"name" : "Cane sugar (Organic)"
		}, {
			"name" : "Vegetables (Organic)"
		}, {
			"name" : "Climate change"
		}, {
			"name" : "Harmful substances"
		}, {
			"name" : "Water use"
		}, {
			"name" : "Resource depletion"
		}, {
			"name" : "Refrigeration"
		}, {
			"name" : "Packaging"
		}, {
			"name" : "Human rights"
		}, {
			"name" : "Child labour"
		}, {
			"name" : "Coconut oil (Organic)"
		}, {
			"name" : "Forced labour"
		}, {
			"name" : "Health safety"
		}, {
			"name" : "Access to water"
		}, {
			"name" : "Freedom of association"
		}, {
			"name" : "Access to land"
		}, {
			"name" : "Sufficient wage"
		}, {
			"name" : "Equal rights migrants"
		}, {
			"name" : "Discrimination"
		}, {
			"name" : "Working hours"
		} ],
		"links" : [ {
			"source" : "Total",
			"target" : "Environment",
			"value" : 0.342284047256003
		}, {
			"source" : "Environment",
			"target" : "Land use",
			"value" : 0.32322870366987
		}, {
			"source" : "Land use",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.177682517071359
		}, {
			"source" : "Land use",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.137241325342711
		}, {
			"source" : "Land use",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.00433076373512774
		}, {
			"source" : "Land use",
			"target" : "Cane sugar (Organic)",
			"value" : 0.00296956039863467
		}, {
			"source" : "Land use",
			"target" : "Vegetables (Organic)",
			"value" : 0.00100453712203756
		}, {
			"source" : "Environment",
			"target" : "Climate change",
			"value" : 0.0112886157414413
		}, {
			"source" : "Climate change",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.00676852971933996
		}, {
			"source" : "Climate change",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.00394686874786743
		}, {
			"source" : "Climate change",
			"target" : "Cane sugar (Organic)",
			"value" : 0.000315972058711838
		}, {
			"source" : "Climate change",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.000218969462265292
		}, {
			"source" : "Climate change",
			"target" : "Vegetables (Organic)",
			"value" : 3.82757532567656e-05
		}, {
			"source" : "Environment",
			"target" : "Harmful substances",
			"value" : 0.00604275542495656
		}, {
			"source" : "Harmful substances",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.0055125989240741
		}, {
			"source" : "Harmful substances",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.000330017607892127
		}, {
			"source" : "Harmful substances",
			"target" : "Cane sugar (Organic)",
			"value" : 0.000200138892990337
		}, {
			"source" : "Harmful substances",
			"target" : "Hazelnuts (Organic)",
			"value" : 0
		}, {
			"source" : "Harmful substances",
			"target" : "Vegetables (Organic)",
			"value" : 0
		}, {
			"source" : "Environment",
			"target" : "Water use",
			"value" : 0.00148345269044703
		}, {
			"source" : "Water use",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.00135309891304186
		}, {
			"source" : "Water use",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.000105714137908639
		}, {
			"source" : "Water use",
			"target" : "Hazelnuts (Organic)",
			"value" : 1.33452642581887e-05
		}, {
			"source" : "Water use",
			"target" : "Cane sugar (Organic)",
			"value" : 8.78074837009238e-06
		}, {
			"source" : "Water use",
			"target" : "Vegetables (Organic)",
			"value" : 2.5136268682477e-06
		}, {
			"source" : "Environment",
			"target" : "Resource depletion",
			"value" : 0.000240519729288764
		}, {
			"source" : "Resource depletion",
			"target" : "Cane sugar (Organic)",
			"value" : 0.000226237279345084
		}, {
			"source" : "Resource depletion",
			"target" : "Vegetables (Organic)",
			"value" : 1.42824499436793e-05
		}, {
			"source" : "Resource depletion",
			"target" : "Hazelnuts (Organic)",
			"value" : 0
		}, {
			"source" : "Resource depletion",
			"target" : "Cocoa mass (Organic)",
			"value" : 0
		}, {
			"source" : "Resource depletion",
			"target" : "Cocoa butter (Organic)",
			"value" : 0
		}, {
			"source" : "Environment",
			"target" : "Refrigeration",
			"value" : 0
		}, {
			"source" : "Environment",
			"target" : "Packaging",
			"value" : 0
		}, {
			"source" : "Total",
			"target" : "Human rights",
			"value" : 0.307574096993239
		}, {
			"source" : "Human rights",
			"target" : "Child labour",
			"value" : 0.0410641202645833
		}, {
			"source" : "Child labour",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.0105339381639722
		}, {
			"source" : "Child labour",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.0105
		}, {
			"source" : "Child labour",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.0087294420777
		}, {
			"source" : "Child labour",
			"target" : "Coconut oil (Organic)",
			"value" : 0.00474399974233333
		}, {
			"source" : "Child labour",
			"target" : "Cane sugar (Organic)",
			"value" : 0.00388226450884445
		}, {
			"source" : "Child labour",
			"target" : "Vegetables (Organic)",
			"value" : 0.00267447577173333
		}, {
			"source" : "Human rights",
			"target" : "Forced labour",
			"value" : 0.0365458590642445
		}, {
			"source" : "Forced labour",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.0114913076376389
		}, {
			"source" : "Forced labour",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.0081134807347
		}, {
			"source" : "Forced labour",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.00765230236575
		}, {
			"source" : "Forced labour",
			"target" : "Cane sugar (Organic)",
			"value" : 0.004
		}, {
			"source" : "Forced labour",
			"target" : "Vegetables (Organic)",
			"value" : 0.00296668823626667
		}, {
			"source" : "Forced labour",
			"target" : "Coconut oil (Organic)",
			"value" : 0.00232208008988889
		}, {
			"source" : "Human rights",
			"target" : "Health safety",
			"value" : 0.0345435327843611
		}, {
			"source" : "Health safety",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.0121419536385
		}, {
			"source" : "Health safety",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.00766772850678333
		}, {
			"source" : "Health safety",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.0056245892061
		}, {
			"source" : "Health safety",
			"target" : "Coconut oil (Organic)",
			"value" : 0.00361616847688889
		}, {
			"source" : "Health safety",
			"target" : "Cane sugar (Organic)",
			"value" : 0.00277374682533333
		}, {
			"source" : "Health safety",
			"target" : "Vegetables (Organic)",
			"value" : 0.00271934613075556
		}, {
			"source" : "Human rights",
			"target" : "Access to water",
			"value" : 0.0340206659360667
		}, {
			"source" : "Access to water",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.0105
		}, {
			"source" : "Access to water",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.0089274160792
		}, {
			"source" : "Access to water",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.0054148022845
		}, {
			"source" : "Access to water",
			"target" : "Cane sugar (Organic)",
			"value" : 0.00333938149786667
		}, {
			"source" : "Access to water",
			"target" : "Vegetables (Organic)",
			"value" : 0.00314663377488889
		}, {
			"source" : "Access to water",
			"target" : "Coconut oil (Organic)",
			"value" : 0.00269243229961111
		}, {
			"source" : "Human rights",
			"target" : "Freedom of association",
			"value" : 0.0320571523941667
		}, {
			"source" : "Freedom of association",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.0132312483463611
		}, {
			"source" : "Freedom of association",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.0077695200707
		}, {
			"source" : "Freedom of association",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.00510606573995
		}, {
			"source" : "Freedom of association",
			"target" : "Vegetables (Organic)",
			"value" : 0.00354321156324444
		}, {
			"source" : "Freedom of association",
			"target" : "Cane sugar (Organic)",
			"value" : 0.00240710667391111
		}, {
			"source" : "Freedom of association",
			"target" : "Coconut oil (Organic)",
			"value" : 0
		}, {
			"source" : "Human rights",
			"target" : "Access to land",
			"value" : 0.0315022209894056
		}, {
			"source" : "Access to land",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.00964970063322223
		}, {
			"source" : "Access to land",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.00938530207965
		}, {
			"source" : "Access to land",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.0060110791848
		}, {
			"source" : "Access to land",
			"target" : "Cane sugar (Organic)",
			"value" : 0.00380818314608889
		}, {
			"source" : "Access to land",
			"target" : "Vegetables (Organic)",
			"value" : 0.00264795594564445
		}, {
			"source" : "Access to land",
			"target" : "Coconut oil (Organic)",
			"value" : 0
		}, {
			"source" : "Human rights",
			"target" : "Sufficient wage",
			"value" : 0.0287776757227333
		}, {
			"source" : "Sufficient wage",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.00883512456493333
		}, {
			"source" : "Sufficient wage",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.0078343367268
		}, {
			"source" : "Sufficient wage",
			"target" : "Coconut oil (Organic)",
			"value" : 0.00347879026511111
		}, {
			"source" : "Sufficient wage",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.00316254211388889
		}, {
			"source" : "Sufficient wage",
			"target" : "Vegetables (Organic)",
			"value" : 0.00281013722808889
		}, {
			"source" : "Sufficient wage",
			"target" : "Cane sugar (Organic)",
			"value" : 0.00265674482391111
		}, {
			"source" : "Human rights",
			"target" : "Equal rights migrants",
			"value" : 0.0271146645119444
		}, {
			"source" : "Equal rights migrants",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.0071042315061
		}, {
			"source" : "Equal rights migrants",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.00636673210005
		}, {
			"source" : "Equal rights migrants",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.00601459775836111
		}, {
			"source" : "Equal rights migrants",
			"target" : "Coconut oil (Organic)",
			"value" : 0.00429185583138889
		}, {
			"source" : "Equal rights migrants",
			"target" : "Cane sugar (Organic)",
			"value" : 0.00182647471915556
		}, {
			"source" : "Equal rights migrants",
			"target" : "Vegetables (Organic)",
			"value" : 0.00151077259688889
		}, {
			"source" : "Human rights",
			"target" : "Discrimination",
			"value" : 0.0211217763359833
		}, {
			"source" : "Discrimination",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.00609671700306667
		}, {
			"source" : "Discrimination",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.0047738806325
		}, {
			"source" : "Discrimination",
			"target" : "Coconut oil (Organic)",
			"value" : 0.00368119084494444
		}, {
			"source" : "Discrimination",
			"target" : "Vegetables (Organic)",
			"value" : 0.00286009813604444
		}, {
			"source" : "Discrimination",
			"target" : "Cane sugar (Organic)",
			"value" : 0.00283706180951111
		}, {
			"source" : "Discrimination",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.000872827909916666
		}, {
			"source" : "Human rights",
			"target" : "Working hours",
			"value" : 0.02082642898975
		}, {
			"source" : "Working hours",
			"target" : "Hazelnuts (Organic)",
			"value" : 0.0107216773848333
		}, {
			"source" : "Working hours",
			"target" : "Coconut oil (Organic)",
			"value" : 0.00359009052944444
		}, {
			"source" : "Working hours",
			"target" : "Vegetables (Organic)",
			"value" : 0.00212300379075556
		}, {
			"source" : "Working hours",
			"target" : "Cocoa butter (Organic)",
			"value" : 0.0018518584356
		}, {
			"source" : "Working hours",
			"target" : "Cocoa mass (Organic)",
			"value" : 0.00158227069058333
		}, {
			"source" : "Working hours",
			"target" : "Cane sugar (Organic)",
			"value" : 0.000957528158533333
		} ]
	};
	var myChart = echarts.init(document.getElementById('user-html-list'));
	var option = {
		title : {
			text : '页面浏览',
			x : 'center'
		},
		tooltip : {
			trigger : 'item',
			triggerOn : 'mousemove'
		},
		series : [ {
			type : 'sankey',
			layout : 'none',
			data : userHtmlList.nodes,
			links : userHtmlList.links,
			itemStyle : {
				normal : {
					borderWidth : 1,
					borderColor : '#aaa'
				}
			},
			lineStyle : {
				normal : {
					curveness : 0.5
				}
			}
		} ]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
// 活动信息
function actLiftList() {
	var myChart = echarts.init(document.getElementById('act-life-list'));
	var option = {
		title : {
			text : '活动周期',
			x : 'center'
		},
		angleAxis : {
			type : 'category',
			data : [ '建立', '筹备', '邀请', '发布', '会务', '召开', '结束' ],
			z : 10
		},
		radar : {
			center : [ '30%', '20%' ]
		},
		radiusAxis : {},
		polar : {},
		toolbox : {
			show : true,
			orient : 'vertical',
			left : 'right',
			top : 'center',
			feature : {
				magicType : {
					show : true,
					type : [ 'line' ]
				},
				restore : {
					show : true
				},
				saveAsImage : {
					show : true,
					pixelRatio : 3
				}
			}
		},
		series : [ {
			type : 'bar',
			data : [ 1, 2, 3, 4, 3, 5, 1 ],
			coordinateSystem : 'polar',
			name : '人员功能',
			stack : 'a'
		}, {
			type : 'bar',
			data : [ 2, 4, 6, 1, 3, 2, 1 ],
			coordinateSystem : 'polar',
			name : '场地接送',
			stack : 'a'
		}, {
			type : 'bar',
			data : [ 1, 2, 3, 4, 1, 2, 5 ],
			coordinateSystem : 'polar',
			name : '其它',
			stack : 'a'
		} ],
		legend : {
			show : true,
			left : 'center',
			top : 'bottom',
			data : [ '人员功能', '场地接送', '其它' ]
		}
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
};
// 系统信息
function sysInfo() {
	var myChart = echarts.init(document.getElementById('sys-info-list'));
	var option = {
		title : {
			text : '系统信息',
			x : 'center'
		},
		tooltip : {
			formatter : "{a} <br/>{c} {b}"
		},
		series : [
				{
					name : 'CPU',
					type : 'gauge',
					z : 3,
					min : 0,
					max : 100,
					splitNumber : 10,
					radius : '70%',
					axisLine : { // 坐标轴线
						lineStyle : { // 属性lineStyle控制线条样式
							width : 5
						}
					},
					axisTick : { // 坐标轴小标记
						length : 17, // 属性length控制线长
						lineStyle : { // 属性lineStyle控制线条样式
							color : 'auto'
						}
					},
					splitLine : { // 分隔线
						length : 8, // 属性length控制线长
						lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
							color : 'auto'
						}
					},
					axisLabel : {
						backgroundColor : 'auto',
						borderRadius : 2,
						color : '#eee',
						padding : 3,
						textShadowBlur : 2,
						textShadowOffsetX : 1,
						textShadowOffsetY : 1,
						textShadowColor : '#222'
					},
					title : {
						// 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight : 'bolder',
						fontSize : 10,
						fontStyle : 'italic'
					},
					detail : {
						// 其余属性默认使用全局文本样式，详见TEXTSTYLE
						formatter : function(value) {
							value = (value + '').split('.');
							value.length < 2 && (value.push('00'));
							return ('00' + value[0]).slice(-2) + '.'
									+ (value[1] + '00').slice(0, 2);
						},
						fontWeight : 'bolder',
						borderRadius : 3,
						backgroundColor : '#444',
						borderColor : '#aaa',
						shadowBlur : 5,
						shadowColor : '#333',
						shadowOffsetX : 0,
						shadowOffsetY : 3,
						borderWidth : 1,
						textBorderColor : '#000',
						textBorderWidth : 2,
						textShadowBlur : 2,
						textShadowColor : '#fff',
						textShadowOffsetX : 0,
						textShadowOffsetY : 0,
						fontFamily : 'Arial',
						width : 100,
						color : '#eee',
						rich : {}
					},
					data : [ {
						value : 10,
						name : '%'
					} ]
				}, {
					name : '内存',
					type : 'gauge',
					center : [ '20%', '58%' ], // 默认全局居中
					radius : '44%',
					min : 0,
					max : 100,
					endAngle : 25,
					splitNumber : 10,
					axisLine : { // 坐标轴线
						lineStyle : { // 属性lineStyle控制线条样式
							width : 8
						}
					},
					axisTick : { // 坐标轴小标记
						length : 10, // 属性length控制线长
						lineStyle : { // 属性lineStyle控制线条样式
							color : 'auto'
						}
					},
					splitLine : { // 分隔线
						length : 7, // 属性length控制线长
						lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
							color : 'auto'
						}
					},
					pointer : {
						width : 5
					},
					title : {
						offsetCenter : [ 0, '-30%' ], // x, y，单位px
						fontSize : 10,
						fontStyle : 'italic'
					},
					detail : {
						// 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight : 'bolder'
					},
					data : [ {
						value : 40,
						name : '%'
					} ]
				}, {
					name : '网络上行',
					type : 'gauge',
					center : [ '79%', '58%' ], // 默认全局居中
					radius : '42%',
					min : 0,
					max : 10,
					startAngle : 145,
					endAngle : 25,
					splitNumber : 5,
					axisLine : { // 坐标轴线
						lineStyle : { // 属性lineStyle控制线条样式
							width : 8
						}
					},
					axisTick : { // 坐标轴小标记
						splitNumber : 5,
						length : 10, // 属性length控制线长
						lineStyle : { // 属性lineStyle控制线条样式
							color : 'auto'
						}
					},
					splitLine : { // 分隔线
						length : 15, // 属性length控制线长
						lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
							color : 'auto'
						}
					},
					pointer : {
						width : 4
					},
					title : {
						show : true,
						fontSize : 10,
						fontStyle : 'italic'
					},
					detail : {
						show : false
					},
					data : [ {
						value : 2,
						name : 'Kbps'
					} ]
				}, {
					name : '磁盘',
					type : 'gauge',
					center : [ '79%', '58%' ], // 默认全局居中
					radius : '42%',
					min : 0,
					max : 100,
					startAngle : 335,
					endAngle : 205,
					splitNumber : 5,
					axisLine : { // 坐标轴线
						lineStyle : { // 属性lineStyle控制线条样式
							width : 8
						}
					},
					axisTick : { // 坐标轴小标记
						show : false
					},
					splitLine : { // 分隔线
						length : 15, // 属性length控制线长
						lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
							color : 'auto'
						}
					},
					pointer : {
						width : 5
					},
					title : {
						show : false
					},
					detail : {
						show : false
					},
					data : [ {
						value : 50,
						name : '%'
					} ]
				} ]
	};
	setInterval(function() {
		option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		option.series[1].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		option.series[2].data[0].value = (Math.random() * 10).toFixed(2) - 0;
		option.series[3].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		myChart.setOption(option, true);
	}, 2000);// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}