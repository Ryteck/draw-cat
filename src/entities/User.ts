import Entity from "@/domain/Entity";
import type { User } from "@prisma/client";

export default class UserEntity extends Entity<User> {
	public validatePassword(password: string): boolean {
		return password === this.props.password;
	}
}
