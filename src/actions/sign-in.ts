"use server";

import UserRepository from "@/repositories/User";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1, "Required"),
});

type FormState = undefined | z.ZodIssue[];

export async function signInAction(
	formState: FormState,
	formData: FormData,
): Promise<FormState> {
	const schemaResponse = formSchema.safeParse({
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!schemaResponse.success) return schemaResponse.error.errors;

	const userRepository = new UserRepository();

	const userEntity = await userRepository.findByEmail(
		schemaResponse.data.email,
	);

	if (!userEntity?.validatePassword(schemaResponse.data.password))
		return [
			{
				code: z.ZodIssueCode.custom,
				message: "Wrong email or password",
				path: ["email", "password"],
			},
		];

	redirect("/");
}
