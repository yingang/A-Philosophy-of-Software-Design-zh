import{_ as t}from"./00013-BT2rC0s8.js";import{_ as l,c as o,a as s,e as n,b as e,w as p,d as c,r as i,o as r}from"./app-CkSjquWa.js";const u={},d=s("h1",{id:"第-18-章-程式碼應該是顯而易見的",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#第-18-章-程式碼應該是顯而易見的"},[s("span",null,"第 18 章 程式碼應該是顯而易見的")])],-1),k=s("p",null,"如果程式碼是顯而易見的，則意味著人們可以快速閱讀其程式碼，無需多想，他們對程式碼行為或含義的猜測也將是正確的。如果程式碼是顯而易見的，那麼讀者就不需要花費太多時間或精力來收集他們使用程式碼所需的所有資訊。如果程式碼不是顯而易見的，那麼讀者必須花費大量時間和精力來理解它。這不僅會降低他們的效率，而且還增加了誤解和引入缺陷的可能性。顯而易見的程式碼比不顯而易見的程式碼需要的註釋更少。",-1),m=s("p",null,"這裡說的“顯而易見”是對讀者而言的：注意到別人程式碼裡難以理解的地方比發現自己的程式碼有問題要容易得多。因此，確定程式碼是否顯而易見的最佳方法是透過程式碼審查。如果閱讀您程式碼的人說它不是顯而易見的，那麼它就不是顯而易見的，無論它對您來說是多麼的清晰。透過嘗試理解什麼使程式碼變得不顯而易見，您將學會如何在未來寫出更好的程式碼。",-1),v=s("h2",{id:"_18-1-使程式碼更顯而易見的事情",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_18-1-使程式碼更顯而易見的事情"},[s("span",null,"18.1 使程式碼更顯而易見的事情")])],-1),h=c(`<p>以下是其它一些使程式碼更明顯的通用技術：</p><p><strong>明智地使用空格</strong>。程式碼的格式化方式會影響其被理解的容易程度。考慮以下引數文件，其中空格已被壓縮：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> *  ...</span>
<span class="line"> *  <span class="token keyword">@param</span> <span class="token parameter">numThreads</span> The number of threads that this manager should</span>
<span class="line"> *  spin up in order to manage ongoing connections. The MessageManager</span>
<span class="line"> *  spins up at least one thread for every open connection, so this</span>
<span class="line"> *  should be at least equal to the number of connections you expect</span>
<span class="line"> *  to be open at once. This should be a multiple of that number if</span>
<span class="line"> *  you expect to send a lot of messages in a short amount of time.</span>
<span class="line"> *  <span class="token keyword">@param</span> <span class="token parameter">handler</span> Used as a callback in order to handle incoming</span>
<span class="line"> *  messages on this MessageManager&#39;s open connections. See</span>
<span class="line"> *  <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">MessageHandler</span></span></span><span class="token punctuation">}</span> and <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">handleMessage</span></span><span class="token punctuation">}</span> for details.</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很難看到一個引數的文件在哪裡結束而下一個引數的文件在哪裡開始。甚至不知道有多少個引數或它們的名稱是什麼。如果添加了一些空格，結構會突然變得清晰，文件也更容易閱讀：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> *  <span class="token keyword">@param</span> <span class="token parameter">numThreads</span></span>
<span class="line"> *           The number of threads that this manager should spin up in</span>
<span class="line"> *           order to manage ongoing connections. The MessageManager spins</span>
<span class="line"> *           up at least one thread for every open connection, so this</span>
<span class="line"> *           should be at least equal to the number of connections you</span>
<span class="line"> *           expect to be open at once. This should be a multiple of that</span>
<span class="line"> *           number if you expect to send a lot of messages in a short</span>
<span class="line"> *           amount of time.</span>
<span class="line"> *  <span class="token keyword">@param</span> <span class="token parameter">handler</span></span>
<span class="line"> *           Used as a callback in order to handle incoming messages on</span>
<span class="line"> *           this MessageManager&#39;s open connections. See</span>
<span class="line"> *           <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">MessageHandler</span></span></span><span class="token punctuation">}</span> and <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">handleMessage</span></span><span class="token punctuation">}</span> for details.</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>空白行也可用於分隔方法中的主要程式碼塊，例如以下示例：</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">void</span><span class="token operator">*</span> <span class="token class-name">Buffer</span><span class="token double-colon punctuation">::</span><span class="token function">allocAux</span><span class="token punctuation">(</span>size_t numBytes<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Round up the length to a multiple of 8 bytes, to ensure alignment.</span></span>
<span class="line">    <span class="token keyword">uint32_t</span> numBytes32 <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">downCast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint32_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>numBytes<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token operator">~</span><span class="token number">0x7</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">assert</span><span class="token punctuation">(</span>numBytes32 <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// If there is enough memory at firstAvailable, use that. Work down</span></span>
<span class="line">    <span class="token comment">// from the top, because this memory is guaranteed to be aligned</span></span>
<span class="line">    <span class="token comment">// (memory at the bottom may have been used for variable-size chunks).</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>availableLength <span class="token operator">&gt;=</span> numBytes32<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        availableLength <span class="token operator">-=</span> numBytes32<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> firstAvailable <span class="token operator">+</span> availableLength<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Next, see if there is extra space at the end of the last chunk.</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>extraAppendBytes <span class="token operator">&gt;=</span> numBytes32<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        extraAppendBytes <span class="token operator">-=</span> numBytes32<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> lastChunk<span class="token operator">-&gt;</span>data <span class="token operator">+</span> lastChunk<span class="token operator">-&gt;</span>length <span class="token operator">+</span> extraAppendBytes<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Must create a new space allocation; allocate space within it.</span></span>
<span class="line">    <span class="token keyword">uint32_t</span> allocatedLength<span class="token punctuation">;</span></span>
<span class="line">    firstAvailable <span class="token operator">=</span> <span class="token function">getNewAllocation</span><span class="token punctuation">(</span>numBytes32<span class="token punctuation">,</span> <span class="token operator">&amp;</span>allocatedLength<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    availableLength <span class="token operator">=</span> allocatedLength <span class="token operator">-</span> numBytes32<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> firstAvailable <span class="token operator">+</span> availableLength<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果每個空白行之後的第一行是描述下一個程式碼塊的註釋，則此方法特別有效：空白行使註釋更可見。</p><p>語句中的空格有助於闡明語句的結構。比較以下兩個語句，其中之一具有空格，而另外一個沒有空格：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> pass<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>pass<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span><span class="token operator">!</span>empty<span class="token punctuation">;</span>pass<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> pass <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> pass <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>empty<span class="token punctuation">;</span> pass<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>註釋</strong>。有時無法避免非顯而易見的程式碼。發生這種情況時，重要的是使用註釋來提供缺少的資訊以進行彌補。要做好這一點，您必須把自己放在讀者的位置上，弄清楚什麼可能會使他們感到困惑，以及哪些資訊可以消除這種困惑。下一節將介紹幾個示例。</p><h2 id="_18-2-使程式碼不那麼顯而易見的事情" tabindex="-1"><a class="header-anchor" href="#_18-2-使程式碼不那麼顯而易見的事情"><span>18.2 使程式碼不那麼顯而易見的事情</span></a></h2><p>有很多事情可以使程式碼變得不顯而易見。本節提供了一些示例。其中一些，例如事件驅動程式設計，在某些情況下很有用，所以您可能最終會使用它們。發生這種情況時，額外的文件有助於最大程度地減少讀者的困惑。</p><p><strong>事件驅動程式設計</strong>。在事件驅動程式設計中，應用程式對外部事件做出響應，例如網路資料包的到來或滑鼠按鈕被按下。一個模組負責報告傳入的事件，而應用程式的其他部分透過註冊感興趣的事件來要求事件模組在事件發生時呼叫給定的函式或方法。</p><p>事件驅動程式設計使得控制流程很難被跟蹤。事件處理函式從未被直接呼叫，它們是由事件模組間接呼叫的，通常使用函式指標或介面。即使您在事件模組中找到了呼叫點，也仍然無法確定哪個具體的函式會被呼叫：這將取決於在執行時註冊了哪些處理程式。正因為如此，很難對事件驅動的程式碼進行推理，也很難說服自己它是在有效工作的。</p><p>為了彌補這種模糊性，使用每個處理函式的介面註釋來表明它何時被呼叫，如以下示例所示：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * This method is invoked in the dispatch thread by a transport if a</span>
<span class="line"> * transport-level error prevents an RPC from completing.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token class-name">Transport</span><span class="token operator">::</span><span class="token class-name">RpcNotifier</span><span class="token operator">::</span><span class="token function">failed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+'" alt=""> 危險訊號：非顯而易見的程式碼 <img src="'+t+`" alt=""></p><blockquote><p>如果無法透過快速閱讀來理解程式碼的含義和行為，則它是一個危險訊號。通常，這意味著閱讀程式碼的人並不能立即搞清楚某些重要的資訊。</p></blockquote><p><strong>通用容器</strong>。許多語言提供了用於將兩個或多個專案組合到一個物件中的通用類，例如 Java 中的 <code>Pair</code> 或 C++ 中的 <code>std::pair</code>。這些類很誘人，因為它們使得透過單個變數傳遞多個物件變得容易。最常見的用途之一是從一個方法返回多個值，如以下 Java 示例所示：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Pair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>currentTerm<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>不幸的是，通用容器會導致程式碼不清晰，因為分組後的元素具有含義模糊的通用名稱。在上面的示例中，呼叫者必須使用 <code>result.getKey()</code> 和 <code>result.getValue()</code> 引用兩個返回的值，這並沒有提供關於這些值的實際含義的任何線索。</p><p>因此，最好不要使用通用容器。如果需要容器，請定義專門新的用於特定用途的類或結構。然後，您可以為元素使用有意義的名稱，並且可以在宣告中提供額外的文件，而對於通用容器而言這些都是不可能的。</p><p>此示例說明了一條通用規則：<strong>軟體應被設計成易於閱讀而不是易於編寫</strong>。通用容器對於編寫程式碼的人來說是很方便的，但是它們會給所有後續的讀者帶來困惑。對於編寫程式碼的人來說，花一些額外的時間來定義特定的容器結構是更好的選擇，這樣寫出來的程式碼更加顯而易見。</p><p><strong>在宣告和賦值中使用了不同的型別</strong>。考慮以下 Java 示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Message</span><span class="token punctuation">&gt;</span></span> incomingMessageList<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">incomingMessageList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Message</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>該變數被宣告為 <code>List</code>，但實際的值型別為 <code>ArrayList</code>。這段程式碼是合法的，因為 <code>List</code> 是 <code>ArrayList</code> 的超類，但是它會誤導只看到宣告沒看到實際賦值的讀者。實際的型別可能會影響變數的使用方式（<code>ArrayList</code> 與 <code>List</code> 的其他子類相比，具有不同的效能和執行緒安全屬性），因此最好讓宣告與賦值的型別互相匹配。</p><p><strong>超出讀者期望的程式碼</strong>。考慮以下程式碼，這是 Java 應用程式的主程式</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">RaftClient</span><span class="token punctuation">(</span>myAddress<span class="token punctuation">,</span> serverAddresses<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大多數應用程式在其主程式返回時退出，因此讀者可能會認為這裡也是一樣的。然而，事實並非如此。<code>RaftClient</code> 的建構函式建立了額外的執行緒，即使應用程式的主執行緒結束了，該執行緒仍在繼續執行。應該在 RaftClient 建構函式的介面註釋中記錄此行為，但是該行為不夠明顯，因此值得在 <code>main</code> 函式的末尾新增簡短註釋，該註釋應描述該應用程式將繼續在其他執行緒中執行。如果程式碼符合讀者期望的約定，那麼它是顯而易見的。如果不是，那麼將行為記錄下來就很重要，這樣讀者才不會感到困惑。</p><h2 id="_18-3-結論" tabindex="-1"><a class="header-anchor" href="#_18-3-結論"><span>18.3 結論</span></a></h2><p>關於顯而易見性的另一種思考方式是從資訊的角度。如果程式碼不是顯而易見的，則通常意味著程式碼還存在讀者不瞭解的重要資訊：在 <code>RaftClient</code> 示例中，讀者可能不知道 <code>RaftClient</code> 建構函式建立了新執行緒；在 <code>Pair</code> 示例中，讀者可能不知道 <code>result.getKey()</code> 返回當前項的編號。</p><p>為了使程式碼顯而易見，您必須確保讀者總是擁有理解程式碼所需的資訊。您可以透過三種方式來做到這一點。最好的方法是使用抽象和消除特殊情況等設計技術，以減少需要了解的資訊量。其次，您可以利用讀者在其他上下文中已經瞭解到的資訊（例如，透過遵循約定並符合期望），這樣讀者不必為您的程式碼去了解新的資訊。第三，您可以使用諸如好名稱和戰略式註釋之類的技術在程式碼中向他們提供重要的資訊。</p>`,33);function g(b,y){const a=i("RouteLink");return r(),o("div",null,[d,s("p",null,[n("模糊性是"),e(a,{to:"/zh-tw/ch02.html"},{default:p(()=>[n("第 2.3 節")]),_:1}),n("中描述的造成複雜性的兩個主要原因之一。當系統的重要資訊對於新開發人員而言並不明顯時，就會產生模糊性。解決模糊性的方法是以顯而易見的方式編寫程式碼。本章討論了一些使程式碼更顯而易見或更不顯而易見的因素。")]),k,m,v,s("p",null,[n("在前面的章節中已經討論了使程式碼顯而易見的兩種最重要的技術。首先是選取好名稱（"),e(a,{to:"/zh-tw/ch14.html"},{default:p(()=>[n("第 14 章")]),_:1}),n("）。精確而有意義的名稱可以闡明程式碼的行為，並減少對文件的需求。如果名稱含糊不清，那麼讀者將不得不通讀程式碼，以推論被命名實體的含義，而這既費時又容易出錯。第二種技術是一致性（"),e(a,{to:"/zh-tw/ch17.html"},{default:p(()=>[n("第 17 章")]),_:1}),n("）。如果總是以相似的方式完成相似的事情，那麼讀者可以識別出他們以前所見過的模式，並立即得出（安全）結論，而無需詳細分析程式碼。")]),h])}const w=l(u,[["render",g],["__file","ch18.html.vue"]]),j=JSON.parse('{"path":"/zh-tw/ch18.html","title":"第 18 章 程式碼應該是顯而易見的","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"18.1 使程式碼更顯而易見的事情","slug":"_18-1-使程式碼更顯而易見的事情","link":"#_18-1-使程式碼更顯而易見的事情","children":[]},{"level":2,"title":"18.2 使程式碼不那麼顯而易見的事情","slug":"_18-2-使程式碼不那麼顯而易見的事情","link":"#_18-2-使程式碼不那麼顯而易見的事情","children":[]},{"level":2,"title":"18.3 結論","slug":"_18-3-結論","link":"#_18-3-結論","children":[]}],"git":{"updatedTime":1717637023000},"filePathRelative":"zh-tw/ch18.md"}');export{w as comp,j as data};