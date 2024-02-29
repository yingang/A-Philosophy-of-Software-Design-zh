import{_ as n,r as s,o as r,c as h,a as t,d as e,b as o,w as i,e as a}from"./app-D_PX6Mv1.js";const d={},u=a('<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h1><h2 id="设计原则小结" tabindex="-1"><a class="header-anchor" href="#设计原则小结"><span>设计原则小结</span></a></h2><blockquote><p>Here are the most important software design principles discussed in this book:</p></blockquote><p>这些是本书中讨论的最重要的软件设计原则：</p><blockquote><ol><li>Complexity is incremental: you have to sweat the small stuff (see p. 11).</li><li>Working code isn’t enough (see p. 14).</li><li>Make continual small investments to improve system design (see p. 15).</li><li>Modules should be deep (see p. 22)</li><li>Interfaces should be designed to make the most common usage as simple as possible (see p. 27).</li><li>It’s more important for a module to have a simple interface than a simple implementation (see pp. 55, 71).</li><li>General-purpose modules are deeper (see p. 39).</li><li>Separate general-purpose and special-purpose code (see p. 62).</li><li>Different layers should have different abstractions (see p. 45).</li><li>Pull complexity downward (see p. 55).</li><li>Define errors (and special cases) out of existence (see p. 79).</li><li>Design it twice (see p. 91).</li><li>Comments should describe things that are not obvious from the code (see p. 101).</li><li>Software should be designed for ease of reading, not ease of writing (see p. 149).</li><li>The increments of software development should be abstractions, not features (see p. 154).</li></ol></blockquote>',5),c=a('<h2 id="危险信号小结" tabindex="-1"><a class="header-anchor" href="#危险信号小结"><span>危险信号小结</span></a></h2><blockquote><p>Here are a few of of the most important red flags discussed in this book. The presence of any of these symptoms in a system suggests that there is a problem with the system’s design:</p></blockquote><p>这些是本书中讨论的一些最重要的危险信号。系统中任何这些症状的存在都表明系统的设计存在问题：</p><blockquote><ul><li>Shallow Module: the interface for a class or method isn’t much simpler than its implementation (see pp. 25, 110).</li><li>Information Leakage: a design decision is reflected in multiple modules (see p. 31).</li><li>Temporal Decomposition: the code structure is based on the order in which operations are executed, not on information hiding (see p. 32).</li><li>Overexposure: An API forces callers to be aware of rarely used features in order to use commonly used features (see p. 36).</li><li>Pass-Through Method: a method does almost nothing except pass its arguments to another method with a similar signature (see p. 46).</li><li>Repetition: a nontrivial piece of code is repeated over and over (see p. 62).</li><li>Special-General Mixture: special-purpose code is not cleanly separated from general purpose code (see p. 65).</li><li>Conjoined Methods: two methods have so many dependencies that its hard to understand the implementation of one without understanding the implementation of the other (see p. 72).</li><li>Comment Repeats Code: all of the information in a comment is immediately obvious from the code next to the comment (see p. 104).</li><li>Implementation Documentation Contaminates Interface: an interface comment describes implementation details not needed by users of the thing being documented (see p. 114).</li><li>Vague Name: the name of a variable or method is so imprecise that it doesn’t convey much useful information (see p. 123).</li><li>Hard to Pick Name: it is difficult to come up with a precise and intuitive name for an entity (see p. 125).</li><li>Hard to Describe: in order to be complete, the documentation for a variable or method must be long. (see p. 131).</li><li>Nonobvious Code: the behavior or meaning of a piece of code cannot be understood easily. (see p. 148).</li></ul></blockquote>',4),m=t("h2",{id:"关于作者",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#关于作者"},[t("span",null,"关于作者")])],-1),p=t("blockquote",null,[t("p",null,"John Ousterhout is the Bosack Lerner Professor of Computer Science at Stanford University. He is the creator of the Tcl scripting language and is also well known for his work in distributed operating systems and storage systems. Ousterhout received a BS degree in Physics from Yale University and a PhD in Computer Science from Carnegie Mellon University. He is a member of the National Academy of Engineering and has received numerous awards, including the ACM Software System Award, the ACM Grace Murray Hopper Award, the National Science Foundation Presidential Young Investigator Award, and the U.C. Berkeley Distinguished Teaching Award.")],-1),f=t("p",null,"John Ousterhout 是斯坦福大学的 Bosack Lerner 计算机科学教授。他是 Tcl 脚本语言的创建者，并且以在分布式操作系统和存储系统中的工作而闻名。Ousterhout 在耶鲁大学获得了物理学学士学位，并在卡内基梅隆大学获得了计算机科学博士学位。他是美国国家工程院院士，并获得了无数奖项，包括 ACM 软件系统奖，ACM Grace Murray Hopper 奖，美国国家科学基金会总统年轻研究者奖和 UC Berkeley 杰出教学奖。",-1);function _(g,b){const l=s("RouteLink");return r(),h("div",null,[u,t("ol",null,[t("li",null,[e("复杂性是增量产生的：您必须努力处理小事情（请参阅 "),o(l,{to:"/ch02.html"},{default:i(()=>[e("第 2.4 节")]),_:1}),e("）。")]),t("li",null,[e("能工作的代码是不够的（请参阅 "),o(l,{to:"/ch03.html"},{default:i(()=>[e("第 3.2 节")]),_:1}),e("）。")]),t("li",null,[e("持续进行小额投资以改善系统设计（请参阅 "),o(l,{to:"/ch03.html"},{default:i(()=>[e("第 3.3 节")]),_:1}),e("）。")]),t("li",null,[e("模块应该是深的（请参阅 "),o(l,{to:"/ch04.html"},{default:i(()=>[e("第 4.4 节")]),_:1}),e("）")]),t("li",null,[e("接口的设计应尽可能简化其最常见的用法（请参阅 "),o(l,{to:"/ch04.html"},{default:i(()=>[e("第 4.7 节")]),_:1}),e("）。")]),t("li",null,[e("让模块的接口简单比让其实现简单更重要（请参阅 "),o(l,{to:"/ch08.html"},{default:i(()=>[e("第八章")]),_:1}),e(", "),o(l,{to:"/ch09.html"},{default:i(()=>[e("9.8")]),_:1}),e("）。")]),t("li",null,[e("通用模块是更深的（请参阅 "),o(l,{to:"/ch06.html"},{default:i(()=>[e("第 6 章")]),_:1}),e("）。")]),t("li",null,[e("通用和专用代码分开（请参阅 "),o(l,{to:"/ch09.html"},{default:i(()=>[e("9.4")]),_:1}),e("）。")]),t("li",null,[e("不同的层级应具有不同的抽象（请参阅 "),o(l,{to:"/ch07.html"},{default:i(()=>[e("第 7 章")]),_:1}),e("）。")]),t("li",null,[e("降低复杂度（请参阅 "),o(l,{to:"/ch08.html"},{default:i(()=>[e("第八章")]),_:1}),e("）。")]),t("li",null,[e("定义不存在的错误（和特殊情况）（请参阅 "),o(l,{to:"/ch10.html"},{default:i(()=>[e("10.3")]),_:1}),e("）。")]),t("li",null,[e("设计两次（请参阅 "),o(l,{to:"/ch11.html"},{default:i(()=>[e("第十一章")]),_:1}),e("）。")]),t("li",null,[e("注释应描述代码中不明显的内容（请参阅 "),o(l,{to:"/ch13.html"},{default:i(()=>[e("第十三章")]),_:1}),e("）。")]),t("li",null,[e("软件的设计应易于阅读而不是易于编写（请参阅 "),o(l,{to:"/ch18.html"},{default:i(()=>[e("18.2")]),_:1}),e("）。")]),t("li",null,[e("软件开发的增量应该是抽象而不是功能（请参阅 "),o(l,{to:"/ch19.html"},{default:i(()=>[e("19.2")]),_:1}),e("）。")])]),c,t("ul",null,[t("li",null,[e("浅模块：类或方法的接口并不比其实现简单得多（请参阅 "),o(l,{to:"/ch04.html"},{default:i(()=>[e("第 4.5 节")]),_:1}),e("）。")]),t("li",null,[e("信息泄露：设计决策反映在多个模块中（请参阅 "),o(l,{to:"/ch05.html"},{default:i(()=>[e("第 5.2 节")]),_:1}),e("）。")]),t("li",null,[e("时间分解：代码结构基于执行操作的顺序，而不是基于信息隐藏的原则（请参阅 "),o(l,{to:"/ch05.html"},{default:i(()=>[e("第 5.3 节")]),_:1}),e("）。")]),t("li",null,[e("过度暴露：API 强迫调用者在使用常用功能的时候还需要去了解那些很少使用的功能（请参阅 "),o(l,{to:"/ch05.html"},{default:i(()=>[e("第 5.7 节")]),_:1}),e("）。")]),t("li",null,[e("直通方法：一种几乎不执行任何操作的方法，只是将其参数传递给具有相似签名的另一个方法（请参阅 "),o(l,{to:"/ch07.html"},{default:i(()=>[e("第 7.1 节")]),_:1}),e("）。")]),t("li",null,[e("重复：一遍又一遍的重复代码（请参阅"),o(l,{to:"/ch09.html"},{default:i(()=>[e("第 9 章")]),_:1}),e("）。")]),t("li",null,[e("特殊通用混合物：特殊用途代码未与通用代码完全分开（请参阅"),o(l,{to:"/ch09.html"},{default:i(()=>[e("第 9 章")]),_:1}),e("）。")]),t("li",null,[e("联合方法：两种方法之间的依赖性很大，以至于很难理解一种方法的实现而又不理解另一种方法的实现（请参阅"),o(l,{to:"/ch09.html"},{default:i(()=>[e("第 9 章")]),_:1}),e("）。")]),t("li",null,[e("注释重复代码：注释旁边的代码会立即显示注释中的所有信息（请参阅"),o(l,{to:"/ch13.html"},{default:i(()=>[e("第 13 章")]),_:1}),e("）。")]),t("li",null,[e("实施文档污染了界面：界面注释描述了所记录事物的用户不需要的实施细节（请参阅"),o(l,{to:"/ch13.html"},{default:i(()=>[e("第 13 章")]),_:1}),e("）。")]),t("li",null,[e("含糊不清的名称：变量或方法的名称过于精确，以至于它不能传达很多有用的信息（请参阅"),o(l,{to:"/ch14.html"},{default:i(()=>[e("第 14 章")]),_:1}),e("）。")]),t("li",null,[e("难以选择的名称：很难为实体提供准确而直观的名称（请参阅"),o(l,{to:"/ch14.html"},{default:i(()=>[e("第 14 章")]),_:1}),e("）。")]),t("li",null,[e("难以描述：为了完整起见，变量或方法的文档必须很长。（请参阅"),o(l,{to:"/ch15.html"},{default:i(()=>[e("第 15 章")]),_:1}),e("）。")]),t("li",null,[e("非显而易见的代码：一段代码的行为或含义不容易理解。（请参阅"),o(l,{to:"/ch18.html"},{default:i(()=>[e("第 18 章")]),_:1}),e("）。")])]),m,p,f])}const v=n(d,[["render",_],["__file","summary.html.vue"]]),k=JSON.parse('{"path":"/summary.html","title":"总结","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"设计原则小结","slug":"设计原则小结","link":"#设计原则小结","children":[]},{"level":2,"title":"危险信号小结","slug":"危险信号小结","link":"#危险信号小结","children":[]},{"level":2,"title":"关于作者","slug":"关于作者","link":"#关于作者","children":[]}],"git":{"updatedTime":1709214639000},"filePathRelative":"summary.md"}');export{v as comp,k as data};
