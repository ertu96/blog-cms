<script lang="ts">
import { useForm } from 'vee-validate'
import { defineComponent } from 'vue'
import { string } from 'yup'
import DynamicForm from '../components/form/DynamicForm.vue'
import PageTitle from '../components/layout/PageTitle.vue'

export default defineComponent({
  name: 'LoginView',
  components: {
    DynamicForm,
    PageTitle,
  },
  setup() {
    const { handleSubmit } = useForm()

    const onSubmit = handleSubmit((values) => {
      console.log(values)
    })

    return {
      onSubmit,
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
            label: 'Password',
            name: 'password',
            as: 'input',
            type: 'password',
            rules: string().required('Required'),
          },
        ],
      },
    }
  },
  methods: {
    /* onSubmit: async () => {
      try {
        const response = await axios.post('/api/auth/login')
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }, */
  },
})
</script>

<template>
  <PageTitle>Login</PageTitle>
  <div class="card mx-auto w-full max-w-sm flex-shrink-0">
    <DynamicForm
      :submit-label="'Login'"
      :on-submit="onSubmit"
      :schema="formSchema"
    />
  </div>
</template>
