<template>
  <div class="course">
    <CourseCard />
  </div>
</template>


<script>
import { defineComponent } from "vue";
import CourseCard from "components/Course/Card.vue";

export default defineComponent({
  name: "CoursePage",
  components: {
    CourseCard,
  },
  setup() {},
});
</script>
