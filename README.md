# tile_test
ブラウザがズームされたことを感知してtile.jsを走らせるサンプル

# できるまでにやったこと
①指定要素の子要素(孫含む)を取得して、テキストが含まれるタグを探し出し、文字拡大の監視対象とする  
→とりあえず出来たけど処理が多い。多次元配列の祭りなので、サンプル外で試したら事故りそう…

②(①の応用)body配下の要素子要素(孫含む)を取得して、テキストが含まれるタグを探し出し、一番最初に見つけたタグを文字拡大の監視対象とする  
→$("セレクタ, セレクタ *").children();で子要素(孫含む)を全て取得できるが、直下の子要素→孫要素の順にみるので、配列内のindexが期待するものにならない為、無し

③body配下の文字列を取得し(.text())、そこから最初の3文字(最低3文字かな、と…)を取得して、:containsでフォントサイズを取得、監視対象とする  
→:contains(検索文字)で試しにフォントサイズを取得したら取れた。しかし、どの部分のフォントサイズなのか謎であるのと、本来の使い方はセレクタ:contains(検索文字)が正しいため、却下。

④bodyのフォントサイズを取得し、監視対象とする  
→いろいろやった結果、一番簡単で一番安全な方法な気がします(´;ω;｀)ｗ
　bodyにfont-size指定がされていなくてもフォントサイズのデフォルト値を取得できました。今まで考えた処理は何だったんだ…orz


## 【参考にした記事、学んだ記事】

↓忘れがち  
ニ次元配列のニ次元目にいきなり値を格納する場合、ひとつの次元ごとに配列の宣言をしなくてはならない  
http://d.hatena.ne.jp/sutara_lumpur/20091210/1260423598

↓忘れがち  
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

.children()で子要素と孫要素の値を取得する方法  
http://black-flag.net/jquery/20100407-952.html

parseInt()の第二引数  
http://03log.me/blog/2014-06-11-js-parseint.html

.toLowerCase()…文字列を小文字へ変換  
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

.replace(/\s+/g, "")…文字列中の空白文字(スペースやタブなど)を一括削除  
https://www.nishishi.com/javascript-tips/trim-space-chars.html

クロージャで、よりローカルに  
https://www.sejuku.net/blog/25026