(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{665:function(t,e,i){"use strict";i.r(e);i(92);var s=i(59),n=i(451),a={name:"SP",data:function(){return{svg:null,svgId:"vivus-"+this._uid}},props:{file:{type:String,default:""},height:{type:String,default:null},width:{type:String,default:"100%"},type:{type:String,default:"delayed"},duration:{type:String,default:"200"},start:{type:String,default:"inViewport"},onReady:{type:Function,default:function(t,e,i){e&&t.el.setAttribute("height",e),i&&t.el.setAttribute("width",i)}},callBack:{type:Function,default:function(){}},pathTiming:{type:String,default:"EASE"},animTiming:{type:String,default:null},dashGap:{type:Number,default:50},forceRender:{type:Boolean,default:!0},reverseStack:{type:Boolean,default:!1}},mounted:function(){this.initVueSvg()},methods:{Ready:function(t){this.onReady(t,this.height,this.width)},initVueSvg:function(t){var e,i,a;switch(this.pathTiming){case"EASE":i=n.EASE;break;case"EASE_IN":i=n.EASE_IN;break;case"EASE_OUT":i=n.EASE_OUT;break;case"EASE_OUT_BOUNCE":i=n.EASE_OUT_BOUNCE}switch(this.animTiming){case"EASE":a=n.EASE;break;case"EASE_IN":a=n.EASE_IN;break;case"EASE_OUT":a=n.EASE_OUT;break;case"EASE_OUT_BOUNCE":a=n.EASE_OUT_BOUNCE}this.svg=new n(this.svgId,(e={type:this.type,duration:this.duration,start:this.start,animTimingFunction:n.EASE,file:this.file,onReady:this.Ready,pathTimingFunction:i},Object(s.a)(e,"animTimingFunction",a),Object(s.a)(e,"dashGap",this.dashGap),Object(s.a)(e,"forceRender",this.forceRender),Object(s.a)(e,"reverseStack",this.reverseStack),e),this.callBack)},stop:function(){this.svg.stop()},reset:function(){this.svg.reset()},play:function(t,e){this.svg.play(t,e)},finish:function(){this.svg.finish()},setFrameProgress:function(t){this.svg.setFrameProgress(t)},getStatus:function(){this.svg.getStatus()},destroy:function(){this.svg.destroy()}},destroyed:function(){this.svg.destroy()}},r=i(3),u=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"svg-player",attrs:{id:this.svgId}})}),[],!1,null,null,null);e.default=u.exports}}]);