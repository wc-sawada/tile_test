
var watchFontSizeAndTileJs = function(target, tileColumns = "", watchTime = 1000) {
	// 最初のbodyのフォントサイズを取得、格納
	var defultBodyFontSize = parseInt($("body").css("font-size"),10);

	setInterval(function(){
		// 現在のbodyのフォントサイズを取得、格納
		var nowBodyFontSize = parseInt($("body").css('font-size'), 10);
		// 現在のサイズが最初のサイズと異なる場合
		if (nowBodyFontSize !== defultBodyFontSize) {
			$(target).tile(tileColumns);
			// フォントサイズが変わったことを示すため、親要素にクラス付与
			$(target).parent().addClass("changeFontSize");
		// 現在のサイズがデフォルトのサイズと同じ場合
		} else {
			// 親要素にクラスが付与されていたら
			if ($(target).parent().hasClass("changeFontSize")) {
				// デフォルトより大きいまたは小さいサイズから変更されることになるので処理をしてからクラス名を外す
				$(target).tile(tileColumns);
				$(target).parent().removeClass("changeFontSize");
			}
		}
	}, watchTime);
};
$(function(){
	var ftChangeTile = new watchFontSizeAndTileJs("#fontSizeSample .sample", 4);
});

/*
$(function(){
	var allItems = [];
	allItems = $("body, body *").children();

	console.log(allItems);
	// body配下に要素がない場合、処理を終了
	if (allItems.length == 0) {
		return false;
	}
	
	if (allItems[0].firstChild) {
		
	}
*/
/*
	var allText = $("body").text().replace(/\s+/g, "").slice(0,3);
	console.log(allText);
	
	var allHtml = $("body").html().replace(/\s+/g, "");
	console.log(allHtml);	
	
	// parseInt($(".checkText").css('font-size'), 10)
	console.log(parseInt($(":contains(" + allText + ")").css("font-size"),10));
	$("*:contains(" + allText + ")").css("color", "red");
	console.log($(":contains(" + allText + ")"));
	*/
	




/*
	var allItems = $("body, body *").children();
	$(allItems).filter(function(){
		return $(this).text().trim() != "";
	}).length
	
	console.log(allItems);
*/
	/*
	$.each(allItems, function(index, val){
	
		if ((allItems[index].firstChild == "") || (allItems[index].firstChild == null)) {
			console.log(allItems[index].firstChild);
			console.log("firstChildなすび" + index);
			return false;
		}
	
		if ((allItems[index].firstChild.data == "") || (allItems[index].firstChild.data == null)) {
			console.log(allItems[index].firstChild.data);
			console.log("なすび" + index);
		}

	});
	
	
	*/
	
	
/*
	//var itemsAry = new Array;
	for (var i = 0; i < allItems.length; i++) {
		//allItems[i] = [];
		
		
		var items = [];
		
		items[i] = allItems[i].tagName.toLowerCase();
		items[i][allItems[i].tagName.toLowerCase()] = [];


		if (allItems[i].firstChild) {
			console.log(allItems[i].firstChild.data);
		} else {
			console.log("なすび");
		}
		

		//allItems[i].tagName.toLowerCase() = [];
		//allItems[i].tagName.toLowerCase() = allItems[i].firstChild.data.replace(/\s+/g, "");
	}
*/
	//console.log(allItems);
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

/*
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
*/