<script setup>
// import { mdiAccount } from '@mdi/js'
</script>

<template>
  <v-card>
    <v-layout>

      <v-navigation-drawer
        color="teal"
        permanent
      >
        <v-img
          :src="`/src/assets/EduAttend.png`"
        />

        <v-divider></v-divider>

        <v-list color="transparent" nav>
          <v-icon icon="mdi-information"></v-icon>
          <v-list-item prepend-icon="mdiAccount" title="Dashboard" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="College" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Department" value="starred"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Report" value="starred"></v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-main style="height: 100px" 
        color="grey-lighten-1"
      >
        <v-toolbar-title class="pa-8">Dashboard</v-toolbar-title>

      </v-main>
    </v-layout>
  </v-card>
</template>



