<script lang="ts">
import * as Avatar from '$components/ui/avatar';
import Logo from '$components/ui/logo/logo.svelte'
import Searchbar from '$components/ui/searchbar/searchbar.svelte';
import deffaultProfile from '$lib/assets/images/deffaultProfile.png';
import { Progress } from "$lib/components/ui/progress";
import Uploadbutton from '$components/ui/uploadbutton/uploadbutton.svelte';
import Imagecontainer from '$components/ui/image-container/imagecontainer.svelte'

//Profile varriables
let imgcount = 16; // Get from backend
let profileImage; 
let maxStorage=0.8;
let usedStorage=500;
</script>
<!--TODO: Add responsivity to page.-->

<!--Navbar-->
<header>
  <nav class="fixed bg-slate-800 w-full flex justify-between items-center mx-auto px-8 h-20">
    <Logo />
    <Progress storage={maxStorage} used={usedStorage} /> <!--The storage always should be add as GB but the used always MB. -->
    <Searchbar />
    <Uploadbutton />
    <Avatar.Root>
        <Avatar.Image src={deffaultProfile} alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
    </nav>
</header>

<!--Navbar-->

<!--Body-->
<div class="pt-32 pl-10">
  <div class="grid grid-cols-5 gap-2">
    {#each Array.from({ length: imgcount }) as _, i (i)}
    <Imagecontainer srcImage=""/>
    {/each}
  </div>
</div>

<!--Body-->
