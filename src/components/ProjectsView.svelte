<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";

    import type {ProjectProperties} from "../types/ProjectProperties";

    import projectsJson from "../data/projects.json";
    const projects: ProjectProperties[] = projectsJson;
</script>

{#snippet project(project: ProjectProperties)}
    <Card.Root class="w-96 h-54">
        <Card.Header>
            <Card.Title class="font-semibold text-2xl"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></Card.Title>
            <Card.Description>{project.description}</Card.Description>
            <Card.Action><img class="w-30 h-30" src={project.image} alt={project.name} /></Card.Action>
        </Card.Header>
        <Card.Footer>
            <div class="flex gap-3">
                {#each project.tags as tag }
                    <span class="px-3 py-1 rounded-full text-white text-sm font-semibold" style={`background-color: ${tag.color}`}>{tag.label}</span>
                {/each}
            </div>
        </Card.Footer>
    </Card.Root>
{/snippet}

<section class="container mx-auto px-4 py-16">
    <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-10">Projects</h1>
    <div class="flex flex-wrap gap-6 md:justify-start justify-center">
        {#each projects as projectDetails}
            {@render project(projectDetails)}
        {/each}
    </div>
</section>