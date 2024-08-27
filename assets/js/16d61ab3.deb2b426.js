"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1039],{8724:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=s(4848),o=s(8453);const r={title:"Memory Chatbot",sidebar_position:3,slug:"/starter-projects-memory-chatbot"},i=void 0,a={id:"Starter-Projects/starter-projects-memory-chatbot",title:"Memory Chatbot",description:"This flow extends the\xa0Basic Prompting\xa0flow to include a chat memory. This makes the AI remember previous user inputs.",source:"@site/docs/Starter-Projects/starter-projects-memory-chatbot.md",sourceDirName:"Starter-Projects",slug:"/starter-projects-memory-chatbot",permalink:"/starter-projects-memory-chatbot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Memory Chatbot",sidebar_position:3,slug:"/starter-projects-memory-chatbot"},sidebar:"defaultSidebar",previous:{title:"Document QA",permalink:"/starter-projects-document-qa"},next:{title:"Vector Store RAG",permalink:"/starter-projects-vector-store-rag"}},c={},d=[{value:"Prerequisites",id:"a71d73e99b1543bbba827207503cf31f",level:2},{value:"Memory Chatbot",id:"54073bf7eb1b4ff490c313f5612f0842",level:2},{value:"Create the memory chatbot project",id:"70ce99381b7043a1b417a81e9ae74c72",level:3},{value:"Run",id:"a110cad860584c98af1aead006035378",level:3},{value:"Session ID",id:"4e68c3c0750942f98c45c1c45d7ffbbe",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This flow extends the\xa0",(0,n.jsx)(t.a,{href:"http://localhost:3000/starter-projects/basic-prompting",children:"Basic Prompting"}),"\xa0flow to include a chat memory. This makes the AI remember previous user inputs."]}),"\n",(0,n.jsx)(t.h2,{id:"a71d73e99b1543bbba827207503cf31f",children:"Prerequisites"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/getting-started-installation",children:"Langflow installed and running"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://platform.openai.com/",children:"OpenAI API key created"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"54073bf7eb1b4ff490c313f5612f0842",children:"Memory Chatbot"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"70ce99381b7043a1b417a81e9ae74c72",children:"Create the memory chatbot project"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["From the Langflow dashboard, click\xa0",(0,n.jsx)(t.strong,{children:"New Project"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Select\xa0",(0,n.jsx)(t.strong,{children:"Memory Chatbot"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The\xa0",(0,n.jsx)(t.strong,{children:"Memory Chatbot"}),"\xa0flow is created ."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(799).A+"",width:"2624",height:"1476"})}),"\n",(0,n.jsxs)(t.p,{children:["This flow uses the same components as the Basic Prompting one, but extends it with a\xa0",(0,n.jsx)(t.strong,{children:"Chat Memory"}),"\xa0component. This component retrieves previous messages and sends them to the\xa0",(0,n.jsx)(t.strong,{children:"Prompt"}),"\xa0component to fill a part of the\xa0",(0,n.jsx)(t.strong,{children:"Template"}),"\xa0with context."]}),"\n",(0,n.jsx)(t.p,{children:"By clicking the template, you'll see the prompt editor like below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(9077).A+"",width:"3168",height:"1782"})}),"\n",(0,n.jsxs)(t.p,{children:["This gives the\xa0",(0,n.jsx)(t.strong,{children:"OpenAI"}),"\xa0component a memory of previous chat messages."]}),"\n",(0,n.jsx)(t.h3,{id:"a110cad860584c98af1aead006035378",children:"Run"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Open the Playground."}),"\n",(0,n.jsxs)(t.li,{children:["Type multiple questions. In the\xa0",(0,n.jsx)(t.strong,{children:"Memories"}),"\xa0tab, your queries are logged in order. Up to 100 queries are stored by default. Try telling the AI your name and asking\xa0",(0,n.jsx)(t.code,{children:"What is my name?"})," on a second message, or\xa0",(0,n.jsx)(t.code,{children:"What is the first subject I asked you about?"}),"\xa0to validate that previous knowledge is taking effect."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Check and adjust advanced parameters by opening the Advanced Settings of the\xa0",(0,n.jsx)(t.strong,{children:"Chat Memory"}),"\xa0component."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(367).A+"",width:"3168",height:"1782"})}),"\n",(0,n.jsx)(t.h2,{id:"4e68c3c0750942f98c45c1c45d7ffbbe",children:"Session ID"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"SessionID"}),"\xa0is a unique identifier in Langflow that stores conversation sessions between the AI and a user. A\xa0",(0,n.jsx)(t.code,{children:"SessionID"}),"\xa0is created when a conversation is initiated, and then associated with all subsequent messages during that session."]}),"\n",(0,n.jsxs)(t.p,{children:["In the\xa0",(0,n.jsx)(t.strong,{children:"Memory Chatbot"}),"\xa0flow you created, the\xa0",(0,n.jsx)(t.strong,{children:"Chat Memory"}),"\xa0component references past interactions by\xa0",(0,n.jsx)(t.strong,{children:"Session ID"}),". You can demonstrate this by modifying the\xa0",(0,n.jsx)(t.strong,{children:"Session ID"}),"\xa0value to switch between conversation histories."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["In the\xa0",(0,n.jsx)(t.strong,{children:"Session ID"}),"\xa0field of the\xa0",(0,n.jsx)(t.strong,{children:"Chat Memory"}),"\xa0and\xa0",(0,n.jsx)(t.strong,{children:"Chat Input"}),"\xa0components, add a\xa0",(0,n.jsx)(t.strong,{children:"Session ID"}),"\xa0value like\xa0",(0,n.jsx)(t.code,{children:"MySessionID"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Now, once you send a new message the\xa0",(0,n.jsx)(t.strong,{children:"Playground"}),", you should have a new memory created on the\xa0",(0,n.jsx)(t.strong,{children:"Memories"}),"\xa0tab."]}),"\n",(0,n.jsx)(t.li,{children:"Notice how your conversation is being stored in different memory sessions."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Every\xa0chat\xa0component in Langflow comes with a\xa0",(0,n.jsx)(t.code,{children:"SessionID"}),". It defaults to the flow ID. Explore how changing it affects what the AI remembers."]})}),"\n",(0,n.jsxs)(t.p,{children:["Learn more about memories in the ",(0,n.jsx)(t.a,{href:"/guides-chat-memory",children:"Chat Memory"})," section."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},367:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/1079168789-a858a7f0d52ddfc06bc2fd63a54b40bd.png"},799:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/1511598495-892f4bbecec74fa62578ceb8885f38f6.png"},9077:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/450254819-3ad91dd8bdfe33f1df6fdbc3f5bfa1b3.png"},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(6540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);