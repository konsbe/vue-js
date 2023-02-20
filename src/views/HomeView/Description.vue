<template>
  <div>off</div>
  <CustomButton />
</template>
<script lang="ts" >
import CustomButton from "./descr";
export default {
  name: "Description",
  components: {
    CustomButton,
  },
  props: ["title", "id"],
};
</script>
