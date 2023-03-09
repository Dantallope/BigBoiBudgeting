import { gql } from "@apollo/client"

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
            password
			budget
		}
	}
`