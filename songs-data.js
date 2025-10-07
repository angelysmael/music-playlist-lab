// ===========================================
// SAMPLE MUSIC DATA - songs-data.js
// ===========================================
// This file contains sample song data for the playlist manager
// Students will use this data to practice array operations

// Sample Songs Database (ARRAY DECLARATION PRACTICE)
const sampleSongs = [
    {
        id: 1,
        title: "Bohemian Rhapsody",
        artist: "Queen",
        album: "A Night at the Opera",
        duration: "5:55",
        durationSeconds: 355,
        genre: "Rock",
        year: 1975,
        mood: "Epic",
        favorite: false
    },
    {
        id: 2,
        title: "Shape of You",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        duration: "3:53",
        durationSeconds: 233,
        genre: "Pop",
        year: 2017,
        mood: "Upbeat",
        favorite: true
    },
    {
        id: 3,
        title: "Billie Jean",
        artist: "Michael Jackson",
        album: "Thriller",
        duration: "4:54",
        durationSeconds: 294,
        genre: "Pop",
        year: 1983,
        mood: "Groovy",
        favorite: false
    },
    {
        id: 4,
        title: "Hotel California",
        artist: "Eagles",
        album: "Hotel California",
        duration: "6:30",
        durationSeconds: 390,
        genre: "Rock",
        year: 1976,
        mood: "Chill",
        favorite: true
    },
    {
        id: 5,
        title: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        duration: "3:22",
        durationSeconds: 202,
        genre: "Pop",
        year: 2019,
        mood: "Energetic",
        favorite: false
    },
    {
        id: 6,
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        album: "Led Zeppelin IV",
        duration: "8:02",
        durationSeconds: 482,
        genre: "Rock",
        year: 1971,
        mood: "Epic",
        favorite: true
    },
    {
        id: 7,
        title: "Bad Guy",
        artist: "Billie Eilish",
        album: "When We All Fall Asleep, Where Do We Go?",
        duration: "3:14",
        durationSeconds: 194,
        genre: "Alternative",
        year: 2019,
        mood: "Dark",
        favorite: false
    },
    {
        id: 8,
        title: "Imagine",
        artist: "John Lennon",
        album: "Imagine",
        duration: "3:03",
        durationSeconds: 183,
        genre: "Rock",
        year: 1971,
        mood: "Peaceful",
        favorite: true
    },
    {
        id: 9,
        title: "Rolling in the Deep",
        artist: "Adele",
        album: "21",
        duration: "3:48",
        durationSeconds: 228,
        genre: "Soul",
        year: 2010,
        mood: "Powerful",
        favorite: false
    },
    {
        id: 10,
        title: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        album: "Appetite for Destruction",
        duration: "5:03",
        durationSeconds: 303,
        genre: "Rock",
        year: 1987,
        mood: "Energetic",
        favorite: true
    },
    {
        id: 11,
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        album: "Fine Line",
        duration: "2:54",
        durationSeconds: 174,
        genre: "Pop",
        year: 2020,
        mood: "Happy",
        favorite: false
    },
    {
        id: 12,
        title: "Smells Like Teen Spirit",
        artist: "Nirvana",
        album: "Nevermind",
        duration: "5:01",
        durationSeconds: 301,
        genre: "Grunge",
        year: 1991,
        mood: "Rebellious",
        favorite: false
    },
    {
        id: 13,
        title: "Someone Like You",
        artist: "Adele",
        album: "21",
        duration: "4:45",
        durationSeconds: 285,
        genre: "Soul",
        year: 2011,
        mood: "Emotional",
        favorite: true
    },
    {
        id: 14,
        title: "Thunderstruck",
        artist: "AC/DC",
        album: "The Razors Edge",
        duration: "4:52",
        durationSeconds: 292,
        genre: "Rock",
        year: 1990,
        mood: "Powerful",
        favorite: false
    },
    {
        id: 15,
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        album: "Uptown Special",
        duration: "4:30",
        durationSeconds: 270,
        genre: "Funk",
        year: 2014,
        mood: "Funky",
        favorite: true
    },
    {
        id: 16,
        title: "Bohemian Like You",
        artist: "The Dandy Warhols",
        album: "Thirteen Tales from Urban Bohemia",
        duration: "3:34",
        durationSeconds: 214,
        genre: "Alternative",
        year: 2000,
        mood: "Cool",
        favorite: false
    },
    {
        id: 17,
        title: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        duration: "3:23",
        durationSeconds: 203,
        genre: "Pop",
        year: 2020,
        mood: "Danceable",
        favorite: false
    },
    {
        id: 18,
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        album: "The Wall",
        duration: "6:23",
        durationSeconds: 383,
        genre: "Progressive Rock",
        year: 1979,
        mood: "Dreamy",
        favorite: true
    },
    {
        id: 19,
        title: "Good 4 U",
        artist: "Olivia Rodrigo",
        album: "Sour",
        duration: "2:58",
        durationSeconds: 178,
        genre: "Pop Rock",
        year: 2021,
        mood: "Angry",
        favorite: false
    },
    {
        id: 20,
        title: "Don't Stop Believin'",
        artist: "Journey",
        album: "Escape",
        duration: "4:10",
        durationSeconds: 250,
        genre: "Rock",
        year: 1981,
        mood: "Inspirational",
        favorite: true
    },
    {
        id: 21,
        title: "Shallow",
        artist: "Lady Gaga & Bradley Cooper",
        album: "A Star Is Born Soundtrack",
        duration: "3:36",
        durationSeconds: 216,
        genre: "Country Pop",
        year: 2018,
        mood: "Romantic",
        favorite: false
    },
    {
        id: 22,
        title: "Bohemian Rhapsody",
        artist: "Queen",
        album: "A Night at the Opera",
        duration: "5:55",
        durationSeconds: 355,
        genre: "Rock",
        year: 1975,
        mood: "Epic",
        favorite: false
    },
    {
        id: 23,
        title: "Lose Yourself",
        artist: "Eminem",
        album: "8 Mile Soundtrack",
        duration: "5:26",
        durationSeconds: 326,
        genre: "Hip Hop",
        year: 2002,
        mood: "Motivational",
        favorite: true
    },
    {
        id: 24,
        title: "Mr. Brightside",
        artist: "The Killers",
        album: "Hot Fuss",
        duration: "3:43",
        durationSeconds: 223,
        genre: "Alternative Rock",
        year: 2004,
        mood: "Energetic",
        favorite: false
    },
    {
        id: 25,
        title: "Flowers",
        artist: "Miley Cyrus",
        album: "Endless Summer Vacation",
        duration: "3:20",
        durationSeconds: 200,
        genre: "Pop",
        year: 2023,
        mood: "Empowering",
        favorite: false
    }
];

// Playlist Templates (ARRAY INITIALIZATION EXAMPLES)
const playlistTemplates = {
    rock: {
        name: "Classic Rock Hits",
        description: "Timeless rock anthems that never get old",
        songs: [1, 4, 6, 8, 10, 14, 18, 20] // Array of song IDs
    },
    pop: {
        name: "Pop Favorites",
        description: "Chart-topping pop hits from different eras",
        songs: [2, 3, 5, 11, 17, 19, 21, 25]
    },
    chill: {
        name: "Chill Vibes",
        description: "Relaxing songs for study or background music",
        songs: [4, 8, 9, 13, 18, 21]
    },
    workout: {
        name: "Workout Mix",
        description: "High-energy songs to keep you motivated",
        songs: [5, 7, 12, 14, 15, 19, 23, 24]
    },
    favorites: {
        name: "My Favorites",
        description: "Your most loved songs",
        songs: [2, 4, 6, 8, 10, 13, 15, 18, 20, 23] // Pre-selected favorites
    }
};

// Utility Functions for Array Operations
function getSongById(id) {
    // ARRAY ACCESS PRACTICE: Find song by ID
    return sampleSongs.find(song => song.id === id);
}

function getSongsByIds(ids) {
    // ARRAY ITERATION PRACTICE: Get multiple songs by IDs
    return ids.map(id => getSongById(id)).filter(song => song !== undefined);
}

function getUniqueGenres() {
    // ARRAY ITERATION + SET PRACTICE: Get all unique genres
    const genres = sampleSongs.map(song => song.genre);
    return [...new Set(genres)].sort();
}

function getUniqueMoods() {
    // ARRAY ITERATION + SET PRACTICE: Get all unique moods
    const moods = sampleSongs.map(song => song.mood);
    return [...new Set(moods)].sort();
}

function formatDuration(seconds) {
    // UTILITY FUNCTION: Convert seconds to MM:SS format
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function calculateTotalDuration(songs) {
    // ARRAY ITERATION PRACTICE: Calculate total duration of songs
    const totalSeconds = songs.reduce((total, song) => total + song.durationSeconds, 0);
    return formatDuration(totalSeconds);
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sampleSongs,
        playlistTemplates,
        getSongById,
        getSongsByIds,
        getUniqueGenres,
        getUniqueMoods,
        formatDuration,
        calculateTotalDuration
    };
}

// ===========================================
// STUDENT IMPLEMENTATION NOTES:
// ===========================================
/*
This file provides sample data for you to practice array operations:

1. ARRAY DECLARATION:
   - sampleSongs: Main array of song objects
   - playlistTemplates: Object containing arrays of song IDs

2. ARRAY ACCESS:
   - Use getSongById() to access specific songs
   - Practice accessing first, last, and middle elements

3. ARRAY PROPERTIES:
   - Use sampleSongs.length to get total number of songs
   - Practice with other array length operations

4. ARRAY METHODS TO PRACTICE:
   - .push() - Add new songs to playlists
   - .pop() - Remove last song from playlist
   - .shift() - Remove first song from playlist
   - .unshift() - Add song to beginning of playlist
   - .splice() - Insert/remove songs at specific positions
   - .slice() - Create playlist copies
   - .indexOf() - Find song position in playlist
   - .includes() - Check if song is in playlist

5. ARRAY ITERATION TO PRACTICE:
   - .forEach() - Display all songs
   - .map() - Transform song data for display
   - .filter() - Search and filter songs
   - .find() - Find specific songs
   - .reduce() - Calculate statistics
   - .sort() - Sort songs by different criteria

6. ARRAY DESTRUCTURING TO PRACTICE:
   - Extract first, second, and remaining songs
   - Get current, previous, and next songs for player
   - Destructure song properties for display

REMEMBER: This data is here to help you learn - modify it, add to it, 
and use it to practice all the array concepts in the lab!
*/