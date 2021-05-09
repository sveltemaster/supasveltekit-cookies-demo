import supabase from '$lib/db'


export async function get() {
  const {error} = await supabase.auth.signOut()

  if (error) {
    return {
      status: error.status,
      body: error.message,
    }
  }

  return {
    status: 302,
    headers: {
      'location': '/auth',
      'set-cookie': `session=; path=/; expires=0;`
    }
  }
}