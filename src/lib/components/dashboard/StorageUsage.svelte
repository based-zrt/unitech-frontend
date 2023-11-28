<script lang="ts">
    import { Progress } from '$lib/components/ui/progress'
    import { string } from 'zod'

    export let usedStorage: number
    export let maxStorage: number
    let classname: string
    export { classname as class }

    $: usePercentage = Math.floor(usedStorage / (maxStorage / 100))
    $: usedString = convertToString(usedStorage)
    $: maxString = convertToString(maxStorage)

    function convertToString(amount: number): string {
        const mb = 1 * 1024 * 1024
        if (amount >= mb)
            return (Math.round((amount / 1024 * 1024) * 100) / 100).toString() + ' mb'
        else
            return (Math.round((amount / 1024) * 100) / 100).toString() + ' Kb'
    }
</script>

<div class="flex flex-col justify-center text-center">
    <Progress value={usePercentage} max={100} class={classname} />
    <p class="mt-1">{usedString} / {maxString}</p>
</div>
