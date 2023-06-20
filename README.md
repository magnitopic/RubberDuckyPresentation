# RubberDuckyPresentation

School project which showcases what is a Rubber Ducky and what can be done with it.

For the project presentation at school, we wanted to showcase two different uses for the Rubber Ducky, firs was the _Intro.py_ script, which opened a YouTube window with _Never Going To Give You Up_ by Rick Astley, 8 seconds later closed it and opened the PowerPoint presentation we had prepared. We wanted to show the fun and harmless ways the technology could be used.

After the presentation, we changed the script, live for our classmates to see to _DNSpoisoning.py_, we then plugged in the Rubber Ducky to a virtual machine.

The script adds a line of text to the hosts file in `C:/Windows/System32/drivers/etc/hosts`, this file resolves domain names before asking your DNS server, and we added a line that made typing google.com or www.google.com resolve to a different IP, it was our own server running the NodeJS web server. Witch meant that going to the domain would show the fake Google login form we made.

Like the one deployed in [this page.](https://cyberseguridadbrais.herokuapp.com/) (Don't fill in form with real data)

## Hardware

I am using the DigiSpark Rubber Ducky.

![rubberDucky](./Pictures/rubberDucky.png)

# Drivers and installs

Three things:

## 1. Python

Install with winget (Windows):

```powershell
winget install -e --id Python.Python
```

Install with apt:

```bash
sudo apt install python3
```

You can also go to [the Python download page](https://www.python.org/downloads/)

And **you have to** download [this python script.](https://github.com/toxydose/Duckyspark/blob/master/Duckyspark_translator.py)

## 2. Arduino IDE

Install with winget (Windows):

```powershell
winget install -e --id Arduino.Arduino
```

Other OS and more options in [Arduino's software page](https://www.arduino.cc/en/software)

**After install** go to _File &#8594; Preferences &#8594; Additional Boards Manager URLs_ and paste in the following text:

```
http://digistump.com/package_digistump_index.json
```

Now on to _Tools &#8594; Board &#8594; Boards Manager_. Look for and install `digistump AVR`

## 3. DigiSpark drivers

We should have everything we need installed now. I case things don't work as intended you can install the drivers from these links:

[Windows(1.57MB)](https://github.com/magnitopic/RubberDuckyPresentation/raw/master/Drivers/DigisparkDrivers_2.0a4.zip)

SHA256 CheckSum: 14F575FFBAF2E9BA6BA05B75426E90D7010E4650E1E27AACC2EF3F688AA4066E

[MacOS(162MB)](https://github.com/magnitopic/RubberDuckyPresentation/raw/master/Drivers/arduino-1.8.13-macosx.zip)

SHA256 CheckSum: 84BE3FC0BE0C18563CB2B5E53971DA6AA83E20F1DE37E6DEBAE3B55F8B0EDBB3

**Note:** I was not able find Linux drivers, it might be simply because Linux does not need them or because they don't exist

# Rubber Ducky scripts

Arduino code is uploaded to the Rubber Ducky, but since writing that code is complex, we simplify it by writing simple instructions instead. And then use the _Duckyspark_translator.py_ file to create the actual _.ino_ file we'll use.

Once we have a txt payload file written, we run the following command on out terminal:

```powershell
python3 Duckyspark_translator.py instructions.txt
```

The terminal should respond with a _Success!_ message.

Afterwards we can open the _digipayload.ino_ file it has created in the python script's folder, run it and follow its instructions.

After that your Rubber Ducky is ready to be used.

<img src="./Pictures/commands.png" alt="logIn" width="750"/>

## Instruction list

```
DELAY n &#8594; Waits n milliseconds

STRING text &#8594; Presses corresponding keys to that text

GRI r &#8594; Presses windows key along with whatever other keys you want. Ej: Win+r

Fx 11 &#8594; Presses function keys. Ej: F11

REPEAT n &#8594; Repeats the previous instruction n times
````

And here is a list of pretty self-explanatory instructions:

```
ENTER, SHIFT, ALT, CTRL, SPACE, ESC, TAB
```

You can also combine them, like if I wanted to do _Ctrl+Shift+Enter_ I'd wright _CTRL SHIFT ENTER_

**Note:** If your using function keys with another instruction you can just wright _F_ and the key. Ej: ALT F4

## Payload files in this proyect

There are two instruction files in this proyect:

-   **Intro.txt** &#8594; Just a fun script to begin our presentation, it rickrolls for 9 seconds, closes the browser and opened the presentation.
-   **DNSpoisoning.txt** &#8594; Main project file, it runs a cmd with administrative privileges witch it uses to insert a new line in the _hosts_ file, which will make typing google.com or www.google.com resolve to a different IP

## Other payloads

Take a look at [these other payloads.](https://github.com/hak5darren/USB-Rubber-Ducky/wiki/Payloads)

# Web Server

Made with NodeJS and using MongoDB, basic HTML and CSS for the frontend.

The page is made to look like a Google login, it has some notable differences with the original, but it looks convincing enough. Once a user completes the from and submits it, the entered data will be sent and stored in the MongoDB.

<img src="./Pictures/logIn.png" alt="logIn" width="420"/>
