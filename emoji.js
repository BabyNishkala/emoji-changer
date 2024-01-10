const emojis=["😅","😊","🥰","🤭","😙","😼","😠","🤮","🤦","😎",];
const btn=document.getElementById('emoji');
btn.addEventListener('click',function(){
    btn.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
});