<script>
	// apply nice Svelte transition to reviews list
	import { fade, scale } from "svelte/transition";
	import FeedbackItem from "./FeedbackItem.svelte";
	// Catch a prop
	// It is gonna be set by {feedback} prop in App.svelte
	// Just in case it was not passed in, we set it to an empty array here
	export let feedback = [];
	// Testing that it is working, and values are passed on
	// console.log(feedback);
</script>

{#each feedback as fb (fb.id)}
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
