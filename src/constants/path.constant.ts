import HomeViewVue from "@/views/HomeView.vue";

import type { RouteRecordRaw } from "vue-router";

/**
 * Route type
 */
export type PathType = Record<string, RouteRecordRaw>;

/**
 * This file contains links to application pages
 */
export class PATH_CONSTANTS {
  /**
   * Public routes
   */
  public static publicRoutes: PathType = {
    home: {
      path: "/",
      name: "home",
      component: HomeViewVue,
      meta: {
        title: "title.home",
      },
    },
  };

  /**
   * Private routes (Need to be authenticated)
   */
  public static privateRoutes: PathType = {};
}
