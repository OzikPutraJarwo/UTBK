let cssSOPEBU = document.createElement('style');
cssSOPEBU.innerHTML = '.sopebu-menu{margin:20px 0 0;display:inline-block;width:100%}.sopebu-menu li a{width:100%;padding:5px 0;border-radius:5px;text-align:center;float:left;background:#19abea;color:#fff}.sopebu-menu li{list-style:none;margin:0;padding:5px;float:left}.sopebu-menu ul{display:grid;grid-template-columns:10% 10% 10% 10% 10% 10% 10% 10% 10% 10%}@media screen and (max-width:500px) {.sopebu-menu ul{grid-template-columns:20% 20% 20% 20% 20%}}.sopebu-menu li:hover{cursor:pointer}.sopebu-menu ul li a.active-a{background:#0d8bc1}.sopebu{display:none}.sopebu-active{display:block}';document.body.appendChild(cssSOPEBU);
// SOPEBU Timer
var timerSOPEBU=$("<div id='waktuSOPEBU'/>");$("#waktusubtest").prepend(timerSOPEBU),$("#tps2").click(function(){$('#waktuSOPEUM').hide();function a(a,b,c){function j(a){return a<=9?"0"+a:a}function k(){$(".pemahamanbacaandanmenulis").removeClass("jenis-active"),$(".jenis-menu").removeClass("mengkerut"),$("a.jenis-a[data-id=jenis3]").addClass("soalavail").removeClass("soalunavail"),$("a.jenis-a[data-id=jenis1], a.jenis-a[data-id=jenis2], a.jenis-a[data-id=jenis4]").addClass("soalunavail").removeClass("soalavail"),d.innerHTML="Waktu Subtest Selesai!"}function l(){jQuery(".sopebu-akhir").click(function(){$(this).data("clicked",!0)}),h=e-+new Date,h<1e3||jQuery(".sopebu-akhir").data("clicked")?k():(i=new Date(h),f=i.getUTCHours(),g=i.getUTCMinutes(),d.innerHTML=(f?f+":"+j(g):g)+":"+j(i.getUTCSeconds()),setTimeout(l,i.getUTCMilliseconds()+500))}var d,e,f,g,h,i;d=document.getElementById(a),e=+new Date+1e3*(60*b+c)+500,l()}$(".jenis-menu").addClass("mengkerut"),a("waktuSOPEBU",25,0)});
// SOPEBU Active
$(document).ready(function(){$(".sopebu-a").click(function(){$(".sopebu").removeClass("sopebu-active"),$(".sopebu[data-id='"+$(this).attr("data-id")+"']").addClass("sopebu-active"),$(".sopebu-a").removeClass("active-a"),$(this).parent().find(".sopebu-a").addClass("active-a")})});
// SOPEBU Section & Button
$('.pemahamanbacaandanmenulis section').addClass("sopebu");
var secSOPEBU = $('.pemahamanbacaandanmenulis').children('section'),
    qSOPEBU1 = secSOPEBU.eq(0),qSOPEBU2 = secSOPEBU.eq(1),qSOPEBU3 = secSOPEBU.eq(2),qSOPEBU4 = secSOPEBU.eq(3),qSOPEBU5 = secSOPEBU.eq(4),
    qSOPEBU6 = secSOPEBU.eq(5),qSOPEBU7 = secSOPEBU.eq(6),qSOPEBU8 = secSOPEBU.eq(7),qSOPEBU9 = secSOPEBU.eq(8),qSOPEBU10 = secSOPEBU.eq(9),
    qSOPEBU11 = secSOPEBU.eq(10),qSOPEBU12 = secSOPEBU.eq(11),qSOPEBU13 = secSOPEBU.eq(12),qSOPEBU14 = secSOPEBU.eq(13),qSOPEBU15 = secSOPEBU.eq(14),
    qSOPEBU16 = secSOPEBU.eq(15),qSOPEBU17 = secSOPEBU.eq(16),qSOPEBU18 = secSOPEBU.eq(17),qSOPEBU19 = secSOPEBU.eq(18),qSOPEBU20 = secSOPEBU.eq(19);
qSOPEBU1.attr("data-id", "sopebu1");
    qSOPEBU1.addClass("sopebu-active");
    qSOPEBU1.append("<a class='sopebu-a selanjutnya' data-id='sopebu2'>Selanjutnya ></a>");
qSOPEBU2.attr("data-id", "sopebu2");
    qSOPEBU2.append("<a class='sopebu-a sebelumnya' data-id='sopebu1'>< Sebelumnya</a>");
    qSOPEBU2.append("<a class='sopebu-a selanjutnya' data-id='sopebu3'>Selanjutnya ></a>");
qSOPEBU3.attr("data-id", "sopebu3");
    qSOPEBU3.append("<a class='sopebu-a sebelumnya' data-id='sopebu2'>< Sebelumnya</a>");
    qSOPEBU3.append("<a class='sopebu-a selanjutnya' data-id='sopebu4'>Selanjutnya ></a>");
qSOPEBU4.attr("data-id", "sopebu4");
    qSOPEBU4.append("<a class='sopebu-a sebelumnya' data-id='sopebu3'>< Sebelumnya</a>");
    qSOPEBU4.append("<a class='sopebu-a selanjutnya' data-id='sopebu5'>Selanjutnya ></a>");
qSOPEBU5.attr("data-id", "sopebu5");
    qSOPEBU5.append("<a class='sopebu-a sebelumnya' data-id='sopebu4'>< Sebelumnya</a>");
    qSOPEBU5.append("<a class='sopebu-a selanjutnya' data-id='sopebu6'>Selanjutnya ></a>");
qSOPEBU6.attr("data-id", "sopebu6");
    qSOPEBU6.append("<a class='sopebu-a sebelumnya' data-id='sopebu5'>< Sebelumnya</a>");
    qSOPEBU6.append("<a class='sopebu-a selanjutnya' data-id='sopebu7'>Selanjutnya ></a>");
qSOPEBU7.attr("data-id", "sopebu7");
    qSOPEBU7.append("<a class='sopebu-a sebelumnya' data-id='sopebu6'>< Sebelumnya</a>");
    qSOPEBU7.append("<a class='sopebu-a selanjutnya' data-id='sopebu8'>Selanjutnya ></a>");
qSOPEBU8.attr("data-id", "sopebu8");
    qSOPEBU8.append("<a class='sopebu-a sebelumnya' data-id='sopebu7'>< Sebelumnya</a>");
    qSOPEBU8.append("<a class='sopebu-a selanjutnya' data-id='sopebu9'>Selanjutnya ></a>");
qSOPEBU9.attr("data-id", "sopebu9");
    qSOPEBU9.append("<a class='sopebu-a sebelumnya' data-id='sopebu8'>< Sebelumnya</a>");
    qSOPEBU9.append("<a class='sopebu-a selanjutnya' data-id='sopebu10'>Selanjutnya ></a>");
qSOPEBU10.attr("data-id", "sopebu10");
    qSOPEBU10.append("<a class='sopebu-a sebelumnya' data-id='sopebu9'>< Sebelumnya</a>");
    qSOPEBU10.append("<a class='sopebu-a selanjutnya' data-id='sopebu11'>Selanjutnya ></a>");
qSOPEBU11.attr("data-id", "sopebu11");
    qSOPEBU11.append("<a class='sopebu-a sebelumnya' data-id='sopebu10'>< Sebelumnya</a>");
    qSOPEBU11.append("<a class='sopebu-a selanjutnya' data-id='sopebu12'>Selanjutnya ></a>");
qSOPEBU12.attr("data-id", "sopebu12");
    qSOPEBU12.append("<a class='sopebu-a sebelumnya' data-id='sopebu11'>< Sebelumnya</a>");
    qSOPEBU12.append("<a class='sopebu-a selanjutnya' data-id='sopebu13'>Selanjutnya ></a>");
qSOPEBU13.attr("data-id", "sopebu13");
    qSOPEBU13.append("<a class='sopebu-a sebelumnya' data-id='sopebu12'>< Sebelumnya</a>");
    qSOPEBU13.append("<a class='sopebu-a selanjutnya' data-id='sopebu14'>Selanjutnya ></a>");
qSOPEBU14.attr("data-id", "sopebu14");
    qSOPEBU14.append("<a class='sopebu-a sebelumnya' data-id='sopebu13'>< Sebelumnya</a>");
    qSOPEBU14.append("<a class='sopebu-a selanjutnya' data-id='sopebu15'>Selanjutnya ></a>");
qSOPEBU15.attr("data-id", "sopebu15");
    qSOPEBU15.append("<a class='sopebu-a sebelumnya' data-id='sopebu14'>< Sebelumnya</a>");
    qSOPEBU15.append("<a class='sopebu-a selanjutnya' data-id='sopebu16'>Selanjutnya ></a>");
qSOPEBU16.attr("data-id", "sopebu16");
    qSOPEBU16.append("<a class='sopebu-a sebelumnya' data-id='sopebu15'>< Sebelumnya</a>");
    qSOPEBU16.append("<a class='sopebu-a selanjutnya' data-id='sopebu17'>Selanjutnya ></a>");
qSOPEBU17.attr("data-id", "sopebu17");
    qSOPEBU17.append("<a class='sopebu-a sebelumnya' data-id='sopebu16'>< Sebelumnya</a>");
    qSOPEBU17.append("<a class='sopebu-a selanjutnya' data-id='sopebu18'>Selanjutnya ></a>");
qSOPEBU18.attr("data-id", "sopebu18");
    qSOPEBU18.append("<a class='sopebu-a sebelumnya' data-id='sopebu17'>< Sebelumnya</a>");
    qSOPEBU18.append("<a class='sopebu-a selanjutnya' data-id='sopebu19'>Selanjutnya ></a>");
qSOPEBU19.attr("data-id", "sopebu19");
    qSOPEBU19.append("<a class='sopebu-a sebelumnya' data-id='sopebu18'>< Sebelumnya</a>");
    qSOPEBU19.append("<a class='sopebu-a selanjutnya' data-id='sopebu20'>Selanjutnya ></a>");
qSOPEBU20.attr("data-id", "sopebu20");
    qSOPEBU20.append("<a class='sopebu-a sebelumnya' data-id='sopebu19'>< Sebelumnya</a>");
var anusopebu = $("<div class='sopebu-menu'><ul><li><a class='sopebu-a active-a' data-id='sopebu1'>1</a></li><li><a class='sopebu-a' data-id='sopebu2'>2</a></li><li><a class='sopebu-a' data-id='sopebu3'>3</a></li><li><a class='sopebu-a' data-id='sopebu4'>4</a></li><li><a class='sopebu-a' data-id='sopebu5'>5</a></li><li><a class='sopebu-a' data-id='sopebu6'>6</a></li><li><a class='sopebu-a' data-id='sopebu7'>7</a></li><li><a class='sopebu-a' data-id='sopebu8'>8</a></li><li><a class='sopebu-a' data-id='sopebu9'>9</a></li><li><a class='sopebu-a' data-id='sopebu10'>10</a></li><li><a class='sopebu-a' data-id='sopebu11'>11</a></li><li><a class='sopebu-a' data-id='sopebu12'>12</a></li><li><a class='sopebu-a' data-id='sopebu13'>13</a></li><li><a class='sopebu-a' data-id='sopebu14'>14</a></li><li><a class='sopebu-a' data-id='sopebu15'>15</a></li><li><a class='sopebu-a' data-id='sopebu16'>16</a></li><li><a class='sopebu-a' data-id='sopebu17'>17</a></li><li><a class='sopebu-a' data-id='sopebu18'>18</a></li><li><a class='sopebu-a' data-id='sopebu19'>19</a></li><li><a class='sopebu-a' data-id='sopebu20'>20</a></li></ul></div><div class='sopebu-akhir' id='selesaicepat'>Selesaikan Pengerjaan</div>");$(".pemahamanbacaandanmenulis").append(anusopebu);
