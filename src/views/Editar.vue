<script setup>
import { onMounted, ref } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {userDatabaseStore} from '../stores/datebase';

const databaseStore = userDatabaseStore();

const route = useRoute();

const router = useRouter();

const url = ref('');
//console.log(route.params)

const handleSubmit = async() => {
    //console.log('editar')
    //validaciones del imput
    await databaseStore.updateUrl(route.params.id, url.value)
    router.push("/");
    
}

onMounted(async() => {
     url.value = await databaseStore.leerUrl(route.params.id)

})

</script>



<template>
    <div>
        <h1>Editar id: route.params</h1>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Ingrese URL" v-model="url">
            <button type="submit">Editar</button>

        </form>
    </div>
</template>


