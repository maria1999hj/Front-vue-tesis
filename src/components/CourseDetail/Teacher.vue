<template>
  <div>
    <q-table
      flat
      title="Alumnos"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :loading="loading"
      :filter="filter"
    >
      <template v-slot:top>
        <q-btn
          label="Agregar docente al curso"
          color="primary"
          @click="openModalAddStudentCourse"
        />
        <q-space />

        <q-input
          borderless
          dense
          debounce="300"
          color="primary"
          v-model="filter"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body-cell-option="props">
        <q-td :props="props">
          <q-btn
            icon="delete"
            flat
            fab-mini
            color="negative"
            @click="deleteStudentCourse(props.row.id)"
          />
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="openModal">
      <q-card style="width: 350px">
        <q-list
          bordered
          padding
          class="rounded-borders"
          style="max-width: 350px"
        >
          <q-item-label header>Docentes no registrados</q-item-label>

          <q-item v-for="(student, index) in studentsNotRegister" :key="index">
            <q-item-section avatar top>
              <q-avatar icon="person" color="primary" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">{{ student.name }}</q-item-label>
              <q-item-label lines="2">{{ student.dni }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn
                icon="add"
                color="green"
                flat
                fab-mini
                @click="addStudentCourse(student.id)"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { api } from "boot/axios";
import { useRoute } from "vue-router";
import { NotifySuccess } from "src/utils";
import { CODE_TEACHER } from "src/constants";

export default defineComponent({
  name: "CourseDetailStudent",
  setup() {
    const columns = [
      { name: "name", label: "Nombres", field: "name", align: "center" },
      { name: "dni", label: "DNI", field: "dni", align: "center" },
      {
        name: "option",
        label: "Opciones",
        field: "option",
        align: "center",
      },
    ];

    const rows = ref([]);
    const loading = ref(true);
    const loadingStudentNotRegister = ref(true);
    const studentsNotRegister = ref([]);
    const openModal = ref(false);
    const filter = ref();

    const route = useRoute();

    const getStudents = async () => {
      loading.value = true;
      const result = await api.get(
        `/course/${route.params.course}/user?type_user=${CODE_TEACHER}`
      );
      rows.value = result.data;
      loading.value = false;
    };

    const getStudentsNotRegister = async () => {
      loadingStudentNotRegister.value = true;
      const result = await api.get(
        `/course/${route.params.course}/user?not_user_register=true&type_user=${CODE_TEACHER}`
      );
      studentsNotRegister.value = result.data;
      loadingStudentNotRegister.value = false;
    };

    const openModalAddStudentCourse = async () => {
      openModal.value = true;
      await getStudentsNotRegister();
    };

    const addStudentCourse = async (idStudent) => {
      await api.post(`/course/${route.params.course}/user/${idStudent}`);
      await getStudents();
      openModal.value = false;
      NotifySuccess("Alumno agregado");
    };
    const deleteStudentCourse = async (idStudent) => {
      await api.delete(`/course/${route.params.course}/user/${idStudent}`);
      await getStudents();
      NotifySuccess("Docente eliminado del curso");
    };

    onMounted(async () => {
      getStudents();
    });

    return {
      columns,
      rows,
      loading,
      openModalAddStudentCourse,
      openModal,
      getStudentsNotRegister,
      studentsNotRegister,
      loadingStudentNotRegister,
      addStudentCourse,
      deleteStudentCourse,
      filter,
    };
  },
});
</script>
