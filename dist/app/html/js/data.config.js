/**
 * 配置文件
 * data.config.js
 * @authors beyondouyuan (beyondouyuan.github.io)
 * @date    2017-05-17 15:30:46
 * @version $1.0.0$
 */


/**
* params：
* pathConfig：路径配置
* rootPath：请求根路径
* bullMethod：分页公告请求方法
* allBullMethod：全部公告请求方法
* newsMethod：分页新闻请求方法
* kQuestionMethod：根据关键词（分类）请求问题方法
* dataConfig：JSON路径配置
* product：产品中心数据路径
* solve：解决方案数据路径
* services：行业服务数据路径
* contact：联系我们数据路径
**/

var pathConfig = {
	// 生产环境
	 'rootPath' : 'http://119.147.172.215:8088/BMS/',
	// 测试环境
//	'rootPath' : 'http://192.168.30.195:9999/BMS/',
	'bullMethod' : 'page/bulletinpageList.do?pageIndex=',
	'allBullMethod' : 'bulletin/findAll.do',
	'newsMethod' : 'page/newspageList.do?pageIndex=',
	'kQuestionMethod' : 'question/findByclassifyFir.do?classifyFir='
};

var dataConfig = {
	'product' : 'public/datas/product.json',
	'solve' : 'public/datas/solve.json',
	'services' : 'public/datas/services.json',
	'contact' : 'public/datas/contact.json'
};