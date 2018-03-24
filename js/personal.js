/**
 * Created by 1 on 2018/3/23.
 */

window.onload = function(){
    var oTab = document.getElementById('tab');
    var aTabUl = oTab.getElementsByTagName('ul');
    var aTabLi = aTabUl[0].getElementsByTagName('li');

    var oContent = document.getElementById('content');
    var oBasic = document.getElementById('basic');
    var aBasicDiv = oBasic.children;
    var aConDiv = oContent.children;

    var aConUl = aConDiv[0].getElementsByTagName('ul');
    var aConLi = aConUl[0].getElementsByTagName('li');
    for(var i = 0;i<aTabLi.length;i++){
        aConDiv[i].style.display = 'none';
        aConDiv[0].style.display = 'block';
        aTabLi[i].index = i;
        aTabLi[i].onclick = function(){
            for(var i=0;i<aTabLi.length;i++){
                aTabLi[i].className ='';
                aConDiv[i].style.display = 'none';
            }
            this.className = 'selected';
            aConDiv[this.index].style.display = 'block';
        };

    }

    for(var j=0;j<aConLi.length;j++){
        aBasicDiv[j].style.display = 'none';
        aBasicDiv[0].style.display = 'block';
        aConLi[j].index = j;
        aConLi[j].onclick = function(){
            for(var j=0;j<aConLi.length;j++){
                aConLi[j].className = '';
                aBasicDiv[j].style.display = 'none';
            }
            this.className = 'tab_selected';
            aBasicDiv[this.index].style.display = 'block';
        };
    }



};
