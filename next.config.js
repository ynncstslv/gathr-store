/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'cards.scryfall.io',
			'lh3.googleusercontent.com',
			'avatars.githubusercontent.com',
			'firebasestorage.googleapis.com',
		],
	},
};

module.exports = nextConfig;
