##CN
<article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-ceb-custom-element-builder" class="anchor" href="#ceb-custom-element-builder" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><code><trans data-src="<ceb/>" data-dst="行政首长协调会/ < >">行政首长协调会/ &lt; &gt;</trans></code><trans data-src=" custom-element-builder" data-dst="自定义元素生成器" style="background: transparent;">自定义元素生成器</trans></h1>

<p><a href="https://circleci.com/gh/tmorin/ceb"><img src="https://camo.githubusercontent.com/3a1996a6cd1e1b79dfb4c2d5c8d7908579647bd3/68747470733a2f2f636972636c6563692e636f6d2f67682f746d6f72696e2f6365622e7376673f7374796c653d737667" alt="Circle CI" data-canonical-src="https://circleci.com/gh/tmorin/ceb.svg?style=svg" style="max-width:100%;"></a>
<a href="https://david-dm.org/tmorin/ceb"><img src="https://camo.githubusercontent.com/93e66a40ffac6584305348f041185b7f17531ede/68747470733a2f2f64617669642d646d2e6f72672f746d6f72696e2f6365622e737667" alt="Dependency Status" data-canonical-src="https://david-dm.org/tmorin/ceb.svg" style="max-width:100%;"></a>
<a href="https://david-dm.org/tmorin/ceb#info=devDependencies"><img src="https://camo.githubusercontent.com/3a4ebe6ff919147e7cf666e3460ad4db3106d22d/68747470733a2f2f64617669642d646d2e6f72672f746d6f72696e2f6365622f6465762d7374617475732e737667" alt="devDependency Status" data-canonical-src="https://david-dm.org/tmorin/ceb/dev-status.svg" style="max-width:100%;"></a></p>

<p><a href="https://saucelabs.com/u/customelementbuilder"><img src="https://camo.githubusercontent.com/16992985e0df897f0a15315c748c50784740d278/68747470733a2f2f73617563656c6162732e636f6d2f62726f777365722d6d61747269782f637573746f6d656c656d656e746275696c6465722e737667" alt="Sauce Test Status" data-canonical-src="https://saucelabs.com/browser-matrix/customelementbuilder.svg" style="max-width:100%;"></a></p>

<p><code><trans data-src="<ceb/>" data-dst="行政首长协调会/ < >">行政首长协调会/ &lt; &gt;</trans></code><trans data-src=" is a library helping to develop " data-dst="是一个库，帮助开发">是一个库，帮助开发</trans><a href="http://w3c.github.io/webcomponents/spec/custom"><trans data-src="Custom Elements" data-dst="自定义元素">自定义元素</trans></a><trans data-src="." data-dst="。">。</trans></p>

<p><trans data-src="It's core is a builder which executes others builders.
By this way, " data-dst="它的核心是一个生成器执行别人的
的建设者，">它的核心是一个生成器执行别人的
的建设者，</trans><code><trans data-src="<ceb/>" data-dst="行政首长协调会/ < >">行政首长协调会/ &lt; &gt;</trans></code><trans data-src=" is natively opened to extensions and builders easily sharable. " data-dst="本机打开扩展和建设者轻松共享。">本机打开扩展和建设者轻松共享。</trans></p>

<p><trans data-src="Obviously, " data-dst="很明显，" style="background: transparent;">很明显，</trans><code><trans data-src="<ceb/>" data-dst="行政首长协调会/ < >">行政首长协调会/ &lt; &gt;</trans></code><trans data-src=" exposes builders and helpers handling the common needs:" data-dst="暴露的建设者和助手处理的共同需求：">暴露的建设者和助手处理的共同需求：</trans></p>

<ul>
<li><trans data-src="property" data-dst="财产">财产</trans></li>
<li><trans data-src="attribute" data-dst="属性">属性</trans></li>
<li><trans data-src="events" data-dst="事件">事件</trans></li>
<li><trans data-src="delegation to child element (attribute, property and method)" data-dst="儿童元团（属性、属性和方法）">儿童元团（属性、属性和方法）</trans></li>
<li><trans data-src="templating" data-dst="模板">模板</trans></li>
<li><trans data-src="event dispatching" data-dst="事件分派" style="background: transparent;">事件分派</trans></li>
<li><trans data-src="type checking" data-dst="类型检查">类型检查</trans></li>
<li><trans data-src="etc." data-dst="等。">等。</trans></li>
</ul>

<h2><a id="user-content-quick-overview" class="anchor" href="#quick-overview" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Quick overview" data-dst="概述">概述</trans></h2>

<div class="highlight highlight-source-js"><pre><span class="pl-k"><trans data-src="import" data-dst="进口">进口</trans></span><trans data-src=" {" data-dst="{">{</trans><span class="pl-smi"><trans data-src="element" data-dst="元素">元素</trans></span><trans data-src=", " data-dst="，">，</trans><span class="pl-smi"><trans data-src="property" data-dst="财产">财产</trans></span><trans data-src=", " data-dst="，">，</trans><span class="pl-smi"><trans data-src="method" data-dst="方法">方法</trans></span><trans data-src=", " data-dst="，">，</trans><span class="pl-smi"><trans data-src="dispatchCustomEvent" data-dst="dispatchcustomevent">dispatchcustomevent</trans></span><trans data-src="} " data-dst="}">}</trans><span class="pl-k"><trans data-src="from" data-dst="从">从</trans></span> <span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="ceb" data-dst="光大银行">光大银行</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=";

" data-dst="；">；</trans><span class="pl-c"><trans data-src="// create a fresh element builder" data-dst="//创建一个新鲜元素生成器">//创建一个新鲜元素生成器</trans></span>
<span class="pl-k"><trans data-src="let" data-dst="让">让</trans></span><trans data-src=" builder " data-dst="生成器">生成器</trans><span class="pl-k">=</span> <span class="pl-en"><trans data-src="element" data-dst="元素">元素</trans></span><trans data-src="();

" data-dst="（）；">（）；</trans><span class="pl-smi"><trans data-src="builder" data-dst="生成器">生成器</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="builders" data-dst="建设者">建设者</trans></span><trans data-src="(
    " data-dst="（">（</trans><span class="pl-c"><trans data-src="// add a property named foo initialized to 0" data-dst="/ /添加一个属性命名为foo初始化为0">/ /添加一个属性命名为foo初始化为0</trans></span>
    <span class="pl-en"><trans data-src="property" data-dst="财产">财产</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="foo" data-dst="Foo">Foo</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=")." data-dst="）。">）。</trans><span class="pl-c1"><trans data-src="value" data-dst="价值">价值</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-c1"><trans data-src="0" data-dst="零">零</trans></span><trans data-src="),

    " data-dst="），">），</trans><span class="pl-c"><trans data-src="// add a method named incFoo, which will increment the foo value" data-dst="/ /添加一个方法叫incfoo，这将增加foo的值">/ /添加一个方法叫incfoo，这将增加foo的值</trans></span>
    <span class="pl-en"><trans data-src="method" data-dst="方法">方法</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="incFoo" data-dst="incfoo">incfoo</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=")." data-dst="）。">）。</trans><span class="pl-en"><trans data-src="invoke" data-dst="调用">调用</trans></span><trans data-src="( (" data-dst="（（">（（</trans><span class="pl-smi"><trans data-src="el" data-dst="EL">EL</trans></span><trans data-src=", " data-dst="，">，</trans><span class="pl-smi"><trans data-src="num" data-dst="号码">号码</trans></span><span class="pl-k">=</span><span class="pl-c1"><trans data-src="1" data-dst="一">一</trans></span><trans data-src=") " data-dst="）">）</trans><span class="pl-k">=&gt;</span> <span class="pl-smi"><trans data-src="el" data-dst="EL">EL</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-smi"><trans data-src="foo" data-dst="Foo">Foo</trans></span> <span class="pl-k">=</span> <span class="pl-smi"><trans data-src="el" data-dst="EL">EL</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-smi"><trans data-src="foo" data-dst="Foo">Foo</trans></span> <span class="pl-k"><trans data-src="+" data-dst=" "> </trans></span><trans data-src=" num )
);

" data-dst="Num）
）；">Num）
）；</trans><span class="pl-smi"><trans data-src="builder" data-dst="生成器">生成器</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="builders" data-dst="建设者">建设者</trans></span><trans data-src="(
    " data-dst="（">（</trans><span class="pl-c"><trans data-src="// add a method named bar, which will dispatch the custom event 'bar' when invoked" data-dst="/ /添加一个方法命名的酒吧，将派遣“酒吧”，当调用自定义事件">/ /添加一个方法命名的酒吧，将派遣“酒吧”，当调用自定义事件</trans></span>
    <span class="pl-en"><trans data-src="method" data-dst="方法">方法</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="bar" data-dst="酒吧">酒吧</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=")." data-dst="）。">）。</trans><span class="pl-en"><trans data-src="invoke" data-dst="调用">调用</trans></span><trans data-src="( (" data-dst="（（">（（</trans><span class="pl-smi"><trans data-src="el" data-dst="EL">EL</trans></span><trans data-src=", " data-dst="，">，</trans><span class="pl-smi"><trans data-src="detail" data-dst="详情">详情</trans></span><trans data-src=") " data-dst="）">）</trans><span class="pl-k">=&gt;</span> <span class="pl-en"><trans data-src="dispatchCustomEvent" data-dst="dispatchcustomevent">dispatchcustomevent</trans></span><trans data-src="(el, " data-dst="（EL，">（EL，</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="bar" data-dst="酒吧">酒吧</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=", {detail}) )
);

" data-dst="详细
 }，{）））；">详细
 }，{）））；</trans><span class="pl-c"><trans data-src="// build and register the custom element " data-dst="/ /建立和登记的自定义元素">/ /建立和登记的自定义元素</trans></span>
<span class="pl-k"><trans data-src="let" data-dst="让">让</trans></span><trans data-src=" CebExample " data-dst="cebexample">cebexample</trans><span class="pl-k">=</span> <span class="pl-smi"><trans data-src="builder" data-dst="生成器">生成器</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="register" data-dst="注册">注册</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="ceb-example" data-dst="CEB - example">CEB - example</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=");

" data-dst="）；">）；</trans><span class="pl-c"><trans data-src="// export the class of the custom element" data-dst="/ /出口的自定义元素的类">/ /出口的自定义元素的类</trans></span>
<span class="pl-k"><trans data-src="export" data-dst="出口">出口</trans></span> <span class="pl-v"><trans data-src="default" data-dst="默认">默认</trans></span> <span class="pl-smi"><trans data-src="CebExample" data-dst="cebexample">cebexample</trans></span><trans data-src=";" data-dst="；">；</trans></pre></div>

<div class="highlight highlight-source-js"><pre><span class="pl-c"><trans data-src="// create an instance of ceb-example" data-dst="//创建一个实例CEB的例子">//创建一个实例CEB的例子</trans></span>
<span class="pl-k"><trans data-src="var" data-dst="VaR">VaR</trans></span><trans data-src=" cebExample " data-dst="cebexample">cebexample</trans><span class="pl-k">=</span> <span class="pl-c1"><trans data-src="document" data-dst="文件">文件</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-c1"><trans data-src="createElement" data-dst="createElement"><trans data-src="createElement" data-dst="createElement">createElement</trans></trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="ceb-example" data-dst="CEB - example">CEB - example</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src=");

" data-dst="）；">）；</trans><span class="pl-c"><trans data-src="// by default foo is 0" data-dst="/ /默认foo是0">/ /默认foo是0</trans></span>
<span class="pl-en"><trans data-src="console" data-dst="控制台">控制台</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-c1"><trans data-src="log" data-dst="日志">日志</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-smi"><trans data-src="cebExample" data-dst="cebexample">cebexample</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-smi"><trans data-src="foo" data-dst="Foo">Foo</trans></span><trans data-src=") " data-dst="）">）</trans><span class="pl-c">// =&gt; 0</span>

<span class="pl-smi"><trans data-src="cebExample" data-dst="cebexample">cebexample</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="incFoo" data-dst="incfoo">incfoo</trans></span><trans data-src="();
" data-dst="（）；">（）；</trans><span class="pl-en"><trans data-src="console" data-dst="控制台">控制台</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-c1"><trans data-src="log" data-dst="日志">日志</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-smi"><trans data-src="cebExample" data-dst="cebexample">cebexample</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-smi"><trans data-src="foo" data-dst="Foo">Foo</trans></span><trans data-src=") " data-dst="）">）</trans><span class="pl-c">// =&gt; now it's: 1</span>

<span class="pl-smi"><trans data-src="cebExample" data-dst="cebexample">cebexample</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="incFoo" data-dst="incfoo">incfoo</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-c1"><trans data-src="2" data-dst="二">二</trans></span><trans data-src=");
" data-dst="）；">）；</trans><span class="pl-en"><trans data-src="console" data-dst="控制台">控制台</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-c1"><trans data-src="log" data-dst="日志">日志</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-smi"><trans data-src="cebExample" data-dst="cebexample">cebexample</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-smi"><trans data-src="foo" data-dst="Foo">Foo</trans></span><trans data-src=") " data-dst="）">）</trans><span class="pl-c">// =&gt; and finally: 3</span>

<span class="pl-smi"><trans data-src="cebExample" data-dst="cebexample">cebexample</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="bar" data-dst="酒吧">酒吧</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="foo" data-dst="Foo">Foo</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src="); " data-dst="）；">）；</trans><span class="pl-c">// =&gt; dispatch the custom event 'bar' with the detail 'foo'</span></pre></div>

<h2><a id="user-content-download" class="anchor" href="#download" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Download" data-dst="下载">下载</trans></h2>

<p><code><trans data-src="<ceb/>" data-dst="行政首长协调会/ < >">行政首长协调会/ &lt; &gt;</trans></code><trans data-src=" is available from " data-dst="可从">可从</trans><a href="https://www.npmjs.com/package/ceb"><trans data-src="npm" data-dst="新公共管理">新公共管理</trans></a><trans data-src=" and " data-dst="和">和</trans><a href="http://bower.io/search/?q=ceb"><trans data-src="bower" data-dst="鲍尔">鲍尔</trans></a><trans data-src="." data-dst="。">。</trans></p>

<p><trans data-src="From npm:" data-dst="从新公共管理：">从新公共管理：</trans></p>

<div class="highlight highlight-source-shell"><pre><trans data-src="npm install ceb" data-dst="NPM安装CEB">NPM安装CEB</trans></pre></div>

<p><trans data-src="From bower:" data-dst="从凉亭：">从凉亭：</trans></p>

<div class="highlight highlight-source-shell"><pre><trans data-src="bower install ceb" data-dst="鲍尔安装CEB">鲍尔安装CEB</trans></pre></div>

<h2><a id="user-content-license" class="anchor" href="#license" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="License" data-dst="许可证">许可证</trans></h2>

<p><trans data-src="Released under the " data-dst="下发布">下发布</trans><a href="http://opensource.org/licenses/MIT"><trans data-src="MIT license" data-dst="MIT许可证">MIT许可证</trans></a><trans data-src="." data-dst="。">。</trans></p>
</article>
##EN
#`<ceb/>` <small>custom-element-builder</small>

[![Circle CI](https://circleci.com/gh/tmorin/ceb.svg?style=svg)](https://circleci.com/gh/tmorin/ceb)
[![Dependency Status](https://david-dm.org/tmorin/ceb.svg)](https://david-dm.org/tmorin/ceb)
[![devDependency Status](https://david-dm.org/tmorin/ceb/dev-status.svg)](https://david-dm.org/tmorin/ceb#info=devDependencies)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/customelementbuilder.svg)](https://saucelabs.com/u/customelementbuilder)

`<ceb/>` is a library helping to develop [Custom Elements](http://w3c.github.io/webcomponents/spec/custom).

It's core is a builder which executes others builders.
By this way, `<ceb/>` is natively opened to extensions and builders easily sharable. 

Obviously, `<ceb/>` exposes builders and helpers handling the common needs:

- property
- attribute
- events
- delegation to child element (attribute, property and method)
- templating
- event dispatching
- type checking
- etc.

## Quick overview

```javascript
import {element, property, method, dispatchCustomEvent} from 'ceb';

// create a fresh element builder
let builder = element();

builder.builders(
    // add a property named foo initialized to 0
    property('foo').value(0),

    // add a method named incFoo, which will increment the foo value
    method('incFoo').invoke( (el, num=1) => el.foo = el.foo + num )
);

builder.builders(
    // add a method named bar, which will dispatch the custom event 'bar' when invoked
    method('bar').invoke( (el, detail) => dispatchCustomEvent(el, 'bar', {detail}) )
);

// build and register the custom element 
let CebExample = builder.register('ceb-example');

// export the class of the custom element
export default CebExample;
```

```javascript
// create an instance of ceb-example
var cebExample = document.createElement('ceb-example');

// by default foo is 0
console.log(cebExample.foo) // => 0

cebExample.incFoo();
console.log(cebExample.foo) // => now it's: 1

cebExample.incFoo(2);
console.log(cebExample.foo) // => and finally: 3

cebExample.bar('foo'); // => dispatch the custom event 'bar' with the detail 'foo'
```

## Download

`<ceb/>` is available from [npm](https://www.npmjs.com/package/ceb) and [bower](http://bower.io/search/?q=ceb).

From npm:
```shell
npm install ceb
```

From bower:
```shell
bower install ceb
```

## License

Released under the [MIT license](http://opensource.org/licenses/MIT).
