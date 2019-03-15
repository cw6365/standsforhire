	//##########################################
	// ios_slider Slider
	//##########################################	
	$(document).ready(function() {
			
				$('.iosSlider').iosSlider({
					scrollbar: true,
					snapToChildren: true,
					desktopClickDrag: true,
					navSlideSelector: $('.iosSliderButtons .button'),
					scrollbarHeight: '2',
					scrollbarBorderRadius: '0',
					scrollbarOpacity: '0.5',
					onSlideChange: slideContentChange,
					onSliderLoaded: slideContentChange
				});
				
				function slideContentChange(args) {
					
					/* indicator */
					$('.iosSliderButtons .button').removeClass('selected');
					$('.iosSliderButtons .button:eq(' + args.currentSlideNumber + ')').addClass('selected');
					
				}
				
			});
			