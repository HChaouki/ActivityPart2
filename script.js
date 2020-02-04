function notification(t, m) {
	notif({
		msg: m,
		type: t
	});
}
jQuery(function($) {	
	$("#form-forgot").on("submit", function(e) {	
		$("#errorMessage").hide();	
		$forgotBtn = $("#forgotBtn");	
		$forgotBtn.prop("disabled", true);	
		$forgotBtn.find("span").addClass("glyphicon glyphicon-refresh glyphicon-refresh-animate");	
		return true;
	});	
});	