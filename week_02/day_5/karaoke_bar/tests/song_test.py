import unittest
from src.song import Song

class TestSong(unittest.TestCase):
    def setUp(self):
        self.song1 = Song("Snow Patrol", "Chasing Cars", 4.3)

    def test_song_has_band(self):
        # ------------  AAA  ---------------
        # Arrange - setup specific to this test
        # None
        # Act - do the thing want to test
        # Assert - did it do what you wanted?
        self.assertEqual("Snow Patrol",self.song1.band)
        # Red - Green - Refactor - Commit

    def test_song_has_title(self):
        self.assertEqual("Chasing Cars", self.song1.title)

    def test_song_has_run_time(self):
        self.assertEqual(4.3,self.song1.run_time)
