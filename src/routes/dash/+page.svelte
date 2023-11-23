<script lang="ts">
import * as Avatar from '$components/ui/avatar';
import Logo from '$components/ui/logo/logo.svelte'
import Searchbar from '$components/ui/searchbar/searchbar.svelte';
import deffaultProfile from '$lib/assets/images/deffaultProfile.png';
import { Progress } from "$lib/components/ui/progress";
import Uploadbutton from '$components/ui/uploadbutton/uploadbutton.svelte';
import * as Dialog from "$lib/components/ui/dialog";
import * as Image from '$components/ui/image-container';


//Profile varriables - these are got from database.
let imgcount = 10; 
let profileImage; 
let maxStorage=0.8;
let usedStorage=500;

//function loadImage(){} - Image get from database

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
  <div class="grid lg:grid-cols-5 gap-2 md:grid-cols-3 sm:grid-cols-2 ml-11 lg:ml-0">
    {#each Array.from({ length: imgcount }) as _, i (i)}
    <Dialog.Root>
      <Dialog.Trigger><Image.Imagecontainer srcImage=""/></Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title class="text-center pt-5 pb-5">Preview</Dialog.Title>
          <Dialog.Description>
            <Image.OpenedImage srcImage="" imageName="" imageSize="" imageUploadDate=""/>
          </Dialog.Description>
        </Dialog.Header>
      </Dialog.Content>
    </Dialog.Root>
    
    {/each}
  </div>
</div>
<!--Body-->

<!--Footer-->
<!--Footer-->
