<template>
  <div class="course">
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
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import CourseCard from "components/Course/Card.vue";
import { api } from "boot/axios";
import { NotifyError } from "src/utils";

export default defineComponent({
  name: "CoursePage",
  components: {
    CourseCard,
  },
  setup() {
    const courses = ref([]);

    onMounted(async () => {
      try {
        const result = await api.get("/course");
        courses.value = result.data;
      } catch (error) {
        NotifyError("Ocurrio un error al obtener los cursos");
      }
    });

    return { courses };
  },
});
</script>
