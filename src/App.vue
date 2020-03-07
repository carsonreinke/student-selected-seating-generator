<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html {
  font-family: "Capriola", sans-serif !important;
}

html,
body {
  margin: 0;
  padding: 0;
}

nav {
  top: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  width: 200px;
  z-index: 1;

  color: #000000;
  background-color: #f1f1f1;
}

nav ul li.pure-menu-item:hover {
  background-color: #555555;
}

nav ul li.pure-menu-item.pure-menu-link {
  white-space: normal;
  word-break: break-all;
  cursor: pointer;

  color: #000000;
}

nav ul li.pure-menu-item.pure-menu-link:hover {
  color: #ffffff;
}

main {
  margin-left: 200px;
  padding: 1em;
}

/*nav {
  position: fixed;
  width: 3em;
  height: 100%;
  z-index: 1;

  background-color: gray;
}

main {
  margin-left: 3em;
}*/

@media print {
  @page {
    size: landscape;
    /*margin: 0;
      padding: 0;*/
  }

  nav {
    display: none !important;
  }

  main {
    margin-left: 0;
  }
}
</style>
