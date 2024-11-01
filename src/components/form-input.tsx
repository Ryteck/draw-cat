import type { ChangeEventHandler, FC } from "react";
import { InputComponent } from "./input";

interface Props {
	label: string;
	name: string;
	placeholder: string;
	type?: string;
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	error?: string;
}

export const FormInputComponent: FC<Props> = ({
	label,
	name,
	placeholder,
	type,
	value,
	onChange,
	error,
}) => (
	<div className="flex flex-col gap-2">
		<p className="font-bold">{label}</p>

		{error && <p className="text-sm text-orange-500">{error}</p>}

		<InputComponent
			name={name}
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
			data-has-error={error !== undefined}
		/>
	</div>
);
