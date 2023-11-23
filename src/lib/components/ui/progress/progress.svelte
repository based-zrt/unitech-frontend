<script lang="ts">
	import { Progress as ProgressPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	type $$Props = ProgressPrimitive.Props;

	let className: $$Props["class"] = undefined;
	export let max: $$Props["max"] = 100;
	export let value: $$Props["value"] = undefined;
	export { className as class };

	export let used = 0;
	export let storage = 1;
</script>
<div>
	<ProgressPrimitive.Root
		class={cn(
			"relative h-4 w-56 overflow-hidden rounded-full bg-secondary border-2 border-black",
			className
		)}
		{...$$restProps}
	>
		<div
			class="h-full w-56 flex-1 bg-primary transition-all"
			style={`transform: translateX(-${
				100 - (100 * (used/1024 ?? 0)) / (storage ?? 1)
			}%)`}
		/>
	</ProgressPrimitive.Root>
	<div class="h-5 w-56 text-center">
		{storage > 1
		? `Storage ${used} MB / ${storage} GB.`
		: `Storage ${used} MB / ${storage * 1024} MB.`} 
	</div>
</div>
