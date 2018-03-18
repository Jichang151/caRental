/**
 * Created by 1 on 2018/3/17.
 */
(function(){
    var oContent = document.getElementById("content");
    var oUserName = oContent.getElementById("username");
    var oSubmit = oContent.getElementById('submit');
    oSubmit.onclick = function(){
        if(oUserName.value = '' ){
            alert('用户名不能为空');
        }else{
            alert('asd');
        }

    };
});