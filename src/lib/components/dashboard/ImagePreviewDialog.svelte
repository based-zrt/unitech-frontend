<script lang="ts">
    import { onMount } from 'svelte'
    import Download from '$components/dashboard/DownloadButton.svelte'
    import baseImage from '$lib/assets/images/unknownImage.jpg'
    import Share from '../sharebutton/share.svelte'
    import UrlBox from '../sharebutton/url-box.svelte'

    export let id: string
    export let user: string
    export let url: string
    export let size: number
    export let fileName: number
    export let uploadDate: number

    let isUrlBoxVisible = false

    function toggleUrlBox() {
        isUrlBoxVisible = !isUrlBoxVisible
    }

    onMount(() => {
        isUrlBoxVisible = false
    })
</script>

<!--Igen redundáns de hát ezt másképp nem tudtam :D-->
<div class="cursor-pointer w-120 h-120 mb-10">
    {#if url}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="h-fit w-fit rounded-lg shadow-xl dark:shadow-gray-800" src={url} alt="Image" />
        <div class="h-100 mt-2 p-4 border-y-2">
            <span>Image name: {fileName}</span>
            <span>Image size: {`${size / 1024} kb`}</span>
            <span>Image upload date: {uploadDate}</span>
            <!--Azért nincs külön svelte komponensbe mert bugos.-->
            {#if isUrlBoxVisible}
                <UrlBox imageURL={url} /> <!--ITT KAPJA MEG A GENERÁLT LINKET.-->
            {/if}
            <div class="flex flex-row justify-center">
                <div class="mx-2 my-2"><Download /></div>
                <!--TODO: Kép letöltése-->
                <div class="mx-2 my-2">
                    <button
                        on:click={toggleUrlBox}
                        type="button"
                        class="text-gray-900 bg-white border-gray-300 hover:bg-blue-500 focus:outline-none font-medium rounded text-sm px-4 py-2 me-2 mb-2 inline-flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 30 30"
                        >
                            <path
                                d="M 23 3 C 20.791 3 19 4.791 19 7 C 19 7.2869826 19.034351 7.5660754 19.091797 7.8359375 L 10 12.380859 C 9.2667379 11.541629 8.2018825 11 7 11 C 4.791 11 3 12.791 3 15 C 3 17.209 4.791 19 7 19 C 8.2018825 19 9.2667379 18.458371 10 17.619141 L 19.091797 22.164062 C 19.034351 22.433925 19 22.713017 19 23 C 19 25.209 20.791 27 23 27 C 25.209 27 27 25.209 27 23 C 27 20.791 25.209 19 23 19 C 21.798117 19 20.733262 19.541629 20 20.380859 L 10.908203 15.835938 C 10.965649 15.566075 11 15.286983 11 15 C 11 14.713017 10.965649 14.433925 10.908203 14.164062 L 20 9.6191406 C 20.733262 10.458371 21.798117 11 23 11 C 25.209 11 27 9.209 27 7 C 27 4.791 25.209 3 23 3 z"
                            />
                        </svg>
                        <span class="mx-2">Share</span>
                    </button>
                </div>
            </div>
        </div>
    {:else}
        <!--Ez az ág csak azért van hogy ha a képet nem sikerült betölteni vagy nem létezik.-->
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="h-fit w-fit rounded-lg shadow-xl dark:shadow-gray-800" src={baseImage} alt="Default Image" />
        <div class="h-100 mt-2 p-4 border-y-2">
            <span>Name: {fileName} <br /></span>
            <span>Size: {`${size / 1024} kb`} <br /></span>
            <span>Uploaded: {uploadDate} <br /></span>
            {#if isUrlBoxVisible}
                <UrlBox imageURL={url} />
            {/if}
        </div>
        <div class="flex flex-row justify-center">
            <div class="mx-2 my-2"><Download /></div>
            <div class="mx-2 my-2">
                <button
                    on:click={toggleUrlBox}
                    type="button"
                    class="text-gray-900 bg-white border-gray-300 hover:bg-blue-500 focus:outline-none font-medium rounded text-sm px-4 py-2 me-2 mb-2 inline-flex items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                        <path
                            d="M 23 3 C 20.791 3 19 4.791 19 7 C 19 7.2869826 19.034351 7.5660754 19.091797 7.8359375 L 10 12.380859 C 9.2667379 11.541629 8.2018825 11 7 11 C 4.791 11 3 12.791 3 15 C 3 17.209 4.791 19 7 19 C 8.2018825 19 9.2667379 18.458371 10 17.619141 L 19.091797 22.164062 C 19.034351 22.433925 19 22.713017 19 23 C 19 25.209 20.791 27 23 27 C 25.209 27 27 25.209 27 23 C 27 20.791 25.209 19 23 19 C 21.798117 19 20.733262 19.541629 20 20.380859 L 10.908203 15.835938 C 10.965649 15.566075 11 15.286983 11 15 C 11 14.713017 10.965649 14.433925 10.908203 14.164062 L 20 9.6191406 C 20.733262 10.458371 21.798117 11 23 11 C 25.209 11 27 9.209 27 7 C 27 4.791 25.209 3 23 3 z"
                        />
                    </svg>
                    <span class="mx-2">Share</span>
                </button>
            </div>
        </div>
    {/if}
</div>
