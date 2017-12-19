var websocket;
function realTimeLog() {
	$("#realTimeLog").append("<br>开始尝试连接实时日志");
	setTimeout(2000);
	$("#realTimeLog").append(".");
	setTimeout(2000);
	$("#realTimeLog").append(".");
	setTimeout(2000);
	$("#realTimeLog").append(".");
	var host = window.location.host;
	if ('WebSocket' in window) {
		websocket = new ReconnectingWebSocket("ws://" + host
				+ "/webSocketIMServer", null, {
			debug : false,
			maxReconnectAttempts : 10
		});
	} else if ('MozWebSocket' in window) {
		websocket = new MozWebSocket("ws://" + host + "/webSocketIMServer");
	} else {
		websocket = new SockJS("http://" + host + "/sockjs/webSocketIMServer");
	}
	websocket.onopen = function(evnt) {
		setTimeout(1000);
		$("#realTimeLog").append("<br>连接成功！！！");
		setTimeout(3000);
	};
	websocket.onmessage = function(evnt) {
		var temp = utf8to16(base64decode(evnt.data));
		if (temp.indexOf("ip:") > -1 && temp.indexOf("url:") > -1) {
			var date = "<span class='date'>" + temp.substring(0, 23)
					+ "</span>&nbsp;";
			var ip = "";
			var url = "";
			var param = "";
			var urlIndex = 0;
			var paramIndex = 0;
			if (temp.indexOf("ip:") > -1) {
				if (temp.indexOf("visit url:") > -1) {
					urlIndex = temp.indexOf("visit url:");
					url = "&nbsp;&nbsp;visit url:<span class='url'>"
							+ temp.substring(urlIndex + 10) + "</span>";
				} else {
					urlIndex = temp.indexOf("url:");
					paramIndex = temp.indexOf("param:");
					url = "&nbsp;url:<span class='url'>"
							+ temp.substring(urlIndex + 4, paramIndex - 1)
							+ "</span>";
					param = "&nbsp;param:<span class='param'>"
							+ temp.substring(paramIndex + 5) + "</span>";
				}
				ip = "&nbsp;ip:<span class='ip'>"
						+ temp.substring(temp.indexOf("ip:") + 3, urlIndex - 1)
						+ "</span>";
			}
			$("#realTimeLog").prepend(
					"<div>"
							+ date
							+ "<span>"
							+ temp.substring(temp.indexOf("id:"), temp
									.indexOf("type:") + 6) + "</span>" + ip
							+ "<span>" + url + "</span><span>" + param
							+ "</span></div>");
		} else if (temp.indexOf("SysFilter") > -1
				&& temp.indexOf("not login,") > -1) {
			var date = "<span class='date'>" + temp.substring(0, 23)
					+ "</span>&nbsp;";
			var ip = "&nbsp;ip:<span class='ip'>"
					+ temp.substring(temp.indexOf("ip:") + 3, temp
							.indexOf("visit:") - 1) + "</span>";
			var url = "&nbsp;&nbsp;visit url:<span class='url'>"
					+ temp.substring(temp.indexOf("visit:") + 6, temp
							.indexOf("not login,")) + "</span>";
			$("#realTimeLog").prepend(
					"<div>" + date + "<span>" + ip + "</span>" + "<span>" + url
							+ "</span>not login, blocked</div>");
		} else {
			$("#realTimeLog").prepend("<div><span>" + temp + "</span></div>");
		}
	};
	websocket.onerror = function(evnt) {
		$("#realTimeLog").prepend("<br>连接错误");
	};
	websocket.onclose = function(evnt) {
		$("#realTimeLog").prepend("<br>连接关闭");
	}
}

function utf8to16(str) {
	var out, i, len, c;
	var char2, char3;
	out = "";
	len = str.length;
	i = 0;
	while (i < len) {
		c = str.charCodeAt(i++);
		switch (c >> 4) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
			out += str.charAt(i - 1);
			break;
		case 12:
		case 13:
			char2 = str.charCodeAt(i++);
			out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
			break;
		case 14:
			char2 = str.charCodeAt(i++);
			char3 = str.charCodeAt(i++);
			out += String.fromCharCode(((c & 0x0F) << 12)
					| ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
			break;
		}
	}
	return out;
}
function base64decode(str) {
	var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62,
			-1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1,
			-1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
			15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1,
			26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
			43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
	var c1, c2, c3, c4;
	var i, len, out;
	len = str.length;
	i = 0;
	out = "";
	while (i < len) {
		/* c1 */
		do {
			c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
		} while (i < len && c1 == -1);
		if (c1 == -1)
			break;
		/* c2 */
		do {
			c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
		} while (i < len && c2 == -1);
		if (c2 == -1)
			break;
		out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
		/* c3 */
		do {
			c3 = str.charCodeAt(i++) & 0xff;
			if (c3 == 61)
				return out;
			c3 = base64DecodeChars[c3];
		} while (i < len && c3 == -1);
		if (c3 == -1)
			break;
		out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
		/* c4 */
		do {
			c4 = str.charCodeAt(i++) & 0xff;
			if (c4 == 61)
				return out;
			c4 = base64DecodeChars[c4];
		} while (i < len && c4 == -1);
		if (c4 == -1)
			break;
		out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
	}
	return out;
}