<template>
    <div class="main">
        <h3 class="blog_title"><a href="">yhw-miracle</a></h3>
        <div class="blog_header">
            <BlogHeader></BlogHeader>
        </div>
        <div class="blog_home">
            <router-view></router-view>
        </div>
        <div class="blog_footer">
            <BlogFooter></BlogFooter>
        </div>
    </div>
</template>

<script>
import BlogHeader from './components/header.vue'
import BlogFooter from './components/footer.vue'

export default {
    name: 'App',
    components: { BlogHeader, BlogFooter }
}
</script>

<style>
body {
    background-color: #FFFFFF;
    margin: 0px;
    padding: 0px;
}
#app {
    font-family: hack;
    text-align: center;
    color: #FFFFFF;
    background-color: #FFFFFF;
    margin: 0px;
    font-size: 20px;
}
.main {
    margin: 0px;
    background-color: #333333;
    border: 10px dotted #FF6B00;
    /*
    position: absolute;
    top: 50px;
    left: 50px;
    right: 50px;
    bottom: 50px;
    */
}
.blog_title {
    margin: 10px auto;
}
.blog_header {
    width: 80%;
    height: 50px;
    margin: 10px auto;
}
.blog_home {
    width: 80%;
    margin: 10px auto;
    min-height: 79vh;
}
.blog_footer {
    width: 80%;
    margin: 10px auto;
    
}
a {
    text-decoration: none;
}
a:visited {
    color: #800080;
    
}
a:link, a:hover {
    color: #00FF00;
}
a.active {
    color: #FF0000;
}
</style>
