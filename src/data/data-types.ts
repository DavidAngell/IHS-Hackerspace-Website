export type URL = string;
export type RelativePath = string;

export interface IconLinkPair {
	'mdi:github'?: URL;
	'mdi:twitter'?: URL;
	'mdi:instagram'?: URL;
    'mdi:account-box-outline'?: URL; // Icon for a personal website
	'discord'?: URL; //stored in /src/icons/discord.svg
}