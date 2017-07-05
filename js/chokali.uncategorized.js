/**
 * Created by chocolate on 2015/10/22.
 */
chokali.uncategorize = (function (chokali) {

	var me = {
		showAllType:function(){
			var list = [
				{},[],"",undefined,null,window,document,function(){}
			];
			console.log("=============prototype and typeof=================");
			console.log("==>{} ==>" +Object.prototype.toString.call({})+" ==>" +typeof {});
			console.log("==>Ext.panel.Panel ==>" +Object.prototype.toString.call(Ext.panel.Panel)+" ==>" +typeof Ext.panel.Panel);
			console.log("==>[] ==>" +Object.prototype.toString.call([])+" ==>" +typeof []);
			console.log("==>Number ==>" +Object.prototype.toString.call(Number)+" ==>" +typeof Number);
			console.log("==>0 ==>" +Object.prototype.toString.call(0)+" ==>" +typeof 0);
			console.log("==>123 ==>" +Object.prototype.toString.call(123)+" ==>" +typeof 123);
			console.log("==>Boolean ==>" +Object.prototype.toString.call(Boolean)+" ==>" +typeof Boolean);
			console.log("==>true ==>" +Object.prototype.toString.call(true)+" ==>" +typeof true);
			console.log("==>false ==>" +Object.prototype.toString.call(false)+" ==>" +typeof false);
			console.log("==>\"\" ==>" +Object.prototype.toString.call("")+" ==>" +typeof "");
			console.log("==>\'\' ==>" +Object.prototype.toString.call('')+" ==>" +typeof '');
			console.log("==>null ==>" +Object.prototype.toString.call(null)+" ==>" +typeof null);
			console.log("==>undefined ==>" +Object.prototype.toString.call(undefined)+" ==>" +typeof undefined);
			console.log("==>NaN ==>" +Object.prototype.toString.call(NaN)+" ==>" +typeof NaN);
			console.log("==>window ==>" +Object.prototype.toString.call(window)+" ==>" +typeof window);
			console.log("==>document ==>" +Object.prototype.toString.call(document)+" ==>" +typeof document);
			console.log("==>function(){} ==>" +Object.prototype.toString.call(function(){})+" ==>" +typeof function(){});
			//console.log("==>class A{} ==>" +Object.prototype.toString.call(class A{})+" ==>" +typeof class A{}); // IE 11 不支援
			//console.log("==>new class A{} ==>" +Object.prototype.toString.call(new class A{})+" ==>" +typeof new class A{}); // IE 11 不支援
			console.log("==>document.all ==>" +Object.prototype.toString.call(document.all)+" ==>" +typeof document.all);
			console.log("==>RegExp ==>" +Object.prototype.toString.call(RegExp)+" ==>" +typeof RegExp);
			console.log("==>new RegExp ==>" +Object.prototype.toString.call(new RegExp)+" ==>" +typeof new RegExp);
			console.log("==>new RegExp() ==>" +Object.prototype.toString.call(new RegExp())+" ==>" +typeof new RegExp());
			// /s/  ===>   function : Chrome 1-12 Non-conform to ECMAScript 5.1   , object : // Firefox 5+  Conform to ECMAScript 5.1
			console.log("==>/s/ ==>" +Object.prototype.toString.call(/s/)+" ==>" +typeof /s/);
			console.log("==>Date ==>" +Object.prototype.toString.call(Date)+" ==>" +typeof Date);
			console.log("==>new Date ==>" +Object.prototype.toString.call(new Date)+" ==>" +typeof new Date);
			console.log("==>new Date() ==>" +Object.prototype.toString.call(new Date())+" ==>" +typeof new Date());

		},
		regGetHostName: function (str) {
			return new RegExp('^https?://.+?/').exec(str);
		},
		showScreen: function (showExt) {
			console.log("网页可见区域宽 document.body.clientWidth ：" + document.body.clientWidth);
			console.log("网页可见区域高 document.body.clientHeight ：" + document.body.clientHeight);
			console.log("网页可见区域宽 document.body.offsetWidth (包括边线的宽) ：" + document.body.offsetWidth);
			console.log("网页可见区域高 document.body.offsetHeight (包括边线的宽) ：" + document.body.offsetHeight);
			console.log("网页正文全文宽 document.body.scrollWidth ：" + document.body.scrollWidth);
			console.log("网页正文全文高 document.body.scrollHeight ：" + document.body.scrollHeight);
			console.log("网页被卷去的高 document.body.scrollTop ：" + document.body.scrollTop);
			console.log("网页被卷去的左 document.body.scrollLeft ：" + document.body.scrollLeft);
			console.log("网页正文部分上 window.screenTop ：" + window.screenTop);
			console.log("网页正文部分左 window.screenLeft ：" + window.screenLeft);
			console.log("屏幕分辨率的高 window.screen.height：" + window.screen.height);
			console.log("屏幕分辨率的宽 window.screen.width：" + window.screen.width);
			console.log("屏幕可用工作区高度 window.screen.availHeight：" + window.screen.availHeight);
			console.log("屏幕可用工作区宽度 window.screen.availWidth：" + window.screen.availWidth);
			if (showExt || false) {
				console.log(" Ext.getBody().getViewSize().width :" + Ext.getBody().getViewSize().width);
				console.log(" Ext.getBody().getViewSize().height :" + Ext.getBody().getViewSize().height);
				console.log(" Ext.fly(document).getScroll().top :" + Ext.fly(document).getScroll().top);
				console.log(" Ext.fly(document).getScroll().left :" + Ext.fly(document).getScroll().left);
				console.log(" Ext.lib.Dom.getViewportWidth() :" + Ext.lib.Dom.getViewportWidth());
				console.log(" Ext.lib.Dom.getViewportHeight() :" + Ext.lib.Dom.getViewportHeight());
			}
		}
	};
	return me;
})(chokali);
