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

	const deleteFeedback = (e) => {
		// we accessing an item id via e.detail
		// console.log(e.detail);
		const itemId = e.detail;
		// Deleting an item from an UI , not from DB ot something like this
		// We are filtering out the item id we are deleting
		feedback = feedback.filter((item) => item.id != itemId);
	};
</script>

<main class="container">
	<!-- Pass top level component data as a prop with FeedbackList -->
	<!-- feedback={feedback} -->
	<!-- Event forwarding delete event from feedbackList component -->
	<!-- Setting it up to a function deleteFeedback -->
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
