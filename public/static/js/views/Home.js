import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    return `
        <header>

        <h1 style="font-family: 'Open Sans'; font-size: 35px" class="logo"><b>I T S K D H E R E</b></h1>
        
        <div class="navbar-below-content">
          <div class="below-box">
            <p class="line-3">
            <b>Connect me on:</b>
            </p>
          </div>
    
          <div class="links">
            <a href="https://twitter.com/itskdhere" class="button" style="color:Dodgerblue" title="Twitter"> <i
                class="fa-brands fa-twitter"></i></a>
            <a href="https://github.com/itskdhere" style="color: black" class="button" title="Github">
              <i class="fa-brands fa-github"></i></a>
            <a href="https://www.reddit.com/u/itskdhere" style="color: red" class="button" title="Reddit"> <i
                class="fa-brands fa-reddit"></i></a>
            <a href="https://discord.gg/9CDh4Qh6vz" style="color: blue" class="button" title="Discord">
              <i class="fa-brands fa-discord"></i></a>
          </div>
        </div>
      </header>
    
      <main>
        <h3>Hello there 👋</h3>
        <p>
            <b>
              I'm KD, 1st year B.Tech CSE student && Full-Stack Web Developer from West Bengal, India.
            </b>
          </p>
        <br>

        <h3><u>Technologies I use:</u></h3>
        <div>
        <ul style="list-style-type: circle;">
            <li style="list-style-type: none;"><b>Languages:</b></li>
            <li>C && C++ ;</li>
            <li>&lt;/HTML&gt; and .CSS{ }</li>
            <li>JavaScript && TypeScript ;</li>
            <li>SQL ;</li>
        </ul>
        <br>
        <ul style="list-style-type: circle;">
            <li style="list-style-type: none;"><b>Misc.:</b></li>
            <li>Node.js</li>
            <li>Docker</li>
            <li>NGINX</li>
            <li>Git & GitHub</li>
            <li>Linux: Ubuntu, Debian, Alpine</li>
        </ul>
        <br>
        <ul style="list-style-type: circle;">
            <li style="list-style-type: none;"><b>Frameworks:</b></li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Discord.js</li>
            <li>Arduino</li>
        </ul>
        <br>
        <ul style="list-style-type: circle;">
            <li style="list-style-type: none;"><b>Cloud:</b></li>
            <li>Azure, GCP</li>
            <li>Netlify, Cloudflare</li>
            <li>FireBase, SupaBase, PocketBase</li>
            <li>Arduino IoT Cloud , Blynk IoT Cloud</li>
        </ul>
        <br>
        <ul style="list-style-type: circle;">
            <li style="list-style-type: none;"><b>Databases:</b></li>
            <li>FireStore</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>MySQL</li>
        </ul>
        <br>
        <ul style="list-style-type: circle;">
            <li style="list-style-type: none;"><b>Microcontrollers:</b></li>
            <li>ATMega328p</li>
            <li>ESP8266 & ESP32</li>
        </ul>
        <br>
        </div>
    </main>
        `;
  }
}
