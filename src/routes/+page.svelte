<script lang="ts">
  import Arguments from "$lib/components/Arguments.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import GetStarted from "$lib/components/GetStarted.svelte";
  import Header from "$lib/components/Header.svelte";
  import Presentation from "$lib/components/Presentation.svelte";
  import Reviews from "$lib/components/Reviews.svelte";
</script>

<svelte:head>
  <title>Lequral's Manage Landing Page</title>
</svelte:head>
<Header />
<main>
  <Presentation />
  <Arguments />
  <Reviews />
  <GetStarted />
</main>
<Footer />
