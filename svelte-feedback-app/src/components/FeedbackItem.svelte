<script>
	import Card from "./Card.svelte";

	export let item;
</script>

<!-- Card as a separate component as it is gonna be used in different places -->
<!-- Use slots with Hello hardcoded for now-->
<Card>Hello</Card>
