""" bootstrap your kervi dashboards here """
from kervi.dashboards import Dashboard, DashboardPanel

#Create the dashboards for your Kervi application here.
#Standard dashboard with several panels where sensors are placed.
#Each sensor create links to one or more dashboard panels
Dashboard(
    "app",
    "My dashboard",
    [
        DashboardPanel("fan", title="Fan"),
        DashboardPanel("sensors", title="Sensors")
    ],
    is_default=True
)

Dashboard(
    "system",
    "System",
    [
        DashboardPanel("cpu"),
        DashboardPanel("memory"),
        DashboardPanel("disk"),
        DashboardPanel("device", title="device"),
        DashboardPanel("log", title="Log", user_log=True)
    ],
    user_groups=["admin"]
)
