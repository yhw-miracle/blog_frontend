<template>
    <div class="home">
        <div class="article_list">
            <div v-for="(article, article_index) in articles" :key="article_index" class="article_info">
                <div class="row1">
                    <div class="title">
                        <img src="/images/system/article.svg" />
                        <h3><a href="">{{ article.title }}</a></h3>
                    </div>
                    <div class="start_reading">
                        <a href="">开始阅读...</a>
                    </div>
                </div>

                <div class="row2">
                    <div class="author">
                        <img src="/images/system/author.svg" />
                        <span>作者:{{ article.author }}</span>
                    </div>
                    <div class="reader">
                        <img src="/images/system/article.svg" />
                        <span>阅读量:{{ article.reader }}</span>
                    </div>
                    <div class="create_time">
                        <img src="/images/system/publication.svg" />
                        <span>首次发表:{{ article.create }}</span>
                    </div>
                </div>
                
                <div class="row3">
                    <div class="category">
                        <img src="/images/system/category.svg" />
                        <span>分类:</span>
                        <p class="category_item">{{ article.category }}</p>
                    </div>
                    <div class="tags">
                        <img src="/images/system/tag.svg" />
                        <span>标签:</span>
                        <p class="tag_item" v-for="(tag, tag_index) in article.tags" :key="tag_index">{{ tag }}</p>
                    </div>
                </div>
                
                <hr />
            </div>
        </div>

        <div class="page">
            <el-pagination
                background
                layout="prev, pager, next"
                :page_size="1"
                :page-sizes="[1, 2, 3, 4]"
                :total="articles.length"
                :current_page="current_page"
                @current-change="handleCurrentChange"
                @prev-click="handlePrevClick"
                @next-click="handleNextClick" />
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogHome",
    data() {
        return {
            current_page: "2",
            articles: [
                {
                    title: "Python 系列学习一",
                    create: "2022-01-01 00:00:00",
                    update: "2022-01-01 00:00:00",
                    reader: 10,
                    category: "技术总结",
                    tags: ["python", "技术", "字典", "列表"],
                    author: "yhw",
                    content: "aaaaaaaaaaaaaaaaa"
                },
                {
                    title: "Python 系列学习一",
                    create: "2022-01-01 00:00:00",
                    update: "2022-01-01 00:00:00",
                    reader: 10,
                    category: "技术总结",
                    tags: ["python", "技术", "字典", "列表"],
                    author: "yhw",
                    content: "aaaaaaaaaaaaaaaaa"
                },
                {
                    title: "Python 系列学习一",
                    create: "2022-01-01 00:00:00",
                    update: "2022-01-01 00:00:00",
                    reader: 10,
                    category: "技术总结",
                    tags: ["python", "技术", "字典", "列表"],
                    author: "yhw",
                    content: "aaaaaaaaaaaaaaaaa"
                },
                {
                    title: "Python 系列学习一",
                    create: "2022-01-01 00:00:00",
                    update: "2022-01-01 00:00:00",
                    reader: 10,
                    category: "技术总结",
                    tags: ["python", "技术", "字典", "列表"],
                    author: "yhw",
                    content: "aaaaaaaaaaaaaaaaa"
                }
            ]
        }
    },
    methods: {
        handleCurrentChange(number) {
            console.log("handleCurrentChange ===> ", number)
        },
        handlePrevClick() {

        },
        handleNextClick() {

        }
    },
}
</script>

<style scope>
.home {
    width: 100%;
    height: 100%;
    margin: 10px auto;
}
.article_list {
    width: 90%;
    height: 90%;
    text-align: left;
    margin: 5px auto;
}
.row1, .row2, .row3 {
    width: 100%;
    height: 50px;
}
.title h3 {
    display: inline-block;
    margin: 0px;
}
.title, .start_reading, .author, .reader, .create_time, .category, .tags {
    display: inline-block;
    margin: 8px 30px;
    float: left;
}
.reader {
    margin: 8px 130px;
}
.start_reading, .create_time, .tags {
    text-align: right;
    float: right;
}
.category_item, .tag_item {
    display: inline-block;
    background-color: #FF6A00;
    margin: 0px 6px;
    padding: 1px 6px;
}
img, span {
    margin: 0 5px;
}
hr {
    border: none;
    border-top: 3px dotted #00FF00;
    clear: both;
}
.page {
    width: 90%;
    height: 10%;
    margin: 5px auto;
    text-align: center;
}
.el-pagination {
    width: 40%;
    margin: 0 auto;
}
.el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
    background-color: #FF6A00;
}
</style>