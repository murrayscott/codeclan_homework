import unittest
from src.room import Room

class TestRoom(unittest.TestCase):
    def setUp(self):
        self.room1 = Room("The Squalking Canaries",1 ,8,12.00,"Calum Gilhooley","Snow Patrol","Chasing Cars")
    
    def test_room_name(self):
        # ------------  AAA  ---------------
        # Arrange - setup specific to this test
        # None
        # Act - do the thing want to test
        # self.src.function(value)
        # Assert - did it do what you wanted?
        self.assertEqual("The Squalking Canaries", self.room1.room_name)
        # Red - Green - Refactor - Commit

    def test_room_number(self):
        self.assertEqual(1, self.room1.room_number)

    def test_room_max_guests(self):
        self.assertEqual(8,self.room1.max_guests)

    def test_room_charge(self):
        self.assertEqual(12.00,self.room1.charge)

    def test_room_guest(self):
        self.assertEqual("Calum Gilhooley", self.room1.guests)

    def test_room_song_artist(self):
        self.assertEqual("Snow Patrol", self.room1.song_artist)

    def test_room_song_title(self):
        self.assertEqual("Chasing Cars", self.room1.song_title)

