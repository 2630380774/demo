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


//��֤��

//���������
function randomNum(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
//���������ɫRGB����
function randomColor(min,max){
    var _r = randomNum(min,max);
    var _g = randomNum(min,max);
    var _b = randomNum(min,max);
    return "rgb("+_r+","+_g+","+_b+")";
}
//����ֹ����Ĭ�ϵ����������Ϊ��ִ��drawPic()����
document.getElementById("canvas").onclick = function(e){
    e.preventDefault();
    scyzm();
};
function drawPic(){
    //��ȡ��Ԫ��canvas
    var $canvas = document.getElementById("canvas");
    var _str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";//�����������
    var _picTxt = "";//�����
    var _num = 4;//4���������
    var _width = $canvas.width;
    var _height = $canvas.height;
    var ctx = $canvas.getContext("2d");//��ȡ context ����
    ctx.textBaseline = "bottom";//�������¶��뷽ʽ--�ײ�����
    ctx.fillStyle = randomColor(180,240);//��仭����ɫ
    ctx.fillRect(0,0,_width,_height);//������--����
    for(var i=0; i<_num; i++){
        var x = (_width-10)/_num*i+10;
        var y = randomNum(_height/2,_height);
        var deg = randomNum(-45,45);
        var txt = _str[randomNum(0,_str.length)];
        _picTxt += txt;//��ȡһ�������
        ctx.fillStyle = randomColor(10,100);//��������ɫ
        ctx.font = randomNum(16,40)+"px SimHei";//�����������С������ΪSimHei
        ctx.translate(x,y);//����ǰxy������Ϊԭʼ����
        ctx.rotate(deg*Math.PI/180);//��ת����Ƕ�
        ctx.fillText(txt, 0,0);//������ɫ���ı�
        ctx.rotate(-deg*Math.PI/180);
        ctx.translate(-x,-y);
    }
    for(var i=0; i<_num; i++){
        //����ʴ���ɫ
        ctx.strokeStyle = randomColor(90,180);
        ctx.beginPath();
        //�������--4��·��
        ctx.moveTo(randomNum(0,_width), randomNum(0,_height));
        ctx.lineTo(randomNum(0,_width), randomNum(0,_height));
        ctx.stroke();
    }
    for(var i=0; i<_num*10; i++){
        ctx.fillStyle = randomColor(0,255);
        ctx.beginPath();
        //�����ԭ�������ɫ
        ctx.arc(randomNum(0,_width),randomNum(0,_height), 1, 0, 2*Math.PI);
        ctx.fill();
    }
    return _picTxt;//����������ַ���
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
        alert("��֤�����")
        return false;
    }
}
