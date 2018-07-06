window.onload=function(){
    var div = document.querySelector('.button');

    div.onmousemove = function(e){
        //获取鼠标在button上的位置坐标
        //e.pageX返回的值是相对于文档的定位，向右为正，向下为正 - 元素的边框的外边缘距离与已定位的父容器（offsetparent）的左边距离（不包括元素的边框和父容器的边框）
        var x = e.pageX - e.target.offsetLeft
        var y = e.pageY - e.target.offsetTop

        e.target.style.setProperty('--q', 0 +'px')

        if(x<div.offsetWidth*0.4 && y<div.offsetHeight*0.4){
            //左上角0，0
            e.target.style.setProperty('--x', 5 +'deg') //或者x+'deg' 或者`${ y }deg`
            e.target.style.setProperty('--y', -5 +'deg')
            e.target.style.setProperty('--z', 0.5 +'deg')
            
        }else if(x>div.offsetWidth*0.6 && y>div.offsetHeight*0.6){
            //右下角3，3
            e.target.style.setProperty('--x', -5 +'deg') //或者x+'deg'
            e.target.style.setProperty('--y', 5 +'deg')
            e.target.style.setProperty('--z', 0.5 +'deg')

        }else if(x>div.offsetWidth*0.6 && y<div.offsetHeight*0.4){
            //右上角3，0
            e.target.style.setProperty('--x', 5 +'deg') //或者x+'deg'
            e.target.style.setProperty('--y', 5 +'deg')
            e.target.style.setProperty('--z', -0.5 +'deg')

        }else if(x<div.offsetWidth*0.4 && y>div.offsetHeight*0.6){
            //左下角0，3
            e.target.style.setProperty('--x', -5 +'deg') //或者x+'deg'
            e.target.style.setProperty('--y', -5 +'deg')
            e.target.style.setProperty('--z', -0.5 +'deg')

        }else if(x>div.offsetWidth*0.4 && x<div.offsetWidth*0.6 && y<div.offsetHeight*0.4){
            //上
            e.target.style.setProperty('--x', 5 +'deg') //或者x+'deg'
            e.target.style.setProperty('--y', 0 +'deg')
        }else if(x>div.offsetWidth*0.4 && x<div.offsetWidth*0.6 && y>div.offsetHeight*0.6){
            //下
            e.target.style.setProperty('--x', -5 +'deg') //或者x+'deg'
            e.target.style.setProperty('--y', 0 +'deg')
        }
        else if(x<div.offsetWidth*0.4 && y<div.offsetHeight*0.6 && y>div.offsetHeight*0.4){
            //左
            e.target.style.setProperty('--x', 0 +'deg') //或者x+'deg'
            e.target.style.setProperty('--y', -5 +'deg')
        }
        else if(x>div.offsetWidth*0.6 && y<div.offsetHeight*0.6 && y>div.offsetHeight*0.4){
            //右
            e.target.style.setProperty('--x', 0 +'deg') //或者x+'deg'
            e.target.style.setProperty('--y', 5 +'deg')
        }else if(x>div.offsetWidth*0.4 && x<div.offsetWidth*0.6 &&  y<div.offsetHeight*0.6 && y>div.offsetHeight*0.4){
            //中间
            e.target.style.setProperty('--x', 0 +'deg') //或者x+'deg'
            e.target.style.setProperty('--y', 0 +'deg')
        }


        div.onmousedown = function(e){
            e.target.style.setProperty('--q', -120 +'px')
            // document.getElementById('button').style.webkitTransform = "translateZ()"
        }

        div.onmouseup = function(e){
            e.target.style.setProperty('--q', 0 +'px')
            // document.getElementById('button').style.webkitTransform = "translateZ(-30px)"
        }
    }

    
}



