<script>
	import FeedbackList from "./components/FeedbackList.svelte";

	// Your data should be stored in a a top level component
	let feedback = [
		{
			id: 1,
			rating: 10,
			text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum officiis quos sapiente necessitatibus itaque tempora deserunt iure fugit velit.",
		},
		{
			id: 2,
			rating: 9,
			text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum officiis quos sapiente necessitatibus itaque tempora deserunt iure fugit velit.",
		},
		{
			id: 3,
			rating: 8,
			text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum officiis quos sapiente necessitatibus itaque tempora deserunt iure fugit velit.",
		},
	];
</script>

<main class="container">
	<!-- Pass top level component data as a prop with FeedbackList -->
	<!-- feedback={feedback} -->
	<FeedbackList {feedback} />
</main>
