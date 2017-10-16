function change(arr){
  　　for (var i=0; i<arr.length; i++){
      if(arr[i].isShadowed === "true"){
        prepare();
      }else if(arr[i].isShadowed === "true" && arr[i].isCurrentStatus === "true"){
        begin();
      }else{
        finish();
      }
　　}
}
function prepare(){
     var lt=document.getElementById("list");
     var strhtml = ''; 
      strhtml +='<div class="mod-tip tip-top">';
      strhtml +='<span class="triangle triangle1"></span>';
      strhtml +='<div class="container shadowed">草稿</div>';
      strhtml +='</div>';
      strhtml +='<br>';
      return lt.innerHTML=strhtml;
};
function begin(){
      var lt=document.getElementById("list");
      var strhtml = ''; 
      strhtml +='<div class="mod-tip tip-top">';
      strhtml +='<span class="triangle_pre"></span>';
      strhtml +='<div class="container currentstatus">待审核</div>';
      strhtml +='</div>';
      strhtml +='<br>';
      return lt.innerHTML=strhtml;
};
function finish(){
      var fl=document.getElementById("flow");
      var strhtml = ''; 
      strhtml +='<div class="mod-tip end">';
      strhtml +='<div class="container">已终止</div>';
      strhtml +='</div>';
      strhtml +='<br>';
      return fl.innerHTML=strhtml;
};