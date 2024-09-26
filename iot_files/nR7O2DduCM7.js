;/*FB_PKG_DELIM*/

__d("WAWebCompression",["JSResourceForInteraction","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){function a(a){return h.apply(this,arguments)}function h(){h=b("asyncToGeneratorRuntime").asyncToGenerator(function*(b){b===void 0&&(b={});var a=(yield c("JSResourceForInteraction")("WAGzip").__setRef("WAWebCompression").load());return a.createDeflate(b)});return h.apply(this,arguments)}g.createDeflate=a}),98);
__d("WAWebStatusHeaderDropdown.react",["fbt","WAWebDropdown.react","WAWebDropdownItem.react","react"],(function(a,b,c,d,e,f,g,h){var i,j=i||c("react");b=j.forwardRef(a);function a(a,b){a=babelHelpers["extends"]({},a);a=a.onOpenStatusPrivacySettingDrawer;return j.jsx(d("WAWebDropdown.react").Dropdown,{ref:b,type:d("WAWebDropdown.react").MenuType.DropdownMenu,flipOnRTL:!0,dirX:d("WAWebDropdown.react").DirX.LEFT,children:j.jsx(d("WAWebDropdownItem.react").DropdownItem,{testid:void 0,action:a,children:h._("__JHASH__ZS_44bHTLq1__JHASH__")})},"StatusDrawerHeader")}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),226);
__d("WAWebStatusDrawer.react",["fbt","WAWebCmd","WAWebDrawer.react","WAWebDrawerBody.react","WAWebDrawerHeader.react","WAWebDrawerSection.react","WAWebDropdown.react","WAWebKeyboardHotKeys.react","WAWebMenuBar.react","WAWebMenuIcon","WAWebPlusIcon","WAWebStatusCollection","WAWebStatusGatingUtils","WAWebStatusHeaderDropdown.react","WAWebStatusList.react","WAWebStatusListHeader.react","WAWebStatusPostingDropdown.react","WAWebTabOrder","WAWebUIRefreshGatingUtils","WAWebUserPrefsGeneral","react","useLazyRef"],(function(a,b,c,d,e,f,g,h){var i,j;b=j||d("react");var k=i||(i=c("react")),l=b.useEffect,m=b.useRef;e=k.forwardRef(a);function a(a,b){var e=a.onBack;a=a.onOpenStatusPrivacySettingDrawer;var f=m(),g=c("useLazyRef")(function(){return Math.round(Math.random()*1e9)}),i=m(null);l(function(){d("WAWebUserPrefsGeneral").setLastStatusUsage(),g.current!=null&&d("WAWebStatusCollection").StatusCollection.logMetrics({type:"session",sessionId:g.current}),d("WAWebCmd").Cmd.onStatusViewerOpen()},[]);i=d("WAWebStatusGatingUtils").isStatusPostingEnabled()?k.jsx(d("WAWebMenuBar.react").MenuBarItem,{testid:void 0,tabOrder:d("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,icon:k.jsx(d("WAWebPlusIcon").PlusIcon,{}),ref:i,title:h._("__JHASH__0VqdTytOVwK__JHASH__"),children:k.jsx(c("WAWebStatusPostingDropdown.react"),{dirX:d("WAWebDropdown.react").DirX.LEFT,type:d("WAWebDropdown.react").MenuType.DropdownMenu})},"menu-bar-add-status"):null;a=d("WAWebStatusGatingUtils").isStatusPostingEnabled()?k.jsx(d("WAWebMenuBar.react").MenuBarItem,{testid:void 0,icon:k.jsx(d("WAWebMenuIcon").MenuIcon,{}),title:h._("__JHASH__hbJqSBhhISB__JHASH__"),children:k.jsx(c("WAWebStatusHeaderDropdown.react"),{onOpenStatusPrivacySettingDrawer:a})},"status-menu"):null;var j=h._("__JHASH__oiqU7Pn0mhn__JHASH__"),n=h._("__JHASH__MaujiH2BDGu__JHASH__"),o=k.jsx(d("WAWebStatusListHeader.react").StatusListHeader,{sessionIdRef:g}),p=k.jsx(d("WAWebStatusList.react").StatusList,{sessionIdRef:g});d("WAWebUIRefreshGatingUtils").uiRefreshM1Enabled()&&(o=k.jsx(c("WAWebDrawerSection.react"),{animation:!1,children:k.jsx(d("WAWebStatusListHeader.react").StatusListHeader,{sessionIdRef:g})}),p=k.jsx(c("WAWebDrawerSection.react"),{theme:"full-height",animation:!1,children:k.jsx(d("WAWebStatusList.react").StatusList,{sessionIdRef:g})}));return k.jsx(d("WAWebKeyboardHotKeys.react").HotKeys,{ref:f,"aria-label":n,"data-testid":void 0,children:k.jsxs(c("WAWebDrawer.react"),{ref:b,theme:d("WAWebUIRefreshGatingUtils").uiRefreshM1Enabled()?"striped":"white-bg",testid:void 0,tsNavigationData:{surface:"status"},children:[k.jsx(d("WAWebDrawerHeader.react").DrawerHeader,{title:j,type:d("WAWebUIRefreshGatingUtils").uiRefreshM1Enabled()?d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB:d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.LARGE,menu:[i,a],onBack:e}),k.jsxs(c("WAWebDrawerBody.react"),{children:[o,p]})]})})}a.displayName=a.name+" [from "+f.id+"]";b=e;g["default"]=b}),226);
__d("WAWebStatusDrawerFlow.react",["$InternalEnum","WAWebDrawerManager","WAWebPrivacySettingsStatusPostDrawer.react","WAWebStatusDrawer.react","react","useWAWebFlow"],(function(a,b,c,d,e,f,g){var h,i=h||c("react"),j=b("$InternalEnum").Mirrored(["StatusDrawer","StatusPrivacySettingDrawer"]);function a(a){var b=a.onBack;a=function(){b!=null?b():d("WAWebDrawerManager").DrawerManager.closeDrawerLeft()};var e=function(){h.pop()},f=d("useWAWebFlow").useFlow(j.StatusDrawer,{transitions:d("useWAWebFlow").FlowTransitions.DrawerRight,onEnd:a}),g=f[0],h=f[1];if(h.step==null)return null;var k;switch(h.step){case j.StatusDrawer:k=i.jsx(c("WAWebStatusDrawer.react"),{onBack:a,onOpenStatusPrivacySettingDrawer:function(){h.push(j.StatusPrivacySettingDrawer)}});break;case j.StatusPrivacySettingDrawer:k=i.jsx(c("WAWebPrivacySettingsStatusPostDrawer.react"),{onClose:e});break}return i.jsx(g,{flow:h,children:k})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);