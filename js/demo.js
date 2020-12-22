/*尽量用到的变量提前声明*/
    /*获取小图  因为用的是同一个类选择器 所以默认是同一个集合 通过下标取元素*/
    var smallist=document.getElementsByClassName("small");
    /*设置默认小图的边框颜色*/
    smallist[0].style.borderColor="red";//js直接操作css行内样式
    //记录初始化小图的颜色框
    var beforcolor=null;
    beforcolor=smallist[0];//存到beforcolor中

    /*获取中图盒子位置*/
    var middlepar=document.getElementsByClassName("middle_img")[0];
    /*获取默认的中图*/
    var middle=document.getElementById("middle");

    var bg=document.getElementById("bgceng")
    var ceng=document.getElementById("ceng");
    var big=document.getElementsByClassName("par")[0];
    var bgceng=document.getElementById("bgceng")

    //循环遍历 获得小图
    for(var i=0; i<smallist.length;i++){
    //给遍历出的小图添加鼠标进入事件
    smallist[i].onmouseenter=function (){
    //让之前的图边框变回白色
    beforcolor.style.borderColor="white";
    //现在的图边框变为红色
    this.style.borderColor="red";
    //变完就把它替换上一个存到beforcolor中
    beforcolor=this;

    //中图要随着鼠标进入小图的不同而变化
    var middleinfo=this.getAttribute("data_middle");//获取中图自定义属性
            //中图的src位置发生变化
            middle.src=middleinfo;

            //大图也要随着鼠标进入小图的不同而变化
            var bginfo=this.getAttribute("data_bg");//获取自定义属性
            //因为bg是大图图层位置，所以要调用背景图片
            bg.style.backgroundImage="url('"+bginfo+"')";

    }
    }
    //给中图位置设置鼠标进入事件
    middlepar.onmouseenter=function (){
    //鼠标进入两个图层显示
    ceng.style.display="block";
    bgceng.style.display="block";
    }
    //给中图位置设置鼠标离开事件
    middlepar.onmouseleave=function (){
    //鼠标离开两个图层隐藏
    ceng.style.display="none";
    bgceng.style.display="none";
    }
    //添加鼠标移动事件 获取鼠标坐标 图层要跟着鼠标移动
    middlepar.onmousemove=function (e){
    //获取鼠标坐标
    var pagex=e.clientX||e.pageX;
    var pagey=e.clientY||e.pageY;
    //获取当前对象的左边偏移量和上边偏移量
    var left=big.offsetLeft;
    var top=big.offsetTop;
    //要鼠标在图层中间带着图层移动
    pagex=pagex-left-parseInt(ceng.style.width)/2;
    pagey=pagey-top-parseInt(ceng.style.height)/2;
    //卡边 根据图层左上角的坐标卡
    pagex=pagex<=0?0:pagex>=323-parseInt(ceng.style.width)?323-parseInt(ceng.style.width):pagex;
    pagey=pagey<=0?0:pagey>=430-parseInt(ceng.style.height)?430-parseInt(ceng.style.height):pagey;
    //把获得到的鼠标坐标给图层中心点
    ceng.style.left=pagex+"px";
    ceng.style.top=pagey+"px";

    //显示大图
    bgceng.style.backgroundPosition=(-pagex*2.32)+"px "+(-pagey*2.32)+"px";
    }

