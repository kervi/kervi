from mockup_spine import MockupSpine
from kervi.values import KerviValue, NumberValue, BooleanValue

def test_value_instantitation_input():
    spine = MockupSpine()
    value = KerviValue("Dynamic Value", "Dynamic-test-value", value_id="dv", spine=spine)

    assert value.value_id == "dv"
    assert value.name == "Dynamic Value"
    assert value.value == None
    assert value.is_input == True

def test_value_instantitation_output():
    spine = MockupSpine()
    value = KerviValue("Dynamic Value", "Dynamic-test-value", is_input=False, value_id="dv", spine=spine)

    assert value.value_id == "dv"
    assert value.name == "Dynamic Value"
    assert value.value == None
    assert value.is_input == False

def test_number_instantiation():
    spine = MockupSpine()
    number = NumberValue("Dynamic Number", value_id="dn", spine=spine)

    assert number.value_id == "dn"
    assert number.name == "Dynamic Number"
    assert number.value == 0
    assert number.is_input == True

def test_number_set_value():
    spine = MockupSpine()
    number = NumberValue("Dynamic Number", value_id="dn", spine=spine)

    number.value = 10
    assert number.value == 10

def test_set_value_events():
    spine = MockupSpine()
    number = NumberValue("Dynamic Number", value_id="dn", spine=spine)
   
    number.value = 10

    assert "valueChanged" in spine.events.keys()
    assert spine.events["valueChanged"]["args"][0]["value"] == 10

def test_set_value_events_delta():
    spine = MockupSpine()
    number = NumberValue("Dynamic Number", value_id="dn", spine=spine)
    number.delta =10

    assert number.value == 0

    number.value = 5
    assert number.value == 0
    assert "valueChanged"  not in spine.events.keys()

    spine.events = {}
    number.value = 10
    assert number.value == 10
    assert spine.events["valueChanged"]["args"][0]["value"] == 10

    spine.events = {}
    number.value = 7

    assert number.value == 10
    assert "valueChanged" not in spine.events.keys()

    spine.events = {}
    number.value = 0
    assert number.value == 0
    assert spine.events["valueChanged"]["args"][0]["value"] == 0

def test_boolean_instantiation():
    spine = MockupSpine()
    number = BooleanValue("Dynamic Boolean", value_id="db", spine=spine)

    assert number.value_id == "db"
    assert number.name == "Dynamic Boolean"
    assert number.value == False

def test_boolean_set_value():
    spine = MockupSpine()
    number = BooleanValue("Dynamic Boolean", value_id="db", spine=spine)

    number.value = True
    assert number.value == True

    number.value = False
    assert number.value == False

def test_linking_in_to_out():
    spine = MockupSpine()
    number_out = NumberValue("Dynamic Number", is_input=False, value_id="dno", spine=spine)
    number_in = NumberValue("Dynamic Number", value_id="dni", spine=spine)

    assert number_out.value == 0
    assert number_in.value == 0

    number_in.link_to(number_out)

    number_out.value = 10
    assert number_in.value == 10


def test_linking_out_to_in():
    spine = MockupSpine()
    number_out = NumberValue("Dynamic Number", is_input=False, value_id="dn", spine=spine)
    number_in = NumberValue("Dynamic Number", value_id="dn", spine=spine)

    assert number_out.value == 0
    assert number_in.value == 0

    number_out.link_to(number_in)

    number_out.value = 10
    assert number_in.value == 10


def test_linking_transformation():
    spine = MockupSpine()
    number_out = NumberValue("Dynamic Number", is_input=False, value_id="dn", spine=spine)
    number_in = NumberValue("Dynamic Number", value_id="dn", spine=spine)

    assert number_out.value == 0
    assert number_in.value == 0

    number_out.link_to(number_in, lambda x:-2*x)

    number_out.value = 10
    assert number_in.value == -20
