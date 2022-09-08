let like = document.getElementById("like")

function up(){
    like.innerHTML++;
}
function down(){
    if(like.innerHTML>0){
        like.innerHTML--;
    }
   
}
function reset(){
    like.innerHTML = 0;
}