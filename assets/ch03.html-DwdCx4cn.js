import{_ as e}from"./00011-COS6AKOT.js";import{_ as a,o as p,c as t,e as l}from"./app-Bd_TqMRZ.js";const s={},c=l('<h1 id="第-3-章-能工作的程式碼是不夠的" tabindex="-1"><a class="header-anchor" href="#第-3-章-能工作的程式碼是不夠的"><span>第 3 章 能工作的程式碼是不夠的</span></a></h1><p>（戰略式程式設計與戰術式程式設計）</p><p>好的軟體設計中最重要的元素之一是您在執行程式設計任務時所採用的思維方式。許多組織都鼓勵採取戰術式（Tactical）的思維方式，著眼於使功能儘快執行。但是，如果您想要一個好的設計，則必須採取更戰略式（Strategic）的方法，花費時間來製作乾淨的設計並解決問題。本章討論了從長遠來看，為什麼戰略式的方法可以產生更好的設計，而實際上卻比戰術式的方法成本更低。</p><h2 id="_3-1-戰術式程式設計" tabindex="-1"><a class="header-anchor" href="#_3-1-戰術式程式設計"><span>3.1 戰術式程式設計</span></a></h2><p>大多數程式設計師以我稱為戰術式程式設計的思維方式來進行軟體開發。在戰術式方法中，您的主要重點是使某些功能正常工作，例如新功能或錯誤修復。乍一看，這似乎是完全合理的：還有什麼比編寫能工作的程式碼更重要的呢？但是，戰術式程式設計幾乎不可能產生出良好的系統設計。</p><p>戰術式程式設計的問題在於它是短視的。如果您是戰術式程式設計人員，那麼您將嘗試儘快完成任務。也許您有一個艱難的完成期限，因此為未來做計劃不是優先事項。您不會花費太多時間來尋找最佳設計。您只想儘快讓程式碼能工作起來。您告訴自己，可以增加一些複雜性或引入一兩處蹩腳的小實現，如果這樣可以使當前任務更快地完成，那就沒什麼大不了的。</p><p>這就是系統變得複雜的方式。如上一章所述，複雜性是增量產生的。不是某個特定的事物會讓系統變複雜，而是幾十或數百個小事物的積累而導致的。如果您在編碼時總是使用戰術式思維方式，則每個程式設計任務都會帶來一些此類複雜性。為了快速完成當前任務，這些複雜性中的每一個似乎都是合理的折衷方案。但是，複雜性迅速累積，尤其是每個人都使用戰術式程式設計的時候。</p><p>不久之後，某些複雜性將開始引起問題，並且您將開始希望您沒有采用這些早期的捷徑。但是，您會告訴自己，使下一個功能正常工作比返回去重構現有程式碼更為重要。從長遠來看，重構可能會有所幫助，但是肯定會減慢當前的任務。因此，您需要快速修補程式來解決遇到的任何問題。這隻會增加更多的複雜性，然後需要更多的補丁。很快程式碼變得一團糟，而且到現在為止，情況已經很糟糕了，清理它需要花費數月的時間。您的日程安排無法容忍這種延遲，解決一個或兩個問題似乎並沒有太大的區別，因此您就只能繼續保持這種戰術式的程式設計方式。</p><p>如果您從事大型軟體專案的時間很長，我懷疑您在工作中已經看到了戰術式程式設計，並且遇到了其所導致的問題。一旦您沿著戰術式程式設計的路線走，就很難改變。</p><p>幾乎每個軟體開發組織都有至少一個將戰術式程式設計發揮到極致的開發人員：戰術龍捲風。戰術龍捲風是一位多產的程式設計師，他產出程式碼的速度比其他人快得多，但完全以戰術方式工作。實現緊急功能時，沒有人能比戰術龍捲風更快地完成任務。在某些組織中，管理層將戰術龍捲風視為英雄。但是，戰術龍捲風留下了毀滅的痕跡。他們很少被將來必須使用其程式碼的工程師視為英雄。通常，其他工程師必須清理戰術龍捲風留下的混亂局面，這使得那些工程師（他們才是真正的英雄）的進度似乎比戰術龍捲風慢。</p><h2 id="_3-2-戰略式程式設計" tabindex="-1"><a class="header-anchor" href="#_3-2-戰略式程式設計"><span>3.2 戰略式程式設計</span></a></h2><p>成為一名優秀的軟體設計師的第一步是要意識到 <strong>能工作的程式碼是不夠的</strong>。引入不必要的複雜性以更快地完成當前任務是不可接受的。最重要的是系統的長期結構。任何系統中的大多數程式碼都是透過擴充套件現有程式碼庫編寫的，因此，作為開發人員，最重要的工作就是促進這些將來的擴充套件。因此，儘管您的程式碼當然必須能工作，但您不應將“能工作的程式碼”視為主要目標。您的主要目標必須是產生出色的設計，並且這種設計也能很好地工作。這就是 <em>戰略式程式設計</em>。</p><p>戰略式程式設計需要一種投資的思維方式。您必須花費時間來改進系統的設計，而不是採取最快的方式來完成當前的專案。這些投資會在短期內讓您放慢腳步，但從長遠來看會加快您的速度，如圖 3.1 所示。</p><p>一些投資將是主動的。例如，值得花一些時間為每個新類找到一個簡單的設計，而不是直接去實現第一個想到的辦法。請嘗試幾種替代設計並選擇最簡潔的設計。設想一下將來可能需要更改系統的幾種方式，並確保您的設計會讓這些更改更為容易。編寫好的文件是主動投資的另一個例子。</p><p>其他投資將是被動的。無論您預先投入多少，設計決策中都不可避免地會出現錯誤。隨著時間的流逝，這些錯誤將變得顯而易見。發現設計問題時，不要忽略它或只是對其進行簡單的修補。花一些額外的時間來真正修復它。如果您進行戰略式程式設計，則將不斷對系統設計進行小幅改進。這與戰術式程式設計相反，在戰術式程式設計中，您不斷增加一些複雜性，這些複雜性將來會引起問題。</p><h2 id="_3-3-該投資多少" tabindex="-1"><a class="header-anchor" href="#_3-3-該投資多少"><span>3.3 該投資多少？</span></a></h2><p>那麼，正確的投資額是多少？大量的前期投資（例如嘗試一次性設計整個系統）將不會有效。這是瀑布式方法，我們知道它不起作用。隨著您對系統的理解不斷深入，理想的設計會逐漸湧現出來。因此，最好的方法是連續進行大量的小額投資 ​​。我建議您將總開發時間的 10% 到 20% 用於投資。該額度足夠小，不會對您的日程安排產生重大影響，但又足夠大，可以隨著時間的推移產生重大收益。因此，您的初始專案將比純戰術式方法多花費 10% 到 20% 的時間。額外的時間將帶來更好的軟體設計，並且您將在幾個月內開始體驗到這些好處。不久之後，您的開發速度將比戰術式程式設計快至少 10 到 20%。到這個時候，您的投資將是免費的了：您過去投資的收益將節省足夠的時間來支付未來投資的費用。您將迅速收回初始投資的成本。圖 3.1 說明了這種現象。</p><p><img src="'+e+'" alt=""></p><p>圖 3.1：一開始，戰術式的程式設計方法將比戰略式方法更快地取得進展。但是，在戰術式方法下，複雜性積累得更快，從而降低了生產率。隨著時間的流逝，戰略式方法的進展會更加地快。注意：此圖僅用於定性說明，我沒有了解到任何關於曲線精確形狀的實證資料。</p><p>相反，如果您進行戰術式程式設計，則可以將初始專案的完成速度提高 10% 到 20%，但是隨著時間的推移，複雜性的累積會降低開發速度。不久之後，您的程式設計速度至少會降低 10% 到 20%。您將很快失去在開始時節省的所有時間，並且在系統的整個生命週期中，與採用戰略式方法相比，您的開發速度將更加緩慢。如果您從未碰到過質量非常糟糕的程式碼庫，請與有經驗的人談一談。他們會告訴您糟糕的程式碼質量會使開發速度至少降低 20%。</p><h2 id="_3-4-初創公司與投資" tabindex="-1"><a class="header-anchor" href="#_3-4-初創公司與投資"><span>3.4 初創公司與投資</span></a></h2><p>在某些環境中，強大的力量與戰略式方法背道而馳。例如，早期的初創公司感到巨大的壓力，需要儘快釋出其早期版本。在這些公司中，10% 至 20% 的投資似乎也負擔不起。結果，許多初創公司採取了戰術式的方法，在設計上花費的精力很少，而在問題出現時則花費了更少的精力進行清理。他們認為，只要他們成功了，他們將有足夠的錢聘請額外的工程師來清理問題，從而使其合理化。</p><p>如果您正在一家朝著這個方向發展的公司工作，則應該意識到，一旦程式碼庫變成了義大利麵條，幾乎是不可能修復的。您可能會在產品的生命週期內付出高昂的開發成本。此外，好的（或壞的）設計的回報很快就會到來，因此戰術式方法甚至很有可能不會加快您的首個產品釋出的速度。</p><p>另一件要考慮的事情是，公司成功的最重要因素之一就是工程師的素質。降低開發成本的最佳方法是聘請優秀的工程師：他們的成本不會比普通工程師高很多，但生產率卻高得多。但是，最好的工程師對良好的設計深感興趣。如果您的程式碼庫很糟糕，這個訊息總是會傳出去，這將使您的招聘更加難以進行。最終可能還是隻能使用普通的工程師。這將增加您的未來成本，並可能導致系統結構進一步退化。</p><p>Facebook 是一個鼓勵戰術式程式設計的創業公司的例子。多年來，公司的座右銘是“快速行動，不怕犯錯”。公司鼓勵剛大學畢業的新工程師立即深入公司的程式碼庫；工程師在工作的第一週就將程式碼提交到生產庫也是正常的。從積極的一面來看，Facebook 作為一家賦能員工的公司而享有聲譽。工程師擁有極大的自由度，並且幾乎沒有任何規則和限制來阻擋他們。</p><p>Facebook 作為一家公司已經取得了令人矚目的成功，但是由於該公司的戰術式方法，其程式碼庫受到了影響。許多程式碼不穩定且難以理解，幾乎沒有註釋或測試，並且使用起來很痛苦。隨著時間的流逝，該公司意識到其文化是不可持續的。最終，Facebook 改變了座右銘，即“在堅實的基礎架構上快速行動”，以鼓勵其工程師在良好的設計上進行更多的投資。但 Facebook 是否能夠成功清除其多年來在戰術式程式設計中積累的問題還有待觀察。</p><p>為了公平起見，我應該指出，Facebook 的程式碼可能並不比初創公司的平均水平差很多。戰術式程式設計在初創公司中司空見慣，Facebook 只是一個特別明顯的例子。</p><p>幸運的是，使用戰略式方法也有可能在矽谷取得成功。Google 和 VMware 與 Facebook 差不多同時成長，但是這兩家公司都採用了更具戰略式的方法。兩家公司都非常重視高質量的程式碼和良好的設計，並且兩家公司都開發了複雜的產品，這些產品透過可靠的軟體系統解決了複雜的問題。公司的強大技術文化在矽谷廣為人知。很少有其他公司可以與他們競爭聘請頂級技術人才。</p><p>這些例子表明，使用任何一種方法公司都有可能成功。但是，在一家關心軟體設計並擁有整潔程式碼庫的公司中工作會有趣得多。</p><h2 id="_3-5-結論" tabindex="-1"><a class="header-anchor" href="#_3-5-結論"><span>3.5 結論</span></a></h2><p>好的設計不是免費的。它必須是您持續投資的東西，這樣小問題才不會累積成大問題。幸運的是，好的設計最終會收回成本，而且比您想象的要早。</p><p>始終如一地運用戰略式方法並將投資視為今天而不是明天要做的事情至關重要。當您在一個緊要的關頭，很容易推遲清理，直到危機結束之後。但是，這是一個滑坡謬誤（slippery slope）。在當前的危機過去之後，幾乎肯定還會出現下一次。一旦開始延遲設計改進，就很容易使延遲永久化，並使您的文化陷入戰術式方法中。您等待解決設計問題的時間越長，問題就會變得越大；解決方案也會變得更加令人生畏，這使得輕鬆推遲解決方案變得更加容易。最有效的方法是，每位工程師都對良好的設計進行持續的小額投資。</p>',32),n=[c];function h(o,r){return p(),t("div",null,n)}const d=a(s,[["render",h],["__file","ch03.html.vue"]]),m=JSON.parse('{"path":"/zh-tw/ch03.html","title":"第 3 章 能工作的程式碼是不夠的","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"3.1 戰術式程式設計","slug":"_3-1-戰術式程式設計","link":"#_3-1-戰術式程式設計","children":[]},{"level":2,"title":"3.2 戰略式程式設計","slug":"_3-2-戰略式程式設計","link":"#_3-2-戰略式程式設計","children":[]},{"level":2,"title":"3.3 該投資多少？","slug":"_3-3-該投資多少","link":"#_3-3-該投資多少","children":[]},{"level":2,"title":"3.4 初創公司與投資","slug":"_3-4-初創公司與投資","link":"#_3-4-初創公司與投資","children":[]},{"level":2,"title":"3.5 結論","slug":"_3-5-結論","link":"#_3-5-結論","children":[]}],"git":{"updatedTime":1712631036000},"filePathRelative":"zh-tw/ch03.md"}');export{d as comp,m as data};
