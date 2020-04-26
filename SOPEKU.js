let cssSOPEKU = document.createElement('style');
cssSOPEKU.innerHTML = '.sopeku-menu{margin:20px 0 0;display:inline-block;width:100%}.sopeku-menu li a{width:100%;padding:5px 0;border-radius:5px;text-align:center;float:left;background:#19abea;color:#fff}.sopeku-menu li{list-style:none;margin:0;padding:5px;float:left}.sopeku-menu ul{display:grid;grid-template-columns:10% 10% 10% 10% 10% 10% 10% 10% 10% 10%}@media screen and (max-width:500px) {.sopeku-menu ul{grid-template-columns:20% 20% 20% 20% 20%}}.sopeku-menu li:hover{cursor:pointer}.sopeku-menu ul li a.active-a{background:#0d8bc1}.sopeku{display:none}.sopeku-active{display:block}';document.body.appendChild(cssSOPEKU);
// SOPEKU Timer
var timerSOPEKU=$("<div id='waktuSOPEKU'/>");$("#waktusubtest").prepend(timerSOPEKU),$("#tps4").click(function(){$('#waktuSOPEPU').hide();function a(a,b,c){function j(a){return a<=9?"0"+a:a}function k(){$('.pengetahuankuantitatif').removeClass('jenis-active'),$('.wrap').addClass('hide'),$('.submit').removeClass('hide'),$('#waktusubtest').attr("style","padding: 20px;width:100% !important"),$('#waktutotal').attr("style","display:none"),$('head').append("<style>#waktusubtest:before{content:''!important;display:none}}</style>"),$('.jenis-menu').removeClass('mengkerut'),$('.pengetahuankuantitatif').removeClass('jenis-active'),$('a.jenis-a[data-id=jenis1], a.jenis-a[data-id=jenis2], a.jenis-a[data-id=jenis3], a.jenis-a[data-id=jenis4]').addClass('soalunavail').removeClass('soalavail'),d.innerHTML="Selesai!"}function l(){jQuery(".sopeku-akhir").click(function(){$(this).data("clicked",!0)}),h=e-+new Date,h<1e3||jQuery(".sopeku-akhir").data("clicked")?k():(i=new Date(h),f=i.getUTCHours(),g=i.getUTCMinutes(),d.innerHTML=(f?f+":"+j(g):g)+":"+j(i.getUTCSeconds()),setTimeout(l,i.getUTCMilliseconds()+500))}var d,e,f,g,h,i;d=document.getElementById(a),e=+new Date+1e3*(60*b+c)+500,l()}$(".jenis-menu").addClass("mengkerut"),a("waktuSOPEKU",35,0)});
// SOPEKU Active
$(document).ready(function(){$(".sopeku-a").click(function(){$(".sopeku").removeClass("sopeku-active"),$(".sopeku[data-id='"+$(this).attr("data-id")+"']").addClass("sopeku-active"),$(".sopeku-a").removeClass("active-a"),$(this).parent().find(".sopeku-a").addClass("active-a")})});
// SOPEKU Section & Button
$('.pengetahuankuantitatif section').addClass("sopeku");
var secSOPEKU = $('.pengetahuankuantitatif').children('section'),
    qSOPEKU1 = secSOPEKU.eq(0),qSOPEKU2 = secSOPEKU.eq(1),qSOPEKU3 = secSOPEKU.eq(2),qSOPEKU4 = secSOPEKU.eq(3),qSOPEKU5 = secSOPEKU.eq(4),
    qSOPEKU6 = secSOPEKU.eq(5),qSOPEKU7 = secSOPEKU.eq(6),qSOPEKU8 = secSOPEKU.eq(7),qSOPEKU9 = secSOPEKU.eq(8),qSOPEKU10 = secSOPEKU.eq(9),
    qSOPEKU11 = secSOPEKU.eq(10),qSOPEKU12 = secSOPEKU.eq(11),qSOPEKU13 = secSOPEKU.eq(12),qSOPEKU14 = secSOPEKU.eq(13),qSOPEKU15 = secSOPEKU.eq(14),
    qSOPEKU16 = secSOPEKU.eq(15),qSOPEKU17 = secSOPEKU.eq(16),qSOPEKU18 = secSOPEKU.eq(17),qSOPEKU19 = secSOPEKU.eq(18),qSOPEKU20 = secSOPEKU.eq(19);
qSOPEKU1.attr("data-id", "sopeku1");
    qSOPEKU1.addClass("sopeku-active");
    qSOPEKU1.append("<a class='sopeku-a selanjutnya' data-id='sopeku2'>Selanjutnya ></a>");
qSOPEKU2.attr("data-id", "sopeku2");
    qSOPEKU2.append("<a class='sopeku-a sebelumnya' data-id='sopeku1'>< Sebelumnya</a>");
    qSOPEKU2.append("<a class='sopeku-a selanjutnya' data-id='sopeku3'>Selanjutnya ></a>");
qSOPEKU3.attr("data-id", "sopeku3");
    qSOPEKU3.append("<a class='sopeku-a sebelumnya' data-id='sopeku2'>< Sebelumnya</a>");
    qSOPEKU3.append("<a class='sopeku-a selanjutnya' data-id='sopeku4'>Selanjutnya ></a>");
qSOPEKU4.attr("data-id", "sopeku4");
    qSOPEKU4.append("<a class='sopeku-a sebelumnya' data-id='sopeku3'>< Sebelumnya</a>");
    qSOPEKU4.append("<a class='sopeku-a selanjutnya' data-id='sopeku5'>Selanjutnya ></a>");
qSOPEKU5.attr("data-id", "sopeku5");
    qSOPEKU5.append("<a class='sopeku-a sebelumnya' data-id='sopeku4'>< Sebelumnya</a>");
    qSOPEKU5.append("<a class='sopeku-a selanjutnya' data-id='sopeku6'>Selanjutnya ></a>");
qSOPEKU6.attr("data-id", "sopeku6");
    qSOPEKU6.append("<a class='sopeku-a sebelumnya' data-id='sopeku5'>< Sebelumnya</a>");
    qSOPEKU6.append("<a class='sopeku-a selanjutnya' data-id='sopeku7'>Selanjutnya ></a>");
qSOPEKU7.attr("data-id", "sopeku7");
    qSOPEKU7.append("<a class='sopeku-a sebelumnya' data-id='sopeku6'>< Sebelumnya</a>");
    qSOPEKU7.append("<a class='sopeku-a selanjutnya' data-id='sopeku8'>Selanjutnya ></a>");
qSOPEKU8.attr("data-id", "sopeku8");
    qSOPEKU8.append("<a class='sopeku-a sebelumnya' data-id='sopeku7'>< Sebelumnya</a>");
    qSOPEKU8.append("<a class='sopeku-a selanjutnya' data-id='sopeku9'>Selanjutnya ></a>");
qSOPEKU9.attr("data-id", "sopeku9");
    qSOPEKU9.append("<a class='sopeku-a sebelumnya' data-id='sopeku8'>< Sebelumnya</a>");
    qSOPEKU9.append("<a class='sopeku-a selanjutnya' data-id='sopeku10'>Selanjutnya ></a>");
qSOPEKU10.attr("data-id", "sopeku10");
    qSOPEKU10.append("<a class='sopeku-a sebelumnya' data-id='sopeku9'>< Sebelumnya</a>");
    qSOPEKU10.append("<a class='sopeku-a selanjutnya' data-id='sopeku11'>Selanjutnya ></a>");
qSOPEKU11.attr("data-id", "sopeku11");
    qSOPEKU11.append("<a class='sopeku-a sebelumnya' data-id='sopeku10'>< Sebelumnya</a>");
    qSOPEKU11.append("<a class='sopeku-a selanjutnya' data-id='sopeku12'>Selanjutnya ></a>");
qSOPEKU12.attr("data-id", "sopeku12");
    qSOPEKU12.append("<a class='sopeku-a sebelumnya' data-id='sopeku11'>< Sebelumnya</a>");
    qSOPEKU12.append("<a class='sopeku-a selanjutnya' data-id='sopeku13'>Selanjutnya ></a>");
qSOPEKU13.attr("data-id", "sopeku13");
    qSOPEKU13.append("<a class='sopeku-a sebelumnya' data-id='sopeku12'>< Sebelumnya</a>");
    qSOPEKU13.append("<a class='sopeku-a selanjutnya' data-id='sopeku14'>Selanjutnya ></a>");
qSOPEKU14.attr("data-id", "sopeku14");
    qSOPEKU14.append("<a class='sopeku-a sebelumnya' data-id='sopeku13'>< Sebelumnya</a>");
    qSOPEKU14.append("<a class='sopeku-a selanjutnya' data-id='sopeku15'>Selanjutnya ></a>");
qSOPEKU15.attr("data-id", "sopeku15");
    qSOPEKU15.append("<a class='sopeku-a sebelumnya' data-id='sopeku14'>< Sebelumnya</a>");
    qSOPEKU15.append("<a class='sopeku-a selanjutnya' data-id='sopeku16'>Selanjutnya ></a>");
qSOPEKU16.attr("data-id", "sopeku16");
    qSOPEKU16.append("<a class='sopeku-a sebelumnya' data-id='sopeku15'>< Sebelumnya</a>");
    qSOPEKU16.append("<a class='sopeku-a selanjutnya' data-id='sopeku17'>Selanjutnya ></a>");
qSOPEKU17.attr("data-id", "sopeku17");
    qSOPEKU17.append("<a class='sopeku-a sebelumnya' data-id='sopeku16'>< Sebelumnya</a>");
    qSOPEKU17.append("<a class='sopeku-a selanjutnya' data-id='sopeku18'>Selanjutnya ></a>");
qSOPEKU18.attr("data-id", "sopeku18");
    qSOPEKU18.append("<a class='sopeku-a sebelumnya' data-id='sopeku17'>< Sebelumnya</a>");
    qSOPEKU18.append("<a class='sopeku-a selanjutnya' data-id='sopeku19'>Selanjutnya ></a>");
qSOPEKU19.attr("data-id", "sopeku19");
    qSOPEKU19.append("<a class='sopeku-a sebelumnya' data-id='sopeku18'>< Sebelumnya</a>");
    qSOPEKU19.append("<a class='sopeku-a selanjutnya' data-id='sopeku20'>Selanjutnya ></a>");
qSOPEKU20.attr("data-id", "sopeku20");
    qSOPEKU20.append("<a class='sopeku-a sebelumnya' data-id='sopeku19'>< Sebelumnya</a>");
var anusopeku = $("<div class='sopeku-menu'><ul><li><a class='sopeku-a active-a' data-id='sopeku1'>1</a></li><li><a class='sopeku-a' data-id='sopeku2'>2</a></li><li><a class='sopeku-a' data-id='sopeku3'>3</a></li><li><a class='sopeku-a' data-id='sopeku4'>4</a></li><li><a class='sopeku-a' data-id='sopeku5'>5</a></li><li><a class='sopeku-a' data-id='sopeku6'>6</a></li><li><a class='sopeku-a' data-id='sopeku7'>7</a></li><li><a class='sopeku-a' data-id='sopeku8'>8</a></li><li><a class='sopeku-a' data-id='sopeku9'>9</a></li><li><a class='sopeku-a' data-id='sopeku10'>10</a></li><li><a class='sopeku-a' data-id='sopeku11'>11</a></li><li><a class='sopeku-a' data-id='sopeku12'>12</a></li><li><a class='sopeku-a' data-id='sopeku13'>13</a></li><li><a class='sopeku-a' data-id='sopeku14'>14</a></li><li><a class='sopeku-a' data-id='sopeku15'>15</a></li><li><a class='sopeku-a' data-id='sopeku16'>16</a></li><li><a class='sopeku-a' data-id='sopeku17'>17</a></li><li><a class='sopeku-a' data-id='sopeku18'>18</a></li><li><a class='sopeku-a' data-id='sopeku19'>19</a></li><li><a class='sopeku-a' data-id='sopeku20'>20</a></li></ul></div><div class='sopeku-akhir' id='selesaicepat'>Selesaikan Pengerjaan</div>");$(".pengetahuankuantitatif").append(anusopeku);
