<script>
	import { v4 as uuidv4 } from "uuid";
	import { FeedbackStore } from "../stores";
	import Card from "./Card.svelte";
	import Button from "./Button.svelte";
	import RatingSelect from "./RatingSelect.svelte";

	let text = "";
	let rating = 10;
	let btnDisabled = true;
	let min = 10;
	let message;
	// If you have a custom event , and you pass a value, you can then get that value with e.detail
	const handleSelect = (e) => (rating = e.detail);

	// Makes disabled button active when typed characters are 10 minimum

	const handleInput = () => {
		// Check the length of a var text
		// Trim white space
		// If there are minimum 10 characters typed minus a white space, make the button active, otherwise keep it disabled with message = null
		if (text.trim().length <= min) {
			message = `Text must be at least ${min} chracters`;
			btnDisabled = true;
		} else {
			message = null;
			btnDisabled = false;
		}
	};

	const handleSubmit = () => {
		if (text.trim().length > min) {
			// Create an object called newFeedback
			const newFeedback = {
				id: uuidv4(),
				text,
				// +rating turns string to a number
				rating: +rating,
			};
			FeedbackStore.update((currentFeedback) => {
				// newFeedback is a new Array Object
				return [newFeedback, ...currentFeedback];
			});
			text = "";
		}
	};
</script>

<Card>
	<header><h2>How would you rate your service with us?</h2></header>
	<!-- |preventDefault is a modifier -->
	<form on:submit|preventDefault={handleSubmit} action="">
		<!-- Rating select -->
		<RatingSelect on:rating-select={handleSelect} />
		<div class="input-group">
			<input
				type="text"
				on:input={handleInput}
				bind:value={text}
				placeholder="Tell us something that keeps us coming back"
			/>
			<Button disabled={btnDisabled} type="submit">Send</Button>
		</div>
		<!-- Show messager IF there is a message -->
		{#if message}
			<div class="message">
				{message}
			</div>
		{/if}
	</form>
</Card>

<style>
	header {
		max-width: 400px;
		margin: auto;
	}
	header h2 {
		font-size: 22px;
		font-weight: 600;
		text-align: center;
	}
	.input-group {
		display: flex;
		flex-direction: row;
		border: 1px solid #ccc;
		padding: 8px 10px;
		border-radius: 8px;
		margin-top: 15px;
	}
	input {
		flex-grow: 2;
		border: none;
		font-size: 16px;
	}
	input:focus {
		outline: none;
	}
	.message {
		padding-top: 10px;
		text-align: center;
		color: rebeccapurple;
	}
</style>
