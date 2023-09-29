/**
 * Vue-Router Configurations
 * @author Nguyen Manh Thang
 */

import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { PATH_CONSTANTS } from "@/constants/path.constant";
import PathNotFoundTemplate from "@/templates/PathNotFoundTemplate.vue";
import { i18n } from "./i18n.plugin";

const publicRoutes = Object.values(PATH_CONSTANTS.publicRoutes).map((route) => ({
  ...route,
  meta: { ...route.meta, accessType: "public" },
}));

const privateRoutes = Object.values(PATH_CONSTANTS.privateRoutes).map((route) => ({
  ...route,
  meta: { ...route.meta, accessType: "private" },
}));

const notFoundRoute: RouteRecordRaw = {
  path: "/:pathMatch(.*)*",
  name: "pathNotFound",
  component: PathNotFoundTemplate,
  meta: { title: "title.notFound", accessType: "public" },
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...privateRoutes, notFoundRoute],
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    const title = to.meta.title as string;
    document.title = i18n.global.t(title);
  } else {
    document.title = "";
  }

  return next();
});

export { router };
