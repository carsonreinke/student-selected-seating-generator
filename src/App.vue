<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
require("purecss");
</script>

<style>
@font-face {
  font-family: 'Capriola';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./assets/fonts/capriola-v7-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Capriola Regular'), local('Capriola-Regular'),
       url('./assets/fonts/capriola-v7-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/fonts/capriola-v7-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/capriola-v7-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('./assets/fonts/capriola-v7-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./assets/fonts/capriola-v7-latin-regular.svg#Capriola') format('svg'); /* Legacy iOS */
}

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

nav p {
  padding: 1em;
  margin: 0;
  border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
  font-size: 0.75em;
  color: rgba(0, 0, 0, 0.5);
}

nav h3 {
  padding: 1em;
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
    margin-left: 0;
    margin-top: 2em;
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
