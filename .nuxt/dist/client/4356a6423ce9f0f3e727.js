(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(t,e,n){"use strict";n.r(e);n(77),n(21),n(16),n(20),n(59);var r=n(49),o=(n(37),n(73)),c={namespaced:!0,state:function(){return{count:0,isLoading:!1}},mutations:{SET_COUNT:function(t,e){t.count=e},SET_LOADING:function(t,e){t.isLoading=e}},actions:{GET_COUNT:function(t){var e=t.state,n=t.commit;return!e.isLoading&&new Promise((function(t){n("SET_LOADING",!0),setTimeout((function(){var e=10*Math.random()>>0;n("SET_COUNT",e),n("SET_LOADING",!1),t(e)}),1500)}))}}};function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={asyncData:function(t){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:t.store;case 1:case"end":return e.stop()}}))},fetch:function(t){var e,n;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.app,n=t.store,e.$registerModule(n,{Counter:c}),r.next=4,regeneratorRuntime.awrap(n.dispatch("Counter/GET_COUNT"));case 4:case"end":return r.stop()}}))},beforeCreate:function(){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.$registerModule(this.$store,{Counter:c});case 1:case"end":return t.stop()}}),null,this)},beforeDestroy:function(){this.$unregisterModule(this.$store,["Counter"])},data:function(){return{title:"About"}},computed:{count:O({},Object(o.d)("Counter",{get:"count"}),{},Object(o.c)("Counter",{set:"SET_COUNT"}))},methods:O({},Object(o.b)("Counter",{getCount:"GET_COUNT"})),head:function(){return{title:this.title}}},v=n(5),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("About")]),t._v(" "),n("p",[t._v(t._s(t.$store.state.message))]),t._v(" "),t.$store.state.Counter?[t.$store.state.Counter.isLoading?n("div",[n("h2",[t._v("Loading...")])]):n("div",[n("h2",[t._v(t._s(t.count))]),t._v(" "),n("p",[n("button",{on:{click:function(e){t.count--}}},[t._v("-")]),t._v(" "),n("button",{on:{click:function(e){t.count++}}},[t._v("+")])]),t._v(" "),n("p",[n("button",{on:{click:t.getCount}},[t._v("Get Count")])])])]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports}}]);