<script lang="ts">
	import { useQuery, useConvexClient } from 'convex-svelte';
	import { api } from '../convex/_generated/api.js';
	import type { Id } from '../convex/_generated/dataModel';

	const client = useConvexClient();
	const query = useQuery(api.tasks.get, {});

	async function handleCheckboxChange(id: Id<'tasks'>, isCompleted: boolean) {
		await client.mutation(api.tasks.update, {
			id,
			updates: { isCompleted }
		});
	}
</script>

{#if query.isLoading}
	Loading...
{:else if query.error}
	Failed to load: {query.error.toString()}
{:else}
	<ul>
		{#each query.data as task}
			<li>
				<input
					type="checkbox"
					checked={task.isCompleted}
					on:change={() => handleCheckboxChange(task._id, !task.isCompleted)}
				/>
				<span>{task.text}</span>
				<span>assigned by {task.assigner}</span>
			</li>
		{/each}
	</ul>
{/if}
