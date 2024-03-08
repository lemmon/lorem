<script>
import { Button } from 'suil'
import lorem from './lorem'

import RenewIcon from 'carbon-icons-svelte/lib/Renew.svelte'

export let data

let text = data.text

function generate() {
  text = lorem()
}
</script>

<svelte:head>
  <title>Lorem Ipsum</title>
</svelte:head>

<div class="my">
  <div class="max40 mx">
    <div class="p1 copy h5 lh2">
      {#each text.split('\n') as p}
        <p>{p}</p>
      {/each}
    </div>
    <div class="p1 row">
      <Button
        size="md"
        min
        on:click={() => {
          generate()
        }}><RenewIcon class="m0125" /> Generate</Button
      >
    </div>
  </div>
</div>
