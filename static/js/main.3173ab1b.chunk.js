(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(18),c=a.n(s),r=(a(25),a(26),a(2)),o=a(9),l=a.n(o),h=a(5),d=a(0),j=function(e){return console.log(e),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"kilimanjaro",children:Object(d.jsxs)("div",{className:"text",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("h3",{children:Object(d.jsx)("span",{className:"highlighted",children:"Hey, I'm Bernard!"})}),"I am a Web developer, I really enjoy developing Apps using different Technologies, since my graduation at Metropolia University of applied science in Finland-Helsinki, I have been lucky enough to be involved in multiple IT projects, but this time, I am in a phase of my career where I want to be very close to the user and this is to why i pursue this phase of front-end development,apart from that i have been involved in back-end development to widen up my knowledge of web-development.Beyond the web-development I am currently enjoying web-designing.These are just some technologies I have been involved with so far:",Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"HTML / CSS"}),Object(d.jsx)("li",{children:"Javascript / ES6"}),Object(d.jsx)("li",{children:"Node.js/Express/MongoDB"}),Object(d.jsx)("li",{children:"Typescript/Flow-Type checking"}),Object(d.jsx)("li",{children:"React / Redux"}),Object(d.jsx)("li",{children:"Ruby / Ruby on Rails"}),Object(d.jsx)("li",{children:"MySQL"}),Object(d.jsx)("li",{children:"Flexbox / Bootstrap /Materialize CSS/Reactstrap"}),Object(d.jsx)("li",{children:"Sass"}),Object(d.jsx)("li",{children:"Linux OS"}),Object(d.jsx)("li",{children:"Git/Github/Heroku"}),Object(d.jsx)("li",{children:"Regular Expressions"})]}),Object(d.jsx)("h4",{children:"Check out what I have been up to:"})]}),Object(d.jsxs)("div",{className:"Links",children:[Object(d.jsx)(h.b,{to:"/about",children:Object(d.jsx)("button",{type:"button",className:"btn btn-primary",children:"ABOUT"})}),Object(d.jsx)(h.b,{to:"/projects",children:Object(d.jsx)("button",{type:"button",className:"btn btn-primary",children:"PROJECTS"})}),Object(d.jsx)(h.b,{to:"/contact",children:Object(d.jsx)("button",{type:"button",className:"btn btn-primary",children:"CONTACT"})})]})]})})})},b=a(8),p=a(17),u=a(10),m=a(11),x=a(13),O=a(12),f=function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={message:"",email:"",isSubmitDisabled:!0,touched:{email:!1,message:""}},e.handleBlur=function(t){var a=t.target.name;e.setState({touched:Object(p.a)(Object(p.a)({},e.state.touched),{},Object(b.a)({},a,!0))})},e.validate=function(t){var a={email:"",isSubmitDisabled:!0},n=0;return e.state.email&&/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(t)||(a.email=" Invalid Email address",n+=1),a.isSubmitDisabled=n>0,a},e.handleChange=function(t){t.preventDefault();var a=t.target,n=a.name,i="checkbox"===a.type?a.checked:a.value;e.setState(Object(b.a)({},n,i),(function(){this.canSubmit()}))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,i=a.message;alert("Your registration details:\n           Email: ".concat(n,"\n           Message: ").concat(i," ")),e.props.history.push("/"),e.setState({email:"",message:""})},e}return Object(m.a)(a,[{key:"canSubmit",value:function(){var e=this.state.email,t=this.validate(e).isSubmitDisabled;this.setState({isSubmitDisabled:t})}},{key:"render",value:function(){var e=this.state.email,t=this.validate(e);return console.log(t),Object(d.jsx)("div",{className:"form",children:Object(d.jsxs)("form",{action:"POST","data-netlify":"true",onSubmit:this.handleSubmit,children:[Object(d.jsx)("input",{type:"email",name:"email",value:this.state.email,placeholder:"Email",onChange:this.handleChange,onBlur:this.handleBlur}),Object(d.jsx)("br",{}),Object(d.jsx)("h6",{children:t.email}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Message : "}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{rows:"10",cols:"60",name:"message",value:this.state.message,placeholder:"please write your Message here!",onChange:this.handleChange}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:this.state.isSubmitDisabled?"disableSubmit":"submit",disabled:this.state.isSubmitDisabled,children:"Submit"}),Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("div",{"data-netlify-recaptcha":"true"})})]})})}}]),a}(i.a.Component),g=(a(36),function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"big-container",children:[Object(d.jsx)("h3",{children:"Code Projects"}),Object(d.jsxs)("div",{className:"projects-container",children:[Object(d.jsx)("div",{className:"project-11",children:Object(d.jsx)("h5",{children:Object(d.jsxs)("a",{className:"project-link",href:"https://presentationapp-client.herokuapp.com/presenters",children:[Object(d.jsx)("p",{children:"MERN Full-stack App powered by Bootsrap"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Presentation App"}),Object(d.jsx)("p",{children:"This is MERN(Mongodb,Express,Reactjs and NodeJs) full stack Application, user can Manage presenters by adding,editing and deleting presenters from the database and navigate through different pages using react-router.Please register to signIn so you can have more priveledge of viewing and operating more CRUD features.Be patient as It can take few seconds for the data to load from the server to the UI as the site is hosted in Heroku."})]})]})})}),Object(d.jsx)("div",{className:"project-1",children:Object(d.jsx)("h5",{children:Object(d.jsxs)("a",{className:"project-link",href:"https://benk1.github.io/WorldCountries/",children:[Object(d.jsx)("p",{children:"Reactjs App powered by MaterializeCSS"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"WorldCountries"}),Object(d.jsx)("p",{children:"This is an App created using ReactJs ,the data are fetched from country API and displayed accordingly,you can visualize Countries around the globe and view specific details about a specific country including their capital city, population of each country, name of a certain country plus their specific flag attached to each country. you can search each country by Country's name and sort them accordingly"})]})]})})}),Object(d.jsx)("div",{className:"project-4",children:Object(d.jsx)("h5",{children:Object(d.jsxs)("a",{className:"project-link",href:"https://dry-tor-13844.herokuapp.com/movies",children:[Object(d.jsx)("p",{children:"Reactjs and NodeJs App "}),Object(d.jsxs)("p",{children:["Movie Rental App",Object(d.jsx)("br",{}),"This is a MERN fUll-stack MovieRental Application, a user can View movies only, signed in users can add and edit movies,while admin can delete a movie. It is built using MongoDb,Express,React and NodeJs.Hosted in Heroku. Be patient it can take few seconds to load data from the server to the client."]})]})})}),Object(d.jsx)("div",{className:"project-2",children:Object(d.jsx)("h5",{children:Object(d.jsxs)("a",{className:"project-link",href:"https://counterapplication.netlify.app",children:[Object(d.jsx)("p",{children:"Reactjs App powered by Bootsrap"}),Object(d.jsx)("p",{children:"Counter-App"}),Object(d.jsx)("p",{children:"A Simple application but powerful application, its purpose is to teach and grasp how reacts work in all aspects.it is based on counter where you can increase or decrease counter while other functionalities are taking place in the process."})]})})}),Object(d.jsx)("div",{className:"project-5",children:Object(d.jsx)("h5",{children:Object(d.jsxs)("a",{className:"project-link",href:"https://benk1.github.io/CatAPI/",children:[Object(d.jsx)("p",{children:"Reactjs App "}),Object(d.jsxs)("p",{children:["CAT API",Object(d.jsx)("br",{}),"This is an Application where you can fetch data from Cat API, You can view and search where the cat is from originally and see all the important feature about that cat. Upon clicking the Name of the cat you can view cat image and more details about your favorite cat."]})]})})}),Object(d.jsx)("div",{className:"project-6",children:Object(d.jsx)("h5",{children:Object(d.jsxs)("a",{className:"project-link",href:"https://accountbalance.netlify.app",children:[Object(d.jsx)("p",{children:"Reactjs App"}),Object(d.jsxs)("p",{children:["AccountBalanceInReact",Object(d.jsx)("br",{}),"This is Account Balance Implemented using ReactJS, the User can add income or expenses and the program will calculate the balance and display all the transactions accordingly."]})]})})}),Object(d.jsx)("div",{className:"project-7",children:Object(d.jsx)("h5",{children:Object(d.jsxs)("a",{className:"project-link",href:"https://benk1.github.io/Gallery/",children:[Object(d.jsx)("p",{children:"Javascript App "}),Object(d.jsxs)("p",{children:["Gallery",Object(d.jsx)("br",{}),"This is the Gallery integrify stuff, implemented using HTML, CSS and JAVASCRIPT. The Gallery is in slide show form where you can click next arrow or next button to view next or previous photo, you can view the details of a selected photo by clicking details button."]})]})})}),Object(d.jsx)("div",{className:"project-8",children:Object(d.jsx)("h5",{children:Object(d.jsxs)("a",{className:"project-link",href:"https://github.com/benk1/rails_tutorial",children:[Object(d.jsx)("p",{children:"Rails App "}),Object(d.jsx)("p",{children:" Rails_Tutorial"}),Object(d.jsx)("p",{children:"Ruby on Rails tutorial application"})]})})}),Object(d.jsx)("div",{className:"project-9",children:Object(d.jsx)("h5",{children:Object(d.jsxs)("a",{className:"project-link",href:"https://array-of-countries.netlify.app",children:[Object(d.jsx)("p",{children:"Reactjs App "}),Object(d.jsxs)("p",{children:[" ","ArrayOfCountriesInReact",Object(d.jsx)("br",{}),"This is the project where we are able to search any country in the World from a given array, it is implemented using ReactJs. There are two buttons where you can choose to search either by Start With or include buttons."]})]})})}),Object(d.jsx)("div",{className:"project-10",children:Object(d.jsx)("h5",{children:Object(d.jsxs)("a",{className:"project-link",href:"https://benk1.github.io/tableAssignment/",children:[Object(d.jsx)("p",{children:"Javascript App "}),Object(d.jsxs)("p",{children:["TableGenerator",Object(d.jsx)("br",{}),"This is a project where we can build any HTML Table with given inputs, the app is implemented using vanilla javascript."]})]})})})]})]})}}]),a}(n.Component)),y=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"About Me!"}),Object(d.jsx)("div",{className:"circularPhoto"}),Object(d.jsx)("h3",{children:"Welcome To My Code Life Story"}),Object(d.jsxs)("div",{className:"about",children:[Object(d.jsxs)("p",{children:["I am obsessed with making things happen, in matter of fact I am more interested on making things better.In my Software development career, I started the development based on programming with Ruby Language and developed further with Ruby on Rails framework, now looking for a role as a front-end or full-stack developer. I participated in different projects as a trainee at Sibesonke Ltd based in Espoo city in Finland, where I trained and work as a software developer using Ruby and Ruby on Rails. I had a great time working on different software development methodologies including functional and unit testing on the process. I was lucky enough to work with another company called Integrify Oy located in the heart of Helsinki capital city Of Finland, where I built most of my projects and developed myself as a person and as a full web-developer, for more about what projects I have been building,please click the links below and check it out"," ",Object(d.jsx)("a",{className:"about",href:"https://github.com/benk1/",children:"here"})," ","."]}),Object(d.jsxs)("p",{children:["I have good communication skills and adaptability to different working environments. I am team player,highly driven motivated person, hardworking, quick to learn with a positive attitude under pressure. This is one of the reason which makes me who i am today. At the moment i am specializing in front-end development at Integrify oy where I am more working with HTML5, CSS, JAVASCRIPT, ReactJS/Redux,NodeJs and many more web-technologies. I have good knowledge of using GIT(version control system),Mysql,MongoDB databases, good with Regular expressions, experienced with multiple editors e.g Visual studio code as one of my favourite at the moment, sublime, Atom and many more. As a graduate with a bachelor of engineering In Information Technology, I am able and flexible to do any IT-related job apart from specialized one above. My experience have taught me how to work with different tools and be able to adapt to new working environments."," "]}),Object(d.jsx)("p",{children:"I have team work experience with different projects. I get along with different kinds of people and I am eager to learn new things to challenge myself. I am also interested in learning foreign languages, in this way building my understanding and experience of other cultures and communities. Currently I am excellent in Finnish language as i have been living in Finland for some time now, apart from that I am fluent in written and spoken English ."}),Object(d.jsx)("p",{children:"At my spare time, i like to take care of myself healthywise by doing different kind pf sports activities, one of my favourite sport is playing football as Americans call it soccer, couple of days in a week I like to go to the gym to maintain my fitness. During summer time you will always find me doing some evening jogging and long walks around the parks and enjoying the nature as it is beautiful out there."})]})]})};var v=function(){return Object(d.jsx)("nav",{className:"header",children:Object(d.jsxs)("ul",{className:"headerStyle",children:[Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:"/",style:{textDecoration:"none"},className:"linkStyle",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:"/about",style:{textDecoration:"none"},className:"linkStyle",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:"/projects",style:{textDecoration:"none"},className:"linkStyle",children:"Projects"})}),Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:"/contact",style:{textDecoration:"none"},className:"linkStyle",children:"Contact"})})]})})};var w=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsxs)("a",{className:"nav-link",href:"https://github.com/benk1",children:[Object(d.jsx)("i",{className:"fa fa-github btn btn-dark btn-sm fa-2x"}),Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(d.jsxs)("a",{className:"nav-link",href:"https://www.linkedin.com/in/bernard-k-ba2003173/",children:[Object(d.jsx)("i",{className:"fa fa-linkedin btn btn-dark btn-sm fa-2x"}),Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})]})})};a(37);var k=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(r.Switch,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:j}),Object(d.jsx)(l.a,{path:"/about",component:y}),Object(d.jsx)(l.a,{path:"/contact",component:f}),Object(d.jsx)(l.a,{path:"/projects",component:g})]})}),Object(d.jsx)(w,{})]})};c.a.render(Object(d.jsx)(h.a,{basename:"/portfolioInReact",children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.3173ab1b.chunk.js.map