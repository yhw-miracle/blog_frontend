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
                        <span>作者:{{ article.author.username }}</span>
                    </div>
                    <!-- <div class="reader">
                        <img src="/images/system/article.svg" />
                        <span>阅读量:{{ article.reader }}</span>
                    </div> -->
                    <div class="create_time">
                        <img src="/images/system/publication.svg" />
                        <span>首次发表:{{ article.create }}</span>
                    </div>
                </div>
                
                <div class="row3" v-if="article.category">
                    <div class="category">
                        <img src="/images/system/category.svg" />
                        <span>分类:</span>
                        <p class="category_item">{{ article.category.name }}</p>
                    </div>
                    <div class="tags" v-if="article.tags.length > 0">
                        <img src="/images/system/tag.svg" />
                        <span>标签:</span>
                        <p class="tag_item" v-for="(tag, tag_index) in article.tags" :key="tag_index">{{ tag.name }}</p>
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
            <span>计 {{ count }} 篇.</span>
            <img
                :src="nextImg"
                @click="handleCurrentChange(currentPage, 'next')"
                :class="[ currentPage === pageCount ? 'page_cancel':'']"
                v-if="pageCount > 1" />
        </div>

        <img src="/images/system/to_top.svg" v-if="isShowTop" class="go_top" @click="backTop" />
    </div>
</template>

<script>
// import axios from 'axios'
// import api_url from '../config/api_config'
import homedata from '../../blog_data/home'
export default {
    name: "BlogHome",
    data() {
        return {
            currentPage: 1,
            pageSize: 10,
            pageCount: 1,
            previousImg: "/images/system/previous.svg",
            nextImg: "/images/system/next.svg",
            noPageImg: "/images/system/no_page.svg",
            articles: [],
            count: 0,
            isShowTop: false
        }
    },
    mounted() {
        this.articles = homedata[this.currentPage].articles
        this.count = homedata[this.currentPage].count
        this.pageCount = Math.ceil(this.count / this.pageSize)
        this.setPreviousAndNextImg()

        // axios.get(api_url + "/").then(res => {
        //     this.articles = res.data.articles
        //     this.count = res.data.count
        //     this.pageCount = Math.ceil(this.count / this.pageSize)
        //     this.setPreviousAndNextImg()
        // })

        window.addEventListener("scroll", this.scrollToTop)
    },
    unmounted() {
        window.removeEventListener("scroll", this.scrollToTop)
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
            this.articles = homedata[this.currentPage].articles
            this.pageCount = Math.ceil(this.count / this.pageSize)
            
            // axios.get(api_url + "/", {
            //     params: {
            //         currentPage: this.currentPage,
            //         pageSize: this.pageSize
            //     }
            // }).then(res => {
            //     this.articles = res.data.articles
            //     this.pageCount = Math.ceil(this.count / this.pageSize)
            // })

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
        },
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
.go_top {
    position: absolute;
    right: 50px;
}
</style>