var flag=1;
$("ul").on("click", "li" ,function(){
	/*if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css("color","black")
		$(this).css("text-decoration", "none")
	}
	else{
		$(this).css("text-decoration", "line-through")
		$(this).css("color","gray")
	}*/

	$(this).toggleClass("completed")
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event){
	if(event.which===13){
		var newli=$("input").val();
		$(this).val("");
		$("ul").append("<li> <span class= 'glyphicon glyphicon-trash'>  </span> "  + newli + "</li>")
	}
	

});

$("#positive").click(function(){
	if(flag===1){
		$("input").hide();
		flag=0;
	}else{
		$("input").show();
		flag=1;
	}
});

