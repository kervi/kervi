from kervi.utility.component import KerviComponent
from mockup_spine import MockupSpine

def test_instantiation():
    spine = MockupSpine()
    component = KerviComponent("test_component", "component", "Test component", spine=spine)

    assert "test_component" == component.component_id
    assert "component" == component.component_type
    assert "Test component" == component.name
    assert component.visible == True

    assert "getDashboardComponents" in spine.queryHandlers
    assert "getComponentInfo" in spine.queryHandlers
