# README
[<img src="https://deploy.stdlib.com/static/images/deploy.svg?" width="192">](https://deploy.stdlib.com/)

This is the README for your project. It is intended to give details about
**internal implementation** of your code, either for your **teammates**
or for the purposes of **sharing**. It **will not** be displayed in your
[Standard Library](https://stdlib.com/) documentation.

You can include an **Deploy on Standard Library** button for GitHub,
as displayed above.

# How to Easily Scrape Websites for Data using Autocode

# Use Case

🏚Scrape real estate listings - businesses are using web scraping to gather listed properties
🔎Scrape products/product reviews from retailer or manufacturer websites to show in your site, provide specs/price comparison
📰Scrape news websites to apply custom analysis and curation (manual or automatic), provide better-targeted news to your audience
💌Gathering email addresses for lead generation

As a simple example - we'll scrape the front page of Hacker News to fetch the Titles and URLs of links. What you do with the data you scrape is totally up to you. You can aggregate data and perform custom analysis, store it in Airtable, GoogleSheets, or shoot it into Slack for your team to monitor. The possibilities are infinite.

# Table of Contents

1. [Installation](#installation)
1. [How It Works](#how-it-works)
1. [How to Query Using CSS Selectors](#how-to-query-using-css-selectors) 
1. [Test Your Workflow](#test-your-workflow)
1. [Making Changes](#making-changes)
   1. [via Web Browser](#via-web-browser)
   1. [via Command Line](#via-command-line)
1. [Support](#support)
1. [Acknowledgements](#acknowledgements)

# Installation

Select Open in Autocode Button:

[<img src="https://deploy.stdlib.com/static/images/deploy.svg?" width="192">](https://deploy.stdlib.com/)

You will be prompted to sign in or create a **free account**. If you have a Standard Library account click **Already Registered** and sign in using your Standard Library credentials.

Once you sign in, give your project a name and click **Start API Project from Github**.

![]()

Navigate through the `Functions folder` to `_main_.js` file. 

![]()

Next, select the gray **Edit Payload** button on the upper-right side of the screen to set parameters: `url` and `queries`.
Copy and Paste the following test parameters in the **Edit Payload** screen:

``` json
{
  "url": "https://news.ycombinator.com/",
  "queries": [
    [
      ".storylink",
      "text"
    ]
  ]
}
```
Click **Save Payload**:

![]()

Select the green "**Run**" button to test run your code.

![]()

Within seconds you should have a list of link titles from the front page of [Hacker News](https://news.ycombinator.com/).

# How It Works

The web scraper makes a simple GET request to a URL, and runs a series of queries on the resulting page and returns it to you. 
It uses cheerio DOM (Document Object Model) processor, enabling us to use CSS-selectors to grab data from the page. CSS
selectors are patterns used to select the element(s) you want to organize.

# How to Query Using CSS Selectors

Web pages are written in markup languages such as HTML An [HTML element](https://www.w3schools.com/Html/html_elements.asp]) is one component of an HTML document or web page. Elements define the way information is displayed to the human eye on the browser- information such as images, multimedia, text, style sheets, scripts etc.

For this example, we used the [".class" selector](https://www.w3schools.com/cssref/css_selectors.asp) (class = ".storylink" ) to fetch the titles of all hyperlinks from all elements in the front page of Hacker News.

If you are wondering how to find the names of the elements that make up a website - allow me to show you!
Fire up [Google Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=EAIaIQobChMI87WK1Iya3AIVh_hkCh1hMgIIEAAYASAAEgKilfD_BwE&gclsrc=aw.ds&dclid=CLuW3dWMmtwCFcq5ZAodXTwHBA) and type in our [Hacker News](https://news.ycombinator.com/) URL address https://news.ycombinator.com/. Then right-click on the title of any article and select "inspect." This will open the Web Console on Google Chrome. Or you can use **command key (⌘) + option key (⌥ ) + J key.**

![]()

The web-developer console will open to the right of your screen. Notice that when you selected the title of a link a section on the console is also highlighted. The highlighted element has "class" defined as "storylink." And now you know how to find the names of elements on any site!

![]()

If you want to query different metadata on Hacker News, hover your cursor over it. Below you can see how that I found the .class selector = "sitestr" to query a link's URL by hovering my mouse over that element on Hacker News.

![]()

Update your Test Parameters with the .class you want to retrieve and hit **Save Payload.**

![]()

Test Run your code again and you should see a list of URLs.

![]()

# Making Changes
# Support
# Acknowledgements
