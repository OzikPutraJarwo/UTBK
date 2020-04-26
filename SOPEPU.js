let cssSOPEPU = document.createElement('style');
cssSOPEPU.innerHTML = '.sopepu-menu{margin:20px 0 0;display:inline-block;width:100%}.sopepu-menu li a{width:100%;padding:5px 0;border-radius:5px;text-align:center;float:left;background:#19abea;color:#fff}.sopepu-menu li{list-style:none;margin:0;padding:5px;float:left}.sopepu-menu ul{display:grid;grid-template-columns:10% 10% 10% 10% 10% 10% 10% 10% 10% 10%}@media screen and (max-width:500px) {.sopepu-menu ul{grid-template-columns:20% 20% 20% 20% 20%}}.sopepu-menu li:hover{cursor:pointer}.sopepu-menu ul li a.active-a{background:#0d8bc1}.sopepu{display:none}.sopepu-active{display:block}';document.body.appendChild(cssSOPEPU);
// SOPEPU Timer
var timerSOPEPU=$("<div id='waktuSOPEPU'/>");$("#waktusubtest").prepend(timerSOPEPU),$("#tps3").click(function(){$('#waktuSOPEBU').hide();function a(a,b,c){function j(a){return a<=9?"0"+a:a}function k(){$(".pengetahuandanpemahamanumum").removeClass("jenis-active"),$(".jenis-menu").removeClass("mengkerut"),$("a.jenis-a[data-id=jenis4]").addClass("soalavail").removeClass("soalunavail"),$("a.jenis-a[data-id=jenis1], a.jenis-a[data-id=jenis2], a.jenis-a[data-id=jenis3]").addClass("soalunavail").removeClass("soalavail"),d.innerHTML="Waktu Subtest Selesai!"}function l(){jQuery(".sopepu-akhir").click(function(){$(this).data("clicked",!0)}),h=e-+new Date,h<1e3||jQuery(".sopepu-akhir").data("clicked")?k():(i=new Date(h),f=i.getUTCHours(),g=i.getUTCMinutes(),d.innerHTML=(f?f+":"+j(g):g)+":"+j(i.getUTCSeconds()),setTimeout(l,i.getUTCMilliseconds()+500))}var d,e,f,g,h,i;d=document.getElementById(a),e=+new Date+1e3*(60*b+c)+500,l()}$(".jenis-menu").addClass("mengkerut"),a("waktuSOPEPU",25,0)});
// SOPEPU Active
$(document).ready(function(){$(".sopepu-a").click(function(){$(".sopepu").removeClass("sopepu-active"),$(".sopepu[data-id='"+$(this).attr("data-id")+"']").addClass("sopepu-active"),$(".sopepu-a").removeClass("active-a"),$(this).parent().find(".sopepu-a").addClass("active-a")})});
// SOPEPU Section & Button
$('.pengetahuandanpemahamanumum section').addClass("sopepu");
var secSOPEPU = $('.pengetahuandanpemahamanumum').children('section'),
    qSOPEPU1 = secSOPEPU.eq(0),qSOPEPU2 = secSOPEPU.eq(1),qSOPEPU3 = secSOPEPU.eq(2),qSOPEPU4 = secSOPEPU.eq(3),qSOPEPU5 = secSOPEPU.eq(4),
    qSOPEPU6 = secSOPEPU.eq(5),qSOPEPU7 = secSOPEPU.eq(6),qSOPEPU8 = secSOPEPU.eq(7),qSOPEPU9 = secSOPEPU.eq(8),qSOPEPU10 = secSOPEPU.eq(9),
    qSOPEPU11 = secSOPEPU.eq(10),qSOPEPU12 = secSOPEPU.eq(11),qSOPEPU13 = secSOPEPU.eq(12),qSOPEPU14 = secSOPEPU.eq(13),qSOPEPU15 = secSOPEPU.eq(14),
    qSOPEPU16 = secSOPEPU.eq(15),qSOPEPU17 = secSOPEPU.eq(16),qSOPEPU18 = secSOPEPU.eq(17),qSOPEPU19 = secSOPEPU.eq(18),qSOPEPU20 = secSOPEPU.eq(19);
qSOPEPU1.attr("data-id", "sopepu1");
    qSOPEPU1.addClass("sopepu-active");
    qSOPEPU1.append("<a class='sopepu-a selanjutnya' data-id='sopepu2'>Selanjutnya ></a>");
qSOPEPU2.attr("data-id", "sopepu2");
    qSOPEPU2.append("<a class='sopepu-a sebelumnya' data-id='sopepu1'>< Sebelumnya</a>");
    qSOPEPU2.append("<a class='sopepu-a selanjutnya' data-id='sopepu3'>Selanjutnya ></a>");
qSOPEPU3.attr("data-id", "sopepu3");
    qSOPEPU3.append("<a class='sopepu-a sebelumnya' data-id='sopepu2'>< Sebelumnya</a>");
    qSOPEPU3.append("<a class='sopepu-a selanjutnya' data-id='sopepu4'>Selanjutnya ></a>");
qSOPEPU4.attr("data-id", "sopepu4");
    qSOPEPU4.append("<a class='sopepu-a sebelumnya' data-id='sopepu3'>< Sebelumnya</a>");
    qSOPEPU4.append("<a class='sopepu-a selanjutnya' data-id='sopepu5'>Selanjutnya ></a>");
qSOPEPU5.attr("data-id", "sopepu5");
    qSOPEPU5.append("<a class='sopepu-a sebelumnya' data-id='sopepu4'>< Sebelumnya</a>");
    qSOPEPU5.append("<a class='sopepu-a selanjutnya' data-id='sopepu6'>Selanjutnya ></a>");
qSOPEPU6.attr("data-id", "sopepu6");
    qSOPEPU6.append("<a class='sopepu-a sebelumnya' data-id='sopepu5'>< Sebelumnya</a>");
    qSOPEPU6.append("<a class='sopepu-a selanjutnya' data-id='sopepu7'>Selanjutnya ></a>");
qSOPEPU7.attr("data-id", "sopepu7");
    qSOPEPU7.append("<a class='sopepu-a sebelumnya' data-id='sopepu6'>< Sebelumnya</a>");
    qSOPEPU7.append("<a class='sopepu-a selanjutnya' data-id='sopepu8'>Selanjutnya ></a>");
qSOPEPU8.attr("data-id", "sopepu8");
    qSOPEPU8.append("<a class='sopepu-a sebelumnya' data-id='sopepu7'>< Sebelumnya</a>");
    qSOPEPU8.append("<a class='sopepu-a selanjutnya' data-id='sopepu9'>Selanjutnya ></a>");
qSOPEPU9.attr("data-id", "sopepu9");
    qSOPEPU9.append("<a class='sopepu-a sebelumnya' data-id='sopepu8'>< Sebelumnya</a>");
    qSOPEPU9.append("<a class='sopepu-a selanjutnya' data-id='sopepu10'>Selanjutnya ></a>");
qSOPEPU10.attr("data-id", "sopepu10");
    qSOPEPU10.append("<a class='sopepu-a sebelumnya' data-id='sopepu9'>< Sebelumnya</a>");
    qSOPEPU10.append("<a class='sopepu-a selanjutnya' data-id='sopepu11'>Selanjutnya ></a>");
qSOPEPU11.attr("data-id", "sopepu11");
    qSOPEPU11.append("<a class='sopepu-a sebelumnya' data-id='sopepu10'>< Sebelumnya</a>");
    qSOPEPU11.append("<a class='sopepu-a selanjutnya' data-id='sopepu12'>Selanjutnya ></a>");
qSOPEPU12.attr("data-id", "sopepu12");
    qSOPEPU12.append("<a class='sopepu-a sebelumnya' data-id='sopepu11'>< Sebelumnya</a>");
    qSOPEPU12.append("<a class='sopepu-a selanjutnya' data-id='sopepu13'>Selanjutnya ></a>");
qSOPEPU13.attr("data-id", "sopepu13");
    qSOPEPU13.append("<a class='sopepu-a sebelumnya' data-id='sopepu12'>< Sebelumnya</a>");
    qSOPEPU13.append("<a class='sopepu-a selanjutnya' data-id='sopepu14'>Selanjutnya ></a>");
qSOPEPU14.attr("data-id", "sopepu14");
    qSOPEPU14.append("<a class='sopepu-a sebelumnya' data-id='sopepu13'>< Sebelumnya</a>");
    qSOPEPU14.append("<a class='sopepu-a selanjutnya' data-id='sopepu15'>Selanjutnya ></a>");
qSOPEPU15.attr("data-id", "sopepu15");
    qSOPEPU15.append("<a class='sopepu-a sebelumnya' data-id='sopepu14'>< Sebelumnya</a>");
    qSOPEPU15.append("<a class='sopepu-a selanjutnya' data-id='sopepu16'>Selanjutnya ></a>");
qSOPEPU16.attr("data-id", "sopepu16");
    qSOPEPU16.append("<a class='sopepu-a sebelumnya' data-id='sopepu15'>< Sebelumnya</a>");
    qSOPEPU16.append("<a class='sopepu-a selanjutnya' data-id='sopepu17'>Selanjutnya ></a>");
qSOPEPU17.attr("data-id", "sopepu17");
    qSOPEPU17.append("<a class='sopepu-a sebelumnya' data-id='sopepu16'>< Sebelumnya</a>");
    qSOPEPU17.append("<a class='sopepu-a selanjutnya' data-id='sopepu18'>Selanjutnya ></a>");
qSOPEPU18.attr("data-id", "sopepu18");
    qSOPEPU18.append("<a class='sopepu-a sebelumnya' data-id='sopepu17'>< Sebelumnya</a>");
    qSOPEPU18.append("<a class='sopepu-a selanjutnya' data-id='sopepu19'>Selanjutnya ></a>");
qSOPEPU19.attr("data-id", "sopepu19");
    qSOPEPU19.append("<a class='sopepu-a sebelumnya' data-id='sopepu18'>< Sebelumnya</a>");
    qSOPEPU19.append("<a class='sopepu-a selanjutnya' data-id='sopepu20'>Selanjutnya ></a>");
qSOPEPU20.attr("data-id", "sopepu20");
    qSOPEPU20.append("<a class='sopepu-a sebelumnya' data-id='sopepu19'>< Sebelumnya</a>");
var anusopepu = $("<div class='sopepu-menu'><ul><li><a class='sopepu-a active-a' data-id='sopepu1'>1</a></li><li><a class='sopepu-a' data-id='sopepu2'>2</a></li><li><a class='sopepu-a' data-id='sopepu3'>3</a></li><li><a class='sopepu-a' data-id='sopepu4'>4</a></li><li><a class='sopepu-a' data-id='sopepu5'>5</a></li><li><a class='sopepu-a' data-id='sopepu6'>6</a></li><li><a class='sopepu-a' data-id='sopepu7'>7</a></li><li><a class='sopepu-a' data-id='sopepu8'>8</a></li><li><a class='sopepu-a' data-id='sopepu9'>9</a></li><li><a class='sopepu-a' data-id='sopepu10'>10</a></li><li><a class='sopepu-a' data-id='sopepu11'>11</a></li><li><a class='sopepu-a' data-id='sopepu12'>12</a></li><li><a class='sopepu-a' data-id='sopepu13'>13</a></li><li><a class='sopepu-a' data-id='sopepu14'>14</a></li><li><a class='sopepu-a' data-id='sopepu15'>15</a></li><li><a class='sopepu-a' data-id='sopepu16'>16</a></li><li><a class='sopepu-a' data-id='sopepu17'>17</a></li><li><a class='sopepu-a' data-id='sopepu18'>18</a></li><li><a class='sopepu-a' data-id='sopepu19'>19</a></li><li><a class='sopepu-a' data-id='sopepu20'>20</a></li></ul></div><div class='sopepu-akhir' id='selesaicepat'>Selesaikan Pengerjaan</div>");$(".pengetahuandanpemahamanumum").append(anusopepu);
