webpackJsonp([12,25],{2:/*!*****************************!*\
  !*** ./docs/views/index.js ***!
  \*****************************/
function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0}),n.Mark=void 0;var o=t(7),r=a(o);n.Mark=r["default"]},3:/*!*************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/views/mark.vue ***!
  \*************************************************************************************************************************************************************/
function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(e){var n=document.createElement("div");return n.innerHTML=e,n.innerText||n.textContent};n["default"]={data:function(){return{mark:""}},ready:function(){this.mark=window.marked(t(this.$el.getElementsByClassName("ex-mark-text")[0].innerHTML))}}},4:/*!*********************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/views/mark.vue ***!
  \*********************************************************************************************************************************************/
function(e,n,t){n=e.exports=t(9)(),n.push([e.id,".ex-mark-text{display:none}.marked code{display:block;background:#f7f7f7;padding:1rem;color:#999;font-size:.8rem;line-height:1.2;overflow-x:auto}.marked{font-size:.9rem;line-height:1.8;color:#666}.marked h1{font-size:1.6rem}.marked h2{font-size:1.2rem}.marked blockquote{font-size:90%;color:#999;border-left:4px solid #e9e9e9;padding-left:.8em;margin:1em 0;font-style:italic}.marked ul,ol{padding:0 2rem;list-style:inherit}@media screen and (max-width:768px){.ex-card{margin:0}}","",{version:3,sources:["/./docs/views/mark.vue"],names:[],mappings:"AACA,cACI,YAAc,CACjB,AACD,aACI,cAAe,AACf,mBAAoB,AACpB,aAAc,AACd,WAAY,AACZ,gBAAiB,AACjB,gBAAiB,AACjB,eAAiB,CACpB,AACD,QACI,gBAAiB,AACjB,gBAAiB,AACjB,UAAY,CACf,AACD,WACI,gBAAkB,CACrB,AACD,WACI,gBAAkB,CACrB,AACD,mBACI,cAAe,AACf,WAAY,AACZ,8BAA+B,AAC/B,kBAAmB,AACnB,aAAc,AACd,iBAAmB,CACtB,AACD,cACI,eAAgB,AAChB,kBAAoB,CACvB,AACD,oCACI,SACI,QAAU,CACb,CACJ",file:"mark.vue",sourcesContent:["\n.ex-mark-text {\n    display: none;\n}\n.marked code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n}\n.marked blockquote {\n    font-size: 90%;\n    color: #999;\n    border-left: 4px solid #e9e9e9;\n    padding-left: .8em;\n    margin: 1em 0;\n    font-style: italic;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n"],sourceRoot:"webpack://"}])},5:/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/extract-text-webpack-plugin/loader.js?{"omit":1,"extract":true,"remove":true}!./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/views/mark.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************/
function(e,n,t){var a=t(4);"string"==typeof a&&(a=[[e.id,a,""]]),t(10)(a,{}),a.locals&&(e.exports=a.locals)},6:/*!******************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/views/mark.vue ***!
  \******************************************************************************************************/
function(e,n){e.exports="<div class=marked> <div> {{{mark}}} </div> <slot></slot> </div>"},7:/*!*****************************!*\
  !*** ./docs/views/mark.vue ***!
  \*****************************/
function(e,n,t){var a,o;t(5),a=t(3),o=t(6),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},302:/*!*******************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/views/form/table.vue ***!
  \*******************************************************************************************************************************************************************/
function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(2),o=t(8);n["default"]={data:function(){var e=this;return{TableData:{options:{select:!0,state:!0},columns:[{index:0,key:"id",value:"ID",sort:{state:!1,func:function(n,t){e.sortBy(t)}}},{index:1,key:"name",value:"姓名"},{index:2,key:"age",value:"年龄",sort:{state:!1,func:function(n,t){e.sortBy(t)}}},{index:3,key:"wechat",value:"微信"}],actions:[{type:"button",text:"删除",func:function(n,t){console.log(t),e.removeTableItem(t)}}],tableData:[{id:1,name:"王尼玛",age:"33",wechat:"wangnima",state:{type:"success",value:"批准"},checkbox:{disabled:!1,checked:!1,text:""}},{id:2,name:"赵铁柱",age:"26",wechat:"Iron-column-zhao",state:{type:"info",value:"待审"},checkbox:{disabled:!1,checked:!1,text:""}},{id:3,name:"张全蛋",age:"27",wechat:"Michael Jack",state:{type:"failed",value:"拒绝"},checkbox:{disabled:!1,checked:!1,text:""}}]}}},components:{rdTable:o.rdTable,Mark:a.Mark},ready:function(){this.loop()},methods:{loop:function(){var e=this;setInterval(function(){e.TableData.tableData.map(function(e){e.age++,e.age>80&&(e.age=0)})},1e3)},removeTableItem:function(e){var n=this;this.TableData.tableData.forEach(function(t){t.id===e.id&&n.TableData.tableData.$remove(t)}),this.$Notification.success("删除"+e.name.value+"成功","",3e3)},sortBy:function(e){"age"===e.key&&(e.sort.state?(this.TableData.tableData=this.TableData.tableData.sort(function(e,n){return Math.floor(e.age)-Math.floor(n.age)}),e.sort.state=!1):(this.TableData.tableData=this.TableData.tableData.sort(function(e,n){return Math.floor(n.age)-Math.floor(e.age)}),e.sort.state=!0)),"id"===e.key&&(e.sort.state?(this.TableData.tableData=this.TableData.tableData.sort(function(e,n){return Math.floor(e.id)-Math.floor(n.id)}),e.sort.state=!1):(this.TableData.tableData=this.TableData.tableData.sort(function(e,n){return Math.floor(n.id)-Math.floor(e.id)}),e.sort.state=!0))}}}},535:/*!************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/views/form/table.vue ***!
  \************************************************************************************************************/
function(e,n){e.exports="<div class=ex-content> <div class=ex-card> <mark> <textarea class=ex-mark-text>\n# Table 表格\n展示行列数据，点击空白处可编辑/保存。\n        </textarea> </mark> <p> <rd-table :table=TableData></rd-table> </p> <mark> <textarea class=ex-mark-text>\n## API\n```\n<rd-table :table=TableData></rd-table>\n```\n```\nTableData: {\n    // 基础设置 \n    options: {\n        // 是否展示选择 :Boolean\n        select: true\n        // 内容是否可编辑 :Boolean\n        editable: true\n    },\n    // 列描述数据对象\n    columns: [{\n        // 可通过index自定义列的排序\n        index: 1,\n        // 定义列的key值，应唯一且与数据key值匹配\n        key: 'name',\n        // 展示列名\n        value: '姓名'\n    }, {\n        index: 1,\n        key: 'name',\n        value: '姓名'\n    }, {\n        index: 2,\n        key: 'age',\n        value: '年龄',\n        sort: {\n            state: false,\n            func: (e, col) => {\n                this.sortBy(col)\n            }\n        }\n    }, {\n        index: 3,\n        key: 'wechat',\n        value: '微信'\n    }],\n    // 行操作对象:Array\n    actions: [{\n        type: 'button',\n        text: '删除',\n        func: (e, row) => {\n            console.log(row)\n            this.removeTableItem(row)\n        }\n    }],\n    // 展示数据 :Array\n    tableData: [{\n        // 行列对象属性\n        id: {\n            // 值\n            value: 1,\n            // 值的类型（支持input标签type属性中的所有类型），默认为text\n            type: 'number',\n            // 此字段是否可编辑，默认为true（只有当前字段的editable与全局options中的editable均为true时才可编辑）\n            editable: false\n        },\n        name: {\n            value: '王尼玛',\n            type: 'text',\n            editable: true\n        },\n        age: {\n            value: '26',\n            type: 'number',\n            editable: true\n        },\n        wechat: {\n            value: 'wangnima',\n            type: 'text',\n            editable: true\n        },\n\n        // 添加后可启用当前列的状态标签，可选类型请参考Button文档\n        state: {\n            type: 'success',\n            value: '批准'\n        },\n\n        // 开启选择时应该有checkbox属性\n        checkbox: {\n            disabled: false,\n            checked: false,\n            text: ''\n        }\n    }\n    ...\n}\n```\n        </textarea> </mark> <mark> <textarea class=ex-mark-text>\n\n\n## 代码\n```javascript\nexport default {\n    template: '<rd-table :table=TableData></rd-table>',\n    data () {\n        return {\n            TableData: {\n                options: {\n                    select: true,\n                    state: true\n                },\n                columns: [{\n                    index: 0,\n                    key: 'id',\n                    value: 'ID',\n                    sort: {\n                        state: false,\n                        func: (e, col) => {\n                            this.sortBy(col)\n                        }\n                    }\n                }, {\n                    index: 1,\n                    key: 'name',\n                    value: '姓名'\n                }, {\n                    index: 2,\n                    key: 'age',\n                    value: '年龄',\n                    sort: {\n                        state: false,\n                        func: (e, col) => {\n                            this.sortBy(col)\n                        }\n                    }\n                }, {\n                    index: 3,\n                    key: 'wechat',\n                    value: '微信'\n                }],\n                actions: [{\n                    type: 'button',\n                    text: '删除',\n                    func: (e, row) => {\n                        console.log(row)\n                        this.removeTableItem(row)\n                    }\n                }],\n                tableData: [{\n                    id: 1,\n                    name: '王尼玛',\n                    age: '33',\n                    wechat: 'wangnima',\n                    state: {\n                        type: 'success',\n                        value: '批准'\n                    },\n                    checkbox: {\n                        disabled: false,\n                        checked: false,\n                        text: ''\n                    }\n                }, {\n                    id: 2,\n                    name: '赵铁柱',\n                    age: '26',\n                    wechat: 'Iron-column-zhao',\n                    state: {\n                        type: 'info',\n                        value: '待审'\n                    },\n                    checkbox: {\n                        disabled: false,\n                        checked: false,\n                        text: ''\n                    }\n                }, {\n                    id: 3,\n                    name: '张全蛋',\n                    age: '27',\n                    wechat: 'Michael Jack',\n                    state: {\n                        type: 'failed',\n                        value: '拒绝'\n                    },\n                    checkbox: {\n                        disabled: false,\n                        checked: false,\n                        text: ''\n                    }\n                }]\n            }\n        }\n    },\n    components: {\n        rdTable,\n        mark\n    },\n    methods: {\n        removeTableItem (row) {\n            this.TableData.tableData.forEach(item => {\n                if (item.id === row.id) {\n                    this.TableData.tableData.$remove(item)\n                }\n            })\n            this.$Notification.success('删除' + row.name.value + '成功', '', 5000)\n        }\n    }\n}\n```\n\n        </textarea> </mark> </div> </div>"},564:/*!***********************************!*\
  !*** ./docs/views/form/table.vue ***!
  \***********************************/
function(e,n,t){var a,o;a=t(302),o=t(535),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)}});