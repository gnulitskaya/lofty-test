<script>
import AppForm from "@/components/AppForm.vue";
export default {
  components: {
    AppForm
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.dialogVisible = false;
    }
  }
}
</script>

<template>
  <app-dialog v-model:show='dialogVisible'>
    <AppForm @closeModal='hideDialog'/>
  </app-dialog>
  <app-button @click='showDialog'>SIGN UP</app-button>
</template>

<style scoped>

</style>
