// ===========================================
// PLAYLIST MANAGEMENT - playlist.js
// ===========================================
// This file handles playlist creation and management using array operations
// Students will implement functions demonstrating all array concepts

// ===========================================
// GLOBAL PLAYLIST STORAGE (ARRAY DECLARATION)
// ===========================================


// Main playlists array - this is your primary data structure to practice with
let allPlaylists = []; // TODO: Students will populate this array

// Current active playlist for the player
let currentPlaylist = null;

// Currently selected playlist in the interface
let selectedPlaylistId = null;

// ===========================================
// PLAYLIST CREATION (ARRAY DECLARATION PRACTICE)
// ===========================================

// Create a new playlist with initial songs
function createPlaylist(name, description = "", initialSongs = []) {
    // TODO: ARRAY DECLARATION - Create a new playlist object
    // TODO: Use array spread operator to copy initialSongs safely
    // TODO: Add the new playlist to allPlaylists array using .push()
    // TODO: Return the created playlist
    
    const newPlaylist = {
        id: generatePlaylistId(),
        name: name,
        description: description,
        songs: [...initialSongs], // ARRAY DECLARATION with spread operator
        createdDate: new Date(),
        lastModified: new Date(),
        totalDuration: 0
    };
    
    // TODO: Add to main playlists array
    allPlaylists.push(newPlaylist); // ARRAY METHOD: .push()
    
    // TODO: Update playlist statistics
    updatePlaylistStats(newPlaylist);
    
    // TODO: Refresh the display
    displayAllPlaylists();
    
    return newPlaylist;
}

// Create playlist from template
function createPlaylistFromTemplate(templateName) {
    // TODO: ARRAY ACCESS - Get template data
    // TODO: ARRAY ACCESS - Get songs by IDs from template
    // TODO: Use createPlaylist() to make new playlist
    
    const template = playlistTemplates[templateName];
    if (!template) {
        console.error("Template not found:", templateName);
        return null;
    }
    
    // TODO: Convert song IDs to song objects using array iteration
    const templateSongs = getSongsByIds(template.songs);
    
    return createPlaylist(template.name, template.description, templateSongs);
}

// Generate unique playlist ID
function generatePlaylistId() {
    // TODO: Simple ID generation for demo purposes
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

// ===========================================
// PLAYLIST ACCESS (ARRAY ACCESS PRACTICE)
// ===========================================

// Get playlist by ID
function getPlaylistById(playlistId) {
    // TODO: ARRAY ACCESS - Find playlist in allPlaylists array
    // TODO: Use .find() method to locate playlist
    return allPlaylists.find(playlist => playlist.id === playlistId);
}

// Get first playlist
function getFirstPlaylist() {
    // TODO: ARRAY ACCESS - Access first element of allPlaylists
    // TODO: Handle case when array is empty
    return allPlaylists.length > 0 ? allPlaylists[0] : null;
}

// Get last playlist
function getLastPlaylist() {
    // TODO: ARRAY ACCESS - Access last element using .length property
    // TODO: Handle case when array is empty
    return allPlaylists.length > 0 ? allPlaylists[allPlaylists.length - 1] : null;
}

// Get playlist at specific index
function getPlaylistAtIndex(index) {
    // TODO: ARRAY ACCESS - Access element at specific index
    // TODO: Validate index is within bounds
    if (index >= 0 && index < allPlaylists.length) {
        return allPlaylists[index];
    }
    return null;
}

// ===========================================
// PLAYLIST PROPERTIES (ARRAY PROPERTIES PRACTICE)
// ===========================================

// Get total number of playlists
function getTotalPlaylistCount() {
    // TODO: ARRAY PROPERTY - Use .length property
    return allPlaylists.length;
}

// Get total number of songs across all playlists
function getTotalSongCount() {
    // TODO: ARRAY ITERATION - Use .reduce() to count all songs
    // TODO: Sum up the lengths of all playlist song arrays
    return allPlaylists.reduce((total, playlist) => total + playlist.songs.length, 0);
}

// Get playlist statistics
function getPlaylistStats(playlist) {
    // TODO: ARRAY PROPERTIES - Calculate various playlist statistics
    if (!playlist || !playlist.songs) {
        return {
            songCount: 0,
            totalDuration: "0:00",
            averageDuration: "0:00",
            genres: [],
            oldestSong: null,
            newestSong: null
        };
    }
    
    const songCount = playlist.songs.length; // ARRAY PROPERTY: .length
    
    // TODO: Calculate total duration using array iteration
    const totalSeconds = playlist.songs.reduce((total, song) => total + song.durationSeconds, 0);
    const totalDuration = formatDuration(totalSeconds);
    
    // TODO: Calculate average duration
    const averageSeconds = songCount > 0 ? totalSeconds / songCount : 0;
    const averageDuration = formatDuration(Math.round(averageSeconds));
    
    // TODO: Get unique genres using array iteration
    const genres = [...new Set(playlist.songs.map(song => song.genre))];
    
    // TODO: Find oldest and newest songs
    const oldestSong = playlist.songs.reduce((oldest, song) => 
        !oldest || song.year < oldest.year ? song : oldest, null);
    const newestSong = playlist.songs.reduce((newest, song) => 
        !newest || song.year > newest.year ? song : newest, null);
    
    return {
        songCount,
        totalDuration,
        averageDuration,
        genres,
        oldestSong,
        newestSong
    };
}

// ===========================================
// PLAYLIST MODIFICATION (ARRAY METHODS PRACTICE)
// ===========================================

// Add song to end of playlist
function addSongToPlaylist(playlist, song) {
    // TODO: ARRAY METHOD - Use .push() to add song to end
    // TODO: Update last modified date
    // TODO: Refresh display
    
    if (!playlist || !song) {
        console.error("Invalid playlist or song");
        return false;
    }
    
    playlist.songs.push(song); // ARRAY METHOD: .push()
    playlist.lastModified = new Date();
    
    updatePlaylistStats(playlist);
    refreshPlaylistDisplay();
    
    logArrayOperation(`Added "${song.title}" to end of "${playlist.name}"`);
    return true;
}

// Remove last song from playlist
function removeLastSongFromPlaylist(playlist) {
    // TODO: ARRAY METHOD - Use .pop() to remove last song
    // TODO: Handle empty playlist case
    // TODO: Update last modified date
    
    if (!playlist || playlist.songs.length === 0) {
        console.log("Playlist is empty, nothing to remove");
        return null;
    }
    
    const removedSong = playlist.songs.pop(); // ARRAY METHOD: .pop()
    playlist.lastModified = new Date();
    
    updatePlaylistStats(playlist);
    refreshPlaylistDisplay();
    
    logArrayOperation(`Removed "${removedSong.title}" from end of "${playlist.name}"`);
    return removedSong;
}

// Remove first song from playlist
function removeFirstSongFromPlaylist(playlist) {
    // TODO: ARRAY METHOD - Use .shift() to remove first song
    // TODO: Handle empty playlist case
    // TODO: Update last modified date
    
    if (!playlist || playlist.songs.length === 0) {
        console.log("Playlist is empty, nothing to remove");
        return null;
    }
    
    const removedSong = playlist.songs.shift(); // ARRAY METHOD: .shift()
    playlist.lastModified = new Date();
    
    updatePlaylistStats(playlist);
    refreshPlaylistDisplay();
    
    logArrayOperation(`Removed "${removedSong.title}" from beginning of "${playlist.name}"`);
    return removedSong;
}

// Add song to beginning of playlist
function addSongToBeginning(playlist, song) {
    // TODO: ARRAY METHOD - Use .unshift() to add song to beginning
    // TODO: Update last modified date
    // TODO: Refresh display
    
    if (!playlist || !song) {
        console.error("Invalid playlist or song");
        return false;
    }
    
    playlist.songs.unshift(song); // ARRAY METHOD: .unshift()
    playlist.lastModified = new Date();
    
    updatePlaylistStats(playlist);
    refreshPlaylistDisplay();
    
    logArrayOperation(`Added "${song.title}" to beginning of "${playlist.name}"`);
    return true;
}

// Insert song at specific position
function insertSongAtPosition(playlist, song, position) {
    // TODO: ARRAY METHOD - Use .splice() to insert at specific position
    // TODO: Validate position is within bounds
    // TODO: Update last modified date
    
    if (!playlist || !song) {
        console.error("Invalid playlist or song");
        return false;
    }
    
    if (position < 0 || position > playlist.songs.length) {
        console.error("Invalid position:", position);
        return false;
    }
    
    playlist.songs.splice(position, 0, song); // ARRAY METHOD: .splice()
    playlist.lastModified = new Date();
    
    updatePlaylistStats(playlist);
    refreshPlaylistDisplay();
    
    logArrayOperation(`Inserted "${song.title}" at position ${position} in "${playlist.name}"`);
    return true;
}

// Remove song at specific position
function removeSongAtPosition(playlist, position) {
    // TODO: ARRAY METHOD - Use .splice() to remove at specific position
    // TODO: Validate position is within bounds
    // TODO: Return removed song
    
    if (!playlist || position < 0 || position >= playlist.songs.length) {
        console.error("Invalid playlist or position");
        return null;
    }
    
    const removedSongs = playlist.songs.splice(position, 1); // ARRAY METHOD: .splice()
    const removedSong = removedSongs[0];
    playlist.lastModified = new Date();
    
    updatePlaylistStats(playlist);
    refreshPlaylistDisplay();
    
    logArrayOperation(`Removed "${removedSong.title}" from position ${position} in "${playlist.name}"`);
    return removedSong;
}

// Move song to different position
function moveSongToPosition(playlist, fromIndex, toIndex) {
    // TODO: ARRAY METHODS - Use .splice() to remove and insert
    // TODO: Validate both indices
    // TODO: Handle the two-step operation
    
    if (!playlist || fromIndex < 0 || fromIndex >= playlist.songs.length ||
        toIndex < 0 || toIndex >= playlist.songs.length) {
        console.error("Invalid indices for move operation");
        return false;
    }
    
    const song = playlist.songs.splice(fromIndex, 1)[0]; // Remove from original position
    playlist.songs.splice(toIndex, 0, song); // Insert at new position
    playlist.lastModified = new Date();
    
    refreshPlaylistDisplay();
    logArrayOperation(`Moved "${song.title}" from position ${fromIndex} to ${toIndex}`);
    return true;
}

// ===========================================
// PLAYLIST SEARCH AND FILTER (ARRAY ITERATION PRACTICE)
// ===========================================

// Search songs in playlist by title or artist
function searchPlaylistSongs(playlist, searchTerm) {
    // TODO: ARRAY ITERATION - Use .filter() to find matching songs
    // TODO: Search in title, artist, and album fields
    // TODO: Make search case-insensitive
    
    if (!playlist || !searchTerm) {
        return playlist ? playlist.songs : [];
    }
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    return playlist.songs.filter(song => 
        song.title.toLowerCase().includes(lowerSearchTerm) ||
        song.artist.toLowerCase().includes(lowerSearchTerm) ||
        song.album.toLowerCase().includes(lowerSearchTerm)
    ); // ARRAY METHOD: .filter()
}

// Filter songs by genre
function filterSongsByGenre(playlist, genre) {
    // TODO: ARRAY ITERATION - Use .filter() to get songs of specific genre
    if (!playlist || !genre) {
        return playlist ? playlist.songs : [];
    }
    
    return playlist.songs.filter(song => song.genre === genre);
}

// Filter songs by mood
function filterSongsByMood(playlist, mood) {
    // TODO: ARRAY ITERATION - Use .filter() to get songs of specific mood
    if (!playlist || !mood) {
        return playlist ? playlist.songs : [];
    }
    
    return playlist.songs.filter(song => song.mood === mood);
}

// Sort playlist songs by different criteria
function sortPlaylistSongs(playlist, sortBy) {
    // TODO: ARRAY METHOD - Use .sort() with custom comparison functions
    // TODO: Handle different sort criteria: title, artist, year, duration
    
    if (!playlist) return [];
    
    const sortedSongs = [...playlist.songs]; // Create copy to avoid modifying original
    
    switch(sortBy) {
        case 'title':
            sortedSongs.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'artist':
            sortedSongs.sort((a, b) => a.artist.localeCompare(b.artist));
            break;
        case 'year':
            sortedSongs.sort((a, b) => a.year - b.year);
            break;
        case 'duration':
            sortedSongs.sort((a, b) => a.durationSeconds - b.durationSeconds);
            break;
        default:
            // Keep original order
    }
    
    return sortedSongs; // ARRAY METHOD: .sort()
}

// Get favorite songs from playlist
function getFavoriteSongs(playlist) {
    // TODO: ARRAY ITERATION - Use .filter() to get only favorite songs
    if (!playlist) return [];
    
    return playlist.songs.filter(song => song.favorite);
}

// ===========================================
// PLAYLIST ITERATION (ARRAY ITERATION PRACTICE)
// ===========================================

// Display all songs in playlist
function displayPlaylistSongs(playlist) {
    // TODO: ARRAY ITERATION - Use .forEach() to display each song
    // TODO: Update the DOM with song information
    
    if (!playlist) {
        showEmptyPlaylist();
        return;
    }
    
    const songsContainer = document.getElementById('songs-list');
    songsContainer.innerHTML = '';
    
    if (playlist.songs.length === 0) {
        showEmptyPlaylist();
        return;
    }
    
    // ARRAY ITERATION: .forEach()
    playlist.songs.forEach((song, index) => {
        const songElement = createSongElement(song, index);
        songsContainer.appendChild(songElement);
    });
}

// Create playlist summary information
function createPlaylistSummary(playlist) {
    // TODO: ARRAY ITERATION - Use .map() and .reduce() for calculations
    // TODO: Create summary object with key statistics
    
    if (!playlist) return null;
    
    const stats = getPlaylistStats(playlist);
    
    return {
        name: playlist.name,
        songCount: stats.songCount,
        totalDuration: stats.totalDuration,
        genres: stats.genres.join(', '),
        lastModified: playlist.lastModified.toLocaleDateString()
    };
}

// ===========================================
// ARRAY DESTRUCTURING PRACTICE
// ===========================================

// Get current song and navigation info for player
function getPlayerNavigationInfo(playlist, currentIndex) {
    // TODO: ARRAY DESTRUCTURING - Extract current, previous, and next songs
    // TODO: Handle edge cases (first song, last song, empty playlist)
    
    if (!playlist || playlist.songs.length === 0) {
        return {
            currentSong: null,
            previousSong: null,
            nextSong: null,
            hasNext: false,
            hasPrevious: false
        };
    }
    
    // ARRAY DESTRUCTURING examples:
    const [firstSong, secondSong, ...remainingSongs] = playlist.songs;
  const lastSong = playlist.songs[playlist.songs.length - 1];

    
    // Get specific songs around current position
    const currentSong = playlist.songs[currentIndex] || null;
    const previousSong = currentIndex > 0 ? playlist.songs[currentIndex - 1] : null;
    const nextSong = currentIndex < playlist.songs.length - 1 ? playlist.songs[currentIndex + 1] : null;
    
    return {
        currentSong,
        previousSong,
        nextSong,
        hasNext: nextSong !== null,
        hasPrevious: previousSong !== null,
        firstSong,
        lastSong,
        totalSongs: playlist.songs.length
    };
}

// Get random songs for shuffle mode
function getShuffledPlaylist(playlist) {
    // TODO: ARRAY DESTRUCTURING - Separate current song from others
    // TODO: ARRAY METHODS - Create shuffled version of remaining songs
    
    if (!playlist || playlist.songs.length === 0) return [];
    
    // ARRAY DESTRUCTURING: Get current song and others
    const [currentSong, ...otherSongs] = playlist.songs;
    
    // Shuffle the other songs
    const shuffledOthers = [...otherSongs].sort(() => Math.random() - 0.5);
    
    // Return with current song first, then shuffled others
    return [currentSong, ...shuffledOthers];
}

// Extract multiple song properties for display
function extractSongDisplayData(songs) {
    // TODO: ARRAY DESTRUCTURING - Extract specific properties from song objects
    // TODO: ARRAY ITERATION - Use .map() with destructuring
    
    return songs.map(song => {
        // OBJECT DESTRUCTURING (bonus - not arrays, but useful!)
        const { title, artist, duration, genre, year } = song;
        
        return {
            displayTitle: title,
            displayArtist: artist,
            displayDuration: duration,
            displayGenre: genre,
            displayYear: year
        };
    });
}

// ===========================================
// UTILITY AND HELPER FUNCTIONS
// ===========================================

// Update playlist statistics
function updatePlaylistStats(playlist) {
    if (!playlist) return;
    
    const stats = getPlaylistStats(playlist);
    playlist.totalDuration = stats.totalDuration;
}

// Refresh the current playlist display
function refreshPlaylistDisplay() {
    if (currentPlaylist) {
        displayPlaylistSongs(currentPlaylist);
        updatePlaylistInfo(currentPlaylist);
    }
}

// Log array operations for learning purposes
function logArrayOperation(operation) {
    console.log(`Array Operation: ${operation}`);
    
    // Update debug panel if it exists
    const debugElement = document.getElementById('last-operation');
    if (debugElement) {
        debugElement.textContent = operation;
    }
}

// Display all playlists in sidebar
function displayAllPlaylists() {
    // TODO: Students will implement this in app.js
    // This function should iterate through allPlaylists and update the UI
}

// Update playlist info in header
function updatePlaylistInfo(playlist) {
    // TODO: Students will implement this in app.js
    // This function should update the playlist header information
}

// Show empty playlist message
function showEmptyPlaylist() {
    const songsContainer = document.getElementById('songs-list');
    songsContainer.innerHTML = `
        <div class="empty-playlist">
            <i class="fas fa-music"></i>
            <h3>No songs in playlist</h3>
            <p>Add some songs to get started!</p>
        </div>
    `;
}

// Create individual song element for display
function createSongElement(song, index) {
    // TODO: Students will implement this in app.js
    // This function should create DOM elements for displaying songs
    const songElement = document.createElement('div');
    songElement.className = 'song-item';
    songElement.innerHTML = `
        <div class="song-number">${index + 1}</div>
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
        <div class="song-album">${song.album}</div>
        <div class="song-duration">${song.duration}</div>
        <div class="song-actions">
            <button class="song-action-btn" onclick="playSong(${song.id})">
                <i class="fas fa-play"></i>
            </button>
        </div>
    `;
    return songElement;
}

// ===========================================
// STUDENT IMPLEMENTATION NOTES:
// ===========================================
/*
KEY ARRAY CONCEPTS TO IMPLEMENT:

1. ARRAY DECLARATION:
   - Create new playlists with initial songs
   - Initialize empty playlists and populate them
   - Use spread operator to copy arrays safely

2. ARRAY ACCESS:
   - Get first, last, and middle songs
   - Access songs by index position
   - Handle out-of-bounds access gracefully

3. ARRAY PROPERTIES:
   - Use .length to get playlist and song counts
   - Calculate statistics based on array sizes

4. ARRAY METHODS:
   - .push() - Add songs to end of playlist
   - .pop() - Remove last song from playlist
   - .shift() - Remove first song from playlist  
   - .unshift() - Add songs to beginning of playlist
   - .splice() - Insert/remove songs at specific positions
   - .slice() - Create playlist copies
   - .indexOf() - Find song positions
   - .includes() - Check if songs exist in playlist

5. ARRAY ITERATION:
   - .forEach() - Display all songs
   - .map() - Transform song data for display
   - .filter() - Search and filter songs
   - .find() - Find specific songs
   - .reduce() - Calculate totals and statistics
   - .sort() - Sort songs by different criteria

6. ARRAY DESTRUCTURING:
   - Extract current, previous, and next songs
   - Separate first song from rest of playlist
   - Get multiple songs for player queue

DEBUGGING TIPS:
- Use console.log() to see array contents
- Check array.length before accessing elements
- Test edge cases (empty arrays, single items)
- Use the debug panel to track operations

REMEMBER: Every function should demonstrate at least one array concept!
*/

// ===========================================
// STUDENT PRACTICE SECTION 
// ===========================================
// ===========================================
// STUDENT PRACTICE / TEST SECTION
// ===========================================


const rockPlaylist = createPlaylistFromTemplate("rock");
console.log("🎸 Created playlist:", rockPlaylist.name);
console.log("Songs in rock playlist:", rockPlaylist.songs.map(s => s.title));


const customPlaylist = createPlaylist("Study Vibes", "Calm and focused tracks", getSongsByIds([8, 9, 13, 21]));
console.log("📚 Custom playlist created:", customPlaylist);


const newSong = getSongById(5);
addSongToPlaylist(customPlaylist, newSong);


removeLastSongFromPlaylist(customPlaylist);


addSongToBeginning(customPlaylist, getSongById(1));

insertSongAtPosition(customPlaylist, getSongById(19), 2);


removeSongAtPosition(customPlaylist, 1);


const stats = getPlaylistStats(customPlaylist);
console.log("📊 Playlist Stats:", stats);


const rockSongs = filterSongsByGenre(rockPlaylist, "Rock");
console.log("🎵 Rock songs:", rockSongs.map(s => s.title));


const searchResults = searchPlaylistSongs(rockPlaylist, "Queen");
console.log("🔍 Search results for 'Queen':", searchResults.map(s => s.title));


const sortedSongs = sortPlaylistSongs(customPlaylist, "year");
console.log("📅 Sorted by year:", sortedSongs.map(s => `${s.year} - ${s.title}`));

const favs = getFavoriteSongs(rockPlaylist);
console.log("⭐ Favorites:", favs.map(s => s.title));

const nav = getPlayerNavigationInfo(rockPlaylist, 2);
console.log("▶️ Current song:", nav.currentSong?.title);
console.log("⏮️ Previous song:", nav.previousSong?.title);
console.log("⏭️ Next song:", nav.nextSong?.title);

const shuffled = getShuffledPlaylist(rockPlaylist);
console.log("🔀 Shuffled order:", shuffled.map(s => s.title));

const summary = createPlaylistSummary(customPlaylist);
console.log("🗒️ Playlist summary:", summary);
