

export function getRequiredEnvVar(name: string): string {
	const value = Deno.env.get(name);
	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}
	return value;
}