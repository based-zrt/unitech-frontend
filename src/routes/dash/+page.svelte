<script lang="ts">
import * as Avatar from '$components/ui/avatar';
import Logo from '$components/ui/logo/logo.svelte'
import Searchbar from '$components/ui/searchbar/searchbar.svelte';
import deffaultProfile from '$lib/assets/images/deffaultProfile.png';


</script>

<nav class=" bg-slate-800 w-full flex relative justify-between items-center mx-auto px-8 h-20">
<Logo />
<Searchbar />
<Avatar.Root>
    <Avatar.Image src={deffaultProfile} alt="@shadcn" />
    <Avatar.Fallback>CN</Avatar.Fallback>
  </Avatar.Root>
  
</nav>