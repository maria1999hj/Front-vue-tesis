<template>
  <div class="q-pa-md">
    <q-layout
      view="lHh Lpr lff"
      container
      style="height: 900px"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title class="header">IPEPE "J & R"</q-toolbar-title>
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
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section> Curso </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section> Configuración </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section> Cerra sesión </q-item-section>
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
          <p v-for="n in 15" :key="n"></p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

const menuList = [
  {
    icon: "inbox",
    label: "Cursos",
    separator: false,
    url: "/course",
  },
  {
    icon: "inbox",
    label: "Notas",
    separator: false,
    url: "#",
  },
  {
    icon: "inbox",
    label: "Asistencias",
    separator: false,
    url: "#",
  },
  {
    icon: "inbox",
    label: "Configuracion",
    separator: false,
    url: "#",
  },
  {
    icon: "inbox",
    label: "Cerrar sesión",
    separator: false,
    url: "#",
  },
];

export default {
  setup() {
    return {
      drawer: ref(false),
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
