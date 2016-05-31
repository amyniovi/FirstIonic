# First Ionic
This is just a test chat application using Ionic

# Installation
For this app you ll need :

install Node.js (package manager -npm) :
go to: nodejs.org

After getting Node install Ionic:
```npm install ionic -g```

Install Cordova:
```npm install cordova -g```

Then go inside app folder:
```
C:/FirstIonic/> ionic platform add android ( or ionic platform add ios)
C:/FirstIonic/> ionic build android   ( ionic build ios)
C:/FirstIonic/> ionic emulate android
```
That adds cordova android and does a local android build then emulates the app in mobile env.

that will also  install the plugins

Keyboard-2.0.1 and statusbar etc=

To run app on browser (quicker)

you go inside the folder (FirstIonic folder)

```
C:/FirstIonic>ionic serve
```

(That doesnt work for me all the time, I run straight from webstorm) but it looks like crap cant get it to look like a
mobile app without the ionic stuff)