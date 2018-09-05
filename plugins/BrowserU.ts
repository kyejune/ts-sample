const config = require('../nuxt.config.js');

let isM: boolean = false;
let isI: boolean | number = false;
let isA: boolean | number = false;
let isE: boolean | number = false;


if (process.browser) {
    const userAgent = navigator.userAgent;

    /* 브라우저 정보 준비 */
    isM = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    isI = parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(userAgent) || [0, ''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || false;
    isA = ((): number | boolean => {
        const match = userAgent.match(/android\s([0-9\.]*)/i);
        return match ? parseFloat(match[1]) : false;
    })();
    isE = ((): number | boolean => {
        if (/msie/.test(userAgent)) {
            return parseInt(userAgent.split('msie')[1].split(';')[0].trim());
        } else if (/trident\/7/.test(userAgent)) {
            return 11;
        } else {
            return false;
        }
    })();

    /* 스타일 지원용으로 attribute 등록 */
    const body = document.querySelector('body');
    if( body ){
        if( isM ) body.setAttribute( 'is-m', '' );
        if( isI ) body.setAttribute( 'is-i', isI + '' );
        if( isA ) body.setAttribute( 'is-a', isA + '' );
        if( isE ) body.setAttribute( 'is-e', isE + '' );
    }
}


/* 배포시 console 사용자 접근 제한 */
if (!config.dev) {
    if (!window.console) {
        // @ts-ignore
        window.console = {};
    } else {
        console.log('%c금지되어 있는 기능입니다.', 'font-size:70px;font-weight:bold;color:blue;');
        console.log('%c이것은 개발자를 위한 기능입니다. 누군가 버프툰의 기능을 해킹하기 위하여 여기에 코드를 붙여넣기 하라고 이야기 한다면 사기입니다.', 'font-size:20px;font-weight:bold;');
        console.log('%c정상적인 방법으로 서비스를 이용하시기 바랍니다. https://bufftoon.plaync.com/', 'font-size:20px;font-weight:bold;');
    }
    let methods = ["log", "debug", "warn", "info", "dir", "dirxml", "trace", "profile"];
    for (let i = 0; i < methods.length; i++) {
        console[methods[i]] = function () {
            return '버프툰을 이용해 주셔서 감사합니다!!';
        };
    }
}


export default {

    /* 브라우저 판단 */
    isMobile: (): boolean => {
        return isM
    },

    isIphone: (): number | boolean => {
        return isI;
    },

    isAndroid: (): number | boolean => {
        return isA;
    },

    isIE: (): number | boolean => {
        return isE;
    },

    getUrlParams: (): object => {
        return { 'name': 'valeu' }
    }
}