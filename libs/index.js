/**
 * Created by Jia Van on 2015/11/1.
 */

 /**
  * create xhr object
  * @returns {*} xhr obj
  */
var xhr = createXHR();
xhr.onreadystatechange = function () {
    if (xhr.readState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            $("#loading").css("display","none");
            document.getElementById("article").innerHTML=xhr.responseText;
        } else {
            throw new Error('request error ' + xhr.status);
        }
    }
};

 function createXHR() {
     if (typeof XMLHttpRequest != 'undefined') {
         return new XMLHttpRequest();
     } else if (typeof ActiveXObject != 'undefined') {

         // before ie7 version
         if (typeof arguments.callee.activeXString != 'string') {
             var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0',
                     'MSXML2.XMLHttp'],
                 i,
                 len;

             for (i = 0, len = versions.length; i < len; i++) {
                 try {
                     new ActiveXObject(versions[i]);
                     arguments.callee.activeXString = versions[i];
                     break;
                 } catch (ex) {
                     //deal error
                     console.log(ex.message);
                 }
             }
         }

         return new ActiveXObject(arguments.callee.activeXString);
     } else {
         throw new Error('no xhr object available.');
     }
 }

/**
 * hidden div
 * @param obj click node
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
    var title = obj.innerHTML;
    var url = "./admin/getContent.php?title=" + title;
    xhr.open('get', url, true);
    xhr.send(null);
}

$(document).ready(function () {
    var count = 0;
    $('#article').load('./admin/getContent.php?title=Submission');
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
