
		$(document).ready(function() {
			/*
			 *  Simple image gallery. Uses default settings
			 */

			$('.fancybox').fancybox();

			/*
			 *  Different effects
			 */

			// Change title type, overlay closing speed
			$(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});

			// Disable opening and closing animations, change title type
			$(".fancybox-effects-b").fancybox({
				openEffect  : 'none',
				closeEffect	: 'none',

				helpers : {
					title : {
						type : 'over'
					}
				}
			});

			// Set custom style, close if clicked, change title type and overlay color
			$(".fancybox-effects-c").fancybox({
				wrapCSS    : 'fancybox-custom',
				closeClick : true,

				openEffect : 'none',

				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background' : 'rgba(238,238,238,0.85)'
						}
					}
				}
			});

			// Remove padding, set opening and closing animations, close if clicked and disable overlay
			$(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});

			/*
			 *  Button helper. Disable animations, hide close button, change title type and content
			 */

			$('.fancybox-buttons').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',

				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,

				helpers : {
					title : {
						type : 'inside'
					},
					buttons	: {}
				},

				afterLoad : function() {
					this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
				}
			});


			/*
			 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
			 */

			$('.fancybox-thumbs').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 50,
						height : 50
					}
				}
			});

			/*
			 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
			*/
			$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});

			/*
			 *  Open manually
			 */
		
			
			$("#fancybox-manual-medicalA").click(function() {
				$.fancybox.open({
					href : 'http://www.mercerhrs.com/widgets/cdhp_clues/',
					type : 'iframe',
					padding : 5,
					width: 750,
					height:450
				});
			})


			$("#fancybox-manual-b-1").click(function() {
				$.fancybox.open({
					href : 'http://bit.ly/1jSG8dQ',
					type : 'iframe',
					padding : 5,
					width: 710,
					height:400
				});
			})


			$("#fancybox-manual-b-2").click(function() {
				$.fancybox.open({
					href : 'http://bit.ly/1jSG8dQ',
					type : 'iframe',
					padding : 5,
					width: 710,
					height:400
				});
			})

			$("#fancybox-manual-c").click(function() {
				$.fancybox.open({
					href : 'http://www.mercerhrs.com/test/cdhp/popups/pop-hsacontributions.html',
					type : 'iframe',
					padding : 5,
					width: 710,
					height:200
				});
			})
			
				$("#fancybox-manual-medicalY").click(function() {
				$.fancybox.open({
					href : 'http://www.mercerhrs.com/video/cdhp/cdhp.html',
					type : 'iframe',
					padding : 5,
					width: 980,
					height:600
				});
			})
				
				
				
				$("#fancybox-manual-fsa").click(function() {
				$.fancybox.open({
					href : 'http://www.mercerhrs.com/widgets/fsa/',
					type : 'iframe',
					padding : 5,
					width: 750,
					height:450
				});
			})
				
			
				$("#fancybox-manual-medicalB").click(function() {
				$.fancybox.open({
					href : 'http://www.mercerhrs.com/widgets/hsa/',
					type : 'iframe',
					padding : 5,
					width: 750,
					height:490
				});
			})
						
				

			$("#fancybox-manual-z").click(function() {
				$.fancybox.open([
					{
						href : '1_b.jpg',
						title : 'My title'
					}, {
						href : '2_b.jpg',
						title : '2nd title'
					}, {
						href : '3_b.jpg'
					}
				], {
					helpers : {
						thumbs : {
							width: 75,
							height: 50
						}
					}
				});
			});


		});
