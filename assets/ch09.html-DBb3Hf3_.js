import{_ as a}from"./00013-BT2rC0s8.js";import{_ as c}from"./00019-BceVLV4L.js";import{_ as l,c as i,a as n,b as e,w as t,e as s,d as o,r as u,o as r}from"./app-5mwhgzDm.js";const d={},k=o('<h1 id="第-9-章-在一起更好還是分開更好" tabindex="-1"><a class="header-anchor" href="#第-9-章-在一起更好還是分開更好"><span>第 9 章 在一起更好還是分開更好？</span></a></h1><p>軟體設計中最基本的問題之一是：給定兩個功能，它們應該在同一個地方一起實現，還是應該分開實現？這個問題適用於系統中的所有層級，例如功能、方法、類和服務。例如，應該在提供面向流的檔案 I/O 的類中包括緩衝，還是應該在單獨的類中提供？HTTP 請求的解析應該完全在一個方法中實現，還是應該在多個方法（甚至多個類）之間劃分？本章討論做出這些決定時要考慮的因素。這些因素中的一些已經在前面的章節中進行了討論，但是為了完整起見，這裡將再次對其進行討論。</p><p>在決定是組合還是分開時，目標是降低整個系統的複雜性並改善其模組化。可能看起來實現此目標的最佳方法是將系統劃分為大量的小元件：每個單獨的元件越小，元件可能就越簡單。但是，細分的行為會帶來額外的複雜性，而這在細分之前是不存在的：</p><ul><li>一部分複雜性就來自元件的數量：元件越多，就越難以追蹤所有元件，也就越難在大的元件集合中找到所需的元件。細分通常會導致更多介面，而每個新介面都會增加複雜性。</li><li>細分可能會導致需要附加的程式碼來管理元件。例如，在細分之前使用單個物件的一段程式碼現在可能必須管理多個物件。</li><li>細分會產生分離：細分後的元件將比細分前的元件距離更遠。例如，在細分之前位於單個類中的方法可能在細分之後位於不同的類中，並且可能在不同的檔案中。分離使開發人員更難於同時檢視這些元件，甚至很難知道它們的存在。如果元件真正獨立，那麼分離是好的：它使開發人員可以一次專注於單個元件，而不會被其他元件分散注意力。另一方面，如果元件之間存在依賴性，則分離是不好的：開發人員最終將在元件之間來回跳轉。更糟糕的是，他們可能不瞭解這些依賴關係，這可能導致程式碼缺陷。</li><li>細分可能導致重複：細分之前的單例程式碼可能需要存在於每個細分的元件中。</li></ul><p>如果程式碼段緊密相關，則將它們組合在一起是最有益的。如果程式碼段互相無關，則最好分開。以下是判斷兩個程式碼段是否相關的一些訊號：</p><ul><li>它們共享資訊；例如，這兩段程式碼都可能依賴於一個特定型別文件的語法。</li><li>它們總是一起被使用：任何使用其中一段程式碼的人都可能同時使用另一段程式碼。這種關係形式僅在其是雙向關係時才值得注意。作為反例，磁碟塊的快取記憶體幾乎總是會涉及到雜湊表，但是雜湊表可以在許多不涉及磁碟塊快取記憶體的情況下被使用。因此，這些模組應該分開。</li><li>它們在概念上重疊，因為存在一個更高層級的簡單類別可以涵蓋這兩段程式碼。例如，搜尋子字串和大小寫轉換都屬於字串操作的範疇，而流量控制和可靠的資訊傳遞都屬於網路通訊的範疇。</li><li>不看其中的一段程式碼就很難理解另一段。</li></ul><p>本章的其餘部分使用更具體的規則以及示例來說明何時將程式碼段組合在一起以及何時將它們分開是有意義的。</p><h2 id="_9-1-如果有資訊共享則組合到一起" tabindex="-1"><a class="header-anchor" href="#_9-1-如果有資訊共享則組合到一起"><span>9.1 如果有資訊共享則組合到一起</span></a></h2>',8),v=o(`<h2 id="_9-2-如果可以簡化介面則組合到一起" tabindex="-1"><a class="header-anchor" href="#_9-2-如果可以簡化介面則組合到一起"><span>9.2 如果可以簡化介面則組合到一起</span></a></h2><p>當兩個或多個模組組合成一個模組時，可以為新模組定義一個比原始介面更簡單或更易於使用的介面。當原始模組各自實現問題解決方案的一部分時，通常會發生這種情況。在上一部分的 HTTP 伺服器示例中，原始方法需要一個介面來從第一個方法返回 HTTP 請求字串並將其傳遞給第二個方法。當這些方法結合在一起時，這些介面就不需要了。</p><p>另外，將兩個或更多類的功能組合在一起時，就有可能自動執行某些功能，以至於大多數使用者都無需瞭解它們。Java I/O 庫說明了這種機會。如果將 <code>FileInputStream</code> 和 <code>BufferedInputStream</code> 類組合在一起，並且預設情況下提供了緩衝，則絕大多數使用者甚至都不需要知道緩衝的存在。組合後的 <code>FileInputStream</code> 類可能提供停用或替換預設緩衝機制的方法，但是大多數使用者不需要了解它們。</p><h2 id="_9-3-透過組合來消除重複" tabindex="-1"><a class="header-anchor" href="#_9-3-透過組合來消除重複"><span>9.3 透過組合來消除重複</span></a></h2><p>如果發現反覆重複的程式碼模式，請檢視是否可以重新組織程式碼以消除重複。一種方法是將重複的程式碼提取為一個單獨的方法，並用對該方法的呼叫替換重複的程式碼段。如果重複的程式碼段很長並且替換方法具有簡單的簽名，則此方法最有效。如果程式碼段只有一兩行，那麼用方法呼叫替換它可能不會有太多好處。如果程式碼段與其環境以複雜的方式進行互動（例如，透過訪問多個區域性變數），則替換方法可能需要複雜的簽名（例如，許多“按引用傳遞”的引數），這將會降低其價值。</p><p>消除重複的另一種方法是重構程式碼，使相關程式碼段僅需要在一個地方執行。假設您正在編寫一種方法，該方法需要在幾個不同的執行點返回錯誤，並且在返回之前需要在每個執行點執行相同的清理操作（示例請參見圖 9.1）。如果程式語言支援 <code>goto</code>，則可以將清除程式碼移到方法的最後，然後在需要返回錯誤的每個點處轉到該片段，如圖 9.2 所示。Goto 語句通常被認為是一個壞主意，如果不加選擇地使用它們，可能會導致無法維護的程式碼，但是在諸如此類的情況下，它們可用於擺脫巢狀程式碼，因此也是有用的。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>common<span class="token operator">-&gt;</span>opcode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> DATA<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        DataHeader<span class="token operator">*</span> header <span class="token operator">=</span> received<span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">getStart</span><span class="token generic class-name"><span class="token operator">&lt;</span>DataHeader<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>header <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">LOG</span><span class="token punctuation">(</span>WARNING<span class="token punctuation">,</span> <span class="token string">&quot;%s packet from %s too short (%u bytes)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token function">opcodeSymbol</span><span class="token punctuation">(</span>common<span class="token operator">-&gt;</span>opcode<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    received<span class="token operator">-&gt;</span>sender<span class="token operator">-&gt;</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    received<span class="token operator">-&gt;</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token keyword">case</span> GRANT<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        GrantHeader<span class="token operator">*</span> header <span class="token operator">=</span> received<span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">getStart</span><span class="token generic class-name"><span class="token operator">&lt;</span>GrantHeader<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>header <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">LOG</span><span class="token punctuation">(</span>WARNING<span class="token punctuation">,</span> <span class="token string">&quot;%s packet from %s too short (%u bytes)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token function">opcodeSymbol</span><span class="token punctuation">(</span>common<span class="token operator">-&gt;</span>opcode<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    received<span class="token operator">-&gt;</span>sender<span class="token operator">-&gt;</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    received<span class="token operator">-&gt;</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token keyword">case</span> RESEND<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        ResendHeader<span class="token operator">*</span> header <span class="token operator">=</span> received<span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">getStart</span><span class="token generic class-name"><span class="token operator">&lt;</span>ResendHeader<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>header <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">LOG</span><span class="token punctuation">(</span>WARNING<span class="token punctuation">,</span> <span class="token string">&quot;%s packet from %s too short (%u bytes)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token function">opcodeSymbol</span><span class="token punctuation">(</span>common<span class="token operator">-&gt;</span>opcode<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    received<span class="token operator">-&gt;</span>sender<span class="token operator">-&gt;</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    received<span class="token operator">-&gt;</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>圖 9.1：此程式碼處理不同型別的傳入網路資料包。對於每種型別，如果資料包對於該型別而言太短，則會記錄一條訊息。在此版本的程式碼中，LOG 語句對於幾種不同的資料包型別是重複的。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>common<span class="token operator">-&gt;</span>opcode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> DATA<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        DataHeader<span class="token operator">*</span> header <span class="token operator">=</span> received<span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">getStart</span><span class="token generic class-name"><span class="token operator">&lt;</span>DataHeader<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>header <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">goto</span> packetTooShort<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token keyword">case</span> GRANT<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        GrantHeader<span class="token operator">*</span> header <span class="token operator">=</span> received<span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">getStart</span><span class="token generic class-name"><span class="token operator">&lt;</span>GrantHeader<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>header <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">goto</span> packetTooShort<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token keyword">case</span> RESEND<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        ResendHeader<span class="token operator">*</span> header <span class="token operator">=</span> received<span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">getStart</span><span class="token generic class-name"><span class="token operator">&lt;</span>ResendHeader<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>header <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">goto</span> packetTooShort<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">packetTooShort<span class="token operator">:</span></span>
<span class="line"><span class="token function">LOG</span><span class="token punctuation">(</span>WARNING<span class="token punctuation">,</span> <span class="token string">&quot;%s packet from %s too short (%u bytes)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">opcodeSymbol</span><span class="token punctuation">(</span>common<span class="token operator">-&gt;</span>opcode<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        received<span class="token operator">-&gt;</span>sender<span class="token operator">-&gt;</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        received<span class="token operator">-&gt;</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>圖 9.2：對圖 9.1 中的程式碼進行了重新組織，因此只有 LOG 語句的一個副本。</p><h2 id="_9-4-分離通用程式碼和專用程式碼" tabindex="-1"><a class="header-anchor" href="#_9-4-分離通用程式碼和專用程式碼"><span>9.4 分離通用程式碼和專用程式碼</span></a></h2>`,11),m=n("p",null,[n("img",{src:a,alt:""}),s(" 危險訊號：重複 "),n("img",{src:a,alt:""})],-1),h=n("blockquote",null,[n("p",null,"如果相同的程式碼（或幾乎相同的程式碼）一遍又一遍地出現，那是一個危險訊號，說明您沒有找到正確的抽象。")],-1),b=n("p",null,"通常，系統的較低層級傾向於更通用，而較高層級則更專用。例如，應用程式的最頂層包含完全特定於該應用程式的功能。將專用程式碼與通用程式碼分開的方法是將專用程式碼向上拉到較高的層級，而將通用的部分保留在較低的層級。當您遇到對於同一個抽象同時包含了通用功能和專用功能的類時，請檢視該類是否可以分為兩個類，一個包含通用功能，另一個則在其上以提供特殊功能",-1),g=n("h2",{id:"_9-5-示例-插入游標和區域選擇",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9-5-示例-插入游標和區域選擇"},[n("span",null,"9.5 示例：插入游標和區域選擇")])],-1),_=n("p",null,"接下來的章節將透過三個示例說明上述原則。在其中兩個示例中，最好的方法是分開相關的程式碼段。而在第三個示例中，最好將它們組合到一起。",-1),f=n("p",null,"區域選擇和插入游標在某些方面是相關的。例如，游標始終位於所選區域的一端，並且傾向於將插入游標和區域選擇一起操作：單擊並拖動滑鼠同時修改兩者，然後插入文字時會首先刪除所選的文字（如果有），然後在游標位置插入新的文字。因此，使用單個物件來管理區域選擇和插入游標似乎是合乎邏輯的，並且有一個專案團隊就採用了這種方法。該物件在檔案中儲存了兩個位置，以及兩個布林值，用來指示游標位於所選區域的哪一端以及是否存在所選區域。",-1),y=n("p",null,"但是，組合的物件有點尷尬。它對較高層級的程式碼沒有任何好處，因為較高層級的程式碼仍然需要將區域選擇和插入游標視為不同的實體，並且對它們進行單獨操作（在插入文字期間，它首先在組合物件上呼叫一個方法來刪除選定的文字；然後呼叫另一個方法來檢索游標位置，以插入新的文字）。實際上，組合物件比分離的物件實現起來要複雜得多。它避免了將游標位置儲存為單獨的實體，但又不得不儲存一個布林值，以表示游標位於所選區域的哪一端。為了檢索游標位置，組合物件必須首先檢查布林值，然後再檢查所選區域對應的起始或結束位置。",-1),w=n("p",null,[n("img",{src:a,alt:""}),s(" 危險訊號：通用專用混合體 "),n("img",{src:a,alt:""})],-1),H=n("blockquote",null,[n("p",null,"當通用機制還包含專門用於該機制的特定用途的程式碼時，就會出現此危險訊號。這使該機制更加複雜，並在該機制與特定用例之間造成了資訊洩漏：未來對用例的修改可能也需要對底層機制進行更改。")],-1),N=n("code",null,"Position",-1),S=n("code",null,"Position",-1),T=n("code",null,"Position",-1),q=n("code",null,"Position",-1),R=o(`<h2 id="_9-6-示例-單獨的日誌記錄類" tabindex="-1"><a class="header-anchor" href="#_9-6-示例-單獨的日誌記錄類"><span>9.6 示例：單獨的日誌記錄類</span></a></h2><p>第二個示例涉及一個學生專案中的錯誤日誌記錄。有一個類中包含幾個如下所示的程式碼序列：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    rpcConn <span class="token operator">=</span> connectionPool<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>dest<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">NetworkErrorLogger</span><span class="token punctuation">.</span><span class="token function">logRpcOpenError</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> dest<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不是直接在檢測到錯誤時記錄錯誤日誌，而是呼叫專門的錯誤日誌記錄類中的方法。錯誤日誌記錄類是在同一原始檔的末尾定義的：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">NetworkErrorLogger</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    *  Output information relevant to an error that occurs when trying</span>
<span class="line">    *  to open a connection to send an RPC.</span>
<span class="line">    *</span>
<span class="line">    *  <span class="token keyword">@param</span> <span class="token parameter">req</span></span>
<span class="line">    *       The RPC request that would have been sent through the connection</span>
<span class="line">    *  <span class="token keyword">@param</span> <span class="token parameter">dest</span></span>
<span class="line">    *       The destination of the RPC</span>
<span class="line">    *  <span class="token keyword">@param</span> <span class="token parameter">e</span></span>
<span class="line">    *       The caught error</span>
<span class="line">    */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">logRpcOpenError</span><span class="token punctuation">(</span><span class="token class-name">RpcRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">AddrPortTuple</span> dest<span class="token punctuation">,</span> <span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">WARNING</span><span class="token punctuation">,</span> <span class="token string">&quot;Cannot send message: &quot;</span> <span class="token operator">+</span> req <span class="token operator">+</span> <span class="token string">&quot;. \\n&quot;</span> <span class="token operator">+</span></span>
<span class="line">            <span class="token string">&quot;Unable to find or open connection to &quot;</span> <span class="token operator">+</span> dest <span class="token operator">+</span> <span class="token string">&quot; :&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>NetworkErrorLogger</code> 類包含幾個方法，例如 <code>logRpcSendError</code> 和 <code>logRpcReceiveError</code>，每個方法都記錄了不同型別的錯誤。</p><p>這種分離除了增加了複雜性，沒有任何好處。日誌記錄方法很淺：大多數只包含一行程式碼，但是它們需要大量的文件。每個方法僅在單個位置呼叫。日誌記錄方法高度依賴於它們的呼叫方：讀取呼叫方程式碼的人很可能會切換到日誌記錄方法，以確保記錄了正確的資訊。同樣，閱讀日誌記錄方法程式碼的人很可能會轉到呼叫方以瞭解該方法的目的。</p><p>在此示例中，最好移除日誌記錄方法，並將日誌記錄語句放置在檢測到錯誤的位置。這將使程式碼更易於閱讀，並消除了日誌記錄方法所需的介面。</p><h2 id="_9-7-示例-編輯器的撤消機制" tabindex="-1"><a class="header-anchor" href="#_9-7-示例-編輯器的撤消機制"><span>9.7 示例：編輯器的撤消機制</span></a></h2>`,9),L=o(`<p>一些學生專案將整個撤消機制實現為文字類的一部分。文字類維護所有可撤消更改的列表。每次更改文字時，它都會自動將條目新增到此列表中。對於區域選擇、插入游標和檢視的更改，使用者介面程式碼將呼叫文字類中的相應方法，以將這些更改的條目新增到撤消列表中。當用戶請求撤消或重做時，使用者介面程式碼將呼叫文字類中的方法，然後該方法處理撤消列表中的條目。對於與文字相關的條目，它直接更新文字類的內部狀態。對於與其他事物（例如區域選擇）相關的條目，文字類反過來呼叫使用者介面程式碼來執行撤銷或重做。</p><p>這種方法導致了文字類中的一系列尷尬特性。撤消/重做的核心功能由通用機制組成，用於管理已執行的動作列表，並在撤消和重做操作期間逐個執行這些動作。核心功能與對諸如文字和區域選擇實現了撤消和重做的專用處理程式一起位於文字類中。用於區域選擇和插入游標的專用撤消處理程式與文字類中的任何其他內容均無關。它們導致了文字類和使用者介面之間的資訊洩漏，以及每個模組中來回傳遞撤消資訊的額外方法。如果未來將新的可撤消實體新增到系統中，則將需要更改文字類，包括特定於該實體的新方法。此外，通用的撤銷核心功能與文字類中的通用文字功能也幾乎沒有關係。</p><p>透過提取撤消/重做機制的通用核心功能並將其放在單獨的類中，可以解決這些問題：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">History</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Action</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">redo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token class-name">History</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">Action</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">addFence</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">redo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此設計中，<code>History</code> 類用來管理實現了介面 <code>History.Action</code> 的物件的集合。每個 <code>History.Action</code> 描述一個操作，例如插入文字或更改游標位置，並且它提供了可以撤消或重做該操作的方法。<code>History</code> 類對操作中儲存的資訊或它們如何實現其撤消和重做方法一無所知。<code>History</code> 類維護一個歷史記錄列表，該列表描述了應用程式生命週期內執行的所有操作，它還提供了撤消和重做方法，這些方法響應使用者請求的撤消和重做，在 <code>History.Actions</code> 中呼叫撤消和重做方法。</p><p><code>History.Actions</code> 都是專用的物件：每個物件都瞭解一種特殊的可撤銷操作。它們在 <code>History</code> 類之外的模組中實現，這些模組可以理解特定型別的可撤銷操作。文字類可能實現 <code>UndoableInsert</code> 和 <code>UndoableDelete</code> 物件，以描述文字的插入和刪除。每當插入文字時，文字類都會建立一個描述該插入操作的新 <code>UndoableInsert</code> 物件，並呼叫 <code>History.addAction</code> 將其新增到歷史列表中。編輯器的使用者介面程式碼可能會建立 <code>UndoableSelection</code> 和 <code>UndoableCursor</code> 物件，這些物件描述對選擇和插入游標的更改。</p><p><code>History</code> 類還允許對操作進行分組，例如，來自使用者的單個撤消請求可以恢復已刪除的文字、重新選擇已刪除的文字以及重新放置插入游標。有多種將操作分組的方法，<code>History</code> 類使用了柵欄，柵欄是放置在歷史列表中的標記，用於分隔相關操作的組。每次對 <code>History.redo</code> 的呼叫都會向後遍歷歷史記錄列表，撤消操作，直到到達下一個柵欄。柵欄的位置由更高層級的程式碼透過呼叫 <code>History.addFence</code> 來決定。</p><p>這種方法將撤消操作的功能分為三個類別，每個類別都在不同的地方實現：</p><ul><li>一個用於管理和分組操作以及呼叫撤消和重做操作的通用機制（由 <code>History</code> 類實現）。</li><li>特定操作的細節（由多個類實現，每個類都理解少量的操作型別）。</li><li>分組操作的策略（由高層級使用者介面程式碼實現，以提供正確的整體應用程式行為）。</li></ul><p>這些類別中的每一個都可以在不瞭解其他類別的情況下被實現。<code>History</code> 類不知道要撤消哪種操作；它可以在多種應用中被使用。每個操作類僅理解一種操作，並且 <code>History</code> 類和操作類都不需要知道將操作分組的策略。</p><p>關鍵的設計決策是將撤消機制的通用部分與專用部分分開，並將通用部分單獨放在一個類中。一旦完成，其餘的設計就自然而然的出現了。</p><p>注意：將通用程式碼與專用程式碼分開的建議是指與特定機制相關的程式碼。例如，特殊用途的撤消程式碼（例如撤消文字插入的程式碼）應該與通用用途的撤消程式碼（例如管理歷史記錄列表的程式碼）分開。然而，將一種機制的專用程式碼與另一種機制的通用程式碼組合起來通常是有意義的。文字類就是這樣一個例子：它實現了一種管理文字的通用機制，但是它包含了與撤銷相關的專用程式碼。這些撤消程式碼是專用的，因為它只處理文字修改的撤消操作。將這段程式碼與 <code>History</code> 類中通用的撤銷程式碼組合在一起沒有意義，但是將它放在文字類中是有意義的，因為它與其他文字函式密切相關。</p><h2 id="_9-8-拆分和組合方法" tabindex="-1"><a class="header-anchor" href="#_9-8-拆分和組合方法"><span>9.8 拆分和組合方法</span></a></h2><p>何時細分的問題不僅適用於類，而且還適用於方法：是否最好將現有方法分為多個較小的方法？還是應該將兩種較小的方法組合為一種較大的方法？長方法比短方法更難於理解，因此許多人認為方法長度就是拆分方法的一個很好的理由。課堂上的學生通常會獲得嚴格的標準，例如“拆分超過 20 行的任何方法！”</p><p>但是，長度本身很少是拆分方法的一個很好的理由。通常，開發人員傾向於過多地拆分方法。拆分方法會引入額外的介面，從而增加了複雜性。它還將原始方法的各個部分分開，如果這些部分實際上是相關的，會使得程式碼更難閱讀。您只應該在會使整個系統更加簡單的情況下拆分一個方法，我將在下面討論這種情況。</p><p>長方法並不總是壞的。例如，假設一個方法包含按順序執行的五個 20 行的程式碼塊。如果這些塊是相對獨立的，則可以一次閱讀並理解該方法的一個塊。將每個塊移動到單獨的方法中並沒有太大的好處。如果這些塊之間具有複雜的互動，則將它們保持在一起就顯得更為重要，這樣讀者就可以一次看到所有程式碼。如果每個塊使用單獨的方法，則讀者將不得不在這些分散開的方法之間來回切換，以瞭解它們如何協同工作。如果方法具有簡單的簽名並且易於閱讀，則包含數百行程式碼的方法是可以接受的。這些方法很深（功能多，介面簡單），很好。</p><p>設計方法時，最重要的目標是提供簡潔的抽象。每個方法都應該做一件事並且完整地做這件事。該方法應該具有簡潔的介面，以便使用者無需費神就可以正確使用它。該方法應該是深的：其介面應該比其實現簡單得多。如果一個方法具有所有這些屬性，那麼它的長短與否就無關緊要了。</p><p>總體而言，拆分一個方法只有在會產生更清晰的抽象時才有意義。有兩種方式可以做到這一點，如圖 9.3 所示。最佳方法是將子任務分解為單獨的方法，如圖 9.3（b）所示。該細分產生一個包含該子任務的子方法和一個包含原始方法其餘部分的父方法；父方法呼叫子字方法。新的父方法的介面與原始方法的介面相同。如果存在一個與原始方法的其餘部分完全可分離的子任務，則這種細分形式是有意義的，這意味著（a）閱讀子方法的人不需要了解有關父方法的任何資訊，以及（b）在閱讀父方法時不需要了解子方法的實現。通常，這意味著子方法是相對通用的：可以想象除父方法外，其他方法也可以使用它。如果您進行了這種形式的拆分，然後發現自己在父方法和子方法之間來回跳轉以瞭解他們如何一起工作，那是一個危險訊號（“連體方法”），表明拆分可能不是一個好主意。</p><p><img src="`+c+'" alt=""></p><p>圖 9.3：方法（a）可以透過提取子任務（b）或將其功能劃分為兩個單獨的方法（c）進行拆分。但如果會導致淺方法，則不應進行方法拆分，如（d）所示。</p><p>拆分方法的第二種方法是將其拆分為兩個獨立的方法，每個方法都對原始方法的呼叫者可見，如圖 9.3（c）所示。如果原始方法的介面過於複雜，這是有意義的，因為該介面試圖執行多個並不密切相關的操作。在這種情況下，可以將方法的功能劃分為兩個或更多個較小的方法，每個方法僅具有原始方法功能的一部分。如果進行這樣的拆分，則每個子方法的介面應該比原始方法的介面更簡單。理想情況下，大多數呼叫者只需要呼叫兩個新方法之一即可；如果呼叫者必須同時呼叫這兩個新方法，則將增加複雜性，這可能表明這樣的拆分不是一個好主意。新方法將更加專注於它們自己的工作。如果新方法比原始方法更具通用性，那麼這是一個好兆頭（例如，您可以想象在其他情況下單獨使用它們）。</p><p>圖 9.3（c）所示形式的拆分並不是很有意義，因為它們導致呼叫者不得不處理多個方法而不是一個方法。當您以這種方式拆分時，您可能會遇到變成多個淺方法的風險，如圖 9.3（d）所示。如果呼叫者必須呼叫每個單獨的方法，並在它們之間來回傳遞狀態，則拆分不是一個好主意。如果您正在考慮像圖 9.3（c）所示的拆分，則應基於它是否簡化了呼叫者的使用情況來進行判斷。</p><p>在某些情況下，透過將方法組合在一起可以簡化系統。例如，組合方法可以用一個更深的方法代替兩個淺的方法。它可以消除重複的程式碼；它可以消除原始方法或中間資料結構之間的依賴關係；它可以產生更好的封裝，從而使以前存在於多個位置的知識現在被隔離在一個位置；它也可以產生更簡單的介面，如 9.2 節所述。</p><p><img src="'+a+'" alt=""> 危險訊號：連體方法 <img src="'+a+'" alt=""></p><blockquote><p>應該可以獨立地理解每一個方法。如果您只能在理解一個方法的實現的前提下才能理解另一個方法的實現，那就是一個危險訊號。該危險訊號也可以在其他情況下發生：如果兩段程式碼在物理上是分開的，但是隻有透過檢視另一段程式碼才能理解它們，這就是危險訊號。</p></blockquote><h2 id="_9-9-結論" tabindex="-1"><a class="header-anchor" href="#_9-9-結論"><span>9.9 結論</span></a></h2><p>拆分或組合模組的決定應基於複雜性。請選擇一種可以最好的隱藏資訊、產生最少的依賴關係和最深的介面的結構。</p>',27);function x(A,G){const p=u("RouteLink");return r(),i("div",null,[k,n("p",null,[e(p,{to:"/zh-tw/ch05.html"},{default:t(()=>[s("第 5.4 節")]),_:1}),s(" 在實現 HTTP 伺服器的專案時介紹了此原則。在其第一個實現中，該專案使用了兩個不同的類裡的方法來讀取和解析 HTTP 請求。第一個方法從網路套接字讀取傳入請求的文字，並將其放置在字串物件中。第二個方法解析字串以提取請求的各個組成部分。經過這種分解，這兩個方法最終都對 HTTP 請求的格式有了相當的瞭解：第一個方法只是嘗試讀取請求，而不是解析請求，但是如果不執行大部分的解析操作，就無法確定請求的結束位置（例如，它必須解析標頭行才能識別包含整個請求長度的標頭）。由於此共享資訊，最好在同一位置讀取和解析請求；當兩個類合而為一時，程式碼變得更短，更簡單。")]),v,n("p",null,[s("如果模組包含了可用於多種不同目的的機制，則它應僅提供一種通用機制。它不應包含專門針對特定用途的機制的程式碼，也不應包含其他通用機制。與通用機制關聯的專用程式碼通常應放在不同的模組中（通常是與特定用途關聯的模組）。"),e(p,{to:"/zh-tw/ch06.html"},{default:t(()=>[s("第 6 章")]),_:1}),s(" 中的圖形介面編輯器討論闡明瞭這一原則：最佳設計是文字類提供通用文字操作，而特定於使用者介面的操作（例如刪除所選的區域）則在使用者介面模組中實現。這種方法消除了早期設計中存在的資訊洩漏和額外的介面，而在早期設計中，專門的使用者介面操作是在文字類中實現的。")]),m,h,b,g,_,n("p",null,[s("第一個示例由"),e(p,{to:"/zh-tw/ch06.html"},{default:t(()=>[s("第 6 章")]),_:1}),s("的影象介面編輯器專案中的插入游標和區域選擇組成。編輯器會顯示一個閃爍的垂直線，用來指示使用者鍵入的文字將出現在文件中的何處。它還會顯示一個高亮顯示的字元範圍，稱之為選擇的區域，用於複製或刪除文字。插入游標始終可見，但是有時可能沒有選擇文字。如果存在選擇的區域，則插入游標始終位於其某一端。")]),f,y,w,H,n("p",null,[s("在這種情況下，區域選擇和插入游標之間的關聯度不足以將它們組合在一起。當修改程式碼以分開區域選擇和插入游標時，用法和實現都變得更加簡單。與必須從中提取所選區域和插入游標資訊的組合物件相比，分開的物件提供了更簡單的介面。插入游標的實現也變得更加簡單，因為插入游標的位置是直接表示的，而不是透過所選區域和一個布林值間接表示的。實際上，在修訂的版本中，沒有專門的類用於區域選擇或插入游標。相反，引入了一個新的 "),N,s(" 類來表示檔案中的位置（行號和行內的字元數）。所選區域用兩個 "),S,s(" 表示，游標用一個 "),T,s(" 表示。"),q,s(" 類還在專案中找到了其他用途。這個例子也展示了"),e(p,{to:"/zh-tw/ch06.html"},{default:t(()=>[s("第 6 章")]),_:1}),s("討論過的更低層級但更通用的介面的好處。")]),R,n("p",null,[s("在"),e(p,{to:"/zh-tw/ch06.html"},{default:t(()=>[s("第 6.2 節")]),_:1}),s("的影象介面編輯器專案中，要求之一是支援多級的撤消/重做，不僅是文字的改動，還有區域選擇、插入游標、和檢視的改動。例如，如果使用者選擇了一些文字，將其刪除，滾動到檔案中的其他位置，然後使用撤消操作，則編輯器必須將其狀態恢復為刪除前的狀態。這包括還原已刪除的文字、再次選擇它、並使所選的文字在視窗中可見。")]),L])}const O=l(d,[["render",x],["__file","ch09.html.vue"]]),j=JSON.parse('{"path":"/zh-tw/ch09.html","title":"第 9 章 在一起更好還是分開更好？","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"9.1 如果有資訊共享則組合到一起","slug":"_9-1-如果有資訊共享則組合到一起","link":"#_9-1-如果有資訊共享則組合到一起","children":[]},{"level":2,"title":"9.2 如果可以簡化介面則組合到一起","slug":"_9-2-如果可以簡化介面則組合到一起","link":"#_9-2-如果可以簡化介面則組合到一起","children":[]},{"level":2,"title":"9.3 透過組合來消除重複","slug":"_9-3-透過組合來消除重複","link":"#_9-3-透過組合來消除重複","children":[]},{"level":2,"title":"9.4 分離通用程式碼和專用程式碼","slug":"_9-4-分離通用程式碼和專用程式碼","link":"#_9-4-分離通用程式碼和專用程式碼","children":[]},{"level":2,"title":"9.5 示例：插入游標和區域選擇","slug":"_9-5-示例-插入游標和區域選擇","link":"#_9-5-示例-插入游標和區域選擇","children":[]},{"level":2,"title":"9.6 示例：單獨的日誌記錄類","slug":"_9-6-示例-單獨的日誌記錄類","link":"#_9-6-示例-單獨的日誌記錄類","children":[]},{"level":2,"title":"9.7 示例：編輯器的撤消機制","slug":"_9-7-示例-編輯器的撤消機制","link":"#_9-7-示例-編輯器的撤消機制","children":[]},{"level":2,"title":"9.8 拆分和組合方法","slug":"_9-8-拆分和組合方法","link":"#_9-8-拆分和組合方法","children":[]},{"level":2,"title":"9.9 結論","slug":"_9-9-結論","link":"#_9-9-結論","children":[]}],"git":{"updatedTime":1716993054000},"filePathRelative":"zh-tw/ch09.md"}');export{O as comp,j as data};
