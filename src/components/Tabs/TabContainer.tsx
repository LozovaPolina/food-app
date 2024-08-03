import { createContext, useContext, useState, type ReactNode } from "react";
import TabItem from "./TabItem.tsx";
import TabHeader from "./Header/TabHeader.tsx";
import TabHeaderItem from "./Header/TabHeaderItem.tsx";
import TabDescr from "./TabDescr.tsx";
import TabHeaderItemWrapper from "./Header/TabHeaderItemWrapper.tsx";

const TabsContext = createContext<contextTab>({
  activeTabId: 0,
  showActiveTab: (id) => {},
});

export function useTabsContext(): contextTab {
  const ctx = useContext(TabsContext);

  if (!ctx) {
    throw new Error(
      "Tabs-related components must be wrapped by <TabsContainer>"
    );
  }
  return ctx;
}

type TabProps = {
  children: ReactNode;
  className: string;
};
type contextTab = {
  activeTabId: number;
  showActiveTab: (id: number) => void;
};

export default function TabsContainer({ children, className }: TabProps) {
  const [openTadId, setOpenTabId] = useState<number>(1);

  function showActiveTab(id: number) {
    setOpenTabId(id);
  }

  const contextValue: contextTab = {
    activeTabId: openTadId,
    showActiveTab,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}
TabsContainer.Item = TabItem;
TabsContainer.Header = TabHeader;
TabsContainer.HeaderItem = TabHeaderItem;
TabsContainer.ItemDescr = TabDescr;
TabsContainer.HeaderItemWrapper = TabHeaderItemWrapper;
