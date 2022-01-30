class Header extends HTMLElement
{
constructor() {
super();
}

connectedCallback() {
    this.innerHTML=`
        
    <nav class="navbar navbar-expand-lg navbar-light">
    <a href="index.html" class="navbar-brand logo"><img src="./images/carWorksLogo.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" style="color:white;background-color: white;"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav mr-auto mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" style="color:white;font-size:22px;font-family: 'Space Grotesk', sans-serif;" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"style="color:white;font-size:22px;font-family: 'Space Grotesk', sans-serif;" href="maintenance.html">Maintenance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style="color:white;font-size:22px;font-family: 'Space Grotesk', sans-serif;" href="repair.html">Repairs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style="color:white;font-size:22px;font-family: 'Space Grotesk', sans-serif;" href="contact.html">Contact</a>
      </li>
    </ul>
  </div>
</nav>`;
  }
}
customElements.define('header-component', Header);