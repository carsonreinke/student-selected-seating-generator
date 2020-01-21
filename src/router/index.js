import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue'
import DeskEditor from '../views/DeskEditor.vue';
import StudentEditor from '../views/StudentEditor.vue';
import ReportViewer from '../views/ReportViewer.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/desks',
    name: 'desk-editor',
    component: DeskEditor
  },
  {
    path: '/students',
    name: 'student-editor',
    component: StudentEditor
  },
  {
    path: '/report',
    name: 'report-viewer',
    component: ReportViewer
  }
]

const router = new VueRouter({
  routes
})

export default router
