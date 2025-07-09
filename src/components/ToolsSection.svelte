<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import type {IconProperties} from "../types/IconProperties";
</script>

{#snippet icon(details: IconProperties)}
    <Card.Root class="w-40 h-50">
        <Card.Content class="flex flex-col items-center justify-center gap-4">
            <img class="mt-0 w-40 h-auto" src={details.imagePath} alt={details.text} />
            <p class="font-medium text-2xl text-center">{details.text}</p>
        </Card.Content>
    </Card.Root>
{/snippet}

<section class="container mx-auto px-4 py-16">
    <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-10">Tools</h1>
    <div class="flex flex-wrap gap-6">
        {@render icon({ text: ".NET", imagePath: "/icons/dotnet.svg" })}
        {@render icon({ text: "Unity", imagePath: "/icons/unity.svg" })}
        {@render icon({ text: "React", imagePath: "/icons/react.svg" })}
        {@render icon({ text: "Svelte", imagePath: "/icons/svelte.svg" })}
        {@render icon({ text: "TypeScript", imagePath: "/icons/typescript.svg" })}
        {@render icon({ text: "tModLoader", imagePath: "/icons/tmodloader.png" })}
    </div>
</section>



