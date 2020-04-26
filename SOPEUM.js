// SOPEUM CSS
let cssSOPEUM = document.createElement('style');
cssSOPEUM.innerHTML = '.sopeum-menu{margin:20px 0 0;display:inline-block;width:100%}.sopeum-menu li a{width:100%;padding:5px 0;border-radius:5px;text-align:center;float:left;background:#19abea;color:#fff}.sopeum-menu li{list-style:none;margin:0;padding:5px;float:left}.sopeum-menu ul{display:grid;grid-template-columns:10% 10% 10% 10% 10% 10% 10% 10% 10% 10%}@media screen and (max-width:500px) {.sopeum-menu ul{grid-template-columns:20% 20% 20% 20% 20%}}.sopeum-menu li:hover{cursor:pointer}.sopeum-menu ul li a.active-a{background:#0d8bc1}.sopeum{display:none}.sopeum-active{display:block}';document.body.appendChild(cssSOPEUM);
// SOPEUM Timer
var timerSOPEUM=$("<div id='waktuSOPEUM'/>");$("#waktusubtest").prepend(timerSOPEUM),$("#tps1").click(function(){function a(a,b,c){function j(a){return a<=9?"0"+a:a}function k(){$(".penalaranumum").removeClass("jenis-active"),$(".jenis-menu").removeClass("mengkerut"),$("a.jenis-a[data-id=jenis2]").addClass("soalavail").removeClass("soalunavail"),$("a.jenis-a[data-id=jenis1], a.jenis-a[data-id=jenis3], a.jenis-a[data-id=jenis4]").addClass("soalunavail").removeClass("soalavail"),d.innerHTML="Waktu Subtest Selesai!"}function l(){jQuery(".sopeum-akhir").click(function(){$(this).data("clicked",!0)}),h=e-+new Date,h<1e3||jQuery(".sopeum-akhir").data("clicked")?k():(i=new Date(h),f=i.getUTCHours(),g=i.getUTCMinutes(),d.innerHTML=(f?f+":"+j(g):g)+":"+j(i.getUTCSeconds()),setTimeout(l,i.getUTCMilliseconds()+500))}var d,e,f,g,h,i;d=document.getElementById(a),e=+new Date+1e3*(60*b+c)+500,l()}$(".jenis-menu").addClass("mengkerut"),a("waktuSOPEUM",35,0)});
// SOPEUM Active
$(document).ready(function(){$(".sopeum-a").click(function(){$(".sopeum").removeClass("sopeum-active"),$(".sopeum[data-id='"+$(this).attr("data-id")+"']").addClass("sopeum-active"),$(".sopeum-a").removeClass("active-a"),$(this).parent().find(".sopeum-a").addClass("active-a")})});
// SOPEUM Section & Button
$('.penalaranumum section').addClass("sopeum");
var secSOPEUM = $('.penalaranumum').children('section'),
    qSOPEUM1 = secSOPEUM.eq(0),qSOPEUM2 = secSOPEUM.eq(1),qSOPEUM3 = secSOPEUM.eq(2),qSOPEUM4 = secSOPEUM.eq(3),qSOPEUM5 = secSOPEUM.eq(4),
    qSOPEUM6 = secSOPEUM.eq(5),qSOPEUM7 = secSOPEUM.eq(6),qSOPEUM8 = secSOPEUM.eq(7),qSOPEUM9 = secSOPEUM.eq(8),qSOPEUM10 = secSOPEUM.eq(9),
    qSOPEUM11 = secSOPEUM.eq(10),qSOPEUM12 = secSOPEUM.eq(11),qSOPEUM13 = secSOPEUM.eq(12),qSOPEUM14 = secSOPEUM.eq(13),qSOPEUM15 = secSOPEUM.eq(14),
    qSOPEUM16 = secSOPEUM.eq(15),qSOPEUM17 = secSOPEUM.eq(16),qSOPEUM18 = secSOPEUM.eq(17),qSOPEUM19 = secSOPEUM.eq(18),qSOPEUM20 = secSOPEUM.eq(19);
qSOPEUM1.attr("data-id", "sopeum1");
    qSOPEUM1.addClass("sopeum-active");
    qSOPEUM1.append("<a class='sopeum-a selanjutnya' data-id='sopeum2'>Selanjutnya ></a>");
qSOPEUM2.attr("data-id", "sopeum2");
    qSOPEUM2.append("<a class='sopeum-a sebelumnya' data-id='sopeum1'>< Sebelumnya</a>");
    qSOPEUM2.append("<a class='sopeum-a selanjutnya' data-id='sopeum3'>Selanjutnya ></a>");
qSOPEUM3.attr("data-id", "sopeum3");
    qSOPEUM3.append("<a class='sopeum-a sebelumnya' data-id='sopeum2'>< Sebelumnya</a>");
    qSOPEUM3.append("<a class='sopeum-a selanjutnya' data-id='sopeum4'>Selanjutnya ></a>");
qSOPEUM4.attr("data-id", "sopeum4");
    qSOPEUM4.append("<a class='sopeum-a sebelumnya' data-id='sopeum3'>< Sebelumnya</a>");
    qSOPEUM4.append("<a class='sopeum-a selanjutnya' data-id='sopeum5'>Selanjutnya ></a>");
qSOPEUM5.attr("data-id", "sopeum5");
    qSOPEUM5.append("<a class='sopeum-a sebelumnya' data-id='sopeum4'>< Sebelumnya</a>");
    qSOPEUM5.append("<a class='sopeum-a selanjutnya' data-id='sopeum6'>Selanjutnya ></a>");
qSOPEUM6.attr("data-id", "sopeum6");
    qSOPEUM6.append("<a class='sopeum-a sebelumnya' data-id='sopeum5'>< Sebelumnya</a>");
    qSOPEUM6.append("<a class='sopeum-a selanjutnya' data-id='sopeum7'>Selanjutnya ></a>");
qSOPEUM7.attr("data-id", "sopeum7");
    qSOPEUM7.append("<a class='sopeum-a sebelumnya' data-id='sopeum6'>< Sebelumnya</a>");
    qSOPEUM7.append("<a class='sopeum-a selanjutnya' data-id='sopeum8'>Selanjutnya ></a>");
qSOPEUM8.attr("data-id", "sopeum8");
    qSOPEUM8.append("<a class='sopeum-a sebelumnya' data-id='sopeum7'>< Sebelumnya</a>");
    qSOPEUM8.append("<a class='sopeum-a selanjutnya' data-id='sopeum9'>Selanjutnya ></a>");
qSOPEUM9.attr("data-id", "sopeum9");
    qSOPEUM9.append("<a class='sopeum-a sebelumnya' data-id='sopeum8'>< Sebelumnya</a>");
    qSOPEUM9.append("<a class='sopeum-a selanjutnya' data-id='sopeum10'>Selanjutnya ></a>");
qSOPEUM10.attr("data-id", "sopeum10");
    qSOPEUM10.append("<a class='sopeum-a sebelumnya' data-id='sopeum9'>< Sebelumnya</a>");
    qSOPEUM10.append("<a class='sopeum-a selanjutnya' data-id='sopeum11'>Selanjutnya ></a>");
qSOPEUM11.attr("data-id", "sopeum11");
    qSOPEUM11.append("<a class='sopeum-a sebelumnya' data-id='sopeum10'>< Sebelumnya</a>");
    qSOPEUM11.append("<a class='sopeum-a selanjutnya' data-id='sopeum12'>Selanjutnya ></a>");
qSOPEUM12.attr("data-id", "sopeum12");
    qSOPEUM12.append("<a class='sopeum-a sebelumnya' data-id='sopeum11'>< Sebelumnya</a>");
    qSOPEUM12.append("<a class='sopeum-a selanjutnya' data-id='sopeum13'>Selanjutnya ></a>");
qSOPEUM13.attr("data-id", "sopeum13");
    qSOPEUM13.append("<a class='sopeum-a sebelumnya' data-id='sopeum12'>< Sebelumnya</a>");
    qSOPEUM13.append("<a class='sopeum-a selanjutnya' data-id='sopeum14'>Selanjutnya ></a>");
qSOPEUM14.attr("data-id", "sopeum14");
    qSOPEUM14.append("<a class='sopeum-a sebelumnya' data-id='sopeum13'>< Sebelumnya</a>");
    qSOPEUM14.append("<a class='sopeum-a selanjutnya' data-id='sopeum15'>Selanjutnya ></a>");
qSOPEUM15.attr("data-id", "sopeum15");
    qSOPEUM15.append("<a class='sopeum-a sebelumnya' data-id='sopeum14'>< Sebelumnya</a>");
    qSOPEUM15.append("<a class='sopeum-a selanjutnya' data-id='sopeum16'>Selanjutnya ></a>");
qSOPEUM16.attr("data-id", "sopeum16");
    qSOPEUM16.append("<a class='sopeum-a sebelumnya' data-id='sopeum15'>< Sebelumnya</a>");
    qSOPEUM16.append("<a class='sopeum-a selanjutnya' data-id='sopeum17'>Selanjutnya ></a>");
qSOPEUM17.attr("data-id", "sopeum17");
    qSOPEUM17.append("<a class='sopeum-a sebelumnya' data-id='sopeum16'>< Sebelumnya</a>");
    qSOPEUM17.append("<a class='sopeum-a selanjutnya' data-id='sopeum18'>Selanjutnya ></a>");
qSOPEUM18.attr("data-id", "sopeum18");
    qSOPEUM18.append("<a class='sopeum-a sebelumnya' data-id='sopeum17'>< Sebelumnya</a>");
    qSOPEUM18.append("<a class='sopeum-a selanjutnya' data-id='sopeum19'>Selanjutnya ></a>");
qSOPEUM19.attr("data-id", "sopeum19");
    qSOPEUM19.append("<a class='sopeum-a sebelumnya' data-id='sopeum18'>< Sebelumnya</a>");
    qSOPEUM19.append("<a class='sopeum-a selanjutnya' data-id='sopeum20'>Selanjutnya ></a>");
qSOPEUM20.attr("data-id", "sopeum20");
    qSOPEUM20.append("<a class='sopeum-a sebelumnya' data-id='sopeum19'>< Sebelumnya</a>");
var anusopeum = $("<div class='sopeum-menu'><ul><li><a class='sopeum-a active-a' data-id='sopeum1'>1</a></li><li><a class='sopeum-a' data-id='sopeum2'>2</a></li><li><a class='sopeum-a' data-id='sopeum3'>3</a></li><li><a class='sopeum-a' data-id='sopeum4'>4</a></li><li><a class='sopeum-a' data-id='sopeum5'>5</a></li><li><a class='sopeum-a' data-id='sopeum6'>6</a></li><li><a class='sopeum-a' data-id='sopeum7'>7</a></li><li><a class='sopeum-a' data-id='sopeum8'>8</a></li><li><a class='sopeum-a' data-id='sopeum9'>9</a></li><li><a class='sopeum-a' data-id='sopeum10'>10</a></li><li><a class='sopeum-a' data-id='sopeum11'>11</a></li><li><a class='sopeum-a' data-id='sopeum12'>12</a></li><li><a class='sopeum-a' data-id='sopeum13'>13</a></li><li><a class='sopeum-a' data-id='sopeum14'>14</a></li><li><a class='sopeum-a' data-id='sopeum15'>15</a></li><li><a class='sopeum-a' data-id='sopeum16'>16</a></li><li><a class='sopeum-a' data-id='sopeum17'>17</a></li><li><a class='sopeum-a' data-id='sopeum18'>18</a></li><li><a class='sopeum-a' data-id='sopeum19'>19</a></li><li><a class='sopeum-a' data-id='sopeum20'>20</a></li></ul></div><div class='sopeum-akhir' id='selesaicepat'>Selesaikan Pengerjaan</div>");$(".penalaranumum").append(anusopeum);
