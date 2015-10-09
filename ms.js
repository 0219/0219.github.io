var tim=1;
setInterval("tim++",100);
var autourl=new Array();
autourl[1]='http://www.hg260.com/';
autourl[2]='hhttp://www.hg970.com/';
autourl[3]='http://www.hg582.com/';
function auto(url){
	var str=tim*10;
	if(url=='http://www.hg260.com/'){
		document.getElementById('em_1').innerHTML=str+'ms';
	}
	if(url=='http://www.hg970.com/'){
		document.getElementById('em_2').innerHTML=str+'ms';
	}
	if(url=='http://www.hg582.com/'){
		document.getElementById('em_3').innerHTML=str+'ms';
	}
	
}
function run(){
	for(var i=1;i<autourl.length;i++){
		document.write("<img src="+autourl[i]+"/"+Math.random()+" width=1 height=1 onerror=auto('"+autourl[i]+"') style='display:none'>");		
	}
}
run();
