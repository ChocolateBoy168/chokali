/* here some andrew's method uncategorized  */
window.Chokali = window.chokali = (function () {
	var me = {
		VERSION: "0.0.0-dev",
		hasJqueryLib: function () {
			if (jQuery == null) {
				throw new Error("need Jquery Library");
				return false;
			} else {
				return true;
			}
		},
		clone: function (obj) {
			if (this.hasJqueryLib()) {
				return jQuery.extend(true, {}, obj);
			}
		},
		//need animate.css
		animateCss: function ($select, animationName, callback) {
			if (this.hasJqueryLib()) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				$select.addClass('animated ' + animationName).one(animationEnd, function () {
					$(this).removeClass('animated ' + animationName);
					if (typeof callback == "function") {
						callback.apply(this, arguments);
					}
				});
			}
		},
		math: {
			decimal_to_hex: function (d) {
				return d.toString(16);
			},
			hex_to_decimal: function (h) {
				return parseInt(h, 16);
			},
			translatePoint: function (x1, y1, x2, y2, scale) {
				//result = point1 + (point2-point1)*scale
				var result = [x1 + (x2 - x1) * scale, y1 + (y2 - y1) * scale];
				return result;
			},
			slope_to_angle: function (slope) {
				return Math.atan(slope) / Math.PI * 180;
			}
		}
	};
	return me;
})();

(function () {
	var scriptName = "chokali.core.js";
	var _getScriptLocation = (function () {
		var r = new RegExp("(^|(.*?\\/))(" + scriptName + ")(\\?|$)"),
			s = document.getElementsByTagName('script'),
			src, m, l = "";
		for (var i = 0, len = s.length; i < len; i++) {
			src = s[i].getAttribute('src');
			if (src) {
				m = src.match(r);
				if (m) {
					l = m[1];
					break;
				}
			}
		}
		return (function () {
			return l;
		});
	})();
	var cssFiles = [

	];
	var jsFiles = [];
	jsFiles.push(
		"chokali.uncategorized.js"
	);
	var host = _getScriptLocation() + "";
	//load css
	var cssTags = new Array(cssFiles.length);
	for (var i = 0, len = cssFiles.length; i < len; i++) {
		cssTags[i] = "<link rel='stylesheet' type='text/css' href='" + host + cssFiles[i] + "' />";
	}
	if (cssTags.length > 0) {
		document.write(cssTags.join(""));
	}
	//load js
	var scriptTags = new Array(jsFiles.length);
	for (var i = 0, len = jsFiles.length; i < len; i++) {
		scriptTags[i] = "<script src='" + host + jsFiles[i] + "'></script>";
	}
	if (scriptTags.length > 0) {
		document.write(scriptTags.join(""));
	}

})();