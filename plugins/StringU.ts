const timezoneOffset = new Date().getTimezoneOffset() * 60000;

export default {

    /* 숫자 길이 채우기 */
    lpad: ( numberOrString: number | string, len: number ): string =>{
        let adding:string = '00000000000000000000' + numberOrString;
        return adding.slice( -len );
    },

    /* 천단위 , 찍기 */
    thousand: ( num: number ): string => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    /* timestamp to YYYY.MM.DD hh:mm:ss */
    dateFormat: ( dateTime: number ): string => {
        const date:Date = new Date( dateTime - timezoneOffset );
        return date.toISOString().substr( 0, 19 ).replace(/-/g, '.').replace('T', ' ');
    }

}










