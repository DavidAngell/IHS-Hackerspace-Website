import { RelativePath } from "./data-types";

interface Project {
	name: string;
	description: string;
	image: RelativePath;
	blog_post: RelativePath;
}

export const ongoingProjects = [
	{
		name: "placeholder",
		description: "placeholder",
		image: "/assets/projects/david.png",
		blog_post: "/blog/hello-world",
	},
	{
		name: "placeholder",
		description: "placeholder",
		image: "/assets/projects/david.png",
		blog_post: "/blog/hello-world",
	},
	{
		name: "placeholder",
		description: "placeholder",
		image: "/assets/projects/david.png",
		blog_post: "/blog/hello-world",
	},
	{
		name: "placeholder",
		description: "placeholder",
		image: "/assets/projects/david.png",
		blog_post: "/blog/hello-world",
	},
	{
		name: "placeholder",
		description: "placeholder",
		image: "/assets/projects/david.png",
		blog_post: "/blog/hello-world",
	},
] as Project[];

export const pastProjects = [
	{
		name: "placeholder",
		description: "placeholder",
		image: "/assets/projects/david.png",
		blog_post: "/blog/hello-world",
	}
] as Project[];