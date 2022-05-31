<template>
    <div class="header">
        <el-menu 
            class="blog_menu"
            mode="horizontal"
            :ellipsis="false"
            background-color="#FF6A00"
            text-color="#800080"
            active-text-color="#00FF00"
            :default-active="current" 
            :router="true"
            @select="handleSelect">
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
            current: "/",
            menu_info: []
        }
    },
    mounted() {
        var that=this;
        router.forEach(function func(value) {
            if(value.name != "文章详情") {
                that.menu_info.push(value)
            }
        })
    },
    watch: {
        $route() {
            this.setCurrentRoute()
        }
    },
    methods: {
        handleSelect(key) {
            this.current = key
        },
        // 刷新页面，保持菜单的选项和路由
        setCurrentRoute() {
            this.current = this.$route.path
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
}
.blog_menu {
    border-bottom: 0px;
}
.blog_menu .el-menu-item {
    margin: 0px auto;
    font-size: inherit;
}
</style>