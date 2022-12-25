
<template>

    <v-app-bar :elevation="2">
      <v-app-bar-nav-icon/>
      <v-app-bar-title>Retro Doctor</v-app-bar-title>
    </v-app-bar>
    <v-main>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          One of three columns
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
    </v-main>
    <v-footer :absolute=true border :elevation="1" :height="2">Abie's thing</v-footer>
</template>