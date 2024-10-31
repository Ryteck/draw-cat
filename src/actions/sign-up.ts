"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z
	.object({
		displayName: z.string().trim().min(1, "Required"),
		email: z.string().email(),
		password: z.string().min(8),
		confirmedPassword: z.string().min(8),
	})
	.transform((arg, ctx) => {
		const { displayName, email, password, confirmedPassword } = arg;

		if (password !== confirmedPassword) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Passwords do not match",
				path: ["password", "confirmedPassword"],
			});

			return z.NEVER;
		}

		return { displayName, email, password };
	});

type FormState = undefined | z.ZodIssue[];

export async function signUpAction(
	formState: FormState,
	formData: FormData,
): Promise<FormState> {
	const schemaResponse = formSchema.safeParse({
		displayName: formData.get("displayName"),
		email: formData.get("email"),
		password: formData.get("password"),
		confirmedPassword: formData.get("confirmedPassword"),
	});

	if (!schemaResponse.success) return schemaResponse.error.errors;

	console.log(schemaResponse.data);

	redirect("/");
}
