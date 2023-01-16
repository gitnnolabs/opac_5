var Article={TopBinder:[],Init:function(){Article.SetScreen();var e=$("#articleText"),t=e.offset(),i=$(".articleMenu").width();$(".articleSection",e);$(".ModalTables").on("shown.bs.modal",function(){var e=$(".modal-body",this),t=$("table",e),i=e.outerWidth(),o=t.outerWidth();e.is("cached")||(t.addClass("table"),i<o?t.addClass("autoWidth"):t.removeClass("autoWidth")),e.addClass("cached")});var o,n,a,l=function(e){var t=$(".xref",e),i=t.next("span:eq(0)"),o=e.position(),t=(t.outerHeight(),o.left),o=e.closest("li");0<o.length&&o.addClass("zindexFix"),i.removeClass("closed").addClass("opened").css({left:300<t?-t/3:0}).fadeIn("fast")},s=function(e){var t=$(".xref",e).next("span:eq(0)"),e=e.closest("li");0<e.length&&e.removeClass("zindexFix"),t.removeClass("opened").addClass("closed")},r=(Article.IsTablet||Article.IsMobile?(o=!1,n=null,$("html").on("touchstart",function(e){$(".ref").each(function(){var e=$(this);s(e),o=!1})}),$(".ref").on("touchstart",function(e){e.stopPropagation();e=$(this);null!==n&&e.get(0)===n.get(0)?o||(l(n=e),o=!0):(null!==n&&s(n),l(n=e),o=!0)}),$("ul.floatingMenuMobile").on("click",function(){$(this).find(".fm-button-child").each(function(){$(this).addClass("tooltip-mobile-on")})})):$(".ref").on("mouseenter mouseleave",function(e){e.preventDefault();var t=$(this);("mouseenter"===e.type?l:s)(t)}),$(".thumb").on("mouseenter mouseleave",function(e){var t=$(this).parent().parent().find(".preview");"mouseenter"==e.type?t.fadeIn("fast"):"mouseleave"==e.type&&t.fadeOut("fast")}),$(".ModalTables").on("shown.bs.modal",function(){0==$("table td[colspan], table td[rowspan]",this).length&&$("table",this).addClass("table-hover")}),$(".collapseTitle").on("click",function(){var e=$(this).next(),t=$(this).find(".collapseIcon");e.is(":visible")?(e.slideUp("fast"),t.removeClass("opened")):(e.slideDown("fast"),t.addClass("opened"))}),$(".expandReduceText").on("click",function(e){e.preventDefault();var e=$("#articleText .ref"),t=$("#articleText .text"),i=$(this).data("expandreducetext"),o=(void 0===$(this).data("defaultwidth")&&$(this).data("defaultwidth",t.outerWidth()),1==i?(e.hide(),t.outerWidth("100%"),$(this).data("expandreducetext",!1)):(t.width(""),e.show(),$(this).data("expandreducetext",!0)),$(window).scrollTop());setTimeout(function(){Article.ArticleStructureBuilder(),Article.ArticleStructureSelect(o)},100)}),$(".articleTxt .xref:not(.big)").on("click",function(){var e=$(this).text();$(".ref-list");-1!=e.indexOf(",")&&(e=(e=e.split(","))[0]),parseInt(e),e--}),Article.ArticleStructureBuilder(),t.top=t.top-25,e.outerHeight()),c=$(".articleMenu").height(),e=(hbodyText=$(".articleTxt").height(),vbodyText=hbodyText+100+"px",vbodyTextMobile=hbodyText+150+"px",window.setTimeout(function(){c=$(".articleMenu").height()},200),hbodyText<750&&$(".floatingMenu, .floatingMenuItem, .floatingMenuMobile").css({bottom:"auto",top:Article.IsTablet?vbodyTextMobile:vbodyText}),window.setTimeout(function(){$(".floatingMenu, .floatingMenuItem, .floatingMenuMobile").css({opacity:"1"})},200),$(window).scroll(function(){var e=$(window).scrollTop();Article.isScrolledIntoView(".floatingMenuCtt")?($(".floatingMenuItem").css({position:"absolute"}),$(".floatingMenu").css({position:"absolute"})):($(".floatingMenuItem").css({position:"fixed"}),$(".floatingMenu").css({position:"fixed"})),e>t.top?($(".articleMenu").addClass("fixed").width(i),e>r+t.top-c-46?$(".articleMenu").addClass("fixedBottom"):$(".articleMenu").removeClass("fixedBottom")):$(".articleMenu").removeClass("fixed"),Article.ArticleStructureSelect(e),$(".alternativeHeader").stop(!1,!1)}),""!=window.location.hash&&(e=window.location.hash,a=window.scrollY,$(e).modal("toggle").on("hidden.bs.modal",function(){window.location.hash="",$("body,html").scrollTop(a)})),$("[data-toggle='modal']").on("click",function(){var e=$(this).data("target"),t=window.scrollY;"undefined"==e&&""==e||(window.location.hash=e),$(e).on("hidden.bs.modal",function(){window.location.hash="",$("body,html").scrollTop(t)})}),$(".downloadOptions li.group")),d=100/e.length,u=(e.css("width",d+"%"),Article.fechaAutores(),!1),e=($(".short-link").mouseenter(function(e){var t;u||(-1!==(t=window.location.href).indexOf("localhost")&&(t="http://www.scielo.br"),$.ajax({type:"GET",async:!1,url:"http://ref.scielo.org/api/v1/shorten",data:"url="+encodeURI(t),dataType:"jsonp",success:function(e){result=e,u=!0}}))}),new Clipboard(".short-link",{text:function(e){return result}})),p=(e.on("success",function(e){var t=$(e.trigger);t.addClass("copyFeedback"),setTimeout(function(){t.removeClass("copyFeedback")},2e3)}),e.on("error",function(e){var t=$(e.trigger);t.addClass("copyFeedbackError"),setTimeout(function(){t.removeClass("copyFeedbackError")},2e3)}),$("ul.floatingMenuMobile").on("click",function(){$(this).find(".fm-button-child").each(function(){$(this).addClass("tooltip-mobile-on")})}),!0);$("ul.floatingMenuMobile").on("focusout click",function(e){p?"focusout"!==e.type&&(p=!1,$(this).find(".fm-list").children("li").removeAttr("style"),$(this).find(".fm-button-main").addClass("fm-button-main-mobile-open")):(p=!0,$(this).find(".fm-list").children("li").css({opacity:0}),$(this).find(".fm-button-main").removeClass("fm-button-main-mobile-open"))})},isScrolledIntoView:function(e){var t=$(window).scrollTop(),i=t+$(window).height(),o=$(e).offset().top;return o+$(e).height()<=i&&t<=o},ArticleStructureBuilder:function(){var e=$(".articleMenu"),t=$("#articleText .articleSection"),n=0,a="";Article.TopBinder=[],t.each(function(){var t,e=$(this).data("anchor"),i=$(this).find(".articleSectionTitle"),o=$(this).offset();if(0==$(this).find("a[name='articleSection"+n+"']").length&&$(this).prepend("<a name='articleSection"+n+"'></a>"),0==n?Article.TopBinder.push(0):Article.TopBinder.push(o.top),void 0===e)return!0;a=a+"<li "+(0==n?'class="selected"':"")+'>\t<a href="#articleSection'+n+'">'+e+"</a>",1<i.length&&(t=0,a+="<ul>",i.each(function(){var e=$(this).offset();Article.TopBinder.push(e.top),0==$(this).prev("a[name='as"+n+"-heading"+t+"']").length&&$(this).before("<a name='as"+n+"-heading"+t+"'></a>"),a=(a+="<li>")+'\t<a href="#as'+n+"-heading"+t+'">'+$(this).text()+"</a></li>",t++}),a+="</ul>"),a+="</li>",n++}),e.html(a),$("a",e).on("click",function(e){e.preventDefault();e=(e=$(this).attr("href")).replace("#",""),e=$("a[name="+e+"]").offset();$("html,body").animate({scrollTop:e.top-60},500)})},ArticleStructureSelect:function(e){for(var t=$(".articleMenu"),i=0,o=Article.TopBinder.length;i<o;i++){if(i==o-1&&e>=Article.TopBinder[i]-100){t.find("li").removeClass("selected"),t.find("li:eq("+i+")").addClass("selected");break}if(e<=Article.TopBinder[i]-100){t.find("li").removeClass("selected"),t.find("li:eq("+(i-1)+")").addClass("selected");break}}},Bindings:function(e){},fechaAutores:function(){var t,i,e,o,n,a,l,s,r=$(".contribGroup"),c=$(".contribGroup .dropdown"),d=c.length;10<=d&&(t=null,i=$(".outlineFadeLink"),e=c[0],o=c[d-1],(n=$('<a data-toggle="tooltip" data-placement="top" title="+'+(d-2)+'"></a>')).text("[...]"),n.css({padding:"10px",cursor:"pointer"}),a=$("<div></div>"),(l=$("<a></a>")).addClass("btn-fechar"),(s=$("<span></span>")).addClass("sci-ico-floatingMenuClose"),l.append(s),a.append(l),(s=$("<div></div>")).append(e),s.append(n),s.append(o),s.append(i),r.text(""),r.append(s),n.on("click",function(){t.tooltip("disable"),r.textContent="";for(var e=0;e<d;e++)r.append(c[e]);r.append(i),r.append(a)}),l.on("click",function(){t.tooltip("enable"),Article.fechaAutores()}),t=$('[data-toggle="tooltip"]').tooltip()),r.css("opacity","1")},IsMobile:!1,IsTablet:!1,IsTabletPortrait:!1,IsDesktop:!1,IsHD:!1,isOldIE:!1,DetectMobile:function(e){var t={detectMobileBrowsers:{fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,shortPattern:/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i}};return t.detectMobileBrowsers.fullPattern.test(e)||t.detectMobileBrowsers.shortPattern.test(e.substr(0,4))},DetectTablet:function(e){var t={detectMobileBrowsers:{tabletPattern:/android|ipad|playbook|silk/i}};return t.detectMobileBrowsers.tabletPattern.test(e)},SetScreen:function(){var e=$(window).innerWidth(),t=window.matchMedia("(orientation: portrait)").matches;990<e&&(Article.IsDesktop=!0),1206<e&&(Article.IsHD=!0),Article.DetectMobile(navigator.userAgent)&&(Article.IsMobile=!0),Article.DetectTablet(navigator.userAgent)&&(Article.IsTablet=!0,Article.IsTabletPortrait=!!t,window.addEventListener("orientationchange",function(){0==screen.orientation.angle?Article.IsTabletPortrait=!0:Article.IsTabletPortrait=!1})),-1<navigator.appVersion.indexOf("MSIE 8")&&(Article.IsMobile=!1,Article.IsTablet=!1,Article.IsDesktop=!0,Article.IsOldIE=!0,Article.IsHD=!1)}};$(function(){$("body.article").length&&Article.Init()});
//# sourceMappingURL=../maps/scielo-article-min.js.map
