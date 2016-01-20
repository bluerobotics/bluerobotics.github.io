---
layout: default
title: Celsius Temperature Sensor Documentation
order: 1
nav:
- Introduction: introduction
- - Safety: safety
- - Quick Start: quick-start
- Specifications: specifications
- - Schematic: schematic
- - 2D Drawing: d-drawing
- - Specification Table: specification-table
- - 3D Model: d-model
- Installation: installation
- Example Code: example-code
- - Arduino: arduino

store-links:
- Celsius: #

manual-links:
- Bar 30 Pressure Sensor: /bar30
---

@Todo:

- Update schematic
- Add picture of labeled DF13


#Picture of Celsius Temperature Sensor

#Introduction

The Celsius Temperature Sensor is a high-accuracy, fast time-response subsea temperature sensor with I2C interface. It is sealed in a high-pressure bulkhead compatible with the Blue Robotics watertight enclosures or any 10mm hole.

##Quick Start

1. Download [TSYS01 Arduino Library](https://github.com/bluerobotics/BlueRobotics_TSYS01_Library).
2. Install software such as the [Example Code](#example-code) to your microcontroller.
3. Connect the DF13 or bare wires to the appropriate microcontroller pins (green: SCL, white: SDA, red: +3.3-5.5V, black: ground). That's it!

#Specifications

##Schematic

The [EagleCAD files](https://github.com/bluerobotics/Celsius-Temperature-Sensor) for the schematic and board are available on our [GitHub page.](https://github.com/bluerobotics)

[<img src="/celsius/cad/Celsius-Temperature-Sensor.png" class="img-responsive" style="max-width:300px" />](/celsius/cad/Celsius-Temperature-Sensor.png)

[Celsius-Temperature-Sensor.png](/celsius/cad/Celsius-Temperature-Sensor.png)

##2D Drawing

<img src="/celsius/cad/CELSIUS-TEMPERATURE-SENSOR-ASSEMBLY-X1.png" class="img-responsive" style="max-width:900px" />

##Specification Table

For further information please see the [TSYS01 Data Sheet.](http://meas-spec.com/downloads/TSYS01_Digital_Temperature_Sensor.pdf)

|      **Electrical**       |
| ------------- | --------- |
| **Item** | **Condition** | **Value** |
| Supply Voltage| -- | 3.3 to 5.5 volts |
| I<sup>2</sup>C Logic Voltage (SDA and SCL) | -- | 3.3 volts |
| Standby Supply Current | at 25&deg;C | 1.4 &mu;A |
| Peak Current   | -- | 1.4 mA   |
| ------------- | --------- |

|            **Temperature**            			 |
| ------------- | ------------- | ------------- |
| **Item** | **Condition** | **Value** |
| Operating Temperature | -- | -40 to +125&deg;C |
|Storage Temperature | -- | -55 to +150&deg;C                        |
|Absolute Accuracy   | From -5 to 50&deg;C | +/- 0.1&deg;C      |
|                    | From -40 to 125&deg;C |  +/- 0.5&deg;C   |
|  **Physical**  |
| Wire Colors | Green - I<sup>2</sup>C Clock (SCL) |
|             | White - I<sup>2</sup>C Data (SDA)  |
|             | Red - Positive (3.3-5.5V) |
|             | Black - Ground          |
| ------------|-------------------------|
| Overall Length | 56.1 mm |
| Thread Size    | M10x1.5 20 mm threaded |
| Recommended Through Hole Size | 10-11 mm |
| Wrench Flats | 16 mm |

##3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Celsius Temperature Sensor**																						|
| --------------------------------------------------------------------------------------------- |
| Celsius Temperature Sensor    | [CELSIUS-TEMPERATURE-SENSOR-ASSEMBLY-X1](cad/CELSIUS-TEMPERATURE-SENSOR-ASSEMBLY-X1.zip) |
| Celsius Penetrator Nut		 | [PENETRATOR-M-NUT-10-A-R2.zip](http://www.bluerobotics.com/models/PENETRATOR-M-NUT-10-A-R2.zip)|																								|

#Installation

##Step 1: Lubricating the O-ring

Use a small amount of silicone grease on the O-ring for lubrication and place it in the groove of the Celsius Temperature Sensor. 

##Step 2: Installation

Install the Celsius Temperature Sensor into an endcap and tighten by hand or with a wrench.

#Example Code

##Arduino

This example uses the [TSYS01 Arduino Library](https://github.com/bluerobotics/TSYS01) with the connected sensor. The example reads the sensor and prints the resulting values to the serial terminal.

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

You can find the [TSYS01 Arduino Library](https://github.com/bluerobotics/TSYS01) on our [GitHub page.](https://github.com/bluerobotics)

~~~~~~~~~~ 
#include <Wire.h> //I2C

//     ***TSYS01***
#define TSYS01Address 0x77  //address left shifted by arduino as required to match datasheet
#define TSYS01Reset 0x1E //initiates reset
#define TSYS01StartReg 0x48 //commands sensor to begin measurement / output calculation
#define TSYS01TempReg 0x00 //requests most recent output from measurement
typedef enum KPoly_E //structure to hold calibration values from temperature sensor registers
{
  K4 = 0,
  K3,
  K2,
  K1,
  K0
}
KPoly_T;
long tempReading = 0;
float finalTempC = 0.0000;
uint16_t coefficent[5];
float Temp;
byte MSB;//hol
byte OSB;
byte LSB;
unsigned long time;


void setup() {
  Serial.begin(9600);
  Wire.begin();
  TSYS01INIT();
  getCoefs();

}

void loop() 
{
  TSYS01GetTemp();

  //TSYS01:
  //Serial.print("Temperature: ");
    time = millis();
    Serial.print(time);
    Serial.print(",");
    Serial.println(Temp);
     // Serial.print((char)176); // Degree symbol.
 // Serial.println('C');

  delay(50);
}

void TSYS01INIT() 
{
  Wire.beginTransmission(TSYS01Address);
  Wire.write(0x1E);
  Wire.endTransmission();
  delay(50);
}


void getCoefs(void)  //gathers calibration coefficients to array
{  
  for (uint8_t n =0; n<5;n++)
  {
    Wire.beginTransmission(TSYS01Address);
    Wire.write(0xA2+(n*2));
    Wire.endTransmission();
    Wire.requestFrom(TSYS01Address,2);
    uint8_t Ai = Wire.read();
    Serial.println(Ai);
    uint8_t Bi = Wire.read();
    Serial.println(Bi);
    uint16_t x = (uint16_t)Ai << 8;
    Serial.println(x);
    x+=Bi;
    Serial.println(x);
    coefficent[n] =x;   
  }
}


float scaleTemp_C(uint16_t rawAdc)
{

  float retVal = 
    (-2)* (float)coefficent[K4] * (float)pow(10,-21) * pow(rawAdc,4) + 
    4 * (float)coefficent[K3] * (float)pow(10,-16) * pow(rawAdc,3) +
    (-2) * (float)coefficent[K2] * (float)pow(10,-11) * pow(rawAdc,2) +
    1 * (float)coefficent[K1] * (float)pow(10,-6) * rawAdc +
    (-1.5) * (float)coefficent[K0] * (float)pow(10,-2);

  return retVal; 

}

void TSYS01GetTemp()
{
  Wire.beginTransmission(TSYS01Address);
  Wire.write(TSYS01StartReg); //Start measurement process
  Wire.endTransmission();
  delay(10);

  Wire.beginTransmission(TSYS01Address);
  Wire.write(TSYS01TempReg); //Request measurement
  Wire.endTransmission();

  Wire.requestFrom(TSYS01Address,3); //read in 24 bit output
  MSB = Wire.read();
  OSB = Wire.read();
  LSB = Wire.read(); //not used but necessary if 24bit conversion method is found (shifts below return 24bit output / 256 per TSYS01 datasheet conversion equations

  Temp = scaleTemp_C((((unsigned long)MSB << 8) | ((unsigned long)OSB))); //convert and cast to Temp with scaling equation
}
~~~~~~~~~~~~~~~~
