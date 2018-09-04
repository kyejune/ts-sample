<template>
    <div class="card">
        <h2>{{ `${person.id}+${dataExample}` }}</h2>
        <p>{{ objExample.name }}
        </p>
        <img :src="'https://robohash.org/' + person.first_name + '_' + person.last_name"/>
        <div>
            <button @click="dataExample = '56789'">change data</button>
            <button @click="changeComplexObject">change complex object</button>
        </div>
    </div>
</template>


<script lang="ts">
    import {
        Component,
        Prop,
        Vue
    } from "nuxt-property-decorator"


    type ComplexObjectInterfacce = {
        name: string
        no: number
    }


    @Component({})
    export default class Card extends Vue {
        @Prop() person

        dataExample: string = 'This Property Will Be Data'
        objExample: ComplexObjectInterfacce = {no: 300, name: 'nnnn'}


        // get computedExample() {
        //     return this.propExample.no + this.propExample.name;
        // }


        changeData() {
            this.dataExample = "This is being done in a method"
        }

        changeComplexObject() {
            this.objExample.name = 'new nnnn'
        }


    }
</script>

<style scoped lang="scss">
    .card {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        padding: 0;
        margin: 0.25rem;
        border: 0.25rem solid gainsboro;

        img {
            background-color: gray;
            margin: 1em;
        }
    }
</style>
