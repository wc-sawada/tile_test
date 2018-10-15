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
