class Footer extends HTMLElement {
    constructor(){
        super();
    }

 connectedCallback(){
     this.innerHTML = `
     <footer>
  <div style="background-color: black;width:100%;height:170px;">
      <div class="contact-info">
      <p style="font-size:20px; text-decoration:underline;">Car Works</p>
      <p class="contact">421 S. Dishman Mica Rd</p>
      <p class="contact">(509) 927-8440</p>
      <p class="contact"><em>carworksspokane@gmail.com</em></p>
      <a href="https://www.facebook.com/Car-Works-1540509986234813/" target="blank";><i class="fa fa-facebook-official fa-2x" aria-hidden="true" style="color:gray"></i></a>
     </div>
  </div>
</footer>
     `
 }
}

customElements.define('footer-component', Footer);