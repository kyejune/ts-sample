<template>
    <section>
        <h1 class="header">Nuxt TypeScript Sample</h1>


        <div>
            <h4>[ storage & cookie ]</h4>
            <div>
                <label>key:<input type="text" v-model="storageKey"></label>
                <label>val:<input type="text" v-model="storageValue"></label>
                <label>expire:<input type="number" placeholder="default = untimely" v-model="storageExpireTimeStamp"></label>
                <button @click="saveStorage">submit</button>
                <button @click="clearStorage">clear all</button>
                <pre>{{ this.storageAll }}</pre>
            </div>


        </div>

        <div>
            <h4>[browser detect]</h4>
            <pre>{{ browserInfoString }}</pre>
        </div>

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
    import BrowserU from "../plugins/BrowserU";
    import {storage, cookie } from "../store";

    @Component({
        components: {
            Card,
        },
    })


    export default class extends Vue {

        @State people;

        // Property
        mySwiper: Swiper;
        swiperOption: SwiperOptions = SWIPER_COMMON;
        browserInfoString:string = '';
        storageKey:string = '';
        storageValue:string = '';
        storageAll:string = '';
        storageExpireTimeStamp:null|number = null;

        // Life Cycle
        mounted() {
            this.browserInfoString = `
                isMobile: ${BrowserU.isMobile()},
                isIphone: ${BrowserU.isIphone()},
                isAndroid: ${BrowserU.isAndroid()},
                isIE: ${BrowserU.isIE()},

                'css 활용을 위해 브라우저 시작과 동시에 body 속성에 is-i, is-a, is-m, is-e 해당하는 요소는 기본 삽입됩니다.'`;


            // storage
            this.readStorage();

            console.log( 'storage:', storage );
        }



        // storage
        saveStorage() {

            let expireTime:null|number = null;
            if( this.storageExpireTimeStamp ){
                console.log( 'expire data 등록');
                cookie.set( this.storageKey, this.storageValue, new Date().getTime() + Number(this.storageExpireTimeStamp) );
            }
            else
            {
                console.log( 'none expire data 등록');
                storage.set( this.storageKey, this.storageValue );
            }

            storage.set( 'sample-array',  [0, 1, 2, 34] );
            storage.set( 'sample-object', { a:'aaa', b:'bbb' } );

            this.readStorage();
        }

        readStorage() {
            this.storageAll = '<-- storage & cookie: \n';
            cookie.each( ( val:string, key:string )=>{
                this.storageAll += `${key} = ${cookie.get(key)}\n`;
            });
            this.storageAll += '-->';
        }

        clearStorage(){
            storage.clearAll();
            this.readStorage();
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