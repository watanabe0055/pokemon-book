import { LINK_LIST, Link, ROUTES } from "@/app/constants";
import NextLink from "next/link";

const filterLinks = (links: Link[], isLoggedIn: boolean): Link[] => {
	const excludedPath = isLoggedIn ? ROUTES.LOGIN : ROUTES.PRIVATE;
	return links.filter((item) => item.href !== excludedPath);
};

const NavigationLink = ({ href, text }: Link) => (
	<NextLink href={href} className="transition-colors hover:text-indigo-600">
		{text}
	</NextLink>
);

type Props = {
	isLogin: boolean;
};
const LinkItemList = ({ isLogin }: Props) => {
	const filteredLinkList = filterLinks(LINK_LIST, isLogin);

	return (
		<>
			{filteredLinkList.map((item) => (
				<NavigationLink key={item.href} {...item} />
			))}
		</>
	);
};
export default LinkItemList;
