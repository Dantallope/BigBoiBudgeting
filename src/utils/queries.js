import { gql } from "apollo-server-express"

export const GET_USER = gql`
	query getUser(
		$username: String!
	) {
		user(
			username: $username
		) {
			_id
			username
			email
			budget
		}
	}
`