<script>
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
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

	// feedback stats
	// #1
	$: count = feedback.length;
	// #2 an average count
	$: average =
		feedback.reduce((a, { rating }) => a + rating, 0) / feedback.length;
	// add a new review
	const addFeedback = (e) => {
		const newFeedback = e.detail;
		feedback = [newFeedback, ...feedback];
	};

	// Delete review
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
	<!-- Feedback Form -->
	<FeedbackForm on:add-feedback={addFeedback} />
	<!-- Feedback Stats component -->
	<FeedbackStats {count} {average} />
	<!-- to test that the count works -->
	<!-- <h1>Number of reiews: {count}</h1> -->
	<!-- to test that the average works -->
	<!-- <h1>An average rating: {average}</h1> -->
	<!-- Pass top level component data as a prop with FeedbackList -->
	<!-- feedback={feedback} -->
	<!-- Event forwarding delete event from feedbackList component -->
	<!-- Setting it up to a function deleteFeedback -->
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
