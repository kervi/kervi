""" My kervi application """
from kervi.application import Application
from kervi.actions import action, Actions

if __name__ == '__main__':
    APP = Application()

    @action
    def app_main():
        #action called when app is loaded and ready
        Actions["fan_controller.start"]()


    @action
    def app_exit():
        #action called when app is about to stop
        Actions["fan_controller.stop"]()

    APP.run()
