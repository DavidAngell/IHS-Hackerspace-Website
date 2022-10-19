import { IconLinkPair } from "./data-types";

export const ourMission = `
	We want a space for nerds to come together and share what they love!
	And we want to bully the robotics team!
	But mainly the FIRST one :)
	Get it!
	It's a play on FIRST Robotics
	Wow that's so clever
	Thanks David!
	You're welocome David!
`
interface LeaderMember {
	name: string;
	title: string;
	graduation_year: string;
	bio: string;
	image: string;
	image_redirect: string; // This is the link that the user is sent to when they click on the image of the person
	icon_links: IconLinkPair;
}

interface PeasantMember {
	name: string;
	graduation_year: string;
	bio: string;
	image: string;
	image_redirect: string; // This is the link that the user is sent to when they click on the image of the person
}


export const memberList = {
	leaders: [
		{
			name: "David Angell",
			graduation_year: "2023",
			title: "Co-Founder",
			bio: "My list of accomplishments:",
			image: "/assets/about/david.png",
			image_redirect: "https://davidangell.dev",
			icon_links: {
				'mdi:github': "https://github.com/DavidAngell",
				'mdi:twitter': "https://twitter.com/DavidJAngell42",
				'mdi:instagram': "https://instagram.com/davidaangle",
				'mdi:account-box-outline': "https://davidangell.dev",
			}
		},
		{
			name: "Toby Flowers",
			graduation_year: "2024",
			title: "Co-Founder",
			bio: "Tobias Gabriel Flowers approves this message",
			image: "/assets/about/toby.png",
			image_redirect: "https://github.com/TobyFlowers",
			icon_links: {
				'mdi:github': "https://github.com/TobyFlowers",
			}
		},
		{
			name: "John Fortin",
			graduation_year: "2023",
			title: "Underling",
			bio: "David did my mom — JohnnyFoFo",
			image: "/assets/about/john.png",
			image_redirect: "https://github.com/JohnnyFoFo",
			icon_links: {
				'mdi:github': "https://github.com/JohnnyFoFo",
			}
		},
	] as LeaderMember[],

	members: [
		{
			name: "placeholder",
			bio: "My list of accomplishments:",
			image: "/assets/about/david.png",
			image_redirect: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		},

	] as PeasantMember[],
}