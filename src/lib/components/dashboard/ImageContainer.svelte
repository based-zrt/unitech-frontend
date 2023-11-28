<script lang="ts">
    import * as Card from '$lib/components/ui/card'
    import baseImage from '$lib/assets/images/unknownImage.jpg'

    export let id: string
    export let user: string
    export let url: string
    export let size: number
    export let fileName: string
    export let uploadDate: number

    $: imageStyle = `background-image: url(https://api.unideb.tech/view/${id}/raw);`
</script>

<Card.Root class="w-60 h-60">
    <div
        class="w-60 h-60 flex flex-col-reverse absolute transition duration-200 hover:backdrop-blur-sm opacity-0 hover:opacity-100"
    >
        <div class="flex flex-row pb-3 bg-slate-900/75 rounded-b-lg">
            <div class="flex flex-col text-right m-2">
                <p>File:</p>
                <p>Size:</p>
            </div>
            <div class="flex flex-col text-left mt-2">
                <p>{fileName}</p>
                <p>{Math.ceil(size / 1024)} Kb</p>
            </div>
        </div>
    </div>
    <div class="bg-cover bg-center w-full h-full rounded-lg" style={imageStyle} />
</Card.Root>
