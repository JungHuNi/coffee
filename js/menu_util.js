
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