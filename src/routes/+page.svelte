<script lang="ts">
    import ProjectsView from "../components/ProjectsView.svelte";
    import HeroSection from "../components/HeroSection.svelte";
    import TechStack from "../components/TechStack.svelte";

    let projectsSection: HTMLElement | null = null;

    function scrollToProjects() {
        projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<main>
    <div class="flex flex-col overscroll-auto">
        <HeroSection projectsButtonClick={scrollToProjects}/>
        <TechStack/>
        <div bind:this={projectsSection}><ProjectsView/></div>
    </div>
</main>