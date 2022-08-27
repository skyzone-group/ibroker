<template>
<form @submit.prevent="submit" @keydown="form.onKeydown($event)">
  <input v-model="form.name" type="text" name="name">
  <HasError :form="form" field="name" />

  <input type="file" name="file" @change="handleFile">
  <HasError :form="form" field="file" />

  <div v-if="form.progress">Progress: {{ form.progress.percentage }}%</div>

  <button type="submit">Submit</button>
</form>
</template>

<script>
import Form from 'vform'
import { HasError } from 'vform/src/components/bootstrap5'

export default {
  components: { HasError },

  data: () => ({
    form: Form.make({
      name: '',
      file: null
    })
  }),

  methods: {
    handleFile (event) {
      // We'll grab just the first file...
      // You can also do some client side validation here.
      const file = event.target.files[0]

      // Set the file object onto the form...
      this.form.file = file
    },

    async submit () {
      const response = await this.form.post('/api/formsubmit', {
        onUploadProgress: e => console.log(e) }
      )

      // ...
    }
  }
}
</script>