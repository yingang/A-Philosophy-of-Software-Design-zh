import{_ as o,c as p,b as n,e as l,d as s,w as r,a as d,r as i,o as a}from"./app-C_hbX5uA.js";const u={};function g(f,t){const e=i("RouteLink");return a(),p("div",null,[t[8]||(t[8]=n("h1",{id:"第-17-章-一致性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第-17-章-一致性"},[n("span",null,"第 17 章 一致性")])],-1)),t[9]||(t[9]=n("p",null,"一致性是一個強大的工具，可以降低系統複雜性並使其行為更明顯。如果系統是一致的，則意味著相似的事情以相似的方式完成，而不同的事情則以不同的方式完成。一致性創造了認知槓桿：一旦您瞭解了某個地方的工作方式，就可以使用該知識立即瞭解其他使用相同方式的地方。如果系統沒有以一致的風格實現，則開發人員必須分別瞭解每種情況，這將花費更多的時間。",-1)),t[10]||(t[10]=n("p",null,"一致性減少了失誤。如果系統不是一致的，兩種實際上不相同的情況可能看起來是一樣的。開發人員可能會看到一個看起來很熟悉的模式，並根據以前遇到的模式做出錯誤的假設。另一方面，如果系統是一致的，則基於看起來很熟悉的情況所做的假設就會很安全。一致性允許開發人員更快速的工作，還能減少失誤。",-1)),t[11]||(t[11]=n("h2",{id:"_17-1-一致性示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_17-1-一致性示例"},[n("span",null,"17.1 一致性示例")])],-1)),t[12]||(t[12]=n("p",null,"一致性可以應用於系統中的許多層級，這裡是一些例子。",-1)),n("p",null,[t[1]||(t[1]=n("strong",null,"名稱。",-1)),t[2]||(t[2]=l()),s(e,{to:"/zh-tw/ch14.html"},{default:r(()=>t[0]||(t[0]=[l("第 14 章")])),_:1}),t[3]||(t[3]=l("已經討論了以一致的方式使用名稱的好處。"))]),t[13]||(t[13]=n("p",null,[n("strong",null,"編碼風格。"),l(" 如今，開發組織通常會制定編碼風格指南，在編譯器所強制執行的規則之外對程式進行額外的結構限制。現代的風格指南解決了一系列問題，例如縮排、花括號放置、宣告順序、命名、註釋以及對認為危險的語言特性的限制。風格指南使程式碼更易於閱讀，並且可以減少某些型別的錯誤。")],-1)),t[14]||(t[14]=n("p",null,[n("strong",null,"介面。"),l(" 具有多種實現的介面是一致性的另一個示例。一旦瞭解了介面的其中一種實現，其他的實現都將變得更易於理解，因為您已經知道它將會提供的特性。")],-1)),n("p",null,[t[5]||(t[5]=n("strong",null,"設計模式。",-1)),t[6]||(t[6]=l(" 設計模式是某些常見問題的普遍接受的解決方案，例如用於使用者介面設計的模型-檢視-控制器（MVC）方法。如果您可以使用現有的設計模式來解決問題，則實現會更快地進行，也更有可能奏效，並且您的程式碼對讀者來說也會更明顯。設計模式將在")),s(e,{to:"/zh-tw/ch19.html"},{default:r(()=>t[4]||(t[4]=[l("第 19.5 節")])),_:1}),t[7]||(t[7]=l("中詳細討論。"))]),t[15]||(t[15]=d('<p><strong>不變數。</strong> 不變數是一個變數或結構的屬性，它總是為真。例如，儲存文字行的資料結構可能會強制要求每行以換行符終止的不變數。不變數減少了程式碼中必須考慮的特殊情況的數量，並且更容易推斷程式碼的行為。</p><h2 id="_17-2-確保一致性" tabindex="-1"><a class="header-anchor" href="#_17-2-確保一致性"><span>17.2 確保一致性</span></a></h2><p>一致性很難保持，尤其是當許多人長時間從事一個專案時。一個小組的人可能不瞭解另一小組中建立的約定。新來的人不瞭解約定，因此他們無意間違反了約定，並建立了與現有約定衝突的新約定。以下是建立和保持一致性的一些技巧：</p><p><strong>文件。</strong> 建立一個文件，並列出最重要的總體約定，例如編碼風格指南。將文件放置在開發人員容易會看到的位置，例如專案維基的顯要位置。鼓勵新加入小組的成員來閱讀這些文件，並鼓勵現有的團隊人員時不時對文件進行審查。一些來自不同組織的風格指南已經在網上釋出；考慮從其中之一開始。</p><p>對於那些更加區域性的約定，例如不變數，請在程式碼中找到合適的位置進行記錄。如果您不把這些約定寫下來，那麼其他人也不太可能會遵循它們。</p><p><strong>強制執行。</strong> 即使有好的文件，開發人員也很難記住所有約定。強制執行約定的最佳方法是編寫一個檢查違規的工具，並確保程式碼在透過檢查之前不能提交到儲存庫。自動檢查對於低層級的語法約定特別有用。</p><p>我最近的一個專案有行終止符的問題。一些開發人員在 Unix 上工作，行由換行符終止；其他的人工作在 Windows 上，行通常由回車符加上換行符來終止。如果某個系統上的開發人員對先前在另一個系統上編輯過的檔案進行了編輯，那麼編輯器有時會將所有行終止符替換為適合該系統的行終止符。這給人的感覺是檔案的每一行都被修改了，也就讓人很難追蹤有意義的變化。我們建立了一個約定，即檔案應該只包含換行符，但是很難確保每個開發人員使用的每個工具都遵循這個約定。每當一個新的開發人員加入這個專案，我們都會遇到大量的行終止符問題，直到開發人員適應了這個約定。</p><p>我們最終透過編寫了一個簡短的指令碼解決了這個問題，該指令碼會在變更提交到原始碼儲存庫之前自動執行。該指令碼檢查所有已修改的檔案，如果其中任何一個包含回車符，則中止提交。該指令碼也可以手動執行，透過用換行符替換回車符加換行符來修復損壞的檔案。這一下子就消除了問題，並且還有助於培訓新的開發人員。</p><p>程式碼審查為強制執行約定和向新的開發人員提供培訓上提供了另一個時機。程式碼審閱者越挑剔，團隊中的每個人學習約定的速度就越快，並且程式碼越清晰。</p><p><strong>入鄉隨俗。</strong> 所有約定中最重要的約定是每個開發人員都應遵循古老的格言：“到了羅馬，就按羅馬人那樣做。” 在編寫新程式碼時，請先看看現有的程式碼是如何組織的。是否在私有變數和方法之前聲明瞭所有的公有變數和方法？方法是否按字母順序排列？變數是像 <code>firstServerName</code> 那樣使用駝峰命名法，還是像 <code>first_server_name</code> 中那樣使用蛇形命名法？當您看到任何看起來可能是約定的內容時，請遵循該約定。在做出設計決策時，請問自己是否有可能在專案的其它地方做出了類似的決策；如果是這樣，請找到一個現有示例，並在新程式碼中使用相同的方式。</p><p><strong>不要改變現有約定。</strong> 抵制“改善”現有約定的衝動。<strong>有一個“更好的想法”並不是引入不一致的充分藉口。</strong> 您的新想法可能確實更好，但是一致性勝過不一致的價值幾乎總是大於一種方法勝過另一種方法的價值。在引入不一致的行為之前，請問自己兩個問題。首先，您是否擁有在建立舊約定時還不存在的全新資訊來支援使用新的方法？其次，新的方法是否好到值得花時間去更新所有舊的用法？如果您的組織同意這兩個問題的回答均為“是”，那麼就去進行更新；當您完成後，應該不會有任何舊約定的痕跡留下來。然而，您仍然面臨著其他開發人員不瞭解新約定的風險，因此他們將來可能會重新引入舊的方法。總體而言，重新考慮已建立的約定很少會是對開發人員時間的好用途。</p><h2 id="_17-3-做過頭了" tabindex="-1"><a class="header-anchor" href="#_17-3-做過頭了"><span>17.3 做過頭了</span></a></h2><p>一致性不僅意味著相似的事情應該以相似的方式完成，而且不同的事情也應該以不同的方式完成。如果您對一致性過於熱衷，並試圖對不同的事物強制採用相同的方法，例如對確實不同的事物使用相同的變數名，或者對不適合該模式的任務使用現有的設計模式，那隻會造成複雜性和混亂。一致性只有在開發人員確信“如果它看起來像 <code>x</code>，它確實是 <code>x</code>”時才會帶來好處。</p><h2 id="_17-4-結論" tabindex="-1"><a class="header-anchor" href="#_17-4-結論"><span>17.4 結論</span></a></h2><p>一致性是投資思維的另一個例子。確保一致性的工作將需要一些額外的工作：決定使用什麼約定、建立自動檢查程式、尋找舊程式碼中的類似情況以在新程式碼中模仿、在程式碼審查中培訓團隊成員。這項投資的回報是您的程式碼將更加明顯。開發人員將能夠更快和更準確地瞭解程式碼的行為，這將使他們能夠更快地工作，並引入更少的缺陷。</p>',15))])}const h=o(u,[["render",g],["__file","ch17.html.vue"]]),x=JSON.parse('{"path":"/zh-tw/ch17.html","title":"第 17 章 一致性","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"17.1 一致性示例","slug":"_17-1-一致性示例","link":"#_17-1-一致性示例","children":[]},{"level":2,"title":"17.2 確保一致性","slug":"_17-2-確保一致性","link":"#_17-2-確保一致性","children":[]},{"level":2,"title":"17.3 做過頭了","slug":"_17-3-做過頭了","link":"#_17-3-做過頭了","children":[]},{"level":2,"title":"17.4 結論","slug":"_17-4-結論","link":"#_17-4-結論","children":[]}],"git":{"updatedTime":1727080590000},"filePathRelative":"zh-tw/ch17.md"}');export{h as comp,x as data};
