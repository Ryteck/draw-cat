"use server";

import UserRepository from "@/repositories/User";
import { Prisma } from "@prisma/client";
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
	try {
		const schemaResponse = formSchema.safeParse({
			displayName: formData.get("displayName"),
			email: formData.get("email"),
			password: formData.get("password"),
			confirmedPassword: formData.get("confirmedPassword"),
		});

		if (!schemaResponse.success) return schemaResponse.error.errors;

		const userRepository = new UserRepository();

		const userEntity = await userRepository.store({
			displayName: schemaResponse.data.displayName,
			email: schemaResponse.data.email,
			password: schemaResponse.data.password,
		});

		console.log(userEntity.props);

		redirect("/");
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// https://www.prisma.io/docs/orm/reference/error-reference#p2002
			if (error.code === "P2002") {
				const duplicatedFields = z.string().array().parse(error.meta?.target);

				if (duplicatedFields[0] === "email")
					return [
						{
							code: z.ZodIssueCode.custom,
							message: "This email is already in use by another user",
							path: ["email"],
						},
					];
			}
		}

		throw error;
	}
}
