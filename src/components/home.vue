<template>
    <div class="home">
        <div class="article_list">
            <div v-for="(article, article_index) in articles" :key="article_index" class="article_info">
                <div class="row1">
                    <div class="title">
                        <img src="/images/system/article.svg" />
                        <span>
                            <router-link :to="{ path: '/detail', query: {id: article.hash} }">{{ article.title }}</router-link>
                        </span>
                    </div>
                    <div class="start_reading">
                        <router-link :to="{ path: '/detail', query: {id: article.hash} }">开始阅读..</router-link>
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
            <img 
                :src="previousImg" 
                @click="handleCurrentChange(currentPage, 'previous')" 
                :class="[ currentPage === 1 ? 'page_cancel':'']"
                v-if="pageCount > 1" />
            <span>第 {{ currentPage }} 页,</span>
            <span>共 {{ pageCount }} 页,</span>
            <span>计 {{ articles.length }} 篇.</span>
            <img
                :src="nextImg"
                @click="handleCurrentChange(currentPage, 'next')"
                :class="[ currentPage === pageCount ? 'page_cancel':'']"
                v-if="pageCount > 1" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import api_url from '../config/api_config'
export default {
    name: "BlogHome",
    data() {
        return {
            currentPage: 1,
            pageSize: 1,
            pageCount: 2,
            previousImg: "/images/system/previous.svg",
            nextImg: "/images/system/next.svg",
            noPageImg: "/images/system/no_page.svg",
            articles: [
                {
                    hash: "11111112222",
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
                    hash: "11111112222",
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
                    hash: "11111112222",
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
                    hash: "11111112222",
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
    mounted() {
        this.pageCount = Math.ceil(this.articles.length / this.pageSize)
        this.setPreviousAndNextImg()
    },
    updated() {
        axios.get(api_url + "/").then(res => {
            console.log(res.data)
        })
    },
    methods: {
        handleCurrentChange(page, operation) {
            console.log("handleCurrentChange ===> ", page, operation)
            if(operation == "previous") {
                page -= 1
            } else if(operation == "next") {
                page += 1
            }
            this.currentPage = page
            this.setPreviousAndNextImg()
        },
        setPreviousAndNextImg() {
            if(this.currentPage == 1) {
                this.previousImg = "/images/system/no_page.svg"
            } else {
                this.previousImg = "/images/system/previous.svg"
            }

            if(this.currentPage == this.pageCount) {
                this.nextImg = "/images/system/no_page.svg"
            } else {
                this.nextImg = "/images/system/next.svg"
            }
        }
    },
}
</script>

<style scope>
.home {
    width: 100%;
    height: 100%;
    margin: 30px auto;
}
.article_list {
    width: 90%;
    height: 90%;
    text-align: left;
    margin: 20px auto;
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
.title span {
    font-weight: bolder;
}
/*
.reader {
    margin: 5px 80px 5px 5px;
}
*/
.start_reading, .create_time, .tags {
    text-align: right;
    float: right;
}
.title *, .start_reading *, .author *, .reader *, .create_time *, .category *, .category_item, .tags *, .tag_item {
    display: inline-block;
    margin: 0px 3px;
    padding: 3px;
    float: left;
    height: 25px;
}
.category_item, .tag_item {
    background-color: #FF6A00;
}
.tags p {
    margin: 0px 6px;
}
/*
img, span {
    margin: 0 5px;
}
*/
hr {
    border: none;
    border-top: 3px dotted #00FF00;
    clear: both;
}
.page {
    width: 90%;
    height: 10%;
    margin: 10px auto;
    text-align: center;
}
.el-pagination {
    width: 40%;
    margin: auto auto;
}
.el-pagination * {
    margin: auto auto;
}
.el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
    background-color: #FF6A00;
}
.page_cancel {
    pointer-events: none;
}
.page * {
    height: 25px;
    margin: 0px 3px;
}
</style>