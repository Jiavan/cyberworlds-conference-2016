function Ajax (options) {
	var xhr = new XMLHttpRequest();
	var defaultOptions = {
		url: null,
		type: 'get',
		data: null,
		complete: null;
	};
	var res = null;

	for (var i in defaultOptions) {
		if (options[i] === undefined) {
			options[i] = defaultOptions[i];
		}
	}

	if (options.type.toLowerCase() === 'post') {
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	}

	xhr.open(options.type, options.url, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && 
			(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) {
			res = xhr.responeText;

			if (window.JSON) {
				res = JSON.parse(res);
			} else {
				res = eval('(' + result + ')');
			}
		} else {
			res = xhr.status;
		}
		options.complete(res);
	}

	xhr.send(options.data ? options.data : null);
}

module.exports = Ajax;