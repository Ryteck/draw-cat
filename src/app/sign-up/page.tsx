"use client";

import { signUpAction } from "@/actions/sign-up";
import { FormInputComponent } from "@/components/form-input";
import Form from "next/form";
import { useActionState, useState } from "react";

export default function Page() {
	const [formData, setFormData] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmedPassword: "",
	});

	const [state, action, isPending] = useActionState(signUpAction, undefined);

	return (
		<Form
			action={action}
			className="mx-auto flex flex-col gap-8 bg-neutral-900 px-16 py-8 rounded-3xl"
		>
			<h1 className="w-96 text-4xl font-bold text-center">Sign up</h1>

			<FormInputComponent
				label="Your display name"
				name="displayName"
				placeholder="John Doe"
				value={formData.displayName}
				onChange={(e) =>
					setFormData({ ...formData, displayName: e.target.value })
				}
				error={
					state?.find(({ path }) => path.find((arg) => arg === "displayName"))
						?.message
				}
			/>

			<FormInputComponent
				label="Your email address"
				name="email"
				placeholder="john.doe@gmail.com"
				type="email"
				value={formData.email}
				onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				error={
					state?.find(({ path }) => path.find((arg) => arg === "email"))
						?.message
				}
			/>

			<FormInputComponent
				label="Your password"
				name="password"
				placeholder="********"
				type="password"
				value={formData.password}
				onChange={(e) => setFormData({ ...formData, password: e.target.value })}
				error={
					state?.find(({ path }) => path.find((arg) => arg === "password"))
						?.message
				}
			/>

			<FormInputComponent
				label="Confirm your password"
				name="confirmedPassword"
				placeholder="********"
				type="password"
				value={formData.confirmedPassword}
				onChange={(e) =>
					setFormData({ ...formData, confirmedPassword: e.target.value })
				}
				error={
					state?.find(({ path }) =>
						path.find((arg) => arg === "confirmedPassword"),
					)?.message
				}
			/>

			<button
				type="submit"
				className="bg-rose-900 hover:bg-rose-800 py-2 px-8 rounded-md"
				disabled={isPending}
			>
				Register now
			</button>
		</Form>
	);
}
