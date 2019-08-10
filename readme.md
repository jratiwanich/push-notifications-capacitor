#Push Notification App for Firebase - iOS and Android

1) Install Capacitor

npm install --save @capacitor/core @capacitor/cli
npx cap init
npm run build
npx cap add ios
npx cap add android

2) Install Plugins

ionic cordova plugin add phonegap-plugin-push
npm install @ionic-native/push
//npm install phonegap-plugin-push --save
ionic cordova plugin add cordova-support-google-services --save


3) Sync plugins with native
npx cap sync

Follow this article:
https://capacitor.ionicframework.com/docs/guides/push-notifications-firebase/
