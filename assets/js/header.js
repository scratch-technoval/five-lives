header = `
<header class="site-header">
  <div class="header-inner">
    <div class="logo"><img src="./assets/favicon.ico" height="16" style="background-color: white; border-radius: 100%;" /> <a href="./index.html">five_lives</a></div>
    <nav class="nav">
      <a id="importance1" href="./search.html">Rechercher</a>
      <a id="importance1" href="./newspaper.html">Journal</a>

      <div id="importance-2" class="dropdown">
        <a href="#" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Cryptage ▾</a>
        <div class="opener"></div>
        <div class="dropdown-menu" role="menu" aria-label="Cryptage menu">
          <a href="./SSSS.html" role="menuitem">Encodage SSSS</a>
          <a href="./morse.html" role="menuitem">Morse</a>
        </div>
      </div>
      <a id="importance-4" href="./edf-tempo.html">Couleur EDF Tempo</a>
      </div>
    </nav>
  </div>
</header>
`

footer = `
<footer class="site-footer">
  <div class="footer-inner">
    <span>© five_lives | Github | scratch-technoval/five_lives</span>
    <span class="muted">Expérimentations & outils</span>
  </div>
</footer>
`

document.getElementById("header").innerHTML = header
document.getElementById("footer").innerHTML = footer
