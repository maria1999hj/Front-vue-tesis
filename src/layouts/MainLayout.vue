<template>
  <q-layout
    view="lHh Lpr lff"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="header">{{ title }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="300" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple to="/course">
            <q-item-section avatar>
              <q-icon name="ti-folder" />
            </q-item-section>

            <q-item-section> Curso </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/mensaje">
            <q-item-section avatar>
              <q-icon name="ti-comment" />
            </q-item-section>

            <q-item-section> Mensajes </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/login">
            <q-item-section avatar>
              <q-icon name="ti-share" />
            </q-item-section>

            <q-item-section> Cerrar sesión </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img :src="require('../assets/logo.jpg')" />
          </q-avatar>
          <div class="text-weight-bold">ADMINISTRADOR</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const title = computed(() => {
      const namesTitle = {
        course: "Cursos",
        configuration: "Configuración",
      };
      return namesTitle[route.path.split("/")[1]];
    });

    return {
      drawer: ref(false),
      title,
    };
  },
};
</script>


<style>
.profile-information {
  text-align: center;
  font-weight: bold;
}

.page-container {
  margin: 50px;
}

.header {
  align-content: center;
}
</style>
