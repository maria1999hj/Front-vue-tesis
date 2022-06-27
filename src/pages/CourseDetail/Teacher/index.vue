<template>
  <Teacher />
</template>

<script>
import { defineComponent } from "vue";
import Teacher from "src/components/CourseDetail/Teacher.vue";

export default defineComponent({
  name: "CourseDetailStudent",
  components: {
    Teacher,
  },
});
</script>

