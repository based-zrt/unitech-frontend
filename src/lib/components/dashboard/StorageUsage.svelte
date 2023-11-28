<script lang="ts">
    import { Progress } from '$lib/components/ui/progress'
    import { string } from 'zod'

    export let usePercentage: number
    let classname: string
    export { classname as class }
</script>

<div>
    <Progress value={usePercentage} max={100} class={classname} />
</div>
