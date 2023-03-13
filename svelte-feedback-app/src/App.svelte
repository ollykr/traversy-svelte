<script>
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
</script>

<main class="container">
	<!-- Feedback Form -->
	<FeedbackForm />
	<!-- Feedback Stats component -->
	<FeedbackStats />
	<!-- to test that the count works -->
	<!-- <h1>Number of reiews: {count}</h1> -->
	<!-- to test that the average works -->
	<!-- <h1>An average rating: {average}</h1> -->
	<!-- Pass top level component data as a prop with FeedbackList -->
	<!-- feedback={feedback} -->
	<!-- Event forwarding delete event from feedbackList component -->
	<FeedbackList />
</main>
