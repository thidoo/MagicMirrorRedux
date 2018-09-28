# MagicMirrorRedux

This is a React project that uses Redux as a state management framework. 
It is a web server that runs on localhost:3000 that displays information such as current date time, current and weekly weather forecast, daily quote and cryptocurrency exchange rate.

This is the software implementation of a "Magic Mirror" where a two-way mirror is placed on top of a display monitor, so that the mirror will act as a mirror but at the same time the user can see information displayed on the mirror! :D

[Michael Teeuw's Blog](http://michaelteeuw.nl/post/84026273526/and-there-it-is-the-end-result-of-the-magic) is a great resource to see how such a project would work.

-----------

## RUNNING PROJECT

1. Set up Raspbian on your Raspberry Pi

2. Clone this repo
   Install python and RPi.GPIO on your Pi 

3. Make Chromium start up as full-screen when Raspberry Pi boots up by modifying your `/home/pi/.config/lxsession/LXDE-pi/autostart` to this:

   ```
   @lxpanel --profile LXDE-pi
   @pcmanfm --desktop --profile LXDE-pi
   #@xscreensaver -no-splash
   @point-rpi
   
   @/usr/bin/chromium-browser  --start-maximized --kiosk http://localhost:3000/
   @unclutter
   @xset s off
   @xset s noblank
   @xset -dpms
   ```

4. SSH into your Raspberry Pi:
   - Find out the ip address of your Raspberry Pi by typing in terminal `sudo nano ifconfig`
   - The ipaddress of the pi should be listed in the `wlan0` section
   
   * Notes:
   - I assigned my Raspberry Pi a static ipAddress so that I don't have to fish for it every time I want to ssh into the pi.
   - This might cause DNS issues when downloading files from terminal, so download everything you need via terminal before assigning the pi a static ipAddress if you wish to avoid headache later on

5. Build the docker image. This only needs to be done once, and the image should remain on the pi for future login sessions:
   ```
   docker build -t mirror-app .
   ```
6. Run the following two scripts:

   ```
   # Run docker container. This might take a while
   ./start-docker-container.sh
   
   # Once the container is up and running, click reload on Chromium to load the web app at localhost:3000

   # Terminate the hot-loading react app, the web app should still run as expected in Chromium
   
   # Start the motion sensor
   python motion-sensor.py
   ```
