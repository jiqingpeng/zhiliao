// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
	let articles = [];
	for (let i = 0; i < 10; i++) {
		let newArticleObject = {
			id: Random.integer(1, 10),
			name: Random.csentence(5, 30), //  Random.csentence( min, max )
			thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
			address: Random.city(0, 5), // Random.cname() 随机生成一个常见的中文姓名
			date: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
		}
		articles.push(newArticleObject)
	}

	return {
		articles: articles
	}
}
const date = function() {
	let articles = [];
	for (let i = 0; i < 10; i++) {
		let newArticleObject = {
			id: Random.integer(1, 10),
			name: Random.csentence(5, 30), //  Random.csentence( min, max )
			thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
			address: Random.city(0, 5), // Random.cname() 随机生成一个常见的中文姓名
			date: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
		}
		articles.push(newArticleObject)
	}

	return {
		articles: articles
	}
}
const inFoDate = function() {
	let articles = [];
	for (let i = 0; i < 10; i++) {
		let newArticleObject = {
			id: Random.integer(1, 10),
			name: Random.csentence(5, 30), //  Random.csentence( min, max )
			thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
			address: Random.city(0, 5), // Random.cname() 随机生成一个常见的中文姓名
			date: Random.date() + ' ' + Random.time('HH:mm:ss') // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
		}
		articles.push(newArticleObject)
	}

	return {
		articles: articles
	}
}
const inDate = function() {
		let articles = [];
		for (let i = 0; i < 4; i++) {
			let newArticleObject = {
				id: Random.integer(1, 10),
				name: Random.csentence(1, 10), //  Random.csentence( min, max )
				date: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
			}
			articles.push(newArticleObject)
		}

		return {
			articles: articles
		}
	}
	// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);
Mock.mock('/aa', 'get', date);
Mock.mock('/bb', 'get', inFoDate);
Mock.mock('/info', 'get', inDate);