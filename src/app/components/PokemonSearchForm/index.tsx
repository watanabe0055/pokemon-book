type Props = {
	handleSubmit: (formData: FormData) => Promise<void>;
	loading: boolean;
};

const PokemonSearchForm = ({ handleSubmit, loading }: Props) => {
	return (
		<form action={handleSubmit} className="space-y-4">
			<div className="relative">
				<label htmlFor="pokemon-search" className="sr-only">
					ポケモンの名前またはID
				</label>
				<input
					type="text"
					id="pokemon-search"
					name="query"
					placeholder="ピカチュウ"
					className="w-full px-4 py-2 transition-colors border-2 border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
					required
				/>
				<button
					type="submit"
					className="absolute px-4 py-1 text-white transition-colors transform -translate-y-1/2 bg-purple-500 rounded-full right-2 top-1/2 hover:bg-purple-600"
					disabled={loading}
				>
					{loading ? "Searching..." : "Search"}
				</button>
			</div>
		</form>
	);
};

export default PokemonSearchForm;
