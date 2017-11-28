/*
* @Author: aicai
* @Date:   2017-11-10 22:57:30
* @Last Modified by:   aicai
* @Last Modified time: 2017-11-23 00:50:08
*/
window.onload=function(){
    // 头部选项卡
    let yd_box=document.querySelectorAll('.yd-box');
    let xiaogio_ul=document.querySelectorAll('.xiaogio-ul');
    // console.log(xiaogio_ul);
    for(let i=0;i<yd_box.length;i++){
    	yd_box[i].onmouseover=function(){
             xiaogio_ul[i].style.display='block';
    	}
    	yd_box[i].onmouseout=function(){
             xiaogio_ul[i].style.display='none';
    	}
    }


	let banner=document.getElementsByClassName("banner-box")[0];
	let lis=document.getElementsByClassName("banner-pic");
	let width=banner.offsetWidth;
	let after=document.getElementsByClassName("bashou-right")[0];
	let forward=document.getElementsByClassName("bashou-left")[0];
	let circle=document.getElementsByClassName("circle")[0];
	let circle_lis=circle.getElementsByTagName("li");
	let now=next=0;
	let t;
	let flag=true;
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(fn,3000);
	}
	after.onclick=function(){
		if (flag) {
			fn();
			flag=false;
		}
	}
	forward.onclick=function(){
		if (flag) {
			fn1();
			flag=false;
		}
	}
	t=setInterval(fn,3000);
	for(let i=0;i<circle_lis.length;i++){
		circle_lis[i].onclick=function(){
			if (flag) {
			for(let j=0;j<circle_lis.length;j++){
				circle_lis[j].style.background="#ccc";
			}
			circle_lis[i].style.background="#E50166";
			if (i==now) {return;}
			else if (i<now) {
				lis[i].style.left=`-${width}px`;
				animate(lis[now],{left:width});
				animate(lis[i],{left:0},function(){
				flag=true;});
			}
			else if (i>now) {
				lis[i].style.left=`${width}px`;
				animate(lis[now],{left:-width});
				animate(lis[i],{left:0},function(){
				flag=true;});
			}
			now=next=i;
			}
			flag=false;
		}
	}
	function fn(){
		next++;
		if (next==lis.length) {
			next=0;
		}
		lis[next].style.left=`${width}px`;
		animate(lis[now],{left:-width});
		animate(lis[next],{left:0},function(){
			flag=true;});
		for(let i=0;i<circle_lis.length;i++){
			circle_lis[i].style.background="#ccc";
		}
		circle_lis[next].style.background="#E50166";
		now=next;
	}
	function fn1(){
		next--;
		if (next==-1) {
			next=lis.length-1;
		}
		lis[next].style.left=`-${width}px`;
		animate(lis[now],{left:width});
		animate(lis[next],{left:0},function(){
			flag=true;
		});
		for(let i=0;i<circle_lis.length;i++){
			circle_lis[i].style.background="#ccc";
		}
		circle_lis[next].style.background="#E50166";
		now=next;
	}

	// 顶部二维码的显示和消失
    let erweima=document.querySelector(".zgydewmli");
    let erweima_content=document.querySelector(".client_erweima");
    erweima.onmouseover=function(){
       erweima_content.style.display='block'
        erweima_content.style.display='flex'

    }
    erweima.onmouseout=function(){
       erweima_content.style.display='none'
    }
	//优惠轮播
	let section3=document.getElementsByClassName("section3")[0];
	let youhui=document.getElementsByClassName("youhui")[0];
	let youhui_lis=youhui.getElementsByTagName("li");
	let youhui_width=youhui_lis[0].offsetWidth+10;
	let section3_left=document.getElementsByClassName("section3-left")[0];
	let section3_right=document.getElementsByClassName("section3-right")[0];
	console.log(section3);
	let t2;
	let nums=0;
	section3.onmouseover=function(){
		clearInterval(t2);
	}
	section3.onmouseout=function(){
		t2=setInterval(fn2,3000);
	}
	t2=setInterval(fn2,3000);
	section3_right.onclick=fn2;
	section3_left.onclick=fn3;
	function fn2(){
		nums++;
		if (nums<8) {
			animate(youhui,{left:-nums*youhui_width})
		}
		else if (nums==8) {
			animate(youhui,{left:-nums*youhui_width},function(){
				youhui.style.left=0;
				nums=0;
			})
		}
	}
	function fn3(){
		if (nums==0) {
			nums=8;
			youhui.style.left=`-${nums*youhui_width}px`;
		}
		nums--;
		animate(youhui,{left:-nums*youhui_width})
	}

	// 底部公告开始编写
   let middle=document.querySelector('.middle');
   let gonggao=document.querySelector('.middle_box');
   let gonggao_li=gonggao.querySelectorAll('li');
   let rbtn=document.querySelector('.rbtn');
   let rbtn_left=rbtn.querySelector('.left');
   let rbtn_right=rbtn.querySelector('.right');
   console.log(gonggao,gonggao_li,rbtn_left,rbtn_right);
   let gonggao_tt=setInterval(gonggaoFun, 4000);
   let gonggao_width=gonggao_li[0].offsetWidth;
   console.log(gonggao_width,middle)
   let flag2=true;
   function gonggaoFun(){
     /*gonggao.style.left=-gonggao_width+'px';
     let gonggao_first=gonggao_li.firstElementChild;
     gonggao.appendChild(gonggao_first);
     gonggao.style.left=0;*/
     animate(gonggao,{left:-gonggao_width}, 10,()=>{
         let gonggao_first=gonggao.firstElementChild;
         console.log(gonggao_first);
         gonggao.appendChild(gonggao_first);
         gonggao.style.left=0;
         flag2=true;
     })
   }
    function gonggaoFun1(){
       let gonggao_last=gonggao.lastElementChild;
       let gonggao_first=gonggao.firstElementChild;
       gonggao.insertBefore(gonggao_last,gonggao_first);
       gonggao.style.left=-gonggao_width+'px';
       animate(gonggao,{left:0},10,()=>{flag2=true})
   }
    rbtn_left.onclick=function(){
       if (!flag2) {
          return;
        }
        flag2=false;
         gonggaoFun1();
    }
    rbtn_right.onclick=function(){
        if (!flag2) {
          return;
        }
        flag2=false;
        gonggaoFun();
    }
     middle.onmouseenter=function(){
        clearInterval(gonggao_tt);
       }
     middle.onmouseleave=function(){
        clearInterval(gonggao_tt);
        gonggao_tt=setInterval(gonggaoFun, 4000);
     }
}