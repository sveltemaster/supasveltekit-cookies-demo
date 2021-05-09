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
  export let session
</script>

<pre>
  {JSON.stringify(session, null, 2)}
</pre>