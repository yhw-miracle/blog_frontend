// import HelloWorld from './components/HelloWorld.vue'
import BlogHome from './components/home.vue'
import BlogArticles from './components/articles.vue'
import BlogAbout from './components/about.vue'
import BlogCategory from './components/category.vue'
import BlogContentTag from './components/contenttag.vue'
import ReadedBook from './components/readbook.vue'
// import ReaderLocation from './components/location.vue'
import ArticleDetail from './components/article.vue'

export default [
    { path: "/", component: BlogHome, name: "主页" },
    { path: "/articles", component: BlogArticles, name: "所有文章" },
    { path: "/detail", component: ArticleDetail, name: "文章详情" },
    { path: "/about", component: BlogAbout, name: "我" },
    { path: "/category", component: BlogCategory, name: "分类" },
    { path: "/tag", component: BlogContentTag, name: "标签" },
    { path: "/readed", component: ReadedBook, name: "阅读是件小事" },
    // { path: "/location", component: ReaderLocation, name: "读者分布" }
]