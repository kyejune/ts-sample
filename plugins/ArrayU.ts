import {Vue} from "~/node_modules/nuxt-property-decorator";

const ArrayU = {

    /* 기존 getLargeValue */
    max: ( a:number[] ): number => {
        return Math.max.apply( null, a );
    },

}

export default ArrayU;