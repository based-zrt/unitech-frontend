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
  
  // Profile variables - these are got from database.
  let user = {
    userId: undefined,
    userName: 'Jane Doe',
    profileImage: undefined,
    imageCount: 10,
    maxStorageSize: 0.8,
    usedStorage: 500
  };
  
  // Create an array to store image data
  let images = [];
  
  // Function to load images.
  function loadImage(imageId) {
    // Placeholder implementation. TODO: replace this with actual code to fetch images from the database

    return {
      imageId,
      imageName: `Image ${imageId}`,
      imageSize: '',
      imageUploadDate: '',
      imageSource: ``,
      imageLink: undefined,
      isPublic: true
    };
  }
  
  // Populate the images array with image data
  for (let i = 1; i <= user.imageCount; i++) {
    images.push(loadImage(i));
  }
  </script>
  
  <!-- Navbar -->
  <nav class="fixed bg-slate-800 w-full flex justify-between items-center mx-auto px-8 h-20">
    <Logo />
    <Progress storage={user.maxStorageSize} used={user.usedStorage} />
    <Searchbar />
    <Uploadbutton />
    <Avatar.Root>
      <Avatar.Image src={deffaultProfile} alt="@shadcn" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
  </nav>
  <!-- Navbar -->
  
  <!-- Body -->
  <div class="pt-32 pl-10">
    <div class="grid lg:grid-cols-5 gap-2 md:grid-cols-3 sm:grid-cols-2 ml-11 lg:ml-0">
      {#each images as imageData (imageData.imageId)}
        <Dialog.Root>
          <Dialog.Trigger>
            <Imagecontainer {imageData} />
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title class="text-center pt-5 pb-5">Preview</Dialog.Title>
              <Dialog.Description>
                <OpenedImage {imageData} />
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
  