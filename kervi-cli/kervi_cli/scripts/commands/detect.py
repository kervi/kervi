import click
import socket
import json
import time

@click.group()
def detect():
    """Detect devices and applications"""
    pass

@detect.command()
@click.option('--socket_port', default=9434, help='socket port to broadcast over')
@click.option('--timeout', default = 5, help='max scan time')
@click.option('--challenge', default = "kervi", help='challenge to present to kervi api')
def applications(socket_port, timeout, challenge):
    """Detect running kervi applications on your local network"""
    print("Detect applications pleas wait...")
    # Create a UDP socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
    sock.settimeout(2)

    use_local = True
    message = "Are you a kervi app with challenge: " + challenge
    message_reply = "I am a kervi app with challenge: " + challenge
    found_apps = []
    time_start = time.time()
    try:
        while time.time() -  time_start < timeout:
            # Send data
            #print('sending: ' + message)
            if use_local:
                server_address = ('127.255.255.255', socket_port)
            else:
                server_address = ('255.255.255.255', socket_port)
            use_local = not use_local
            sock.sendto(message.encode(), server_address)

            # Receive response
            #print('waiting to receive')
            try:
                data, server = sock.recvfrom(1000)
                response = json.loads(data.decode("UTF-8"))
                #print(response, str(response["challenge"]).index(message_reply))
                if response["challenge"].index(message_reply) == 0:
                    server_ip = str(server[0])
                    try:
                        found_apps.index(server_ip + "/" + response["id"])
                    except ValueError:
                        #print('Received confirmation')
                        print(response["name"] + " (web: " + response["web"] + " id:" +response["id"] + " ipc_port:" + server_ip + ":" + str(response["port"]) +")")
                        found_apps.append(server_ip + "/" + response["id"])
                else:
                    print('Verification failed')
            
            except KeyboardInterrupt:
                break
            except TimeoutError:
                pass
            except Exception as ex:
            #    print("e", ex)
                pass
        
    except KeyboardInterrupt:
        pass
    finally:	
        sock.close()
    if len(found_apps)==0:
        print("No applications found")

def _pretty_print(d, indent=0):
    if isinstance(d, dict):
        for key in d.keys():
            value = d[key]
            
            if isinstance(value, dict) or isinstance(value, list):
                print( '  ' * indent + str(key))
                _pretty_print(value, indent+1)
            else:
                print('  ' * (indent+1) + key + ":" +  str(value))
    elif isinstance(d, list):
        for item in d:
            if isinstance(item, dict) or isinstance(item, list):
                _pretty_print(item, indent+1)
            else:
                print('  ' * (indent+1) + str(item))
    else:
        pass    

@detect.command()
@click.option('--hw-platform', default = "auto", help='Specify platform driver. Valid values are auto, windows, linux, linux(rpi), darwin. Default is auto where the framework tries to detect the platform')
def devices(hw_platform):
    """Detect devices that are found on this device."""
    import kervi.hal as hal
    platform = hal._load(hw_platform)
    print("platform", platform)
    devices = hal.detect_devices()
    _pretty_print(devices)
    