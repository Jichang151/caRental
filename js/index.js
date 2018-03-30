/**
 * Created by 1 on 2018/3/25.
 */
window.onload = function(){
    (function(){
        var oHeader = document.getElementById('header');
        var aMainNav = oHeader.getElementsByClassName('main_navigation');
        var aCenterNav = aMainNav[0].getElementsByClassName('center_navigation');
        var aUlNav = aCenterNav[0].getElementsByTagName('ul');
        var aLiNav = aUlNav[0].getElementsByTagName('li');

        var oContent = document.getElementById('content');
        var aPicture = oContent.getElementsByClassName('picture');
        var aConImg = aPicture[0].getElementsByTagName('img');
        //console.log(aPicture);
        var aConUl = oContent.getElementsByClassName('row');
        //console.log(aConUl);
        var aConLi = aConUl[0].getElementsByTagName('li');
        //console.log(aConLi);
        var oLogin = document.getElementById('login');
        var oRegister = document.getElementById('register');
        var oPersonal = document.getElementById('personal');
        var current = 0;


        function slideOff(){
            aConImg[current].className = '';
            aConLi[current].className = '';
        }
        function slideOn(){
            aConImg[current].className = 'selected';
            aConLi[current].className = 'selected';
        }

        function changeImg(){
            slideOff();
            current++;
            if(current>=2){
                current = 0;
            }
            slideOn();
        }

        var autoChange = setInterval(changeImg,2500);
        for(i=0;i<aPicture.length;i++){
            aPicture[i].onmouseover = function(){
                clearInterval(autoChange);
            };
            aPicture[i].onmouseout = function(){
                autoChange = setInterval(changeImg,2500);
            };
        }



        for(var i=0;i<aConLi.length;i++){
            aConLi[i].index = i;
            aConLi[i].onmouseover = function(){
                clearInterval(autoChange);
                slideOff();
                current = this.index;
                slideOn();


            }
        }

        //var m = JSON.stringify(window.sessionStorage.userMsg);
        var j= JSON.parse(window.sessionStorage.userMsg);
        if(j.status == '000000'){

            oLogin.innerHTML = '退出登陆';
            oLogin.style.width = '100px';
            oRegister.style.display = 'none';
            oPersonal.style.display = 'block';
        }
        oLogin.onclick = function(){
            window.sessionStorage.clear();
                if(window.sessionStorage){
                    oLogin.href = 'index.html';
                    oLogin.innerHTML = '登陆';
                    oLogin.style.width = '70px';
                    oRegister.style.display = 'block';
                    oRegister.style.width = '70px';
                }



        };
      //console.log(localStorage.getItem('result'));
      //  console.log(j.message);
      //  console.log(j);
        //var s = window.localStorage;
        //console.log(s);
       /* var m = JSON.parse(s);
        //localStorage.
        console.log(m.message);*/
    })();
};