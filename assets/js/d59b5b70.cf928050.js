"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8183],{9215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(4848),a=t(8453);const s={title:"1.0 - A new chapter for Langflow",sidebar_position:0,slug:"/whats-new-a-new-chapter-langflow"},i=void 0,r={id:"What\u2019s-New/whats-new-a-new-chapter-langflow",title:"1.0 - A new chapter for Langflow",description:"First things first",source:"@site/docs/What\u2019s-New/whats-new-a-new-chapter-langflow.md",sourceDirName:"What\u2019s-New",slug:"/whats-new-a-new-chapter-langflow",permalink:"/whats-new-a-new-chapter-langflow",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"1.0 - A new chapter for Langflow",sidebar_position:0,slug:"/whats-new-a-new-chapter-langflow"},sidebar:"defaultSidebar",next:{title:"\ud83d\udc4b\xa0Welcome to Langflow",permalink:"/"}},l={},d=[{value:"First things first",id:"5add758564574950862f689198a4e085",level:2},{value:"What&#39;s new?",id:"ecad059e8f8249c598404c0b2bab36fa",level:2},{value:"Same Component, Multiple Outputs",id:"85986f3ae303444fb69d9ea1baa2eca8",level:3},{value:"Flow + Composition",id:"12d86f91b5af4abc9f8e885c5f828df4",level:3},{value:"Memory Management",id:"a9e352272f4a44499f52fae65b663118",level:3},{value:"Component Freeze\xa0\ud83e\udd76",id:"4912d08da5464ff2aff595d6b26fd809",level:3},{value:"Output Preview",id:"f56d4400b0214ef2ab1206add068dd99",level:3},{value:"Inputs and Outputs Handling",id:"2112c11dc496480c9bd681f04f8533ea",level:3},{value:"Custom Endpoint Name",id:"bfeb7018e8bd46bf9dbef43ce2d3692b",level:3},{value:"Logs &amp; Monitoring",id:"c902ee43b4b24711b526352ae2451c48",level:3},{value:"Folders \ud83d\udcc1",id:"d01237fd83e4467994fed6fa7a8ee4f4",level:3},{value:"Playground",id:"27649918dcb64a0ebae83db767bfe2eb",level:3},{value:"Multi-Modal",id:"b7753bc9d72f40c49c4074a8d0e51344",level:3},{value:"An Easier Start",id:"c6bf434c0d35482bbf2ef0bceff902f0",level:2},{value:"What&#39;s Next?",id:"21004578890d4397bc291b43eb140640",level:2}];function c(e){const n={em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(9263).A+"",width:"1920",height:"1080"})}),"\n",(0,o.jsx)(n.h2,{id:"5add758564574950862f689198a4e085",children:"First things first"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Thank you all for being part of the Langflow community"}),". The journey so far has been amazing, and we are thrilled to have you with us."]}),"\n",(0,o.jsx)(n.p,{children:"We have some exciting news to share with you. Langflow is evolving, and we want to tell you all about it!"}),"\n",(0,o.jsx)(n.h2,{id:"ecad059e8f8249c598404c0b2bab36fa",children:"What's new?"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"In the past year, we learned a lot from the community and our users. We saw the potential of Langflow and the need for a visual, interactive platform for building conversational AI applications (and beyond). You thought us the importance of a platform that is easy to use, but also powerful and controllable, and that made clear to us how Langflow's transparency could be improved."}),"\n",(0,o.jsx)(n.p,{children:"Below are some of the new features we included to make that happen!"}),"\n",(0,o.jsx)(n.h3,{id:"85986f3ae303444fb69d9ea1baa2eca8",children:"Same Component, Multiple Outputs"}),"\n",(0,o.jsx)(n.p,{children:"Components can now have more than a single output, allowing for unique flexibility in creating complex flows. The game-changer is output routing \u2014 it allows for so many new capabilities it\u2019s almost silly to describe!"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Branch to one or more subsequent components;"}),"\n",(0,o.jsx)(n.li,{children:"Apply logic operations like if/else and exploit decision-making;"}),"\n",(0,o.jsx)(n.li,{children:"Create classification models that choose between paths;"}),"\n",(0,o.jsx)(n.li,{children:"Enable the development of agent architectures from scratch;"}),"\n",(0,o.jsx)(n.li,{children:"Build an orchestrator that routes between agents."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"12d86f91b5af4abc9f8e885c5f828df4",children:"Flow + Composition"}),"\n",(0,o.jsxs)(n.p,{children:["One key change you'll notice is that projects now require you to define\xa0",(0,o.jsx)(n.strong,{children:"Inputs"}),"\xa0and\xa0",(0,o.jsx)(n.strong,{children:"Outputs"}),". They allow you to define the structure of your conversation and how data flows through it. This change comes with a new way of visualizing your projects."]}),"\n",(0,o.jsx)(n.p,{children:"Before 1.0 you would connect components to ultimately build one final component that was processed behind the scenes. Now, each step of the process is defined by you, is visible on the workspace, and can be monitored and controlled."}),"\n",(0,o.jsxs)(n.p,{children:["This makes it so that composition is now just\xa0",(0,o.jsx)(n.strong,{children:"another way"}),"\xa0of building in Langflow and\xa0",(0,o.jsx)(n.strong,{children:"data flows through your project more transparently"}),". This means that the easy stuff is\xa0",(0,o.jsx)(n.em,{children:"really"}),"\xa0easy and the complex parts are still possible!"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Flow:"}),"\xa0Data is processed by one component and then passed to the next component in line for immediate execution."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Composition"}),": Allows components to not only forward data but also share states for modular building."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For example, a flow can sequentially process text, and after a few steps, trigger an agent. It can access functions that wait to be called or to respond. This blend of flow and composition brings an unprecedented level of flexibility and control to data workflows in LLM-based apps and agents that use multiple models and APIs working together to achieve tasks."}),"\n",(0,o.jsx)(n.h3,{id:"a9e352272f4a44499f52fae65b663118",children:"Memory Management"}),"\n",(0,o.jsx)(n.p,{children:"Langflow 1.0 natively allows every chat message to be stored, and a single flow can have multiple memory sessions. This enables you to create multiple \u201cmemories\u201d for agents to store and recall specific information as needed."}),"\n",(0,o.jsx)(n.p,{children:"You can edit and remove previous messages to inspect and validate a model\u2019s response behavior. Control, explore, and manage conversation histories to get your models acting just right."}),"\n",(0,o.jsx)(n.h3,{id:"4912d08da5464ff2aff595d6b26fd809",children:"Component Freeze\xa0\ud83e\udd76"}),"\n",(0,o.jsx)(n.p,{children:"Component output freezing is back in Langflow, and it\u2019s cooler than ever!"}),"\n",(0,o.jsx)(n.p,{children:"Once a component runs, you can now lock its previous output state to prevent it from re-running."}),"\n",(0,o.jsx)(n.p,{children:"Avoid spending extra tokens and remove repetition when output should be constant \u2014 plus it's great for debugging and prototyping!"}),"\n",(0,o.jsx)(n.h3,{id:"f56d4400b0214ef2ab1206add068dd99",children:"Output Preview"}),"\n",(0,o.jsx)(n.p,{children:"Each component now includes an output visualizer that opens a pop-up screen, allowing you to easily inspect and monitor transmissions between components. It provides instant feedback on your workflows, letting you see results as they are processed. \ud83d\udd0d"}),"\n",(0,o.jsx)(n.h3,{id:"2112c11dc496480c9bd681f04f8533ea",children:"Inputs and Outputs Handling"}),"\n",(0,o.jsx)(n.p,{children:"Inputs and outputs finally make more sense to us, and hopefully to you too."}),"\n",(0,o.jsx)(n.p,{children:"We\u2019re proposing Langflow-native types to keep things consistent, but not limited to use any Python type. For instance, a Chat Input component sends out what we call a Message object (text + metadata like date, time, and sender), but maybe you want to introduce external types from your favorite Python package? Go wild. Each native type will have their own visualization modes and will evolve according to new integrations added."}),"\n",(0,o.jsx)(n.h3,{id:"bfeb7018e8bd46bf9dbef43ce2d3692b",children:"Custom Endpoint Name"}),"\n",(0,o.jsx)(n.p,{children:"Now you can pick a custom name for your endpoint used to call your flow from the API."}),"\n",(0,o.jsx)(n.h3,{id:"c902ee43b4b24711b526352ae2451c48",children:"Logs & Monitoring"}),"\n",(0,o.jsx)(n.p,{children:"A new logs page has been added! Now, both component executions and message history from the chat can be inspected in an interactive table. This will make it easier to debug, inspect, and manage messages passing through components."}),"\n",(0,o.jsx)(n.h3,{id:"d01237fd83e4467994fed6fa7a8ee4f4",children:"Folders \ud83d\udcc1"}),"\n",(0,o.jsx)(n.p,{children:"We introduced folders on the home page to help categorize flows and components. Create, remove and edit them to keep your work organized."}),"\n",(0,o.jsx)(n.h3,{id:"27649918dcb64a0ebae83db767bfe2eb",children:"Playground"}),"\n",(0,o.jsx)(n.p,{children:"By having a clear definition of Inputs and Outputs, we could build the experience around that, which led us to create the Playground."}),"\n",(0,o.jsx)(n.p,{children:"When building a project, testing and debugging are crucial. The Playground is an interface that changes dynamically based on the Inputs and Outputs you defined in your project."}),"\n",(0,o.jsx)(n.p,{children:"For example, let's say you are building a simple RAG application. Generally, you have an Input, some references that come from a Vector Store Search, a Prompt, and the answer. Now, you could plug the output of your Prompt into a Text Output, rename that to \"Prompt Result,\" and see the output of your Prompt in the Playground. We have many planned features for the Playground, and we're excited to see how you'll explore it!"}),"\n",(0,o.jsx)(n.h3,{id:"b7753bc9d72f40c49c4074a8d0e51344",children:"Multi-Modal"}),"\n",(0,o.jsx)(n.p,{children:"Langflow is now\xa0multi-modal! It can now handle images and more soon!"}),"\n",(0,o.jsx)(n.p,{children:"We\u2019ve also improved project organization, global variables and overall settings, added Python 3.12 compatibility, keyboard shortcuts and a lot of new and fun experimental components!"}),"\n",(0,o.jsx)(n.h2,{id:"c6bf434c0d35482bbf2ef0bceff902f0",children:"An Easier Start"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"The experience for first-time users is something we wanted to improve. For that we created a couple of Starter Projects. It's now much easier to start a new project, and you can choose from a list of starter projects to get you going."}),"\n",(0,o.jsx)(n.p,{children:"For now, we have:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Basic Prompting (Hello, World)"}),": Learn the basics of a Prompt Component."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Vector Store RAG"}),": Ingest data into a Vector Store and then use it to run a RAG application."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Memory Chatbot"}),": Create a simple chatbot that can remember things about the user."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Document QA"}),": Build a simple flow that helps you get answers about a document."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Blog Writer"}),": Expand on the Prompt variables and be creative about what inputs you add to it."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Please let us know what other starter projects you would like to see in the future!"}),"\n",(0,o.jsx)(n.h2,{id:"21004578890d4397bc291b43eb140640",children:"What's Next?"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Langflow has gone through a big change, and we are excited to see how you use it and what you think of it. We plan to add more types of Input and Output like Image and Audio, and we also plan to add more Components to help you build more complex projects."}),"\n",(0,o.jsx)(n.p,{children:"We are excited to see the community embracing Langflow as their number one AI builder and eagerly wait to see what new inspiring projects will come out of this release! A big thanks to everyone who's supporting or being part of this community in any way. \u2728"}),"\n",(0,o.jsx)(n.p,{children:"Sincerely,"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"The Langflow Team \ud83d\ude80"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},9263:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/1143907392-3fba50c7e11bb8493db3a7060544e524.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(6540);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);