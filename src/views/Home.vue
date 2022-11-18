<script setup>
import { useUserStore } from '../stores/user';
import { userDatabaseStore } from '../stores/datebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const userStore = useUserStore();
const databaseStore = userDatabaseStore();
const router = useRouter();
const url = ref('');


const handleSubmit= () => {
   databaseStore.addUrl(url.value)
}


databaseStore.getUrls();

</script>



<template>
    <div>
        <h1>Home</h1>
        <p>{{userStore.userData?.email}}</p>

        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Ingrese URL" v-model="url">
            <button type="submit">Agregar</button>

        </form>



        <p v-if="databaseStore.loadingDoc">loading docs...</p>
        <ul v-else>
            <li v-for="item of databaseStore.documents" :key="item.id">
                {{item.id}} 
                <br> 
                {{item.name}}
                <br>
                {{item.short}}
                <br>
                <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
                <button @click="router.push(`/editar/${item.id}`)">Editar</button>
            </li>
        </ul>
    </div>
</template>



