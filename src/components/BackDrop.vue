<template>
  <div>
    <div class="backdrop">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackDrop"
};
</script>

<style scoped>
.backdrop {
  background: #dde2e9;
  height: 30vh;
}
</style>