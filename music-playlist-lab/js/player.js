// ===========================================
// MUSIC PLAYER - player.js
// ===========================================
// This file handles music player functionality using array operations
// Focus on queue management, current song tracking, and player state



// ===========================================
// PLAYER STATE (ARRAY-BASED)
// ===========================================

// Player queue (array of songs)
let playerQueue = []; // Main queue array for practicing array operations

// Current song information
let currentSongIndex = -1; // Index in the queue array
let currentSong = null;

// Player settings
let isPlaying = false;
let isShuffleMode = false;
let repeatMode = 'none'; // 'none', 'all', 'one'
let volume = 75;

// Playback simulation
let currentTime = 0;
let duration = 0;
let playbackInterval = null;

// ===========================================
// QUEUE MANAGEMENT (ARRAY OPERATIONS PRACTICE)
// ===========================================

// Load playlist into player queue
function loadPlaylistToQueue(playlist) {
    // TODO: ARRAY DECLARATION - Create new queue from playlist songs
    // TODO: Use spread operator to create a copy
    // TODO: Reset current song index
    
    if (!playlist || !playlist.songs) {
        playerQueue = []; // ARRAY DECLARATION: Empty array
        currentSongIndex = -1;
        currentSong = null;
        updatePlayerDisplay();
        return false;
    }
    
    // ARRAY DECLARATION: Copy playlist songs to queue
    playerQueue = [...playlist.songs]; // Spread operator for array copying
    
    // ARRAY ACCESS: Set first song as current if queue has songs
    if (playerQueue.length > 0) {
        currentSongIndex = 0;
        currentSong = playerQueue[0]; // ARRAY ACCESS: First element
    } else {
        currentSongIndex = -1;
        currentSong = null;
    }
    
    updatePlayerDisplay();
    updateQueueDisplay();
    
    logArrayOperation(`Loaded playlist with ${playerQueue.length} songs to queue`);
    return true;
}

// Add song to end of queue
function addSongToQueue(song) {
    // TODO: ARRAY METHOD - Use .push() to add song to queue
    // TODO: Update queue display
    
    if (!song) return false;
    
    playerQueue.push(song); // ARRAY METHOD: .push()
    updateQueueDisplay();
    
    logArrayOperation(`Added "${song.title}" to queue`);
    return true;
}

// Add song to front of queue (play next)
function addSongToFrontOfQueue(song) {
    // TODO: ARRAY METHOD - Use .unshift() or .splice() to add to front
    // TODO: Adjust current song index if necessary
    
    if (!song) return false;
    
    if (currentSongIndex >= 0) {
        // Insert after current song
        playerQueue.splice(currentSongIndex + 1, 0, song); // ARRAY METHOD: .splice()
    } else {
        // Add to beginning if no current song
        playerQueue.unshift(song); // ARRAY METHOD: .unshift()
        currentSongIndex = 0;
        currentSong = song;
    }
    
    updateQueueDisplay();
    logArrayOperation(`Added "${song.title}" to front of queue`);
    return true;
}

// Remove song from queue
function removeSongFromQueue(index) {
    // TODO: ARRAY METHOD - Use .splice() to remove song at index
    // TODO: Adjust current song index if necessary
    // TODO: Handle edge cases
    
    if (index < 0 || index >= playerQueue.length) {
        console.error("Invalid queue index:", index);
        return null;
    }
    
    const removedSong = playerQueue.splice(index, 1)[0]; // ARRAY METHOD: .splice()
    
    // Adjust current song index
    if (index < currentSongIndex) {
        currentSongIndex--;
    } else if (index === currentSongIndex) {
        // Current song was removed
        if (currentSongIndex >= playerQueue.length) {
            currentSongIndex = playerQueue.length - 1;
        }
        currentSong = currentSongIndex >= 0 ? playerQueue[currentSongIndex] : null;
        updatePlayerDisplay();
    }
    
    updateQueueDisplay();
    logArrayOperation(`Removed "${removedSong.title}" from queue`);
    return removedSong;
}

// Clear entire queue
function clearQueue() {
    // TODO: ARRAY DECLARATION - Reset queue to empty array
    // TODO: Reset all player state
    
    playerQueue = []; // ARRAY DECLARATION: Empty array
    currentSongIndex = -1;
    currentSong = null;
    isPlaying = false;
    
    updatePlayerDisplay();
    updateQueueDisplay();
    
    logArrayOperation("Cleared entire queue");
}

// Shuffle the queue
function shuffleQueue() {
    // TODO: ARRAY DESTRUCTURING - Separate current song from others
    // TODO: ARRAY METHODS - Shuffle remaining songs
    // TODO: Reconstruct queue with current song first
    
    if (playerQueue.length <= 1) return;
    
    if (currentSong && currentSongIndex >= 0) {
        // ARRAY DESTRUCTURING: Separate current song from others
        const otherSongs = playerQueue.filter((song, index) => index !== currentSongIndex);
        
        // Shuffle other songs
        const shuffledOthers = [...otherSongs].sort(() => Math.random() - 0.5);
        
        // ARRAY DECLARATION: Reconstruct queue
        playerQueue = [currentSong, ...shuffledOthers];
        currentSongIndex = 0;
    } else {
        // No current song, shuffle entire queue
        playerQueue.sort(() => Math.random() - 0.5);
        currentSongIndex = 0;
        currentSong = playerQueue[0];
    }
    
    updateQueueDisplay();
    updatePlayerDisplay();
    
    logArrayOperation("Shuffled queue");
}

// ===========================================
// SONG NAVIGATION (ARRAY ACCESS PRACTICE)
// ===========================================

// Play specific song in queue
function playQueueSong(index) {
    // TODO: ARRAY ACCESS - Get song at specific index
    // TODO: Validate index bounds
    // TODO: Update current song state
    
    if (index < 0 || index >= playerQueue.length) {
        console.error("Invalid song index:", index);
        return false;
    }
    
    currentSongIndex = index;
    currentSong = playerQueue[index]; // ARRAY ACCESS: Get song by index
    
    startPlaying();
    updatePlayerDisplay();
    
    logArrayOperation(`Playing song at index ${index}: "${currentSong.title}"`);
    return true;
}

// Go to next song
function nextSong() {
    // TODO: ARRAY ACCESS - Navigate to next song in queue
    // TODO: Handle repeat modes
    // TODO: Handle end of queue
    
    if (playerQueue.length === 0) {
        console.log("Queue is empty");
        return false;
    }
    
    let nextIndex;
    
    if (repeatMode === 'one') {
        // Stay on current song
        nextIndex = currentSongIndex;
    } else if (isShuffleMode) {
        // Random next song
        nextIndex = Math.floor(Math.random() * playerQueue.length);
    } else {
        // Sequential next song
        nextIndex = currentSongIndex + 1;
        
        if (nextIndex >= playerQueue.length) {
            if (repeatMode === 'all') {
                nextIndex = 0; // ARRAY ACCESS: Back to first song
            } else {
                // End of queue
                stopPlaying();
                return false;
            }
        }
    }
    
    return playQueueSong(nextIndex);
}

// Go to previous song
function previousSong() {
    // TODO: ARRAY ACCESS - Navigate to previous song in queue
    // TODO: Handle beginning of queue
    // TODO: Handle repeat modes
    
    if (playerQueue.length === 0) {
        console.log("Queue is empty");
        return false;
    }
    
    let prevIndex;
    
    if (isShuffleMode) {
        // Random previous song
        prevIndex = Math.floor(Math.random() * playerQueue.length);
    } else {
        // Sequential previous song
        prevIndex = currentSongIndex - 1;
        
        if (prevIndex < 0) {
            if (repeatMode === 'all') {
                prevIndex = playerQueue.length - 1; // ARRAY ACCESS: Last song
            } else {
                // Beginning of queue
                prevIndex = 0;
            }
        }
    }
    
    return playQueueSong(prevIndex);
}

// Get current song navigation info
function getCurrentNavigationInfo() {
    // TODO: ARRAY DESTRUCTURING - Extract navigation information
    // TODO: ARRAY ACCESS - Get current, previous, and next songs
    
    if (playerQueue.length === 0) {
        return {
            currentSong: null,
            previousSong: null,
            nextSong: null,
            hasNext: false,
            hasPrevious: false,
            queueLength: 0,
            currentIndex: -1
        };
    }
    
    // ARRAY ACCESS: Get songs around current position
    const previousSong = currentSongIndex > 0 ? playerQueue[currentSongIndex - 1] : null;
    const nextSong = currentSongIndex < playerQueue.length - 1 ? playerQueue[currentSongIndex + 1] : null;
    
    // ARRAY DESTRUCTURING examples:
    const [firstSong, ...restOfQueue] = playerQueue;
  const lastSong = playerQueue[playerQueue.length - 1]; 

    
    return {
        currentSong: currentSong,
        previousSong: previousSong,
        nextSong: nextSong,
        hasNext: nextSong !== null || repeatMode === 'all',
        hasPrevious: previousSong !== null || repeatMode === 'all',
        queueLength: playerQueue.length, // ARRAY PROPERTY: .length
        currentIndex: currentSongIndex,
        firstSong: firstSong,
        lastSong: lastSong
    };
}

// ===========================================
// QUEUE ANALYSIS (ARRAY ITERATION PRACTICE)
// ===========================================

// Get upcoming songs in queue
function getUpcomingSongs(count = 5) {
    // TODO: ARRAY METHODS - Use .slice() to get next songs
    // TODO: Handle case where current song is near end
    
    if (currentSongIndex < 0 || playerQueue.length === 0) {
        return [];
    }
    
    const startIndex = currentSongIndex + 1;
    const upcomingSongs = playerQueue.slice(startIndex, startIndex + count); // ARRAY METHOD: .slice()
    
    // If we don't have enough upcoming songs and repeat is on, add from beginning
    if (upcomingSongs.length < count && repeatMode === 'all') {
        const needed = count - upcomingSongs.length;
        const fromBeginning = playerQueue.slice(0, needed);
        upcomingSongs.push(...fromBeginning);
    }
    
    return upcomingSongs;
}

// Get queue statistics
function getQueueStatistics() {
    // TODO: ARRAY ITERATION - Use .reduce() and other methods for stats
    // TODO: Calculate total duration, genres, etc.
    
    if (playerQueue.length === 0) {
        return {
            totalSongs: 0,
            totalDuration: "0:00",
            averageDuration: "0:00",
            genres: [],
            artists: [],
            longestSong: null,
            shortestSong: null
        };
    }
    
    // ARRAY PROPERTY: Get count
    const totalSongs = playerQueue.length;
    
    // ARRAY ITERATION: Calculate total duration
    const totalSeconds = playerQueue.reduce((total, song) => total + song.durationSeconds, 0);
    const totalDuration = formatDuration(totalSeconds);
    
    // Calculate average
    const averageSeconds = totalSeconds / totalSongs;
    const averageDuration = formatDuration(Math.round(averageSeconds));
    
    // ARRAY ITERATION: Get unique genres and artists
    const genres = [...new Set(playerQueue.map(song => song.genre))];
    const artists = [...new Set(playerQueue.map(song => song.artist))];
    
    // ARRAY ITERATION: Find longest and shortest songs
    const longestSong = playerQueue.reduce((longest, song) => 
        !longest || song.durationSeconds > longest.durationSeconds ? song : longest, null);
    const shortestSong = playerQueue.reduce((shortest, song) => 
        !shortest || song.durationSeconds < shortest.durationSeconds ? song : shortest, null);
    
    return {
        totalSongs,
        totalDuration,
        averageDuration,
        genres,
        artists,
        longestSong,
        shortestSong
    };
}

// Search queue for songs
function searchQueue(searchTerm) {
    // TODO: ARRAY ITERATION - Use .filter() to search queue
    // TODO: Search title, artist, and album
    
    if (!searchTerm) return playerQueue;
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    return playerQueue.filter((song, index) => {
        const matchesSearch = song.title.toLowerCase().includes(lowerSearchTerm) ||
                            song.artist.toLowerCase().includes(lowerSearchTerm) ||
                            song.album.toLowerCase().includes(lowerSearchTerm);
        
        return matchesSearch;
    }); // ARRAY METHOD: .filter()
}

// ===========================================
// PLAYBACK CONTROL FUNCTIONS
// ===========================================

// Start/resume playing
function startPlaying() {
    if (!currentSong) {
        console.log("No song to play");
        return false;
    }
    
    isPlaying = true;
    duration = currentSong.durationSeconds;
    
    // Start playback simulation
    startPlaybackSimulation();
    
    updatePlayerControls();
    logArrayOperation(`Started playing: "${currentSong.title}"`);
    return true;
}

// Pause playing
function pausePlaying() {
    isPlaying = false;
    stopPlaybackSimulation();
    updatePlayerControls();
    
    logArrayOperation("Paused playback");
}

// Stop playing
function stopPlaying() {
    isPlaying = false;
    currentTime = 0;
    stopPlaybackSimulation();
    updatePlayerControls();
    updateProgressBar();
    
    logArrayOperation("Stopped playback");
}

// Toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        pausePlaying();
    } else {
        startPlaying();
    }
}

// Set playback position
function seekTo(position) {
    if (currentSong && position >= 0 && position <= duration) {
        currentTime = position;
        updateProgressBar();
        logArrayOperation(`Seeked to ${formatDuration(position)}`);
    }
}

// ===========================================
// PLAYER MODES (ARRAY BEHAVIOR MODIFICATION)
// ===========================================

// Toggle shuffle mode
function toggleShuffle() {
    // TODO: Modify how array navigation works based on shuffle state
    isShuffleMode = !isShuffleMode;
    
    if (isShuffleMode) {
        logArrayOperation("Enabled shuffle mode - random array access");
    } else {
        logArrayOperation("Disabled shuffle mode - sequential array access");
    }
    
    updatePlayerControls();
}

// Cycle repeat mode
function cycleRepeatMode() {
    // TODO: Change how array boundaries are handled
    const modes = ['none', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    repeatMode = modes[(currentIndex + 1) % modes.length];
    
    logArrayOperation(`Repeat mode: ${repeatMode}`);
    updatePlayerControls();
}

// Set volume
function setVolume(newVolume) {
    volume = Math.max(0, Math.min(100, newVolume));
    updateVolumeDisplay();
    
    logArrayOperation(`Volume set to ${volume}%`);
}

// ===========================================
// DISPLAY UPDATE FUNCTIONS
// ===========================================

// Update player display with current song
function updatePlayerDisplay() {
    const titleElement = document.getElementById('player-song-title');
    const artistElement = document.getElementById('player-song-artist');
    
    if (currentSong) {
        titleElement.textContent = currentSong.title;
        artistElement.textContent = currentSong.artist;
    } else {
        titleElement.textContent = "No song selected";
        artistElement.textContent = "Select a song to play";
    }
    
    updateProgressBar();
}

// Update player controls state
function updatePlayerControls() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const repeatBtn = document.getElementById('repeat-btn');
    
    // Update play/pause button
    if (playPauseBtn) {
        const icon = playPauseBtn.querySelector('i');
        if (isPlaying) {
            icon.className = 'fas fa-pause';
        } else {
            icon.className = 'fas fa-play';
        }
    }
    
    // Update shuffle button
    if (shuffleBtn) {
        shuffleBtn.classList.toggle('active', isShuffleMode);
    }
    
    // Update repeat button
    if (repeatBtn) {
        repeatBtn.classList.toggle('active', repeatMode !== 'none');
        const icon = repeatBtn.querySelector('i');
        if (repeatMode === 'one') {
            icon.className = 'fas fa-redo-alt';
        } else {
            icon.className = 'fas fa-redo';
        }
    }
    
    // Update navigation buttons
    const navInfo = getCurrentNavigationInfo();
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) {
        prevBtn.disabled = !navInfo.hasPrevious;
    }
    if (nextBtn) {
        nextBtn.disabled = !navInfo.hasNext;
    }
}

// Update queue display
function updateQueueDisplay() {
    const queueList = document.getElementById('up-next-list');
    const nowPlayingItem = document.getElementById('now-playing-item');
    
    // Update now playing
    if (nowPlayingItem) {
        if (currentSong) {
            nowPlayingItem.innerHTML = `
                <div class="queue-item current">
                    <strong>${currentSong.title}</strong><br>
                    <small>${currentSong.artist}</small>
                </div>
            `;
        } else {
            nowPlayingItem.innerHTML = '<span>No song playing</span>';
        }
    }
    
    // Update upcoming songs
    if (queueList) {
        const upcomingSongs = getUpcomingSongs(10);
        
        if (upcomingSongs.length === 0) {
            queueList.innerHTML = '<div class="empty-queue"><p>No songs in queue</p></div>';
        } else {
            queueList.innerHTML = upcomingSongs.map((song, index) => `
                <div class="queue-item" onclick="playQueueSong(${currentSongIndex + 1 + index})">
                    <strong>${song.title}</strong><br>
                    <small>${song.artist} - ${song.duration}</small>
                </div>
            `).join('');
        }
    }
}

// Update progress bar
function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const progressHandle = document.getElementById('progress-handle');
    const currentTimeSpan = document.getElementById('current-time');
    const totalTimeSpan = document.getElementById('total-time');
    
    if (currentTimeSpan) {
        currentTimeSpan.textContent = formatDuration(currentTime);
    }
    
    if (totalTimeSpan) {
        totalTimeSpan.textContent = formatDuration(duration);
    }
    
    if (progressFill && progressHandle && duration > 0) {
        const percentage = (currentTime / duration) * 100;
        progressFill.style.width = `${percentage}%`;
        progressHandle.style.left = `${percentage}%`;
    }
}

// Update volume display
function updateVolumeDisplay() {
    const volumeSlider = document.getElementById('volume-slider');
    const volumeBtn = document.getElementById('volume-btn');
    
    if (volumeSlider) {
        volumeSlider.value = volume;
    }
    
    if (volumeBtn) {
        const icon = volumeBtn.querySelector('i');
        if (volume === 0) {
            icon.className = 'fas fa-volume-mute';
        } else if (volume < 50) {
            icon.className = 'fas fa-volume-down';
        } else {
            icon.className = 'fas fa-volume-up';
        }
    }
}

// ===========================================
// PLAYBACK SIMULATION
// ===========================================

// Start playback time simulation
function startPlaybackSimulation() {
    stopPlaybackSimulation(); // Clear any existing interval
    
    playbackInterval = setInterval(() => {
        if (isPlaying && currentSong) {
            currentTime++;
            updateProgressBar();
            
            // Check if song finished
            if (currentTime >= duration) {
                // Auto advance to next song
                if (nextSong()) {
                    // Successfully moved to next song
                } else {
                    // End of queue
                    stopPlaying();
                }
            }
        }
    }, 1000); // Update every second
}

// Stop playback simulation
function stopPlaybackSimulation() {
    if (playbackInterval) {
        clearInterval(playbackInterval);
        playbackInterval = null;
    }
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Log array operations for learning
function logArrayOperation(operation) {
    console.log(`Player Array Operation: ${operation}`);
    
    // Update debug panel
    const debugElement = document.getElementById('last-operation');
    if (debugElement) {
        debugElement.textContent = `Player: ${operation}`;
    }
    
    // Log current queue state
    const arrayStateElement = document.getElementById('array-state');
    if (arrayStateElement) {
        const queueInfo = {
            queueLength: playerQueue.length,
            currentIndex: currentSongIndex,
            currentSong: currentSong ? currentSong.title : 'None',
            isPlaying: isPlaying,
            shuffleMode: isShuffleMode,
            repeatMode: repeatMode
        };
        arrayStateElement.textContent = JSON.stringify(queueInfo, null, 2);
    }
}

// Export player functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadPlaylistToQueue,
        addSongToQueue,
        addSongToFrontOfQueue,
        removeSongFromQueue,
        clearQueue,
        shuffleQueue,
        playQueueSong,
        nextSong,
        previousSong,
        getCurrentNavigationInfo,
        getUpcomingSongs,
        getQueueStatistics,
        searchQueue,
        togglePlayPause,
        toggleShuffle,
        cycleRepeatMode,
        setVolume
    };
}

// ===========================================
// STUDENT IMPLEMENTATION NOTES:
// ===========================================
/*
PLAYER-SPECIFIC ARRAY CONCEPTS:

1. QUEUE MANAGEMENT (Array as Stack/Queue):
   - .push() - Add songs to end of queue
   - .unshift() - Add songs to front of queue  
   - .splice() - Insert songs at specific positions
   - .shift()/.pop() - Remove songs from queue

2. NAVIGATION (Array Index Management):
   - Track current position with index
   - Navigate forward/backward through array
   - Handle array boundaries (first/last songs)
   - Wrap around for repeat modes

3. QUEUE ANALYSIS (Array Processing):
   - .slice() - Get upcoming songs
   - .filter() - Search through queue
   - .reduce() - Calculate queue statistics
   - .map() - Transform queue data for display

4. SHUFFLE LOGIC (Array Randomization):
   - Separate current song from others using destructuring
   - Randomize remaining songs
   - Reconstruct queue maintaining current position

5. REPEAT MODES (Array Boundary Handling):
   - 'none' - Stop at array end
   - 'all' - Loop back to array beginning  
   - 'one' - Stay at current array index

6. QUEUE STATE (Array State Management):
   - Track current index in array
   - Handle array modifications during playback
   - Maintain queue integrity during operations

DEBUGGING PLAYER ARRAYS:
- Log queue state after each operation
- Verify index bounds before array access
- Test edge cases (empty queue, single song)
- Check array length before navigation

The player queue is your main array for practicing - 
every player operation should involve array manipulation!
*/

// ===========================================
// STUDENT PRACTICE / TEST SECTION (player.js)
// ===========================================

// Build a playlist object from the rock template
const rockPlaylistForQueue = {
  id: 'test-rock',
  name: 'Classic Rock Hits',
  description: 'Queue test',
  songs: getSongsByIds(playlistTemplates.rock.songs),
  createdDate: new Date(),
  lastModified: new Date()
};

console.log('🤘 Loading rock playlist to queue...');
loadPlaylistToQueue(rockPlaylistForQueue);

console.log('▶️ Start playing first song...');
startPlaying();

console.log('⏭️ Next song...');
nextSong();

console.log('⏮️ Previous song...');
previousSong();

console.log('🔀 Shuffle queue (keep current first)...');
shuffleQueue();

console.log('➕ Add a song to end of queue (id 5)...');
addSongToQueue(getSongsByIds([5])[0]);

console.log('⏭️ Play specific song at index 3...');
playQueueSong(3);

console.log('🔍 Search queue for "queen"...');
console.log(searchQueue('queen').map(s => s.title));

console.log('📈 Queue stats:');
console.log(getQueueStatistics());

console.log('📋 Upcoming (next 5):');
console.log(getUpcomingSongs(5).map(s => s.title));

console.log('🔁 Cycle repeat mode twice...');
cycleRepeatMode(); // none -> all
cycleRepeatMode(); // all -> one

console.log('🔊 Set volume to 40...');
setVolume(40);

console.log('⏸️ Pause, then ▶️ resume...');
pausePlaying();
startPlaying();

console.log('⏹️ Stop playback...');
stopPlaying();
