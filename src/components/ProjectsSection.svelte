<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";

    import type {ProjectProperties} from "../types/ProjectProperties";

    import projectsJson from "../data/projects.json";
    const projects: ProjectProperties[] = projectsJson;
</script>

{#snippet project(project: ProjectProperties)}
    <Card.Root class="w-[350px] h-52">
        <Card.Header class="min-h-30">
            <Card.Title class="font-semibold text-2xl"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></Card.Title>
            <Card.Description>{project.description}</Card.Description>
            <Card.Action><img class="w-24 h-auto ml-4" src={project.image} alt={project.name} /></Card.Action>
        </Card.Header>
        <Card.Footer class="mt-[-10px]">
            <div class="flex gap-3">
                {#each project.tags as tag }
                    <span class="px-3 py-1 rounded-full text-white text-sm font-semibold" style={`background-color: ${tag.color}`}>{tag.label}</span>
                {/each}
            </div>
        </Card.Footer>
    </Card.Root>
{/snippet}

<section class="container mx-[5vw] p-4 py-16">
    <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-10">Projects</h1>
    <div class="flex flex-wrap flex-row gap-6 md:justify-start justify-center">
        {#each projects as projectDetails}
            {@render project(projectDetails)}
        {/each}
    </div>
</section>