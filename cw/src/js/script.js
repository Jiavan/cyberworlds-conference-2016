document.addEventListener('DOMContentLoaded', function (event) {
		var button = document.getElementById('submit');
		var form = document.forms[0], i = 0;
		button.onclick = function (event) {
			for (i = 0; i < form.length; i++) {
				if (form[i].type === 'text' && form[i].value.trim() === '') {
					form[i].focus();
					form[i].setAttribute('class', 'warning');
					return false;
				} else {

				}
			}
		}

		for (i = 0; i < form.length; i++) {
			if (form[i].type === 'text') {
				form[i].onblur = function (event) {
					event.target.setAttribute('class', '');
				}
			}
		}
	}, false);