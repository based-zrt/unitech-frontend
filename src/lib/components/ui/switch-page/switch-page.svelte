<script lang="ts">
    export let page = 1;
    export let currentPage = page;
    const previousPage = currentPage-1;
    const nextPage = currentPage+1;
</script>
<div>
    <a class="#{previousPage}" href=""><</a>
    {#each Array.from({ length: page }) as _, i (i)}
    <a href="">{page}</a>
    {/each}
    <a class="#{nextPage}" href="#{nextPage}">></a>
</div>