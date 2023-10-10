<script>
import 'suil/styles.css'
import '$lib/css/index.css'
import options from 'suil/options'
import PageLoader from './PageLoader.svelte'

options.trim = true
options.nullable = true

export let data
</script>

<PageLoader />

<slot />
