<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onBeforeMount } from 'vue'

</script>

<template>
  <v-responsive class="" max-height="100%">
    <v-app>
      <v-app-bar>
        <template v-slot:prepend>
          <!-- <v-img scr="@/assets/chicomanda.png" alt="Chi Comanda"></v-img> -->
          <RouterLink to="/">
            <img alt="Chi Comanda" class="logo" src="@/assets/chicomanda.png" style="margin-left: 8px; margin-top: 7px;"
              width="40" height="40" />
          </RouterLink>
        </template>
        <v-app-bar-title>
          <RouterLink to="/">CHI COMANDA</RouterLink>
        </v-app-bar-title>
      </v-app-bar>
      <v-main>
        <RouterView />
      </v-main>
    </v-app>
  </v-responsive>

</template>

<style scoped></style>