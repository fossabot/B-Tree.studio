(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{659:function(t,e,a){"use strict";a.r(e);var n=a(481),o=a(482),i=a(479),s=a(483),r=a(380),h={name:"Layout",components:{Home:n.a,Page:i.a,Sidebar:s.a,Navbar:o.a},data:function(){return{isSidebarOpen:!1,loading:1,loadingInstance:null}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.f)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},beforeCreate:function(){},mounted:function(){var t=this;this.loading=0,this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},u=a(3),c=Object(u.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.loading?t._e():a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?t._e():a("div",{attrs:{id:"footer"}},[t._v("\n      MPL-2.0 Licensed | Copyright © "+t._s((new Date).getFullYear())+"\n      "),a("a",{attrs:{href:"https://github.com/PentaTea",target:"_blank"}},[t._v("PentaTea")]),t._v(" |\n      "),a("RouterLink",{attrs:{to:"/py-list/"}},[t._v("友人帐")]),t._v(" |\n      "),a("RouterLink",{attrs:{to:"/funcTest/"}},[t._v("funcTest")]),t._v(" |\n      "),a("i",{staticClass:"el-icon-view"}),t._v(" "),a("AccessNumber",{attrs:{flagTitle:t.$title}})],1)],1)])}),[],!1,null,null,null);e.default=c.exports}}]);