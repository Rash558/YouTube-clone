var hamBurgerMenu=document.querySelector(".hamburger-menu")
var sidebar = document.querySelector(".sidebar")

hamBurgerMenu.onclick=function(){
  sidebar.classList.toggle("small-sidebar");
}



//const div=document.createElement('div')
//div.className="foo"
//div.classList.add("anotherclass")
//div.classList.remove("foo")
//div.classList.replace("anotherclass", "gotya")
//console.log(div)