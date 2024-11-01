import Repository from "@/domain/Repository";
import UserEntity from "@/entities/User";
import type { User } from "@prisma/client";

export default class UserRepository extends Repository {
	public async findByEmail(email: string): Promise<null | UserEntity> {
		const userProps = await this.prismaClient.user.findUnique({
			where: { email },
		});

		if (userProps === null) return null;
		return new UserEntity(userProps);
	}

	public async store(data: Omit<User, "id">): Promise<UserEntity> {
		const userProps = await this.prismaClient.user.create({ data });
		return new UserEntity(userProps);
	}
}
