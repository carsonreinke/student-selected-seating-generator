<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
require("purecss");
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Capriola&display=swap");

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
  background-color: #f2f2f2;
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
  z-index: 0;
}

.hamburger {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  background: #000000;
  background: rgba(0, 0, 0, 0.7);
  font-size: 10px;
  z-index: 1;
  width: 2em;
  height: auto;
  padding: 2.1em 1.6em;
}

.hamburger:hover,
.hamburger:focus {
  background: #000000;
}

.hamburger span {
  position: relative;
  display: block;
}

.hamburger span,
.hamburger span:before,
.hamburger span:after {
  background-color: #ffffff;
  width: 100%;
  height: 0.2em;
}

.hamburger span:before,
.hamburger span:after {
  position: absolute;
  margin-top: -0.6em;
  content: " ";
}

.hamburger span:after {
  margin-top: 0.6em;
}

@media (max-width: 768px) {
  nav {
    display: none;
  }

  main {
    margin-top: 2em;
    margin-left: 0;
  }

  .expanded .hamburger {
    left: 200px;
  }

  .expanded nav {
    display: block;
  }
}

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
