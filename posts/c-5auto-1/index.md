---
title: "C++が使えたい  項目5（auto - 1）"
date: "2018-08-01"
excerpt: ""
tags: ["プログラミング"]
author: "TNP"
---

サバです。  
[前回の記事](http://akitatnp.wp.xdomain.jp/2018/07/22/c%E3%81%8C%E4%BD%BF%E3%81%88%E3%81%9F%E3%81%84/)は投稿後に大分変更・加筆をしたので、チラ見してくださいお願いします。  
それに加えて、詰め込みすぎたので今回から1項目くらいずつで行きたいと思います。

 

＜以下長い注意＞  
ここの内容は、サバが適当な自己解釈を重ねた結果、攪拌され白濁してしまった知識の泉から、沈殿物を素手で持ち上げようとした結果です。保証はしかねます。ご了承ください。

内容はEffectiveModernC++をわざわざ書き写したような何かです。  
題名にEffectiveModernC++が入っていないのは更新が途中で止まる自信があるからです。

また、もしよろしければ、間違い、気になったところ、分かりづらいところなどを指摘してもらえると、サバがピチピチ跳ねて喜びます。喜びすぎてプログラミング言語C++第四版をあなたに投げつけるかもしれません。  
（ぜひ教えてください。よろしくお願いします。 < ( \_ \_ ) > 何でもするとは言いませんから…）

 

 

 

**項目5　明示的型宣言よりも auto を優先する**

 

**結論：****いいものはどんどん使おう！**

IDEあるならとりま使いましょう。ぐう有能。  
（もちろん注意するとこもあるみたいですが…  
  

具体的な使用例（特に変数宣言と範囲for文！！）

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr style="height: 28px;"><td style="width: 20.1157%; height: 28px;"><span style="color: #333333;"><strong>変数宣言</strong></span></td><td style="width: 48.9541%; height: 28px;"><span style="color: #0000ff;">auto</span> value = 0;</td><td style="width: 30.9301%; height: 28px;"><span style="color: #808080;">&nbsp;int</span></td></tr><tr style="height: 28px;"><td style="width: 20.1157%; height: 28px;"><span style="color: #333333;"><strong>範囲for文</strong></span></td><td style="width: 48.9541%; height: 28px;">for (<span style="color: #0000ff;">const</span> <span style="color: #0000ff;">auto&amp;</span> content : container) { }</td><td style="width: 30.9301%; height: 28px;"><span style="color: #808080;">範囲for文 + auto&amp;は最強</span></td></tr><tr style="height: 28px;"><td style="width: 20.1157%; height: 28px;"><span style="color: #333333;"><strong>関数の戻り値</strong></span></td><td style="width: 48.9541%; height: 28px;"><span style="color: #0000ff;">auto</span> func(){ return "auau"; }</td><td style="width: 30.9301%; height: 28px;"><span style="color: #808080;">const char *</span></td></tr><tr style="height: 28px;"><td style="width: 20.1157%; height: 28px;"><span style="color: #333333;"><strong>ラムダ式の引数</strong></span></td><td style="width: 48.9541%; height: 28px;">auto lambda = [](<span style="color: #0000ff;">auto&amp;</span> arg)<br>{&nbsp;<br>&nbsp; &nbsp; std::cout &lt;&lt; arg;<br>};</td><td style="width: 30.9301%; height: 28px;"><span style="color: #808080;">これはC++14以降の機能</span></td></tr></tbody></table>

 

 

 

 

**・auto ? なにそれおいしいの？  
**

    つ　[autoはおいちい。](http://akitatnp.wp.xdomain.jp/2018/07/22/c%E3%81%8C%E4%BD%BF%E3%81%88%E3%81%9F%E3%81%84/#auto?)（前回の記事）  
　　　もし良ければ下にある「autoの利点」もどうぞ…　　　　　( このサイトが大好き。 : [cpprefjp)](https://cpprefjp.github.io/lang/cpp11/auto.html)　// 神様です。いつもありがとうございます。　　

 

 

 

 

**・深淵を覗きに行くために…**

　**auto の利点**

　・**変数の初期化忘れがなくなる**

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 100%;">&nbsp; &nbsp; <span style="color: #0000ff;">auto</span> i = 0;</td></tr></tbody></table>

- 型推論のために必ず初期値を指定する必要がある。

 

　・**コンパイラが適切な型を選んでくれる**

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 100%;">&nbsp; &nbsp; std::vector&lt;int&gt; vec;<br>&nbsp; &nbsp; <span style="color: #0000ff;">auto</span> size = vec.size();&nbsp;</td></tr></tbody></table>

- std::vector<int>のサイズを表す非負整数型は std::vector<int>::size\_type だけど、そんな長いの覚えてコーディングする必要がなくなる。

 

　・**労力が減る**

<table border="1" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 100%;">&nbsp; &nbsp;&nbsp;std::vector&lt;int&gt; data(10)<br><br>&nbsp; &nbsp; for (<span style="color: #0000ff;">auto&amp;</span> val : data)<br>&nbsp; &nbsp; &nbsp; &nbsp; std::cin &gt;&gt; val;<br><br>&nbsp; &nbsp; for (<span style="color: #0000ff;">auto</span> ite = data.crbegin(); ite != data.crend(); ++ite)<br>&nbsp; &nbsp; &nbsp; &nbsp; std::cout &lt;&lt; *ite &lt;&lt; std::endl;<br><br></td></tr></tbody></table>

- 入力から10個の整数を受け取って逆順で出力するプログラム
- std::vector<int> の int を書き換えるだけでどんな型にも対応できる（double, std::string, long, etc...）
- イテレータの型指定で悩むこともなくなる
- コンパイラに任せた方がヒューマンエラーは減る。楽しよう！

 

 

私は脳死して使うようにしています。autoだいしゅき。  
C++に追加されたということは、いいからだまって使えという機能のはずですから。（盲信）

 

 

[＜　前の項目へ](http://akitatnp.wp.xdomain.jp/2018/07/22/c%E3%81%8C%E4%BD%BF%E3%81%88%E3%81%9F%E3%81%84/)　　　[次の項目へ　＞](http://akitatnp.wp.xdomain.jp/2018/08/06/c%E3%81%8C%E4%BD%BF%E3%81%88%E3%81%9F%E3%81%84-%E9%A0%85%E7%9B%AE6%EF%BC%88auto-2%EF%BC%89/)
