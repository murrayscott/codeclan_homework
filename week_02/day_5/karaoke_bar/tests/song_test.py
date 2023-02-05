import unittest
from src.song import Song

class TestSong(unittest.TestCase):
    def setUp(self):
        self.song = Song("Michael Jackson", "Thriller", 4.3)

    def test_description(self):
        # ------------  AAA  ---------------
        # Arrange - setup specific to this test
        # None
        # Act - do the thing want to test
        self.src.function(value)
        # Assert - did it do what you wanted?
        self.assertEqual(expected_value,actual_function_value)
        # Red - Green - Refactor - Commit