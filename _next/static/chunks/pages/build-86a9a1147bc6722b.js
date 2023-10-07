(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[881],{7272:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/build",function(){return n(6338)}])},6338:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a},default:function(){return p}});var i=n(4246),r=n(9304),o=n(2917),l=n(6282);n(6288);var t=n(1441),c={src:"/react-native-builder-bob//_next/static/media/react-native-builder-bob.f743a9da.svg",height:581,width:840,blurWidth:0,blurHeight:0};let a=[{depth:2,value:"Automatic configuration",id:"automatic-configuration"},{depth:2,value:"Manual configuration",id:"manual-configuration"},{depth:2,value:"Options",id:"options"},{depth:3,value:"source",id:"source"},{depth:3,value:"output",id:"output"},{depth:3,value:"exclude",id:"exclude"},{depth:3,value:"targets",id:"targets"},{depth:4,value:"commonjs",id:"commonjs"},{depth:4,value:"module",id:"module"},{depth:4,value:"typescript",id:"typescript"},{depth:2,value:"Commands",id:"commands"},{depth:3,value:"init",id:"init"},{depth:3,value:"build",id:"build"}];function d(e){let s=Object.assign({h1:"h1",p:"p",code:"code",a:"a",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre",span:"span",ol:"ol",h3:"h3",blockquote:"blockquote",h4:"h4",img:"img"},(0,t.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{children:"Build a React Native library"}),"\n",(0,i.jsxs)(s.p,{children:["When code is in non-standard syntaxes such as JSX, TypeScript etc, it needs to be compiled before it can run. Configuring this manually can be error-prone and annoying. ",(0,i.jsx)(s.code,{children:"react-native-builder-bob"})," aims to simplify this process by wrapping ",(0,i.jsx)(s.code,{children:"babel"})," and ",(0,i.jsx)(s.code,{children:"tsc"})," and taking care of the configuration. See ",(0,i.jsx)(s.a,{href:"./faq#why-should-i-compile-my-project-with-react-native-builder-bob",children:"this section"})," for a longer explanation."]}),"\n",(0,i.jsx)(s.p,{children:"Supported targets are:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Generic CommonJS build"}),"\n",(0,i.jsxs)(s.li,{children:["ES modules build for bundlers such as ",(0,i.jsx)(s.a,{href:"https://webpack.js.org",children:"webpack"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," definitions"]}),"\n",(0,i.jsx)(s.li,{children:"Flow definitions (copies .js files to .flow files)"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["If you created a project with ",(0,i.jsx)(s.a,{href:"./create",children:(0,i.jsx)(s.code,{children:"create-react-native-library"})}),", ",(0,i.jsx)(s.code,{children:"react-native-builder-bob"})," is ",(0,i.jsx)(s.strong,{children:"already pre-configured to build your project"}),". You don't need to configure it again."]}),"\n",(0,i.jsxs)(s.p,{children:["The following configuration steps are for projects not created with ",(0,i.jsx)(s.code,{children:"create-react-native-library"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"automatic-configuration",children:"Automatic configuration"}),"\n",(0,i.jsxs)(s.p,{children:["To automatically configure your project to use ",(0,i.jsx)(s.code,{children:"react-native-builder-bob"}),", open a Terminal and run:"]}),"\n",(0,i.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"js","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"npx react"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"native"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"builder"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"bob@latest init"})]})})}),"\n",(0,i.jsx)(s.p,{children:"This will ask you a few questions and add the required configuration and scripts for building the code. The code will be compiled automatically when the package is published."}),"\n",(0,i.jsxs)(s.p,{children:["You can find details on what exactly it adds in the ",(0,i.jsx)(s.a,{href:"#manual-configuration",children:"Manual configuration"})," section."]}),"\n",(0,i.jsx)(s.h2,{id:"manual-configuration",children:"Manual configuration"}),"\n",(0,i.jsx)(s.p,{children:"To configure your project manually, follow these steps:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["First, install ",(0,i.jsx)(s.code,{children:"react-native-builder-bob"})," in your project. Open a Terminal in your project, and run:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{"data-language":"sh","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--dev"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react-native-builder-bob"})]})})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In your ",(0,i.jsx)(s.code,{children:"package.json"}),", specify the targets to build for:"]}),"\n",(0,i.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"react-native-builder-bob"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"source"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"src"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"output"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"lib"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"targets"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"commonjs"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"module"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"typescript"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,i.jsxs)(s.p,{children:["See the ",(0,i.jsx)(s.a,{href:"#options",children:"Options"})," section for more details."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Add ",(0,i.jsx)(s.code,{children:"bob"})," to your ",(0,i.jsx)(s.code,{children:"prepare"})," or ",(0,i.jsx)(s.code,{children:"prepack"})," step:"]}),"\n",(0,i.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"scripts"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"prepare"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"bob build"'})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,i.jsxs)(s.p,{children:["Note that there is a difference between ",(0,i.jsx)(s.code,{children:"prepare"})," and ",(0,i.jsx)(s.code,{children:"prepack"})," scripts:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"prepare"})," is run when the package is published, as well as when its is installed from a git URL. It may also run when dependencies are installed based on the package manager."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"prepack"})," only runs when the package is packed for publishing."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["If you are not sure which one to use, we recommend going with ",(0,i.jsx)(s.code,{children:"prepare"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Configure the appropriate entry points:"}),"\n",(0,i.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"main"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"lib/commonjs/index.js"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"module"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"lib/module/index.js"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"react-native"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"src/index.ts"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"types"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"lib/typescript/src/index.d.ts"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"source"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"src/index.ts"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"files"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": ["})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"lib"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"src"'})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"})})]})}),"\n",(0,i.jsx)(s.p,{children:"Here is what each of these fields mean:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"main"}),": The entry point for the commonjs build. This is used by Node - such as tests, SSR etc."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"module"}),": The entry point for the ES module build. This is used by bundlers such as webpack."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"react-native"}),": The entry point for the React Native apps. This is used by Metro. It's common to point to the source code here as it can make debugging easier."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"types"}),": The entry point for the TypeScript definitions. This is used by TypeScript to type check the code using your library."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"source"}),": The path to the source code. It is used by ",(0,i.jsx)(s.code,{children:"react-native-builder-bob"})," to detect the correct output files and provide better error messages."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"files"}),": The files to include in the package when publishing with ",(0,i.jsx)(s.code,{children:"npm"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Make sure to change specify correct files according to the targets you have enabled."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"NOTE"}),": If you're building TypeScript definition files, also make sure that the ",(0,i.jsx)(s.code,{children:"types"})," field points to a correct path. Depending on the project configuration, the path can be different for you than the example snippet (e.g. ",(0,i.jsx)(s.code,{children:"lib/typescript/index.d.ts"})," if you have only the ",(0,i.jsx)(s.code,{children:"src"})," directory and ",(0,i.jsx)(s.code,{children:"rootDir"})," is not set)."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Add the output directory to ",(0,i.jsx)(s.code,{children:".gitignore"})," and ",(0,i.jsx)(s.code,{children:".eslintignore"})]}),"\n",(0,i.jsx)(s.pre,{"data-language":"gitignore","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"gitignore","data-theme":"default",children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"# generated files by bob"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"lib/"})})]})}),"\n",(0,i.jsx)(s.p,{children:"This makes sure that you don't accidentally commit the generated files to git or get lint errors for them."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Add the output directory to ",(0,i.jsx)(s.code,{children:"jest.modulePathIgnorePatterns"})," if you use ",(0,i.jsx)(s.a,{href:"https://jestjs.io",children:"Jest"})]}),"\n",(0,i.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"json","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"modulePathIgnorePatterns"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": ["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"<rootDir>/lib/"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]})})}),"\n",(0,i.jsx)(s.p,{children:"This makes sure that Jest doesn't try to run the tests in the generated files."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"And we're done \uD83C\uDF89"}),"\n",(0,i.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(s.p,{children:["The options can be specified in the ",(0,i.jsx)(s.code,{children:"package.json"})," file under the ",(0,i.jsx)(s.code,{children:"react-native-builder-bob"})," property, or in a ",(0,i.jsx)(s.code,{children:"bob.config.js"})," file in your project directory."]}),"\n",(0,i.jsx)(s.h3,{id:"source",children:(0,i.jsx)(s.code,{children:"source"})}),"\n",(0,i.jsxs)(s.p,{children:["The name of the folder with the source code which should be compiled. The folder should include an ",(0,i.jsx)(s.code,{children:"index"})," file."]}),"\n",(0,i.jsx)(s.h3,{id:"output",children:(0,i.jsx)(s.code,{children:"output"})}),"\n",(0,i.jsx)(s.p,{children:"The name of the folder where the compiled files should be output to. It will contain separate folder for each target."}),"\n",(0,i.jsx)(s.h3,{id:"exclude",children:(0,i.jsx)(s.code,{children:"exclude"})}),"\n",(0,i.jsxs)(s.p,{children:["Glob pattern to be used while filtering the unnecessary files. Defaults to ",(0,i.jsx)(s.code,{children:"'**/{__tests__,__fixtures__,__mocks__}/**'"})," if not specified."]}),"\n",(0,i.jsx)(s.p,{children:"Example:"}),"\n",(0,i.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"exclude"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"ignore_me/**"'})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["This option only works with ",(0,i.jsx)(s.code,{children:"commonjs"})," and ",(0,i.jsx)(s.code,{children:"module"})," targets. To exclude files while building ",(0,i.jsx)(s.code,{children:"typescript"}),", please see ",(0,i.jsx)(s.a,{href:"https://www.typescriptlang.org/tsconfig#exclude",children:"the tsconfig exclude field"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"targets",children:(0,i.jsx)(s.code,{children:"targets"})}),"\n",(0,i.jsx)(s.p,{children:"Various targets to build for. The available targets are:"}),"\n",(0,i.jsx)(s.h4,{id:"commonjs",children:(0,i.jsx)(s.code,{children:"commonjs"})}),"\n",(0,i.jsx)(s.p,{children:"Enable compiling source files with Babel and use commonjs module system."}),"\n",(0,i.jsxs)(s.p,{children:["This is useful for running the code in Node (SSR, tests etc.). The output file should be referenced in the ",(0,i.jsx)(s.code,{children:"main"})," field of ",(0,i.jsx)(s.code,{children:"package.json"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["By default, the code is compiled to support last 2 versions of modern browsers. It also strips TypeScript and Flow annotations, and compiles JSX. You can customize the environments to compile for by using a ",(0,i.jsx)(s.a,{href:"https://github.com/browserslist/browserslist#config-file",children:"browserslist config"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"In addition, the following options are supported:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"configFile"})," & ",(0,i.jsx)(s.code,{children:"babelrc"})," (",(0,i.jsx)(s.code,{children:"boolean"}),"): To customize the babel config used, you can pass the ",(0,i.jsx)(s.a,{href:"https://babeljs.io/docs/en/options#configfile",children:(0,i.jsx)(s.code,{children:"configFile"})})," option as ",(0,i.jsx)(s.code,{children:"true"})," if you have a ",(0,i.jsx)(s.code,{children:"babel.config.js"})," or ",(0,i.jsx)(s.a,{href:"https://babeljs.io/docs/en/options#babelrc",children:(0,i.jsx)(s.code,{children:"babelrc"})})," option if you have a ",(0,i.jsx)(s.code,{children:".babelrc"}),". This may break the default configuration, so use these options only if you know what you're doing."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"copyFlow"})," (",(0,i.jsx)(s.code,{children:"boolean"}),"): If your source code is written in ",(0,i.jsx)(s.a,{href:"http://www.typescriptlang.org/",children:"Flow"}),", You can specify the ",(0,i.jsx)(s.code,{children:"copyFlow"})," option to copy the source files as ",(0,i.jsx)(s.code,{children:".js.flow"})," to the output folder. If the ",(0,i.jsx)(s.code,{children:"main"})," entry in ",(0,i.jsx)(s.code,{children:"package.json"})," points to the ",(0,i.jsx)(s.code,{children:"index"})," file in the output folder, the flow type checker will pick these files up to use for type definitions."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"sourceMaps"})," (",(0,i.jsx)(s.code,{children:"boolean"}),"): Sourcemaps are generated by default alongside the compiled files. You can disable them by setting the ",(0,i.jsx)(s.code,{children:"sourceMaps"})," option to ",(0,i.jsx)(s.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Example:"}),"\n",(0,i.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"json","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"commonjs"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"configFile"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"copyFlow"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }]"})]})})}),"\n",(0,i.jsx)(s.h4,{id:"module",children:(0,i.jsx)(s.code,{children:"module"})}),"\n",(0,i.jsxs)(s.p,{children:["Enable compiling source files with Babel and use ES module system. This is essentially same as the ",(0,i.jsx)(s.code,{children:"commonjs"})," target and accepts the same options, but leaves the ",(0,i.jsx)(s.code,{children:"import"}),"/",(0,i.jsx)(s.code,{children:"export"})," statements in your code."]}),"\n",(0,i.jsxs)(s.p,{children:["This is useful for bundlers which understand ES modules and can tree-shake. The output file should be referenced in the ",(0,i.jsx)(s.code,{children:"module"})," field of ",(0,i.jsx)(s.code,{children:"package.json"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Example:"}),"\n",(0,i.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"json","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"module"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"configFile"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }]"})]})})}),"\n",(0,i.jsx)(s.h4,{id:"typescript",children:(0,i.jsx)(s.code,{children:"typescript"})}),"\n",(0,i.jsxs)(s.p,{children:["Enable generating type definitions with ",(0,i.jsx)(s.code,{children:"tsc"})," if your source code is written in ",(0,i.jsx)(s.a,{href:"http://www.typescriptlang.org/",children:"TypeScript"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"The following options are supported:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"project"})," (",(0,i.jsx)(s.code,{children:"string"}),"): By default, the ",(0,i.jsx)(s.code,{children:"tsconfig.json"})," file in the root of your project is used to generate the type definitions. You can specify a path to a different config by using the ",(0,i.jsx)(s.code,{children:"project"})," option. This can be useful if you need to use different configs for development and production."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"tsc"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The path to the ",(0,i.jsx)(s.code,{children:"tsc"})," binary is automatically detected and defaults to the one installed in your project. You can use the ",(0,i.jsx)(s.code,{children:"tsc"})," option to specify a different path."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Example:"}),"\n",(0,i.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"json","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"typescript"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"project"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"tsconfig.build.json"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }]"})]})})}),"\n",(0,i.jsx)(s.h2,{id:"commands",children:"Commands"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"bob"})," CLI exposes the following commands:"]}),"\n",(0,i.jsx)(s.h3,{id:"init",children:(0,i.jsx)(s.code,{children:"init"})}),"\n",(0,i.jsxs)(s.p,{children:["This configures an existing project to use ",(0,i.jsx)(s.code,{children:"bob"})," by adding the required configuration and dependencies. This is usually run with ",(0,i.jsx)(s.code,{children:"npx"}),":"]}),"\n",(0,i.jsx)(s.pre,{"data-language":"sh","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react-native-builder-bob@latest"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"init"})]})})}),"\n",(0,i.jsx)(s.h3,{id:"build",children:(0,i.jsx)(s.code,{children:"build"})}),"\n",(0,i.jsxs)(s.p,{children:["This builds the project according to the configuration. This is usually run as part of the package's publishing flow, i.e. in the ",(0,i.jsx)(s.code,{children:"prepare"})," or ",(0,i.jsx)(s.code,{children:"prepack"})," scripts."]}),"\n",(0,i.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"scripts"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"prepare"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"bob build"'})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Demo",src:c})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/build.md",route:"/build",pageMap:[{kind:"Meta",data:{index:"Introduction",create:"Scaffold a library",build:"Build a library",faq:"FAQ"}},{kind:"MdxPage",name:"build",route:"/build"},{kind:"MdxPage",name:"create",route:"/create"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Build a React Native library",headings:a},pageNextRoute:"/build",nextraLayout:o.ZP,themeConfig:l.Z};var p=(0,r.j)(h)},6282:function(e,s,n){"use strict";var i=n(4246);n(7378),s.Z={primaryHue:30,logo:(0,i.jsx)("span",{style:{fontSize:"32px"},children:"\uD83D\uDC77‍♂️"}),project:{link:"https://github.com/callstack/react-native-builder-bob"},docsRepositoryBase:"https://github.com/callstack/react-native-builder-bob/tree/main/docs",head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:description",content:"Bob - Create and build React Native libraries with ease"})]}),footer:{text:(0,i.jsxs)("span",{children:["Copyright \xa9 ",new Date().getFullYear()," ",(0,i.jsx)("a",{href:"https://www.callstack.com/",target:"_blank",rel:"noreferrer",children:"Callstack Open Source"}),"."]})},useNextSeoProps:()=>({titleTemplate:"%s – Bob"})}}},function(e){e.O(0,[774,571,888,179],function(){return e(e.s=7272)}),_N_E=e.O()}]);