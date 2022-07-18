var hamMenu = document.getElementById('hamMenu');
var allCont = document.getElementById('allC');
var myNav = document.getElementById('myNav');
var nav = document.getElementById('nav');
var cc = document.getElementById('cc');
var meetTheTeam = document.getElementById('meetTheTeam');


hamMenu.addEventListener('click', openNav)


function openNav() {
    myNav.style.display = 'block';
    document.getElementById("myNav").style.width = "100%";
    console.log('test test test')
    nav.style.visibility = 'hidden';
    allCont.style.filter = 'blur(0)';
    cc.style.visibility = 'hidden';
    allCont.style.visibility = 'hidden';
    meetTheTeam.style.visibility = 'hidden';



}

function closeNav() {
    myNav.style.display = 'none';
    nav.style.visibility = 'visible';
    cc.style.visibility = 'visible';
    allCont.style.visibility = 'visible';
    meetTheTeam.style.visibility = 'visible';


}

function openStore() {
    myNav.style.display = 'none';
    nav.style.visibility = 'visible';
    cc.style.visibility = 'visible';
    allCont.style.visibility = 'visible';
    meetTheTeam.style.visibility = 'visible';

}