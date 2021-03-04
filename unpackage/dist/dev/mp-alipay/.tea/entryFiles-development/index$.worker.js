if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/uni-transition/uni-transition?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup?hash=63f3d097e78ac04213190ce4a92c81860617f7b4');
require('../../node-modules/uview-ui/components/u-button/u-button?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup-message?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup-dialog?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/nav-bar/nav-bar?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/my-tree/my-tree?hash=7fed2b56cc219e218b66bedd4286b0788185f7a2');
require('../../components/my-calendar/my-calendar?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../pages/home/home?hash=5f16e9a960bd1224a44fcbe20a61b74619b08595');
require('../../pages/classification/classification?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my?hash=2a138dd508813e6db7bb02e9f27dbdc2bb712c6f');
require('../../pages/login/login?hash=2a138dd508813e6db7bb02e9f27dbdc2bb712c6f');
require('../../pages/test/test?hash=f5dda348bb2851a38c6b38179eeb812fa7739ed6');
require('../../pages_a/list/list?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages_a/form/form?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}