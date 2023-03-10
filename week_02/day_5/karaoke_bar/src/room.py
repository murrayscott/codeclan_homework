class Room:
    def __init__(self, room_name, room_number, max_guests, charge, guests, song_artist, song_title):
        self.room_name = room_name
        self.room_number = room_number
        self.max_guests = max_guests
        self.charge = charge
        self.guests = guests
        self.song_artist = song_artist
        self.song_title = song_title
        self.room = []

    def guest_count(self):
        return len(self.room)

    def add_guest(self, guest, max_guests, cost, wallet):
        if self.guest_count() < max_guests and wallet >= cost :
            self.room.append(guest)
