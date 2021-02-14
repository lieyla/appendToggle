
var color=["white" ,"black" , "blue" , "black"];
var i=0;
btn.addEventListener("click" , function(){
i=0 < color.length ? ++ i : 0;
 let num = document.querySelector("#num")
 num.style.backgroundColor=color[i]

});
var tryme=document.querySelector("#tryme");
tryme.addEventListener("click" ,function(){
    tryme.style.backgroundColor="black"
    tryme.innerHTML="its Changed"
tryme.style.color="snow"
tryme.style.fontSize="10px"
});