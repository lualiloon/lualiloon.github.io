---
layout: first-post
---

<script>
function removeStyleSheet(sheet) {
  sheet.ownerNode.parentNode.removeChild(sheet.ownerNode);
}

function removeAllSheets() {
  while (document.styleSheets.length > 0) {
    removeStyleSheet(document.styleSheets[0]);
  }
}

function addStyleSheet(sheet) {
  var link = document.createElement('link');
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = sheet;
  document.head.appendChild(link);
}

function swapStyleSheets(newSheet) {
  removeAllSheets();
  addStyleSheet(newSheet);
  addStyleSheet("/assets/css/first-post-styles.css");  
}

function resetDefaultStyles() {
  swapStyleSheets("https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css");
  addStyleSheet("/assets/css/styles.css");
}
</script>

**May 31, 2023**

## Project #1: Make a website

Welcome to my monthly post! Each month I share a small project I've been working on, along with a blog post diving into the process behind its creation.

For this first project, I decided to create the website you are currently reading. I needed a place to host all the projects that will come out of this monthly adventure.

### About This Website

I created the website itself a few months back. It was meant to host all my old experiments and abandoned projects, but I got distracted by shiny new ideas and work stopped on the site. There wasn't much here at that point, just some basic styling and a few sentences on an "About" page.

This month I picked it back up, dusted it off, and gave it a new purpose for this monthly undertaking. I refamiliarized myself with the existing site, then restructured it for its new purpose. The site's original intent is still here, in [its own section](/crypt.html). I added functionality for the new site, updated  the layout, and redesigned the visual elements.

### The Tech

This website is built with [Jekyll](https://jekyllrb.com/). This is my first time using it; I needed a simple, flexible tool to create a basic website, while keeping the code clean and readable. Jekyll does everything I need, and my experince with it so far has been fabulous.

The visual elements are straight CSS, plus some [Pure.css](https://purecss.io/) to make it more mobile-friendly. I also used [ChatGPT](https://chat.openai.com/) to help  with the styling. It was great at giving me some styles as a starting point, as well as a general collaberative partner, giving suggestions and fixing issues.

## Fun with CSS

The site went through a lot of iteration on the visual front. Here are some of the highlights:

(Click the buttons to see this page in different styles. "Back to Default" buttons reset the styling, as does reloading the page.)

### Original Site

<button onclick="swapStyleSheets('/assets/css/old_CSS/original.css')">Original Site</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

This is what the website looked like originally, before I started work  on it this month

### First attempts with ChatGPT

<button onclick="swapStyleSheets('/assets/css/old_CSS/v2.css')">First try</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Can you even read this? Definitely worse than the original. Try hovering over the navigation bar links at the top; it's the only color on the page.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v3.css')">It's Readable Now</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Simple, readable, boring. The nav bar links pulse a little when you hover over them.

At this point I tried getting ChatGPT to make it more colorful, but it kept giving me variations of the previous attempts. Time for a new approach.

### Maybe some color?

I want something colorful, let's see if ChatGPT will oblige.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v4.css')">Joyride #1</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Not exactly what I had in mind, but there's *some* color now. Need to fix those margins.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v6.css')">More Fun?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Basically the same design in different colors, and illegible. The margins are still a problem.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v7.css')">A little better</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

We got some color, and it's readable again; The margins and nav bar still need work, and the page heading is too small.

### Experiments

I know I want colorful, but don't have a clear vision beyond that. ChatGPT experiments!

<button onclick="swapStyleSheets('/assets/css/old_CSS/v8.css')">Colorful...?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Okay, there are colors. Not the right colors, but something at least. It still manages to look pretty bland.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v9.css')">Grunge?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Well that's different. Still need to sort out those margins. Let's try something else.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v10.css')">Overgrown ruins?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Nope.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v11.css')">Pixies?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Headings are still too faded to read clearly. Let's keep going.

### Colorful AND Legible

<button onclick="swapStyleSheets('/assets/css/old_CSS/v12.css')">Legible</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

I guess removing the color *does* make it more legible. Can't I have both?

<button onclick="swapStyleSheets('/assets/css/old_CSS/v13.css')">Colorful</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

The horrible font is back. At least we have properly contrasting colors.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v14.css')">Both?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Now we're getting somewhere. Still needs some tuning, but much better.

### Nav Bar Antics

<button onclick="swapStyleSheets('/assets/css/old_CSS/v15.css')">More nav bar</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

That nav bar isn't pretty, but it's certainly well defined.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v16.css')">Less nav bar</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Too far in the opposite direction. Check out the funky nav bar link mouseover underlining.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v18.css')">Um...</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

I think ChatGPT ran out of memory. It's an interesting change, sort of elegant. The nav bar is excellent, check out that mouse over effect!

### All together now

Let's try pulling together everything good from the previous versions

<button onclick="swapStyleSheets('/assets/css/old_CSS/v21.css')">Getting closer</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Almost there.

<button onclick="resetDefaultStyles()">Final version</button>

With some spacing adjustments, minor color improvements, better layout for mobile, it's finally coming together. Depending on how far into the future you're reading this, the website styling may have changed quite a bit more. This is where I wrapped up the project for this first month.

## Reflections

My only goal at the start of the month was to have the website up, functional, and presentable. I didn't realize that this first project was about more than a website. It was about getting everything set up and ready for all the projects that will get built in this endeavor. I already have a larger game project I'm working on, and I need to keep my personal life *mostly* functional, so this month was about figuring out routines in my daily life to make all three sustainable. Building these sorts of structures is not trivial, and it has truly taken the full month to even start to get them down. This is all a work in progress, and the processes will be refined and change over time, but getting at least something in place was a challenge.

Writing this blogpost also took longer than expected. It's been a long time since I've written anything, and I frankly forgot how much time goes into all the tasks *around* writing--you can't just sit down and write and BAM it's done. A lot of work goes into things like stucturing the post, figuring out how each part should flow into the next, sorting out what to keep from what to cut. All these things take time, and as someone who is not a writer, they took a *lot* of time. I'm hoping that as I post more regularly it will get easier, or at least faster.

In the last few days of the month it became clear that project management is going to be crucial for getting these projects done. I have always struggled with management skills, and it will be one of the most difficult aspects of these monthly projects. But it's a skill I need to learn, not just for these small experiments but for any project I undertake. I completely ignored it this past month, but will focus on it more moving forward.

## Future Projects

I have no idea what I'll be working on next month. Keeping a list of potential project ideas as they occur will be helpful in the future, but for now you'll just have to come back next month to find out what's brewing.

That's all for now. Stay inspired, and keep chasing the wonders that make life truly extraordinary. Until next time!
