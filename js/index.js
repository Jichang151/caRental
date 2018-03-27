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

        var autoChange = setInterval(changeImg,3000);
        aPicture.onmouseover = function(){
            clearInterval(autoChange);
        };
        aPicture.onmouseout = function(){
            autoChange = setInterval(changeImg,3000);
        };


        for(var i=0;i<aConLi.length;i++){
            aConLi[i].index = i;
            aConLi[i].onmouseover = function(){
                clearInterval(autoChange);
                slideOff();
                current = this.index;
                slideOn();


            }
        }
    })();
};