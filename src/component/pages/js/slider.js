const slider = () => {
	if (document.querySelector(".left")) {
		document.querySelector(".left").onclick = () => {
			console.log("click");
		};
	} else {
		console.log("eeee");
	}
};
export default slider;
