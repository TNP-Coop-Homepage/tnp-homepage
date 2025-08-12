---
title: "C++が使えたい  項目1~4（型推論）"
date: "2018-07-22"
excerpt: ""
tags: ["プログラミング"]
author: "TNP"
---

サバです。最近EffectiveModernC++をやっと買えたと思ったら、ついでに期末試験が迫ってきてしまったので、現実逃避しながらその内容について書いてきたいと思います。（本の内容を自分解釈で出力しとけば忘れたときに楽かなぁ…とも思ったので！）  
この本にとっかかりやすくなってもらえるとうれしいなぁ

 

＜注意＞  
ここの内容は、サバが適当な自己解釈を重ねた結果、攪拌され白濁してしまった知識の泉から、沈殿物を素手で持ち上げようとした結果です。保証はしかねます。ご了承ください。

題名にEffectiveModernC++が入っていないのは更新が途中で止まる自信があるからです。

また、もしよろしければ、間違い、気になったところ、分かりづらいところなどを指摘してもらえると、サバがピチピチ跳ねて喜びます。喜びすぎてプログラミング言語C++第四版をあなたに投げつけるかもしれません。  
（ぜひ教えてください。よろしくお願いします。 < ( \_ \_ ) > 何でもするとは言いませんから…）

 

 

 

 

1章　型推論

 

**項目1　テンプレートの型推論を理解する**

 

**結論：大体期待通り！**

  
C++の深淵は闇の中だとしても、templateは晴れた日のあなたの部屋くらい明るい。  
C++なんて、第一に**安全**、第二に**効率**を考えて、Ｃから派生したってことだけ分かっていれば、**もう何も怖くない**！！（そう願いたい…）  
まさにtemplateはそんな感じ。（希望的観測）

 

**template<typename T\>**  と宣言したとき、Tの使い方は参照について考えると3つあります。

1. **void f (T arg) { }**      : arg は値渡し

- const , volatileは完全になかったことにされる

2\. **void f (T& arg) { }**   : arg は参照渡し

- この関数使うときに右辺値の引数をぶち込むとエラー

3. **void f (T&& arg) { }** : arg はユニバーサル参照渡し

- ユニバーサル参照 : 左辺値参照・右辺値参照のどちらもイける両刀使い

 

上記の f を **f (value)** と呼び出したとき、 **T** と **arg**  の  
推論される型を表に入れるとこうなります。大体…期待通りです。（volatileもconstと同じ）

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr style="height: 29px;"><td style="width: 25.4856%; height: 58px; text-align: center;" rowspan="2"><span style="font-size: 18pt;"><strong>T + &amp;</strong></span></td><td style="width: 15.7714%; text-align: center; height: 29px;" colspan="2"><strong><span style="color: #3366ff;">T</span></strong></td><td style="width: 29.9048%; text-align: center; height: 29px;" colspan="2"><strong><span style="color: #3366ff;">T&amp;</span></strong></td><td style="width: 28.838%; text-align: center; height: 29px;" colspan="2"><strong><span style="color: #3366ff;">T&amp;&amp;</span></strong></td></tr><tr style="height: 29px;"><td style="width: 7.61904%; text-align: center; height: 29px;"><span style="color: #3366ff;">T</span></td><td style="width: 8.15237%; text-align: center; height: 29px;"><span style="color: #3366ff;">arg</span></td><td style="width: 14.5524%; text-align: center; height: 29px;"><span style="color: #3366ff;">T</span></td><td style="width: 15.3524%; text-align: center; height: 29px;"><span style="color: #3366ff;">arg</span></td><td style="width: 14.5523%; text-align: center; height: 29px;"><span style="color: #3366ff;">T</span></td><td style="width: 14.2857%; text-align: center; height: 29px;"><span style="color: #3366ff;">arg</span></td></tr><tr style="height: 29px;"><td style="width: 25.4856%; height: 29px;"><strong><span style="color: #3366ff;">int&nbsp;</span></strong>value;</td><td style="width: 7.61904%; height: 29px;">int</td><td style="width: 8.15237%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">int</td><td style="width: 15.3524%; height: 29px;">int&amp;</td><td style="width: 14.5523%; height: 29px;">int&amp;</td><td style="width: 14.2857%; height: 29px;">int&amp;</td></tr><tr style="height: 29px;"><td style="width: 25.4856%; height: 29px;"><strong><span style="color: #3366ff;">int&amp;</span>&nbsp;</strong>value;</td><td style="width: 7.61904%; height: 29px;">int</td><td style="width: 8.15237%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">int</td><td style="width: 15.3524%; height: 29px;">int&amp;</td><td style="width: 14.5523%; height: 29px;">int&amp;</td><td style="width: 14.2857%; height: 29px;">int&amp;</td></tr><tr style="height: 29px;"><td style="width: 25.4856%; height: 29px;"><strong><span style="color: #3366ff;">int&amp;&amp;</span> </strong>value;</td><td style="width: 7.61904%; height: 29px;">int</td><td style="width: 8.15237%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">int</td><td style="width: 15.3524%; height: 29px;">int&amp;</td><td style="width: 14.5523%; height: 29px;">int&amp;</td><td style="width: 14.2857%; height: 29px;">int&amp;</td></tr><tr style="height: 29px;"><td style="width: 25.4856%; height: 29px;"><strong><span style="color: #3366ff;">const int</span>&nbsp;</strong>value;</td><td style="width: 7.61904%; height: 29px;">int</td><td style="width: 8.15237%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">const int</td><td style="width: 15.3524%; height: 29px;">const int&amp;</td><td style="width: 14.5523%; height: 29px;">const int&amp;</td><td style="width: 14.2857%; height: 29px;">const int&amp;</td></tr><tr style="height: 29px;"><td style="width: 25.4856%; height: 29px;"><strong><span style="color: #3366ff;">const int&amp;&nbsp;</span></strong>value;</td><td style="width: 7.61904%; height: 29px;">int</td><td style="width: 8.15237%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">const int</td><td style="width: 15.3524%; height: 29px;">const int&amp;</td><td style="width: 14.5523%; height: 29px;"><span style="color: #000000;">const int&amp;</span></td><td style="width: 14.2857%; height: 29px;"><span style="color: #000000;">const int&amp;</span></td></tr><tr style="height: 29px;"><td style="width: 25.4856%; height: 29px;"><strong><span style="color: #3366ff;">const int&amp;&amp;</span> </strong>value;</td><td style="width: 7.61904%; height: 29px;">int</td><td style="width: 8.15237%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">const int</td><td style="width: 15.3524%; height: 29px;">const int&amp;</td><td style="width: 14.5523%; height: 29px;"><span style="color: #000000;">const int&amp;</span></td><td style="width: 14.2857%; height: 29px;"><span style="color: #000000;">const int&amp;</span></td></tr><tr style="height: 29px;"><td style="width: 25.4856%; height: 29px;">f ( <span style="color: #0000ff;">1</span> )&nbsp; &nbsp;// 何か右辺値</td><td style="width: 7.61904%; height: 29px;">int</td><td style="width: 8.15237%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;"><span style="color: #ff0000;">error</span></td><td style="width: 15.3524%; height: 29px;"><span style="color: #ff0000;">error</span></td><td style="width: 14.5523%; height: 29px;"><span style="color: #0000ff;">int</span></td><td style="width: 14.2857%; height: 29px;"><span style="color: #0000ff;">int&amp;&amp;</span></td></tr></tbody></table>

- Tの時、constも参照も取れるのは、値渡しでできた複製（仮引数）がどうなろうとコピー元（実引数）には関係ないからです。
- エラーが出るのは、右辺値を書き換えても意味がなく、リテラルの参照が存在したらわけわかめになるからだとおもいます。（適当）
- ユニバーサル参照はいろいろ変態なので覚えるのが大変そうです…

 

 

**・template? 知らない子ですね**

  君は、関数に**値**を渡すだけの退屈な日々を過ごす中で、  
  **型**も渡せたらいいのにと思ったことはあるかい？  
  そういうことだよ。（）

 

 

**・深淵を覗きに行くために…  
　（闇のコードを読むことに興味がある方は知っているべき？）**

ついでにポインタ、配列、関数も入れてみましょう

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr style="height: 29px;"><td style="width: 21.5684%; text-align: center; height: 58px;" rowspan="2"><span style="font-size: 24pt;"><strong>T + &amp; + α</strong></span></td><td style="width: 29.2177%; text-align: center; height: 29px;" colspan="2"><span style="color: #0000ff;"><strong>T</strong></span></td><td style="width: 24.5476%; text-align: center; height: 29px;" colspan="2"><span style="color: #0000ff;"><strong>T&amp;</strong></span></td><td style="width: 24.666%; text-align: center; height: 29px;" colspan="2"><span style="color: #0000ff;"><strong>T&amp;&amp;</strong></span></td></tr><tr style="height: 29px;"><td style="width: 14.3039%; text-align: center; height: 29px;"><span style="color: #0000ff;"><strong>T</strong></span></td><td style="width: 14.9138%; text-align: center; height: 29px;"><span style="color: #0000ff;"><strong>arg</strong></span></td><td style="width: 11.5636%; text-align: center; height: 29px;"><span style="color: #0000ff;"><strong>T</strong></span></td><td style="width: 12.984%; text-align: center; height: 29px;"><span style="color: #0000ff;"><strong>arg</strong></span></td><td style="width: 11.5637%; text-align: center; height: 29px;"><span style="color: #0000ff;"><strong>T</strong></span></td><td style="width: 13.1023%; text-align: center; height: 29px;"><span style="color: #0000ff;"><strong>arg</strong></span></td></tr><tr style="height: 58px;"><td style="width: 21.5684%; height: 58px;"><span style="color: #0000ff;"><strong>const int * const </strong><span style="color: #000000;">value;</span></span></td><td style="width: 14.3039%; height: 58px;"><span style="color: #000000;">const int *</span></td><td style="width: 14.9138%; height: 58px;"><span style="color: #000000;">const int *</span></td><td style="width: 11.5636%; height: 58px;">const int * const</td><td style="width: 12.984%; height: 58px;">const int * const &amp;</td><td style="width: 11.5637%; height: 58px;">const int * const</td><td style="width: 13.1023%; height: 58px;">const int * const &amp;</td></tr><tr style="height: 29px;"><td style="width: 21.5684%; height: 29px;"><span style="color: #0000ff;"><strong>int</strong></span> value<span style="color: #0000ff;"><strong>[4]</strong></span>;</td><td style="width: 14.3039%; height: 29px;"><span style="color: #0000ff;">int *</span></td><td style="width: 14.9138%; height: 29px;"><span style="color: #0000ff;">int *</span></td><td style="width: 11.5636%; height: 29px;">int [4]</td><td style="width: 12.984%; height: 29px;">int (&amp;)[4]</td><td style="width: 11.5637%; height: 29px;">int [4]</td><td style="width: 13.1023%; height: 29px;">int (&amp;)[4]</td></tr><tr style="height: 58px;"><td style="width: 21.5684%; height: 58px;"><span style="color: #0000ff;"><strong>void</strong></span> value<span style="color: #0000ff;"><strong>( int )</strong></span>;</td><td style="width: 14.3039%; height: 58px;"><span style="color: #0000ff;">void (*)(int)</span></td><td style="width: 14.9138%; height: 58px;"><span style="color: #0000ff;">void (*)(int)</span></td><td style="width: 11.5636%; height: 58px;">void (int)</td><td style="width: 12.984%; height: 58px;">void (&amp;)(int)</td><td style="width: 11.5637%; height: 58px;">void (int)</td><td style="width: 13.1023%; height: 58px;">void (&amp;)(int)</td></tr></tbody></table>

- int value\[4\] は長さ4の int 型配列、void value( int ) は int 型引数一つを受け取る void 関数です。
- 注目するは青文字です。値渡しでは配列や関数をポインタとして推論しています。これはC言語由来の動作で、配列や関数がポインタに成り下がる（本当はポインタじゃないけどポインタのふりをする）という動作をするためです。
- 参照渡しはポインタのふりをする必要がないため、配列・ポインタの参照型として推論されます。

 

Tにconstつけるとこうなります。  
 （VS2017でこうなるを確認できたけど理由がよくわかってなかったり…

<table border="2" style="width: 100%; border-collapse: collapse;"><tbody><tr style="height: 29px;"><td style="width: 24.419%; height: 58px; text-align: center;" rowspan="2"><span style="color: #000000; font-size: 18pt;"><strong>T + const + &amp;</strong></span></td><td style="width: 22.7046%; text-align: center; height: 29px;" colspan="2"><strong><span style="color: #3366ff;">const T</span></strong></td><td style="width: 23.5048%; text-align: center; height: 29px;" colspan="2"><strong><span style="color: #3366ff;">const T&amp;</span></strong></td><td style="width: 29.3714%; text-align: center; height: 29px;" colspan="2"><strong><span style="color: #3366ff;">const T&amp;&amp;</span></strong></td></tr><tr style="height: 29px;"><td style="width: 11.851%; text-align: center; height: 29px;"><span style="color: #3366ff;">T</span></td><td style="width: 10.8536%; text-align: center; height: 29px;"><span style="color: #3366ff;">arg</span></td><td style="width: 8.95244%; text-align: center; height: 29px;"><span style="color: #3366ff;">T</span></td><td style="width: 14.5524%; text-align: center; height: 29px;"><span style="color: #3366ff;">arg</span></td><td style="width: 12.419%; text-align: center; height: 29px;"><span style="color: #3366ff;">T</span></td><td style="width: 16.9524%; text-align: center; height: 29px;"><span style="color: #3366ff;">arg</span></td></tr><tr style="height: 29px;"><td style="width: 24.419%; height: 29px;"><span style="color: #3366ff;"><strong>int</strong></span> value;</td><td style="width: 11.851%; height: 29px;">int</td><td style="width: 10.8536%; height: 29px;">const int</td><td style="width: 8.95244%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">const int&amp;</td><td style="width: 12.419%; height: 29px;"><span style="color: #ff0000;">error</span></td><td style="width: 16.9524%; height: 29px;"><span style="color: #ff0000;">error</span></td></tr><tr style="height: 29px;"><td style="width: 24.419%; height: 29px;"><span style="color: #3366ff;"><strong>int&amp;</strong></span> value;</td><td style="width: 11.851%; height: 29px;">int</td><td style="width: 10.8536%; height: 29px;">const int</td><td style="width: 8.95244%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">const int&amp;</td><td style="width: 12.419%; height: 29px;"><span style="color: #ff0000;">error</span></td><td style="width: 16.9524%; height: 29px;"><span style="color: #ff0000;">error</span></td></tr><tr style="height: 29px;"><td style="width: 24.419%; height: 29px;"><strong><span style="color: #3366ff;">int&amp;&amp;</span></strong> value;</td><td style="width: 11.851%; height: 29px;">int</td><td style="width: 10.8536%; height: 29px;">const int</td><td style="width: 8.95244%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">const int&amp;</td><td style="width: 12.419%; height: 29px;"><span style="color: #ff0000;">error</span></td><td style="width: 16.9524%; height: 29px;"><span style="color: #ff0000;">error</span></td></tr><tr style="height: 29px;"><td style="width: 24.419%; height: 29px;"><span style="color: #3366ff;"><strong>const int</strong></span>&nbsp;value;</td><td style="width: 11.851%; height: 29px;">int</td><td style="width: 10.8536%; height: 29px;">const int</td><td style="width: 8.95244%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">const int&amp;</td><td style="width: 12.419%; height: 29px;"><span style="color: #ff0000;">error</span></td><td style="width: 16.9524%; height: 29px;"><span style="color: #ff0000;">error</span></td></tr><tr style="height: 29px;"><td style="width: 24.419%; height: 29px;"><strong><span style="color: #3366ff;">const int&amp;</span></strong> value;</td><td style="width: 11.851%; height: 29px;">int</td><td style="width: 10.8536%; height: 29px;">const int</td><td style="width: 8.95244%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">const int&amp;</td><td style="width: 12.419%; height: 29px;"><span style="color: #ff0000;">error</span></td><td style="width: 16.9524%; height: 29px;"><span style="color: #ff0000;">error</span></td></tr><tr style="height: 29px;"><td style="width: 24.419%; height: 29px;"><span style="color: #3366ff;"><strong>const int&amp;&amp;</strong></span> value;</td><td style="width: 11.851%; height: 29px;">int</td><td style="width: 10.8536%; height: 29px;">const int</td><td style="width: 8.95244%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">const int&amp;</td><td style="width: 12.419%; height: 29px;"><span style="color: #ff0000;">error</span></td><td style="width: 16.9524%; height: 29px;"><span style="color: #ff0000;">error</span></td></tr><tr style="height: 29px;"><td style="width: 24.419%; height: 29px;">f ( <span style="color: #0000ff;">1</span> )&nbsp; &nbsp;// 何か右辺値</td><td style="width: 11.851%; height: 29px;">int</td><td style="width: 10.8536%; height: 29px;">const int</td><td style="width: 8.95244%; height: 29px;">int</td><td style="width: 14.5524%; height: 29px;">const int&amp;</td><td style="width: 12.419%; height: 29px;"><span style="color: #0000ff;">int</span></td><td style="width: 16.9524%; height: 29px;"><span style="color: #0000ff;">const int &amp;&amp;</span></td></tr></tbody></table>

- const T&& は要らない子だと思ってたけど右辺値だけ受け取りたいときに使える…？
- 右辺値と右辺値参照が頭の中でこんがらがってあぁぁぁぁ 
- 迷ったら const 参照使ってれば一番よさそうですね

 

ポインタになるとこうなります  
  ※ const が長くて表にはまらなかったので**c**としました

<table border="2" style="width: 100%; border-collapse: collapse;"><tbody><tr style="height: 29px;"><td style="width: 26.2821%; height: 58px; text-align: center;" rowspan="2"><strong><span style="font-size: 18pt;">T + const +&nbsp;</span><span style="font-size: 24pt;">*</span></strong></td><td style="width: 16.6708%; text-align: center; height: 29px;" colspan="2"><strong><span style="color: #3366ff;">T *</span></strong></td><td style="width: 17.923%; text-align: center; height: 29px;" colspan="2"><strong><span style="color: #3366ff;">T * const</span></strong></td><td style="text-align: center; height: 29px; width: 18.7655%;" colspan="2"><strong><span style="color: #3366ff;">const T *</span></strong></td><td style="width: 31.7403%; text-align: center; height: 29px;" colspan="2"><strong><span style="color: #3366ff;">const T * const</span></strong><strong><span style="color: #3366ff;"><br></span></strong></td></tr><tr style="height: 29px;"><td style="width: 8.4275%; text-align: center; height: 29px;"><span style="color: #3366ff;">T</span></td><td style="width: 8.24333%; text-align: center; height: 29px;"><span style="color: #3366ff;">arg</span></td><td style="width: 7.55424%; text-align: center; height: 29px;"><span style="color: #3366ff;">T</span></td><td style="width: 10.3688%; text-align: center; height: 29px;"><span style="color: #3366ff;">arg</span></td><td style="width: 7.86125%; text-align: center; height: 29px;"><span style="color: #3366ff;">T</span></td><td style="width: 10.9042%; text-align: center; height: 29px;"><span style="color: #3366ff;">arg</span></td><td style="width: 7.57526%; text-align: center; height: 29px;"><span style="color: #3366ff;">T</span></td><td style="width: 24.165%; text-align: center; height: 29px;"><span style="color: #3366ff;">arg</span></td></tr><tr style="height: 29px;"><td style="width: 26.2821%; height: 29px;"><span style="font-size: 12pt;"><span style="color: #3366ff;"><strong>int *&nbsp;</strong></span>value;</span></td><td style="width: 8.4275%; height: 29px;">&nbsp; &nbsp;int</td><td style="width: 8.24333%; height: 29px;">&nbsp; &nbsp;int*</td><td style="width: 7.55424%; height: 29px;">&nbsp; &nbsp;int</td><td style="width: 10.3688%; height: 29px;"><span style="color: #0000ff;"><strong>&nbsp;</strong></span>&nbsp; int*&nbsp;<span style="color: #0000ff;"><strong>c</strong></span></td><td style="width: 7.86125%; height: 29px;">&nbsp;int</td><td style="width: 10.9042%; height: 29px;"><span style="color: #0000ff;"><strong>&nbsp;c</strong></span> int*</td><td style="width: 7.57526%; height: 29px;">&nbsp;int</td><td style="width: 24.165%; height: 29px;"><span style="color: #0000ff;"><strong>&nbsp;c</strong></span> int* <span style="color: #0000ff;"><strong>c</strong></span></td></tr><tr style="height: 29px;"><td style="width: 26.2821%; height: 29px;"><span style="font-size: 12pt;"><span style="color: #3366ff;"><strong>int * const</strong></span>&nbsp;value;</span></td><td style="width: 8.4275%; height: 29px;">&nbsp; &nbsp;int</td><td style="width: 8.24333%; height: 29px;">&nbsp; &nbsp;int*</td><td style="width: 7.55424%; height: 29px;">&nbsp; &nbsp;int</td><td style="width: 10.3688%; height: 29px;"><span style="color: #0000ff;"><strong>&nbsp; &nbsp;</strong></span>int*&nbsp;<span style="color: #0000ff;"><strong>c</strong></span></td><td style="width: 7.86125%; height: 29px;">&nbsp;int</td><td style="width: 10.9042%; height: 29px;"><span style="color: #0000ff;"><strong>&nbsp;c</strong></span> int*</td><td style="width: 7.57526%; height: 29px;">&nbsp;int</td><td style="width: 24.165%; height: 29px;"><span style="color: #0000ff;"><strong>&nbsp;c</strong></span> int* <span style="color: #0000ff;"><strong>c</strong></span></td></tr><tr style="height: 29px;"><td style="width: 26.2821%; height: 29px;"><span style="font-size: 12pt;"><strong><span style="color: #3366ff;">const int *</span></strong>&nbsp;value;</span></td><td style="width: 8.4275%; height: 29px;"><span style="color: #0000ff;"><strong>c</strong></span>&nbsp;int</td><td style="width: 8.24333%; height: 29px;"><span style="color: #0000ff;"><strong>c&nbsp;</strong></span>int*</td><td style="width: 7.55424%; height: 29px;"><span style="color: #0000ff;"><strong>c</strong></span> int</td><td style="width: 10.3688%; height: 29px;"><span style="color: #0000ff;"><strong>c</strong></span> int*&nbsp;<span style="color: #0000ff;"><strong>c</strong></span></td><td style="width: 7.86125%; height: 29px;">&nbsp;int</td><td style="width: 10.9042%; height: 29px;"><span style="color: #0000ff;"><strong>&nbsp;c</strong></span> int*</td><td style="width: 7.57526%; height: 29px;">&nbsp;int</td><td style="width: 24.165%; height: 29px;"><span style="color: #0000ff;"><strong>&nbsp;c</strong></span> int* <span style="color: #0000ff;"><strong>c</strong></span></td></tr><tr style="height: 29px;"><td style="width: 26.2821%; height: 29px;"><span style="font-size: 12pt;"><span style="color: #3366ff;"><strong>const int * cosnt</strong></span>&nbsp; value;</span></td><td style="width: 8.4275%; height: 29px;"><span style="color: #0000ff;"><strong>c</strong></span> int</td><td style="width: 8.24333%; height: 29px;"><span style="color: #0000ff;"><strong>c</strong></span> int*</td><td style="width: 7.55424%; height: 29px;"><span style="color: #0000ff;"><strong>c</strong></span> int</td><td style="width: 10.3688%; height: 29px;"><span style="color: #0000ff;"><strong>c</strong></span> int*&nbsp;<span style="color: #0000ff;"><strong>c</strong></span></td><td style="width: 7.86125%; height: 29px;">&nbsp;int</td><td style="width: 10.9042%; height: 29px;"><span style="color: #0000ff;"><strong>&nbsp;c</strong></span> int*</td><td style="width: 7.57526%; height: 29px;">&nbsp;int</td><td style="width: 24.165%; height: 29px;"><span style="color: #0000ff;"><strong>&nbsp;c</strong></span> int* <span style="color: #0000ff;"><strong>c</strong></span></td></tr></tbody></table>

- const とポインタの関係が完璧に分かっているconst教信者の方なら、const T \* とか T \* const とかしたときはどうなるか、すぐに予想できましたよね？（震え声）

 

ね？ templateって、素直ないい子…だよ…ね？

 

 

 

 

 

 

 

**項目2　autoの型推論を理解する**

 

**結論**：**templateと同じ**！以上！解散！

  
とは言えないみたいです…  
１か所だけ異なって、auto value = {1, 2, 3, 4, 5, 12}; と{}で書いたときのみ、  
value は std::initializer\_list<T>という型に推論されます。

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 162.458%; text-align: center;" colspan="2">左右は全く同じ意味</td></tr><tr><td style="width: 42.9333%;">auto i = 1;</td><td style="width: 119.525%;">int i = 1;</td></tr><tr><td style="width: 42.9333%;">const auto ci = i;</td><td style="width: 119.525%;">const int ci = i;</td></tr><tr><td style="width: 42.9333%;">const auto d = 1.0;</td><td style="width: 119.525%;">const double d = 1.0;</td></tr><tr><td style="width: 42.9333%;">auto d2 = d;</td><td style="width: 119.525%;">double d2 = d;</td></tr><tr><td style="width: 42.9333%;">auto&amp; ir = i;</td><td style="width: 119.525%;">int&amp; ir = i;</td></tr><tr><td style="width: 42.9333%;">const auto&amp; cir = ir</td><td style="width: 119.525%;">const int&amp; cir = ir;</td></tr><tr><td style="width: 42.9333%;">auto&amp; cir2 = cir;</td><td style="width: 119.525%;">const int&amp; cir2 = cir;</td></tr><tr><td style="width: 42.9333%;">auto hentai = {1};</td><td style="width: 119.525%;"><span style="color: #0000ff;">std::initializer_list&lt;int&gt; hentai = {1};</span></td></tr><tr><td style="width: 42.9333%;">auto hentai = {1, 1.0};</td><td style="width: 119.525%;"><span style="color: #ff6600;">error <span style="color: #000000; font-size: 12pt;">(intなのかdoubleなのか、少しでも曖昧なため)</span></span></td></tr></tbody></table>

 

 

**・auto? 知らない子ですね** 

  C++にはイテレータというtemplateクラス版**ポインタ**があるんだけど、  
  そいつが指す変数の「**型**」を取得するためにこんなコードは書きたくないよね？  
  
  template<typename Iterator>  
  void PrintValue(Iterator iterator)  
  {  
      std::iterator\_traits<iterator>::value\_type value = \*iterator;  
      std::cout << value;  
  }  
  
  大丈夫。こんなの覚えなくていい。そう、autoならね。  
  
  template<typename Iterator>  
  void PrintValue(Iterator iterator)  
  {  
      auto value = \*iterator;  
      std::cout << value;  
  }

 

 

**・深淵を覗きに行くために…**

ラムダ式の引数や関数の戻り値など、関数の定義等にもautoを使えますが、  
これは**templateの型推論**になるらしいです。  
  
    auto lambda = \[\](auto arg){ };  
    lambda({1, 3, 4});   // error std::initializer\_list<int>と推論できない  
  
    auto plsGiveMe\_initializer\_list()  
    {  
        return {1, 2, 3};    // error std::initializer\_list<int>と推論できない  
    }  
  

また、std::initialzier\_list<>の型推論には以下のようにC++のバージョンに左右される面があります。(デフォルトのVisualStudio2017は、C++17以降の方の動作をします。)

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 25.6%; text-align: center;" rowspan="2"><strong>ソースコード</strong></td><td style="width: 36.2668%; text-align: center;" colspan="2"><strong>推論結果</strong></td></tr><tr style="height: 29px;"><td style="width: 36.2668%; height: 29px; text-align: center;">C++14以前</td><td style="width: 38.1331%; height: 29px; text-align: center;">C++17以降</td></tr><tr style="height: 29px;"><td style="width: 25.6%; height: 29px;">auto value = {0, 1, 2};</td><td style="width: 36.2668%; height: 29px;"><span style="font-size: 10pt;">std::initializer_list&lt;int&gt; value = {0, 1, 2};</span></td><td style="width: 38.1331%; height: 29px;"><span style="font-size: 10pt;">std::initializer_list&lt;int&gt; value= {0, 1, 2};</span></td></tr><tr style="height: 29px;"><td style="width: 25.6%; height: 29px;">auto value = {0};</td><td style="width: 36.2668%; height: 29px;"><span style="font-size: 10pt;">std::initializer_list&lt;int&gt; value = {0};</span></td><td style="width: 38.1331%; height: 29px;"><span style="font-size: 10pt;">std::initializer_list&lt;int&gt; value = {0};</span></td></tr><tr style="height: 29px;"><td style="width: 25.6%; height: 29px;">auto value{0, 1, 2};</td><td style="width: 36.2668%; height: 29px;"><span style="font-size: 10pt;">std::initializer_list&lt;int&gt; value = {0, 1, 2};</span></td><td style="width: 38.1331%; height: 29px;"><span style="font-size: 14pt; color: #ff0000;">error</span></td></tr><tr style="height: 29px;"><td style="width: 25.6%; height: 29px;">auto value{0};</td><td style="width: 36.2668%; height: 29px;"><span style="font-size: 10pt;">std::initializer_list&lt;int&gt; value = {0};</span></td><td style="width: 38.1331%; height: 29px;"><span style="font-size: 14pt; color: #0000ff;">int value = 0;</span></td></tr></tbody></table>

 

 

 

 

 

 

 

 

**項目3　decltypeを理解する**

 

**結論 : そのまんま型が返ってくる！（大体そのまんま）**

 

decltypeにも例外的な動作が一つあります。  
単純に名前ではない左辺値式をあたえたときは  
参照がもれなく付いてくるというものです。  
  
int n;                         // 左辺値式 n  
decltype(n) → int      // 単純に名前だけの左辺値式  
decltype((n)) → int& // この場合は()が付いたため複雑な左辺値式と判定されるらしい...

 

項目2の変数と次の関数を使います。   void kansu(int, double){}  

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr style="height: 29px;"><td style="width: 100%; text-align: center; height: 29px;" colspan="2">左右は全く同じ意味</td></tr><tr style="height: 29px;"><td style="width: 35.3333%; height: 29px;">decltype(i)</td><td style="width: 64.6667%; height: 29px;">int</td></tr><tr style="height: 29px;"><td style="width: 35.3333%; height: 29px;">decltype(cir2)</td><td style="width: 64.6667%; height: 29px;">const int&amp;</td></tr><tr style="height: 29px;"><td style="width: 35.3333%; height: 29px;">decltype(hentai)</td><td style="width: 64.6667%; height: 29px;">std::initializer_list&lt;int&gt;</td></tr><tr style="height: 29px;"><td style="width: 35.3333%; height: 29px;">decltype(kansu(0, 0))</td><td style="width: 64.6667%; height: 29px;">void</td></tr><tr style="height: 29px;"><td style="width: 35.3333%; height: 29px;">decltype(kansu)</td><td style="width: 64.6667%; height: 29px;">void ( int, double )</td></tr><tr style="height: 29px;"><td style="width: 35.3333%; height: 29px;">decltype(<span style="color: #0000ff;">(</span>i<span style="color: #0000ff;">)</span>)</td><td style="width: 64.6667%; height: 29px;"><span style="color: #0000ff;">int&amp;</span>&nbsp; &nbsp; &nbsp; // 唯一の例外</td></tr><tr style="height: 29px;"><td style="width: 35.3333%; height: 29px;">decltype((i + 1 + 0.1))</td><td style="width: 64.6667%; height: 29px;">double&nbsp; // 右辺値式は例外に含まれない</td></tr></tbody></table>

 

 

**・decltype? 知らない子ですね**

知らなくても大丈夫。ゴリゴリtemplate書くようになるまで必要になることはないから。  
それに、必要になったらいやでも覚えなきゃいけないから。（未来の自分がそう言ってる気がする）  
  

 

**・深淵を覗きに行くために…**

decltypeは、autoの用に変数の型・関数の戻り値を推論するのに使えます。書式は以下の通りです。  
ただし推論の方法はdecltypeのものであり、auto や template とは異なります。

<table border="1" style="border-collapse: collapse; width: 99.8817%;"><tbody><tr style="height: 29px;"><td style="text-align: center; height: 29px; width: 99.8816%;" colspan="2">左右は全く同じ意味</td></tr><tr><td style="width: 44.609%; text-align: left;"><span style="color: #000000;"><span style="color: #0000ff;">decltype(auto)</span> value = 0;<br><span style="color: #0000ff;">decltype(auto)</span> func()<br>{<br>&nbsp; &nbsp; return 0;<br>}</span></td><td style="width: 55.2726%; text-align: left;"><span style="color: #000000;"><span style="color: #0000ff;">int</span> value = 0;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;// 0 はint型<br><span style="color: #0000ff;">int</span> func()&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;// 0 はint型<br>{<br>&nbsp; &nbsp; return 0;&nbsp;&nbsp;&nbsp;<br>}</span></td></tr><tr style="height: 29px;"><td style="width: 44.609%; height: 29px;"><span style="color: #0000ff;"><span style="color: #000000;">const int n = 0;</span><br><span style="color: #000000;">decltype(auto) value = n;</span><br><span style="color: #000000;">decltype(auto)&nbsp;func()<br>{<br>&nbsp; &nbsp; return n;<br>}</span></span></td><td style="width: 55.2726%; height: 29px;"><span style="color: #0000ff;"><span style="color: #000000;">cont int n = 0;<br><span style="color: #0000ff;">const int</span> value = n;&nbsp;<span style="color: #999999;"> //templateやautoはintと推論</span><br><span style="color: #0000ff;">const int</span> func()&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: #999999;">//templateやautoはintと推論</span><br>{<br>&nbsp; &nbsp; return n;<br>}</span></span></td></tr><tr style="height: 29px;"><td style="width: 44.609%; height: 29px;"><span style="color: #0000ff;"><span style="color: #000000;">int n = 0;</span><br><span style="color: #000000;">decltype(auto)</span> </span><span style="color: #000000;">value =</span><span style="color: #0000ff;"> (</span><span style="color: #000000;">n</span><span style="color: #0000ff;">)</span><span style="color: #000000;">;</span> <span style="color: #999999;">// 複雑な左辺値式</span><span style="color: #0000ff;"><br><span style="color: #000000;">decltype(auto)&nbsp;func()<br>{<br></span></span><span style="color: #0000ff;"><span style="color: #000000;">&nbsp; &nbsp; return <span style="color: #0000ff;">(</span>n<span style="color: #0000ff;">)</span>;&nbsp; &nbsp; <span style="color: #999999;">&nbsp;// 複雑な左辺値式</span><br>}</span></span></td><td style="width: 55.2726%; height: 29px;">int n = 0;<span style="color: #0000ff;"><br>int&amp; </span>value = n;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: #999999;">// 参照が付きます</span><span style="color: #0000ff;"><br>int&amp;<span style="color: #000000;">&nbsp;ILoveDecltype() <span style="color: #999999;">// 参照が付きます</span><br>{<br>&nbsp; &nbsp; return n;<br>}</span></span></td></tr><tr style="height: 29px;"><td style="width: 44.609%; height: 29px;"><span style="color: #0000ff;"><span style="color: #000000;">decltype(auto) value = <span style="color: #0000ff;">{1, 2, 3}</span>;</span><br><span style="color: #000000;">decltype(auto)&nbsp;func()<br>{<br>&nbsp; &nbsp; return <span style="color: #0000ff;">{1, 2, 3}</span>; <span style="color: #999999;">// std::initializer_list&lt;int&gt; ?</span><br>}</span></span></td><td style="width: 55.2726%; height: 29px;"><span style="color: #ff0000;">error<br><span style="color: #000000;">(autoを使いますが、型の推論方法はdecltypeのものです。そのためstd::initializer_list&lt;int&gt;とは推論できません。)</span></span></td></tr></tbody></table>

  
  

 

 

 

 

 

 

 

**項目4　推論された型を確認する**

 

**結論 : IDEに頼ろう！**

IDE(VisualStudioとかとかとか)で気になるトークンにマウスオーバー。  
これが一番（個人比）  
Boost.TypeIndexというBoostライブラリも紹介されていました。  
でも変な型が出る可能性は十分あるという…

  
そのほかにはコンパイルエラーで確認する方法、場合によっては見づらい・不正確な型名を表示する可能性がある方法なども紹介されていました。

 

 

 

 

 

 

 

＜　前の項目へ　　　[次の項目へ　＞](http://akitatnp.wp.xdomain.jp/2018/08/02/c%E3%81%8C%E4%BD%BF%E3%81%88%E3%81%9F%E3%81%84-%E9%A0%85%E7%9B%AE5%EF%BC%88auto-1%EF%BC%89/)
