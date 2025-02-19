import { redirect } from "@sveltejs/kit";

export function load({ url }) {
	const req = url.searchParams.get('req');

	if(!req) {
		redirect(302, '/tech-slack');
	}

	try {
		JSON.parse(atob(req));
		return { req };
	} catch {
		redirect(302, '/tech-slack');
	}
}