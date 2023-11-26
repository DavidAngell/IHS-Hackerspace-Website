import { RelativePath } from "./data-types";

interface Project {
	name: string;
	description: string;
	image: RelativePath;
	blog_post: RelativePath;
}

export const ongoingProjects = [
	{
		name: "IHS Hackerspace Discord Bot",
		description: "A Discord bot that uses discord.js to manage all of the project categorization and member permissions within the IHS Hackerspace Discord server.",
		image: "/assets/projects/discord-bot.png",
		blog_post: "/blog/hello-world",
	},
	{
		name: "Air Quality Project",
		description: "A project to measure and track air quality in the IHS area.",
		image: "/assets/projects/air-quality.jpg",
		blog_post: "/blog/hello-world",
	},
	{
		name: "IHS Hackerspace Website",
		description: "The website you're on right now!",
		image: "/assets/social.png",
		blog_post: "/blog/hello-world",
	},
	{
		name: "placeholder",
		description: "placeholder",
		image: "/assets/social.png",
		blog_post: "/blog/hello-world",
	},
	{
		name: "placeholder",
		description: "placeholder",
		image: "/assets/social.png",
		blog_post: "/blog/hello-world",
	},
] as Project[];

export const pastProjects = [
	{
		name: "placeholder",
		description: "placeholder",
		image: "/assets/social.png",
		blog_post: "/blog/hello-world",
	}
] as Project[];