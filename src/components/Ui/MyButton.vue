<template>
  <button class="btn">
    <slot> </slot>
  </button>
</template>

<script>
export default{
  name: 'my-button'
}
</script>


<style scoped>

.btn{
  background-color: var(--purple-color);
  color: var(--white-color);
  margin-left: 4rem;
  height: 40px;
  line-height: 30px;
}
</style>