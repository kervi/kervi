from kervi.utility.component import KerviComponent
from mockup_spine import MockupSpine

def test_instantiation():
    spine = MockupSpine()
    component = KerviComponent("test_component", "component", "Test component", spine=spine)

    assert component.component_id == "test_component"
    assert component.component_type == "component"
    assert component.name == "Test component"
    assert component.visible

    assert "getDashboardComponents" in spine.queryHandlers
    assert "getComponentInfo" in spine.queryHandlers
