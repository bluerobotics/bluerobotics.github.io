---
layout: default
title: Contribution Tutorial
order: 0
permalink: /jekyll-tutorial/
nav:
- Introduction: introduction
- Forking the Repository: forking-the-repository
- Cloning the Repository: cloning-the-repository
- Make Changes: make-changes
- View Changes: view-changes
- Committing and Pushing Changes: committing-and-pushing-changes
- Pull in New Changes: pull-in-new-changes
---

#Introduction

If you are interested in contributing to the Blue Robotics' documentation, you can following this tutorial to fork the repository, clone a copy to your computer, make and view changes, and push back to your fork.

#Forking the Repository

Visit the [main repository](https://github.com/bluerobotics/bluerobotics.github.io/) on our Github page and click "Fork" at the top right. This is create a copy of the repository in your Github account.

#Cloning the Repository

In order to work on the documentation, you'll need to create a copy on your own computer. You can either use the [Github Apps](#) or the command line:

~~~ bash
git clone https://github.com/your-account-name/bluerobotics.github.io.git
~~~~~~

#Make Changes

You can make changes to the documentation files in your favorite text editor. We use [Sublime 2](#).

#View Changes

To view the result of changes you've made, you can serve the file locally on your computer and view in a browser. First of all, you'll need [Jekyll](http://jekyllrb.com/docs/installation/) installed on your computer. Jekyll is used to process the text files and turn them into browser-readable HTML.

To launch Jekyll, enter the follow from inside the documentation directory:

~~~~ bash
jekyll serve
~~~~~~

Jekyll will reprocess the files anytime you change anything, so just leave this running. 

You can visit the locally served page at *[http://localhost:4000/](http://localhost:4000/)*.

#Committing and Pushing Changes

Once you are happy with your changes, you can commit them to the repository:

~~~~ bash
git commit -am "Comment about changes made."
~~~~~~

Commiting only affects the local repository on your computer. To push to the changes to Github and publish to the web:

~~~~ bash
git push
~~~~~~

#Pull in New Changes 

Since others may be working on the documentation and making their own changes, you will need to pull in the most recent changes occasionally. You can do this with:

~~~~ bash
git pull
~~~~~~