<template>
    <div class="main">
        <h3 class="blog_title"><a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=rtfG2fHdwcja2c-cy_7f34DNwcM">yhw-miracle</a></h3>
        <span class="slogan">每一个人的生命中，都有最艰难的那一年，将人生变得美好而辽阔。</span>
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
    color: #000000;
    background-color: #FFFFFFF;
    margin: 0px;
    font-size: 20px;
}
.main {
    margin: 0px;
    background-color: #FFFFFFF;
    /*border: 10px dotted #FF6B00;*/
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
.slogan {
    font-size: 15px;
    color: #cccccc;
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
