<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Title </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div class="profile-information">
        <q-avatar size="110px" class="q-my-md">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <p>Administrador</p>
      </div>
      <q-list>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item
            clickable
            :active="menuItem.label === 'Outbox'"
            v-ripple
            :to="menuItem.url"
          >
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <section class="page-container">
        <router-view />
      </section>
    </q-page-container>
  </q-layout>
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
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      menuList,
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
</style>
