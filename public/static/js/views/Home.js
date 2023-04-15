import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    return `
    <main class="container home">
    <div class="hero">
        <h1>
            <span class="line">Hello, I'm</span>
            <span class="line">itskdhere</span>
            <div class="line scroll">
                <div>I'm a</div>
                <div class="scroll-containter">
                    <div class="auto-scroll">
                        <div class="auto-scroll--item">Developer</div>
                        <div class="auto-scroll--item">Hecker</div>
                        <div class="auto-scroll--item">Programmer</div>
                    </div>
                </div>
            </div>
        </h1>
        <p class="subline">
            I'm a 18 year old developer from India. I love to code and make cool stuff.
        </p>
    </div>
    <div class="connect">
        <ul class="links">
            <li>
                <a href="https://twitter.com/itskdhere" target="_blank" class="button" title="Twitter"> <i
                        class="fa-brands fa-twitter"></i></a>
            </li>
            <li>
                <a href="https://github.com/itskdhere" target="_blank" class="button" title="Github">
                    <i class="fa-brands fa-github"></i></a>
            </li>
            <li>
                <a href="https://www.reddit.com/u/itskdhere" target="_blank" class="button" title="Reddit"> <i
                        class="fa-brands fa-reddit"></i></a>
            </li>
            <li>
                <a href="https://discord.gg/9CDh4Qh6vz" target="_blank" class="button" title="Discord"> <i
                        class="fa-brands fa-discord"></i></a>
            </li>
        </ul>
    </div>
</main>
        `;
  }
}