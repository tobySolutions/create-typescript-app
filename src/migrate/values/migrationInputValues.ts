import { PrefillPrompter } from "../../shared/PrefillPrompter.js";
import { InputValues } from "../../shared/inputs.js";
import { MigrationInputValues } from "./types.js";

export async function augmentWithMigrationValues(
	values: InputValues,
): Promise<MigrationInputValues> {
	const prompter = new PrefillPrompter();

	return {
		...values,
		author: await prompter.getPrefillOrPromptedValue(
			"author",
			values.author,
			"What author will be used for the owner?",
		),
		email: await prompter.getPrefillOrPromptedValue(
			"email",
			values.email,
			"What email will be used for the owner?",
		),
	};
}