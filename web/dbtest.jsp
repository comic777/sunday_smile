<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import = "java.io.*, java.sql.*, java.util.*, java.net.*" %>
<%
	String url="jdbc:mysql://203.237.178.19:3306/coffeedb?useUnicode=true&characterEncoding=utf-8";
	Class.forName("com.mysql.jdbc.Driver");
	Connection conn=DriverManager.getConnection(url,"coffeebnb","coffee4");
	Statement stmt=conn.createStatement();

	String SQL = "Select id, email from user";
	ResultSet rs = stmt.executeQuery(SQL);
	out.println( SQL+ "<BR><BR>");
	while (rs.next()) {
		out.println("id : "  + rs.getString(1) + "<BR>");
		out.println("email : "  + rs.getString(2) + "<BR>");
	}

   stmt.close();
   conn.close();

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>

</head>
<body>

</body>
</html>