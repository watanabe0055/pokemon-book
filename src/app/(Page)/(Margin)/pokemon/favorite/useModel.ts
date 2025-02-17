import { getFavoritePokemon } from "@/app/lib/fetch/favorite";
import { getServerUserToken } from "@/app/lib/fetch/user";

const useModel = async () => {
	const { session } = await getServerUserToken();
	const pokemon = session
		? await getFavoritePokemon(session.access_token)
		: { message: "", data: [] };

	return { pokemon };
};

export default useModel;
