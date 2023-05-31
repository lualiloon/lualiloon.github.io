---
layout: first-post
styles1: "/assets/css/styles.css"
styles2: "/assets/css/alternative-styles.css"
styles3: "/assets/css/ai-colors.css"
styles4: "/assets/css/ai-colors-2.css"
styles5: "/assets/css/ai-styles.css"
swap1: "swapStyleSheets('/assets/css/styles.css')"
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

#### May 2023

## Project #1: Make a website

Welcome to the monthly post! Every month, I release a small project that I've been working on, along with a blog post expoloring the process of how it came to be.

This past month was the first project. I decided to create this website, the one you're reading right now. I needed a place to host all the future projects that result from this monthly undertaking.

### About This Website

The website itself predates this project by a few months. It was originally intended as a place to host all my old experiments and abandoned projects. Only the very basics got put up before I abandoned it for newer, shinier ideas. There wasn't much here, just some very basic styling and a few sentences on an "About" page.

I picked it back up this month, cleaned it up and repurposed it for this new monthly undertaking. I started by refamiliarizing myself with the existing site, then restructuring it for its new purpose. The site's original intent is still here, in [its own section](/crypt.html). I added functionality for the new site, and redesigned the layout and visual elements.

### The Tech

This site is built with [Jekyll](https://jekyllrb.com/). This is my first time using it; I was looking for a simple tool to build a simple website, while being flexible enough to accommodate my whims when inspiration hits. And most importantly, to keep the code behind the site simple and readable. Jekyll fits all the requirements, and my experience with it so far has been fabulous.

The visual elements are straight CSS, supplemented with [Pure.css](https://purecss.io/) to help make it more readable on mobile. I used [ChatGPT](https://chat.openai.com/) to help  with the styling. It was great at giving me some styles as a starting point, as well as a general collaberative partner, giving suggestions and fixing issues.

## Fun with CSS

The site went through a lot of iteration on the visual front. Here are some of the highlights:

(click the buttons to see this page in different styles. To return to the original styling, you can click any "Back to Default" button or just reload the page.)

### Original Site

<button onclick="swapStyleSheets('/assets/css/old_CSS/original.css')">Original Site</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

This is what the original website looked like, before work started on it this month

### First attempts with ChatGPT

<button onclick="swapStyleSheets('/assets/css/old_CSS/v2.css')">First try</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Can you even read this? Definitely worse than the original. Try mousing over the nav bar links at the top, it's the only color on the page.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v3.css')">It's Readable Now</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Not too different than the previous try. Still boring, but at least you can read it. Now the nav bar links pulse a little when you mouse over them.

At this point I tried getting ChatGPT to make it more colorful, but it kept giving me variations of the previous two attempts. Time for a new approach.

### Maybe some color?

I want something colorful, let's see if ChatGPT will oblige.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v4.css')">Joyride #1</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Not exactly what I was going for, but at least there's *some* color. The margins need to be fixed.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v6.css')">More Fun?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Basically the same in a different color and illegible. The margins are still a problem.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v7.css')">A little better</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

At least there's some color, and it's readable again; The margins still need work, the heading is not prominent enough, and the nav bar's not great either.

### Experiments

I know I want colorful but, don't have a clear vision beyond that. ChatGPT experiments!

<button onclick="swapStyleSheets('/assets/css/old_CSS/v8.css')">Colorful...?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Okay, there are colors. Not the right colors, but something at least. It still manages to look pretty bland.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v9.css')">Grunge?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Well that's different. Margins still need work. Let's try something else.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v10.css')">Overgrown ruins?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Nope.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v11.css')">Pixies?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Still too faded to read the headings clearly.

### Colorful AND Legible

<button onclick="swapStyleSheets('/assets/css/old_CSS/v12.css')">Legible</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

I guess removing the color *does* make it more legible. Can't I have both?

<button onclick="swapStyleSheets('/assets/css/old_CSS/v13.css')">Colorful</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

The horrible font is back. At least we have properly contrasting colors again.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v14.css')">Both?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Now we're getting somewhere. Still needs some tweaking, but much better.

### Nav Bar Antics

<button onclick="swapStyleSheets('/assets/css/old_CSS/v15.css')">More nav bar</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Ugly nav bar, but it's well defined. Maybe a little too well.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v16.css')">Less nav bar</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Too far in the opposite direction. Check out that funky mouseover underlining though.

<button onclick="swapStyleSheets('/assets/css/old_CSS/v18.css')">Um...</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

I think ChatGPT ran out of memory. It's an interesting change, sort of elegant. The nav bar is excellent, check out that mouse over effect.

### All together now

Let's try pulling together everything good from the previous versions

<button onclick="swapStyleSheets('/assets/css/old_CSS/v21.css')">Getting closer</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Almost there.

<button onclick="resetDefaultStyles()">Final version</button>

Spacing adjustments, minor color improvements, and now it looks right on mobile. Depending on when you are reading this, the website styling may have changed more, but this is where I ended the project for this first month.

## Reflections

My only goal at the start of the month was to have the website up, functional, and presentable. I didn't realize that this first project was about more than a website. It was about getting everything set up and ready for all the projects that will get built in this endeavor. I already have a larger game project I'm working on, and I need to keep my personal life *mostly* functional, so this month was about figuring out routines in my daily life to make all three sustainable. Building these sorts of structures is not trivial, and it has truly taken the full month to even start to get them down. This is all a work in progress, and the processes will be refined and change over time, but getting at least something in place was a challenge.

Writing this blogpost also took longer than expected. It's been a long time since I've written anything, and I frankly forgot how much time goes into all the tasks *around* writing--you can't just sit down and write and BAM it's done. A lot of work goes into things like stucturing the post, figuring out how each part shoudl flow into the next, sorting out what to keep from what to cut. All these things take time, and as someone who is not a writer, they took a *lot* of time. I'm hoping that as I post more regularly, they will get easier, or at least faster.

In the last few days of the month it became clear that project management was going to play a big role in getting these projects done. I really struggle with management skills in general, and I think this will be one of the most difficult aspects of the monthly projects. But it's a necessary skill to learn, not just for these small projects but for any project. I completely ignored it this past month, but will focus on it more moving forward.

## Future Projects

I honestly have no idea what I'll be working on next month. Keeping a list of potential project ideas as they occur will be helpful in the future, but for now you'll just have to come back next month to find out what's brewing.

That's all for now, may all your [not sure how to finish this]
