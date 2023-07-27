<section class="get-started">
  <h2>Simplify how your team works today.</h2>
  <button name="get-started" class="get-started"> Get Started </button>
</section>

<style lang="scss">
  section {
    width: 100vw;
    margin-top: 11rem;
    background: var(--Bright-Red)
      url(@assets/bg-simplify-section-desktop.svg)
      no-repeat left 17vw bottom 0 / cover;
    padding-top: 4rem;
    padding-bottom: 4rem;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;

    h2 {
      width: 20ch;
      color: var(--Very-Pale-Red);
      line-height: 1em;
    }

    button {
      filter: none;
      color: var(--Bright-Red);
      background-color: var(--Very-Pale-Red);
      height: fit-content;
    }

    button:hover {
      filter: brightness(1.6);
    }
  }

  @media screen and (max-width: 1100px) {
    section {
      background: var(--Bright-Red) url(@assets/bg-simplify-section-mobile.svg)
        no-repeat left;
      flex-direction: column;
      padding-top: 6rem;
      padding-bottom: 6rem;
      margin-top: 3rem;

      h2 {
        font-size: 2.8em;
        width: 13ch;
        margin-bottom: 2rem;
      }
    }
  }
</style>
