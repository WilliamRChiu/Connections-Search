## Inspiration

Have you ever connected with someone over a mutual interest? Our team set out to recreate that feeling for thousands of potential users; using an algorithm to identify common interests, and harnessing the LLM capabilities of Groq to synthesize and communicate this information to users.

## What it does

Common Ground is an easy-to-use social network graph visualization that allows you to discover your common interests with other people. You can see which mutual friends you have, which communities you are both a part of, and which groups you could join to achieve more common ground!

## How we built it

- Using D3.js to build responsive visualization of inter-user connections
- Collecting Twitter follower networking information and storing it with JSON
- Creating a React webpage with Vite and HTML/CSS
- Synthesizing follower data and calling a LLM with the Groq API, providing helpful user-friendly responses on both common and unique interests
- Connecting a MongoDB backend using Node.JS and Express

## Accomplishments that we're proud of

- Learning how to use Groq and Github
- Learned how to set up and run backends with frontends

## What's next for Common Ground

We look forward to scaling our systems and integrating automatic Twitter scraping, further enhancing the user experience!
