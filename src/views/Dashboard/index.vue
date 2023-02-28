<script lang="ts" src="./index" />
<template>
  <div id="dashboard">
    <h1 class="subheading grey--text router-header-name">Dashboard</h1>
    <v-container class="router-container">
      <v-card flat v-for="connection in connections" :key="connection">
        <v-layout row wrap :class="`pa-3 status${connection}`">
          <v-row>
            <v-col xs="12" sm="12" md="6" lg="4">
              <div class="caption grey--text font-weight-light">Title</div>
              <div>any text for con:{{ connection }}</div>
            </v-col>
            <v-col xs="12" sm="12" md="2" lg="2">
              <div class="caption grey--text font-weight-light">Name</div>
              <div>any name{{ connection }}</div>
            </v-col>
            <v-col xs="12" sm="6" md="2" lg="2">
              <div class="caption grey--text font-weight-light">Date</div>
              <div>{{ new Date() }}</div>
            </v-col>
            <v-col xs="12" sm="6" md="2" lg="2">
              <div class="caption grey--text font-weight-light">Status</div>
              <div>status {{ connection }}</div>
            </v-col>
          </v-row>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>
<style>
.status1 {
  border-left: 2px solid #ff3265;
}
.status2 {
  border-left: 2px solid #0c4265;
}
.status3 {
  border-left: 2px solid #afb260;
}
.status4 {
  border-left: 2px solid #afbcc0;
}
.status5 {
  border-left: 2px solid #1fbcc0;
}
</style>
