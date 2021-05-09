<script context="module">
  export async function load({ page, fetch, session, context }) {
    if (!session) {
      return {
        status: 302,
        redirect: '/auth'
      }
    }
    return {
      props: {
        session
      }
    }
  } 
</script>


<!-- <script>
  import {goto} from '$app/navigation'
  async function logout() {
    const response = await fetch('/logout')
    if (response.ok) window.location = '/auth'
    else alert(await response.text())
  }
</script> -->

<form action="/logout" method="get">
  <button>
    Log out
  </button>
</form>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
