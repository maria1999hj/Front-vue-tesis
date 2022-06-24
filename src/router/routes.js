const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "course", component: () => import("pages/Course") },
      { path: "course/:id", component: () => import("pages/CourseDetail") },
    ],
  },

  {
    path: "/login",
    component: () => import("pages/Login"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
