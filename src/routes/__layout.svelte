<script context="module">
  export async function load({ page, fetch, session, context }) {
    return {
      props: {
        session
      }
    }
  } 
</script>

<script>
	import {page} from '$app/stores'

	export let session
</script>



<nav>
	<a class:active={$page.path === '/'} href="/">index {session ? '👍' : '🔒'}</a>
	<a class:active={$page.path === '/auth'} href="/auth">auth {session ? '🔒' : '👍'}</a>
	<a class:active={$page.path === '/redirect'} href="/redirect">redirect 🔒</a>
	<a class:active={$page.path === '/open'} href="/open">open 👍</a>
</nav>
<main>
	<slot />
</main>

<pre>
	session = {JSON.stringify(session, null, 2)}
</pre>

<style>
	nav {
		display: flex;
		width: 300px;
		justify-content: space-around;
	}
	a.active {
		transition: .5s;
		transform: scale(1.2);
	}
	main {
		padding: 1rem;
	}
	pre {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
	
</style>