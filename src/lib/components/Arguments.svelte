<section>
  <div class="text-container">
    <h2>What’s different about Manage?</h2>
    <p>
      Manage provides all the functionality your team needs, without the
      complexity. Our software is tailor-made for modern digital product teams.
    </p>
  </div>
  <ol>
    <li>
      <h4><span>01</span> Track company-wide progress</h4>
      <p>
        See how your day-to-day tasks fit into the wider vision. Go from
        tracking progress at the milestone level all the way done to the
        smallest of details. Never lose sight of the bigger picture again.
      </p>
    </li>
    <li>
      <h4><span>02</span> Advanced built-in reports</h4>
      <p>
        Set internal delivery estimates and track progress toward company goals.
        Our customisable dashboard helps you build out the reports you need to
        keep key stakeholders informed.
      </p>
    </li>
    <li>
      <h4><span>03</span> Everything you need in one place</h4>
      <p>
        Stop jumping from one service to another to communicate, store files,
        track tasks and share documents. Manage offers an all-in-one team
        productivity solution.
      </p>
    </li>
  </ol>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    margin-top: 6rem;

    p {
      margin: 15px 0 15px;
      max-width: 88vw;
      line-height: 25px;
    }

    .text-container {
      p {
        width: 21vw;
        margin: 30px 0;
      }
    }

    ol {
      list-style-type: none;
      padding: 0;

      h4 span {
        background-color: var(--Bright-Red);
        color: var(--Very-Pale-Red);
        padding: 11px 25px 10px 25px;
        border-radius: 25px;
        margin-right: 15px;
      }

      p {
        margin: 15px 0 15px 87px;
        text-align: left;
      }

      li {
        margin-bottom: 40px;
      }
    }

    > div {
      width: 42%;
    }
    > ol {
      width: 49%;
    }
  }

  @media screen and (max-width: 1100px) {
    section {
      flex-direction: column;
      margin-top: 8vh;

      .text-container {
        

        p {
          width: auto;
          margin: 15px 0 30px 0;
          box-sizing: border-box;
          padding: 0 6vw;
        }
      }

      ol {
        h4 {
          background-color: var(--Very-Pale-Red);
          text-align: left;
          padding: 10px 0px 10px 0px;
          border-radius: 50px 0 0 50px;
          width: 94vw;

          span {
            margin-right: 10px;
          }
        }

        p {
          margin-left: 0;
        }
      }

      > div,
      > ol {
        width: auto;
      }
    }
  }
</style>
