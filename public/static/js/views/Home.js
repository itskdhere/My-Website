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
        <h3>Hello there,</h3>
        <p><b>
                I'm KD, a 18 years old Student && Developer from West Bengal, India.
            </b></p>
        <br>

        <h3><u>My Tech Stack:</u></h3>
        <ul style="list-style-type: circle;">
            <li style="list-style-type: none;"><b>Languages:</b></li>
            <li>C && C++ ;</li>
            <li>HTML and .CSS{ }</li>
            <li>JavaScript ;</li>
            <li>SQL ;</li>
        </ul>
        <br>
        <ul style="list-style-type: circle;">
            <li style="list-style-type: none;"><b>Frameworks && Runtimes:</b></li>
            <li>Arduino</li>
            <li>Node.JS</li>
            <li>Qt</li>
        </ul>
        <br>
        <ul style="list-style-type: circle;">
            <li style="list-style-type: none;"><b>Others:</b></li>
            <li>ATMega328p , ESP8266 , ESP32</li>
            <li>Arduino IoT Cloud , Blynk IoT Cloud</li>
            <li>Internet of Things (IoT)</li>
            <li>Cloudflare , FireBase , GCP</li>
            <li>Docker & NGiNX</li>
            <li>Server Administration</li>
            <li>Home Automation</li>
        </ul>

    </main>
        `;
  }
}