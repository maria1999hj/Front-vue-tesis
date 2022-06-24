<template>
  <div class="card">
    <p class="text-center text-bold text-h6">{{ title }}</p>
    <p class="text-bold">Inicio:</p>
    <p>{{ startTime }}</p>
    <p class="text-bold">Fin:</p>
    <p>{{ endTime }}</p>
    <p class="text-bold">Docente:</p>
    <p>{{ nameTeacher }}</p>
    <div class="text-center q-mt-sm">
      <q-btn color="primary" label="ingresar" :to="`/course/${id}`" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CourseCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    startTime: {
      type: String,
      default: "",
    },
    endTime: {
      type: String,
      default: "",
    },
    nameTeacher: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
.card {
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  width: 250px;
  padding: 20px;
}

.card p {
  margin: 2px 0;
}
</style>

