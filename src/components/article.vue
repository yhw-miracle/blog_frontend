<template>
    <div class="detail">
        <div class="article" v-if="article">
            <div class="detail_title">
                <img src="/images/system/article.svg" />
                <p>{{ article.title }}</p>
            </div>
            <div class="detail_author">
                <img src="/images/system/author.svg" />
                <span>作者:{{ article.author.username }}</span>
            </div>
            <div class="detail_reader">
                <img src="/images/system/article.svg" />
                <span>阅读量:{{ article.reader }}</span>
            </div>
            <hr />

            <div class="detail_content">
                <BlogEditorView :editorViewValue="article.content" />
            </div>

            <hr />
            <div class="detail_category">
                <img src="/images/system/category.svg" />
                <span>分类:</span>
                <p class="category_item">{{ article.category.name }}</p>
            </div>
            <div class="detail_tags">
                <img src="/images/system/tag.svg" />
                <span>标签:</span>
                <p class="tag_item" v-for="(tag, tag_index) in article.tags" :key="tag_index">{{ tag.name }}</p>
            </div>

            <div class="detail_create_time">
                <img src="/images/system/publication.svg" />
                <span>首次发表:{{ article.create }}</span>
            </div>
            <div class="detail_update_time">
                <img src="/images/system/publication.svg" />
                <span>更新时间:{{ article.update }}</span>
            </div>
        </div>
        <div class="comment"></div>

        <img src="/images/system/to_top.svg" v-if="isShowTop" class="go_top" @click="backTop" />
    </div>
</template>

<script>
import axios from 'axios'
import api_url from '../config/api_config'
import BlogEditorView from './editorView.vue'
export default {
    name: "ArticleDetail",
    components: { BlogEditorView },
    data() {
        return {
            article: null,
            isShowTop: false
        }
    },
    renderTracked() {
        // {key, target, type}
        if(!this.article) {
            var article_id = this.$router.currentRoute.value.query.id
            axios.get(api_url + "/article/", {
                params: {
                    id: article_id
                }
            }).then(res => {
                this.article = res.data
            })
        }
    },
    mounted() {
        window.addEventListener("scroll", this.scrollToTop)
    },
    unmounted() {
        window.removeEventListener("scroll", this.scrollToTop)
    },
    methods: {
        backTop() {
            const that = this
            let timer = setInterval(()=>{
                let speed = Math.floor(-that.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + speed
                if(that.scrollTop === 0) {
                    clearInterval(timer)
                }
            })
        },
        scrollToTop() {
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if(that.scrollTop > 0) {
                that.isShowTop = true
            } else {
                that.isShowTop = false
            }
        }
    }
}
</script>

<style scoped>
.detail {
    width: 100%;
    height: 100%;
    margin: 30px auto;
}
.article {
    width: 90%;
    margin: 10px auto;
    text-align: left;
}
.detail_title p {
    display: inline-block;
    margin: 0px;
    font-weight: bolder;
    color: #800080;
    border: 1px dotted #cccccc;
}
.article div {
    margin: 3px auto;
}
.detail_title *, .detail_author *, .detail_reader *, .detail_create_time *, .detail_update_time * {
    margin: 0px 3px;
    height: 25px;
    vertical-align: middle;
}
.detail_author *, .detail_reader *, .detail_create_time *, .detail_update_time * {
    font-size: 15px;
}
.detail_category, .detail_tags {
    height: 30px;
} 
.detail_category *, .detail_tags * {
    float: left;
    margin: 0px 3px;
    padding: 3px;
    height: 25px;
    vertical-align: middle;
}
.go_top {
    position: absolute;
    right: 50px;
}
</style>