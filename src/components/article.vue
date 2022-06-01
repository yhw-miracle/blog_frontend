<template>
    <div class="detail">
        <div class="article">
            <div class="detail_title">
                <img src="/images/system/article.svg" />
                <p>{{ article.title }}</p>
            </div>
            <div class="detail_author">
                <img src="/images/system/author.svg" />
                <span>作者:{{ article.author }}</span>
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
                <p class="category_item">{{ article.category }}</p>
            </div>
            <div class="detail_tags">
                <img src="/images/system/tag.svg" />
                <span>标签:</span>
                <p class="tag_item" v-for="(tag, tag_index) in article.tags" :key="tag_index">{{ tag }}</p>
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
    </div>
</template>

<script>
import BlogEditorView from './editorView.vue'
export default {
    name: "ArticleDetail",
    components: { BlogEditorView },
    data() {
        return {
            article: {
                hash: "11111112222",
                title: "Python 系列学习一",
                create: "2022-01-01 00:00:00",
                update: "2022-01-01 00:00:00",
                reader: 10,
                category: "技术总结",
                tags: ["python", "技术", "字典", "列表"],
                author: "yhw",
                content: "# aaaaaaaaaaaaaaaaa\n* 111\n* 222\n* 123"
            }
        }
    },
    mounted() {
        console.log(this.$router.currentRoute.value.query)
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
</style>