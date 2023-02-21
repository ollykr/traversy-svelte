<script>
	// Dispatch custom even so deleting is registered in our main App where our data sits
	import { createEventDispatcher } from "svelte";
	import Card from "./Card.svelte";
	export let item;

	const dispatch = createEventDispatcher();

	// Testing handle delete
	// const handleDelete = (itemId) => {
	// 	console.log(itemId);
	// };

	// Use Dispatcher
	const handleDelete = (itemId) => {
		dispatch("delete-feedback", itemId);
	};
</script>

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
