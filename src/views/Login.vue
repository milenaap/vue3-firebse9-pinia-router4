<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/user'
//import {useRouter} from 'vue-router'


const userStore = useUserStore();
//const router = useRouter()

const email = ref('darimile@gmail.com');
const password = ref('123123');


 const handleSubmit = async() => {
    if(!email.value || password.value.length < 6) {
        return alert('llena los campos')

    }
    await userStore.loginUser(email.value, password.value) 
    //router.push('/')
    
 }
 

</script>

<template>
    <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Ingrese email" v-model.trim="email">
        <input type="password" placeholder="Ingrese contraseña" v-model.trim="password">
        <button type="submit">Acceso</button>
    </form>
    </div>


</template>

