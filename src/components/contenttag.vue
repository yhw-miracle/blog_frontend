<template>
    <div class="tags">
        <div class="summary">
            <div class="summary_item" v-for="(item1, index1) in articles_by_tag" :key="index1">
                <a @click="go_anchor('#'+item1.name)" target="_self">{{ item1.name }}({{ item1.articles.length }})</a>
            </div>
        </div>
        <hr />
        <div class="detail">
            <div class="tag_info" v-for="(item2, index2) in articles_by_tag" :key="index2">
                <div class="info" :id="item2.name" >
                    <img src="/images/system/category.svg" />
                    <span>{{ item2.name }}({{ item2.articles.length }})</span>
                </div>
                <div class="tags_articles" v-for="(article, article_index) in item2.articles" :key="article_index">
                    <img src="/images/system/arrow_right1.svg" />
                    <span>{{ article.update }}</span>
                    <span>---</span>
                    <a href="">{{ article.title }}</a>
                </div>
                <hr />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogContentTag",
    data() {
        return {
            articles_by_tag: [
                {
                    name: "python",
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
                    name: "java",
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
                    name: "android",
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
                    name: "tcp",
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
                    name: "udp",
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
                    name: "异常",
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
.tags {
    width: 100%;
    margin: 10px auto;
}
.summary, .detail {
    width: 90%;
    margin: 30px auto;
    min-height: 50px;
}
.summary_item {
    float: left;
    display: inline-block;
    width: 10%;
    background-color: #FF6A00;
    margin: 5px 10px;
    padding: 3px;
    text-align: center;
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
.tags_articles {
    margin: 10px 0px 10px 150px;
    text-align: left;
}
.tags_articles *, .info * {
    margin: 0px 10px;
}
</style>