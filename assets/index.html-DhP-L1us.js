import{_ as i}from"./cover-DlNwh4-T.js";import{_ as h,r as a,o as s,c,a as e,b as d,w as l,d as t,e as n}from"./app-BN4aZR6W.js";const u={},p=n('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><img src="'+i+'" style="width:28%;"><blockquote><p>This book addresses the topic of software design: how to decompose complex software systems into modules (such as classes and methods) that can be implemented relatively independently. The book first introduces the fundamental problem in software design, which is managing complexity. It then discusses philosophical issues about how to approach the software design process, and it presents a collection of design principles to apply during software design. The book also introduces a set of red flags that identify design problems. You can apply the ideas in this book to minimize the complexity of large software systems, so that you can write software more quickly.</p></blockquote><p>这本书是关于软件设计的：如何将复杂的软件系统分解成模块（如类和方法），以便这些模块可以相对独立地实现。首先，这本书介绍了软件设计的基本问题，也就是对复杂性的管理。然后，它讨论了关于如何处理软件设计过程的一些哲学问题，并提出了一系列可以在软件设计过程中应用的设计原则。本书还介绍了一些可用来识别设计问题的危险信号。您可以通过应用本书中的想法来减少大型软件系统的复杂性，以便您可以更快地编写软件。</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>',5),f=e("h2",{id:"翻译说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#翻译说明"},[e("span",null,"翻译说明")])],-1),m={href:"https://github.com/Cactus-proj/A-Philosophy-of-Software-Design-zh",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/Go7hic/A-Philosophy-of-Software-Design",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/luojiego/A-Philosophy-of-Software-Design-zh",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/yingang/aposd-zh",target:"_blank",rel:"noopener noreferrer"},k={href:"https://yingang.github.io/aposd-zh/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/gdut-yy",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/liquid207",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/wanghuanwei",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/luojiego",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/BlackGlory",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/inkydragon",target:"_blank",rel:"noopener noreferrer"},C=n('<p>如果您在阅读过程中，发现有翻译不当的地方，或者有其他建议，欢迎提交相应的 PR 或 Issue。</p><h2 id="术语翻译" tabindex="-1"><a class="header-anchor" href="#术语翻译"><span>术语翻译</span></a></h2><p>翻译是个比较困难的事情，除了个人水平，也有很多见仁见智的地方，所以这里先列出一些术语的翻译选择和背后的考虑因素，以供参考，并至少在本书籍的翻译过程中保持相对统一，也欢迎提 Issue 探讨。</p><p>通用的术语：</p><table><thead><tr><th>英文</th><th>中文</th><th>说明</th></tr></thead><tbody><tr><td>bug</td><td>代码缺陷/缺陷</td><td></td></tr><tr><td>change</td><td>变更/改变</td><td></td></tr><tr><td>change amplification</td><td>变更放大</td><td></td></tr><tr><td>classitis</td><td>多类症</td><td></td></tr><tr><td>cognitive load</td><td>认知负荷</td><td></td></tr><tr><td>complexity</td><td>复杂性</td><td></td></tr><tr><td>deep module / class</td><td>深模块 / 深类</td><td>没有用“深层”是希望避免与 layer 和 level 等术语的翻译混淆</td></tr><tr><td>dependency / dependencies</td><td>依赖性 / 依赖项</td><td></td></tr><tr><td>dispatcher</td><td>分发器</td><td>没有用“调度器”是希望避免与 scheduler 等术语的翻译混淆</td></tr><tr><td>exception masking</td><td>异常屏蔽</td><td></td></tr><tr><td>exception aggregation</td><td>异常聚合</td><td></td></tr><tr><td>formal / informal</td><td>形式化的 / 非形式化的</td><td></td></tr><tr><td>GUI</td><td>图形界面 / 图形用户界面</td><td></td></tr><tr><td>hierarchical</td><td>层次化的</td><td></td></tr><tr><td>implement</td><td>实现</td><td></td></tr><tr><td>information leakage</td><td>信息泄露</td><td>没有用泄漏</td></tr><tr><td>layer / level</td><td>层 / 层级</td><td></td></tr><tr><td>mindset</td><td>思维方式 / 思维</td><td></td></tr><tr><td>obscurity</td><td>模糊性/模糊项</td><td></td></tr><tr><td>public method / variables</td><td>公有方法 / 公有变量</td><td>没有用“公开”是希望与 expose 和 exposure 等术语的翻译混淆</td></tr><tr><td>shallow module / class</td><td>浅模块 / 浅类</td><td>和 deep 的翻译选择是同样的原因</td></tr><tr><td>strategic programming / approach</td><td>战略式编程 / 战略式方法</td><td></td></tr><tr><td>tactical programming / approach</td><td>战术式编程 / 战术式方法</td><td></td></tr><tr><td>waterfall method / model</td><td>瀑布式方法 / 瀑布式模型</td><td></td></tr><tr><td>web browser / server</td><td>Web 浏览器 / Web 服务器</td><td>没有用“网络”或“网页”是希望避免与 network 和 web page 等术语的翻译混淆，就保留英文了</td></tr><tr><td>web site</td><td>网站</td><td></td></tr></tbody></table><p>仅针对本书籍的术语：</p><table><thead><tr><th>英文</th><th>中文</th><th>说明</th></tr></thead><tbody><tr><td>define error out of existence</td><td>通过定义来规避错误</td><td></td></tr><tr><td>red flag</td><td>危险信号</td><td></td></tr><tr><td>taking it too far</td><td>做过头了</td><td></td></tr><tr><td>somewhat general-purpose</td><td>有点通用 / 一定程度的通用</td><td></td></tr><tr><td>unknown unknowns</td><td>未知的未知</td><td></td></tr></tbody></table>',7);function G(R,S){const r=a("RouteLink"),o=a("ExternalLinkIcon");return s(),c("div",null,[p,e("ul",null,[e("li",null,[d(r,{to:"/preface.html"},{default:l(()=>[t("前言")]),_:1})]),e("li",null,[d(r,{to:"/ch01.html"},{default:l(()=>[t("第 1 章 介绍")]),_:1})]),e("li",null,[d(r,{to:"/ch02.html"},{default:l(()=>[t("第 2 章 复杂性的本质")]),_:1})]),e("li",null,[d(r,{to:"/ch03.html"},{default:l(()=>[t("第 3 章 能工作的代码是不够的")]),_:1})]),e("li",null,[d(r,{to:"/ch04.html"},{default:l(()=>[t("第 4 章 模块应该是深的")]),_:1})]),e("li",null,[d(r,{to:"/ch05.html"},{default:l(()=>[t("第 5 章 信息隐藏和信息泄露")]),_:1})]),e("li",null,[d(r,{to:"/ch06.html"},{default:l(()=>[t("第 6 章 通用的模块是更深的")]),_:1})]),e("li",null,[d(r,{to:"/ch07.html"},{default:l(()=>[t("第 7 章 不同的层级，不同的抽象")]),_:1})]),e("li",null,[d(r,{to:"/ch08.html"},{default:l(()=>[t("第 8 章 降低复杂性")]),_:1})]),e("li",null,[d(r,{to:"/ch09.html"},{default:l(()=>[t("第 9 章 在一起更好还是分开更好？")]),_:1})]),e("li",null,[d(r,{to:"/ch10.html"},{default:l(()=>[t("第 10 章 通过定义来规避错误")]),_:1})]),e("li",null,[d(r,{to:"/ch11.html"},{default:l(()=>[t("第 11 章 设计它两次")]),_:1})]),e("li",null,[d(r,{to:"/ch12.html"},{default:l(()=>[t("第 12 章 为什么要写注释？有四个理由")]),_:1})]),e("li",null,[d(r,{to:"/ch13.html"},{default:l(()=>[t("第 13 章 注释应该描述代码中不明显的内容")]),_:1})]),e("li",null,[d(r,{to:"/ch14.html"},{default:l(()=>[t("第 14 章 选取名字")]),_:1})]),e("li",null,[d(r,{to:"/ch15.html"},{default:l(()=>[t("第 15 章 先写注释")]),_:1})]),e("li",null,[d(r,{to:"/ch16.html"},{default:l(()=>[t("第 16 章 修改现有的代码")]),_:1})]),e("li",null,[d(r,{to:"/ch17.html"},{default:l(()=>[t("第 17 章 一致性")]),_:1})]),e("li",null,[d(r,{to:"/ch18.html"},{default:l(()=>[t("第 18 章 代码应该是显而易见的")]),_:1})]),e("li",null,[d(r,{to:"/ch19.html"},{default:l(()=>[t("第 19 章 软件发展趋势")]),_:1})]),e("li",null,[d(r,{to:"/ch20.html"},{default:l(()=>[t("第 20 章 性能设计")]),_:1})]),e("li",null,[d(r,{to:"/ch21.html"},{default:l(()=>[t("第 21 章 结论")]),_:1})]),e("li",null,[d(r,{to:"/summary.html"},{default:l(()=>[t("总结")]),_:1})])]),f,e("p",null,[t("无意中看到这本书的相关介绍，也很快找到了 GitHub 上的民间翻译版，因为看到一些翻译不太恰当的地方，所以想着顺手提交修正下，然后找到其中 Star 数量比较多的主要是 "),e("a",m,[t("Cactus-proj"),d(o)]),t(" 和 "),e("a",_,[t("Go7hic"),d(o)]),t(" 的，但两者的内容几乎完全一样，包括翻译有错误的地方也错得一样。从实质内容的提交历史来看，应该 Cactus-proj 是更早的提交者，这一点从各自的 Fock/Star 数量也能侧面印证。")]),e("p",null,[t("这两个项目均有收到并处理一些内容修正的 PR，但即使是 Cactus-proj，最新的几个 PR 也处于长期未处理的状态，应该都已经暂停维护了，然后基于 Cactus-proj，包含内容修复最多的是 "),e("a",g,[t("luojiego"),d(o)]),t(" 的 Fock，于是就基于这个创建了自己的 "),e("a",b,[t("Fork"),d(o)]),t("。除了一边阅读一边校对，也摸索着更新了相关的部署脚本，同样部署到 "),e("a",k,[t("GitHub Pages"),d(o)]),t(" 上，可直接在线阅读。")]),e("p",null,[t("从提交历史来看，"),e("a",y,[t("gdut-yy"),d(o)]),t(" 应该是主要的翻译贡献者，"),e("a",w,[t("liquid207"),d(o)]),t("、"),e("a",x,[t("wanghuanwei"),d(o)]),t("、"),e("a",v,[t("luojiego"),d(o)]),t(" 和 "),e("a",j,[t("BlackGlory"),d(o)]),t(" 也都贡献了比较多的翻译修正，"),e("a",P,[t("inkydragon"),d(o)]),t(" 则主要负责了 LaTeX 和 PDF 相关的工作以及格式规范、持续集成等方面的工作，不确定历史是否挖掘充分，所有提到未提到的贡献者，一并感谢！")]),C])}const N=h(u,[["render",G],["__file","index.html.vue"]]),T=JSON.parse('{"path":"/","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"翻译说明","slug":"翻译说明","link":"#翻译说明","children":[]},{"level":2,"title":"术语翻译","slug":"术语翻译","link":"#术语翻译","children":[]}],"git":{"updatedTime":1709275940000},"filePathRelative":"README.md"}');export{N as comp,T as data};
