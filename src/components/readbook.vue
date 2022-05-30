<template>
    <div class="readed">
        <div class="books_every_year" v-for="(item, index) in readed_books" :key="index">
            <div class="year">{{ item.year }}</div>
            <div class="book_info" v-for="(book, book_index) in item.books" :key="book_index">
                <span>{{ book_index + 1}}.{{ book.title}}</span>
            </div>
            <hr />
        </div>
    </div>
</template>

<script>
export default {
    name: "ReadedBook",
    data() {
        return {
            readed_books: [
                {
                    year: 2022,
                    books: [
                        {
                            title: "《苏东坡传》",
                            "note": ""
                        },
                        {
                            title: "《剧变：人类社会与国家危机的转折点》",
                            "note": ""
                        },
                        {
                            title: "《你当向鸟飞往你的山》",
                            "note": ""
                        },
                        {
                            title: "《格局》",
                            "note": ""
                        },
                        {
                            title: "《园丁与木匠》",
                            "note": ""
                        }
                    ]
                },
                {
                    year: 2021,
                    books: [
                        {
                            title: "《苏东坡传》",
                            "note": ""
                        },
                        {
                            title: "《剧变：人类社会与国家危机的转折点》",
                            "note": ""
                        },
                        {
                            title: "《你当向鸟飞往你的山》",
                            "note": ""
                        },
                        {
                            title: "《格局》",
                            "note": ""
                        },
                        {
                            title: "《园丁与木匠》",
                            "note": ""
                        }
                    ]
                },
                {
                    year: 2020,
                    books: [
                        {
                            title: "《苏东坡传》",
                            "note": ""
                        },
                        {
                            title: "《剧变：人类社会与国家危机的转折点》",
                            "note": ""
                        },
                        {
                            title: "《你当向鸟飞往你的山》",
                            "note": ""
                        },
                        {
                            title: "《格局》",
                            "note": ""
                        },
                        {
                            title: "《园丁与木匠》",
                            "note": ""
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
.readed {
    width: 100%;
    margin: 10px auto;
}
.books_every_year {
    width: 90%;
    margin: 30px auto;
}
.year {
    margin: 10px;
    font-size: 30px;
}
.book_info {
    text-align: left;
    margin: 10px;
}
</style>