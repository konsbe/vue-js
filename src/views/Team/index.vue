<script lang="ts" src="./index" />
<template>
  <div id="team">
    <h1 class="subheading grey--text router-header-name">Team</h1>
    <v-container class="router-container">
      <v-layout row wrap>
        <div class="d-flex xs-12 sm-6 md-4 lg-3"  v-for="member in teamMembers" :key="member.name">
          <v-card class="text-xs-center ma-3" max-width="344">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="member.avatar" :alt="member.name[0]">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div>{{ member.category }}</div>
              <p class="text-h4 text--primary">{{ member.name }}</p>
              <div class="text--primary">{{ member.message }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>
