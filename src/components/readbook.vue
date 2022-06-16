<template>
    <div class="readed">
        <div class="notes" v-for="(article, article_index) in readed_books" :key="article_index">
            <img src="/images/system/arrow_right1.svg" />
            <span>{{ article.update }}</span>
            <span>---</span>
            <router-link :to="{ path: '/detail', query: {id: article.hash} }">{{ article.title }}</router-link>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
// import api_url from '../config/api_config'
import reading_notes from '../../blog_data/reading_notes'
export default {
    name: "ReadedBook",
    data() {
        return {
            readed_books: []
        }
    },
    mounted() {
        // axios.get(api_url + "/reading_notes/").then(res => {
        //     this.readed_books = res.data
        // })
        this.readed_books = reading_notes
    },
}
</script>

<style scoped>
.readed {
    width: 90%;
    margin: 30px auto;
}
.notes {
    text-align: left;
    margin: 10px;
}

.notes * {
    margin: 0px 10px;
    height: 25px;
    vertical-align: middle;
}
</style>
