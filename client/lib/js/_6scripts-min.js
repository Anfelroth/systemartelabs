$(document).ready(function(){$("#featuresSlider").flickity({cellAlign:"left",contain:true,prevNextButtons:false});$("#showcaseSlider").flickity({cellAlign:"left",contain:true,prevNextButtons:false,imagesLoaded:true});$(".youtube-media").on("click",function(e){var t=$(window).width();if(t<=768){return}$.fancybox({href:this.href,padding:4,type:"iframe",href:this.href.replace(new RegExp("watch\\?v=","i"),"v/")});return false})});$(document).ready(function(){$("a.single_image").fancybox({padding:4})});
