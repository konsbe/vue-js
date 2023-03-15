<script lang="ts" src="./index" />
<template>
  <div id="dashboard">
    <h1 class="subheading grey--text router-header-name">Dashboard</h1>
    <v-container class="router-container">
      <v-layout row  class="mb-3 d-flex toolbar justify-end mb-6 bg-amber-lighten-5">
          <v-btn small flat color="grey" @click="sortBy('name')" class="mr-2">
            <v-icon left color="white" small icon="beach_access" />
            <v-tooltip activator="parent" location="top">Sort By Name</v-tooltip>
          </v-btn>
          <v-btn small flat color="grey" @click="sortBy('title')">
            <v-icon left color="white" small icon="folder" />
            <v-tooltip activator="parent" location="top">Sort By Title</v-tooltip>
          </v-btn>
      </v-layout>
      <v-card v-for="connection in connections" :key="connection">
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
              <div>
                <v-chip
                  small
                  :class="`statusfor${connection} white--text caption my-2`"
                  >status {{ connection }}</v-chip
                >
              </div>
            </v-col>
          </v-row>
        </v-layout>
        <v-divider />
      </v-card>
    </v-container>
  </div>
</template>
<style>
.status1 {
  border-left: 4px solid #ff3265;
}
.status2 {
  border-left: 4px solid #0c4265;
}
.status3 {
  border-left: 4px solid #afb260;
}
.status4 {
  border-left: 4px solid #afbcc0;
}
.status5 {
  border-left: 4px solid #1fbcc0;
}
.toolbar{
  border-left: 4px solid #79e0a4;
}
</style>
