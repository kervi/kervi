===============
Dynamic values
===============

Dynamic values is a core concept in the kervi framework as they are
used to flow the signals in your kervi application. 

Sensors, controller input/output, GPIO and motors are all dynamic values 
or implements one or more dynamic value.

A dynamic value may be a number, string, boolean, datetime or an enum.
In addition to is base type it also have a direction it may be an input or
output value.
If it is possible to change the dynamic value it is an input otherwise it is an output.

A sensor is an output of type DynamicNumber. It is an output because its value
is determined by the sensor device.

The speed parameter of a DC motor is a DynamicNumber. 
It is an input because you as an user/programmer is able to change the value.

A digital GPIO channel is a DynamicBoolean. 
If the GPIO channel is an output where you control the state of the physical
channel/pin then the dynamic value is an input. It may sound confusing but the 
dynamic value is an input to the GPIO controller of your device and that controller
changes the state of the physical pin. 

#######
Linking
#######

Signals are flown thru your application by linking them to dahsboards or other dynamic values. 

Dashboard linking
-----------------

Dynamic values may be linked to dashboards.
When linked they will show up as either inputs that the user can change or
a read only representation. 

Details about dashboard linking are found in the dashboard section.  

Value linking
-------------

Value linking is the process of connecting dynamic values that are outputs to
values that are input.

*Direct linking*

In the example below is a short snippet that shows how to make
a self balancing robot. This is done as direct linking where all values are
in the same process.

The orientation of the robot is obtained by a LSM9DS0 sensor reading its gyros to establish the robots
orientation. The output of the sensor is send to a pid controller that calculates
how much the wheels must be moved to keep the robot in balance. 
The pid controllers result is send to the steering controller that in turn send it to
the a dc motor controller.  

.. code:: python

    #create orientation sensor
    orientation_sensor = Sensor("orientation", "Orientation", LSM9DS0OrientationDeviceDriver(), reading_interval=.1)

    #create pid controller
    pid_controller = PIDController("balance_pid", "Balance pid")
    
    #link sensor roll value and pid controller
    pid_controller.value.link_to(orientation_sensor[2])
    
    #create the steering controller
    steering = MotorSteering()
    #link adaptive_speed controller input to steering controller
    steering.adaptive_speed.link_to(pid_controller.result)

    #create motor controller
    motor_board = AdafruitMotorHAT()
    #link dc motors to the steering controller outputs
    motor_board.dc_motors[2].speed.link_to(steering.left_speed)
    motor_board.dc_motors[3].speed.link_to(steering.right_speed)

*Indirect linking*

It is not possible to use direct linking if the two dynamic values that should
be connected are in different processes or maybe on different devices/computers. 
In this situation it is possible use utilize the build in inter process communication
in Kervi.

In the snippet below the link is done by passing the id of the sensor to the link_to
method. As this may cross network it is not as fast as direct linking.

An indirect link must be established on the input side in the link.

Process one code

.. code:: python

    #create orientation sensor
    orientation_sensor = Sensor("orientation", "Orientation", LSM9DS0OrientationDeviceDriver(), reading_interval=.1)


process two code

.. code:: python

    pid_controller = PIDController("balance_pid", "Balance pid")
    pid_controller.value.link_to("orientation.roll")

Value link transformation
-------------------------

It is possible to transform the values in the link by apply a transformation
function or lambda expression. This is useful if the value ranges of the two
dynamic values are not the same or if you need to change the sign of the
values that are exchanged in the link.

Below is an example where a servo motor is mounted opposite to the on screen pan
controller. By changing the sign the in the link the servo will rotate as expected on
the screen.

.. code:: python 

    motor_board.servo_motors[0].position.link_to(CAM1.pan, lambda x: -x)

.. toctree::
   :hidden:

   dynamic_values_api