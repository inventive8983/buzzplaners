import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/homepage/homepage';
import fixeddeparture from '../components/fixeddepature/fixeddeparture'
import admin from '../components/admin/admin'
import hotel from '../components/hotelpart/hotelpart'
import footer from '../components/footer/footer'
import contactus from '../components/contact us/contactus';
import about from '../components/about us/about'

Vue.use(Router);

export default new Router({
  routes: [


{
  path:'',
  name: 'homepage',
  component: homepage,
},
{
  path:'/fixeddeparture',
  name: 'fixeddeparture',
  component: fixeddeparture,
},
{
  path:'/footer',
  name: 'footer',
  component: footer,
},

{
  path:'/admin',
  name: 'admin',
  component: admin,
},
{
  path: '/hotel',
  name: 'hotel',
  component: hotel
},
{
  path: '/contactus',
  name: 'contactus',
  component: contactus
},
{
  path: '/about',
  name: 'about',
  component: about
}


  ]
})
