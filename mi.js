/**
 * Created by Admin on 2018/1/27.
 */
window.onload=function () {
//  banner
    let div=document.querySelector('.banner');
    let banner=document.querySelectorAll('ul.img_box li');
    let left=document.querySelector('.banner_jiantou_left');
    let right=document.querySelector('.banner_jiantou_right');
    let circle=document.querySelectorAll('ul.lunbodian li')
    let n=0;
    let flag=true;
    function move() {
        // if(!flag){
        //     return;
        // }
        // flag=false;
        n++;
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            circle[index].classList.remove('act');
        })
        banner[n].className='active';
        circle[n].classList.add('act');
    }
    let time=setInterval(move,2000);
    div.onmouseover=function () {
        clearInterval(time);
    }
    div.onmouseout=function () {
        time=setInterval(move,2000);
    }
    right.onclick=function () {
        // if(!flag){
        //     return;
        // }
        // flag=false;
        n++;
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            circle[index].classList.remove('act');
        })
        banner[n].className='active';
        circle[n].classList.add('act');
    }
    left.onclick=function () {
        // if(!flag){
        //     return;
        // }
        // flag=false;
        n--;
        if(n<0){
            n=banner.length-1;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            circle[index].classList.remove('act');
        })
        banner[n].className='active';
        circle[n].classList.add('act');
    }
    circle.forEach(function (value,index) {
        // if(!flag){
        //     return;
        // }
        // flag=false;
        value.onclick=function () {
            circle.forEach(function (val,ind) {
                val.classList.remove('act');
                banner[ind].classList.remove('active');
            })
            this.classList.add('act');
            banner[index].classList.add('active');
        }
    })
    // banner.forEach(function (value) {
    //     value.addEventListener('transitionend',function () {
    //         flag=true;
    //     })
    // })
//   change
    function change(a,b) {
        let chose=document.querySelectorAll(a);
        let main=document.querySelectorAll(b);
        chose.forEach(function (dom,index) {
            dom.onmouseover=function () {
                chose.forEach(function (val,ind) {
                    val.classList.remove('active_');
                    main[ind].classList.remove('active_');
                })
                this.classList.add('active_');
                main[index].classList.add('active_');
            }
        })
    }
    change('.top_right .right_remen','.jiadain .jiadian_bottom .bottom_right');
    change('.zhineng_right .znright_remen','#zhineng .bottom_right');
    change('.dapei_right a','#dapei .bottom_right');
    change('.peijian_right a','#peijian .bottom_right')
    change('.zhoubian a','#zhoubian .bottom_right')






}
