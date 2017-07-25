$(document).ready(function(){
	$("#submit").on('click', function(){
		var value1 = $("#value1").val()
		var value2 = $("#value2").val()
		var value3 = $("#value3").val()
		var value4 = $("#value4").val()
		var value5 = $("#value5").val()
		var value6 = $("#value6").val()
		var value7 = $("#value7").val()
		var value8 = $("#value8").val()
		var value9 = $("#value9").val()
		var value10 = $("#value10").val()
		var val11 = $("#val11").val()
		var val12 = $("#val12").val()
		var val13 = $("#val13").val()
		var val14 = $("#val14").val()
		$("#words").html("So no one told you" + " " + value1 + " " + "was gonna be this way. Your job's a" + " " + value2 + ", " + " " + "you're" + " " + value3 + "," + " " + "your love life's" + " " + value4 + "." + " " + "It's like you're always stuck in" + " " + value5 + " " + value6 + "," + " " + "when it hasn't been your" + " " + value7 + "," + " " + "your" + " " + value8 + "," + " " + "your" + " " + value9 + "," + " " + "or even your" + " " + value10 + "," + " " + "but I'll be there for you when the" + " " + val11 + " " + "starts to" + " " + val12 + "." + " " + "I'll be there for you like I've" + " " + val13 + " " + val14 + " " + "before. I'll be there for you 'cause you're there for me too.")
	})
	$( "form" ).submit(function( event ) {
  		event.preventDefault();
	});
	$("#submit").on('click', function(){
		$("#myFunction").css('visibility', 'visible')
	})
	$("#myFunction").on('click', function(){
		location.reload()
	})
})
