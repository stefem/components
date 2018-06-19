// $( "#bucketClick" ).click(function(event) {
// 	event.preventDefault();
// 	$('#bucketList').animate({left: 100});
// });

// $( "#closeBucketList" ).click(function(event) {
// 	event.preventDefault();
// 	$('#bucketList').animate({left: 'toggle'});
// });

$("button").click(function() {
  if($(".div1").hasClass('left')){
     $(".div1").removeClass('left');
  } else {
  $(".div1").addClass('left');
  }
});