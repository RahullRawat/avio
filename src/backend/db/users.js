import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balika",
		username: "adarshbalika",
		password: "adarshBalika123",
		bio: "I am first user",
		website: "https://adarshbalika.netlify.app/",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Guest",
		lastName: "User",
		username: "Guestuser",
		password: "GuestUser123",
		bio: "I am second user",
		website: "https://adarshbalika.netlify.app/",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
