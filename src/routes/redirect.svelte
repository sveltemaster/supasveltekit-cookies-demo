<script context="module">
  export async function load({ page, fetch, session, context }) {
    return {
      status: 302,
      redirect: session ? '/' : '/auth',
      props: {
        session
      }
    }
  } 
</script>

<h1 class="font-size: 5rem; color: red;">YOU SHOULD NOT SEE ME!</h1>