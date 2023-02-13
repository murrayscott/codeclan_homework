import datetime
from models.books import Books

book_1 = Books("Craft Beer World", "Mark Dredge", "Guidebook")
book_2 = Books("The Curious Bartender", "Tristan Stephenson", "Food & Drink")
book_3 = Books("Lost Fleet", "Jack Campbell", "Fiction")
book_3.is_complete = True

book_list = [book_1, book_2, book_3]

def get_books_list():
    return book_list

def save_books(books):
    book_list.append(books)

def delete_books(index):
    book_list.pop(index)