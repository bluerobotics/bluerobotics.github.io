---
layout: default
title: Markdown Examples
order: 0
permalink: /example/
nav:
- Introduction: introduction
- - Sub Menu: sub-menu-example
- Examples: examples
- - Headings: headings
- - Tables: tables
- - Code: code
---

#Introduction

This page shows examples of the markdown text that can be used in this documentation.

##Sub Menu Example

This heading is shown as a submenu on the navbar.

~~~~~~ yaml
- Introduction: introduction
- - Sub Menu: sub-menu-example
- Examples: examples
- - Headings: headings
- - Tables: tables
- - Code: code
~~~~~~~

#Examples

##Headings

~~~~~~ markdown
#h1 heading
##h2 heading
###h3 heading
####h4 heading
#####h5 heading
~~~~~~~~

#h1 heading

##h2 heading

###h3 heading

####h4 heading

#####h5 heading

##Tables

~~~~~~ markdown
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
~~~~~~~~~

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

##Code

~~~~~~~~ markdown
~~~~~~ javascript
var example = i;
i++;
console.log(i);
~~~~~~~
~~~~~~~~~~

~~~~~~ javascript
var example = i;
i++;
console.log(i);
~~~~~~~