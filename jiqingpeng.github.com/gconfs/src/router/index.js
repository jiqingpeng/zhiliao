import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'
import actList from '@/components/actList/actList'
import Detail from '@/components/Detail/Detail'
import Invite from '@/components/Invite/Invite'
import Org from '@/components/Org/Org'
import actDate from '@/components/Date/actDate'
import Enrol from '@/components/Enrol/Enrol'
import Echart from '@/components/Echart/Echart'
import LazyLoad from '@/components/LazyLoad/LazyLoad'
import Inform from '@/components/Inform/Inform'
import My from '@/components/My/My'
import Info from '@/components/Info/Info'
import Pay from '@/components/Pay/Pay'
import PaySure from '@/components/Pay/PaySure'
Vue.use(Router)
export default new Router({
	routes: [{
		path: '/',
		name: 'Login',
		component: Login
	}, {
		path: '/Home',
		name: 'Home',
		component: Home
	}, {
		path: '/actList',
		name: 'actList',
		component: actList
	}, {
		path: '/Detail/:id',
		name: 'Detail',
		component: Detail
	}, {
		path: '/Invite/:id',
		name: 'Invite',
		component: Invite
	}, {
		path: '/Org/:id',
		name: 'Org',
		component: Org
	}, {
		path: '/actDate',
		name: 'actDate',
		component: actDate
	}, {
		path: '/Enrol',
		name: 'Enrol',
		component: Enrol
	}, {
		path: '/Echart',
		name: 'Echart',
		component: Echart
	}, {
		path: '/Inform',
		name: 'Inform',
		component: Inform
	}, {
		path: '/My',
		name: 'My',
		component: My
	}, {
		path: '/Info',
		name: 'Info',
		component: Info
	}, {
		path: '/Pay',
		name: 'Pay',
		component: Pay
	}, {
		path: '/PaySure',
		name: 'PaySure',
		component: PaySure
	}],
	linkActiveClass: 'active'
})