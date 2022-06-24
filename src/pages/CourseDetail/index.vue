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
      <q-tab-panel name="alumnos">
        <q-table
          flat
          title="Alumnos"
          :rows="[
            { name: 'Maria Hernández', dni: 70334985, ingresar: 'Buscar' },
          ]"
          :columns="[
            { name: 'name', label: 'Nombres', field: 'name', align: 'center' },
            { name: 'dni', label: 'DNI', field: 'dni', align: 'center' },
            {
              name: 'ingresar',
              label: 'Ingresar',
              field: 'ingresar',
              align: 'center',
            },
          ]"
          row-key="name"
        />
      </q-tab-panel>

      <q-tab-panel name="docentes">
        <div class="text-h6">docentes</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

export default defineComponent({
  name: "CourseDetailPage",
  setup() {
    const route = useRoute();
    const id = ref(route.params.id);

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

