import Vue from 'vue';
import VueRouter from 'vue-router';
import VersionSelector from '../views/VersionSelector.vue'
import DeskEditor from '../views/DeskEditor.vue';
import StudentEditor from '../views/StudentEditor.vue';
import ReportViewer from '../views/ReportViewer.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'version-selector',
    component: VersionSelector
  },
  {
    path: '/desks',
    name: 'desk-editor',
    component: DeskEditor,
    props: true,
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
