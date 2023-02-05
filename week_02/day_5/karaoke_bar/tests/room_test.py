import unittest
from src.room import Room
from src.song import Song
from src.guest import Guest


class TestRoom(unittest.TestCase):
    def setUp(self):
        self.room1 = Room("The Squalking Canaries",1 ,3,12.00,"Calum Gilhooley","Snow Patrol","Chasing Cars")
    
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
        self.assertEqual(3,self.room1.max_guests)

    def test_room_charge(self):
        self.assertEqual(12.00,self.room1.charge)

    def test_room_guest(self):
        self.assertEqual("Calum Gilhooley", self.room1.guests)

    def test_room_song_artist(self):
        self.assertEqual("Snow Patrol", self.room1.song_artist)

    def test_room_song_title(self):
        self.assertEqual("Chasing Cars", self.room1.song_title)

    def test_guest_count_starts_at_0(self):
        self.assertEqual(0, self.room1.guest_count())

    def test_add_guest(self):
        self.room1.add_guest("Calum Gilhooley",3, 12, 54.76)
        self.assertEqual(1, self.room1.guest_count())

    def test_add_1_too_many_guests(self):
        self.room1.add_guest("Calum Gilhooley",3, 12, 54.76)
        self.room1.add_guest("Rank Hovis",3, 12, 34.43)
        self.room1.add_guest("Mr Don",3, 12, 45.43)
        self.room1.add_guest("Mr George",3, 12, 65.12)
        self.assertEqual(3, self.room1.guest_count())

    def test_customer_has_funds(self):
        self.room1.add_guest("Calum Gilhooley",3, 12.00, 54.76)
        self.assertEqual(1, self.room1.guest_count())        
        
    def test_customer_has_insufficient_funds(self):
        self.room1.add_guest("Calum Gilhooley",3, 12.00, 11.76)
        self.assertEqual(0, self.room1.guest_count())                