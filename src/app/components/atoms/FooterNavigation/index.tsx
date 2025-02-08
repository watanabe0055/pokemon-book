import LinkItemList from "../LinkItemList";
import { Navigation } from "./variants";

type Props = {
  isSpView?: boolean;
};

const FooterNavigation = ({ isSpView }: Props) => {
  const className = Navigation({ isSpView });

  return (
    <nav className={className}>
      <LinkItemList />
    </nav>
  );
};

export default FooterNavigation;
