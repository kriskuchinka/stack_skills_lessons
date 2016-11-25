var contactField = document.getElementById("phone");

contactField.onfocus = function() {
	if ( contactField.value == "your Phone please") {
		contactField.value = "";
	}
};

contactField.onblur = function() {
	if ( contactField.value == "") {
		contactField.value = "your Phone please";
	}
};

