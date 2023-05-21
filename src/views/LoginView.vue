<script lang="ts">
import axios from 'axios'
import { defineComponent, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { string } from 'yup'
import DynamicForm from '../components/form/DynamicForm.vue'
import PageTitle from '../components/layout/PageTitle.vue'
import { LoginForm } from '../interfaces/LoginForm'
import router from '../router'
import { useSystemStore } from '../stores/SystemStore'

export default defineComponent({
  name: 'LoginView',
  components: {
    DynamicForm,
    PageTitle,
  },
  setup() {
    const systemStore = useSystemStore()
    const toast = useToast()

    const isLoggingIn = ref(false)

    const formSchema = {
      fields: [
        {
          label: 'E-Mail',
          name: 'email',
          as: 'input',
          type: 'email',
          rules: string().required('Required').email('Invalid e-mail address'),
        },
        {
          label: 'Password',
          name: 'password',
          as: 'input',
          type: 'password',
          rules: string().required('Required'),
        },
      ],
    }

    const onSubmit = async (values: LoginForm) => {
      try {
        isLoggingIn.value = true
        const response = await axios.post('/api/auth/login', values)
        systemStore.loginUser(response.data.accessToken)
        router.push({ name: 'home' })
      } catch (error) {
        toast.error('Failed to login')
        console.error(error)
      } finally {
        isLoggingIn.value = false
      }
    }
    return {
      formSchema,
      isLoggingIn,
      onSubmit,
    }
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
      :loading="isLoggingIn"
    />
  </div>
</template>
