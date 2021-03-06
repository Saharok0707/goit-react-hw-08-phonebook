"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[416],{8568:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a=t(6030),s={cardList:"Contacts_cardList__OnSBo",cardBox:"Contacts_cardBox__I0rM2",cardValues:"Contacts_cardValues__dLpEd",deleteButton:"Contacts_deleteButton__F3fET"},o=t(9387),r=t(2791),c=t(6871),i=t(9869),l=t(184);function u(){var e=(0,a.v9)(o.Jr),n=(0,a.I0)(),t=(0,c.s0)(),u=(0,a.v9)(i.M7);return(0,r.useEffect)((function(){if(!u)return t("/signIn")}),[u,t]),(0,r.useEffect)((function(){n((0,o.yF)())}),[n]),(0,l.jsx)("ul",{className:s.cardList,children:e.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,l.jsxs)("li",{className:s.cardBox,children:[(0,l.jsxs)("p",{className:s.cardValues,children:[a,": ",r]}),(0,l.jsx)("div",{className:s.buttonBox,children:(0,l.jsx)("button",{className:s.deleteButton,onClick:function(){return function(e){n((0,o._f)(e))}(t)},children:"Delete"})})]},t)}))})}var d=t(885),h=t(9126),m=t(9983),_={phonebookTitle:"Phonebook_phonebookTitle__juosK",inputBox:"Phonebook_inputBox__5SpBn",label:"Phonebook_label__Qzztg",input:"Phonebook_input__8yiEQ",buttonBox:"Phonebook_buttonBox__41P5C",addButton:"Phonebook_addButton__+oDOx"},b=t(5264);function x(){var e=(0,r.useState)(""),n=(0,d.Z)(e,2),t=n[0],s=n[1],c=(0,r.useState)(""),i=(0,d.Z)(c,2),u=i[0],x=i[1],p=(0,a.v9)(o.K2),f=(0,a.I0)(),j=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":s(a);break;case"number":x(a);break;default:return}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h2",{className:_.phonebookTitle,children:["Phonebook",(0,l.jsx)(m.Pd.Provider,{value:{color:"rgb(255, 69, 0)",size:"25px",style:{margin:"0 0 0 15px"}},children:(0,l.jsx)(h.b40,{})})]}),(0,l.jsxs)("form",{className:_.phonebookForm,onSubmit:function(e){if(e.preventDefault(),!p.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return b.Notify.success("".concat(t," is added in contacts")),f((0,o.el)({name:t,number:u})),x(""),void s("");b.Notify.warning("".concat(t," is already in contacts"))},children:[(0,l.jsxs)("div",{className:_.inputBox,children:[" ",(0,l.jsx)("label",{className:_.label,children:"Name"}),(0,l.jsx)("input",{className:_.input,value:t,onChange:j,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan and others",required:!0})]}),(0,l.jsxs)("div",{className:_.inputBox,children:[(0,l.jsx)("label",{className:_.label,children:"Phone"}),(0,l.jsx)("input",{className:_.input,value:u,onChange:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"The phone number must be numeric and may contain spaces, dashes, parentheses, and may begin with +",required:!0})]}),(0,l.jsx)("div",{className:_.buttonBox,children:(0,l.jsx)("button",{className:_.addButton,type:"submit",children:"Add contact"})})]})]})}var p="Filter_filterTitle__5SDqd",f="Filter_filterInput__1Cysk",j=t(8509);function v(){var e=(0,a.v9)(o.zK),n=(0,a.I0)();return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:p,children:"Find contacts by name"}),(0,l.jsx)("input",{className:f,type:"text",value:e,onChange:function(e){return n((0,j.X)(e.target.value))}})]})}function k(){return(0,l.jsxs)("section",{children:[(0,l.jsx)(x,{}),(0,l.jsx)(v,{}),(0,l.jsx)(u,{})]})}}}]);
//# sourceMappingURL=phonebook-page.0aa5169d.chunk.js.map