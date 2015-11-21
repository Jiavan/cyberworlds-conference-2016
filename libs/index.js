/**
 * Created by Jia Van on 2015/11/1.
 */
function hiddenAndLoad(obj){
    $(document).ready(function () {
        loadContent(obj);
        $('#overview').animate({height: '0', opacity: '0'}, 800, function(){
            $('#overview').css('display', 'none');
            $('#display-overview').animate({opacity: '1'}, 1000);
        });
    });
}

function loadContent(obj){
    document.getElementById(('article')).innerText = "";
    $("#loading").css("display","block");
    var title = obj.innerHTML;
    document.getElementById(('command')).innerText = "Guest@CW2016: cat ~/" + title + " | more";
    var url = "./admin/getContent.php?title=" + title;
    /*setTimeout(function(){
        $('#article').load(encodeURI(url), function(){
            $("#loading").css("display","none");
        });
    }, 500);*/
    setTimeout(function () {
        var xmlhttp;
        if (window.XMLHttpRequest)
        {
            xmlhttp=new XMLHttpRequest();
        } else {
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                $("#loading").css("display","none");
                document.getElementById("article").innerHTML=xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }, 500);
}

$(document).ready(function () {
    var count = 0;
    $('#article').load('./admin/getContent.php?title=Venue');
    /**
     * chongqing sight pic display
     */
    $('#hotel').click(function(){
        count++;
        if(count % 2 == 1) {
            $('#chongqing-sight').animate({opacity: '1'}, 500);
        } else {
            $('#chongqing-sight').animate({opacity: '0'}, 500);
        }
    });
    
    $('#display-overview').click(function () {
        $('#overview').css('display', 'block');
        $('#overview').animate({height: '530px', opacity: '1'}, 800, function(){
            $('#display-overview').animate({opacity: '0'}, 1000);
        });
    });
});




function menuFix() {
    var sfEls = document.getElementById("nav").getElementsByTagName("li");
    for (var i=0; i<sfEls.length; i++) {
        sfEls[i].onmouseover=function() {
            this.className+=(this.className.length>0? " ": "") + "sfhover";
        }
        sfEls[i].onMouseDown=function() {
            this.className+=(this.className.length>0? " ": "") + "sfhover";
        }
        sfEls[i].onMouseUp=function() {
            this.className+=(this.className.length>0? " ": "") + "sfhover";
        }
        sfEls[i].onmouseout=function() {
            this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"),
                "");
        }
    }
}
window.onload=menuFix;