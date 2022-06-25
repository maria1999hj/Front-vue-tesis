<template>
  <div class="course">
    <Register @course-register="getCorses" @course-delete="getCorses" />
    <div class="course-grid">
      <CourseCard
        v-for="(course, index) in courses"
        :key="index"
        :title="course.name"
        :endTime="course.end_time"
        :startTime="course.start_time"
        :id="course.id"
        nameTeacher="Maria"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { api } from "boot/axios";
import { NotifyError } from "src/utils";

import CourseCard from "components/Course/Card.vue";
import Register from "components/Course/Register.vue";

export default defineComponent({
  name: "CoursePage",
  components: {
    CourseCard,
    Register,
  },
  setup() {
    const courses = ref([]);

    const getCorses = async () => {
      try {
        const result = await api.get("/course");
        courses.value = result.data;
      } catch (error) {
        NotifyError("Ocurrio un error al obtener los cursos");
      }
    };

    onMounted(async () => {
      await getCorses();
    });

    return { courses, getCorses };
  },
});
</script>


<style scoped>
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}
</style>
