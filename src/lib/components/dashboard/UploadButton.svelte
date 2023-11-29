<script lang="ts">
    import { Button } from "$components/ui/button"
    import * as Dialog from "$lib/components/ui/dialog";
</script>
  
<Dialog.Root>
    <Dialog.Trigger>
        <Button>
            Upload
        </Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Upload</Dialog.Title>
        <form method="POST" action="api.unideb.tech/upload/internal">
            <label>
                <input
                type="file"    
                name="image"
                />
            </label>
            <button class="bg-primary text-black p-3 rounded-lg" type="submit">Upload</button>
        </form>
      </Dialog.Header>
    </Dialog.Content>
</Dialog.Root>
