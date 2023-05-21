<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
import { ref, string } from 'yup'
import DynamicForm from '../components/form/DynamicForm.vue'
import PageTitle from '../components/layout/PageTitle.vue'

export default defineComponent({
  name: 'RegisterView',
  components: {
    DynamicForm,
    PageTitle,
  },
  setup() {
    return {
      formSchema: {
        fields: [
          {
            label: 'E-Mail',
            name: 'email',
            as: 'input',
            type: 'email',
            rules: string()
              .required('Required')
              .email('Invalid e-mail address'),
          },
          {
            label: 'First Name',
            name: 'firstname',
            as: 'input',
            rules: string().required('Required').min(3, 'Too short'),
          },
          {
            label: 'Last Name',
            name: 'lastname',
            as: 'input',
            rules: string().required('Required').min(3, 'Too short'),
          },
          {
            label: 'Password',
            name: 'password',
            as: 'input',
            type: 'password',
            rules: string().required('Required').min(8, 'Too short'),
          },
          {
            label: 'Re-enter password',
            name: 'rePassword',
            as: 'input',
            type: 'password',
            rules: string()
              .required('Required')
              .min(8, 'Too short')
              .oneOf([ref('password')], 'Passwords must match'),
          },
        ],
      },
    }
  },
  methods: {
    onSubmit: async () => {
      try {
        const response = await axios.post('/api/auth/register')
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    },
  },
})
</script>

<template>
  <PageTitle>Register</PageTitle>
  <div class="card mx-auto w-full max-w-sm flex-shrink-0">
    <DynamicForm
      :submit-label="'Register'"
      :on-submit="onSubmit"
      :schema="formSchema"
    />
  </div>
</template>
