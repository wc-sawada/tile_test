$(function(){
/*
	$("#defultSample").click(function() { $("#defultSample .sample").tile(4); });
	$("#fontSizeSample .sample").tile(4);

	// cssで最初に指定されるフォントサイズ
	var defultFontSize = parseInt($(".checkText").css('font-size'), 10);

	setInterval(function(){
		// 現在のフォントサイズを取得、格納
		// parseIntでpxを排除、10進数を指定
		var nowFontSize = parseInt($(".checkText").css('font-size'), 10);
		// 現在のサイズがデフォルトのサイズと異なる場合
		if (nowFontSize != defultFontSize) {
			$("#fontSizeSample .sample").tile(4);
			// フォントサイズが変わったことを示すためクラス付与
			$("#fontSizeSample").addClass("changeFontSize");
		// 現在のサイズがデフォルトのサイズと同じ場合
		} else {
			// クラスが付与されていたら
			if ($("#fontSizeSample").hasClass("changeFontSize")) {
				$("#fontSizeSample .sample").tile(4);
				// デフォルトより大きいまたは小さいサイズから変更された場合のため
				// 同じになったので処理をしてからクラス名を外す
				$("#fontSizeSample").removeClass("changeFontSize");
			}
		}
	}, 1000);
*/
	// 指定した要素の配下の全ての子要素を取得
	var target = ".testArea .parent .target"
	var items = $(target + " *").children();

	var itemsAry = new Array;
	for (var i = 0; i < items.prevObject.length; i++) {
		itemsAry[i] = [];
		itemsAry[i][items.prevObject[i].tagName.toLowerCase()] = [];
		itemsAry[i][items.prevObject[i].tagName.toLowerCase()] = items.prevObject[i].firstChild.data.replace(/\s+/g, "");
	}
	
	console.log(itemsAry);
	
	var tagName = null;
	$.each(itemsAry, function(){
		var keys = new Array;
		keys = Object.keys(this)

		for (var j = 0; j < keys.length; j++) {
			if (this[keys[j]] == "") {
			} else {
				tagName = keys[j];
				return false;
			}
		}
	});

	var whatchTarget = target + " " + tagName;
	
	var defultFontSize = parseInt($(whatchTarget).css('font-size'), 10);

	setInterval(function(){
		// 現在のフォントサイズを取得、格納
		// parseIntでpxを排除、10進数を指定
		var nowFontSize = parseInt($(whatchTarget).css('font-size'), 10);
		console.log(nowFontSize);
		// 現在のサイズがデフォルトのサイズと異なる場合
		if (nowFontSize != defultFontSize) {
			$(target).tile(4);
			// フォントサイズが変わったことを示すためクラス付与
			$(target).parent().addClass("changeFontSize");
		// 現在のサイズがデフォルトのサイズと同じ場合
		} else {
			// クラスが付与されていたら
			if ($(target).parent().hasClass("changeFontSize")) {
				$(target).tile(4);
				// デフォルトより大きいまたは小さいサイズから変更された場合のため
				// 同じになったので処理をしてからクラス名を外す
				$(target).parent().removeClass("changeFontSize");
			}
		}
	}, 1000);
	
});
