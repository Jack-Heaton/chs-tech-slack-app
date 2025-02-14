export const actions = {
	default: async ({ request }) => {
		const data = await request.text();
		console.log(data);
	}
};
