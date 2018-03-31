/**
 * Created by 1 on 2018/3/17.
 */



    var oContent = document.getElementById("content");
    //console.log(oContent);
    var oUserName = document.getElementById("username");
    //console.log(oUserName);
    var oSubmit = document.getElementById('submit');
    //console.log(oSubmit);
    var oUser = document.getElementById('user');
    var oWord = document.getElementById('word');
    var oPassWord = document.getElementById('password');
    //console.log(oWord);
    var oSpan;
    var code;
    var oVerify = document.getElementById('verify');
    oSubmit.onclick = function(){


        if(oUserName.value.length != 11 ){
            if(oUser.children.length<=2){
                oSpan = document.createElement('b');
                oUser.appendChild(oSpan);
                oSpan.innerHTML = '用户名格式不对!';
            }
        }else {
            if(oUser.children[2]){
                oUser.removeChild(oUser.children[2]);
            }
            if(oPassWord.value.length <6){
                if(oWord.children.length<=2){
                    oSpan = document.createElement('b');
                    oWord.appendChild(oSpan);
                    oSpan.innerHTML = '密码格式错误!';

                }
            }else{
                if(oWord.children[2]){
                    oWord.removeChild(oWord.children[2]);
                }
                if(window.sessionStorage.erroTime>3){
                    createCode();
                    oVerify.style.display = 'block';

                    oSubmit.onclick=function(){
                        validate();
                    }
                }else {
                    getXMLHttpRequest();

                }

            }

            //console.log(oUser.children[2]);

        }

    };
    function createCode(){
        code = "";
        var codeLength = 4;//验证码的长度
        var checkCode = document.getElementById("code");
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
            'S','T','U','V','W','X','Y','Z');//随机数

        for(var i = 0; i < codeLength; i++) {//循环操作
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
            code += random[index];//根据索引取得随机数加到code上
        }
        checkCode.value = code;//把code值赋给验证码
    }


    function getXMLHttpRequest() {
        var data = {
            phone:oUserName.value,
            password:oPassWord.value
        };
        var xhr = new XMLHttpRequest();
        xhr.open('POST','http://47.100.164.170:8080/RentCar/user/login');
        //xhr.Header("Access-Control-Allow-Origin:*");//允许所有来源访问
        //xhr.addHeader("Access-Control-Allow-Method:POST,GET");//允许访问的方式
        xhr.setRequestHeader('Content-type','application/json;charset=UTF-8');

        xhr.send(JSON.stringify(data));
        xhr.onreadystatechange = function () {
            // 这步为判断服务器是否正确响应

            if (xhr.readyState == 4 && xhr.status == 200) {

                var j = xhr.responseText;
                //console.log(j);
                var a = JSON.parse(j);
                if(a.status != '000000'){
                    window.sessionStorage.erroTime++ ;
                    createCode();
                    alert(a.message);
                }else{

                    window.sessionStorage.userMsg = j;
                    window.sessionStorage.erroTime = 1;
                    window.location.href='index.html';
                }



            }
        }

    }




//校验验证码
        function validate(){
            var inputCode = document.getElementById("userVerify").value.toUpperCase(); //取得输入的验证码并转化为大写
            if(inputCode.length <= 0) { //若输入的验证码长度为0
                alert("请输入验证码！"); //则弹出请输入验证码
            }
            else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时
                alert("验证码输入错误！@_@"); //则弹出验证码输入错误
                createCode();//刷新验证码
                document.getElementById("userVerify").value = "";//清空文本框
            }
            else { //输入正确时
                //alert("^-^"); //弹出^-^
                getXMLHttpRequest();
            }
        }

    function bt(){
        var oCode = document.getElementById('code');
        var oBtVerify = document.getElementById('btVerify');
        oCode.onclick = function () {
            createCode();
        };
        oBtVerify.onclick = function(){
            validate();
        };
    }

    bt();


