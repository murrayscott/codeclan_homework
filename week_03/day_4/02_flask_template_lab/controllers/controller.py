from flask import render_template, request, redirect
from app import app
from models.events import events, add_new_event, delete_one_event, delete_event_by_name
from models.event import *


@app.route('/events')
def index():
    return render_template('index.html', title='Home', events=events)

@app.route('/events', methods=['POST'])
def add_event():
  eventDate = request.form['date']
  eventName = request.form['name']
  eventGuests = request.form['guests']
  eventLocation = request.form['location']
  eventDescription = request.form['description']
  if "recurring" in request.form:
    eventRecurring=True
  else:
    eventRecurring=False
  newEvent = Event(eventDate, eventName, int(eventGuests), eventLocation, eventDescription, eventRecurring)
  add_new_event(newEvent)

  return render_template('index.html', title='Home', events=events)

@app.route('/delete', methods=['POST'])
def delete_event():
  index = request.form['index']
  delete_one_event(int(index))
  return render_template('index.html', title='Home', events=events)

@app.route('/deletebyname/<name>', methods=['POST'])
def delete(name):
  delete_event_by_name(name)
  return redirect('/events')