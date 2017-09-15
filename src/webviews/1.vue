<template>
    <div class="B">
        <p style="color:#000;" @click="go">B Page</p>
    </div>
</template>
<script>
    import { Component } from 'miox-vue2x-classify';

    @Component({
        name: 'B'
    })
    export default class Index {
        go() {
            this.$miox.push('/c');
        }
    }
</script>
