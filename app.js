// ===========================================
// MAIN APPLICATION - app.js
// ===========================================
// This file coordinates all playlist and player functionality
// Students implement event handlers and UI updates using array operations

// ===========================================
// APPLICATION STATE
// ===========================================

// Current application state
let appState = {
    selectedPlaylistId: null,
    searchTerm: '',
    activeFilters: {
        genre: '',
        mood: ''
    },
    sortBy: 'title',
    isDebugMode: false
};

// ===========================================
// APPLICATION INITIALIZATION
// ===========================================

// Initialize the application when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("Music Playlist Manager - Arrays Lab Starting...");
    
    // TODO: Students implement initialization functions
    initializeApp();
    setupEventListeners();
    loadInitialData();
    
    console.log("Application initialized successfully!");
});

// Main app initialization
function initializeApp() {
    // TODO: ARRAY DECLARATION - Initialize with sample playlists
    // TODO: Set up initial UI state
    // TODO: Configure debug panel
    
    console.log("Initializing Music Playlist Manager...");
    
    // Create some initial playlists using array operations
    createInitialPlaylists();
    
    // Set up UI components
    initializeUIComponents();
    
    // Update displays
    updateAllDisplays();
    
    // Show welcome message
    showWelcomeMessage();
}

// Create initial playlists for demo
function createInitialPlaylists() {
    // TODO: ARRAY OPERATIONS - Create playlists from templates
    // TODO: Use createPlaylistFromTemplate() function
    // TODO: Populate with sample data
    
    console.log("Creating initial playlists...");
    
    // ARRAY DECLARATION: Create playlists from templates
    const templates = ['rock', 'pop', 'chill'];
    
    templates.forEach(templateName => {
        const playlist = createPlaylistFromTemplate(templateName);
        if (playlist) {
            console.log(`Created playlist: ${playlist.name} with ${playlist.songs.length} songs`);
        }
    });
    
    // ARRAY ACCESS: Select first playlist as default
    if (allPlaylists.length > 0) {
        selectPlaylist(allPlaylists[0].id);
    }
}

// Initialize UI components
function initializeUIComponents() {
    // TODO: Set up filter dropdowns with array data
    // TODO: Initialize player controls
    // TODO: Configure debug panel
    
    console.log("Setting up UI components...");
    
    // Populate filter dropdowns using array iteration
    populateFilterDropdowns();
    
    // Initialize player volume
    setVolume(75);
    
    // Set up debug panel
    if (appState.isDebugMode) {
        showDebugPanel();
    }
}

// ===========================================
// EVENT LISTENERS SETUP
// ===========================================

// Set up all event listeners
function setupEventListeners() {
    // TODO: Students implement all event handlers
    // TODO: Each handler should demonstrate array operations
    
    console.log("Setting up event listeners...");
    
    // Playlist management events
    setupPlaylistEvents();
    
    // Player control events  
    setupPlayerEvents();
    
    // Search and filter events
    setupSearchEvents();
    
    // Array operation button events
    setupArrayOperationEvents();
    
    // Modal and UI events
    setupUIEvents();
}

// Playlist-related event listeners
function setupPlaylistEvents() {
    // TODO: ARRAY OPERATIONS in event handlers
    
    // Create playlist button
    const createBtn = document.getElementById('create-playlist-btn');
    if (createBtn) {
        createBtn.addEventListener('click', () => {
            showCreatePlaylistModal();
        });
    }
    
    // Confirm create playlist
    const confirmCreateBtn = document.getElementById('confirm-create-btn');
    if (confirmCreateBtn) {
        confirmCreateBtn.addEventListener('click', () => {
            handleCreatePlaylist();
        });
    }
    
    // Play all button
    const playAllBtn = document.getElementById('play-all-btn');
    if (playAllBtn) {
        playAllBtn.addEventListener('click', () => {
            playCurrentPlaylist();
        });
    }
    
    // Shuffle playlist button
    const shufflePlaylistBtn = document.getElementById('shuffle-playlist-btn');
    if (shufflePlaylistBtn) {
        shufflePlaylistBtn.addEventListener('click', () => {
            shuffleCurrentPlaylist();
        });
    }
}

// Player control event listeners
function setupPlayerEvents() {
    // TODO: ARRAY NAVIGATION in player events
    
    // Play/Pause button
    const playPauseBtn = document.getElementById('play-pause-btn');
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            togglePlayPause();
        });
    }
    
    // Previous button
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            previousSong(); // ARRAY NAVIGATION: Move backward in queue
        });
    }
    
    // Next button
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSong(); // ARRAY NAVIGATION: Move forward in queue
        });
    }
    
    // Shuffle button
    const shuffleBtn = document.getElementById('shuffle-btn');
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
            toggleShuffle(); // ARRAY RANDOMIZATION
        });
    }
    
    // Repeat button
    const repeatBtn = document.getElementById('repeat-btn');
    if (repeatBtn) {
        repeatBtn.addEventListener('click', () => {
            cycleRepeatMode(); // ARRAY BOUNDARY HANDLING
        });
    }
    
    // Volume control
    const volumeSlider = document.getElementById('volume-slider');
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            setVolume(parseInt(e.target.value));
        });
    }
    
    // Queue button
    const queueBtn = document.getElementById('queue-btn');
    if (queueBtn) {
        queueBtn.addEventListener('click', () => {
            toggleQueuePanel();
        });
    }
}

// Search and filter event listeners
function setupSearchEvents() {
    // TODO: ARRAY FILTERING in search events
    
    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            handleSearch(e.target.value); // ARRAY FILTERING
        });
    }
    
    // Clear search button
    const clearSearchBtn = document.getElementById('clear-search');
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            clearSearch();
        });
    }
    
    // Genre filter
    const genreFilter = document.getElementById('genre-filter');
    if (genreFilter) {
        genreFilter.addEventListener('change', (e) => {
            handleGenreFilter(e.target.value); // ARRAY FILTERING
        });
    }
    
    // Mood filter
    const moodFilter = document.getElementById('mood-filter');
    if (moodFilter) {
        moodFilter.addEventListener('change', (e) => {
            handleMoodFilter(e.target.value); // ARRAY FILTERING
        });
    }
    
    // Sort options
    const sortSelect = document.getElementById('sort-options');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            handleSortChange(e.target.value); // ARRAY SORTING
        });
    }
}

// Array operation button event listeners
function setupArrayOperationEvents() {
    // TODO: Direct array method demonstrations
    
    // Push song button
    const pushBtn = document.getElementById('push-song-btn');
    if (pushBtn) {
        pushBtn.addEventListener('click', () => {
            demonstratePushOperation(); // ARRAY METHOD: .push()
        });
    }
    
    // Pop song button
    const popBtn = document.getElementById('pop-song-btn');
    if (popBtn) {
        popBtn.addEventListener('click', () => {
            demonstratePopOperation(); // ARRAY METHOD: .pop()
        });
    }
    
    // Shift song button
    const shiftBtn = document.getElementById('shift-song-btn');
    if (shiftBtn) {
        shiftBtn.addEventListener('click', () => {
            demonstrateShiftOperation(); // ARRAY METHOD: .shift()
        });
    }
    
    // Unshift song button
    const unshiftBtn = document.getElementById('unshift-song-btn');
    if (unshiftBtn) {
        unshiftBtn.addEventListener('click', () => {
            demonstrateUnshiftOperation(); // ARRAY METHOD: .unshift()
        });
    }
}

// UI and modal event listeners
function setupUIEvents() {
    // Modal close buttons
    const closeModalBtn = document.getElementById('close-modal-btn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            hideCreatePlaylistModal();
        });
    }
    
    // Cancel create button
    const cancelCreateBtn = document.getElementById('cancel-create-btn');
    if (cancelCreateBtn) {
        cancelCreateBtn.addEventListener('click', () => {
            hideCreatePlaylistModal();
        });
    }
    
    // Debug toggle
    const debugToggle = document.getElementById('toggle-debug-btn');
    if (debugToggle) {
        debugToggle.addEventListener('click', () => {
            toggleDebugMode();
        });
    }
    
    // Clear debug log
    const clearDebugBtn = document.getElementById('clear-debug-btn');
    if (clearDebugBtn) {
        clearDebugBtn.addEventListener('click', () => {
            clearDebugLog();
        });
    }
    
    // Close queue panel
    const closeQueueBtn = document.getElementById('close-queue-btn');
    if (closeQueueBtn) {
        closeQueueBtn.addEventListener('click', () => {
            hideQueuePanel();
        });
    }
}

// ===========================================
// PLAYLIST OPERATIONS (ARRAY-FOCUSED)
// ===========================================

// Select a playlist for viewing/editing
function selectPlaylist(playlistId) {
    // TODO: ARRAY ACCESS - Find playlist by ID
    // TODO: Update UI to show selected playlist
    // TODO: Display playlist songs using array iteration
    
    console.log(`Selecting playlist: ${playlistId}`);
    
    const playlist = getPlaylistById(playlistId); // ARRAY ACCESS
    if (!playlist) {
        console.error("Playlist not found:", playlistId);
        return false;
    }
    
    appState.selectedPlaylistId = playlistId;
    currentPlaylist = playlist;
    
    // Update playlist display using array operations
    updatePlaylistDisplay(playlist);
    updatePlaylistInfo(playlist);
    updatePlaylistSongs(playlist);
    
    // Update sidebar to show active playlist
    updatePlaylistsListDisplay();
    
    return true;
}

// Play entire current playlist
function playCurrentPlaylist() {
    // TODO: ARRAY OPERATIONS - Load playlist to player queue
    // TODO: Start playing first song
    
    if (!currentPlaylist || currentPlaylist.songs.length === 0) {
        console.log("No playlist selected or playlist is empty");
        return false;
    }
    
    // ARRAY OPERATIONS: Load playlist songs to queue
    const success = loadPlaylistToQueue(currentPlaylist);
    if (success) {
        startPlaying(); // Start playing first song in queue
        console.log(`Started playing playlist: ${currentPlaylist.name}`);
    }
    
    return success;
}

// Shuffle current playlist
function shuffleCurrentPlaylist() {
    // TODO: ARRAY OPERATIONS - Create shuffled version of playlist
    // TODO: Update display with shuffled songs
    
    if (!currentPlaylist || currentPlaylist.songs.length === 0) {
        console.log("No playlist to shuffle");
        return false;
    }
    
    // ARRAY OPERATIONS: Create shuffled copy
    const shuffledSongs = [...currentPlaylist.songs].sort(() => Math.random() - 0.5);
    
    // Create temporary shuffled playlist
    const shuffledPlaylist = {
        ...currentPlaylist,
        songs: shuffledSongs,
        name: `${currentPlaylist.name} (Shuffled)`
    };
    
    // Load to player and update display
    loadPlaylistToQueue(shuffledPlaylist);
    updatePlaylistSongs(shuffledPlaylist);
    
    console.log(`Shuffled playlist: ${currentPlaylist.name}`);
    return true;
}

// ===========================================
// SEARCH AND FILTER OPERATIONS (ARRAY ITERATION)
// ===========================================

// Handle search input
function handleSearch(searchTerm) {
    // TODO: ARRAY FILTERING - Filter songs based on search term
    // TODO: Update display with filtered results
    
    console.log(`Searching for: "${searchTerm}"`);
    
    appState.searchTerm = searchTerm;
    
    if (!currentPlaylist) return;
    
    // ARRAY FILTERING: Search through current playlist
    const filteredSongs = searchPlaylistSongs(currentPlaylist, searchTerm);
    
    // Update display with filtered results
    displayFilteredSongs(filteredSongs);
    
    // Update search result count
    updateSearchResultsCount(filteredSongs.length, currentPlaylist.songs.length);
}

// Handle genre filter
function handleGenreFilter(genre) {
    // TODO: ARRAY FILTERING - Filter songs by genre
    // TODO: Combine with existing search term
    
    console.log(`Filtering by genre: "${genre}"`);
    
    appState.activeFilters.genre = genre;
    applyAllFilters();
}

// Handle mood filter
function handleMoodFilter(mood) {
    // TODO: ARRAY FILTERING - Filter songs by mood
    // TODO: Combine with existing filters
    
    console.log(`Filtering by mood: "${mood}"`);
    
    appState.activeFilters.mood = mood;
    applyAllFilters();
}

// Handle sort change
function handleSortChange(sortBy) {
    // TODO: ARRAY SORTING - Sort songs by selected criteria
    // TODO: Update display with sorted results
    
    console.log(`Sorting by: "${sortBy}"`);
    
    appState.sortBy = sortBy;
    
    if (!currentPlaylist) return;
    
    // ARRAY SORTING: Sort current playlist songs
    const sortedSongs = sortPlaylistSongs(currentPlaylist, sortBy);
    
    // Update display with sorted results
    displaySortedSongs(sortedSongs);
}

// Apply all active filters
function applyAllFilters() {
    // TODO: ARRAY CHAINING - Combine multiple filter operations
    // TODO: Apply search, genre, and mood filters together
    
    if (!currentPlaylist) return;
    
    let filteredSongs = [...currentPlaylist.songs]; // Start with all songs
    
    // ARRAY CHAINING: Apply multiple filters
    if (appState.searchTerm) {
        filteredSongs = filteredSongs.filter(song => 
            song.title.toLowerCase().includes(appState.searchTerm.toLowerCase()) ||
            song.artist.toLowerCase().includes(appState.searchTerm.toLowerCase()) ||
            song.album.toLowerCase().includes(appState.searchTerm.toLowerCase())
        );
    }
    
    if (appState.activeFilters.genre) {
        filteredSongs = filteredSongs.filter(song => song.genre === appState.activeFilters.genre);
    }
    
    if (appState.activeFilters.mood) {
        filteredSongs = filteredSongs.filter(song => song.mood === appState.activeFilters.mood);
    }
    
    // Apply sorting
    if (appState.sortBy !== 'title') {
        filteredSongs = sortArrayByProperty(filteredSongs, appState.sortBy);
    }
    
    // Update display
    displayFilteredSongs(filteredSongs);
    updateSearchResultsCount(filteredSongs.length, currentPlaylist.songs.length);
}

// Clear search and filters
function clearSearch() {
    // TODO: Reset all filters and show full playlist
    
    appState.searchTerm = '';
    appState.activeFilters.genre = '';
    appState.activeFilters.mood = '';
    
    // Clear input fields
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    
    const genreFilter = document.getElementById('genre-filter');
    if (genreFilter) genreFilter.value = '';
    
    const moodFilter = document.getElementById('mood-filter');
    if (moodFilter) moodFilter.value = '';
    
    // Show full playlist
    if (currentPlaylist) {
        updatePlaylistSongs(currentPlaylist);
    }
    
    console.log("Cleared all search filters");
}

// ===========================================
// ARRAY METHOD DEMONSTRATIONS
// ===========================================

// Demonstrate .push() method
function demonstratePushOperation() {
    // TODO: ARRAY METHOD - Add random song to current playlist using .push()
    
    if (!currentPlaylist) {
        alert("Please select a playlist first!");
        return;
    }
    
    // ARRAY ACCESS: Get random song from sample data
    const randomIndex = Math.floor(Math.random() * sampleSongs.length);
    const randomSong = sampleSongs[randomIndex];
    
    // ARRAY METHOD: .push()
    const success = addSongToPlaylist(currentPlaylist, randomSong);
    
    if (success) {
        console.log(`ARRAY DEMO: Used .push() to add "${randomSong.title}"`);
        alert(`Added "${randomSong.title}" to end of playlist using .push()!`);
    }
}

// Demonstrate .pop() method
function demonstratePopOperation() {
    // TODO: ARRAY METHOD - Remove last song using .pop()
    
    if (!currentPlaylist || currentPlaylist.songs.length === 0) {
        alert("Playlist is empty! Add some songs first.");
        return;
    }
    
    // ARRAY METHOD: .pop()
    const removedSong = removeLastSongFromPlaylist(currentPlaylist);
    
    if (removedSong) {
        console.log(`ARRAY DEMO: Used .pop() to remove "${removedSong.title}"`);
        alert(`Removed "${removedSong.title}" from end of playlist using .pop()!`);
    }
}

// Demonstrate .shift() method
function demonstrateShiftOperation() {
    // TODO: ARRAY METHOD - Remove first song using .shift()
    
    if (!currentPlaylist || currentPlaylist.songs.length === 0) {
        alert("Playlist is empty! Add some songs first.");
        return;
    }
    
    // ARRAY METHOD: .shift()
    const removedSong = removeFirstSongFromPlaylist(currentPlaylist);
    
    if (removedSong) {
        console.log(`ARRAY DEMO: Used .shift() to remove "${removedSong.title}"`);
        alert(`Removed "${removedSong.title}" from beginning of playlist using .shift()!`);
    }
}

// Demonstrate .unshift() method
function demonstrateUnshiftOperation() {
    // TODO: ARRAY METHOD - Add random song to beginning using .unshift()
    
    if (!currentPlaylist) {
        alert("Please select a playlist first!");
        return;
    }
    
    // ARRAY ACCESS: Get random song
    const randomIndex = Math.floor(Math.random() * sampleSongs.length);
    const randomSong = sampleSongs[randomIndex];
    
    // ARRAY METHOD: .unshift()
    const success = addSongToBeginning(currentPlaylist, randomSong);
    
    if (success) {
        console.log(`ARRAY DEMO: Used .unshift() to add "${randomSong.title}"`);
        alert(`Added "${randomSong.title}" to beginning of playlist using .unshift()!`);
    }
}

// ===========================================
// DISPLAY UPDATE FUNCTIONS
// ===========================================

// Update all display components
function updateAllDisplays() {
    updatePlaylistsListDisplay();
    updateHeaderStats();
    
    if (currentPlaylist) {
        updatePlaylistDisplay(currentPlaylist);
    }
}

// Update playlists list in sidebar
function updatePlaylistsListDisplay() {
    // TODO: ARRAY ITERATION - Display all playlists using .forEach()
    
    const playlistsList = document.getElementById('playlists-list');
    if (!playlistsList) return;
    
    if (allPlaylists.length === 0) {
        playlistsList.innerHTML = '<p class="empty-message">No playlists yet. Create one!</p>';
        return;
    }
    
    // ARRAY ITERATION: .forEach() to display each playlist
    playlistsList.innerHTML = '';
    allPlaylists.forEach(playlist => {
        const playlistElement = createPlaylistElement(playlist);
        playlistsList.appendChild(playlistElement);
    });
}

// Create playlist element for sidebar
function createPlaylistElement(playlist) {
    // TODO: Create DOM element with playlist information
    
    const playlistDiv = document.createElement('div');
    playlistDiv.className = 'playlist-item';
    playlistDiv.dataset.playlistId = playlist.id;
    
    if (playlist.id === appState.selectedPlaylistId) {
        playlistDiv.classList.add('active');
    }
    
    playlistDiv.innerHTML = `
        <h4>${playlist.name}</h4>
        <p>${playlist.description}</p>
        <div class="playlist-meta">
            ${playlist.songs.length} songs • Created ${playlist.createdDate.toLocaleDateString()}
        </div>
    `;
    
    // Add click handler
    playlistDiv.addEventListener('click', () => {
        selectPlaylist(playlist.id);
    });
    
    return playlistDiv;
}

// Update playlist information display
function updatePlaylistDisplay(playlist) {
    updatePlaylistInfo(playlist);
    updatePlaylistSongs(playlist);
}

// Update playlist header information
function updatePlaylistInfo(playlist) {
    // TODO: ARRAY PROPERTIES - Display playlist statistics
    
    const nameElement = document.getElementById('current-playlist-name');
    const descElement = document.getElementById('current-playlist-description');
    const songCountElement = document.getElementById('playlist-song-count');
    const durationElement = document.getElementById('playlist-duration');
    const lastModifiedElement = document.getElementById('playlist-last-modified');
    
    if (nameElement) nameElement.textContent = playlist.name;
    if (descElement) descElement.textContent = playlist.description;
    
    // ARRAY PROPERTIES: Use .length and calculate stats
    const stats = getPlaylistStats(playlist);
    if (songCountElement) songCountElement.textContent = `${stats.songCount} songs`;
    if (durationElement) durationElement.textContent = stats.totalDuration;
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Modified ${playlist.lastModified.toLocaleDateString()}`;
    }
}

// Update songs display
function updatePlaylistSongs(playlist) {
    // TODO: ARRAY ITERATION - Display all songs using array methods
    displayPlaylistSongs(playlist);
}

// Display filtered/sorted songs
function displayFilteredSongs(songs) {
    // TODO: ARRAY ITERATION - Display subset of songs
    
    const songsContainer = document.getElementById('songs-list');
    if (!songsContainer) return;
    
    if (songs.length === 0) {
        songsContainer.innerHTML = `
            <div class="empty-playlist">
                <i class="fas fa-search"></i>
                <h3>No songs found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    songsContainer.innerHTML = '';
    
    // ARRAY ITERATION: .forEach() to display filtered songs
    songs.forEach((song, index) => {
        const songElement = createSongElement(song, index);
        songsContainer.appendChild(songElement);
    });
}

// Update header statistics
function updateHeaderStats() {
    // TODO: ARRAY PROPERTIES - Calculate and display totals
    
    const totalPlaylistsSpan = document.getElementById('total-playlists');
    const totalSongsSpan = document.getElementById('total-songs');
    
    if (totalPlaylistsSpan) {
        const playlistCount = getTotalPlaylistCount(); // ARRAY PROPERTY: .length
        totalPlaylistsSpan.textContent = `${playlistCount} Playlist${playlistCount !== 1 ? 's' : ''}`;
    }
    
    if (totalSongsSpan) {
        const songCount = getTotalSongCount(); // ARRAY ITERATION: sum all songs
        totalSongsSpan.textContent = `${songCount} Song${songCount !== 1 ? 's' : ''}`;
    }
}

// Update search results count
function updateSearchResultsCount(filteredCount, totalCount) {
    // TODO: Show search results information
    
    const playlistInfo = document.getElementById('current-playlist-description');
    if (playlistInfo && filteredCount !== totalCount) {
        playlistInfo.textContent = `Showing ${filteredCount} of ${totalCount} songs`;
    }
}

// ===========================================
// MODAL AND UI FUNCTIONS
// ===========================================

// Show create playlist modal
function showCreatePlaylistModal() {
    const modal = document.getElementById('create-playlist-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

// Hide create playlist modal
function hideCreatePlaylistModal() {
    const modal = document.getElementById('create-playlist-modal');
    if (modal) {
        modal.classList.remove('active');
        clearModalInputs();
    }
}

// Handle playlist creation
function handleCreatePlaylist() {
    // TODO: ARRAY OPERATIONS - Create new playlist from form data
    
    const nameInput = document.getElementById('playlist-name-input');
    const descInput = document.getElementById('playlist-description-input');
    const templateSelect = document.getElementById('playlist-template');
    
    const name = nameInput?.value?.trim();
    const description = descInput?.value?.trim();
    const template = templateSelect?.value;
    
    if (!name) {
        alert("Please enter a playlist name!");
        return;
    }
    
    let newPlaylist;
    
    if (template) {
        // ARRAY OPERATIONS: Create from template
        newPlaylist = createPlaylistFromTemplate(template);
        if (newPlaylist) {
            newPlaylist.name = name;
            newPlaylist.description = description;
        }
    } else {
        // ARRAY DECLARATION: Create empty playlist
        newPlaylist = createPlaylist(name, description, []);
    }
    
    if (newPlaylist) {
        hideCreatePlaylistModal();
        selectPlaylist(newPlaylist.id);
        updateAllDisplays();
        
        console.log(`Created new playlist: ${name}`);
        alert(`Created playlist "${name}" successfully!`);
    }
}

// Clear modal inputs
function clearModalInputs() {
    const inputs = document.querySelectorAll('#create-playlist-modal input, #create-playlist-modal textarea, #create-playlist-modal select');
    inputs.forEach(input => {
        input.value = '';
    });
}

// Toggle queue panel
function toggleQueuePanel() {
    const queuePanel = document.getElementById('queue-panel');
    if (queuePanel) {
        queuePanel.classList.toggle('active');
    }
}

// Hide queue panel
function hideQueuePanel() {
    const queuePanel = document.getElementById('queue-panel');
    if (queuePanel) {
        queuePanel.classList.remove('active');
    }
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Populate filter dropdowns with array data
function populateFilterDropdowns() {
    // TODO: ARRAY ITERATION - Populate dropdowns from song data
    
    const genreFilter = document.getElementById('genre-filter');
    const moodFilter = document.getElementById('mood-filter');
    
    // ARRAY ITERATION: Get unique values
    const genres = getUniqueGenres();
    const moods = getUniqueMoods();
    
    // Populate genre dropdown
    if (genreFilter) {
        genres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            genreFilter.appendChild(option);
        });
    }
    
    // Populate mood dropdown
    if (moodFilter) {
        moods.forEach(mood => {
            const option = document.createElement('option');
            option.value = mood;
            option.textContent = mood;
            moodFilter.appendChild(option);
        });
    }
}

// Sort array by property
function sortArrayByProperty(array, property) {
    // TODO: ARRAY SORTING - Generic sort function
    
    return [...array].sort((a, b) => {
        if (typeof a[property] === 'string') {
            return a[property].localeCompare(b[property]);
        }
        return a[property] - b[property];
    });
}

// Load initial data
function loadInitialData() {
    // TODO: Students can add more initial data loading here
    console.log("Loading initial data...");
    
    // Debug info
    logArrayOperation("Application initialized with sample data");
}

// Show welcome message
function showWelcomeMessage() {
    console.log(`
    🎵 Welcome to PlaylistPro - JavaScript Arrays Lab! 🎵
    
    You now have a fully functional music playlist manager to practice arrays with!
    
    Array Concepts You'll Practice:
    • Array Declaration - Creating playlists
    • Array Access - Getting songs by position  
    • Array Properties - Using .length for counts
    • Array Methods - .push(), .pop(), .shift(), .unshift(), .splice()
    • Array Iteration - .forEach(), .map(), .filter(), .reduce()
    • Array Destructuring - Player navigation and queue management
    
    Try the Array Operation buttons in the sidebar to see array methods in action!
    
    Happy coding! 🎸
    `);
}

// Toggle debug mode
function toggleDebugMode() {
    appState.isDebugMode = !appState.isDebugMode;
    
    if (appState.isDebugMode) {
        showDebugPanel();
    } else {
        hideDebugPanel();
    }
}

// Show debug panel
function showDebugPanel() {
    const debugPanel = document.getElementById('debug-panel');
    if (debugPanel) {
        debugPanel.style.display = 'block';
    }
}

// Hide debug panel
function hideDebugPanel() {
    const debugPanel = document.getElementById('debug-panel');
    if (debugPanel) {
        debugPanel.style.display = 'none';
    }
}

// Clear debug log
function clearDebugLog() {
    const arrayStateElement = document.getElementById('array-state');
    const lastOperationElement = document.getElementById('last-operation');
    
    if (arrayStateElement) {
        arrayStateElement.textContent = '// Array operations will be logged here';
    }
    
    if (lastOperationElement) {
        lastOperationElement.textContent = '// No operations yet';
    }
    
    console.clear();
    console.log("Debug log cleared");
}

// ===========================================
// STUDENT IMPLEMENTATION NOTES:
// ===========================================
/*
MAIN APP ARRAY CONCEPTS:

1. COORDINATION OF ARRAY OPERATIONS:
   - Manage multiple arrays (playlists, songs, queue)
   - Coordinate between playlist arrays and player queue
   - Handle array state across different UI components

2. EVENT-DRIVEN ARRAY MANIPULATION:
   - User interactions trigger array operations
   - Search input filters arrays in real-time
   - Button clicks modify arrays and update displays

3. ARRAY DATA FLOW:
   - Playlist arrays → Display arrays → UI
   - Search/filter operations create new arrays
   - Player queue array drives music playback

4. REAL-TIME ARRAY UPDATES:
   - DOM updates reflect array changes immediately
   - Search results update as arrays are filtered
   - Statistics update as arrays are modified

5. ARRAY STATE MANAGEMENT:
   - Track current array states across app
   - Maintain consistency between different array views
   - Handle array modifications safely

KEY IMPLEMENTATION AREAS:

• Event Handlers - Every user action involves arrays
• Display Updates - Arrays drive all UI content  
• Search/Filter - Real-time array processing
• Data Coordination - Multiple arrays working together
• State Management - Keeping arrays synchronized

TESTING YOUR ARRAYS:
1. Create playlists and verify array contents
2. Try all search/filter combinations
3. Test array operation buttons extensively
4. Use debug panel to monitor array state
5. Verify arrays update UI correctly

Remember: This app demonstrates that arrays are not just data structures - 
they're the foundation of interactive user experiences!
*/