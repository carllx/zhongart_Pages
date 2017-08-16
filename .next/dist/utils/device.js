'use strict';

// Device.js
// (c) 2014 Matthew Hudson
// Device.js is freely distributable under the MIT license.
// For all details and documentation:
// http://matthewhudson.me/projects/device.js/


/*
  device   : desktop / moblie / tablet    --2.
  direction: portrait / landscape
  OS       : android / ios / windows / blackberry   --1.
  browser  : chrome /  firefox / safari / IE / wechat /
  language : cn / en / it
*/

// 
/**
 * Checks if browser is mobile.
 * @return {Boolean} True if mobile browser detected.
 */
// var isMobile = (function () {
//   var _isMobile = false;
//   (function (a) {
//     // eslint-disable-next-line no-useless-escape
//     if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
//       _isMobile = true;
//     }
//     if (isIOS() || isTablet()) {
//       _isMobile = true;
//     }
//   })(window.navigator.userAgent || window.navigator.vendor || window.opera);

//   return function () { return _isMobile; };
// })();
// module.exports.isMobile = isMobile;

/**
 *  Detect tablet devices.
 *  @param {string} mockUserAgent - Allow passing a mock user agent for testing.
 */

/**
 * 检测 if browser is mobile.
 * @return {Boolean} True if mobile browser detected.
 */
var isMobile = function isMobile() {
  var _isMobile = false;
  var _ugent = window.navigator.userAgent || window.navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(_ugent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_ugent.substr(0, 4))) {
    _isMobile = true;
  }
  if (isIOS() || isTablet()) {
    _isMobile = true;
  }
  return _isMobile;
};

module.exports.isMobile = isMobile;

/**
 * 检测是否 browser is Tablet.
 * @return {Boolean} True if Tablet browser detected.
 */
function isTablet(mockUserAgent) {
  var userAgent = mockUserAgent || window.navigator.userAgent;
  return (/ipad|Nexus (7|9)|xoom|sch-i800|playbook|tablet|kindle/i.test(userAgent)
  );
}
module.exports.isTablet = isTablet;

/**
 * 检测是否 ios is apple ios.
 * @return {Boolean} True if apple ios detected.
 */
function isIOS() {
  return (/iPad|iPhone|iPod/.test(window.navigator.platform)
  );
}
module.exports.isIOS = isIOS;

/**
 * 检测是否 ios is apple ios.
 * @return {Boolean} True if apple ios detected.
 */
function isGearVR() {
  return (/SamsungBrowser.+Mobile VR/i.test(window.navigator.userAgent)
  );
}
module.exports.isGearVR = isGearVR;

/**
 * 检测 手机 device 方向轴orientation.
 * @return {Boolean} True if landscape orientation.
 */
module.exports.isLandscape = function () {
  return window.orientation === 90 || window.screen.orientation.angle === 90 || window.orientation === -90 || window.screen.orientation.angle === -90 || window.innerHeight / window.innerWidth < 1;
};

/**
 * 检测 -设备是否 is iOS and 低于 version 10.
 */
module.exports.isIOSOlderThan10 = function (userAgent) {
  return (/(iphone|ipod|ipad).*os.(7|8|9)/i.test(userAgent)
  );
};

module.exports.getLanguer = function () {

  var navLanguser = (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.browserLanguage || navigator.systemLanguage).toLowerCase();
  if (/zh/i.test(navLanguser)) {
    return 'zh';
  } else if (/it/i.test(navLanguser)) {
    return 'it';
  } else {
    return 'en';
  }
};

/* 
  设置html fontsize 单位
  使用bpr自动设置document fontsize生成rem单位,让所有设备按相同的比例显示
  @html style 注入换算出的 fonsize
  
  参考:
  [精通移动端布局 - 实践篇 -] (http://www.cnblogs.com/HCJJ/p/6408363.html)
  [amfe-lib-flexible(代码) -] (https://github.com/amfe/lib-flexible/blob/master/src/flexible.js)

*/
module.exports.setREM = function () {

  var $doc = document.documentElement,
      devicePixelRatio = window.devicePixelRatio,
      width = $doc.getBoundingClientRect().width,
      baseWidth = $doc.dataset.basewidth * 1 || 640,
      ratio = width / baseWidth * 100,
      rem = ratio < 100 ? ratio < 50 ? 50 : ratio : 100,
      event = 'onorientationchange' in window ? 'onorientationchange' : 'resize';

  // 一下针对iphone ,至于 mac retina就不知道了
  if (isIOS() == true) {
    // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
    if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
      dpr = 3;
    } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
      dpr = 2;
    } else {
      dpr = 1;
    }
  } else {
    // 其他设备下，仍旧使用1倍的方案
    dpr = 1;
  }
  var dpr = 0;

  $doc.style.fontSize = rem + 'px';
  console.log('bpr:', devicePixelRatio);
  console.log('fontSize:', rem + 'px');
};

/**
 * Check if running in a browser or spoofed browser (bundler).
 * We need to check a node api that isn't mocked on either side.
 * `require` and `module.exports` are mocked in browser by bundlers.
 * `window` is mocked in node.
 * `process` is also mocked by browserify, but has custom properties.
 */

module.exports.isBrowserEnvironment = !!(!process || process.browser);

/**
 * Check if running in node on the server.
 */
module.exports.isNodeEnvironment = !module.exports.isBrowserEnvironment;

//var THREE = require('../lib/three');
// var dolly = new THREE.Object3D();
// var controls = new THREE.VRControls(dolly);

// /**
//  * Determine if a headset is connected by checking if the orientation is available.
//  */
// function checkHeadsetConnected () {
//   var orientation;
//   var vrDisplay = controls.getVRDisplay();

//   // If `isConnected` is available, just use that.
//   if (vrDisplay && 'isConnected' in vrDisplay) { return vrDisplay.isConnected; }

//   controls.update();
//   orientation = dolly.quaternion;
//   if (orientation._x !== 0 || orientation._y !== 0 || orientation._z !== 0) {
//     return true;
//   }
//   return false;
// }
// module.exports.checkHeadsetConnected = checkHeadsetConnected;

// /**
//  * Check for positional tracking.
//  */
// function checkHasPositionalTracking () {
//   var vrDisplay = controls.getVRDisplay();
//   if (isMobile() || isGearVR()) { return false; }
//   return vrDisplay && vrDisplay.capabilities.hasPosition;
// }
// module.exports.checkHasPositionalTracking = checkHasPositionalTracking;