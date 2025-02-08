import LinkItemList from "../LinkItemList";
import { Navigation } from "./variants";

type Props = {
	isSpView?: boolean;
	isLogin?: boolean;
};

const FooterNavigation = ({ isSpView, isLogin = false }: Props) => {
	const className = Navigation({ isSpView });

	return (
		<nav className={className}>
			<LinkItemList isLogin={isLogin} />
		</nav>
	);
};

export default FooterNavigation;
