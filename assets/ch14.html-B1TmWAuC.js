import{_ as n}from"./00013-BT2rC0s8.js";import{_ as t,r as o,o as c,c as p,a as s,d as a,b as l,w as i,e as d}from"./app-D7EMVRyR.js";const u={},r=d(`<h1 id="第-14-章-選取名稱" tabindex="-1"><a class="header-anchor" href="#第-14-章-選取名稱"><span>第 14 章 選取名稱</span></a></h1><p>為變數、方法和其他實體選擇名稱是軟體設計中最被低估的方面之一。好的名稱是一種形式的文件：它們使程式碼更易於理解。它們減少了對其他文件的需求，並使檢測錯誤更加容易。相反，名稱選擇不當會增加程式碼的複雜性，造成的歧義和誤解可能會導致程式碼缺陷。名稱選擇是複雜性是增量產生的原理的一個示例。為特定變數選擇一個平庸的名稱，而不是最好的名稱，可能不會對系統的整體複雜性產生太大影響。但是，軟體系統具有成千上萬個變數，為所有這些選擇好的名稱將對複雜性和可管理性產生重大影響。</p><h2 id="_14-1-示例-壞名稱會導致程式碼缺陷" tabindex="-1"><a class="header-anchor" href="#_14-1-示例-壞名稱會導致程式碼缺陷"><span>14.1 示例：壞名稱會導致程式碼缺陷</span></a></h2><p>有時，即使是一個取名不當的變數也會產生嚴重的後果。我曾經修復過的最具挑戰性的程式碼缺陷就是由於名稱選取不當造成的。在 1980 年代末和 1990 年代初，我的研究生和我建立了一個名為 Sprite 的分散式作業系統。在某個時候，我們注意到檔案偶爾會丟失資料：即使使用者未修改檔案，資料塊之一也會突然變為全零。該問題並不經常發生，因此很難追蹤。一些研究生試圖找到該錯誤，但他們未能取得進展，最終放棄了。但是，我認為任何未解決的程式碼缺陷都是無法忍受的，因此我決定對其進行跟蹤。</p><p>結果花了六個月的時間，但我最終找到並修復了該缺陷。這個問題實際上很簡單（就像大多數缺陷一樣，一旦您找出原因之後）。檔案系統程式碼將變數名 <code>block</code> 用於兩個不同的目的。在某些情況下，<code>block</code> 是指磁碟上的物理塊號；在其它情況下，<code>block</code> 是指檔案中的邏輯塊號。不幸的是，在程式碼的某處有一個包含邏輯塊號的塊變數，但是在某個需要物理塊號的情況下意外地使用了它。結果，磁碟上無關的塊被重置為零了。</p><p>在跟蹤該錯誤時，包括我自己在內的幾個人都閱讀了有問題的程式碼，但我們從未注意到問題所在。當我們看到變數 <code>block</code> 用作物理塊號時，我們本能地假設它確實擁有物理塊號。經過很長時間的排查，最終表明損壞一定發生在特定的語句中，然後我才能越過該名稱所建立的思維障礙，並檢查它的值究竟來自何處。如果對不同型別的塊使用不同的變數名（例如 <code>fileBlock</code> 和 <code>diskBlock</code>），則錯誤很可能不會發生；程式設計師會知道在那種情況下不能使用 <code>fileBlock</code>。</p><p>不幸的是，大多數開發人員沒有花太多時間在思考名稱上面。他們傾向於使用想到的第一個名稱，只要它的含義與被命名的事物合理相近即可。例如，塊與磁碟上的物理塊和檔案內的邏輯塊都非常接近，這肯定不是一個可怕的名稱。即使如此，它還是導致花費了大量時間來追蹤一個細微的錯誤。因此，您不應該只選擇“合理相近”的名稱。花一些額外的時間來選擇準確、明確且直觀的好名稱。額外的時間花費將很快收回成本，隨著時間的流逝，您將學會快速選擇好名稱。</p><h2 id="_14-2-創造畫面" tabindex="-1"><a class="header-anchor" href="#_14-2-創造畫面"><span>14.2 創造畫面</span></a></h2><p>選擇名稱時，目標是能在讀者的腦海中創造出關於被命名事物的本質的畫面。一個好的名稱傳達了很多有關底層實體是什麼以及（同樣重要的）不是什麼的資訊。在考慮一個特定的名稱時，請問自己：“如果有人孤立地看到這個名稱，而沒有看到其宣告、文件或使用該名稱的任何程式碼，他們是否能夠猜到該名稱指的是什麼？還有其他名稱可以讓這個畫面更清晰嗎？” 當然，一個名稱可以包含多少資訊是有限制的。如果名稱包含兩個或三個以上的單詞，則會變得笨拙。因此，挑戰是僅通過幾個單詞就能捕獲到實體的最重要的方面。</p><p>名稱是一種抽象形式：名稱提供了一種簡化的方式來思考複雜的底層實體。就像其它形式的抽象一樣，最好的名稱會將注意力集中在對底層實體最重要的東西上，而忽略那些次要的細節。</p><h2 id="_14-3-名稱應該是精確的" tabindex="-1"><a class="header-anchor" href="#_14-3-名稱應該是精確的"><span>14.3 名稱應該是精確的</span></a></h2><p>良好的名稱具有兩個屬性：精確性和一致性。讓我們從精確性開始。名稱最常見的問題是太籠統或含糊不清。結果，讀者很難說出這個名稱指的是什麼。讀者可能會認為該名稱所指的是與現實不符的事物，如上面的 <code>block</code> 缺陷所示。考慮以下方法宣告：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Returns the total number of indexlets this object is managing.
 */</span>
<span class="token keyword">int</span> <span class="token class-name">IndexletManager</span><span class="token operator">::</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>術語 <code>count</code> 太籠統了：對什麼計數？如果有人看到此方法的呼叫，除非他們閱讀了它的文件，否則他們不太可能知道它的作用。像 <code>getActiveIndexlets</code> 或 <code>numIndexlets</code> 這樣的更精確的名稱會更好：使用這些名稱，讀者可能無需檢視其文件就能猜測該方法返回的內容。</p><p>以下是其他一些來自學生專案的名稱不夠精確的示例：</p><ul><li><p>構建影象介面文字編輯器的專案使用名稱 <code>x</code> 和 <code>y</code> 來表示字元在檔案中的位置。這些名稱太籠統了。他們可能意味著很多事情。例如，它們也可能代表螢幕上字元的座標（以畫素為單位）。單獨看到名稱 <code>x</code> 的人不太可能會認為它是指字元在一行文字中的位置。如果使用諸如 <code>charIndex</code> 和 <code>lineIndex</code> 之類的名稱來反映程式碼實現的特定抽象，該程式碼將更加清晰。</p></li><li><p>另一個編輯器專案包含以下程式碼：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Blink state: true when cursor visible.</span>
<span class="token keyword">private</span> <span class="token keyword">boolean</span> blinkStatus <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>The name blinkStatus doesn’t convey enough information. The word “status” is too vague for a boolean value: it gives no clue about what a true or false value means. The word “blink” is also vague, since it doesn’t indicate what is blinking. The following alternative is better:</p></blockquote><p><code>blinkStatus</code> 這個名稱無法傳達足夠的資訊。<code>status</code> 一詞對於布林值來說太含糊了：它不提供關於真值或假值含義的任何線索。<code>blink</code> 一詞也含糊不清，因為它並沒有將其含義表述清楚。以下是更好的選擇：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Controls cursor blinking: true means the cursor is visible,</span>
<span class="token comment">// false means the cursor is not displayed.</span>
<span class="token keyword">private</span> <span class="token keyword">boolean</span> cursorVisible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>The name cursorVisible conveys more information; for example, it allows readers to guess what a true value means (as a general rule, names of boolean variables should always be predicates). The word “blink” is no longer in the name, so readers will have to consult the documentation if they want to know why the cursor isn’t always visible; this information is less important.</p></blockquote><p>名稱 <code>cursorVisible</code> 傳達了更多資訊；例如，它允許讀者猜測真值的含義（通常，布林變數的名稱應始終為謂詞）。名稱中也不再包含 <code>blink</code> 一詞，因此，如果讀者想知道為什麼游標不總是可見，則必須查閱文件，此資訊不那麼重要。</p></li><li><p>一個實現共識協議的專案包含以下程式碼：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Value representing that the server has not voted (yet) for</span>
<span class="token comment">// anyone for the current election term.</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">VOTED_FOR_SENTINEL_VALUE</span> <span class="token operator">=</span> <span class="token string">&quot;null&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>The name for this value indicates that it’s special but it doesn’t say what the special meaning is. A more specific name such as NOT_YET_VOTED would be better.</p></blockquote><p>此值的名稱表示它是特殊的，但沒有說明特殊含義是什麼。使用更具體的名稱（例如 <code>NOT_YET_VOTED</code>）會更好。</p></li><li><p>在沒有返回值的方法中使用了名為 <code>result</code> 的變數。這個名稱有多個問題。首先，它會產生誤導，讓人以為它將成為方法的返回值。其次，它除了是某種計算值外，實際上沒有提供關於持有內容的任何資訊。它的名稱應提供有關 <code>result</code> 實際是什麼的資訊，例如 <code>mergedLine</code> 或 <code>totalChars</code>。在實際上確實具有返回值的方法中，使用 <code>result</code> 名稱是合理的。該名稱仍然有點通用，但是讀者可以檢視方法的文件以瞭解其含義，這有助於知道什麼值最終將成為返回值。</p></li></ul><p><img src="`+n+'" alt=""> 危險訊號：模糊的名稱 <img src="'+n+`" alt=""></p><p>如果變數或方法的名稱足夠廣泛，可以指代許多不同的事物，那麼它不會向開發人員傳遞太多資訊，因此其底層的實體很可能會被誤用。</p><p>像所有規則一樣，有關選擇精確名稱的規則也有一些例外。例如，如果迴圈僅包含幾行程式碼，也可以將通用名稱（如 <code>i</code> 和 <code>j</code>）用作迴圈迭代變數。如果您可以直接看到一個變數的完整使用範圍，那麼該變數的含義可能在程式碼中就很明顯了，因此您不需要長名稱。例如以下程式碼：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">for</span>  <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numLines<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>從這段程式碼中可以很明顯地看到 <code>i</code> 正被用來迭代某個實體中的每一行。如果迴圈太長，以至於您無法一次看到全部內容，或者如果很難從程式碼中找出迭代變數的含義，那麼應該使用更具描述性的名稱。</p><p>名稱也可能太具體，例如這個用來刪除文字範圍的方法的申明：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Range</span> selection<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>selection</code> 引數的名稱過於具體，因為它暗示要刪除的文字始終是在使用者介面中選取的。但是，可以在任意範圍的文字上呼叫此方法，無論是否選取。因此，這個引數名稱應選取更通用的，例如 <code>range</code>。</p><p>如果您發現很難為特定變數想出一個精確、直觀且不太長的名稱，那麼這是一個危險訊號。這表明該變數可能沒有清晰的定義或目的。發生這種情況時，請考慮其它因素。例如，也許您正在嘗試使用單個變數來表示多個事物；如果是這樣，將這種表示分成多個變數可能會讓每個變數的定義更簡單。選取好名稱的過程可以透過識別弱點來改善您的設計。</p><p><img src="`+n+'" alt=""> 危險訊號：難以選取名稱 <img src="'+n+`" alt=""></p><p>如果很難為變數或方法找到一個簡單的名稱，該名稱能夠清晰地描述底層物件，那麼這暗示底層物件的設計可能不夠簡潔。</p><h2 id="_14-4-命名要確保一致性" tabindex="-1"><a class="header-anchor" href="#_14-4-命名要確保一致性"><span>14.4 命名要確保一致性</span></a></h2><p>好的名稱的第二個重要屬性是一致性。在任何程式中，都會反覆使用某些變數。例如，檔案系統反覆操作塊號。對於每種常見用途，請選擇一個用於該目的的名稱，並在各處使用相同的名稱。例如，檔案系統可能總是使用 <code>fileBlock</code> 來儲存檔案中的塊索引。一致的命名方式與複用一個通用的類一樣，可以減輕認知負荷：一旦讀者在一個上下文中看到了該名稱，當他們在不同上下文中看到該名稱時，就可以重用其知識並立即做出假設。</p><p>一致性具有三個要求：首先，始終將通用名稱用於給定目的；其次，除了給定目的外，切勿使用通用名稱；第三，確保給定的目的足夠窄，以使所有具有該名稱的變數都具有相同的行為。在本章開頭的檔案系統缺陷案例中違反了第三項要求。檔案系統使用 <code>block</code> 來表示具有兩種不同行為的變數（檔案塊和磁碟塊），這導致對變數含義的錯誤假設，進而導致程式碼缺陷。</p><p>有時您將需要多個變數來引用相同的事物。例如，一個複製檔案資料的方法將需要兩個塊號，一個為源，一個為目標。發生這種情況時，請對每個變數使用通用名稱，但要新增一個可區分的字首，例如 <code>srcFileBlock</code> 和 <code>dstFileBlock</code>。</p><p>迴圈是一致性命名可以提供幫助的另一個領域。如果將諸如 <code>i</code> 和 <code>j</code> 之類的名稱用於迴圈變數，則始終在最外層迴圈中使用 <code>i</code>，而在巢狀的迴圈中始終使用 <code>j</code>。這使讀者可以在看到給定名稱時對程式碼中發生的事情做出即時的（安全的）假設。</p><h2 id="_14-5-不同的觀點-go-樣式指南" tabindex="-1"><a class="header-anchor" href="#_14-5-不同的觀點-go-樣式指南"><span>14.5 不同的觀點：Go 樣式指南</span></a></h2><p>並非所有人都同意我對命名的看法。一些使用 Go 語言的開發人員認為，名稱應該非常簡短，通常只能是一個字元。在關於 Go 的名稱選擇的演示中，Andrew Gerrand 指出“長名稱模糊了程式碼的作用。” [1] 他介紹了此程式碼示例，該示例使用單字母變數名：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">RuneCount</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    i<span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> RuneSelf <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token boolean">_</span><span class="token punctuation">,</span> size <span class="token operator">:=</span> <span class="token function">DecodeRune</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span>i<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            i <span class="token operator">+=</span> size
        <span class="token punctuation">}</span>
        n<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> n
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>並認為它比以下使用更長名稱的版本更具可讀性：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">RuneCount</span><span class="token punctuation">(</span>buffer <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    index<span class="token punctuation">,</span> count <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">for</span> index <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> buffer<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&lt;</span> RuneSelf <span class="token punctuation">{</span>
            index<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token boolean">_</span><span class="token punctuation">,</span> size <span class="token operator">:=</span> <span class="token function">DecodeRune</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span>index<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            index <span class="token operator">+=</span> size
        <span class="token punctuation">}</span>
        count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就個人而言，我不覺得第二版比第一版更難讀。比如，與 n 相比，名稱 count 為變數的行為提供了更好的線索。在第一個版本中，我最終通讀了程式碼，才弄清楚 n 的含義，而第二個版本中我並沒有這種需要。但是，如果在整個系統中一致地使用 n 來表示計數（而不表示任何其它內容），那麼其他開發人員可能會清楚知道該短名稱。</p><p>Go 文化鼓勵在多個不同的事物上使用相同的短名稱：<code>ch</code> 用於字元或通道，<code>d</code> 用於資料、差異或距離，等等。對我來說，像這樣的模稜兩可的名稱很可能導致混亂和錯誤，就像在檔案塊的示例中一樣。</p><p>總的來說，我認為可讀性必須由讀者而不是作者來決定。如果您使用簡短的變數名編寫程式碼，並且閱讀該程式碼的人很容易理解，那麼很好。如果您開始抱怨程式碼很含糊，那麼您應該考慮使用更長的名稱（在網路上搜索 <code>go language short name</code> 會發現一些這樣的抱怨）。同樣，如果我開始抱怨長變數名使我的程式碼難以閱讀，那麼我會考慮使用較短的變數名。</p><p>Gerrand 發表了一個我同意的評論：“名稱宣告與其使用之間的距離越大，名稱就應該越長。” 前面關於使用名為 <code>i</code> 和 <code>j</code> 的迴圈變數的討論是此規則的示例。</p><h2 id="_14-6-結論" tabindex="-1"><a class="header-anchor" href="#_14-6-結論"><span>14.6 結論</span></a></h2>`,42),k=s("p",null,"[1] https://talks.golang.org/2014/names.slide#1",-1);function v(m,b){const e=o("RouteLink");return c(),p("div",null,[r,s("p",null,[a("精心選取的名稱有助於使程式碼更顯而易見。當有人第一次遇到該變數時，他們對行為的第一次猜測就是正確的，而不需要太多的思考。選取好名稱是"),l(e,{to:"/zh-tw/ch03.html"},{default:i(()=>[a("第 3 章")]),_:1}),a("討論的投資思維的一個示例：如果您花一些額外的時間來選取好名稱，將來您將更容易處理程式碼。此外，您也會更不容易引入程式碼缺陷。培養命名技巧也是一項投資。當您第一次決定不再滿足於平庸的名稱時，您會發現想出好名稱的過程既令人沮喪又耗時。但是，隨著您獲得更多的經驗，您會發現它也變得更加容易。最終，您將幾乎不需要花費額外的時間來選取好名稱，因此您幾乎可以免費獲得它的好處。")]),k])}const f=t(u,[["render",v],["__file","ch14.html.vue"]]),_=JSON.parse('{"path":"/zh-tw/ch14.html","title":"第 14 章 選取名稱","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"14.1 示例：壞名稱會導致程式碼缺陷","slug":"_14-1-示例-壞名稱會導致程式碼缺陷","link":"#_14-1-示例-壞名稱會導致程式碼缺陷","children":[]},{"level":2,"title":"14.2 創造畫面","slug":"_14-2-創造畫面","link":"#_14-2-創造畫面","children":[]},{"level":2,"title":"14.3 名稱應該是精確的","slug":"_14-3-名稱應該是精確的","link":"#_14-3-名稱應該是精確的","children":[]},{"level":2,"title":"14.4 命名要確保一致性","slug":"_14-4-命名要確保一致性","link":"#_14-4-命名要確保一致性","children":[]},{"level":2,"title":"14.5 不同的觀點：Go 樣式指南","slug":"_14-5-不同的觀點-go-樣式指南","link":"#_14-5-不同的觀點-go-樣式指南","children":[]},{"level":2,"title":"14.6 結論","slug":"_14-6-結論","link":"#_14-6-結論","children":[]}],"git":{"updatedTime":1711179478000},"filePathRelative":"zh-tw/ch14.md"}');export{f as comp,_ as data};
