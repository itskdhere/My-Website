import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <header>
        <!-- <img src="logo.png" class="logo" /> -->
        <h1>I T S K D H E R E</h1>
        <div class="navbar-below-content">
          <div class="scroll">
            <p class="line-1 anim-typewriter1">
              Hello There :)
            </p>
            <p class="line-2 anim-typewriter2">
              I'm Krishnendu Das
            </p>
          </div>
          <div class="below-box">
            <p class="line-3">
              Connect me on:
            </p>
          </div>
    
          <div class="links">
            <a href="#" style="color: rgb(200,10,200)" class="button" title="Instagram"> <i
                class="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com/itskdhere" class="button" style="color:Dodgerblue" title="Twitter"> <i
                class="fa-brands fa-twitter"></i></a>
            <a href="https://github.com/itskdhere" style="color: black" class="button" title="">
              <i class="fa-brands fa-github"></i></a>
            <a href="https://www.reddit.com/u/itskdhere" style="color: red" class="button" title="Github"> <i
                class="fa-brands fa-reddit"></i></a>
            <a href="https://discord.gg/9CDh4Qh6vz" style="color: blue" class="button" title="Discord">
              <i class="fa-brands fa-discord"></i></a>
          </div>
        </div>
      </header>
    
      <main>
        <h3>Hi, I'm <b>KD</b></h3>
        <p>
          a 18 years old, a student, a developer, a designer, a gamer, a <b>dreamer</b> and a <b>thinker</b>.
        </p>
        <p>
          😴
        </p>
    
        <h3>About Me:</h3>
    
        <p>
          Hehe
        </p>
    
      </main>
        `;
    }
}