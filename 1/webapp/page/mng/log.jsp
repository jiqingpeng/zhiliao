<%@ page language="java" import="java.util.*"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.io.FileReader"%>
<%@page import="java.io.BufferedReader"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	String logPath = "/opt/apache-tomcat-7.0.75/webapps/ROOT/logs/user_log.log";
	FileReader reader = new FileReader(logPath);
	BufferedReader bufferedReader = new BufferedReader(reader);
	StringBuffer txt = new StringBuffer();
	String temp = null;
	while ((temp = bufferedReader.readLine()) != null) {
		String[] newStr = String.valueOf(txt).split("<br>");
		if (newStr.length - 200 > 0) {
			txt = new StringBuffer(txt.substring(txt.indexOf("<br>") + 4));
			txt = new StringBuffer(txt.substring(txt.indexOf("<br>") + 4));
		}
		if (temp.contains("ip:") && temp.contains("url:")) {
			String date = "<span class='date'>" + temp.substring(0, 24) + "</span>&nbsp;&nbsp;";
			String ip = "<span class='ip'>&nbsp;&nbsp;</span>";
			String url = "";
			String param = "";
			int urlIndex = 0;
			int paramIndex = 0;
			if (temp.contains("ip:")) {
				if (temp.contains("visit url:")) {
					urlIndex = temp.indexOf("visit url:");
					url = "&nbsp;&nbsp;visit url:<span class='url'>" + temp.substring(urlIndex + 10)
							+ "</span>";
				} else {
					urlIndex = temp.indexOf("url:");
					paramIndex = temp.indexOf("param:");
					url = "&nbsp;&nbsp;url:<span class='url'>" + temp.substring(urlIndex + 4, paramIndex - 1)
							+ "</span>";
					param = "&nbsp;&nbsp;param:<span class='param'>" + temp.substring(paramIndex + 6)
							+ "</span>";
				}
				ip = "&nbsp;&nbsp;ip:<span class='ip'>" + temp.substring(temp.indexOf("ip:") + 3, urlIndex - 1)
						+ "</span>";
			}
			txt.append(date + temp.substring(24, temp.indexOf("ip:")) + ip + url + param + "<br>");
		} else {
			txt.append(temp + "<br>");
		}
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>log</title>
<link rel="shortcut icon" href="../../img/webicon.ico"
	type="image/x-icon" />
<link href="../../css/common/bootstrap.min.css" rel="stylesheet">
<link href="../../css/common/bootstrap-table.min.css" rel="stylesheet">
<link href="../../css/style.css" rel="stylesheet" />
<link href="../../css/main.css" rel="stylesheet" />
<style type="text/css">
.ip {
	color: red;
	font-weight: bold;
}

.url {
	color: blue;
	font-weight: bold;
}

.param {
	color: green;
	font-weight: bold;
}

.dropdown-menu {
	width: 384px;
	padding: 0px;
	min-width: auto;
	z-index: auto;
}
</style>
</head>
<body>
	<!-- 引入页头 -->
	<script type="text/javascript" src="../../js/common/header.js"></script>
	<div class="mops-con">
		<div class="con-nav">
			<a href="log.jsp">实时日志</a>
		</div>
		<!-- 内容部分导航头的class : con-nav (必须) -->
		<div class="con-box">
			<!-- 内容部分主体内容的class : con-box (必须) -->
			<!-- 以下为每个页面自己编写的部分 -->
			<div id="subMenu">
				<div id="subMenuBody" class="btn-group-vertical dropdown-menu"
					role="group">
					<ul>
						<a href="pcu.jsp"><li>在线用户列表</li></a>
						<a href="log.jsp"><li class="menuAct">实时日志</li></a>
						<a href="sysinfo.jsp"><li>系统信息</li></a>
					</ul>
				</div>
			</div>
			<div id="contentBody" class="mops-table" style="max-width: 1180px;">
				日志显示:
				<div id="log" style="height: 630px; overflow: auto;">
					<%=txt%>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="../../js/common/footer.js"></script>
</body>
<script src="../../js/jquery.min.js"></script>
<script src="../../js/bootstrap.min.js"></script>
<script src="../../js/bootstrap-table.min.js"></script>
<script src="../../js/bootstrap-table-zh-CN.min.js"></script>
<script src="../../js/common/common.js"></script>
<script src="../../js/common/main.js"></script>
<script type="text/javascript">
	$(function() {
		$("#log").scrollTop($("#log")[0].scrollHeight);
	})
</script>
</html>
