// Attach a click event listener to the "Show Player Health" button
document.getElementById("showHealthButton").addEventListener("click", function () {
    getPlayerHealthFromUnity();
});

// Function to call Unity's 'SendMessage' to retrieve player health
function getPlayerHealthFromUnity() {
    // Check if the Unity WebGL instance is loaded and available
    if (window.unityInstance) {
        unityInstance.SendMessage('GameController', 'GetPlayerHealth');
    } else {
        console.error("Unity instance not ready yet.");
    }
}

// Function to receive the player health value from Unity
function onUnityMessage(playerHealth) {
    // Display the player health in the HTML
    document.getElementById("playerHealthDisplay").textContent = "Player Health: " + playerHealth;
}