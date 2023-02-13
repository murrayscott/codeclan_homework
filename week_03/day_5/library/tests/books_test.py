import unittest
from models.books import Books

class TestBooks(unittest.TestCase):
    def setUp(self):
        self.books = Books("Craft Beer World", "Mark Dredge", "Guidebook")

    def test_has_title(self):
        expected = "Craft Beer World"
        actual = self.books.title
        self.assertEqual(expected, actual)

    def test_has_author(self):
        expected = "Mark Dredge"
        actual = self.books.author
        self.assertEqual(expected, actual)

    def test_has_genre(self):
        expected = "Guidebook"
        actual = self.books.genre
        self.assertEqual(expected, actual)
