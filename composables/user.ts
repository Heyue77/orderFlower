export function useUser() {
	const user = useState(
		"user",
		() => {
			return {};
		}
	);

	const setUser = (current) => {
		user.value = current;
	};

	return {
		user,
		setUser
	};
}
