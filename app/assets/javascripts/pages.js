 $(document).ready(function(){
    $('#slider').bxSlider({
    	mode: 'horizontal',
    	randomStart: 'true',
    	auto: 'true',
    	speed: '600',
    	pause: '7000'
    });

    $('#more-steve').hide();
    
    $('#read-more-steve').bind("click", function(){
    	$('#read-more-steve').hide();
    	$('#more-steve').fadeIn('fast');
    	return false;
    });
  });