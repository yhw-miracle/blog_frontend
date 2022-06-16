<template>
    <div class="about">
        <div class="about_data" v-for="(item, index) in about_data" :key="index">
            <div class="name">
                <img src="/images/system/arrow_right1.svg" />
                <span>{{ item.name }}</span>
            </div>
            <div class="content" v-for="(content_item, content_index) in item.content" :key="content_index">
                <img src="/images/system/arrow_right2.svg" />
                <span>{{ content_item }}</span>
            </div>
            <hr />
        </div>

        <div class="outstanding_people">
            <div class="name">
                <img src="/images/system/arrow_right1.svg" />
                <span>一些写作者</span>
            </div>
            <table>
                <thead>
                <tr>
                    <th>image</th>
                    <th>nick_name</th>
                    <th>link</th>
                    <th>belief</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(outstanding, index) in outstanding_people" :key="index">
                        <td>
                            <img :src="outstanding.image" width="50" height="50" />
                        </td>
                        <td>{{ outstanding.nick_name }}</td>
                        <td>
                            <span class="link_item" v-for="(link_item, link_index) in outstanding.link" :key="link_index">
                                <a :href="link_item" target="_blank">{{ link_item }}</a>
                            </span>
                        </td>
                        <td>{{ outstanding.belief }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import about from '../../blog_data/about'
import outstanding_people from '../../blog_data/outstanding_people'
export default {
    name: "BlogAbout",
    data() {
        return {
            about_data: about,
            outstanding_people: outstanding_people
        }
    }
}
</script>

<style scoped>
.about {
    width: 100%;
    margin: 10px auto;
}
.about_data, .outstanding_people {
    width: 90%;
    margin: 30px auto;
}
.name {
    margin: 10px 0px 10px 100px;
    text-align: left;
}
.content {
    margin: 10px 0px 10px 150px;
    text-align: left;
}
.name *, .content * {
    margin: 0px 10px;
    height: 25px;
    vertical-align: middle;
}
hr {
    width: 90%;
    border: none;
    border-top: 3px dotted #00FF00;
    clear: both;
}
table {
    width: 90%;
    margin: 0 auto;
    border-collapse: collapse;
    text-align: center;
}
table td, table th {
    border: 1px dashed #00FF00;
}
.link_item {
    margin: 5px;
}
</style>
