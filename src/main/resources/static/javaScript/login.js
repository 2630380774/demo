var yhm = document.getElementById("yhm");
var yhmm = document.getElementById("yhmm");
var yzm = document.getElementById("yzm");
var gly = document.getElementById("gly");
var glymm = document.getElementById("glymm");
var inputBox = document.getElementsByClassName("inputBox");
var dlText = document.getElementsByClassName("dlText");
var shurukuang = document.getElementsByClassName("shurukuang");

var shuruyanzhengma;
var shengchengyanzhengma;

// var divset=document.getElementsByClassName("el-upload-list");
//     	for (var i = 0; i<divset.length;i++) {
//     		   divset[i].style.display="block";
//     		 };

function yhmdl(){


    console.log("yhmdl");
    yhm.style.display="table";
    yhmm.style.display="table";
    //yzm.style.display="table";
    gly.style.display="none";
    glymm.style.display="none";

}

function glydl(){


    console.log("glydl");
    yhm.style.display="none";
    yhmm.style.display="none";
    //yzm.style.display="none";
    gly.style.display="table";
    glymm.style.display="table";

}

// for (var i = 0; i<dlText.length;i++) {
//     dlText[i].style.display="table-cell";
//      };
//      for (var i = 0; i<shurukuang.length;i++) {
//         shurukuang[i].style.display="table-cell";
//          };


//验证码

//生成随机数
function randomNum(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
//生成随机颜色RGB分量
function randomColor(min,max){
    var _r = randomNum(min,max);
    var _g = randomNum(min,max);
    var _b = randomNum(min,max);
    return "rgb("+_r+","+_g+","+_b+")";
}
//先阻止画布默认点击发生的行为再执行drawPic()方法
document.getElementById("canvas").onclick = function(e){
    e.preventDefault();
    scyzm();
};
function drawPic(){
    //获取到元素canvas
    var $canvas = document.getElementById("canvas");
    var _str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";//设置随机数库
    var _picTxt = "";//随机数
    var _num = 4;//4个随机数字
    var _width = $canvas.width;
    var _height = $canvas.height;
    var ctx = $canvas.getContext("2d");//获取 context 对象
    ctx.textBaseline = "bottom";//文字上下对齐方式--底部对齐
    ctx.fillStyle = randomColor(180,240);//填充画布颜色
    ctx.fillRect(0,0,_width,_height);//填充矩形--画画
    for(var i=0; i<_num; i++){
        var x = (_width-10)/_num*i+10;
        var y = randomNum(_height/2,_height);
        var deg = randomNum(-45,45);
        var txt = _str[randomNum(0,_str.length)];
        _picTxt += txt;//获取一个随机数
        ctx.fillStyle = randomColor(10,100);//填充随机颜色
        ctx.font = randomNum(16,40)+"px SimHei";//设置随机数大小，字体为SimHei
        ctx.translate(x,y);//将当前xy坐标作为原始坐标
        ctx.rotate(deg*Math.PI/180);//旋转随机角度
        ctx.fillText(txt, 0,0);//绘制填色的文本
        ctx.rotate(-deg*Math.PI/180);
        ctx.translate(-x,-y);
    }
    for(var i=0; i<_num; i++){
        //定义笔触颜色
        ctx.strokeStyle = randomColor(90,180);
        ctx.beginPath();
        //随机划线--4条路径
        ctx.moveTo(randomNum(0,_width), randomNum(0,_height));
        ctx.lineTo(randomNum(0,_width), randomNum(0,_height));
        ctx.stroke();
    }
    for(var i=0; i<_num*10; i++){
        ctx.fillStyle = randomColor(0,255);
        ctx.beginPath();
        //随机画原，填充颜色
        ctx.arc(randomNum(0,_width),randomNum(0,_height), 1, 0, 2*Math.PI);
        ctx.fill();
    }
    return _picTxt;//返回随机数字符串
}
scyzm();
//window.setInterval(aaa(),10000);

function scyzm(){
    shengchengyanzhengma=drawPic();
    //document.getElementById("shijiyanzhengma").innerHTML=shengchengyanzhengma;
}

function denglu(){
    shuruyanzhengma = document.getElementById("shuruyanzhengma").value;
    shuruyanzhengma1=shuruyanzhengma.toUpperCase();
    shengchengyanzhengma1=shengchengyanzhengma.toUpperCase();
    if(shengchengyanzhengma1 == shuruyanzhengma1){
        return true;
    }else{
        alert("验证码错误！")
        return false;
    }
}
