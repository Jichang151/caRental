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
        console.log(aLiNav);
    })();
};