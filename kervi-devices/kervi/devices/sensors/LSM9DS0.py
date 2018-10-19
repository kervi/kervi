# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

import time
import math
from kervi.hal import I2CSensorDeviceDriver

I2C_GYRO_ADDRESS = 0x6A
I2C_ACCL_ADDRESS = 0x1e

MAG_X_MAX = 419
MAG_Y_MAX = 683
MAG_Z_MAX = 528
MAG_X_MIN = -658
MAG_Y_MIN = -397
MAG_Z_MIN = -472

MAG_LPF_FACTOR = 0.4
ACC_LPF_FACTOR = 0.1

RAD_TO_DEG = 57.29578
M_PI = 3.14159265358979323846
G_GAIN = 0.070 # [deg/s/LSB]  If you change the dps for gyro, you need to update this value accordingly
AA = 0.40 # Complementary filter constant
MAG_LPF_FACTOR = 0.4 # Low pass filter constant magnetometer
ACC_LPF_FACTOR = 0.4 # Low pass filter constant for accelerometer
ACC_MEDIANTABLESIZE = 9 # Median filter table size for accelerometer. Higher = smoother but a longer delay
MAG_MEDIANTABLESIZE = 9 # Median filter table size for magnetometer. Higher = smoother but a longer delay

#Kalman filter variables
Q_angle = 0.02
Q_gyro = 0.0015
R_angle = 0.005
y_bias = 0.0
x_bias = 0.0
XP_00 = 0.0
XP_01 = 0.0
XP_10 = 0.0
XP_11 = 0.0
YP_00 = 0.0
YP_01 = 0.0
YP_10 = 0.0
YP_11 = 0.0
KFangleX = 0.0
KFangleY = 0.0

def kalman_filter_y ( accAngle, gyroRate, DT):
	y=0.0
	S=0.0

	global KFangleY
	global Q_angle
	global Q_gyro
	global y_bias
	global YP_00
	global YP_01
	global YP_10
	global YP_11

	KFangleY = KFangleY + DT * (gyroRate - y_bias)

	YP_00 = YP_00 + ( - DT * (YP_10 + YP_01) + Q_angle * DT )
	YP_01 = YP_01 + ( - DT * YP_11 )
	YP_10 = YP_10 + ( - DT * YP_11 )
	YP_11 = YP_11 + ( + Q_gyro * DT )

	y = accAngle - KFangleY
	S = YP_00 + R_angle
	K_0 = YP_00 / S
	K_1 = YP_10 / S
	
	KFangleY = KFangleY + ( K_0 * y )
	y_bias = y_bias + ( K_1 * y )
	
	YP_00 = YP_00 - ( K_0 * YP_00 )
	YP_01 = YP_01 - ( K_0 * YP_01 )
	YP_10 = YP_10 - ( K_1 * YP_00 )
	YP_11 = YP_11 - ( K_1 * YP_01 )
	
	return KFangleY

def kalman_filter_x ( accAngle, gyroRate, DT):
	x=0.0
	S=0.0

	global KFangleX
	global Q_angle
	global Q_gyro
	global x_bias
	global XP_00
	global XP_01
	global XP_10
	global XP_11


	KFangleX = KFangleX + DT * (gyroRate - x_bias)

	XP_00 = XP_00 + ( - DT * (XP_10 + XP_01) + Q_angle * DT )
	XP_01 = XP_01 + ( - DT * XP_11 )
	XP_10 = XP_10 + ( - DT * XP_11 )
	XP_11 = XP_11 + ( + Q_gyro * DT )

	x = accAngle - KFangleX
	S = XP_00 + R_angle
	K_0 = XP_00 / S
	K_1 = XP_10 / S
	
	KFangleX = KFangleX + ( K_0 * x )
	x_bias = x_bias + ( K_1 * x )
	
	XP_00 = XP_00 - ( K_0 * XP_00 )
	XP_01 = XP_01 - ( K_0 * XP_01 )
	XP_10 = XP_10 - ( K_1 * XP_00 )
	XP_11 = XP_11 - ( K_1 * XP_01 )
	
	return KFangleX



class LSM9DS0RawGyroDeviceDriver(I2CSensorDeviceDriver):
    def __init__(self, address=I2C_GYRO_ADDRESS, bus=None):
        I2CSensorDeviceDriver.__init__(self, address, bus)
        self.i2c.write8(0x20, 0x0F)
        self.i2c.write_list(0x23, [0x30])

    def read_value(self):

        data0 = self.i2c.read_U8(0x28)
        data1 = self.i2c.read_U8(0x29)

        # Convert the data
        x_gyro = data1 * 256 + data0
        if x_gyro > 32767:
            x_gyro -= 65536

        data0 = self.i2c.read_U8(0x2A)
        data1 = self.i2c.read_U8(0x2B)

        # Convert the data
        y_gyro = data1 * 256 + data0
        if y_gyro > 32767:
            y_gyro -= 65536

        # LSM9DS0 Gyro address, 0x6A(106)
        # Read data back from 0x2C(44), 2 bytes
        # Z-Axis Gyro LSB, Z-Axis Gyro MSB
        data0 = self.i2c.read_U8(0x2C)
        data1 = self.i2c.read_U8(0x2D)

        # Convert the data
        z_gyro = data1 * 256 + data0
        if z_gyro > 32767:
            z_gyro -= 65536

        return (x_gyro, y_gyro, z_gyro)


class LSM9DS0RawAcclDeviceDriver(I2CSensorDeviceDriver):
    def __init__(self, address=I2C_ACCL_ADDRESS, bus=None):
        I2CSensorDeviceDriver.__init__(self, address, bus)

        self.i2c.write8(0x20, 0x67)
        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Select control register2, 0x21(33)
        #		0x20(32)	Full scale = +/-16g
        self.i2c.write8(0x21, 0x20)
        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Select control register5, 0x24(36)
        #		0x70(112)	Magnetic high resolution, Output data rate = 50Hz
        self.i2c.write8(0x24, 0x70)
        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Select control register6, 0x25(37)
        #		0x60(96)	Magnetic full scale selection = +/-12 gauss
        self.i2c.write8(0x25, 0x60)
        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Select control register7, 0x26(38)
        #		0x00(00)	Normal mode, Magnetic continuous conversion mode
        self.i2c.write8(0x26, 0x00)

    def read_value(self):

        data0 = self.i2c.read_U8(0x28)
        data1 = self.i2c.read_U8(0x29)

        # Convert the data
        x_accl = data1 * 256 + data0
        if x_accl > 32767:
            x_accl -= 65536

        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Read data back from 0x2A(42), 2 bytes
        # Y-Axis Accl LSB, Y-Axis Accl MSB
        data0 = self.i2c.read_U8(0x2A)
        data1 = self.i2c.read_U8(0x2B)

        # Convert the data
        y_accl = data1 * 256 + data0
        if y_accl > 32767:
            y_accl -= 65536

        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Read data back from 0x2C(44), 2 bytes
        # Z-Axis Accl LSB, Z-Axis Accl MSB
        data0 = self.i2c.read_U8(0x2C)
        data1 = self.i2c.read_U8(0x2D)

        # Convert the data
        z_accl = data1 * 256 + data0
        if z_accl > 32767:
            z_accl -= 65536

        return (x_accl, y_accl, z_accl)

class LSM9DS0RawMagDeviceDriver(I2CSensorDeviceDriver):
    def __init__(self, address=I2C_ACCL_ADDRESS, bus=None):
        I2CSensorDeviceDriver.__init__(self, address, bus)

        self.i2c.write8(0x20, 0x67)
        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Select control register2, 0x21(33)
        #		0x20(32)	Full scale = +/-16g
        self.i2c.write8(0x21, 0x20)
        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Select control register5, 0x24(36)
        #		0x70(112)	Magnetic high resolution, Output data rate = 50Hz
        self.i2c.write8(0x24, 0x70)
        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Select control register6, 0x25(37)
        #		0x60(96)	Magnetic full scale selection = +/-12 gauss
        self.i2c.write8(0x25, 0x60)
        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Select control register7, 0x26(38)
        #		0x00(00)	Normal mode, Magnetic continuous conversion mode
        self.i2c.write8(0x26, 0x00)

    def read_value(self):

        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Read data back from 0x08(08), 2 bytes
        # X-Axis Mag LSB, X-Axis Mag MSB
        data0 = self.i2c.read_U8(0x08)
        data1 = self.i2c.read_U8(0x09)

        # Convert the data
        x_mag = data1 * 256 + data0
        if x_mag > 32767:
            x_mag -= 65536

        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Read data back from 0x0A(10), 2 bytes
        # Y-Axis Mag LSB, Y-Axis Mag MSB
        data0 = self.i2c.read_U8(0x0A)
        data1 = self.i2c.read_U8(0x0B)

        # Convert the data
        y_mag = data1 * 256 + data0
        if y_mag > 32767:
            y_mag -= 65536

        # LSM9DS0 Accl and Mag address, 0x1E(30)
        # Read data back from 0x0C(12), 2 bytes
        # Z-Axis Mag LSB, Z-Axis Mag MSB
        data0 = self.i2c.read_U8(0x0C)
        data1 = self.i2c.read_U8(0x0D)

        # Convert the data
        z_mag = data1 * 256 + data0
        if z_mag > 32767:
            z_mag -= 65536


        return (x_mag, y_mag, z_mag)


class LSM9DS0AcclDeviceDriver(I2CSensorDeviceDriver):
    def __init__(self, is_flipped=False, address=I2C_ACCL_ADDRESS, bus=None):
        self.accl = LSM9DS0RawAcclDeviceDriver(address, bus)
        self.mag = LSM9DS0RawMagDeviceDriver(address, bus)


class LSM9DS0OrientationDeviceDriver(I2CSensorDeviceDriver):
    def __init__(self, is_flipped=False, accl_address=I2C_ACCL_ADDRESS, gyro_address=I2C_GYRO_ADDRESS, bus=None):
        self.accl = LSM9DS0RawAcclDeviceDriver(accl_address, bus)
        self.mag = LSM9DS0RawMagDeviceDriver(accl_address, bus)
        self.gyro = LSM9DS0RawGyroDeviceDriver(gyro_address, bus)

        self.is_flipped = is_flipped

        self.acc_x_norm = 0.0
        self.acc_y_norm = 0.0
        self.pitch = 0.0
        self.roll = 0.0
        self.mag_x_comp = 0.0
        self.mag_y_comp = 0.0
        self.scaled_mag = [0.0, 0.0, 0.0]

        self.old_x_mag_raw_value = 0
        self.old_y_mag_raw_value = 0
        self.old_z_mag_raw_value = 0
        self.old_x_acc_raw_value = 0
        self.old_y_acc_raw_value = 0
        self.old_z_acc_raw_value = 0

        self.mag_raw = [0, 0, 0]
        self.acc_raw = [0, 0, 0]
        self.gyro_raw = [0, 0, 0]

        self.gyro_x = 0
        self.gyro_y = 0
        self.gyro_z = 0

        self.cf_angle_x = 0
        self.cf_angle_y = 0

        self.last_reading = None

    @property
    def dimensions(self):
        return 3

    @property
    def dimension_labels(self):
        return ["heading","pitch", "roll"]
    
    @property
    def type(self):
        return "orientation"

    @property
    def unit(self):
        return "degree"

    def read_value(self):

        self.mag_raw = list(self.mag.read_value())
        self.acc_raw = list(self.accl.read_value())
        self.gyro_raw = list(self.gyro.read_value())

        rate_gyr_x = self.gyro_raw[0] * G_GAIN
        rate_gyr_y = self.gyro_raw[1] * G_GAIN
        rate_gyr_z = self.gyro_raw[2] * G_GAIN

        acc_x_angle = (math.atan2(self.acc_raw[1],self.acc_raw[2])+math.pi)*RAD_TO_DEG
        acc_y_angle = (math.atan2(self.acc_raw[2],self.acc_raw[0])+math.pi)*RAD_TO_DEG
        
        if not self.last_reading:
            self.gyro_x = rate_gyr_x
            self.gyro_y = rate_gyr_y
            self.gyro_z = rate_gyr_z
        else:
            dt = time.time() - self.last_reading
            self.cf_angle_x = AA * (self.cf_angle_x+rate_gyr_x*dt) + (1 - AA) * acc_x_angle
            self.cf_angle_y = AA * (self.cf_angle_y+rate_gyr_y*dt) + (1 - AA) * acc_y_angle

        self.last_reading = time.time()

        self.mag_raw[0] = self.mag_raw[0] * MAG_LPF_FACTOR + self.old_x_mag_raw_value*(1 - MAG_LPF_FACTOR)
        self.mag_raw[1] = self.mag_raw[1] * MAG_LPF_FACTOR + self.old_y_mag_raw_value*(1 - MAG_LPF_FACTOR)
        self.mag_raw[2] = self.mag_raw[2] * MAG_LPF_FACTOR + self.old_z_mag_raw_value*(1 - MAG_LPF_FACTOR)
        self.acc_raw[0] = self.acc_raw[0] * ACC_LPF_FACTOR + self.old_x_acc_raw_value*(1 - ACC_LPF_FACTOR)
        self.acc_raw[1] = self.acc_raw[1] * ACC_LPF_FACTOR + self.old_y_acc_raw_value*(1 - ACC_LPF_FACTOR)
        self.acc_raw[2] = self.acc_raw[2] * ACC_LPF_FACTOR + self.old_z_acc_raw_value*(1 - ACC_LPF_FACTOR)

        self.old_x_mag_raw_value = self.mag_raw[0]
        self.old_y_mag_raw_value = self.mag_raw[1]
        self.old_z_mag_raw_value = self.mag_raw[2]
        self.old_x_acc_raw_value = self.acc_raw[0]
        self.old_y_acc_raw_value = self.acc_raw[1]
        self.old_z_acc_raw_value = self.acc_raw[2]

        #Apply hard iron calibration
        self.mag_raw[0] -= (MAG_X_MIN + MAG_X_MAX) /2
        self.mag_raw[1] -= (MAG_Y_MIN + MAG_Y_MAX) /2
        self.mag_raw[2] -= (MAG_Z_MIN + MAG_Z_MAX) /2

        #Apply soft iron calibration
        self.scaled_mag[0] = (self.mag_raw[0] - MAG_X_MIN) / (MAG_X_MAX - MAG_X_MIN) * 2 - 1
        self.scaled_mag[1] = (self.mag_raw[1] - MAG_Y_MIN) / (MAG_Y_MAX - MAG_Y_MIN) * 2 - 1
        self.scaled_mag[2] = (self.mag_raw[2] - MAG_Z_MIN) / (MAG_Z_MAX - MAG_Z_MIN) * 2 - 1

        if self.is_flipped:
            self.acc_raw[0] = -self.acc_raw[0]
            self.acc_raw[1] = -self.acc_raw[1]

        #Compute heading
        heading = 180 * math.atan2(self.mag_raw[1], self.mag_raw[0]) / math.pi

        #Convert heading to 0 - 360
        if heading < 0:
            heading += 360

        #Normalize accelerometer raw values.
        accXnorm = self.acc_raw[0] / math.sqrt(self.acc_raw[0] * self.acc_raw[0] + self.acc_raw[1] * self.acc_raw[1] + self.acc_raw[2] * self.acc_raw[2])
        accYnorm = self.acc_raw[1] / math.sqrt(self.acc_raw[0] * self.acc_raw[0] + self.acc_raw[1] * self.acc_raw[1] + self.acc_raw[2] * self.acc_raw[2])

        

        #Calculate pitch and roll
        #pitch = math.asin(accXnorm)
        #roll = -math.asin(accYnorm / math.cos(pitch))

        pitch = self.cf_angle_x
        roll = self.cf_angle_y
        #Calculate the new tilt compensated values
        magXcomp = self.mag_raw[0] * math.cos(pitch) + self.mag_raw[2] * math.sin(pitch)
        magYcomp = self.mag_raw[0] * math.sin(roll) * math.sin(pitch) + self.mag_raw[1] * math.cos(roll) - self.mag_raw[2] * math.sin(roll) * math.cos(pitch)

        #Calculate heading
        heading = 180 * math.atan2(magYcomp, magXcomp)/math.pi

        #Convert heading to 0 - 360
        if heading < 0:
            heading += 360

        return [heading, pitch, roll]

class LSM9DS0GravityDeviceDriver(I2CSensorDeviceDriver):
    def __init__(self, is_flipped=False, address=I2C_ACCL_ADDRESS, bus=None):
        self.accl = LSM9DS0RawAcclDeviceDriver(address, bus)

    @property
    def dimensions(self):
        return 3
    
    @property
    def dimension_labels(self):
        return ["x","y", "z"]
    
    @property
    def type(self):
        return "gravity"

    @property
    def unit(self):
        return "G"
    
    def read_value(self):
        acc_x, acc_y, acc_z = self.accl.read_value()
        return [(acc_x * 0.224)/1000, (acc_y * 0.224)/1000, (acc_z * 0.224)/1000]
    