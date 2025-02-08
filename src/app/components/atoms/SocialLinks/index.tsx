import { Github } from "lucide-react";

const GITHUB_REPO_URL = "https://github.com/watanabe0055/pokemon-book";

const SocialLinks: React.FC = () => (
	<div className="flex space-x-4">
		<a
			href={GITHUB_REPO_URL}
			aria-label="GitHubでプロジェクトを見る"
			target="_blank"
			rel="noopener noreferrer"
			className="text-gray-400 transition-colors hover:text-indigo-600"
		>
			<Github className="w-5 h-5" />
		</a>
	</div>
);

export default SocialLinks;
