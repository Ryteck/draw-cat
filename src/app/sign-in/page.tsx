"use client";

import { signInAction } from "@/actions/sign-in";
import { FormInputComponent } from "@/components/form-input";
import Form from "next/form";
import { useActionState, useState } from "react";

export default function Page() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [state, action, isPending] = useActionState(signInAction, undefined);

	return (
		<Form
			action={action}
			className="mx-auto flex flex-col gap-8 bg-neutral-900 px-16 py-8 rounded-xl"
		>
			<h1 className="w-96 text-4xl font-bold text-center">Sign in</h1>

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

			<button
				type="submit"
				className="bg-rose-900 hover:bg-rose-800 py-2 px-8 rounded-md"
				disabled={isPending}
			>
				Enter now
			</button>
		</Form>
	);
}
