import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import LobbyView from '../views/LobbyView.vue';
import RegisterView from '../views/RegisterView.vue';
import AllScriptsViewVue from '@/views/AllScriptsView.vue';
import { useAuthStore } from '@/stores/AuthStore';
import ScriptDetailView from '@/views/ScriptDetailView.vue';
import UnderConstruction from "@/views/UnderConstruction.vue";
import UserView from "@/views/User.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false
      }
      
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: LobbyView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/scripts',
      name: 'scripts',
      component: AllScriptsViewVue,
      meta: {
        requiresAuth: false
      }
      
    },
    {
      path: '/scripts/:id',
      name: 'script-detail',
      component: ScriptDetailView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      props: true
    },
    {
      path: '/underconstruction',
      name: 'underConstruction',
      component: UnderConstruction,
    },
  ],
});
router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const store = useAuthStore();

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.token === '') {
    next("/");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
