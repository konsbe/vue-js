<script lang="ts" src="./descr.ts" />
<template>
  <div>off</div>
  <CustomButton />
  <BlogPost v-for="post in posts" :key="post.id" :title="post.title" />
</template>
