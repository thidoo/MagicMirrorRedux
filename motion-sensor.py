import Rpi.GPIO as GPIO
import time
import subprocess

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)

GPIO.setup(11, GPIO.IN)  # Read output from PIR motion sensor to pin 11

while True: 
  if GPIO.input(11): # Motion detected
    timeWokenUp = time.time()
    subprocess.call("vcgencmd display_power 1")        # Turn screen on
  else:    
    while (timeWokenUp - time.time()) <= 60*1000:      # When no motion is detected, wait 1 min before turning screen off
    subprocess.call("vcgencmd display_power 0")        # Turn screen on
