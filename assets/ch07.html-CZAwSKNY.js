import{_ as t}from"./00013-BT2rC0s8.js";import{_ as o,a as l}from"./00016-CdoQugCZ.js";import{_ as i,c as d,a as s,e as n,b as p,w as c,d as a,r as u,o as r}from"./app-5mwhgzDm.js";const k={},m=a(`<h1 id="第-7-章-不同的層級-不同的抽象" tabindex="-1"><a class="header-anchor" href="#第-7-章-不同的層級-不同的抽象"><span>第 7 章 不同的層級，不同的抽象</span></a></h1><p>軟體系統由不同的層級組成，其中較高的層級使用較低的層級提供的功能。在設計良好的系統中，每一層級都提供與其上下兩個層級不同的抽象。如果您透過方法呼叫來跟蹤一個在層級中上下移動的操作，那麼抽象會隨著每次方法呼叫而改變。例如：</p><ul><li>在檔案系統中，最上面的層級實現了檔案抽象。檔案由可變長度的位元組陣列組成，可以透過讀寫可變長度的位元組範圍來更新該檔案。檔案系統的下一層級在記憶體中實現了固定大小的磁碟塊的快取記憶體。呼叫者可以假定經常使用的塊將保留在記憶體中，以便可以快速訪問它們。最底部的層級由裝置驅動程式組成，它們在輔助儲存裝置和記憶體之間移動資料塊。</li><li>在諸如 TCP 的網路傳輸協議中，最頂部的層級提供的抽象是從一臺機器可靠地傳遞位元組流到另一臺機器。這個層級建立在一個更低的層級上，它在機器之間盡最大努力傳輸有限大小的資料包：大多數資料包會成功傳遞，但有些資料包可能會丟失或以錯誤的順序被傳遞。</li></ul><p>如果系統中包含的相鄰層級具有相似的抽象，則這是一個危險訊號，表明類的分解存在問題。本章討論了發生這種情況的場景、導致的問題以及如何重構以消除該問題。</p><h2 id="_7-1-透傳方法" tabindex="-1"><a class="header-anchor" href="#_7-1-透傳方法"><span>7.1 透傳方法</span></a></h2><p>當相鄰的層級具有相似的抽象時，問題通常以透傳方法的形式表現出來。透傳方法是一種除了呼叫有類似或相同簽名的另一個方法之外幾乎不做任何操作的方法。例如，一個實現圖形介面文字編輯器的學生專案包含一個幾乎完全由透傳方法組成的類。這是該類的摘錄：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TextDocument</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">TextArea</span> textArea<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">TextDocumentListener</span> listener<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Character</span> <span class="token function">getLastTypedCharacter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> textArea<span class="token punctuation">.</span><span class="token function">getLastTypedCharacter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCursorOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> textArea<span class="token punctuation">.</span><span class="token function">getCursorOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertString</span><span class="token punctuation">(</span><span class="token class-name">String</span> textToInsert<span class="token punctuation">,</span> <span class="token keyword">int</span> offset<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        textArea<span class="token punctuation">.</span><span class="token function">insertString</span><span class="token punctuation">(</span>textToInsert<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">willInsertString</span><span class="token punctuation">(</span><span class="token class-name">String</span> stringToInsert<span class="token punctuation">,</span> <span class="token keyword">int</span> offset<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>listener <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            listener<span class="token punctuation">.</span><span class="token function">willInsertString</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> stringToInsert<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>該類的 15 個公有方法中，有 13 個是透傳方法。</p><p><img src="`+t+'" alt=""> 危險訊號：透傳方法 <img src="'+t+'" alt=""></p><blockquote><p>透傳方法除了將引數傳遞給另外一個與其有相同 API 的方法外，不執行任何操作。這通常表示相關的類之間沒有明確的職責劃分。</p></blockquote><p>透傳方法使類變得更淺：它們增加了類的介面複雜性，從而增加了複雜性，但是並沒有增加系統的整體功能。在上述四個方法中，只有最後一個具有一點功能，雖然也微乎其微：該方法檢查了一個變數的有效性。透傳方法還會在類之間建立依賴關係：如果 <code>TextArea</code> 的 <code>insertString</code> 方法更改了簽名，則必須更改 <code>TextDocument</code> 中的 <code>insertString</code> 方法以進行匹配。</p><p>透傳方法表明類之間的責任劃分存在混淆。在上面的示例中，<code>TextDocument</code> 類提供了 <code>insertString</code> 方法，但是用於插入文字的功能完全在 <code>TextArea</code> 中實現。這通常是一個壞主意：某個功能的介面應該在實現該功能的同一個類中。當您看到從一個類到另一個類的透傳方法時，請考慮這兩個類，並問自己：這些類分別負責哪些功能和抽象？您將可能會注意到這些類之間的職責重疊。</p><p>解決方案是重構這些類，以使每個類都有各自不同且連貫的職責。圖 7.1 說明了幾種方法。一種方法，如圖 7.1（b）所示，是將較低層級的類直接暴露給較高層級的類的呼叫者，而從較高層級的類中移除對該功能的所有責任。另一種方法是在類之間重新分配功能，如圖 7.1（c）所示。最後，如果無法解開這些類，最好的解決方案可能是如圖 7.1（d）所示合併它們。</p><p><img src="'+o+'" alt=""></p><p>圖 7.1：透傳方法。在（a）中，類 C1 包含三個透傳方法，這些方法只調用 C2 中具有相同簽名的方法（每個符號代表一個特定的方法簽名）。可以像在（b）中那樣使 C1 的呼叫方直接呼叫 C2，或者像在 (c) 中那樣在 C1 和 C2 之間重新分配功能以避免這兩個類之間的呼叫，或者像在 (d) 中那樣將這兩個類組合起來，以消除透傳方法。</p><p>在上面的示例中，職責交織的三個類為：TextDocument、TextArea 和 TextDocumentListener。這次學生透過在類之間移動方法並將三個類縮減為兩個類來消除透傳方法，而這兩個類的職責也變得更加明確。</p><h2 id="_7-2-什麼時候可以有重複的介面" tabindex="-1"><a class="header-anchor" href="#_7-2-什麼時候可以有重複的介面"><span>7.2 什麼時候可以有重複的介面？</span></a></h2><p>具有相同簽名的方法並不總是不好的。重要的是，每種新方法都應貢獻重要的功能。透傳方法很糟糕是因為它們不提供任何新功能。</p><p>一個方法呼叫另一個具有相同簽名的方法的有用的例子是分發器（Dispatcher）。分發器也是一個方法，它基於自己接收到的引數從其他幾個方法中選擇一個來呼叫，並將其大部分或全部引數傳遞給選定的方法。分發器的簽名通常與其呼叫的方法的簽名相同。儘管如此，分發器還是提供了有用的功能：它從其他幾個方法中選擇了一個來執行任務。</p><p>例如，當 Web 伺服器從 Web 瀏覽器接收到傳入的 HTTP 請求時，它將呼叫一個分發器來檢查傳入請求中的 URL 並選擇一種特定的方法來處理該請求。某些 URL 可以透過返回磁碟上檔案的內容來處理；其他的則可能透過呼叫諸如 PHP 或 JavaScript 之類的語言的程式來處理。分發過程可能非常複雜，通常由與傳入 URL 匹配的一組規則來驅動。</p><p>只要每個方法都提供了有用且獨特的功能，幾個方法都具有相同的簽名是可以接受的。分發器呼叫的方法就具有此屬性。另一個示例是具有多種實現的介面，例如作業系統中的磁碟驅動程式。每個驅動程式都支援不同型別的磁碟，但是它們都有相同的介面。當幾個方法提供了同一介面的不同實現時，它將減少認知負荷。只要使用過其中一個方法，也就更容易使用其他的方法，因為您無需學習新的介面。像這樣的方法通常位於同一層級，並且它們不會相互呼叫。</p><h2 id="_7-3-裝飾器" tabindex="-1"><a class="header-anchor" href="#_7-3-裝飾器"><span>7.3 裝飾器</span></a></h2>',22),h=s("code",null,"BufferedInputStream",-1),_=s("code",null,"InputStream",-1),v=s("code",null,"read",-1),b=s("code",null,"InputStream",-1),f=s("code",null,"read",-1),g=s("code",null,"read",-1),x=s("code",null,"Window",-1),w=s("code",null,"ScrollableWindow",-1),I=a('<p>裝飾器的動機是將類的專用擴充套件與更通用的核心功能分開。但是，裝飾器類往往很淺：它們引入了大量的樣板以實現少量的新功能。裝飾器類通常包含許多透傳方法。過度使用裝飾器模式很容易，只要為每個小的新功能都建立一個新的類。這將導致諸如 Java I/O 示例的淺類激增。</p><p>建立裝飾器類之前，請考慮以下替代方法：</p><ul><li>您能否將新功能直接新增到基礎類，而不是建立裝飾器類？如果新功能是相對通用的，或者在邏輯上與基礎類相關，或者如果使用基礎類的大多數時候也將使用新功能，則這是有意義的。例如，幾乎每個建立 Java <code>InputStream</code> 的人都會建立一個 <code>BufferedInputStream</code>，並且緩衝是 I/O 的自然組成部分，因此應該合併這些類。</li><li>如果新功能專用於特定用例，將其與用例合併而不是建立單獨的類是否更有意義？</li><li>您可以將新功能與現有的裝飾器合併，而不是建立新的裝飾器嗎？這將產生一個更深的裝飾器類，而不是多個淺的裝飾器類。</li><li>最後，問問自己新功能是否真的需要包裝現有功能：是否可以將其實現為獨立於基礎類的獨立類？在視窗示例中，捲軸可能可以與主視窗分開實現，而無需包裝其所有的現有功能。</li></ul><p>裝飾器有時是有意義的，但通常會有更好的選擇。</p><h2 id="_7-4-介面與實現" tabindex="-1"><a class="header-anchor" href="#_7-4-介面與實現"><span>7.4 介面與實現</span></a></h2>',5),T=a('<p>當文字類提供的是面向字元的介面時，使用起來要容易得多，例如，insert 方法可在文字的任意位置插入任意文字字串（可能包括換行符），而 delete 方法則可以在文字中的兩個任意位置之間刪除文字。在內部，文字仍以行表示。面向字元的介面封裝了文字類內部的行拆分和連線的複雜性，這使文字類更深，並簡化了使用該類的高層級程式碼。透過這種方法，文字 API 與面向行的儲存機制大不相同，這個差異也表示該類提供了有價值的功能。</p><h2 id="_7-5-透傳變數" tabindex="-1"><a class="header-anchor" href="#_7-5-透傳變數"><span>7.5 透傳變數</span></a></h2><p>跨層級 API 重複的另一種形式是透傳變數，該變數是透過一長串方法向下傳遞的變數。圖 7.2（a）顯示了一個數據中心服務的示例。命令列引數描述用於安全通訊的證書。只有底層方法 <code>m3</code> 才需要此資訊，該方法呼叫一個庫方法來開啟套接字，但是該資訊會透過 <code>main</code> 和 <code>m3</code> 之間路徑上的所有方法向下傳遞。<code>cert</code> 變量出現在每個中間方法的簽名中。</p><p>透傳變數增加了複雜性，因為它們強迫所有中間方法知道它們的存在，即使這些變數對這些中間方法沒有用處。此外，如果存在一個新變數（例如，最初構建的系統不支援證書，但是您後來決定新增該支援），則可能必須修改大量的介面和方法才能將變數傳遞給所有相關路徑。</p><p>消除透傳變數可能是有挑戰性的。一種方法是檢視最頂層和最底層方法之間是否已共享物件。在圖 7.2 的資料中心服務示例中，也許存在一個物件，其中包含有關網路通訊的其他資訊，並且對於 <code>main</code> 和 <code>m3</code> 都是可用的。如果是這樣，<code>main</code> 可以將證書資訊儲存在該物件中，因此不必透過通往 <code>m3</code> 的路徑上的所有中間方法來傳遞證書（請參見圖 7.2（b））。但是，如果存在這樣的物件，則它本身可能是傳遞變數（否則 <code>m3</code> 如何能訪問到它？）。</p><p>另一種方法是將資訊儲存在全域性變數中，如圖 7.2（c）所示。這避免了將資訊從一個方法傳遞到另一個方法的需要，但是全域性變數幾乎總是會產生其他問題。例如，全域性變數使得不可能在同一個程序中建立同一系統的兩個獨立例項，因為對全域性變數的訪問會發生衝突。雖然在生產中似乎不太可能需要多個例項，但是它們通常在測試中很有用。</p><p>我最常使用的解決方案是引入一個上下文（Context）物件，如圖 7.2（d）所示。上下文儲存應用程式的所有全域性狀態（否則將只能是透傳變數或全域性變數的任何狀態）。大多數應用程式在其全域性狀態下具有多個變數，這些變量表示諸如配置選項、共享的子系統和效能計數器之類的內容。每個系統例項只有一個上下文物件。上下文允許系統的多個例項在單個程序中共存，每個例項都有自己的上下文。</p><p>不幸的是，在許多地方可能都需要上下文，因此它有可能成為透傳變數。為了減少必須知道上下文存在的方法數量，可以將上下文的引用儲存在系統的大多數主要物件中。在圖 7.2（d）的示例中，包含 <code>m3</code> 的類將對上下文的引用作為例項變數儲存在其物件中。建立新物件時，建立方法將從其物件中取得上下文的引用，並將其傳遞給新物件的建構函式。使用這種方法，上下文隨處可用，但僅在建構函式中作為顯式引數出現。</p><p><img src="'+l+'" alt=""></p><p>圖 7.2：處理透傳變數的可能技術。在（a）中，證書透過方法 <code>m1</code> 和 <code>m2</code> 傳遞，即使它們並不使用它。在（b）中，<code>main</code> 和 <code>m3</code> 具有對一個物件的共享訪問權，因此可以將變數儲存在此處，而不用將其傳遞給 <code>m1</code> 和 <code>m2</code>。在（c）中，證書儲存為全域性變數。在（d）中，證書與其他系統範圍的資訊（例如超時值和效能計數器）一起儲存在上下文物件中；對上下文的引用儲存在其方法需要訪問它的所有物件中。</p><p>上下文物件統一了所有系統全域性資訊的處理，並且不需要透傳變數。如果需要新增新變數，則可以將其新增到上下文物件中；除了上下文的建構函式和解構函式外，現有程式碼均不受影響。由於上下文全部儲存在一個位置，因此可以輕鬆識別和管理系統的全域性狀態。上下文也便於測試：測試程式碼可以透過修改上下文中的欄位來更改應用程式的全域性配置。如果系統使用透傳變數，則實施此類更改將更加困難。</p><p>上下文遠非理想的解決方案。儲存在上下文中的變數具有全域性變數的大多數缺點。例如，為什麼存在特定變數或在何處使用特定變數可能並不明顯。如果不加以必要的管理，上下文會變成巨大的資料混雜包，從而在整個系統中建立不明顯的依賴關係。上下文也可能產生執行緒安全問題；避免問題的最佳方法是使上下文中的變數不可變。不幸的是，我沒有找到比上下文更好的解決方案。</p><h2 id="_7-6-結論" tabindex="-1"><a class="header-anchor" href="#_7-6-結論"><span>7.6 結論</span></a></h2><p>新增到系統中的每一個設計元素，如介面、引數、函式、類或定義，都會增加複雜性，因為開發人員必須瞭解這個元素。為了使一個設計元素在對抗複雜性時產生淨的收益，它必須消除在沒有該設計元素的情況下不會出現的一些複雜性。否則，您最好在沒有該特定元素的情況下實現您的系統。例如，一個類可以透過封裝功能來降低複雜性，這樣該類的使用者就不必知道這些具體的功能實現了。</p><p>“不同的層級，不同的抽象”規則只是一種思想的應用：如果不同的層級具有相同的抽象，例如透傳方法或裝飾器，則很有可能它們沒有提供足夠的收益來補償它們代表的額外的基礎結構。類似地，透傳引數要求幾個方法中的每一個都知道它們的存在（這增加了複雜性），而又沒有貢獻額外的功能。</p>',15);function y(S,A){const e=u("RouteLink");return r(),d("div",null,[m,s("p",null,[n("裝飾器設計模式（也稱為“包裝器”）是一種鼓勵跨層級 API 複製的模式。裝飾物件接受一個現有物件並擴充套件其功能，它提供了一個與底層物件相似或相同的 API，它的方法會呼叫底層物件的方法。在"),p(e,{to:"/zh-tw/ch04.html"},{default:c(()=>[n("第 4 章")]),_:1}),n("的 Java I/O 示例中，"),h,n(" 類就是一個裝飾器：給定一個 "),_,n(" 物件，它提供了相同的 API，但是引入了緩衝。例如，當它的 "),v,n(" 方法被呼叫來讀取單個字元時，它會呼叫底層 "),b,n(" 上的 "),f,n(" 來讀取更大的塊，並儲存額外的字元來滿足未來的 "),g,n(" 呼叫。另一個例子出現在視窗系統中："),x,n(" 類實現了一個不能滾動的視窗的簡單形式，而 "),w,n(" 類透過新增水平和垂直捲軸來裝飾視窗類。")]),I,s("p",null,[n("“不同的層級，不同的抽象”規則的另一個應用是，類的介面通常應與其實現不同：內部使用的表示形式應與介面中出現的抽象形式不同。如果兩者具有相似的抽象，則該類可能不是很深。例如，在"),p(e,{to:"/zh-tw/ch06.html"},{default:c(()=>[n("第 6 章")]),_:1}),n("討論的文字編輯器專案中，大多數團隊都以文字行的形式實現了文字模組，每行分別儲存。一些團隊還使用 getLine 和 putLine 之類的方法圍繞行設計了文字類的 API。但是，這使文字類使用起來較淺且笨拙。在較高層級的使用者介面程式碼中，在行中間插入文字（例如，當用戶鍵入內容時）或刪除跨行的文字範圍都是很常見的。基於文字類的面向行的 API，呼叫者被迫拆分和連線行以實現使用者介面操作。這些程式碼並不簡單，並且會在使用者介面的實現中被到處複製和散佈。")]),T])}const D=i(k,[["render",y],["__file","ch07.html.vue"]]),O=JSON.parse('{"path":"/zh-tw/ch07.html","title":"第 7 章 不同的層級，不同的抽象","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"7.1 透傳方法","slug":"_7-1-透傳方法","link":"#_7-1-透傳方法","children":[]},{"level":2,"title":"7.2 什麼時候可以有重複的介面？","slug":"_7-2-什麼時候可以有重複的介面","link":"#_7-2-什麼時候可以有重複的介面","children":[]},{"level":2,"title":"7.3 裝飾器","slug":"_7-3-裝飾器","link":"#_7-3-裝飾器","children":[]},{"level":2,"title":"7.4 介面與實現","slug":"_7-4-介面與實現","link":"#_7-4-介面與實現","children":[]},{"level":2,"title":"7.5 透傳變數","slug":"_7-5-透傳變數","link":"#_7-5-透傳變數","children":[]},{"level":2,"title":"7.6 結論","slug":"_7-6-結論","link":"#_7-6-結論","children":[]}],"git":{"updatedTime":1716993054000},"filePathRelative":"zh-tw/ch07.md"}');export{D as comp,O as data};
