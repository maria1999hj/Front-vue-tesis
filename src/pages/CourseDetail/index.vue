<template>
  <div class="course-detail">
    <q-tabs
      v-model="tab"
      dense
      active-color="primary"
      :mobile-arrows="false"
      :outside-arrows="false"
    >
      <q-tab name="alumnos" label="Alumnos" />
      <q-tab name="docentes" label="Docentes" />
      <q-tab name="asistencias" label="Asistencias" />
      <q-tab name="grabaciones" label="Grabaciones" />
    </q-tabs>

    <q-tab-panels v-model="tab">
      <q-tab-panel name="alumnos"><CourseDetailStudent /> </q-tab-panel>

      <q-tab-panel name="docentes">
        <CourseDetailTeacher />
      </q-tab-panel>

      <q-tab-panel name="asistencias">
        <div class="text-h6">asistencias</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { api } from "boot/axios";
import CourseDetailStudent from "../../components/CourseDetail/Student.vue";
import CourseDetailTeacher from "../../components/CourseDetail/Teacher.vue";

export default defineComponent({
  name: "CourseDetailPage",
  components: {
    CourseDetailStudent,
    CourseDetailTeacher,
  },
  setup() {
    const route = useRoute();
    const id = ref(route.params.course);
    const course = ref({});
    const tab = ref("alumnos");

    onMounted(async () => {
      const result = await api.get("/course/" + id.value);
      course.value = result.data;
    });

    return { id, course, tab };
  },
});
</script>

