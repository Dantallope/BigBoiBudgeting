import { gql } from "apollo-server-express"

export const SIGN_UP = gql`
	mutation SignUp(
		$username: String!,
		$email: String!,
		$password: String!
	) {
		signUp(
			username: $username,
			email: $email,
			password: $password
		) {
			user {
				_id
				username
				email
			}
			token
		}
	}
`

export const SIGN_IN = gql`
	mutation SignIn(
		$email: String!,
		$password: String!
	) {
		signIn(
			email: $email,
			password: $password
		) {
			user {
				_id
				email
				username
			}
			token
		}
	}
`