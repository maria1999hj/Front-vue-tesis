<template>
  <div>
    <q-btn
      class="q-mb-lg"
      label="Registrar curso"
      color="primary"
      @click="openModalRegisterCourse"
    ></q-btn>
    <q-dialog v-model="openModal">
      <q-card class="q-pa-lg" style="width: 500px">
        <q-form @submit.prevent="registerCourse">
          <div class="text-h5 text-center">Agregar curso</div>
          <q-input
            v-model="name"
            class="q-mb-sm"
            label="Nombre"
            required
          ></q-input>
          <q-input
            v-model="description"
            class="q-mb-sm"
            label="Descripcion"
            required
          ></q-input>
          <q-input
            v-model="date"
            class="q-mb-sm"
            type="date"
            label="Fecha"
            stack-label
            required
          ></q-input>
          <q-input
            v-model="start_time"
            class="q-mb-sm"
            type="time"
            label="Hora de inicio"
            stack-label
            required
          ></q-input>
          <q-input
            v-model="end_time"
            class="q-mb-md"
            type="time"
            label="Hora de final"
            stack-label
            required
          ></q-input>
          <div class="text-center">
            <q-btn type="submit" label="Registrar" color="primary" />
          </div>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { api } from "src/boot/axios";
import { NotifyError, NotifySuccess } from "src/utils";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CourseRegister",
  setup(_, { emit }) {
    const openModal = ref(false);

    const name = ref();
    const description = ref();
    const end_time = ref();
    const start_time = ref();
    const date = ref();

    const openModalRegisterCourse = () => {
      openModal.value = true;
    };

    const registerCourse = async () => {
      try {
        await api.post("/course", {
          name: name.value,
          description: description.value,
          end_time: end_time.value,
          start_time: start_time.value,
          date: date.value,
        });

        NotifySuccess("Curso registrado");
        emit("course-register");
      } catch (error) {
        NotifyError("Ocurrio un error");
      } finally {
        openModal.value = false;
      }
    };

    return {
      openModal,
      openModalRegisterCourse,
      registerCourse,
      name,
      description,
      end_time,
      start_time,
      date,
    };
  },
});
</script>
