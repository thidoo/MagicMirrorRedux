import RPi.GPIO as GPIO
import time
import subprocess
import os
import signal
import sys

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

INPUT_PIN = 4
GPIO.setup(INPUT_PIN, GPIO.IN)  # Read output from PIR motion sensor to defined INPUT_PIN

WAIT_TIME = 10 # seconds
SCREEN_ON = 1
SCREEN_OFF = 0

def isScreenOn():
  p = subprocess.Popen(["vcgencmd", "display_power"], stdout=subprocess.PIPE)
  terminal_output = p.stdout.readline()
  isOn = "display_power=1" in terminal_output

  p.kill()

  return isOn

def isMotionDetected():
  return GPIO.input(INPUT_PIN)

def turnScreenOnOff(onOffSignal):
  screenCommandString = "vcgencmd display_power " + str(onOffSignal) + " >/dev/null"
  subprocess.call(screenCommandString, shell=True)       
 
# - if screen is already on:
#   --> No motion detected: start timer to turn screen off in 1 minute
#   --> Motion detected: do nothing
# 
# - if screen is already off:
#   --> Motion detected: turn screen on
#   --> No motion detected: do nothing
while True:
  
  if isScreenOn():
    startTime = time.time()
    while not isMotionDetected():
      if (time.time() - startTime) > WAIT_TIME:
        turnScreenOnOff(SCREEN_OFF)

  else:
    if isMotionDetected():
      turnScreenOnOff(SCREEN_ON)

                                                                                                           
