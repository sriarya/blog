function myFunction(){
var x = document.getElementById("myTopnav");
if(x.className === "navbar"){
	x.className  += "  responsive";
}
else{
	x.className = "navbar";
}
}


/*
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('cherries');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}*/

function Click(a) {
	modal[a].style.display = "block";
	modalImg[a].src = img[a].src;
}

function Close(b) {
	modal[b].style.display = "none";
}
var modal = document.getElementsByClassName("modal");
var modalImg = document.getElementsByClassName("modal-content");
var span = document.getElementsByClassName("close");
var img = document.getElementsByClassName("imgo");


img[0].onclick= function(){Click(0)};
span[0].onclick=function(){Close(0)};

img[1].onclick= function(){Click(1)};
span[1].onclick=function(){Close(1)};

img[2].onclick= function(){Click(2)};
span[2].onclick=function(){Close(2)};

img[3].onclick= function(){Click(3)};
span[3].onclick=function(){Close(3)};

img[4].onclick= function(){Click(4)};
span[4].onclick=function(){Close(4)};

img[5].onclick= function(){Click(5)};
span[5].onclick=function(){Close(5)};

img[6].onclick= function(){Click(6)};
span[6].onclick=function(){Close(6)};

img[7].onclick= function(){Click(7)};
span[7].onclick=function(){Close(7)};

img[8].onclick= function(){Click(8)};
span[8].onclick=function(){Close(8)};

img[9].onclick= function(){Click(9)};
span[9].onclick=function(){Close(9)};

img[10].onclick= function(){Click(10)};
span[10].onclick=function(){Close(10)};

img[11].onclick= function(){Click(11)};
span[11].onclick=function(){Close(11)};

img[12].onclick= function(){Click(12)};
span[12].onclick=function(){Close(12)};

img[13].onclick= function(){Click(13)};
span[13].onclick=function(){Close(13)};

img[14].onclick= function(){Click(14)};
span[14].onclick=function(){Close(14)};

img[15].onclick= function(){Click(15)};
span[15].onclick=function(){Close(15)};

img[16].onclick= function(){Click(16)};
span[16].onclick=function(){Close(16)};

img[17].onclick= function(){Click(17)};
span[17].onclick=function(){Close(17)};

img[18].onclick= function(){Click(18)};
span[18].onclick=function(){Close(18)};

