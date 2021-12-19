

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







			$("#fancybox-manual-a").click(function() {

				$.fancybox.open({

					href : 'http://www.mercerhrs.com/test/mmc/ae/popups/how_to_enroll.html',

					type : 'iframe',

					padding : 5,

					width: 960,

					height:540

				});

			});

			

			$("#fancybox-manual-b").click(function() {

				$.fancybox.open({

					href : 'https://www.brainshark.com/metlifebusmktg/vu?pi=zHizvT1hazBll7z0&dm=1',

					type : 'iframe',

					padding : 5,

					width: 520,

					height:450

				});

			})

			

			$("#fancybox-manual-d").click(function() {

				$.fancybox.open({

					href : 'https://www.brainshark.com/metlifebusmktg/vu?pi=zHizvT1hazBll7z0&dm=1',

					type : 'iframe',

					padding : 5,

					width: 520,

					height:450

				});

			})

			

			$("#fancybox-manual-e").click(function() {

				$.fancybox.open({

					href : 'http://www.mercerhrs.com/test/mmc/ae/popups/how_to_enroll.html',

					type : 'iframe',

					padding : 5,

					width: 960,

					height:540

				});

			})

			

			$("#fancybox-manual-g").click(function() {

				$.fancybox.open({

					href : 'http://www.mercerhrs.com/widgets/hsa/',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:490

				});

			})

			

			$("#fancybox-manual-o").click(function() {

				$.fancybox.open({

					href : 'http://www.mercerhrs.com/widgets/fsa/',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:470

				});

			})

				

			$("#fancybox-manual-h").click(function() {

				$.fancybox.open({

					href : 'http://www.mercerhrs.com/widgets/swapit/',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:470

				});

			})

			

			

				$("#fancybox-manual-i").click(function() {

				$.fancybox.open({

					href : 'http://www.calcxml.com/calculators/pay-down-debt-or-invest?skn=36',

					type : 'iframe',

					padding : 5,

					width: 520,

					height:700

				});

			})

			

				$("#fancybox-manual-j").click(function() {

				$.fancybox.open({

					href : 'http://www.calcxml.com/calculators/savings-calculator-now?skn=36',

					type : 'iframe',

					padding : 5,

					width: 520,

					height:700

				});

			})

			

				$("#fancybox-manual-k").click(function() {

				$.fancybox.open({

					href : 'http://www.calcxml.com/calculators/savings-goal-calculator?skn=36',

					type : 'iframe',

					padding : 5,

					width: 520,

					height:700

				});

			})

			

			$("#fancybox-manual-l").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/articles/planning_for_healthcare.html',

					type : 'iframe',

					padding : 5,

					width: 375,

					height:740

				});

			})

			

			$("#fancybox-manual-m").click(function() {

				$.fancybox.open({

					href : 'http://www.calcxml.com/do/qua11?skn=36',

					type : 'iframe',

					padding : 5,

					width: 520,

					height:700

				});

			})

			

			$("#fancybox-manual-n").click(function() {

				$.fancybox.open({

					href : 'http://www.calcxml.com/do/qua10?skn=36',

					type : 'iframe',

					padding : 5,

					width: 520,

					height:700

				});

			})

			

			$("#fancybox-manual-p").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/video/basics_of_diversification.html',

					type : 'iframe',

					padding : 0,

					width: 960,

					height:585

				});

			})

			

			$("#fancybox-manual-q").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/video/power_of_compounding.html',

					type : 'iframe',

					padding : 0,

					width: 960,

					height:585

				});

			})

			

			$("#fancybox-manual-r").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/video/be_a_smart_investor.html',

					type : 'iframe',

					padding : 0,

					width: 960,

					height:585

				});

			})

			

			$("#fancybox-manual-s").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/video/be_a_smart_investor.html',

					type : 'iframe',

					padding : 0,

					width: 960,

					height:585

				});

			})

			

			$("#fancybox-manual-t").click(function() {

				$.fancybox.open({

					href : 'http://viewidc.com/vfdshev6',

					type : 'iframe',

					padding : 5,

					width: 685,

					height:450

				});

			})

			

			$("#fancybox-manual-u").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/myview/index.htm',

					type : 'iframe',

					padding : 5,

					width: 1005,

					height:710

				});

			})

			

			$("#fancybox-manual-v").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/texting/index.html',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:450

				});

			})

			

						$("#fancybox-manual-v2").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/texting/index.html',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:450

				});

			})

			

						$("#fancybox-manual-v3").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/texting/index.html',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:450

				});

			})

			

						$("#fancybox-manual-v4").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/texting/index.html',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:450

				});

			})

			

						$("#fancybox-manual-v5").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/texting/index.html',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:450

				});

			})

			

						$("#fancybox-manual-v6").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/texting/index.html',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:450

				});

			})

			

						$("#fancybox-manual-v7").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/texting/index.html',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:450

				});

			})

			

						$("#fancybox-manual-v8").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/texting/index.html',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:450

				});

			})

			

						$("#fancybox-manual-v9").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/texting/index.html',

					type : 'iframe',

					padding : 5,

					width: 750,

					height:450

				});

			})

			

			$("#fancybox-manual-w").click(function() {

				$.fancybox.open({

					href : 'http://www.uncoverthenumbers.com/decision-pathfinder/index.html',

					type : 'iframe',

					padding : 5,

					width: 740,

					height:611

				});

			})

			

			$("#fancybox-manual-reveal-a").click(function() {

				$.fancybox.open({

					href : 'http://www.calcxml.com/calculators/i-am-retired-how-long-will-my-savings-last?skn=36',

					type : 'iframe',

					padding : 5,

					width: 520,

					height:700

				});

			})

			

			$("#fancybox-manual-reveal-b").click(function() {

				$.fancybox.open({

					href : 'http://www.mercerhrs.com/test/utn/articles/early_with.html',

					type : 'iframe',

					padding : 5,

					width: 800,

					height:600

				});

			})

			

			$("#fancybox-manual-reveal-c").click(function() {

				$.fancybox.open({

					href : 'about:blank',

					type : 'iframe',

					padding : 5,

					width: 800,

					height:600

				});

			})

			

			$("#fancybox-manual-reveal-d").click(function() {

				$.fancybox.open({

					href : 'http://www.mercerhrs.com/test/utn/articles/top_5.html',

					type : 'iframe',

					padding : 5,

					width: 800,

					height:600

				});

			})

			

			$("#fancybox-manual-reveal-e").click(function() {

				$.fancybox.open({

					href : 'http://www.ssa.gov/OACT/population/longevity.html',

					type : 'iframe',

					padding : 5,

					width: 800,

					height:600

				});

			})

			

				$("#fancybox-manual-reveal-f").click(function() {

				$.fancybox.open({

					href : 'http://www.calcxml.com/do/qua11?skn=36',

					type : 'iframe',

					padding : 5,

					width: 520,

					height:700

				});

			})

			

				$("#fancybox-manual-reveal-g").click(function() {

				$.fancybox.open({

					href : 'about:blank',

					type : 'iframe',

					padding : 5,

					width: 800,

					height:600

				});

			})

			

				$("#fancybox-manual-reveal-h").click(function() {

				$.fancybox.open({

					href : 'http://www.mercerhrs.com/test/utn/articles/retirement_now_what.html',

					type : 'iframe',

					padding : 5,

					width: 800,

					height:600

				});

			})

			

			$("#fancybox-manual-reveal-i").click(function() {

				$.fancybox.open({

					href : 'http://www.calcxml.com/do/ret09?skn=36',

					type : 'iframe',

					padding : 5,

					width: 520,

					height:700

				});

			})





			$("#fancybox-manual-reveal-j").click(function() {

				$.fancybox.open({

					href : 'http://www.calcxml.com/do/qua05?skn=36',

					type : 'iframe',

					padding : 5,

					width: 520,

					height:700

				});

			})





			$("#fancybox-manual-c").click(function() {

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

