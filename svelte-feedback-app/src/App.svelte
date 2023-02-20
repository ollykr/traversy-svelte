<script>
	let firstName = "Oleg";
	let lastName = "Kremianski";
	// toggle vars
	let color = "blue";
	let showText = false;
	// loops vars
	let users = [
		{
			id: "1",
			name: "John",
		},
		{
			id: "2",
			name: "Sara",
		},
		{
			id: "3",
			name: "Bob",
		},
	];

	// In Svelte to change a value you just do this: firstName = 'John' . No hooks like in React

	// Create reactive values - instead of {firstName} {lastName}
	$: name = firstName + " " + lastName;

	// Named function toggle
	// if color is blue change it to red, otherwise make it blue
	const toggle = () => {
		color = color === "blue" ? "red" : "blue";
		// means showText boolen is opposite of whatevre it is
		showText = !showText;
		// re-assign users - we don't want to use 'push'
		// We want any existing users in an array - hence spread operator (...) take the three objects which are already in an array and put them in this re-assigned array. In addition to that I want to use a new user - Jen with id :4. Jen is added to our users list on clicking toggle button
		users = [...users, { id: "4", name: "Jen" }];
	};
</script>

<main>
	<h1 style="color: {color}">Hello {name}!</h1>
	<!-- Conditionals -->
	<!-- No text paragraph is displayd by default, "Visit etc" paragraph is displayed on clicking toggle button -->
	{#if showText}
		<p>
			Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
			how to build Svelte apps.
		</p>
	{:else}
		<p>No text</p>
	{/if}
	<!-- Events example clicking a button changes a title color from blue to purple -->
	<button on:click={() => (color = "purple")}>Click me</button>
	<!-- Or if we use named function -->
	<button on:click={toggle}>Click the toggle</button>

	<!-- each loop -->
	<!-- user.id is our key -->
	{#each users as user (user.id)}
		<h3>{user.id}: {user.name}</h3>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
