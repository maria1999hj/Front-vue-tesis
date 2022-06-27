<template>
  <StudentVue />
</template>

<script>
import { defineComponent } from "vue";
import StudentVue from "src/components/CourseDetail/Student.vue";

export default defineComponent({
  name: "CourseDetailStudent",
  components: {
    StudentVue,
  },
});
</script>

