//第一部分轮播图
(function () {
    var lin_tp=document.getElementById("lin_one").getElementsByTagName("li");
    var lin_xb=document.getElementById("lin_yd").getElementsByTagName("li");
    var lin=document.getElementById("lin_one");
    var left=0;
    var lin_lbtleft=document.getElementById("J_lbtleft");
    var lin_lbtright=document.getElementById("J_lbtright");

//设置计时器
    var timer;
    lin.style.marginLeft=left+"px";
    run();
    function run() {
        if(left<=-4130){
            lin.style.marginLeft="0px";
            left=0;
        }
        //如果位置为整张图片，暂停
        var n=(left%590==0)?2000:5;
        changeimg();
        //计算图片的下标
        var m= Math.floor(-left/590);
        changeicon(m);
        left-=10;
        timer= setTimeout(run,n);
    }
//setInterval(run,10);计时器一直执行run（）
    function changeimg() {
        lin.style.marginLeft=left+"px";
    }
    function changeicon(m) {
        for(var i=0;i<lin_xb.length;i++){
            lin_xb[i].className="indicator-dot";
        }
        lin_xb[m].className=" indicator-dot cur";
    }
//绑定图片时间
    for(var i=0;i<lin_tp.length;i++){
        //闭包()(i)
        (function (i) {
            lin_tp[i].onmousemove=function() {
                clearTimeout(timer);
                left=-i*590;
                changeimg();
                changeicon(i);
            };
            lin_tp[i].onmouseout=function () {
                run();
            }
        })(i)
    }
    for(var i=0;i<lin_xb.length;i++){
        //闭包()(i)
        (function (i) {
            lin_xb[i].onmousemove=function() {
                clearTimeout(timer);
                left=-i*590;
                changeimg();
                changeicon(i);
            };
            lin_xb[i].onmouseout=function () {
                run();
            }
        })(i)
    }
//点击向左，图片进行跳动
    lin_lbtleft.onclick=function () {
        if(left>=0){
            left=-3540;
        }else{
            left=-(Math.floor(-left/590)-1)*590;
        }
        var i=Math.floor(-left/590);
        changeimg();
        changeicon(i);
    };
//点击向右，图片进行跳动
    lin_lbtright.onclick=function () {
        if(left<=-3540){
            left=0;
        }else{
            left=-(Math.floor(-left/590)+1)*590;
        }
        var i=Math.floor(-left/590);
        changeimg();
        changeicon(i);
    };

})();
//登录下面的红色横线
(function () {
    var J_hxyd=document.getElementById("J_hxyd");
    var J_cxiao=document.getElementById("J_cxiao");
    var J_ggao=document.getElementById("J_ggao");
    J_cxiao.onmouseover=function () {
        J_hxyd.style.left="0px";
    };
    J_ggao.onmouseover=function () {
        J_hxyd.style.left="55px";
    }
})();

//秒杀栏的轮播













