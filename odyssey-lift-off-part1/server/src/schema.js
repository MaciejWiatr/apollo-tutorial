const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		"Query to get tracks array for the homepage grid"
		tracksForHome: [Track!]!
	}

	"Track is a group of modules that teaches topic"
	type Track {
		id: ID!
		"Track's title"
		title: String!
		"Track's main author"
		author: Author!
		"Main illustration"
		thumbnail: String
		"Track's length "
		length: Int
		"Number of modules this track contains"
		modulesCount: Int
	}

	"Author of a track"
	type Author {
		id: ID!
		"Author's first and last name"
		name: String!
		"Authors profile pic url"
		photo: String
	}
`;

module.exports = typeDefs;
