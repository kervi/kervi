Dashboards
==============

An application may define one or more dashboards if it is a home automation application
A dashboard could be a room or a floor.

Each dashbord contains one or more sections where it is possible to link
sensors, controllers and camera output.

A dashboard section is divided in columns and rows where the cell size is 150x150 pixels.
When a component is linked to a section it is specified how many cells
the component occupies in that section.


**Example**

.. code-block:: python

    SYSTEM = Dashboard("system", "System")
    SYSTEM.add_section(DashboardSection("cpu", columns=2, rows=2, collapsed=True))
    SYSTEM.add_section(DashboardSection("memory", columns=2, rows=2, collapsed=True))
    SYSTEM.add_section(DashboardSection("log", columns=2, rows=2, title="Log", user_log=True))
    SYSTEM.add_section(DashboardSection("disk", columns=1, rows=1))
    SYSTEM.add_section(DashboardSection("power", columns=1, rows=1, title="Power"))


.. toctree::
   :hidden:

   dashboards_api