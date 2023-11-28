<script lang="ts">
  import * as Avatar from '$components/ui/avatar';
  import Logo from '$components/ui/logo/logo.svelte'
  import Searchbar from '$components/ui/searchbar/searchbar.svelte';
  import deffaultProfile from '$lib/assets/images/deffaultProfile.png';
  import { Progress } from "$lib/components/ui/progress";
  import Uploadbutton from '$components/ui/uploadbutton/uploadbutton.svelte';
  import * as Dialog from "$lib/components/ui/dialog";
  import Imagecontainer from '$components/ui/image/imagecontainer.svelte';
  import OpenedImage from '$components/ui/image/opened-image.svelte';
  import { onMount } from 'svelte'
  
  export let data;
  $: info = data.profileData

  onMount(() => {
    console.log('geci')
  })
  </script>
  
  <!-- Navbar -->
  <nav class="fixed bg-slate-800 w-full flex justify-between items-center mx-auto px-8 h-20">
    <Logo />
    <!-- <Progress storage={0} used={1} /> -->
    <Searchbar />
    <Uploadbutton />
    <div>
      <span class="text-center align-middle">{info.username}</span>
      <Avatar.Root class="mx-auto">
        <Avatar.Image src={deffaultProfile} alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
    </div>
   
  </nav>
  <!-- Navbar -->
  
  <!-- Body -->
  <div class="pt-32 pl-10">
    <div class="grid lg:grid-cols-5 gap-2 md:grid-cols-3 sm:grid-cols-2 ml-11 lg:ml-0">
      {#each info.uploads as image (image.id)}
        <Dialog.Root>
          <Dialog.Trigger>
            <Imagecontainer {...image} />
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title class="text-center pt-5 pb-5">Preview</Dialog.Title>
              <Dialog.Description>
                <OpenedImage {...image} />
              </Dialog.Description>
            </Dialog.Header>
          </Dialog.Content>
        </Dialog.Root>
      {/each}
    </div>
  </div>
  <!-- Body -->
  
  <!-- Footer -->
  <!-- Footer -->
  