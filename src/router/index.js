import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../components/HomePage'

const routes = [
    {
      path: "/",
      name: "Home",
      component: HomePage,

      path: "/CreateEvent",
      name: "CreateEvent",
      component: CreateEvent,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;