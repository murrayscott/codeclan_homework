from flask import render_template, request, redirect
import datetime

from app import app
from models.books import Books
from models.book_list import get_book_list, save_books, delete_books

@app.route("/")
def index():
    book_list = get_book_list()
    return render_template("index.html", book_list=book_list)

@app.route("/books", methods=["POST"])
def create():
    description = request.form["title"]
    author = request.form["author"]
    genre =request.form["genre"]
    books = Books(description, author, genre)
    save_books(books)
    return redirect("/")

@app.route("/books/<index>/delete", methods=["POST"])
def delete(index):
    delete_books(int(index))
    return redirect("/")