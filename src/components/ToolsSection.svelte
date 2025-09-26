<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import type {IconProperties} from "../types/IconProperties";
</script>

{#snippet icon(details: IconProperties)}
    <Card.Root class="w-34 h-40">
        <Card.Content class="flex flex-col items-center justify-center gap-2">
            <img class="mt-[-7px] w-40 h-auto select-none" src={details.imagePath} alt={details.text} />
            <p class="font-medium text-lg text-center">{details.text}</p>
        </Card.Content>
    </Card.Root>
{/snippet}

<section class="container px-4 py-16 md:mx-[5vw]">
    <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-10">Tools</h1>
    <div class="flex flex-wrap md:justify-start justify-center gap-6">
        {@render icon({ text: ".NET", imagePath: "/icons/dotnet.svg" })}
        {@render icon({ text: "Unity", imagePath: "/icons/unity.svg" })}
        {@render icon({ text: "React", imagePath: "/icons/react.svg" })}
        {@render icon({ text: "Svelte", imagePath: "/icons/svelte.svg" })}
        {@render icon({ text: "TypeScript", imagePath: "/icons/typescript.svg" })}
        {@render icon({ text: "tModLoader", imagePath: "/icons/tmodloader.png" })}
    </div>
</section>