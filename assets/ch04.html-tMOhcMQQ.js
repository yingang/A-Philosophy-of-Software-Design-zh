import{_ as c}from"./00012-BPnn6kCv.js";import{_ as e}from"./00013-BT2rC0s8.js";import{_ as o,c as i,a as n,e as a,b as p,w as t,d as l,r as d,o as u}from"./app-5mwhgzDm.js";const r={},k=l('<h1 id="第-4-章-模組應該是深的" tabindex="-1"><a class="header-anchor" href="#第-4-章-模組應該是深的"><span>第 4 章 模組應該是深的</span></a></h1><p>管理軟體複雜性最重要的技術之一就是將系統設計成開發人員在任何給定時間只需要面對整體複雜性的一小部分。這種方法稱為 <em>模組化設計</em>，本章介紹其基本原則。</p><h2 id="_4-1-模組化設計" tabindex="-1"><a class="header-anchor" href="#_4-1-模組化設計"><span>4.1 模組化設計</span></a></h2><p>在模組化設計中，軟體系統被分解為相對獨立的 <em>模組</em> 集合。模組可以採用多種形式，例如類、子系統或服務。在理想的世界中，每個模組都將完全獨立於其他模組：開發人員可以在任何模組中工作，而無需瞭解任何其他模組。在這個世界裡，系統的複雜性就是其中最糟糕的模組的複雜性。</p><p>不幸的是，這種理想是無法實現的。模組必須透過呼叫彼此的函式或方法來協同工作。結果，模組必須相互瞭解。模組之間將存在 <em>依賴關係</em>：如果一個模組發生更改，則可能需要更改其他模組以進行匹配。例如，方法的引數在方法本身與呼叫該方法的任何程式碼之間建立了依賴關係。如果更改了要求的引數，則必須修改該方法的所有呼叫以符合新的簽名。依賴關係可以採用許多其他形式，並且它們可能非常微妙。模組化設計的目標是最大程度地減少模組之間的依賴性。</p><p>為了管理依賴關係，我們將每個模組分為兩個部分：<em>介面</em> 和 <em>實現</em>。介面包含在其他模組上工作的開發人員在使用這個模組時必須知道的所有內容。通常，介面描述模組做什麼，而不描述模組如何做。實現則由承載介面承諾的程式碼組成。在特定模組中工作的開發人員必須瞭解該模組的介面和實現，以及由該模組呼叫的任何其他模組的介面。除了正在其中工作的模組，開發人員應該無需瞭解其他模組的實現。</p><p>考慮一個實現平衡樹的模組。該模組可能包含複雜的程式碼，以確保樹保持平衡。但是，此複雜性對於模組使用者而言是不可見的。使用者可以看到一個相對簡單的介面，用於呼叫在樹中插入、刪除和獲取節點的操作。要呼叫插入操作，呼叫者只需提供新節點的鍵和值即可。遍歷樹和拆分節點的機制在介面中不可見。</p><p>就本書而言，模組是具有介面和實現的任何程式碼單元。面向物件程式語言中的每個類都是一個模組。類中的方法或非面嚮物件語言中的函式也可以視為模組：每個模組都有一個介面和一個實現，並且可以將模組化設計技術應用於它們。更高層級的子系統和服務也是模組。它們的介面可能採用不同的形式，例如核心呼叫或 HTTP 請求。本書中有關模組化設計的許多討論都集中在類的設計上，但是這些技術和概念也適用於其他種類的模組。</p><p>最好的模組是那些其介面比其實現簡單得多的模組。這樣的模組具有兩個優點。首先，一個簡單的介面可以將模組強加於系統其餘部分的複雜性降至最低。其次，如果以不更改其介面的方式修改了一個模組，則該修改不會影響其他模組。如果模組的介面比其實現簡單得多，則可以在不影響其他模組的情況下更改模組的許多方面。</p><h2 id="_4-2-介面中有什麼" tabindex="-1"><a class="header-anchor" href="#_4-2-介面中有什麼"><span>4.2 介面中有什麼？</span></a></h2><p>模組的介面包含兩種資訊：形式化資訊和非形式化資訊。介面的形式化部分在程式碼中明確指定，並且其中一些可以透過程式語言檢查其正確性。例如，方法的形式化介面是其簽名，其中包括引數的名稱和型別、返回值的型別以及有關該方法引發的異常的資訊。大多數程式語言都確保對方法的每次呼叫都提供了正確數量和型別的引數以匹配其簽名。類的形式化介面包括其所有公有方法的簽名以及任何公有變數的名稱和型別。</p><p>每個介面還包括了非形式化的元素。這些元素無法以程式語言可以理解或執行的方式進行指定。介面的非正形式化部分包括其高層級的行為，例如函式可能被設計為會刪除由其引數之一所命名的檔案。如果對類的使用存在限制（也許必須先呼叫一個方法才能呼叫另一個），則這些約束也是類介面的一部分。通常，如果開發人員需要了解特定資訊才能使用模組，則該資訊是模組介面的一部分。介面的非形式化方面只能使用註釋來描述，而程式語言並不能確保描述是完整或準確的 [1]。對於大多數介面，非形式化的部分要比形式化的部分更大和更複雜。</p>',12),m=l('<h2 id="_4-3-抽象" tabindex="-1"><a class="header-anchor" href="#_4-3-抽象"><span>4.3 抽象</span></a></h2><p><em>抽象</em> 這個術語與模組化設計的思想緊密相關。<strong>抽象是實體的簡化檢視，其中省略了不重要的細節。</strong> 抽象是有用的，因為它們使我們更容易思考和操縱複雜的事物。</p><p>在模組化程式設計中，每個模組以其介面的形式提供抽象。該介面提供了模組功能的簡化檢視；從模組抽象的角度來看，實現的細節並不重要，因此在介面中將其省略。</p><p>在抽象的定義中，“不重要”一詞至關重要。從抽象中忽略的不重要的細節越多越好。但是，只能在細節不重要的情況下才可以將其從抽象中省略。抽象可能透過兩種方式出錯。首先，它可能包含了並非真正重要的細節。當這種情況發生時，它會使抽象變得不必要的複雜，從而增加了使用抽象的開發人員的認知負荷。第二個錯誤是抽象忽略了真正重要的細節。這導致了模糊性：僅檢視抽象的開發人員將不會獲得正確使用抽象所需的全部資訊。忽略重要細節的抽象是 <em>錯誤的抽象</em>：它可能看起來很簡單，但實際上並非如此。設計抽象的關鍵就是要識別什麼是重要的，並在設計過程中將重要的資訊最小化。</p><p>例如，考慮一個檔案系統。檔案系統提供的抽象省略了許多細節，例如用於選擇儲存裝置上的哪些塊用於儲存給定檔案中的資料的機制。這些詳細資訊對於檔案系統的使用者而言並不重要（只要系統提供足夠的效能即可）。但是，檔案系統實現的一些細節對使用者很重要。大多數檔案系統將資料快取在主記憶體中，並且它們可能會延遲將新資料寫入儲存裝置以提高效能。一些應用程式（例如資料庫）需要確切地知道何時將資料寫入儲存裝置，以便它們可以確保在系統崩潰後資料仍將保留。因此，將資料重新整理到輔助儲存的規則必須在檔案系統的介面中可見。</p><p>我們不僅依靠抽象來管理程式設計中的複雜性，抽象在日常生活中也無處不在。微波爐包含複雜的電子裝置，可將交流電轉換為微波輻射並將該輻射分佈到整個烹飪腔中。幸運的是，使用者看到的是一個簡單得多的抽象，它由幾個按鈕控制微波的定時和強度。汽車提供了一種簡單的抽象概念，使我們可以在不瞭解電動機、電池電源管理、防抱死制動、巡航控制等機制的情況下駕駛它們。</p><h2 id="_4-4-深模組" tabindex="-1"><a class="header-anchor" href="#_4-4-深模組"><span>4.4 深模組</span></a></h2><p>最好的模組是那些提供強大功能但具有簡單介面的模組。我用“深”一詞來描述這樣的模組。為了形象化深度的概念，假設每個模組都由一個矩形表示，如圖 4.1 所示。每個矩形的面積與模組實現的功能成比例。矩形的頂部邊緣代表模組的介面；邊緣的長度表示介面的複雜性。最好的模組很深：它們在簡單的介面後隱藏了許多功能。深模組是一個很好的抽象，因為其內部複雜性的很小一部分對其使用者可見。</p><p><img src="'+c+`" alt=""></p><p>圖 4.1：深淺模組。最好的模組很深：它們允許透過簡單的介面訪問許多功能。淺層模組是具有相對複雜的介面的模組，但功能不多：它不會掩蓋太多的複雜性。</p><p>模組的深度是一種考慮成本與收益的方式。模組提供的好處是其功能。模組的成本（就係統複雜性而言）是其介面。模組的介面代表了模組強加給系統其餘部分的複雜性：介面越小越簡單，引入的複雜性就越小。最好的模組是那些收益最大、成本最低的模組。介面是個好東西，但更多或更大的介面不一定更好！</p><p>Unix 作業系統及其後代（例如 Linux）提供的檔案 I/O 機制是深層介面的一個很好的例子。I/O 只有五個基本系統呼叫，帶有簡單簽名：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="line"><span class="token keyword">int</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> path<span class="token punctuation">,</span> <span class="token keyword">int</span> flags<span class="token punctuation">,</span> <span class="token class-name">mode_t</span> permissions<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ssize_t</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span> <span class="token keyword">void</span><span class="token operator">*</span> buffer<span class="token punctuation">,</span> <span class="token class-name">size_t</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ssize_t</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span><span class="token operator">*</span> buffer<span class="token punctuation">,</span> <span class="token class-name">size_t</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">off_t</span> <span class="token function">lseek</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span> <span class="token class-name">off_t</span> offset<span class="token punctuation">,</span> <span class="token keyword">int</span> referencePosition<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中的 <code>open</code> 系統呼叫採用層次化的檔名，例如 <code>/a/b/c</code>，並返回一個整型的 <em>檔案描述符</em>，該描述符用於引用開啟的檔案。<code>open</code> 的其他引數提供可選資訊，例如開啟檔案後是否進行讀取或寫入、如果不存在現有檔案則是否應建立新檔案，以及如果建立新檔案則檔案的訪問許可權。<code>read</code> 和 <code>write</code> 系統呼叫在應用程式記憶體和檔案的緩衝區之間傳輸資訊。<code>close</code> 結束對檔案的訪問。大多數檔案是按順序訪問的，因此這是預設設定。但是，可以透過 <code>lseek</code> 系統呼叫來更改當前訪問位置以實現隨機訪問。</p><p>Unix I/O 介面的現代實現需要成千上萬行程式碼，這些程式碼可以解決諸如以下的複雜問題：</p><ul><li>如何在磁碟上表示檔案以支援高效率的訪問？</li><li>如何儲存目錄，以及如何處理層次化的路徑名以查詢它們所引用的檔案？</li><li>如何進行許可權管控，以使一個使用者無法修改或刪除另一使用者的檔案？</li><li>如何實現檔案訪問？例如，如何在中斷處理程式和後臺程式碼之間劃分功能，以及這兩個元素如何安全通訊？</li><li>在同時訪問多個檔案時使用什麼排程策略？</li><li>如何將最近訪問的檔案資料快取在記憶體中以減少磁碟訪問次數？</li><li>如何將各種不同的輔助儲存裝置（例如磁碟和快閃記憶體驅動器）合併到單個檔案系統中？</li></ul><p>所有這些問題，以及更多的問題，都被 Unix 檔案系統的實現解決了。對於使用這些系統呼叫的程式設計師來說，它們是不可見的。多年來，Unix I/O 介面的實現已經發生了根本性的發展，但是五個基本的核心呼叫並沒有改變。</p><p>深模組的另一個示例是諸如 Go 或 Java 之類的語言中的垃圾收集器。這個模組根本沒有介面。它在後臺進行隱形操作以回收未使用的記憶體。由於垃圾收集消除了用於釋放物件的介面，因此向系統中新增垃圾回收實際上會縮小其總體介面。垃圾收集器的實現非常複雜，但這種複雜性對使用該語言的程式設計師是隱藏的。</p><p>諸如 Unix I/O 和垃圾收集器之類的深模組提供了強大的抽象，因為它們易於使用，隱藏了巨大的實現複雜性。</p><h2 id="_4-5-淺模組" tabindex="-1"><a class="header-anchor" href="#_4-5-淺模組"><span>4.5 淺模組</span></a></h2><p>另一方面，淺模組是其介面與其提供的功能相比相對複雜的模組。例如，實現連結串列的類很淺。操作連結串列不需要太多程式碼（插入或刪除元素僅需幾行程式碼），因此連結串列抽象不會隱藏很多細節。連結串列介面的複雜性幾乎與其實現的複雜性一樣高。淺類有時是不可避免的，但是它們在管理複雜性方面沒有提供太多幫助。</p><p>這是一個淺方法的極端示例，該淺層方法來自軟體設計的課程專案：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">addNullValueForAttribute</span><span class="token punctuation">(</span><span class="token class-name">String</span> attribute<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    data<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>attribute<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>從管理複雜性的角度來看，此方法會使情況變得更糟，而不是更好。該方法不提供任何抽象，因為其所有功能都可以透過其介面看到。例如，呼叫者可能需要知道該屬性將儲存在 <code>data</code> 變數中。考慮介面並不比考慮完整實現簡單。如果正確地文件化了這個方法，則文件將比該方法的程式碼長。與呼叫方直接操作資料變數相比，呼叫該方法所花費的鍵盤敲擊數量甚至更多。該方法增加了複雜性（以供開發人員學習的新介面的形式），但沒有提供任何補償收益。</p><p><img src="`+e+'" alt=""> 危險訊號：淺模組 <img src="'+e+`" alt=""></p><blockquote><p>淺模組是一個介面相對於其提供的功能而言較為複雜的模組。淺模組在對抗複雜性方面無濟於事，因為它們提供的好處（不必瞭解它們在內部如何工作）被學習和使用其介面的成本所抵消。小模組往往很淺。</p></blockquote><h2 id="_4-6-多類症" tabindex="-1"><a class="header-anchor" href="#_4-6-多類症"><span>4.6 多類症</span></a></h2><p>不幸的是，深類的價值在今天並未得到廣泛認可。程式設計中的傳統觀點是，類應該 <em>小</em> 而不是深。學生們經常被教導說，類的設計中最重要的事情是將較大的類分成較小的類。對於方法，通常會給出相同的建議：“任何長於 N 行的方法都應分為多種方法”（N 可以低至 10）。這種方法導致了大量的淺類和方法，這增加了整體的系統複雜性。</p><p>“類應該小”的極端做法是我稱之為 <em>多類症</em> 的綜合症，這是由於錯誤地認為“類是好的，所以類越多越好”所導致的。在遭受多類症的系統中，鼓勵開發人員最小化每個新類的功能：如果您想要更多的功能，請引入更多的類。多類症可能導致每個類自身都很簡單，但是卻增加了整個系統的複雜性。小類不會貢獻太多功能，因此必須有很多小類，但每個小類都有自己的介面。這些介面的累積會在系統層級產生巨大的複雜性。由於每個類都需要樣板程式碼，小類也容易導致冗長的程式設計風格。</p><h2 id="_4-7-示例-java-和-unix-i-o" tabindex="-1"><a class="header-anchor" href="#_4-7-示例-java-和-unix-i-o"><span>4.7 示例：Java 和 Unix I/O</span></a></h2><p>如今，最常見的多類症案例之一是 Java 類庫。Java 語言本身並不意味著大量的小類，但是多類症的文化似乎已在 Java 程式設計社群中紮根。例如，要開啟檔案以便從檔案中讀取序列化的物件，必須建立三個不同的物件：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">FileInputStream</span> fileStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">BufferedInputStream</span> bufferedStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>fileStream<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ObjectInputStream</span> objectStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>bufferedStream<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>FileInputStream</code> 物件僅提供基本的 I/O：它不能執行緩衝的 I/O，也不能讀取或寫入序列化的物件。<code>BufferedInputStream</code> 物件將緩衝功能新增到 <code>FileInputStream</code>，而 <code>ObjectInputStream</code> 添加了讀取和寫入序列化物件的功能。一旦檔案被開啟，上面程式碼中的前兩個物件 <code>fileStream</code> 和 <code>bufferedStream</code> 將永遠不會被使用，以後的所有操作都使用 <code>objectStream</code>。</p>`,33),h=n("code",null,"BufferedInputStream",-1),_=n("strong",null,"設計介面時應該使常見情況儘可能簡單",-1),v=n("code",null,"FileInputStream",-1),f=n("p",null,[a("相反，Unix 系統呼叫的設計者使常見情況變得簡單。例如，他們認識到順序 I/O 是最常見的，因此他們將其作為預設行為。透過使用 "),n("code",null,"lseek"),a(" 系統呼叫，隨機訪問仍然相對容易實現，但是僅執行順序訪問的開發人員無需瞭解該機制。如果一個介面具有許多功能，但是大多數開發人員只需要瞭解其中的一些功能，那麼該介面的有效複雜性就是常用功能的複雜性。")],-1),b=n("h2",{id:"_4-8-結論",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-8-結論"},[n("span",null,"4.8 結論")])],-1),g=n("p",null,"透過將模組的介面與其實現分開，我們可以將實現的複雜性對系統的其餘部分隱藏起來。模組的使用者只需要瞭解模組介面提供的抽象。在設計類和其他模組時，最重要的事情是使它們足夠深，以使它們具有適用於常見用例的簡單介面，但仍提供重要的功能。這樣就能夠最大化地隱藏掉複雜性。",-1),w=n("p",null,"[1] 當前存在一些程式語言（主要是在研究社群中），可以在其中使用某種規範語言來對方法或功能的整體行為進行形式化的描述，也可以自動地檢查該規範以確保它與實現相匹配。一個有趣的問題是，這樣的形式化規範是否可以代替介面的非形式化部分。我目前的觀點是，用英語描述的介面比使用形式化的規範語言編寫的介面對開發人員來說更直觀和易於理解。",-1);function x(I,S){const s=d("RouteLink");return u(),i("div",null,[k,n("p",null,[a("明確指定介面的好處之一是，它可以準確指示開發人員使用關聯模組所需要知道的內容。這有助於消除"),p(s,{to:"/zh-tw/ch02.html"},{default:t(()=>[a("第 2.2 節")]),_:1}),a("中描述的“未知的未知”問題。")]),m,n("p",null,[a("特別令人煩惱（並且容易出錯）的是，必須透過建立一個單獨的 "),h,a(" 物件來顯式請求緩衝功能。如果開發人員忘記建立該物件，將沒有緩衝，並且 I/O 將變慢。也許 Java 開發人員會爭辯說，並不是每個人都希望對檔案 I/O 使用緩衝，因此不應將其內建到基本機制中。他們也可能會爭辯說，最好單獨提供緩衝能力，以便人們可以選擇是否使用它。提供選擇是好的，但是 "),_,a(" （請參閱"),p(s,{to:"/zh-tw/ch02.html"},{default:t(()=>[a("第 2.1 節")]),_:1}),a("的公式）。幾乎每個檔案 I/O 使用者都希望緩衝，因此預設情況下應提供緩衝。對於不需要緩衝的少數情況，該庫可以提供一種停用它的機制。停用緩衝的機制的任何機制都應該在介面中清晰地分離（例如，透過提供不同的 "),v,a(" 建構函式，或者透過提供停用或替換緩衝機制的方法），這樣大多數開發人員甚至不需要知道其存在。")]),f,b,g,w])}const z=o(r,[["render",x],["__file","ch04.html.vue"]]),N=JSON.parse('{"path":"/zh-tw/ch04.html","title":"第 4 章 模組應該是深的","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"4.1 模組化設計","slug":"_4-1-模組化設計","link":"#_4-1-模組化設計","children":[]},{"level":2,"title":"4.2 介面中有什麼？","slug":"_4-2-介面中有什麼","link":"#_4-2-介面中有什麼","children":[]},{"level":2,"title":"4.3 抽象","slug":"_4-3-抽象","link":"#_4-3-抽象","children":[]},{"level":2,"title":"4.4 深模組","slug":"_4-4-深模組","link":"#_4-4-深模組","children":[]},{"level":2,"title":"4.5 淺模組","slug":"_4-5-淺模組","link":"#_4-5-淺模組","children":[]},{"level":2,"title":"4.6 多類症","slug":"_4-6-多類症","link":"#_4-6-多類症","children":[]},{"level":2,"title":"4.7 示例：Java 和 Unix I/O","slug":"_4-7-示例-java-和-unix-i-o","link":"#_4-7-示例-java-和-unix-i-o","children":[]},{"level":2,"title":"4.8 結論","slug":"_4-8-結論","link":"#_4-8-結論","children":[]}],"git":{"updatedTime":1716993054000},"filePathRelative":"zh-tw/ch04.md"}');export{z as comp,N as data};
