<%@ page language="java" import="java.util.*"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="com.sjxd.gconfs.util.UtilLinux"%>
<%@page import="com.sjxd.gconfs.util.Util"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>sysinfo</title>
<link rel="shortcut icon" href="../../img/webicon.ico"
	type="image/x-icon" />

<link href="../../css/common/bootstrap.min.css" rel="stylesheet">
<link href="../../css/common/bootstrap-table.min.css" rel="stylesheet">
<link href="../../css/style.css" rel="stylesheet" />
<link href="../../css/main.css" rel="stylesheet" />
<style type="text/css">
body {
	font-size: 14px;
}

.name {
	width: 95px;
	text-align: left;
}

.value {
	max-width: 260px;
}

.btn {
	padding: 6px;
	background-color: #f0ad4e;
}

.ele {
	margin-bottom: 4px;
	display: inline-block;
}

.list {
	min-width: 800px;
}

}
.btn-group, .commonele {
	width: 275px;
	float: left;
}

.dropdown-menu, .panel-body, .list-group-item {
	width: 384px;
	padding: 0px;
}

.label {
	font-size: 14px;
	font: 100%;
}

.tab {
	min-width: 1100px;
	display: block;
}

.panel-collapse {
	margin-top: 8px;
}
</style>
<style type="text/css">
.mops-table .nav {
	position: relative;
	bottom: 0px;
	right: 0px;
	padding-bottom: 0px;
	width: -webkit-fill-available;
}

.nav a, .nav a:link {
	margin-right: auto;
}

.tab-content>.active {
	margin-top: 5px;
}

.jumbotron {
	padding-top: 0px;
	padding: 4px;
}

.jumbotronlist {
	padding: 4px;
	display: inline-block;
	width: 25%;
	min-width: 240px;
	float: left;
}

.jumbotronlistCPU {
	padding: 4px;
	display: inline-block;
}

.dropdown-menu {
	min-width: auto;
	z-index: auto;
}

.mindiv, .list-group-item {
	width: 25%;
	max-width: 100%;
	min-width: 240px;
}

#bs-example-navbar-collapse-1, #bs-example-navbar-collapse-2,
	.mops-table .container-fluid {
	padding-right: 0px!import;
	padding-left: 0px;
}

.list-group-item {
	width: 100%;
}

.list-group-item span {
	width: 100%;
	z-index: 1000;
}

.detail-div {
	min-height: 440px;
	background-color: #eaeee3;
	padding: 4px 0 4px 6px;
	margin: 0 2px 4px 2px;
	display: inline-block;
}

.container-fluid, .navbar-collapse {
	padding-right: 0;
}

.input-group .form-control {
	display: inline;
}

.row {
	padding: 0;
	margin: auto;
}

.input-group {
	width: 100%;
	min-width: 240px;
}
</style>
</head>
<body>
	<span id="data" style="display: none"><%=Util.convJSONObject(UtilLinux.getLinuxSysInfo())%></span>
	<!-- 引入页头 -->
	<script type="text/javascript" src="../../js/common/header.js"></script>
	<div class="mops-con">
		<div class="con-nav">
			<a href="log.jsp">系统信息</a>
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
						<a href="log.jsp"><li>实时日志</li></a>
						<a href="sysinfo.jsp"><li class="menuAct">系统信息</li></a>
					</ul>
				</div>
			</div>
			<div id="contentBody" class="mops-table" style="max-width: 1180px;">
				<!-- Nav tabs -->
				<ul class="nav nav-tabs " role="tablist">
					<li role="presentation" class="active"><a href="#Info_div"
						aria-controls="home" role="tab" data-toggle="tab"
						onclick="InfoData();">Info</a></li>
					<li role="presentation"><a href="#CPU_div"
						aria-controls="profile" role="tab" data-toggle="tab"
						onclick="CPUData();">CPU</a></li>
					<li role="presentation"><a href="#User_div"
						aria-controls="messages" role="tab" data-toggle="tab"
						onclick="UserData();">User</a></li>
					<li role="presentation"><a href="#Net_div"
						aria-controls="settings" role="tab" data-toggle="tab"
						onclick="NetData();">Net</a></li>
					<li role="presentation"><a href="#FS_div"
						aria-controls="settings" role="tab" data-toggle="tab"
						onclick="FSData();">FileSystem</a></li>
				</ul>
				<!-- Tab panes -->
				<div class="tab-content jumbotron">
					<div role="tabpanel" class="tab-pane active" id="Info_div">
						<div>
							<ul class="nav nav-pills nav-justified">
								<nav class="navbar navbar-default">
									<div class="container-fluid">
										<div class="collapse navbar-collapse"
											id="bs-example-navbar-collapse-1">
											<ul class="nav navbar-nav list-group">
												<li class="mindiv"><a href="#" class="list-group-item "
													onclick="return false">Os</a>
													<div id="Os" class="detail-div"></div></li>
												<li class="mindiv"><a href="#" class="list-group-item "
													onclick="return false">Swap</a>
													<div id="Swap" class=" detail-div"></div></li>
												<li class="mindiv"><a href="#" class="list-group-item "
													onclick="return false">Mem</a>
													<div id="Mem" class=" detail-div"></div></li>
												<li class="mindiv"><a href="#" class="list-group-item "
													onclick="return false">CPULength</a>
													<div id="CPULength" class=" detail-div"></div></li>
											</ul>
										</div>
									</div>
								</nav>
							</ul>
						</div>
					</div>
					<div role="tabpanel" class="tab-pane" id="CPU_div">
						<div>
							<ul class="nav nav-pills nav-justified">
								<nav class="navbar navbar-default">
									<div class="container-fluid">
										<div class="collapse navbar-collapse"
											id="bs-example-navbar-collapse-2">
											<ul class="nav navbar-nav list-group">
												<li class="mindiv"><a href="#" class="list-group-item "
													onclick="return false">CPU</a>
													<div id="CPU" class=" detail-div"></div></li>
												<li class="mindiv"><a href="#" class="list-group-item "
													onclick="return false">CPUList</a>
													<div id="CPUList" class=" detail-div"></div></li>
												<li class="mindiv"><a href="#" class="list-group-item "
													onclick="return false">CPULength</a>
													<div id="CPUCPULength" class=" detail-div"></div></li>
											</ul>
										</div>
									</div>
								</nav>
							</ul>
						</div>
					</div>
					<div role="tabpanel" class="tab-pane" id="User_div">
						<div>
							<ul class="nav nav-pills nav-justified">
								<nav class="navbar navbar-default">
									<div class="container-fluid">
										<div class="collapse navbar-collapse"
											id="bs-example-navbar-collapse-2">
											<ul class="nav navbar-nav list-group">
												<li><a href="#" class="list-group-item "
													onclick="return false">Who</a>
													<div id="Who" class=" detail-div"></div></li>
												<!-- <li><a href="#" class="list-group-item "
													onclick="return false">CPUList</a>
													<div id="CPUList" class=" detail-div"></div></li>
												<li><a href="#" class="list-group-item "
													onclick="return false">CPULength</a>
													<div id="CPUCPULength" class=" detail-div"></div></li> -->
											</ul>
										</div>
									</div>
								</nav>
							</ul>
						</div>
					</div>
					<div role="tabpanel" class="tab-pane" id="Net_div">
						<div>
							<ul class="nav nav-pills nav-justified">
								<nav class="navbar navbar-default">
									<div class="container-fluid">
										<div class="collapse navbar-collapse"
											id="bs-example-navbar-collapse-2">
											<ul class="nav navbar-nav list-group">
												<li><a href="#" class=" " onclick="return false">Net</a>
													<div id="Net" class=" detail-div"></div></li>
												<!-- <li><a href="#" class="list-group-item "
													onclick="return false">CPUList</a>
													<div id="CPUList" class=" detail-div"></div></li>
												<li><a href="#" class="list-group-item "
													onclick="return false">CPULength</a>
													<div id="CPUCPULength" class=" detail-div"></div></li> -->
											</ul>
										</div>
									</div>
								</nav>
							</ul>
						</div>
					</div>
					<div role="tabpanel" class="tab-pane" id="FS_div">
						<div>
							<ul class="nav nav-pills nav-justified">
								<nav class="navbar navbar-default">
									<div class="container-fluid">
										<div class="collapse navbar-collapse"
											id="bs-example-navbar-collapse-2">
											<ul class="nav navbar-nav list-group">
												<li><a href="#" class="list-group-item "
													onclick="return false">FileSystem</a>
													<div id="FS" class=" detail-div"></div></li>
												<!-- <li><a href="#" class="list-group-item "
													onclick="return false">CPUList</a>
													<div id="CPUList" class=" detail-div"></div></li>
												<li><a href="#" class="list-group-item "
													onclick="return false">CPULength</a>
													<div id="CPUCPULength" class=" detail-div"></div></li> -->
											</ul>
										</div>
									</div>
								</nav>
							</ul>
						</div>
					</div>
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
	var data = $.parseJSON($("#data").html());
	$(function() {
		InfoData();
	})
	function InfoData() {
		var cpuLength = getKeyValueData(data.CPU);
		var mem = getKeyValueData(data.Mem);
		var os = getKeyValueData(data.OS);
		var swap = getKeyValueData(data.Swap);
		$("#Swap").html(swap);
		$("#Os").html(os);
		$("#Mem").html(mem);
		$("#CPULength").html(cpuLength);
	}
	function CPUData() {
		var cpuLength = getKeyValueData(data.CPU);
		var cpu = getListKeyValueData(data.CPU.CPU, true);
		var cpuList = getListKeyValueData(data.CPU.CPUList, true);
		$("#CPUCPULength").html(cpuLength);
		$("#CPU").html(cpu);
		$("#CPUList").html(cpuList);
	}
	function UserData() {
		var who = getListKeyValueData(data.Who);
		$("#Who").html(who);
	}
	function NetData() {
		var ifc = getListKeyValueData(data.Net);
		$("#Net").html(ifc);
	}
	function FSData() {
		var fs = getListKeyValueData(data.FileSystem);
		$("#FS").html(fs);
	}
	function getKeyValueData(data) {
		var str = '<ul >';
		for ( var i in data) {
			if (i != 'CPUList' & i != 'CPU') {
				str += '<li><div class="row"><div class="input-group col-lg-16"><span class="input-group-btn"><button class="name btn btn-danger" type="button">'
						+ i
						+ '</button></span><input type="text" class="form-control" value="'
								+ data[i] + '"></div></div></li>';
			}
		}
		return str + '</ul>';
	}
	function getListKeyValueData(data, charge) {
		if (data && data.length) {
			var str = '<ul>';
			for (var s = 0; s < data.length; s++) {
				var x = data[s];
				if (!charge) {
					str += '<div class="jumbotronlist">';
				} else {
					str += '<div class="jumbotronlistCPU">';
				}
				for ( var i in x) {
					str += '<li><div class="row"><div class="input-group col-lg-6"><span class="input-group-btn"><button class="name btn btn-danger" type="button">'
							+ i
							+ '</button></span><input type="text" class="form-control" value="'
								+ x[i] + '"></div></div></li>';
				}
				str += '</div>';
			}
			return str + '</ul>';
		} else {
			return '<ul style="width: 1011px;"><div style="width: 1011px; text-align: center;"><button class="btn btn-danger jumbotron" style="text-align:center;" type="button">数据获取失败！</button></div></ul>';
		}
	}
</script>
</html>