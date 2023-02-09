from models.event import *
import datetime

event1 = Event(datetime.date(2023,3,12),"Planning Meeting", 6, "Planning office 3.2", "Go-nogo on new proposed development", False)
event2 = Event(datetime.date(2023,4,23),"Weekly Building Control Meeting", 3, "Building 4.3", "Weelky review of all building control requirements", True)
events = [event1, event2]

def add_new_event(event):
    events.append(event)

def delete_one_event(index):
    events.pop(index)

def delete_event_by_name(event_name):
    event_to_delete = None
    for event in events:
        if event.name == event_name:
            event_to_delete = event
            break

    events.remove(event_to_delete)