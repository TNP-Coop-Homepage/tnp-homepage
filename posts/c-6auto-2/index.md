---
title: "C++が使えたい  項目6（auto - 2）"
date: "2018-08-05"
excerpt: ""
tags: ["プログラミング"]
author: "TNP"
---

サバです。  
autoについては最後の項目です（まだ二つ目）

 

＜以下長い注意＞  
ここの内容は、サバが適当な自己解釈を重ねた結果、攪拌され白濁してしまった知識の泉から、沈殿物を素手で持ち上げようとした結果です。保証はしかねます。ご了承ください。

内容はEffectiveModernC++をわざわざ書き写したような何かです。  
題名にEffectiveModernC++が入っていないのは更新が途中で止まる自信があるからです。

また、もしよろしければ、間違い、気になったところ、分かりづらいところなどを指摘してもらえると、サバがピチピチ跳ねて喜びます。喜びすぎてプログラミング言語C++第四版をあなたに投げつけるかもしれません。  
（ぜひ教えてください。よろしくお願いします。 < ( \_ \_ ) > 何でもするとは言いませんから…）

 

 

**項目5　auto が期待とは異なる型を****推論する****場面では ETII を用いる**

 

**結論：autoは明示的キャストと併用しよう**  

ETIIはC++的で明示的な型キャスト、static\_cast を使ってauto変数を初期化する方法です。

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 100%;"><span style="color: #0000ff;">auto</span> itsInteger = <span style="color: #0000ff;">static_cast&lt;int&gt;(</span>64 * 0.2<span style="color: #0000ff;">)</span>;&nbsp; &nbsp; <span style="color: #999999;">// キャストでint型変数として推論させる。</span></td></tr></tbody></table>

- これを使ったらauto使えるし、どんな型と目的でキャストしてるのか明示的でわかりやすいよね！って話です。

 

また、std::vector<bool> を使うときにこの操作が必要な場合があります。  
というのもstd::vector<bool>の \[ \] 演算子は bool& ではない変な型を返してくるからです。

<table border="1" style="border-collapse: collapse; width: 99.7532%; height: 87px;"><tbody><tr style="height: 29px;"><td style="width: 45.7098%; height: 29px;"><span style="color: #0000ff;">std::vector&lt;int&gt;</span> vecInt = {1, 2, 3}; <span style="color: #0000ff;">decltype</span>( veclnt[0] );<br><span style="color: #0000ff;">auto</span> front = vecInt[0];</td><td style="width: 54.0432%; height: 29px;"><br>decltype → int&amp;&nbsp;<span style="color: #999999;">// 分かる。内部要素への参照。</span><br>front&nbsp; &nbsp; &nbsp; &nbsp;→ int&nbsp; &nbsp;<span style="color: #999999;">// 期待通り。</span></td></tr><tr style="height: 58px;"><td style="width: 45.7098%; height: 58px;"><span style="color: #0000ff;">std::vector&lt;bool&gt;</span> vecBool = {true, true}; <span style="color: #0000ff;">decltype</span>( vecBool[0] );<br><span style="color: #0000ff;">auto</span> front = vecBool[0];</td><td style="width: 54.0432%; height: 58px;"><br>decltype →&nbsp;<span style="color: #0000ff;">std::vector&lt;bool&gt;::reference&nbsp;<span style="color: #999999;">// WTF</span></span><br>front&nbsp; &nbsp; &nbsp; &nbsp;→ <span style="color: #0000ff;">std::vector&lt;bool&gt;::reference</span>&nbsp;<span style="color: #999999;">// WTF</span></td></tr></tbody></table>

うーんこの...。そこでこの std::vector<bool> 使う時だけETIIしよって話です。

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 50%;">std::vector&lt;bool&gt; vecBool = {true, true};<br>auto front =<span style="color: #0000ff;"> static_cast&lt;bool&gt;(&nbsp;</span>vecBool[0]&nbsp;<span style="color: #0000ff;">)</span>;&nbsp;</td><td style="width: 50%;">front → <span style="color: #0000ff;">bool</span>&nbsp; &nbsp;<span style="color: #999999;"><span style="font-size: 14pt;">// 期待通り</span><br></span></td></tr></tbody></table>

- もちろんbool型以外のstd::vectorはこんなことないです。ふつうです。こいつが変態なだけです。
- めんどい…
- 今にでもstd::vector<bool>に殴り掛かれそうなら、殴り掛かる前に下の内容を読んでみてください。

 

 

 

**・深淵を覗きに行くために…**

std::vector<bool>はうん○こ。ではなくちゃんと理由があるみたいです。  
  
bool型のベクターはメモリを節約するため、内部でビット演算を使用して値を保持しています。となると、要素一つあたりのサイズは１ビット。でもC++の参照が指し示すことができるのはバイト単位…（参照は内部的にはポインタであるため）あれ？ ビット単位な各要素への参照ってできないじゃん。じゃあ参照受け取って、各要素の値を直接変更するとかもできないじゃん！ って当然なるわけです。  
  
そこでstd::vector<bool>::reference君の登場です。下記のコードのように、ぱっと見いい感じに動作するよう彼は実装されています。この書き方だけならいつもの通りです。

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr style="height: 87px;"><td style="width: 50%; height: 87px;"><span style="color: #0000ff;">std::vector&lt;bool&gt;</span> vecBool = {<span style="color: #0000ff;">false</span>, <span style="color: #0000ff;">false</span>};<br>vecBool[<span style="color: #333333;">0</span>] = <span style="color: #0000ff;">true</span>;<br>vecBool<span style="color: #333333;">[1]</span> = <span style="color: #0000ff;">true</span>;</td><td style="width: 50%; height: 87px;">{false, false} // vecBool の中身<br>{<span style="color: #0000ff;">true</span>, false}<br>{true, <span style="color: #0000ff;">true</span>}</td></tr></tbody></table>

 

しかし、上記の注意点だけでは終わらず、追加でもう一つが紹介されています。  
それは\[\]演算子の戻り値は値渡しでも、実質的には参照渡しであるということです。  
例を挙げると、以下のようなコードは未定義動作です。

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 100%;"><span style="color: #0000ff;">auto</span> first = <span style="color: #0000ff;">std::vector<span style="color: #333333;">&lt;</span>bool<span style="color: #333333;">&gt;</span></span>{<span style="color: #0000ff;">false</span>, <span style="color: #0000ff;">false</span>}<span style="color: #333333;">[0</span>];&nbsp; &nbsp;<span style="font-size: 14pt; color: #808080;">//参照渡しと実質的に同義な値渡し</span><br><span style="color: #ff0000;">first = true;</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: #808080;">// 死んだオブジェクトに代入する未定義動作</span></td></tr></tbody></table>

- std::vector<bool>::reference 君は、各要素を参照してるっぽく動作するため、ビットとして存在する**実態**にアクセスするための**情報**を持っています。実装方法によっては、**ポインタ**とそこから**何ビット目**かといった感じの情報です。
- 上記例では、std::vector<bool>::reference を first は受け取ります。そのため first は std::vector<bool>{false, false} と宣言された右辺値の内部を指し示すポインタを持つことになります。
- 右辺値は一行だけの命です。つぎのセミコロンが来たらそこで死にます。
- つまりfirst = true と代入している時点で、first 内部のポインタは、すでに死んだvectorが存在していた位置を指し示します。このコードは代入によってメモリ空間をぐちゃぐちゃにできるわけです。
- このようなバグは、**関数の戻り値**（値渡し）でももちろん起こりえます。
- std::vector<bool>怖い…

 

std::vector<bool>::referenceのような、ほかの型の模倣や拡張を目的としたクラスを、プロクシクラス(proxy class)とか言うらしいです。

このようなクラスの存在に気づくためには、ヘッダファイルの実装を自分で見ようねという話みたいです。C++楽じいなぁ…

 

C++は楽しい。

 

 

[＜　前の項目へ](http://akitatnp.wp.xdomain.jp/2018/08/02/c%E3%81%8C%E4%BD%BF%E3%81%88%E3%81%9F%E3%81%84-%E9%A0%85%E7%9B%AE5%EF%BC%88auto-1%EF%BC%89/)　　　次の項目へ　＞  // そのうち…
