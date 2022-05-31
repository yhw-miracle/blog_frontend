<template>
    <div class="category_page">
        <div class="summary">
            <div class="summary_item" v-for="(item1, index1) in articles_by_category" :key="index1">
                <a @click="go_anchor('#'+item1.name)" target="_self">{{ item1.name }}({{ item1.articles.length }})</a>
            </div>
        </div>
        <hr />
        <div class="detail">
            <div class="category_info" v-for="(item2, index2) in articles_by_category" :key="index2">
                <div class="info" :id="item2.name" >
                    <img src="/images/system/category.svg" />
                    <span>{{ item2.name }}({{ item2.articles.length }})</span>
                </div>
                <div class="category_articles" v-for="(article, article_index) in item2.articles" :key="article_index">
                    <img src="/images/system/arrow_right1.svg" />
                    <span>{{ article.update }}</span>
                    <span>---</span>
                    <router-link :to="{ path: '/detail', query: {id: article.hash} }">{{ article.title }}</router-link>
                </div>
                <hr />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogCategory",
    data() {
        return {
            articles_by_category: [
                {
                    name: "问题解决",
                    hash: "",
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
                            title: "Python 系列学习二",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00",
                            reader: 10,
                            category: "技术总结",
                            tags: ["python", "技术", "字典", "列表"],
                            author: "yhw",
                            content: "aaaaaaaaaaaaaaaaa"
                        },
                        {
                            title: "Python 系列学习三",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00",
                            reader: 10,
                            category: "技术总结",
                            tags: ["python", "技术", "字典", "列表"],
                            author: "yhw",
                            content: "aaaaaaaaaaaaaaaaa"
                        }
                    ]
                },
                {
                    name: "技术案例",
                    hash: "",
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
                            title: "Python 系列学习二",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00",
                            reader: 10,
                            category: "技术总结",
                            tags: ["python", "技术", "字典", "列表"],
                            author: "yhw",
                            content: "aaaaaaaaaaaaaaaaa"
                        },
                        {
                            title: "Python 系列学习三",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00",
                            reader: 10,
                            category: "技术总结",
                            tags: ["python", "技术", "字典", "列表"],
                            author: "yhw",
                            content: "aaaaaaaaaaaaaaaaa"
                        }
                    ]
                },
                {
                    name: "知识总结",
                    hash: "",
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
                            title: "Python 系列学习二",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00",
                            reader: 10,
                            category: "技术总结",
                            tags: ["python", "技术", "字典", "列表"],
                            author: "yhw",
                            content: "aaaaaaaaaaaaaaaaa"
                        },
                        {
                            title: "Python 系列学习三",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00",
                            reader: 10,
                            category: "技术总结",
                            tags: ["python", "技术", "字典", "列表"],
                            author: "yhw",
                            content: "aaaaaaaaaaaaaaaaa"
                        }
                    ]
                },
                {
                    name: "技术翻译",
                    hash: "",
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
                            title: "Python 系列学习二",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00",
                            reader: 10,
                            category: "技术总结",
                            tags: ["python", "技术", "字典", "列表"],
                            author: "yhw",
                            content: "aaaaaaaaaaaaaaaaa"
                        },
                        {
                            title: "Python 系列学习三",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00",
                            reader: 10,
                            category: "技术总结",
                            tags: ["python", "技术", "字典", "列表"],
                            author: "yhw",
                            content: "aaaaaaaaaaaaaaaaa"
                        }
                    ]
                },
                {
                    name: "生活感悟",
                    hash: "",
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
                            title: "Python 系列学习二",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00",
                            reader: 10,
                            category: "技术总结",
                            tags: ["python", "技术", "字典", "列表"],
                            author: "yhw",
                            content: "aaaaaaaaaaaaaaaaa"
                        },
                        {
                            title: "Python 系列学习三",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00",
                            reader: 10,
                            category: "技术总结",
                            tags: ["python", "技术", "字典", "列表"],
                            author: "yhw",
                            content: "aaaaaaaaaaaaaaaaa"
                        }
                    ]
                },
                {
                    name: "他山之石",
                    hash: "",
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
                            title: "Python 系列学习二",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00",
                            reader: 10,
                            category: "技术总结",
                            tags: ["python", "技术", "字典", "列表"],
                            author: "yhw",
                            content: "aaaaaaaaaaaaaaaaa"
                        },
                        {
                            title: "Python 系列学习三",
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
            ]
        }
    },
    methods: {
        go_anchor(selector) {
            // 移动距离
            let top = 0
            // 当前滚动条位置
            const scroll_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            if( typeof selector == "number") {
                top = selector - scroll_top
            } else {
                const anchor = document.querySelector(selector) || { offsetTop: 0}
                top = anchor.offsetTop - scroll_top
            }
            window.scrollBy({top, behavior: "smooth"})
        }
    },
}
</script>

<style scoped>
.category_page {
    width: 100%;
    margin: 10px auto;
}
.summary, .detail {
    width: 90%;
    margin: 30px auto;
}
.summary_item {
    float: left;
    display: inline-block;
    width: 15%;
    background-color: #FF6A00;
    margin: 5px 10px;
    padding: 3px;
    text-align: center;
    height: 30px;
}
hr {
    border: none;
    border-top: 3px dotted #00FF00;
    width: 90%;
}
.info {
    margin: 10px 0px 10px 100px;
    text-align: left;
}
.category_articles {
    margin: 10px 0px 10px 150px;
    text-align: left;
}
.category_articles *, .info * {
    margin: 0px 10px;
    height: 25px;
    vertical-align: middle;
}
</style>