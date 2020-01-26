<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  nav {
    position: fixed;
    width: 3em;
    height: 100%;
    z-index: 1;

    background-color: gray;
  }

  main {
    margin-left: 3em;
  }

  @media print {
    @page {
      size: landscape;
      /*margin: 0;
      padding: 0;*/
    }

    nav {
      display: none;
    }

    main {
      margin-left: initial;
    }
  }
</style>
