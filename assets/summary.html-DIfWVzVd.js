import{_ as e,o as i,c as t,e as s}from"./app-DqxXm7EX.js";const o={},a=s('<h1 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h1><h2 id="summary-of-design-principles" tabindex="-1"><a class="header-anchor" href="#summary-of-design-principles"><span>Summary of Design Principles</span></a></h2><p>Here are the most important software design principles discussed in this book:</p><ol><li>Complexity is incremental: you have to sweat the small stuff (see p. 11).</li><li>Working code isn’t enough (see p. 14).</li><li>Make continual small investments to improve system design (see p. 15).</li><li>Modules should be deep (see p. 22)</li><li>Interfaces should be designed to make the most common usage as simple as possible (see p. 27).</li><li>It’s more important for a module to have a simple interface than a simple implementation (see pp. 55, 71).</li><li>General-purpose modules are deeper (see p. 39).</li><li>Separate general-purpose and special-purpose code (see p. 62).</li><li>Different layers should have different abstractions (see p. 45).</li><li>Pull complexity downward (see p. 55).</li><li>Define errors (and special cases) out of existence (see p. 79).</li><li>Design it twice (see p. 91).</li><li>Comments should describe things that are not obvious from the code (see p. 101).</li><li>Software should be designed for ease of reading, not ease of writing (see p. 149).</li><li>The increments of software development should be abstractions, not features (see p. 154).</li></ol><h2 id="summary-of-red-flags" tabindex="-1"><a class="header-anchor" href="#summary-of-red-flags"><span>Summary of Red Flags</span></a></h2><p>Here are a few of of the most important red flags discussed in this book. The presence of any of these symptoms in a system suggests that there is a problem with the system’s design:</p><ul><li>Shallow Module: the interface for a class or method isn’t much simpler than its implementation (see pp. 25, 110).</li><li>Information Leakage: a design decision is reflected in multiple modules (see p. 31).</li><li>Temporal Decomposition: the code structure is based on the order in which operations are executed, not on information hiding (see p. 32).</li><li>Overexposure: An API forces callers to be aware of rarely used features in order to use commonly used features (see p. 36).</li><li>Pass-Through Method: a method does almost nothing except pass its arguments to another method with a similar signature (see p. 46).</li><li>Repetition: a nontrivial piece of code is repeated over and over (see p. 62).</li><li>Special-General Mixture: special-purpose code is not cleanly separated from general purpose code (see p. 65).</li><li>Conjoined Methods: two methods have so many dependencies that its hard to understand the implementation of one without understanding the implementation of the other (see p. 72).</li><li>Comment Repeats Code: all of the information in a comment is immediately obvious from the code next to the comment (see p. 104).</li><li>Implementation Documentation Contaminates Interface: an interface comment describes implementation details not needed by users of the thing being documented (see p. 114).</li><li>Vague Name: the name of a variable or method is so imprecise that it doesn’t convey much useful information (see p. 123).</li><li>Hard to Pick Name: it is difficult to come up with a precise and intuitive name for an entity (see p. 125).</li><li>Hard to Describe: in order to be complete, the documentation for a variable or method must be long. (see p. 131).</li><li>Nonobvious Code: the behavior or meaning of a piece of code cannot be understood easily. (see p. 148).</li></ul><h2 id="about-the-author" tabindex="-1"><a class="header-anchor" href="#about-the-author"><span>About the Author</span></a></h2><p>John Ousterhout is the Bosack Lerner Professor of Computer Science at Stanford University. He is the creator of the Tcl scripting language and is also well known for his work in distributed operating systems and storage systems. Ousterhout received a BS degree in Physics from Yale University and a PhD in Computer Science from Carnegie Mellon University. He is a member of the National Academy of Engineering and has received numerous awards, including the ACM Software System Award, the ACM Grace Murray Hopper Award, the National Science Foundation Presidential Young Investigator Award, and the U.C. Berkeley Distinguished Teaching Award.</p>',9),n=[a];function r(l,m){return i(),t("div",null,n)}const h=e(o,[["render",r],["__file","summary.html.vue"]]),p=JSON.parse('{"path":"/en/summary.html","title":"Summary","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Summary of Design Principles","slug":"summary-of-design-principles","link":"#summary-of-design-principles","children":[]},{"level":2,"title":"Summary of Red Flags","slug":"summary-of-red-flags","link":"#summary-of-red-flags","children":[]},{"level":2,"title":"About the Author","slug":"about-the-author","link":"#about-the-author","children":[]}],"git":{"updatedTime":1710665711000},"filePathRelative":"en/summary.md"}');export{h as comp,p as data};
