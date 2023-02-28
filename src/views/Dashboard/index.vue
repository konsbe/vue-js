<script lang="ts" src="./index" />
<template>
  <div id="dashboard">
    <h1 class="subheading grey--text router-header-name">Dashboard</h1>
    <v-container class="router-container">
      <v-card class="pa-3">
        <v-layout row wrap>
          <v-row>
            <v-col xs="12" sm="12" md="6" lg="4">
              <div class="caption grey--text font-weight-light">
                Project-title
              </div>
              <div>any text</div>
            </v-col>
            <v-col xs="12" sm="12" md="2" lg="2">
              <div class="caption grey--text font-weight-light">
                Project-name
              </div>
              <div>any name</div>
            </v-col>
            <v-col xs="6" sm="6" md="2" lg="2">
              <div class="caption grey--text">Date</div>
              <div>any date</div>
            </v-col>
            <v-col xs="6" sm="6" md="2" lg="2">
              <div class="caption grey--text">Status</div>
              <div>any status</div>
            </v-col>
          </v-row>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>
