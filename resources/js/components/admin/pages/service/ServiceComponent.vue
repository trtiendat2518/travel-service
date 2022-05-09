<template>
    <div>
        <vue-snotify></vue-snotify>
        <router-view></router-view>
    </div>
</template>

<script>
import 'vue-snotify/styles/material.css'
export default {}
</script>

<style scoped>
#form-select {
    width: 25%;
    display: inline;
}
.form-search {
    float: right;
}
.btn-right {
    float: right;
}
.select-right {
    float: right;
}
.image-service {
    width: 10vw;
    height: 10vh;
}
</style>
