<template>
  <div class="course-detail">
    <q-tabs
      v-model="tab"
      dense
      active-color="primary"
      :mobile-arrows="false"
      :outside-arrows="false"
    >
      <q-tab
        name="information"
        label="Informacion"
        @click="selectTab('course-information-detail')"
      />
      <q-tab
        name="student"
        label="Alumnos"
        @click="selectTab('course-information-student')"
      />
      <q-tab
        name="teacher"
        label="Docentes"
        @click="selectTab('course-information-teacher')"
      />
      <q-tab name="asistencias" label="Asistencias" />
      <q-tab name="grabaciones" label="Grabaciones" />
    </q-tabs>

    <router-view />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "CourseDetailPage",

  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = ref(route.params.course);

    const tab = ref("alumnos");

    const mapperNamesRoute = {
      "course-information-student": "student",
      "course-information-teacher": "teacher",
      "course-information-detail": "",
    };

    const selectTab = (nameTab) => {
      router.push(`/course/${id.value}/${mapperNamesRoute[nameTab]}`);
    };

    onMounted(() => {
      if (route.name === "course-information-detail") {
        tab.value = "information";
        return;
      }
      tab.value = mapperNamesRoute[route.name];
    });

    return { id, tab, selectTab };
  },
});
</script>

