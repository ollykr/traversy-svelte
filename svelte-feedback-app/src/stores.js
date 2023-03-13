import { writable } from "svelte/store";

export const FeedbackStore = writable([
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
]);
