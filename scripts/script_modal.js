// Get the modal
var modal01 = document.getElementById("MODAL_lascertificaat_TIG");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img01 = document.getElementById("lascertificaat_TIG");
var modalImg01 = document.getElementById("img01");
var captionText01 = document.getElementById("caption01");
img01.onclick = function(){
  modal01.style.display = "block";
  modalImg01.src = this.src;
  captionText01.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span01 = document.getElementById("close01");

// When the user clicks on <span> (x), close the modal
span01.onclick = function() {
  modal01.style.display = "none";
}

// Get the modal
var modal02 = document.getElementById("MODAL_lascertificaat_MIG-MAG");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img02 = document.getElementById("lascertificaat_MIG-MAG");
var modalImg02 = document.getElementById("img02");
var captionText02 = document.getElementById("caption02");
img02.onclick = function(){
  modal02.style.display = "block";
  modalImg02.src = this.src;
  captionText02.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span02 = document.getElementById("close02");

// When the user clicks on <span> (x), close the modal
span02.onclick = function() {
  modal02.style.display = "none";
}

// Get the modal
var modal03 = document.getElementById("MODAL_lasdiploma_IWS");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img03 = document.getElementById("lasdiploma_IWS");
var modalImg03 = document.getElementById("img03");
var captionText03 = document.getElementById("caption03");
img03.onclick = function(){
  modal03.style.display = "block";
  modalImg03.src = this.src;
  captionText03.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span03 = document.getElementById("close03");

// When the user clicks on <span> (x), close the modal
span03.onclick = function() {
  modal03.style.display = "none";
}

// Get the modal
var modal04 = document.getElementById("MODAL_lasdiploma_IWI-S");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img04 = document.getElementById("lasdiploma_IWI-S");
var modalImg04 = document.getElementById("img04");
var captionText04 = document.getElementById("caption04");
img04.onclick = function(){
  modal04.style.display = "block";
  modalImg04.src = this.src;
  captionText04.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span04 = document.getElementById("close04");

// When the user clicks on <span> (x), close the modal
span04.onclick = function() {
  modal04.style.display = "none";
}
