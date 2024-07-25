import { Outlet } from "react-router-dom";
import FirstHeader from "../Components/Header/FirstHeader/FirstHeader";
import Header from "../Components/Header/Header/Header";
import ConnectionLabelAlert from "../Components/Shared/MiniComponents/ConnectionLabelAlert/ConnectionLabelAlert";
import GlobalOverlay from "../Components/Shared/MiniComponents/GlobalOverlay/GlobalOverlay";
import ScrollToTop from "../Components/Shared/MiniComponents/ScrollToTop/ScrollToTop";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink";
import MobileNav from "../Components/Shared/MobileNav/MobileNav";
import WhatDoIDoButton from "../Components/Shared/MyTools/WhatDoIDo/WhatDoIDoButton/WhatDoIDoButton";
import WhatDoIDoMenu from "../Components/Shared/MyTools/WhatDoIDo/WhatDoIDoMenu/WhatDoIDoMenu";
import ToastAlert from "../Components/Shared/PopUps/ToastAlert/ToastAlert";
import ToastConfirm from "../Components/Shared/PopUps/ToastConfirm/ToastConfirm";
import useCurrentSkipLinkId from "../Hooks/App/useCurrentSkipLinkId";
import useOnlineStatus from "../Hooks/Helper/useOnlineStatus";

const RoutesLayout = () => {
  const skipLinkSectionId = useCurrentSkipLinkId();
  const isWebsiteOnline = useOnlineStatus();

  return (
    <div className="App" tabIndex="-1">
      <SkipContentLink scrollTo={skipLinkSectionId} />
      <WhatDoIDoButton />
      <WhatDoIDoMenu />
      <FirstHeader />
      <Header />
      <MobileNav />
      <GlobalOverlay />
      <ScrollToTop />
      <Outlet />
      <ConnectionLabelAlert isOnline={isWebsiteOnline} />
      <ToastAlert />
      <ToastConfirm />
    </div>
  );
};
export default RoutesLayout;
