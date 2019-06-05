
/**
	@param src 현재 페이지에서 이동할 페이지 경로
*/
function onChangeLocation(src) {
	window.location.href = src;
}



function loadImg(brCount) {
	const RESOURCE_PATH = "./resource/Coffe";
	let len = arguments.length;

	if(len < 2) return;

	for(let i = 1; i < len; i++) {
		let path = getPath(RESOURCE_PATH, fileName);
		console.log(path);
	} 
} 

function getPath(dirPath, fileName) {
	return dirPath + "/" + fileName;
} 



function openText(idMyDiv){
     let objDiv = document.getElementById(idMyDiv);
     //if(objDiv.style.display == "hidden"){ objDiv.style.visibility = "visible"; }
      //else if(objDiv.style.visibility == "visible"){ objDiv.style.visibility = "hidden"; }
     objDiv.style.visibility = "visible";
}

function closeText(idMyDiv){
	let objDiv = document.getElementById(idMyDiv);
	objDiv.style.visibility = "hidden";
}