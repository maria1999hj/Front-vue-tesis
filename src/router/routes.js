const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "course",
        name: "course",
        component: () => import("pages/Course"),
      },
      {
        path: "course/:course",
        component: () => import("pages/CourseDetail"),
        name: "course-information",
        children: [
          {
            path: "",
            name: "course-information-detail",
            component: () => import("pages/CourseDetail/Detail"),
          },
          {
            path: "student",
            name: "course-information-student",
            component: () => import("pages/CourseDetail/Student"),
          },
          {
            path: "teacher",
            name: "course-information-teacher",
            component: () => import("pages/CourseDetail/Teacher"),
          },
        ],
      },
      { path: "configure", component: () => import("pages/Configure") },
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
