import React from 'react';
interface TabBarTab {
    title: string;
    key: string;
}
declare const TabBar: React.FC<{
    tabs: TabBarTab[];
    onChange: any;
    active: any;
}>;
export default TabBar;
