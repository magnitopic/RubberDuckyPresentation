# RubberDuckyPresentation

Proyect with an intent on making

# Hardware

I am using the DigiSpark rubber ducky.

![rubberDucky](./rubberDucky.png)

# Software

## Drivers and installs

Three things:

### Python

Install with winget (Windows):

```bash
winget install -e --id Python.Python
```

Install with apt:

```bash
sudo apt install python3
```

You can also go to [the Python website](https://www.python.org/downloads/)

And your gonna need to dowload [this python scipt.]()

### Arduino IDE

Install with winget (Windows):

```bash
winget install -e --id Arduino.Arduino
```

Other OS and more options in [Arduino's software page](https://www.arduino.cc/en/software)

**After install** go to _File &#8594; Preferences &#8594; Additional Boards Manager URLs_ and paste in the following text:

```
http://digistump.com/package_digistump_index.json
```

Now onto _Tools &#8594; Board &#8594; Boards Manager_. Look for and install `digistump AVR`

### DigiSpark drivers

We should have everything we need installed now. I case that things don't work as intended we can install the drivers from these links:

[Windows(1.57MB)](https://drive.google.com/file/d/1trMhivBkRLfLepX1MOgFbzdDISkm_lRC/view?usp=sharing)

SHA256 CheckSum: 14F575FFBAF2E9BA6BA05B75426E90D7010E4650E1E27AACC2EF3F688AA4066E

[MacOS(162MB)](https://drive.google.com/file/d/1jSCyE4HMdNh-onag71Ol8xjYDYEx1-rp/view?usp=sharing)

SHA256 CheckSum: 84BE3FC0BE0C18563CB2B5E53971DA6AA83E20F1DE37E6DEBAE3B55F8B0EDBB3

**Note:** I could not find Linux drivers, it might be simplly because Linux does not need them or beacuse they don't exist

## Rubber Ducky scripts

## Web Server
