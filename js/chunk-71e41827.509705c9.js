(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e41827"],{"2ce4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"example"},[i("Info",{attrs:{item:t.example}}),i("div",{staticClass:"view"},[i("div",{ref:"view"}),i("div",{ref:"extra"})])],1)},r=[],s=(i("96cf"),i("3b8d")),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"t9n",rawName:"v-t9n.deep",modifiers:{deep:!0}}],staticClass:"info"},[i("router-link",{staticClass:"title",attrs:{to:t.item.key}},[[t._v(t._s(t.text.title))]],2),i("Card",{staticClass:"packages-card",attrs:{title:t.$t("Пакеты"),padding:0,shadow:""}},[i("CellGroup",t._l(t.item.packages,function(t){return i("Cell",{key:t,attrs:{title:t,to:"https://www.npmjs.com/package/"+t,target:"_blank"}},[i("img",{attrs:{slot:"extra",src:"https://img.shields.io/npm/v/"+t+".svg",alt:"npm version",height:"22"},slot:"extra"})])}),1)],1),i("p",[t._v(t._s(t.text.description))])],1)},o=[],c=i("e7b5"),l={props:{item:Object},computed:{text:function(){return Object(c["a"])(this.item.key)}}},u=l,d=(i("8e24"),i("2877")),p=Object(d["a"])(u,a,o,!1,null,"a059d7b4",null),f=p.exports,m={props:["example"],methods:{init:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$refs.view.innerHTML="",this.$refs.extra.innerHTML="",this.$refs.extra.className="",this.editor&&this.editor.destroy(),this.engine&&this.engine.destroy(),t.next=7,this.example.init(this.$refs.view,this.$refs.extra);case 7:e=t.sent,i=e.editor,n=e.engine,this.editor=i,this.engine=n;case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},data:function(){return{editor:null,engine:null}},mounted:function(){this.init()},updated:function(){this.init()},components:{Info:f}},h=m,v=(i("8f10"),Object(d["a"])(h,n,r,!1,null,"09516c3a",null));e["default"]=v.exports},"418b":function(t){t.exports={basic:{title:"Базовый",description:"Редактор должен включать в себя как минимум 4 пакета - главный Rete, и два плагина - для визуализации узлов и управления соединениями. В данном примере также имеется плагин для контекстного меню, которое позволяет добавлять узлы"},readonly:{title:"Неизменяемый",description:"Набор пакетов аналогичен предыдущему примеру за исключением следующего: установка контекстного меню не требуется, для блокировки действий по изменению узлов или связей служит rete-readonly-plugin"},area:{title:"Рабочая область",description:"По умолчанию редактор не ограничивает Вас ни в масштабировании, ни в перемещении по рабочей области. Плагин Area позволяет задать минимальное и максимальное значения масштаба. Перемещение огранчивается по высоте и ширине. Доступна возможность поместить выбранные узлы в поле видимости"},module:{title:"Модули",description:"Также представлен отдельный плагин для тех, кому необходимо строить схемы с разбиением логики на подмодули. Добавляйте новые модули в список и подключайте их, записав имя в поле ввода узла Module"},task:{title:"Задачи",description:"Данный плагин обрабатывает схему с целью ее дальнейшего выполнения подобно UE4 Blueprint, когда узлы выполняются после обработки по какому-либо вызову извне. В примере узел Mouse event реагирует на событие mousemove, узел Match проверяет, была ли нажата клавиша Ctrl и передает управление соответствующему узлу, который выводит уведомление"},customization:{title:"Кастомизация",description:"Плагин rete-vue-render, отвечающий за отображение узлов и контролов, позволяет использовать кастомные шаблоны и переопределить стили"},reroute:{title:"Перенаправление соединений",description:"Соединения обычно задаются кривой, которая проходит горизонтально слева направо. Это может повлиять на распоздаваемость этих соединений в случае их пересечения с узлами. Данный плагин позволяет задать ключевые точки, через которые будет проходить линия"},dock:{title:"Док меню",description:"Меню для быстрого доступа к добавляемым узлам. Перетащите псевдоузел в область или кликните на него, предварительно кликнув в области для указания позиции"},minimap:{title:"Мини карта",description:""}}},"8e24":function(t,e,i){"use strict";var n=i("9b48"),r=i.n(n);r.a},"8f10":function(t,e,i){"use strict";var n=i("8f3c"),r=i.n(n);r.a},"8f3c":function(t,e,i){},"9b48":function(t,e,i){},e7b5:function(t,e,i){"use strict";var n=i("418b");e["a"]=function(t){var e=n[t];if(!e)throw new Error("text for example not found");return e}}}]);