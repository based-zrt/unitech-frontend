<script lang="ts">
    import { MetaTags } from "svelte-meta-tags"
    import * as Card from "$lib/components/ui/card"

    import { isError, type ViewResponse } from "$lib/types.js"
    import Centered from "$lib/Centered.svelte"

    export let data;

    $: error = isError(data.view)
    $: view = data.view as ViewResponse;
</script>

<svelte:head>
    {#if !error && view.embed}
    <meta name="theme-color" content={view.embedColor} />
    {/if}
</svelte:head>

{#if !error && view.embed}
    <MetaTags 
        title={view.embedTitle} 
        description={view.embedDescription}
        openGraph={{
            title: view.embedTitle,
            description: view.embedDescription,
            images: [
                {
                    url: view.upload.url
                }
            ]
        }}
    />
{/if}

{#if error}
    <MetaTags 
        openGraph={{
            url: 'https://unideb.tech',
            title: 'Image hosting',
            description: 'requested image not found'
        }}
    />
    <Centered>
        <h1 class="text-2xl">Upload not found</h1>
    </Centered>

{:else}
    <Centered>
        <Card.Root>
            <Card.Header>
                <img src={view.upload.url} alt={view.upload.fileName}/>
            </Card.Header>
            <Card.Description>
                <div class="flex flex-row m-5">
                    <div class="flex flex-col text-right font-bold mr-3">
                        <p>Uploaded by:</p>
                        <p>File:</p>
                        <p>Size:</p>
                    </div>
                    <div class="flex flex-col text-left">
                        <p>{view.upload.user}</p>
                        <p>{view.upload.fileName}</p>
                        <p>{Math.ceil(view.upload.size / 1024)} kb</p>
                    </div>
                </div>
            </Card.Description>
        </Card.Root>
    </Centered>
{/if}