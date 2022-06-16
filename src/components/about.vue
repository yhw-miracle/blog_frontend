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
export default {
    name: "BlogAbout",
    data() {
        return {
            about_data: [
                {
                    "name": "每日金句(每日更新)",
                    "content": [
                        "种一棵树最好的时间是十年前，其次就是现在，珍惜时光，不负时光。",
                        "越小众的产品，越愿意拥抱创新；越大众的服务，越难推广创新。",
                        "人不可能通过逃避获得平静。极致的逃避不仅没可耻，而且也没什么用。",
                        "趁年轻，好好利用这个计划，尽力去尝遍所有痛苦，爱情可不是一辈子什么时候都会遇到的。",
                        "人生没有「最好」的决定，只有在决定之后做到「最好」。"
                    ]
                },
                {
                    "name": "个人介绍",
                    "content": [
                        "爱思考, 有时思考就发散，不可截住。",
                        "爱读书, 截止到目前累计阅读字数超过 3000 万字。",
                        "爱编程, 多语言开发者，学过 C、C++、JAVA, 写过网页、Android APP、PC 桌面应用程序。",
                        "爱写作, 截止到目前发表文字数超 3 万字。"
                    ]
                },
                {
                    "name": "网络足迹",
                    "content": [
                        "Github: https://github.com/yhw-miracle",
                        "公众号: 痛点就是起点"
                    ]
                }
            ],
            outstanding_people: [
                {
                    "image": "/images/authors/hdp.jpg",
                    "nick_name": "whark",
                    "link": ["https://whark.cn"],
                    "belief": "除了一个小秘密，我只是一个极其平凡的人。"
                },
                {
                    "image": "/images/authors/jqq.jpg",
                    "nick_name": "qiracle",
                    "link": ["https://qiracle.cn"],
                    "belief": "no pains,no gains."
                },
                {
                    "image": "/images/authors/zkp.jpg",
                    "nick_name": "mour",
                    "link": ["https://iami.xyz"],
                    "belief": "人生其实宽广的很"
                },
                {
                    "image": "/images/authors/zwl.jpg",
                    "nick_name": "slycmiaoxi",
                    "link": ["https://slycmiaoxi.github.io"],
                    "belief": "I believe my dream will come true."
                }
            ]
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
