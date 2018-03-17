'use strict';
importScripts('sw-toolbox.js'); 
toolbox.precache(["index.php", "admin_addbranch.php", "admin_addbranch_success.php", "admin_addmystery.php", "admin_addmystery_success.php", "admin_adduser.php", "admin_adduser_success.php", "admin_home.php", "admin_transfer_success.php", "admin_transferos.php", "admin_viewbranch.php", "admin_viewbranchinfo.php", "admin_viewmystery.php", "admin_viewuser.php", "booking_date.php", "booking_info.php", "booking_success.php", "booking_summary.php", "reg_addgk.php", "reg_addgk_success.php", "reg_currentplayers.php", "reg_groupdetails.php", "reg_groupdetailsdone.php", "reg_home.php", "reg_listofgames.php", "reg_listofongoinggames.php", "reg_ocr.php", "reg_ocrconfirm.php", "reg_ocrplayerdetails.php", "reg_payment.php", "reg_playerdetails.php", "reg_postgame.php", "reg_postgamedone.php", "reg_postgameitemsfree.php", "reg_postgameitemssold.php", "reg_reports.php", "reg_reports_cancelledbks.php", "reg_reports_totalbks.php", "reg_reports_totalbksbranch.php", "reg_reports_totalbksmystery.php", "reg_reports_voucherbks.php", "reg_terms.php", "reg_viewgame.php", "reg_viewpostgame.php"]); 
toolbox.router.get('/images/*', '/css/*', '/javascript/*', toolbox.cacheFirst); 
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});
toolbox.router.get(/googleapis/, toolbox.fastest);

self.toolbox.router.get('/css', self.toolbox.fastest, {
  origin: /fonts\.googleapis\.com/,
  cache: {
    name: 'dynamic-vendor-cache-v1',
    maxEntries: 5
  }
});