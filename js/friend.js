var friend = document.getElementById('friend');
var lovers=document.getElementById('lovers');
	friend.onclick = function() {
		lovers.style.display="none";
		document.getElementById('merrywrap').style.display="none";
		document.getElementById('center_friend').style.display="block";
	}
	lovers.onclick = function() {
		friend.style.display="none";
		document.getElementById('merrywrap').style.display="none";
		document.getElementById('center_lovers').style.display="block";
	}
