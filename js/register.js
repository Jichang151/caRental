/**
 * Created by 1 on 2018/3/28.
 */



window.onload = function(){
    (function(){

        var oUser = document.getElementById('user');
        var oPw1 = document.getElementById('pw1');
        var oPw2 = document.getElementById('pw2');
        var oPhone = document.getElementById('phone');
        var oVerifyBt = document.getElementById('verifyBt');
        var oVerify = document.getElementById('verify');
        var oSubmit = document.getElementById('submit');
        var oReset = document.getElementById('reset');
        var oContent = document.getElementById('content');
        var aMsg = oContent.getElementsByClassName('msg');
        var aFieldset = aMsg[0].getElementsByTagName('fieldset');
        var aInput =  aFieldset[0].getElementsByTagName('input');

     //前台判断注册信息格式

      /*  for(var i=0;i<aInput.length;i++){
            aInput[i].onblur = function(){
                if(oUser.value.length>16||oUser.value.length<4){
                    alert('用户名必须为4~16位！');
                    return;
                }
                if(oPw1.value.length<6||oPw1.value.length>16){
                    alert('密码必须为6~16！');
                    return;
                }
                if(oPw2.value != oPw1.value){
                    alert('密码不一致');
                    return;
                }
                if(oPhone.value[0] != 1){
                    alert('手机号必须以1开头！');
                    return;
                }
                if(oPhone.value.length != 11){
                    alert('手机号必须为11位');
                    return;
                }
            }
        }*/
        var flag = false;
        //function format(){
        oUser.onblur = function(){
            if(oUser.value && oUser.value.length>16){
                alert('用户名必须小于16个字符！');
            }else{
                return 0
            }
        };
        oPw1.onblur = function(){
            if(oPw1.value && oPw1.value.length<6||oPw1.value.length>16){
                alert('密码必须为6~16个字符！');
                return 0
            }else{
                return 0
            }
        };
        oPw2.onblur = function(){
            if(oPw2.value && oPw2.value != oPw1.value){
                alert('密码不一致');

            }else{
                return 0
            }

        };

        oPhone.onblur = function(){
            if(oPhone.value && oPhone.value[0] != 1){
                alert('手机号必须以1开头！');
            }else if(oPhone.value && oPhone.value.length != 11){
                alert('手机号必须为11位');
            }else{
                return 0
            }
        };

        //}
        oReset.onclick = function(){
          for(var i=0;i<aInput.length;i++){
              aInput[i].value = '';
          }
        };





        //AJAX发送数据
        function setXMLHttpRequest(){
            var data = {
                username:oUser.value,
                password:oPw1.value,
                phone:oPhone.value,
                code:oVerify.value
            };

            var xhr = new XMLHttpRequest();
            xhr.open('POST','http://47.100.164.170:8080/RentCar/user/register');
            xhr.setRequestHeader('Content-type','application/json;charset=utf-8');
            xhr.send(JSON.stringify(data));
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                    var acceptData = xhr.responseText;
                    var jsonData = JSON.parse(acceptData);
                    if(jsonData.status == '000000'){
                        alert('注册成功!');
                        window.location.href = 'login.html';

                    }else{
                        alert(jsonData.message);
                    }
                }
            }
        }

        //format();
        oSubmit.onclick = function(){
            if(oUser.value.length<=16 && oPw1.value.length>=6 && oPw1.value.length<=16 && oPw2.value == oPw1.value && oPhone.value[0] == 1 && oPhone.value.length == 11){
                flag = true
            }
            for(var i=0;i<aInput.length;i++){
                if(aInput[i].value.length == 0){
                    alert('请把信息填写完整！');
                    break;
                }
                if(i==aInput.length-1){
                    if(flag){
                        setXMLHttpRequest();
                    }else{
                        alert('注册格式错误！')
                    }
                }
            }


        };
    })();
};