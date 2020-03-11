<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
require('purecss');
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Capriola&display=swap');

html {
  font-family: "Capriola", sans-serif;
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
  background-color: rgba(0, 0, 0, 0.05);
  overflow: auto;
}

nav ul li.pure-menu-item {
  font-size: 0.8em;
}

nav ul li.pure-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

nav ul li.pure-menu-item.pure-menu-link {
  white-space: normal;
  word-break: break-all;
  cursor: pointer;

  color: #000000;
}

nav ul li.pure-menu-item > img {
  display: inline-block;
  vertical-align: middle;
}

nav ul li.pure-menu-item:hover > img {
  filter: invert(1);
}

nav h3 {
  padding: 1em 1em;
  margin: 0;

  font-size: 1em;
  font-weight: normal;
  border-top: 1px rgba(0, 0, 0, 0.1) solid;
  color: rgba(0, 0, 0, 0.5);
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
