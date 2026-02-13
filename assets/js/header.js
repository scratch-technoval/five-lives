header = `
<header class="site-header">
  <div class="header-inner">
    <div class="logo"><img src="./assets/favicon.ico" height="16" style="background-color: white; border-radius: 100%;" /> <a href="./index.html">five_lives</a></div>
    <nav class="nav">
      <a href="./SSSS.html" role="menuitem">Encodage SSSS</a>
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
