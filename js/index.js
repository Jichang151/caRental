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
        for(var i=0;i<aConLi.length;i++){
            aConLi[i].onmouseover = function(){
                for(var i=0;i<aConLi.length;i++){
                    aConLi[i].className = '';
                }
                this.className = 'selected';
            }
        }

        function changeImg(){

            //var aPicture = oContent.getElementsByClassName('picture');
            //console.log(aLiNav);

            for(var i=0;i<aConImg.length;i++){

            }

        }
    })();
};