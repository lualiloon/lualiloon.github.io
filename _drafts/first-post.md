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

### First attempt with ChatGPT

<button onclick="swapStyleSheets('/assets/css/old_CSS/v2.css')">ChatGPT attempt</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

This is my first attempt with ChatGPT. Definitely worse than the original. The prompt was "create the css for a personal website hosting game design experiments. It should be creative and quirky." It's barely readable, and boring to look at. Try mousing over the nav bar links at the top, it's the only color on the page.

### Prioritize Readability

<button onclick="swapStyleSheets('/assets/css/old_CSS/v3.css')">It's Readable Now</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

This time I told ChatGPT I wanted it to be "eye catching, creative, with a little whimsy", and I was sure to specify "Prioritize readability". Not much different than the previous try, but at least you can read it.

Again, mouse over the links in the nav bar at the top: now they have a little pulsing animation. Miles better than the previous attempt, but still very bland.

At this point I told ChatGPT to "make it more colorful", and it gave me almost the exact same output as the last version; the only difference being the background was now a slightly different shade of white. This tactic wasn't working, so next I tried something slightly different.

### Another try

It seemed like ChatGPT was getting stuck on its previous suggestions, so I started a new chat. I was sure I wanted something different, but didn't have a clear vision of what that was. So I found a list of [aesthetics](https://aesthetics.fandom.com/wiki/List_of_Aesthetics) used a random number generator to choose one (Joyride), and fed that to ChatGPT, along with a little more context. "Create the CSS for a personal blog discussing game design and personal projects, using the joyride aesthetic. Prioritize readability."

<button onclick="swapStyleSheets('/assets/css/old_CSS/v4.css')">Joyride #1</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

(Scroll to the top to see the real difference)

Not exactly what I was going for, but at least there's *some* color. The margins need to be fixed.

### "Make it more fun"

<button onclick="swapStyleSheets('/assets/css/old_CSS/v6.css')">More Fun?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

(Again, scroll to the top to see the difference)

Basically the same in a different color and illegible. The margins still need to be fixed.

After this attempt, ChatGPT kept trying to output too much css that kept getting cut off. I tried telling it to continue but it would always try to start from the top and get cut off. Time for a new chat.

### Reset #3

This time I tried inputting the previous CSS, and told ChatGPT to keep it colorful, but make it sleeker and more modern

<button onclick="swapStyleSheets('/assets/css/old_CSS/v7.css')">A little better</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

(Again, scroll to the top)

Now there's some color and it's readable again, but the margins still need work, the heading is not prominent enough, and the nav bar's not great either.

### Yet another reset

I tried reseting the chat again, incorperating everything I had learned thus far. "Make it colorful and creative. Prioritize legibility."

<button onclick="swapStyleSheets('/assets/css/old_CSS/v8.css')">Colorful...?</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

There are colors, but it looks incredibly bland. And the nav bar isn't distinct enough from the rest of the page

### Grunge?

I tried going in a completely different direction: "Make it grunge."

<button onclick="swapStyleSheets('/assets/css/old_CSS/v9.css')">Maybe grunge</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Well that's different. I still don't like the color combination, but at least it looks interesting now. Side margins and nav bar still need work.

### Ruins

Next I tried "the colors of ruins overrrun with plant life".

<button onclick="swapStyleSheets('/assets/css/old_CSS/v10.css')">Ruins</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Decidedly worse that the previous version. It has all the same issues, plus the colors blend together too much, making some of the headings almost disappear.

### Let's add pixies to the mix

"Evoke a pixie clan living amongst overgrown ruins."

<button onclick="swapStyleSheets('/assets/css/old_CSS/v11.css')">Pixies</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

A tiny bit better than "ruins", but not much.

### Back to legible

<button onclick="swapStyleSheets('/assets/css/old_CSS/v12.css')">Back to boring</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

I guess removing the color *does* make it more legible. Can't I have both?

### Joyride returns

<button onclick="swapStyleSheets('/assets/css/old_CSS/v13.css')">Joyride take 2</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

The horrible font is back. At least we have properly contrasting colors again.

### Joyride but legible

<button onclick="swapStyleSheets('/assets/css/old_CSS/v14.css')">Legible Joyride</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Now we're getting somewhere. Still needs some tweaking, but much better.

### Better nav bar

Time to focus on the nav bar

<button onclick="swapStyleSheets('/assets/css/old_CSS/v15.css')">More nav bar</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

The nav bar is clearly defined now. Ugly, but well defined. Maybe a little too well defined.

### Less prominent nav bar

<button onclick="swapStyleSheets('/assets/css/old_CSS/v16.css')">Less nav bar</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

Too far in the opposite direction. Check out that funky mouseover underlining though.

### Uh oh

<button onclick="swapStyleSheets('/assets/css/old_CSS/v18.css')">Um...</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

I think ChatGPT ran out of memory. It's an interesting change, sort of elegant. And I really like this new nav bar.

### All together now

Let's try pulling together everything good from the previous versions

<button onclick="swapStyleSheets('/assets/css/old_CSS/v21.css')">Getting closer</button>
<button onclick="resetDefaultStyles()">Back to Default</button>

### Finally

Adjust the spacing, minor color improvements, and make sure it looks right on mobile.

<button onclick="resetDefaultStyles()">Done</button>

## Reflections

My only goal at the start of the month was to have the website up, functional, and presentable. I didn't realize that this first project was about more than a website. It was about getting everything set up and ready for all the projects that will get built in this endeavor. I already have a larger game project I'm working on, and I need to keep my personal life *mostly* functional, so this month was about figuring out routines in my daily life to make all three sustainable. Building these sorts of structures is not trivial, and it has truly taken the full month to even start to get them down. This is all a work in progress, and the processes will be refined and change over time, but getting at least something in place was a challenge.

Writing this blogpost also took longer than expected. It's been a long time since I've written anything, and I frankly forgot how much time goes into all the tasks *around* writing--you can't just sit down and write and BAM it's done. A lot of work goes into things like stucturing the post, figuring out how each part shoudl flow into the next, sorting out what to keep from what to cut. All these things take time, and as someone who is not a writer, they took a *lot* of time. I'm hoping that as I post more regularly, they will get easier, or at least faster.

In the last few days of the month it became clear that project management was going to play a big role in getting these projects done. I really struggle with management skills in general, and I think this will be one of the most difficult aspects of the monthly projects. But it's a necessary skill to learn, not just for these small projects but for any project. I completely ignored it this past month, but will focus on it more moving forward.

## Future Projects

I honestly have no idea what I'll be working on next month. Keeping a list of potential project ideas as they occur will be helpful in the future, but for now you'll just have to come back next month to find out what's brewing.

That's all for now, may all your [not sure how to finish this]
