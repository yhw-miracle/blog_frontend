<template>
    <div class="articles_by_years">
        <div class="year_articles" v-for="(item, index) in articles_by_years" :key="index">
            <div class="year_label">{{ item.year }}</div>
            <div class="articles" v-for="(article, article_index) in item.articles" :key="article_index">
                <img src="/images/system/arrow_right1.svg" />
                <span>{{ article.update }}</span>
                <span>---</span>
                <router-link :to="{ path: '/detail', query: {id: article.hash} }">{{ article.title }}</router-link>
            </div>
            <hr />
        </div>
        <img src="/images/system/to_top.svg" v-if="isShowTop" class="go_top" @click="backTop" />
    </div>
</template>

<script>
import axios from 'axios'
import api_url from '../config/api_config'
export default {
    name: "BlogArticles",
    data() {
        return {
            articles_by_years: [],
            isShowTop: false
        }
    },
    mounted() {
        axios.get(api_url + "/", {
            params: {
                by_year: true
            }
        }).then(res => {
            this.articles_by_years = res.data
        })

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
.articles_by_years {
    width: 100%;
    margin: 10px auto;
}
.year_articles {
    width: 90%;
    margin: 30px auto;
}
.year_label {
    width: 50%;
    margin: 20px auto;
    text-align: center;
    font-size: 30px;
}
.articles {
    margin: 15px;
    padding: 0px;
    text-align: left;
}
.articles * {
    margin: 0px 10px;
    height: 25px;
    vertical-align: middle;
}
hr {
    border: none;
    border-top: 3px dotted #00FF00;
    clear: both;
}
.go_top {
    position: absolute;
    right: 50px;
}
</style>