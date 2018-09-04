# ts-sample

> Nuxt.js TypeScript project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Build Flow
```
1. install nuxt with typescript
   : https://github.com/nuxt-community/typescript-template

2. install scss
   : https://nuxtjs.org/api/configuration-css
     >> <style scoped lang="scss"> lang 정의 필요
```




## Plugins
```
https://github.com/surmon-china/vue-awesome-swiper [ 슬라이드 배너용으로 추가 ]


```


## DTS( TypeScript Definition Manager )
http://definitelytyped.org/
```
npm install --save-dev @types/{module_name} 설치되면 바로 사용하면되고, 없으면 직접 작성.
index.d.ts, @types는 기본경로에 포함됨.


```



## ErrorCase
```
 - window.console 를 덮어쓰려면 readOnly라고 경고가 뜨고 컴파일이 되지 않습니다.
   이렇게 필요한 기능이지만 ts에러로 컴파일이 안될때에는 해당구문 위에 // @ts-ignore 주석을 추가해줌으로 회피가능합니다.
```





For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
