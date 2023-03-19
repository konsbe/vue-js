<script lang="ts" src="./index" />
<template>
  <div id="products">
    <h1 class="subheading grey--text router-header-name">Github Repos</h1>
    <v-container class="router-container">
      <!-- <v-expansion-panels>
      <v-expansion-panel
        v-for="repo in repositories"
        :key="repo.id"
        :title="repo.name"
        :text="repo.description"
      ></v-expansion-panel>
    </v-expansion-panels> -->
      <v-expansion-panels>
        <v-expansion-panel v-for="repo in repositories" :key="repo.id">
          <v-expansion-panel-title>
            <template v-slot:default="{ expanded }">
              <v-row no-gutters>
                <v-col cols="4" class="d-flex justify-start"> {{repo.name}} </v-col>
                <v-col cols="8" class="text-grey">
                  <v-fade-transition leave-absolute>
                    <span v-if="expanded" key="0">
                      {{repo.language}}
                    </span>
                    <span v-else key="1">
                      {{repo.language}}
                    </span>
                  </v-fade-transition>
                </v-col>
              </v-row>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
              {{ repo.description }}
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>
