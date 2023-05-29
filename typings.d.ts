export interface createUser {
	password: string;
	number: string;
	ward: string;
	gender: string;
	role: string;
	fullName: string;
	email: string;
	// image: string;
	confirmPassword: string;
}

export interface loginUser {
	number: number;
	password: string;
}
