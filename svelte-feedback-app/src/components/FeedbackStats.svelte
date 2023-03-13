<script>
	import { FeedbackStore } from "../stores";
	// feedback stats
	// #1
	$: count = $FeedbackStore.length;
	// #2 an average count
	$: average =
		$FeedbackStore.reduce((a, { rating }) => a + rating, 0) /
		$FeedbackStore.length;
</script>

<!-- Display stats -->
<div class="feedback-stats">
	<h4>{count} Reviews</h4>
	<h4>Ratings Average: {average}</h4>
</div>

<style>
	.feedback-stats {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
