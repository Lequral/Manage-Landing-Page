<script lang="ts">
  import logo from "@assets/logo-header.svg";
  import hamburger from "@assets/icon-hamburger.svg";
  import close from "@assets/icon-close.svg";

  var hidden = true; //for the menu on mobile

  function menu() {
    hidden = !hidden;
    var imgButton: null | HTMLImageElement = document.querySelector("img.menu");

    if (imgButton != null) {
      if (hidden) {
        imgButton.src = hamburger;
        document.body.style.overflowY = "auto";
      } else {
        imgButton.src = close;
        document.body.style.overflowY = "hidden";
      }
    }
  }
</script>

<div class="curtain" class:mobile-hidden={hidden}></div>

<header class="container">
  <div id="logo">
    <img src={logo} alt="Manage Logo" />
  </div>

  <button class="hamburger" name="menu" on:click={menu}>
    <img class="menu" src={hamburger} alt="button menu" />
  </button>

  <menu class:mobile-hidden={hidden}>
    <li><a href="{base}/">Pricing</a></li>
    <li><a href="{base}/">Product</a></li>
    <li><a href="{base}/">About Us</a></li>
    <li><a href="{base}/">Careers</a></li>
    <li><a href="{base}/">Community</a></li>
  </menu>

  <button name="Get started" class="get-started">Get Started</button>
</header>


<style lang="scss">
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5rem;

    button.hamburger {
      background: none;
      border: none;
    }

    menu {
      list-style-type: none;
      display: flex;
      column-gap: 35px;

      a {
        text-decoration: none;
        color: var(--Dark-Blue);
        font-weight: 500;
      }

      a:hover {
        opacity: 0.4;
      }
    }
  }

  @media screen and (min-width: 1101px) {
    div.curtain {
      display: none;
    }

    button.hamburger {
      display: none;
    }

    menu {
      display: flex;
    }

    button.get-started {
      display: block;
    }
  }

  @media screen and (max-width: 1100px) {
    div.curtain {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
      z-index: 4;
    }
    .curtain:not(.mobile-hidden) {
      visibility: visible;
    }
    .curtain.mobile-hidden {
      visibility: hidden;
    }
    .container {
      padding-top: 2rem;
    }
    .container menu {
      position: absolute;
      flex-direction: column;
      left: 6vw;
      margin: 0;
      padding: 0;
      top: 7vh;
      z-index: 5;
      background-color: white;
      width: 88vw;
      height: 14rem;
      justify-content: space-between;
      padding: 3rem 0;
    }

    button.hamburger {
      display: block;
      z-index: 5;
    }

    menu.mobile-hidden {
      display: none !important;
    }

    button.get-started {
      display: none;
    }

    div#logo > img {
      position: relative;
      left: -15px;
      top: -2px;
      scale: 0.8;
    }

    a {
      font-weight: 600;
    }
  }
</style>
