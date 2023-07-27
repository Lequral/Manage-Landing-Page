<script>
  import { base } from "$app/paths";

  import logoManager from "@assets/logo-footer.svg";

  import facebook from "@assets/icon-facebook.svg";
  import youtube from "@assets/icon-youtube.svg";
  import twitter from "@assets/icon-twitter.svg";
  import pinterest from "@assets/icon-pinterest.svg";
  import instagram from "@assets/icon-instagram.svg";

  var submitted = false;
</script>

<footer>
  <div class="container">
    <div class="logos">
      <img src={logoManager} alt="manager logo" />

      <div class="socials">
        <a href="{base}/"><img src={facebook} alt="facebook logo" /></a>
        <a href="{base}/"><img src={youtube} alt="youtube logo" /></a>
        <a href="{base}/"><img src={twitter} alt="twitter logo" /></a>
        <a href="{base}/"><img src={pinterest} alt="pinterest logo" /></a>
        <a href="{base}/"><img src={instagram} alt="instagram logo" /></a>
      </div>
    </div>

    <div class="links">
      <div class="navigation">
        <a href="{base}/">Home</a>
        <a href="{base}/">Pricing</a>
        <a href="{base}/">Products</a>
        <a href="{base}/">About Us</a>
      </div>
      <div class="company">
        <a href="{base}/">Careers</a>
        <a href="{base}/">Community</a>
        <a href="{base}/">Privacy Policy</a>
      </div>
    </div>

    <div class="newsletter">
      <form class="newsletter" class:submitted>
        <input
          type="email"
          name="mail"
          id="mail"
          placeholder="Updates in your inbox…"
          required
        />
        <input type="submit" value="Go" on:click={() => (submitted = true)} />
        <p class="error">Please insert a valid email</p>
      </form>
    </div>

    <p class="copyright">Copyright 2020. All Rights Reserved</p>
  </div>

  <div class="attribution">
    <p>
      Challenge by <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank">Frontend Mentor</a
      >. Coded by <a href="https://github.com/Lequral">Lequral</a>.
    </p>
  </div>
</footer>

<style lang="scss">
  footer {
    background-color: var(--Very-Dark-Blue);
    width: 100vw;
    padding-top: 3rem;
    padding-bottom: 3rem;
    box-sizing: border-box;
    > * {
      width: 100%;
    }

    a {
      text-decoration: none;
      color: var(--Very-Pale-Red);
      font-weight: 400;
      opacity: 0.7;
    }

    a:hover {
      color: var(--Bright-Red);
    }

    div.container {
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      min-height: 8rem;
      column-gap: 9vw;
      flex-wrap: wrap;
      justify-content: space-between;

      .logos {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;

        .socials {
          display: flex;
          column-gap: 0.7rem;

          a:hover img {
            filter: invert(48%) sepia(42%) saturate(4353%) hue-rotate(341deg)
              brightness(102%) contrast(90%);
          }
        }
      }

      .links {
        display: flex;
        justify-content: space-between;
        width: 24vw;
        margin-right: 3vw;

        > div {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          row-gap: 1rem;
        }
      }

      input {
        padding: 0.8rem 1.5rem;
        border-radius: 2rem;
        border: none;
      }

      input#mail {
        outline-color: var(--Bright-Red);
        margin-right: 0.5rem;
      }

      form.newsletter.submitted:invalid input#mail {
        border: 0.1rem solid red;
        color: red;
      }

      input[type="submit"] {
        background-color: var(--Bright-Red);
        color: var(--Very-Pale-Red);
        font-weight: 700;
      }

      input[type="submit"]:hover {
        filter: saturate(0.65) brightness(1.3);
      }

      p.error {
        color: red;
        font-style: italic;
        font-size: 0.8rem;
        margin: 0.4rem 0 0 1.5rem;
        visibility: hidden;
        text-align: left;
      }

      form.newsletter.submitted:invalid p.error {
        visibility: visible;
      }

      p.copyright {
        width: 100%;
        text-align: end;
        font-size: 0.9rem;
        position: relative;
        top: -0.5rem;
      }
    }
  }

  .attribution {
    display: flex;
    justify-content: center;
    position: relative;
    top: 2rem;

    p,
    p a {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 1100px) {
    .newsletter {
      order: -1;
    }
    div.newsletter,
    form.newsletter {
      width: 100%;
    }

    .logos {
      order: 2;
    }

    .copyright {
      order: 3;
    }

    .socials {
      order: -1;
      width: 100%;
    }

    .socials > a {
      scale: 1.6;
    }

    .socials {
      justify-content: space-around;
      width: 100%;
    }

    .links {
      justify-content: space-around !important;
    }

    .links a {
      font-size: 1.1rem;
    }

    input[type="email"] {
      text-align: start;
    }

    input[type="submit"] {
      text-transform: uppercase;
    }

    footer div.container .logos {
      width: 100%;
      align-items: center;
      row-gap: 4rem;
    }

    footer div.container .links {
      margin: 3rem 0;
      width: 100%;
    }

    footer div.container .links > div {
      margin-left: 2rem;
    }

    footer div.container p.copyright {
      margin-top: 4rem;
      text-align: center;
      font-size: 0.8rem;
    }
  }
</style>
