<template>
  <BackDrop>
    <slot></slot>
  </BackDrop>
</template>

<script>
import BackDrop from "./BackDrop";

export default {
  name: "SearchHeader",
  components: {
    BackDrop
  }
};
</script>