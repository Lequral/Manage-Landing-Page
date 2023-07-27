<script lang="ts">
  import Cards from "./Cards.svelte";

  import anisha from "@assets/avatar-anisha.png";
  import ali from "@assets/avatar-ali.png";
  import richard from "@assets/avatar-richard.png";
  import shanai from "@assets/avatar-shanai.png";

  function scrollTo(newStep: number) {
    var stepProgress = document.querySelector("div.step-progress");
    var newSelected = stepProgress?.children[newStep];

    if (newSelected != null) {
      if (!newSelected.classList.contains("selected")) {
        stepProgress
          ?.querySelector("button.selected")
          ?.classList.remove("selected");
        newSelected.classList.add("selected");
      }
    }
    document.querySelector("ul.reviews")?.children[newStep].scrollIntoView({
      inline: "nearest",
      behavior: "smooth",
      block: "nearest",
    });
  }
</script>

<section>
  <h2>What they've said</h2>

  <ul class="reviews">
    <li>
      <Cards>
        <img src={anisha} alt="anisha's profil picture" />
        <h4>Anisha Li</h4>
        <p>
          “Manage has supercharged our team’s workflow. The ability to maintain
          visibility on larger milestones at all times keeps everyone
          motivated.”
        </p>
      </Cards>
    </li>
    <li>
      <Cards>
        <img src={ali} alt="ali's profil picture" />
        <h4>Ali Bravo</h4>
        <p>
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </p>
      </Cards>
    </li>
    <li>
      <Cards>
        <img src={richard} alt="richard's profil picture" />
        <h4>Richard Watts</h4>
        <p>
          “Manage allows us to provide structure and process. It keeps us
          organized and focused. I can’t stop recommending them to everyone I
          talk to!”
        </p>
      </Cards>
    </li>
    <li>
      <Cards>
        <img src={shanai} alt="shanai's profil picture" />
        <h4>Shanai Gough</h4>
        <p>
          “Their software allows us to track, manage and collaborate on our
          projects from anywhere. It keeps the whole team in-sync without being
          intrusive.”
        </p>
      </Cards>
    </li>
  </ul>
  <div class="step-progress">
    <button
      name="first review"
      class="selected"
      on:click={() => {
        scrollTo(0);
      }}
    ></button>
    <button
      name="second review"
      on:click={() => {
        scrollTo(1);
      }}
    ></button>
    <button
      name="third review"
      on:click={() => {
        scrollTo(2);
      }}
    ></button>
    <button
      name="fourth review"
      on:click={() => {
        scrollTo(3);
      }}
    ></button>
  </div>

  <button name="Get started" class="get-started">Get Started</button>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 5rem;

    h2,
    h4,
    p {
      text-align: center;
    }

    p {
      margin-top: 2vh;
      width: 42ch;
    }

    ul {
      list-style-type: none;
      display: flex;
      justify-content: start;
      padding: 5rem 1rem 1rem 1rem;
      margin: 0;
      overflow: scroll visible;
      column-gap: 1.5rem;
      max-width: 100vw;
      box-sizing: border-box;

      li {
        overflow: visible;

        h4, p {
          position: relative;
          top: -1rem;
        }

        img {
          width: 4.1rem;
          position: relative;
          top: -4rem;
          margin-bottom: -1.5rem;
        }
      }
    }

    button.get-started {
      width: fit-content;
      margin-top: 2.5rem;
    }
  }

  @media screen and (min-width: 1100px) {
    .step-progress {
      visibility: hidden;
    }
  }

  @media screen and (max-width: 1100px) {
    ul {
      overflow-x: hidden !important;
      scroll-snap-type: x mandatory;

      li {
        scroll-snap-align: center;
      }
    }

    .step-progress {
      visibility: visible;

      button {
        background-color: white;
        border-radius: 50%;
        border: 1px solid var(--Bright-Red);
        width: 10px;
        height: 10px;
        box-sizing: border-box;
      }
      button.selected {
        background-color: var(--Bright-Red);
      }
    }
  }
</style>
