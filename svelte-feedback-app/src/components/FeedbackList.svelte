<script>
	// Needs for a long way solution
	// import { onMount, onDestroy } from "svelte";
	import { FeedbackStore } from "../stores";
	// apply nice Svelte transition to reviews list
	import { fade, scale } from "svelte/transition";
	import FeedbackItem from "./FeedbackItem.svelte";
	// Catch a prop
	// It is gonna be set by {feedback} prop in App.svelte
	// Just in case it was not passed in, we set it to an empty array here
	// export let feedback = [];
	// Testing that it is working, and values are passed on
	// console.log(feedback);
	// Long way solution to use FeedbackStore
	// Not a prop anymore since we are getting feedback diractly via stores.js
	// let feedback = [];
	// Subscribe to our store (via subscribe function) to get a data (through a callback which takes 'data')
	// const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data));

	// Life-cycle method - unsubscribe since it is class-based component
	// Just to show that we can use onMount but we are not using it for the project
	// onMount(() => {
	// 	console.log("mounted");
	// });
	// Unsubscribe using onDestroy
	// onDestroy(() => {
	// 	unsubscribe();
	// });
</script>

<!-- and easier solution - Use FeedbackStore directly via $FeedbackStore -->
{#each $FeedbackStore as fb (fb.id)}
	<!-- Eventually it is gonna be a component FeedbackItem but let's use a feedback text here for now -->
	<!-- lorem text is displayed for the 3 ids -->
	<!-- <h3>{fb.text}</h3> -->
	<!-- Each FeedbackItem taken as a prop -->
	<!-- Catching a dispatch custom event from FeedbackItem component -->
	<!-- Display each item  -->
	<!-- wrap in a div to apply transiotions like fade out and scale in -->
	<div in:scale out:fade={{ duration: 500 }}>
		<FeedbackItem item={fb} on:delete-feedback />
	</div>
{/each}
