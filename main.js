//获取弹窗
var modal=document.getElementById('simpleModal');
//获取弹窗按钮
var modalBtn=document.getElementById('modalBtn');
//获取关闭弹窗按钮
var closeBtn=getElementsByClassName('closeBtn')[0];

//监听弹窗事件
listenEvent(modalBtn,"click",openModal);
//监听关闭事件
listenEvent(closeBtn,"click",closeModal);
//监听window关闭弹窗
listenEvent(document,"click",outsiteClick);

//弹窗事件
function openModal(){
	modal.style.display="block";
}
function closeModal(){
	modal.style.display="none";
}
function outsiteClick(e){
	//console.log(e.target || e.srcElement);
	//srcElemet是为了兼容IE 11以下低版本浏览器
	if((e.target || e.srcElement)== modal || e.srcElement.nodeName=="HTML"){
		modal.style.display="none";
	}
}
//为了兼容IE 9以下版本浏览器不支持getElementsByClassName方法，返回获取的节点数组
function getElementsByClassName(className, results) {
    results = results || [];
    // 判断浏览器是否支持 getElementsByClassName
    if(document.getElementsByClassName) {
        // 浏览器支持这个方法
        results.push.apply( results, document.getElementsByClassName(className));
    } else {
        // 浏览器不支持
        // 实现：通过类名来获取页面中的元素
        // 思路：
        // 1 通过标签名获取到所有的元素
        // 2 循环遍历获取到的所有元素，分别判断当前元素有没有指定的类

        // 1 获取到页面中所有的元素
        var nodes = document.getElementsByTagName("*");
        // 2 遍历
        for(var i = 0; i < nodes.length; i++) {
            var cNodes = nodes[i];
            // 2.1 判断当前元素是否包含 指定的类 className
            // 第一种方式：
            // 1 获取到当前元素的类名 className/getAttribute("class")
            // 2 将获取到的类名 以空格分割 产生一个数组
            //         ["c1", "c2", "c3"]
            // 3 用数组中的每一个元素分别跟className比较
            // 4 如果是符合要求的就放到 results 中
            var cNodeClsName = cNodes.className;
            var clsNames = cNodeClsName.split(" ");
            for(var j = 0; j < clsNames.length; j++) {
                if(clsNames[j] === className) {
                    results.push(cNodes);
                }
            }

        }
    }
    return results;
};

//为了兼容IE低版本浏览器方法判断
 function listenEvent(obj,ev,fn) {   //obj为要绑定事件的元素，ev为要绑定的事件，fn为绑定事件的函数
        if(obj.attachEvent)
        {
            obj.attachEvent("on" + ev,fn);
        }else
        {
            obj.addEventListener(ev,fn,false);
        }
}