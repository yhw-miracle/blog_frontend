<template>
    <div class="header">
        <el-menu 
            class="blog_menu" 
            :default-active="active_index" 
            :router="true"
            mode="horizontal" 
            @select="handleSelect"
            text-color="#800080"
            active-text-color="#00FF00">
            <template v-for="(item, i) in menu_info" :key="i">
                <el-menu-item :index="item.path">{{ item.name }}</el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
import router from '../router'
// import { useRouter } from 'vue-router'
export default {
    name: "BlogHeader",
    data() {
        return {
            active_index: "/",
            menu_info: router
        }
    },
    watch: {
        $route() {
            this.setCurrentRoute()
        }
    },
    methods: {
        handleSelect(key) {
            this.active_index = key
        },
        // 刷新页面，保持菜单的选项和路由
        setCurrentRoute() {
            this.active_index = this.$route.path
        }
    },
    created() {
        this.setCurrentRoute()
    }
}
</script>

<style scoped>

.header {
    width: 100%;
    height: 100%;
}
.blog_menu {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #FF6B00;
}
.blog_menu {
    border-bottom: 0px;
}
.blog_menu .el-menu-item {
    margin: 0px auto;
    font-size: inherit;
}
</style>