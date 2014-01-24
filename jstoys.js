$(document).ready(function(){
	$(".rand-mouse-col-block").mouseover(function () {
		$(this).animate({
			'backgroundColor': 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
		}, 0);
	});
	$(".rand-mouse-col-block").mouseleave(function () {

		$(this).animate(
			{backgroundColor: 'transparent'}, 500);
	});
	function bcolorchanger() {
        $('.rand-anim-col-block').each(function () {
            //animate to a random RBG color            
            $(this).animate({
                'backgroundColor': 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
            }, 2000);
        });
			colorchanger();
		}
		
	 //Create an array of the colors you want to pick from.  Add as many as you like! Use any of the formats below.
    var colarray = ['#888888','#8e44ad','#888888','#888888','#888888']
    //set the animation speed of the colorchange
    var animspeed = 2000
    var colnums = colarray.length
    
    //We need to turn each character into an array of spans. Note that this strips out any other HTML code in a .coloful div....BE WARNED!
    
    $('.colorful').each(function () {
        var html = $(this).text();
        var divlen = html.length;
        var charArray = html.split('');

        for (var i = 0; i < divlen; i++) {
            charArray[i] = "<span class='colorme'>" + charArray[i] + "</span>";
        }
        html = charArray.join('');
        $(this).html(html);
    });
    
    //The color change code is made as a separate function so that it can self-call
    function colorchanger() {
        $('.colorme').each(function () {
            $(this).animate({
                'color':  colarray[Math.floor(Math.random() * colnums)]
            }, animspeed);
        });
        bcolorchanger();
    }
	
	bcolorchanger();
    colorchanger();
});