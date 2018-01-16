# 个人学习开发的弹出层 #
**具备以下特点：**<br /> 

1. 兼容IE 8<br /> 
2. 增加了弹出动画效果<br /> 
3. 为了事件绑定的兼容性增加了如下方法<br /> 
  

----------
     //为了兼容IE低版本浏览器方法判断
	 function listenevent(obj,ev,fn) {   //obj为要绑定事件的元素，ev为要绑定的事件，fn为绑定事件的函数
	        if(obj.attachevent)
	        {
	            obj.attachevent("on" + ev,fn);//IE 9+
	        }else
	        {
	            obj.addeventlistener(ev,fn,false);//IE 8
	        }
	  }
4. 为了事件绑定的兼容性增加了如下方法<br /> 
--------
    function outsiteClick(e){
		//console.log(e.target || e.srcElement);
		//srcElemet是为了兼容IE 11以下低版本浏览器,e.target是现在主流浏览器兼容的属性
		if((e.target || e.srcElement)== modal || e.srcElement.nodeName=="HTML"){
			modal.style.display="none";
		}
    }

  