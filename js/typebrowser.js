$(document).ready(function() {
  
  // Load fonts from config.js
  for (i in web_fonts) { 
     $('#font').append("<option value='" + i + "'>" + web_fonts[i] + "</option>"); 
  }
  for (i in default_fonts) { 
     $('#font').append("<option value='" + i + "'>" + default_fonts[i] + "</option>");
  }
  $('#font option:first').attr('selected', 'selected');
  
  $(document).bind('keydown', 'up',function (evt){prevFont();});
  $(document).bind('keydown', 'right',function (evt){nextDisplay();});
  $(document).bind('keydown', 'down',function (evt){nextFont();});
  $(document).bind('keydown', 'left',function (evt){prevDisplay();});
  
  $('#display').change(function(){
	  changeDisplay($('#display').val());
	  return false;
	});
  	
	$("#font").change(function(){
    var font = $("#font").val();
    var font_name = $("#font option:selected").text();
    
    changeFont(font, font_name);
		
		return false;
	});
	
	$('.prev-font').click(function(){
	  prevFont();
	});
	
	$('.next-font').click(function(){
	  nextFont();
	});
	
	$('.prev-display').click(function(){
	  prevDisplay();
	});
	
	$('.next-display').click(function(){
	  nextDisplay();
	});
	
	$('#show-info').click(function(){
	  showInfo();
	  return false;
	});
  
  function nextFont() {
    var font = $('#font option:selected').next().val();
    var font_name = $('#font option:selected').next().text();
    
    if (font.charAt(0) == '-') {
      var font = $('#font option:selected').next().next().val();
      var font_name = $('#font option:selected').next().next().text();
    }
    
    if (font) {
      changeFont(font, font_name);
    }
    return false;
  }
  
  function prevFont() {
    var font = $('#font option:selected').prev().val();
    var font_name = $('#font option:selected').prev().text();
    
    if (font.charAt(0) == '-') {
      var font = $('#font option:selected').prev().prev().val();
      var font_name = $('#font option:selected').prev().prev().text();
    }
    
    if (font) {
      changeFont(font, font_name);
    }
    return false;
  }
  
  function changeFont(font, font_name) {
    $('head style').remove();
    
    if (web_fonts[font]) {
      var font_face = '<style type="text/css" media="screen">'+
      '@font-face {\r'+
      'font-family: \''+font_name+'\';\r'+
      'src: url('+web_fonts_url+font+'.eot);\r'+
      'src: url('+web_fonts_url+font+'.woff) format("woff"), '+
      'url('+web_fonts_url+font+'.ttf) format("truetype"), '+
      'url('+web_fonts_url+font+'.svg#webfont) format("svg");\r'+
      'font-weight: normal;\r'+
    	'font-style: normal;\r'+
      '}</style>';
      
      $('head').append(font_face);
    }
    
    $('#font').blur();
		$('.display, .info').hide();
		$("body").css("font-family", "'"+font_name+"'");
		$('h1').html(font_name);
		$('#font').val(font);
		$('#'+$('#display').val()).fadeIn("slow");
		$('html, body').animate( { scrollTop: 0 }, 'fast' );
  }
  
  function nextDisplay() {
    var next_display = $('#display option:selected').next().val();
    if (next_display) {
      changeDisplay(next_display);
    }
    return false;
  }
  
  function prevDisplay() {
    var prev_display = $('#display option:selected').prev().val();
    if (prev_display != '') {
      changeDisplay(prev_display);
    }
    return false;
  }
  
  function changeDisplay(display) {
    $('#display').val(display);

    $('.display, .info').hide();
	  $('#display').blur();
	  $('#'+display).fadeIn("slow");
	  $('html, body').animate( { scrollTop: 0 }, 'fast' );
  }
  
  function showInfo() {
    $('.display, #start').hide();
	  $('#info').fadeIn("slow");
	  return false;
  }
   
});