<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
    <section>
        <h1 class="header">Nuxt TypeScript Sample</h1>

        <div>
            <h4>[vue-awesome-swiper]</h4>

            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="person in people">
                        <img :src="'https://robohash.org/' + person.first_name + '_' + person.last_name"/>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>

        </div>


        <h4>[component]</h4>
        <div class="cards">
            <Card v-for="person in people" :key="person.id" :person="person"></Card>
        </div>

    </section>
</template>

<script lang="ts">

    import {Component, Vue} from "nuxt-property-decorator"
    import {State} from "vuex-class"
    import Card from "~/components/Card.vue"
    import {SWIPER_COMMON} from "../plugins/const";

    @Component({
        components: {
            Card,
        },
    })

    export default class extends Vue {
        @State people

        // Property
        mySwiper: Swiper
        swiperOption: SwiperOptions = SWIPER_COMMON

        // Life Cycle
        mounted() {

        }
    }


</script>
<style scoped lang="scss">

    .cards {
        display: flex;
        flex-wrap: wrap;
    }

    .swiper-slide {
        background-color: #c9c9c9;
    }


</style>