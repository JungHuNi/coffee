
/**
	Page coffee menu loader function
*/
function load(type, path, brCount) {
	const PIC_RESOURCE_PATH = path + "resource/" + type + "/";
	let len = arguments.length;

	if(len < 4) return;

	let bc = 1;
	for(let i = 3; i < len; i++, bc++) {
		let path = PIC_RESOURCE_PATH + arguments[i];

		createImgbox(path, 'no-repeat', 'center', true);
		
		if(bc >= 3 && bc % 3 == 0) {
			console.log(bc);
			br(document.getElementsByClassName('wrapper')[0]);
		}
	}
}

/**
	@return div img box element
*/
function createImgbox(picPath, repeat, location, isBodyAdd) {
	const TAG_CLASS_NAME = "img-print";
	let parent = document.getElementsByClassName('wrapper')[0];
	let tag = document.createElement('div');

	tag.setAttribute('class', TAG_CLASS_NAME);
	tag.style.backgroundImage = "url('" + picPath + "')";

	if(isBodyAdd) {
		parent.appendChild(tag);
	}

	return tag;
}

function br(parent) {
	parent.appendChild(document.createElement("br"))
}

function getPathName() {
	var pathArr = window.location.pathname.split('/');
	var resultPath = '';
	let len = pathArr.length;

	for(let i = 0; i < len - 1; i++) {
		resultPath += (pathArr[i] + "/");
	}

	return resultPath;
}

