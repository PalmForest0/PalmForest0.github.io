<script lang="ts">
    import ProjectsSection from "../components/ProjectsSection.svelte";
    import HeroSection from "../components/HeroSection.svelte";
    import ToolsSection from "../components/ToolsSection.svelte";

    let projectsSection: HTMLElement | null = null;

    function scrollToProjects() {
        projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<main>
    <div class="flex flex-col overscroll-auto">
        <HeroSection projectsButtonClick={scrollToProjects}/>
        <ToolsSection/>
        <div bind:this={projectsSection}><ProjectsSection/></div>
    </div>
</main>