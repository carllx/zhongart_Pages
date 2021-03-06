/**
 * 来源
 *  https://gist.github.com/electricg/4435259
 */


// Which HTML element is the target of the event
export function mouseTarget(e) {
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;
    else if (e.srcElement) targ = e.srcElement;
    if (targ.nodeType == 3) // defeat Safari bug
        targ = targ.parentNode;
    return targ;
}

// Mouse position relative to the document
// From http://www.quirksmode.org/js/events_properties.html
export function mousePositionDocument(e) {
    var posx = 0;
    var posy = 0;
    if (!e) {
        var e = window.event;
    }
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return {
        x : posx,
        y : posy
    };
}

//  element 在page 的 位置 is on the page
// From http://www.quirksmode.org/js/findpos.html
export function findPos(obj) {
    var curleft = 0;
    var curtop  = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return {
        left : curleft,
        top : curtop
    };
}

// Mouse position relative to the element
// not working on IE7 and below
export function mousePositionElement(e) {

    var mousePosDoc = mousePositionDocument(e);
    var target = mouseTarget(e);
    var targetPos = findPos(target);
    var posx = mousePosDoc.x - targetPos.left;
    var posy = mousePosDoc.y - targetPos.top;
    return {
        x : posx,
        y : posy
    };
}


//如果ink 圆形的初始半径>1 ,这里就要加上他的半径
export function mouseCenterElement(e , r ){
    const mousePosDoc = mousePositionElement(e);

    return {
                x: mousePosDoc.x + r,
                y: mousePosDoc.y + r
            }
}
