/**
 * Created by 1 on 2018/3/17.
 */
(function(){
  /*  var oContent = document.getElementById("content");
    var oUserName = oContent.getElementById("username");
    var oSubmit = oContent.getElementById('submit');
    oSubmit.onclick = function(){
        if(oUserName.value = '' ){
            alert('�û�������Ϊ��');
        }else{
            alert('asd');
        }

    };*/


    function getXMLHttpRequest() {
        var data = {
            'phone':'����',
            'password':'123123'
        };
        var xhr = new XMLHttpRequest();
        xhr.open('POST','http://192.168.1.107:8080/user/login');
        xhr.setRequestHeader('Content-type','application/json;charset=UTF-8');
        xhr.send(data);
        xhr.onreadystatechange = function () {
            // �ⲽΪ�жϷ������Ƿ���ȷ��Ӧ
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        }

    }

    window.onload = function(){
        getXMLHttpRequest();
    }
});