---
layout: post
title: "Project #3: Run It On Steam Deck (failed)"
excerpt_separator: <!--more-->
---

This month I wanted to take my [garden project]({% post_url 2023-06-30-garden-builder %}) from last month, build it as a standalone app, and get it running on Steam Deck. If I could get this working, it could be used a template for future projects, to get them packaged and running on different platforms.

I failed.

I underestimated the amount of time it would take, and overestimated the amount of time I had. This is a very common issue, and generally you can rescope the project and at least release something. That was not possible here. The approach I chose was fundumentally flawed, and by the time I realized that, I didn't have enough time to restart from scratch.

## The Journey

### Step 1: Get it running with Electron

I needed to turn the my web-based project into a standalone application. [Electron](https://www.electronjs.org/) seemed like a fairly straightforward way of doing this. My project is pretty simple, so I decided to try following the Electron [tutorial](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app), applying it to the existing project as I went.

I follow along the tutorial, setting up npm and adding the necessary files to my project. It's working well, until:

`npm run start`

```
ERROR: npm v9.5.1 is known not to run on Node.js v12.22.9. 
You'll need to upgrade to a newer Node.js version in order to use this version of npm. 
This version of npm supports the following node versions: `^14.17.0 || ^16.13.0 || >=18.0.0`. 
You can find the latest version at https://nodejs.org/.
```

Node.js needs to be upgraded to a newer version. I try all the reasonable ways of doing this, then some unreasonable ways. Finally discover [nvm](https://github.com/nvm-sh/nvm). 

Friendly note: if you need to upgrade Node.js, don't listen to the error message. Just use [nvm](https://github.com/nvm-sh/nvm).

With that resolved, I continued along with the Electron tutorial. My project is written in Clojurescript and not straight Javascript, so I had to play with some of the configurations to make it work. This took some time, but ultimately I got the project built and running with Electron.

### Step 2: Use Electron to package the project

I skipped ahead in the Electron tutorial, to the next section that was relevent to my project: [Packaging Your Application](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging). I got Electron Forge installed, and with a bit of trial and error my project was now packaged as a standalone application.

The application runs. Unfortunately, it just opens a blank window and gives an error that it can't find a file it apparently needs. This bug doesn't show up in the test envoronment, only once the project has been packaged. After a LOT of digging: it seems like one of the dependancy libraries is constructing a path for it's own dependancies, and that path is not correct in the packaged application environment.

Here is where the project stalled. This error alone took over a week to track down and figure out what was actually happening. Attempts to fix it were slow; it doesn't show up in test builds, so any attempted fix has to go through the full process of building, packaging, installing, and running the application to see if anything changed.

In the end, I had to accept that these issues were not going to be solved in the time I had. I did learn a lot this month--if nothing else, I definitely leveled up in Debugging. And I finally really understand why it's so important to learn new tools with a  "hello world" type project.

## The Real Problem

The real issue, fundumentally, was the approach I took. I thought that I could just use Electron on my existing project, and get it to work. I realize now that I'll probably need to start that work in my project, structuring it in a way that has Electron in mind from the beginning, and testing along the way to make sure it will continue to work.

I'd like to revisit this at some point. I now have a better idea of where I need to start, and everything I've learned this month will give me a step up.

That's all for now. Come back next month for something new!