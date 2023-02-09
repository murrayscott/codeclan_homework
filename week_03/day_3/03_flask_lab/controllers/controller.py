from flask import render_template
from app import app
from models.classes.books_ordered import order_list

@app.route('/')
def index():
    return render_template('index.html', title="Bookshop")

@app.route('/order_list')
def orders():
    return render_template('index.html',title = 'Orders', orders = order_list)

@app.route('/order/<order_no>')
def order_ID(order_no):
    final_order = ''
    for order in order_list:
        if int(order_no) == order.order_number:
            final_order = order

            
    return render_template('order.html',title = f'Order {order_no}',order =final_order)


