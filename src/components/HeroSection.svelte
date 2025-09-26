<script lang="ts">
    import {Button} from "$lib/components/ui/button/index.js";
    import GitHubIcon from "@lucide/svelte/icons/github";

    export let projectsButtonClick: () => void;
</script>

<section class="container md:mx-[5vw] px-4 pt-16 pb-4">
    <div class="flex flex-col-reverse md:flex-row items-center gap-8">
        <div class="flex-1 space-y-10 md:max-w-[60%]">
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight">Hi, I'm <span>PalmForest</span></h1>
            <p class="text-lg text-muted-foreground max-w-[600px]">
                I am a programmer student who does whatever looks fun.
                Currently working on <span class="text-accent-foreground">Web Development</span> and <span class="text-accent-foreground">Game Modding.</span>
            </p>
            <div class="flex gap-4 select-none">
                <Button class="font-semibold cursor-pointer" onclick={projectsButtonClick}>View Projects</Button>
                <Button class="font-semibold" variant="outline" href="https://github.com/PalmForest0" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon/>
                    GitHub
                </Button>
            </div>
        </div>

        <div class="flex-shrink-0 md:flex-1 flex md:justify-start">
            <div class="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px]">
                <img src="/profile-picture.png" alt="Profile" class="rounded-full object-cover w-full h-full shadow-lg"/>
            </div>
        </div>
    </div>
</section>