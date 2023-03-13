<script>
	// Since we are able to use Store, we don't need to dispatch custom events
	import { FeedbackStore } from "../stores";
	import Card from "./Card.svelte";
	export let item;

	// Testing handle delete
	// const handleDelete = (itemId) => {
	// 	console.log(itemId);
	// };

	// Use Dispatcher
	const handleDelete = (itemId) => {
		FeedbackStore.update((currentFeedback) => {
			// Filter out an item we want to delete
			return currentFeedback.filter((item) => item.id != itemId);
		});
	};
</script>

<!-- A review box -->
<Card>
	<div class="num-display">{item.rating}</div>
	<!-- It deletes based on an item ID -->
	<button class="close" on:click={() => handleDelete(item.id)}>X</button>
	<p class="text-display">{item.text}</p>
</Card>

<style>
	.num-display {
		position: absolute;
		top: -10px;
		left: -10px;
		width: 50px;
		height: 50px;
		background: #ff6a95;
		color: #fff;
		border: 1px #eee solid;
		border-radius: 50%;
		padding: 10px;
		text-align: center;
		font-size: 19px;
	}
	.close {
		position: absolute;
		top: 10px;
		right: 20px;
		cursor: pointer;
		background: none;
		border: none;
	}
</style>
