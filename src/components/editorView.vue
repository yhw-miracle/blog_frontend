<template>
    <div class="editorView" v-loading="isLoading" element-loading-text="加载中......">
        <!-- Markdown 预览 样式 -->
        <link rel="stylesheet" href="/editor-md/css/editormd.preview.min.css"/>
        <!-- Markdown 预览 -->
        <div ref="container" :id="editorViewId">
            <textarea style="display:none;" >###Hello world!</textarea>               
        </div>
    </div>
</template>

<script>
import $scriptjs from 'scriptjs'

export default {
    name: 'BlogEditorView',
    props: {
        editorViewId: {
            type: String,
            default: ''
        },
        editorViewValue: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            editorView: null,
            isLoading: true,
        }
    },
    methods: {
        // 加载相关js
        fetchScript: async function () {
            return new Promise((resolve) => {
                // 按序加载js
                $scriptjs.path('/editor-md/')
                $scriptjs('jquery-3.6.0.min.js', function () {
                    $scriptjs('lib/marked.min.js', function () {
                        $scriptjs('lib/prettify.min.js', function () {
                            $scriptjs('lib/raphael.min.js', function () {
                                $scriptjs('lib/underscore.min.js', function () {
                                    $scriptjs('lib/sequence-diagram.min.js', function () {
                                        $scriptjs('lib/flowchart.min.js', function () {
                                            $scriptjs('lib/jquery.flowchart.min.js', function () {
                                                $scriptjs('zepto.min.js', function () {
                                                    $scriptjs('editormd.min.js', function () {
                                                        resolve()
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        },
        initEditorView: function () {
            this.fetchScript().then(() => {
                this.$nextTick(() => {
                    // 初始默认editorId
                    let editorViewId = this.$refs.container.id = this.editorViewId || 'editorView_' + this.randomNum(8)
                    // let eConfig = this.getConfig()

                    let config = {
                        markdown: this.editorViewValue, // + "\r\n" + $("#append-test").text(),
                        // htmlDecode      : true,       // 开启 HTML 标签解析，为了安全性，默认不开启
                        htmlDecode: 'style,script,iframe', // you can filter tags decode
                        // toc             : false,
                        // tocm: this.previewForHtml.showToc, // Using [TOCM]
                        tocm: true,
                        // tocContainer: this.previewForHtml.showExtendToc ? '#custom-toc-container' : '', // 自定义 ToC 容器层
                        // gfm             : false,
                        // tocDropdown     : true,
                        // markdownSourceCode : true, // 是否保留 Markdown 源码，即是否删除保存源码的 Textarea 标签
                        emoji: true,
                        taskList: true,
                        tex: true, // 默认不解析
                        flowChart: true, // 默认不解析
                        sequenceDiagram: true // 默认不解析
                    }
                    // 实例化
                    this.editorView = window.editormd.markdownToHTML(editorViewId, config)
                })
                this.isLoading = false
            })
        },
        randomNum (length) {
            let res = ''
            for (var i = 0; i < length; i++) {
                // 生成一个0到25的数字
                var rNum = Math.ceil(Math.random() * 25)
                // 小写a = 97
                res += String.fromCharCode(97 + rNum)
            }
            return res
        }
    },
    mounted: function () {
        this.initEditorView()
    }
}
</script>

<style scoped>
.editorView {
    width: 100%;
}
.editorView * {
    width: 100%;
    margin: 0px auto;
    padding: 0px;
    background-color: inherit;
    color: inherit;
}
</style>
