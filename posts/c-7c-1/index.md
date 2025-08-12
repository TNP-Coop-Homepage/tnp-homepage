---
title: "C++が使えたい  項目7（現行のC++への移行 - 1）"
date: "2018-08-20"
excerpt: ""
tags: ["プログラミング"]
author: "TNP"
---

サバです。  
3章にはいります！  
  
**今回も、表とその下の解説は無駄に長いので、適当に流し読みしてください！**  
  
  

 

 

＜以下長い注意＞  
ここの内容は、サバが適当な自己解釈を重ねた結果、攪拌され白濁してしまった知識の泉から、沈殿物を素手で持ち上げようとした結果です。保証はしかねます。ご了承ください。

内容はEffectiveModernC++をわざわざ書き写したような何かです。  
題名にEffectiveModernC++が入っていないのは更新が途中で止まる自信があるからです。

また、もしよろしければ、間違い、気になったところ、分かりづらいところなどを指摘してもらえると、サバがピチピチ跳ねて喜びます。喜びすぎてプログラミング言語C++第四版をあなたに投げつけるかもしれません。  
（ぜひ教えてください。よろしくお願いします。 < ( \_ \_ ) > 何でもするとは言いませんから…）

 

 

 

**項目7**　**オブジェクト作成時の()と{}の違い**

**結論：{}を使うならstd::initializer\_listコンストラクタに気をつける**

 

C++11はオブジェクト作成時の初期化に()と{}を使い分けられます。ただし、組み込み型（プリミティブ型）変数の初期化には \= も使えるため、初期化と代入がごっちゃに理解されることが多いようです。自分もそうでした。

 

 

 

 

・初期化方法まとめ

重要なのは組み込み型の \= 初期化が特殊であることです。  
ここではユーザ定義型（構造体・クラス）の例として Widget という型名を用います。

<table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 21.9335%;">組み込み型<br><span style="font-size: 10pt;">（クラス・構造体以外）</span></td><td style="width: 31.9331%;"><span style="font-family: tahoma, arial, helvetica, sans-serif;"><span style="color: #0000ff;">i</span><span style="font-family: wingdings, zapf dingbats;"><span style="color: #0000ff;">nt</span> Integer1<span style="color: #ff6600;"> = <span style="color: #333333;">0</span>;</span></span></span><br><span style="font-family: wingdings, zapf dingbats;"><span style="color: #0000ff;">int</span> Integer2<span style="color: #0000ff;"><span style="color: #ff6600;">(</span> <span style="color: #333333;">0</span> <span style="color: #ff6600;">)</span><span style="color: #333333;">;</span></span></span><br><span style="font-family: wingdings, zapf dingbats;"><span style="color: #0000ff;">int</span> Integer3<span style="color: #0000ff;"><span style="color: #ff6600;">{</span> <span style="color: #333333;">0</span> <span style="color: #ff6600;">}</span></span>;</span><span style="font-family: wingdings, zapf dingbats;"></span></td><td style="width: 46.1334%;">すべて同じ意味<br>0 で int 型変数を作成・初期化<br><span style="color: #ff6600;">= でも初期化をすることができる<br>初期化であって代入ではない</span></td></tr><tr><td style="width: 21.9335%;">ユーザ定義型<br><span style="font-size: 10pt;">（クラス・構造体）</span></td><td style="width: 31.9331%;"><span style="font-family: wingdings, zapf dingbats;"><span style="color: #0000ff;">Widget</span> widget1<span style="color: #0000ff;"><span style="color: #ff6600;">(</span> <span style="color: #333333;">0</span> <span style="color: #ff6600;">)</span></span>;</span><br><span style="font-family: wingdings, zapf dingbats;"><span style="color: #0000ff;">Widget</span> widget2<span style="color: #0000ff;"><span style="color: #ff6600;">{</span> <span style="color: #333333;">0</span> <span style="color: #ff6600;">}</span></span>;</span><span style="font-family: wingdings, zapf dingbats;"></span></td><td style="width: 46.1334%;">すべて同じ意味<br>Widgetのコンストラクタに 0 を渡して、Widgetオブジェクトを作成・初期化</td></tr></tbody></table>

- ここにでは省略しましたが、{} の代わりに = {} も使用できます。全く同じ意味です。
- ちなみにユーザ定義型で、下コード widget5 のように初期化をしない場合、デフォルトコンストラクタによって暗黙的に初期化されます。個人的には初期化を忘れたバグの根源なのか、デフォルト初期化したいのかが分からないので、widget6 の明示的初期化が良いと思います。  
    
    <table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr style="height: 10px;"><td style="width: 25.7746%; height: 10px;"><span style="font-size: 14pt;">Widget widget5<span style="color: #ff6600;">;</span><br>Widget widget6<span style="color: #ff6600;">{};</span></span></td><td style="width: 74.2254%; height: 10px;"><span style="font-size: 12pt;">どちらもデフォルトコンストラクタで初期化</span></td></tr></tbody></table>
    
- コンパイラによっては1変数を受け取るユーザ定義型のコンストラクタなら = でも初期化できるようです。

 

 

 

 

 

・初期化の統一記法

C++は変態なので変数を初期化する場所・場合がたくさんあります。  
そんな中でも {} だけは統一的にすべての初期化を行うことができます。{}すんごい！！

<table style="border-collapse: collapse; width: 100%; height: 874px;" border="1"><tbody><tr style="height: 87px;"><td style="width: 19.1334%; height: 87px;">組み込み型</td><td style="width: 36.7331%; height: 87px;"><span style="font-family: wingdings, zapf dingbats;">int <span style="color: #ff6600;"><span style="color: #ff9900;">integer1 = 0;</span><br><span style="color: #808080;"><span style="color: #333333;">int</span> <span style="color: #ff9900;">integer2();</span></span><br><span style="color: #808080;"><span style="color: #333333;">int</span> <span style="color: #ff9900;">integer3{};</span></span></span></span></td><td style="width: 44.1335%; height: 87px;">= () {} 全てで初期化できます。<br><span style="font-size: 12pt;">全てデフォルト値０での初期化です。</span></td></tr><tr style="height: 210px;"><td style="width: 19.1334%; height: 210px;">ユーザ定義型</td><td style="width: 36.7331%; height: 210px;"><span style="font-family: wingdings, zapf dingbats;"><span style="color: #808080;"><span style="color: #333333;">Widget <span style="color: #ff9900;">widget1();</span></span><br><span style="color: #333333;">Widget <span style="color: #ff9900;">widget2{};</span></span><br><br>// NG : 二度手間</span><br>Widget <span style="color: #ff6600;"><span style="color: #ff0000;">widget3 = Widget{};</span><br></span></span></td><td style="width: 44.1335%; height: 210px;"><span style="color: #ff0000;">=</span> では期待通りの初期化はできません。一時オブジェクトを作成し、ムーブコンストラクタでムーブ初期化するという二度手間になります。<br>（最適化されなければ）</td></tr><tr style="height: 257px;"><td style="width: 19.1334%; height: 257px;">宣言初期化子</td><td style="width: 36.7331%; height: 257px;"><span style="font-family: wingdings, zapf dingbats;">class Widget</span><br><span style="font-family: wingdings, zapf dingbats;">{</span><br><span style="font-family: wingdings, zapf dingbats;">&nbsp;&nbsp;&nbsp; int <span style="color: #ff6600;"><span style="color: #ff9900;">member1 = 0;</span><br>&nbsp;&nbsp;&nbsp; <span style="color: #808080;"><span style="color: #333333;">int</span> <span style="color: #ff9900;">member2{};</span><br></span></span></span><span style="font-family: wingdings, zapf dingbats; color: #808080;">&nbsp;&nbsp;&nbsp; // メソッド？<br>&nbsp;&nbsp;&nbsp; <span style="color: #333333;">int member3();</span></span><br><span style="font-family: wingdings, zapf dingbats;">};</span></td><td style="width: 44.1335%; height: 257px;"><span style="color: #ff0000;">()</span> では初期化できません。<br>コンパイラにとってはメソッド<br><span style="font-size: 12pt;">（メンバ関数）</span>宣言にしか見えません。</td></tr><tr style="height: 262px;"><td style="width: 19.1334%; height: 262px;">コンストラクタ初期化子</td><td style="width: 36.7331%; height: 262px;"><span style="font-family: wingdings, zapf dingbats;">class Widget</span><br><span style="font-family: wingdings, zapf dingbats;">{</span><br><span style="font-family: wingdings, zapf dingbats;">&nbsp;&nbsp;&nbsp; int member1;<br>&nbsp;&nbsp;&nbsp; int member2;</span><br><br><span style="font-family: wingdings, zapf dingbats;">public: &nbsp;</span><br><span style="font-family: wingdings, zapf dingbats;">&nbsp;&nbsp;&nbsp; Widget(int value)</span><br><span style="font-family: wingdings, zapf dingbats;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff6600;"><span style="color: #ff9900;"> : member1{ value }<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; , member2( value )</span></span></span><br><span style="font-family: wingdings, zapf dingbats;">&nbsp;&nbsp;&nbsp; {}</span><br><span style="font-family: wingdings, zapf dingbats;">};</span></td><td style="width: 44.1335%; height: 262px;"><span style="color: #ff0000;">=</span> では初期化できません。<br>メンバを初期化するためのもので、代入するためのものではありません。（適当に理由を付けました）</td></tr><tr style="height: 58px;"><td style="width: 19.1334%; height: 58px;">コピーできないオブジェクト</td><td style="width: 36.7331%; height: 58px;"><span style="font-family: wingdings, zapf dingbats;">std::atomic&lt;int&gt; <span style="color: #ff6600;"><span style="color: #ff9900;">ai{ 0 };</span><br><br><span style="color: #808080;">// Error : 関数は削除されてる</span><br><span style="color: #333333;">std::atomic&lt;int&gt; <span style="color: #ff9900;">ai =</span></span><br><span style="color: #ff9900;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; std::atomic&lt;int&gt;{ 0 };</span></span></span></td><td style="width: 44.1335%; height: 58px;">コピーやムーブを出来ないように設計されたオブジェクトは <span style="color: #ff0000;">=</span> 等を使えません。<br><br>左の例ではムーブコンストラクタが消されているため、エラーとなります。</td></tr><tr><td style="width: 19.1334%;">template<br>との組み合わせ</td><td style="width: 36.7331%;"><span style="font-family: wingdings, zapf dingbats;">template&lt;typename T&gt; decltype(auto) func()<br>{<br>&nbsp;&nbsp;&nbsp; <span style="color: #808080;">// どっち？</span><br>&nbsp;&nbsp;&nbsp; return T::<span style="color: #ff9900;">Whats()</span>;<br>}<br></span></td><td style="width: 44.1335%;"><span style="color: #333333;">こんな状況で <span style="color: #ff0000;">() <span style="color: #333333;">初期化</span></span>を使うのはやめましょう。</span><span style="color: #333333;">Whats という static 関数呼び出しにしか見えません。<br>このコードで Whats オブジェクトの初期化をしていた時は、</span><span style="color: #333333;">バグの発見に大分骨を折りそうです。</span></td></tr></tbody></table>

- 上の例を見ると {} だけいつでも初期化に使えることが分かります。

 

 

 

 

 

 

・ {} 初期化の型チェック機能

{} 初期化は統一記法以外にも型チェックという利点があります。  
縮小変換（精度が落ちる変換）が必要な初期化が行われた場合、コンパイラがエラーを出してくれます。（コンパイラによっては警告）

<table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 43.6%;"><span style="font-family: verdana, geneva, sans-serif;"><span style="color: #0000ff;">int&nbsp;</span> pi <span style="color: #ff9900;">{ 3.14 };</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #808080;">// Error<br><span style="color: #0000ff;"><br>double</span>&nbsp; <span style="color: #333333;">x{}, y{} z{};</span><br><span style="color: #0000ff;">int</span>&nbsp; <span style="color: #333333;">sum <span style="color: #ff9900;">{ x + y + z };&nbsp;</span>&nbsp;&nbsp; </span>// Error</span></span></td><td style="width: 56.4%;">&nbsp;double 型から int 型への暗黙的な<span style="color: #ff6600;"><span style="color: #333333;">縮小変換</span><br><span style="color: #333333;">&nbsp;（精度が落ちる・値が壊れるような型変換）</span></span></td></tr><tr><td style="width: 43.6%;"><span style="color: #0000ff; font-family: verdana, geneva, sans-serif;">bool <span style="color: #333333;">flag </span><span style="color: #ff6600;"><span style="color: #ff9900;">{ 2 };</span>&nbsp;</span>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; <span style="color: #808080;">// Error</span></span></td><td style="width: 56.4%;"><span>int 型から bool</span> 型への暗黙的な<span style="color: #333333;">縮小変換</span></td></tr></tbody></table>

- エラーを避けるためには static\_cast を使いましょう  
    int pi{ static\_cast<int>( 3.14 ) };

 

 

 

 

 

・{} 初期化の落とし穴

{} は凄い！ですが、致命的な問題があります。  
それは std::initializer\_list との相性問題です。  
std::initializer\_list を取るコンストラクタを持つオブジェクトを {} 初期化すると、縮小変換をしてでも、力ずくでこの std::initializer\_list コンストラクタを使おうとします。

<table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 53.2001%;"><span style="font-family: wingdings, zapf dingbats;">class <span style="color: #333333;">Widget</span></span><br><span style="font-family: wingdings, zapf dingbats;">{<span style="color: #808080;"><br><br>&nbsp;&nbsp;&nbsp; // <em>コンストラクタ1</em></span></span><br><span style="font-family: wingdings, zapf dingbats;">&nbsp;&nbsp;&nbsp; <span style="color: #333333;">Widget</span>( <span style="color: #0000ff;">int</span> <span style="color: #333333;">value )</span></span><br><span style="font-family: wingdings, zapf dingbats; color: #333333;">&nbsp;&nbsp;&nbsp; {}</span> <span style="color: #808080; font-family: wingdings, zapf dingbats;">&nbsp;&nbsp;&nbsp; // <em>コンストラクタ2</em></span><br><span style="font-family: wingdings, zapf dingbats;">&nbsp;&nbsp;&nbsp; <span style="color: #333333;">Widget(</span> <span style="color: #ff6600;">std::initializer_list&lt;bool&gt;</span><span style="color: #333333;"> list )&nbsp;</span></span><br><span style="font-family: wingdings, zapf dingbats; color: #333333;">&nbsp;&nbsp;&nbsp; {}</span><br><br><span style="font-family: wingdings, zapf dingbats;">};</span><br><br><span style="font-family: wingdings, zapf dingbats;">int main()</span><br><span style="font-family: wingdings, zapf dingbats;">{</span><br><span style="font-family: wingdings, zapf dingbats;">&nbsp;&nbsp;&nbsp;<span style="color: #808080;"> //<em><strong> コンストラクタ2</strong></em>を呼び出す</span></span><br><span style="font-family: wingdings, zapf dingbats;">&nbsp;&nbsp;&nbsp; <span style="color: #333333;">Widget</span> w<span style="color: #ff6600;">{ 100 }</span>;&nbsp;<span style="color: #808080;"> // 縮小変換 Error も</span></span><br><br><span style="font-family: wingdings, zapf dingbats;">&nbsp;&nbsp;&nbsp; return 0;</span><br><span style="font-family: wingdings, zapf dingbats;">}</span></td><td style="width: 46.7999%;">main 関数内で、Widget の<br><em>コンストラクタ1</em><br>を呼び出しているように見えますが、<br><em><span style="color: #ff6600;">コンストラクタ2</span></em><br>が呼び出されます。 &nbsp;<br><br><em>コンストラクタ1</em> を呼び出すには <span style="color: #ff6600;">()</span> を使った初期化をする必要があります。 &nbsp;<br>また、{} 初期化は型チェックを行うため、この場合 Error や Warning が発生します。</td></tr></tbody></table>

- コンパイラには {} が std::initializer\_list にしか見えないのでしょうか…
- 力ずくで変換できない場合、つまり、暗黙の型変換方法がない場合は、こんなことになりません。 例えば、std::initializer\_list<bool\> ではなく、 std::initializer\_list<std::string\>であった場合は、int 型から std::string 型への暗黙の型変換方法がないため、コンストラクタ1 が呼び出されます。

 

  
残念ながらこの相性問題の代表例は STL です。  
std::vector も std::initializer\_list をとるコンストラクタを持つため、こんな頭痛が痛い問題が起きます。

<table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 40.3999%;"><span style="color: #808080; font-family: wingdings, zapf dingbats; font-size: 10pt;">// { 10, 1 }</span><br><span style="font-family: wingdings, zapf dingbats;">std::vector&lt;int&gt; vec1<span style="color: #ff6600;">{ 10, 1 }</span>;</span></td><td style="width: 59.6001%;">要素数2で、それぞれの値が 10, 1 となる<br>std::vector を作成</td></tr><tr><td style="width: 40.3999%;"><span style="color: #808080; font-family: wingdings, zapf dingbats; font-size: 10pt;">// { 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 }</span><br><span style="font-family: wingdings, zapf dingbats;">std::vector&lt;int&gt; vec2<span style="color: #ff6600;">( 10, 1 )</span>;</span></td><td style="width: 59.6001%;">要素数10で、すべての値が 1 となる<br>std::vector を作成</td></tr><tr><td style="width: 40.3999%;"><span style="color: #808080; font-family: wingdings, zapf dingbats; font-size: 10pt;">// { 100 }</span><br><span style="font-family: wingdings, zapf dingbats;">std::vector&lt;int&gt; vec3<span style="color: #ff6600;">{ 100 }</span>;</span></td><td style="width: 59.6001%;">要素が 100 のみで要素数1となる<br>std::vector を作成</td></tr><tr><td style="width: 40.3999%;"><span style="color: #808080; font-family: wingdings, zapf dingbats; font-size: 10pt;">// { 0, 0, 0, ... ( x 100) }</span><br><span style="font-family: wingdings, zapf dingbats;">std::vector&lt;int&gt; vec4<span style="color: #ff6600;">( 100 )</span>;</span></td><td style="width: 59.6001%;">要素数100で、すべての要素をデフォルト値( 0 )で初期化した std::vector を作成</td></tr></tbody></table>

- std::vector は {} だけじゃすべての初期化ができない…　{} は初期化の統一記法じゃなかった！！！

 

初期化するオブジェクトに std::initializer\_list をとるものがないか事前に確認しましょう。std::initializer\_list をとるコンストラクタを定義するときは本当に必要なのか考えましょう。

 

 

 

 

 

 

Effective Modern C++ の中では、(), {} どちらの初期化も長所・短所を持つため、いずれかの記法を優先して使うように決め、必要に応じてもう一方を使おうとまとめられています。

 

 

 

 

[＜　前の項目へ](http://akitatnp.wp.xdomain.jp/2018/08/06/c%E3%81%8C%E4%BD%BF%E3%81%88%E3%81%9F%E3%81%84-%E9%A0%85%E7%9B%AE6%EF%BC%88auto-2%EF%BC%89/)　　　次の項目へ　＞  // そのうち…
