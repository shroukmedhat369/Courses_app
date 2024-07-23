import { createRouter, createWebHistory } from 'vue-router';
import CoursesVue from '../views/CoursePreview.vue';
import CourseDetailsVue from '../views/CourseDetails.vue';
import RegisterVue from '../views/RegisterVue.vue';
import FavoritesVue from '../views/Favorites.vue';
import LoginVue from '../views/Login.vue'; 
import MainContent from '../views/MainContent.vue'// Import the Login component


const routes = [
  { path: '/', component: LoginVue }, // Set the Login route as the default route
 
  { path: '/courses', component: CoursesVue },
  { path: '/course-details', component: CourseDetailsVue },
  { path: '/register', component: RegisterVue },
  { path: '/favorites', component: FavoritesVue },
  { path: '/login', component: LoginVue },
  {
    path: '/Home',
    name: 'Home',
    component: MainContent
  }, // You can keep this for direct access to the login page
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
