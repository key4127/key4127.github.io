// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'intro',
    {
      "CS61A": [
        "CS61A/01 Python Basic",
        "CS61A/02 Container",
        "CS61A/03 Iterator and Generator",
        "CS61A/04 Class and Linked List",
        "CS61A/05 Scheme",
        "CS61A/06 SQL",
      ]    
    },
    {
      "CS61B": [
        "CS61B/01 Java Basic",
        "CS61B/02 List and Array",
        "CS61B/03 Inheritance",
        "CS61B/04 Asymptotics",
        "CS61B/05 Disjoint Sets"
      ]
    },
    {
      "CSAPP and SJTU ICS": [
        "CSAPP and SJTU ICS/01 Bits",
        "CSAPP and SJTU ICS/02 Storage",
        "CSAPP and SJTU ICS/03 Basic Asm",
        "CSAPP and SJTU ICS/04 Jmp",
        "CSAPP and SJTU ICS/05 Function",
        "CSAPP and SJTU ICS/06 Array and Structure",
        "CSAPP and SJTU ICS/07 Buffer Overflow",
        "CSAPP and SJTU ICS/08 Execption",
        "CSAPP and SJTU ICS/09 Processes",
        "CSAPP and SJTU ICS/10 Signal",
        "CSAPP and SJTU ICS/11 IO",
        "CSAPP and SJTU ICS/12 Scheduling",
        "CSAPP and SJTU ICS/13 Floating Point"
      ]
    },
    {
      "SJTU CDM": [
        "SJTU CDM/01 Propositional Logic",
        "SJTU CDM/02 SAT Solver",
        "SJTU CDM/03 Deduction",
        "SJTU CDM/04 Predicate Logic",
        "SJTU CDM/05 SMT Solver",
        "SJTU CDM/06 Hoare Logic",
        "SJTU CDM/07 Set Theory I",
        "SJTU CDM/08 Set Theory II",
        "SJTU CDM/09 Binary Relation I",
        "SJTU CDM/10 Binary Relation II",
        "SJTU CDM/11 Function",
        "SJTU CDM/12 Turing Machine"
      ]
    },
    {
      "web.lab": [
        "web.lab/00 Introduction",
        "web.lab/02 HTML and CSS",
        "web.lab/03 w0 Catbook",
        "web.lab/04 Intro to JS",
        "web.lab/05 w1 Snake",
        "web.lab/06 Intro to React",
        "web.lab/07 JS Cont",
        "web.lab/08 Design",
        "web.lab/09 API and Promises",
        "web.lab/10 w2 Catbook in React"
      ]
    },
    {
      "Web Dev": [
        "Web Dev/01 React Basic",
        "Web Dev/02 React Cont",
        "Web Dev/03 Redux",
        "Web Dev/04 React Router",
        "Web Dev/06 Maven",
      ]
    },
    {
      "Unity Learn": [
        "Unity Learn/01 Intro to Unity"
      ]
    }
  ],
   
};

export default sidebars;
