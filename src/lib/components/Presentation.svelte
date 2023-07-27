<script lang="ts">
  import intro from "@assets/illustration-intro.svg";
</script>

<section>
  <div class="text-container">
    <h1>Bring everyone together to build better products.</h1>

    <p>
      Manage makes it simple for software teams to plan day-to-day tasks while
      keeping the larger team goals in view.
    </p>

    <button name="Get started" class="get-started">Get Started</button>
  </div>
  <div class="image-container">
    <img src={intro} alt="Everyone's work with manage" />
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: normal;
    margin-top: 5rem;

    div {
      width: 50%;
    }

    .text-container {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;

      p {
        width: 31ch;
        margin: 2rem 0;
      }

      .get-started {
        margin-top: .5rem;
      }
    }

    .image-container {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: end;
      order: 1;

      img {
        position: relative;
        left: 15px;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    section {
      flex-direction: column;
      margin-top: 0;

      div {
        width: 100% !important;
      }

      .text-container {
        align-items: center;
        margin: 10px 0;

        h1 {
          line-height: 45px;
        }

        p {
          width: 100%;
          line-height: 25px;
          box-sizing: border-box;
          padding: 0 6vw;
        }

        button {
          margin-top: 10px;
        }
      }

      .image-container {
        order: -1;

        display: flex;
        justify-content: center;

        img {
          scale: 0.6;
          margin: -75px 0;
          left: 0px;
        }
      }
    }
  }
</style>
