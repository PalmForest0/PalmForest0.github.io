<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';

	let { children } = $props();

    export const prerender = true;
</script>

<ModeWatcher/>
{@render children()}
