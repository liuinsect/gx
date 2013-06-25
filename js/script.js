$(document).ready(function(){

	/* This code is executed on the document ready event */

	var sizes	= { retina: { width:180, height:180 }, webpage:{ width:329, height:536 } },
		mx 		= 3,	// 大图尺寸除以小图尺寸
		left	= 0,
		top		= 0,
		webpage	= $('#webpage'),
		retina	= $('#retina'),
		offset	= { left: webpage.offset().left, top: webpage.offset().top };
	
	webpage.mousemove(function(e){
		left = (e.pageX-offset.left);
		top = (e.pageY-offset.top);
		if(retina.is(':not(:animated):hidden')){
			/* Fixes a bug where the retina div is not shown */
			webpage.trigger('mouseenter');
		}

		if(left<0 || top<0 || left > sizes.webpage.width || top > sizes.webpage.height)
		{
			/*	If we are out of the bondaries of the
				webpage screenshot, hide the retina div */

			if(!retina.is(':animated')){
				webpage.trigger('mouseleave');
			}
			return false;
		}
		
		/*	Moving the retina div with the mouse
			(and scrolling the background) */

		retina.css({
			left				: left - sizes.retina.width/2,
			top					: top - sizes.retina.height/2,
			backgroundPosition	: '-'+(mx*left-sizes.retina.width/2)+'px -'+(mx*top-sizes.retina.height/2)+'px'
		});
		
		if (left>50 && left<95 && top>55 && top<75) {
			retina.html('<p>巡场镇 电话 : 4311086</p>');
		}
		else if (left>80 && left<125 && top>110 && top<130) {
			retina.html('<p>珙泉镇 电话 : 4321312</p>');
		}
		else if (left>147 && left<192 && top>390 && top<410) {
			retina.html('<p>洛表镇 电话 : 4410186</p>');
		}
		else if (left>25 && left<70 && top>185 && top<205) {
			retina.html('<p>孝儿镇 电话 : 4250055</p>');
		}
		else if (left>127 && left<168 && top>197 && top<217) {
			retina.html('<p>底洞镇 电话 : 4210060</p>');
		}
		else if (left>115 && left<160 && top>295 && top<315) {
			retina.html('<p>上罗镇 电话 : 4350115</p>');
		}
		else if (left>197 && left<237 && top>392 && top<412) {
			retina.html('<p>洛亥镇 电话 : 4460073</p>');
		}
		else if (left>167 && left<212 && top>470 && top<490) {
			retina.html('<p>王家镇 电话 : 4470003</p>');
		}
		else if (left>35 && left<80 && top>140 && top<160) {
			retina.html('<p>恒丰乡 电话 : 4257001</p>');
		}
		else if (left>75 && left<120 && top>188 && top<208) {
			retina.html('<p>仁义乡 电话 : 4256201</p>');
		}
		else if (left>30 && left<75 && top>270 && top<290) {
			retina.html('<p>沐滩乡 电话 : 4259003</p>');
		}
		else if (left>80 && left<125 && top>250 && top<270) {
			retina.html('<p>下罗乡 电话 : 4258001</p>');
		}
		else if (left>140 && left<185 && top>347 && top<367) {
			retina.html('<p>罗渡乡 电话 : 4359002</p>');
		}
		else if (left>205 && left<250 && top>342 && top<362) {
			retina.html('<p>曹营乡 电话 : 4488059</p>');
		}
		else if (left>247 && left<292 && top>347 && top<367) {
			retina.html('<p>石碑乡 电话 : 4480001</p>');
		}
		else if (left>140 && left<185 && top>240 && top<260) {
			retina.html('<p>玉和乡 电话 : 4219169</p>');
		}
		else if (left>242 && left<287 && top>402 && top<422) {
			retina.html('<p>观斗乡 电话 : 4469004</p>');
		}
		else {
			retina.html('');
		}
		
	}).mouseleave(function(){
		retina.stop(true,true).fadeOut('fast');
	}).mouseenter(function(){
		retina.stop(true,true).fadeIn('fast');
	});
});