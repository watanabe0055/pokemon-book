import { getFavoritePokemon } from "@/app/lib/fetch/favorite";
import { getUserToken } from "@/app/lib/fetch/user";

const useModel = async () => {
	const { session } = await getUserToken();
	const pokemon = session ? await getFavoritePokemon(session.access_token) : {};

	return { pokemon };
};

export default useModel;
