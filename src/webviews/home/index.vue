<template>
    <div class="home-page">
        <h1 class="center">Welcome to use miox</h1>
        <p class="center">Perfect framework showing...</p>
    </div>
</template>
<style lang="less" src="./index.less"></style>
<script>
    import { Component, life } from 'miox-vue2x-classify';
    @Component
    export default class HomePage {
        @life mounted() {
            console.log('welcome to miox');
        }
    }
</script>