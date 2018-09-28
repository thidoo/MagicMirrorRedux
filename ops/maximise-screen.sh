#!/bin/bash
@/usr/bin/chromium-browser --start-maximized --kiosk
 http://localhost:3000/

@unclutter
@xset s off
@xset s noblank
@xset -dpms
