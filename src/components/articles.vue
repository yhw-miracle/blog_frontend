<template>
    <div class="articles_by_years">
        <div class="year_articles" v-for="(item, index) in articles_by_years" :key="index">
            <div class="year_label">{{ item.year }}</div>
            <div class="articles" v-for="(article, article_index) in item.articles" :key="article_index">
                <img src="/images/system/arrow_right1.svg" />
                <span>{{ article.update }}</span>
                <span>---</span>
                <a href="">{{ article.title }}</a>
            </div>
            <hr />
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogArticles",
    data() {
        return {
            articles_by_years: [
                {
                    year:"2022",
                    articles: [
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        }
                    ]
                },
                {
                    year:"2021",
                    articles: [
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        }
                    ]
                },
                {
                    year:"2020",
                    articles: [
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        }
                    ]
                },
                {
                    year:"2019",
                    articles: [
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        }
                    ]
                },
                {
                    year:"2018",
                    articles: [
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        }
                    ]
                },
                {
                    year:"2017",
                    articles: [
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        }
                    ]
                },
                {
                    year:"2016",
                    articles: [
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        },
                        {
                            title: "Python 系列学习一",
                            create: "2022-01-01 00:00:00",
                            update: "2022-01-01 00:00:00"
                        }
                    ]
                }
            ]
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
    text-align: left;
}
.articles * {
    margin: 0px 10px;
}
hr {
    border: none;
    border-top: 3px dotted #00FF00;
    clear: both;
}
</style>