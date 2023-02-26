<script lang="ts" src="./index" />
<template>
  <div id="dashboard">
    <h1 class="subheading grey--text router-header-name">Dashboard</h1>
    <v-container class="router-container">
      <v-card class="pa-3">
        <v-layout row wrap>
          <v-row>
            <v-col xs12 md6 lg4>
              <div class="caption grey--text font-weight-light">
                Project-title
              </div>
              <div>any text</div>
            </v-col>
            <v-col xs2 md2 lg2>
              <div class="caption grey--text font-weight-light">
                Project-name
              </div>
              <div>any name</div>
            </v-col>
            <v-col xs6 sm4 md2 lg2>
              <div class="caption grey--text">Date</div>
              <div>any date</div>
            </v-col>
            <v-col xs2 sm4 md2 lg2>
              <div class="caption grey--text">Status</div>
              <div>any status</div>
            </v-col>
          </v-row>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>
