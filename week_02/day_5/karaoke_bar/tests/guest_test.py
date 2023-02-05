import unittest
from src.guest import Guest

class TestGuest(unittest.TestCase):
    def setUp(self):
        self.guest1 = Guest("Calum Gilhooley", 54.76)

    def test_guest_name(self):
        # ------------  AAA  ---------------
        # Arrange - setup specific to this test
        # None
        # Act - do the thing want to test
        # self.src.function(value)
        # Assert - did it do what you wanted?
        self.assertEqual("Calum Gilhooley", self.guest1.name)
        # Red - Green - Refactor - Commit
        pass

    def test_wallet_value(self):
        self.assertEqual(54.76, self.guest1.wallet)
