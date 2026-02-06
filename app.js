// Vault Protection Logic
const VAULT_HASH = "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"; // Default: 'password'

async function handleAccess() {
    const input = document.getElementById('vault-pass').value;
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if (hashHex === VAULT_HASH) {
        sessionStorage.setItem('vault_auth', 'true');
        alert("Access Granted");
        window.location.href = 'content.html'; 
    } else {
        alert("Invalid Key");
    }
}

// Panic Redirect: Double-tap 'Escape' to jump to Google
let escapeCount = 0;
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        escapeCount++;
        setTimeout(() => { escapeCount = 0; }, 500);
        if (escapeCount === 2) {
            window.location.href = 'https://www.google.com';
        }
    }
});

console.log('Bethany Luxury Vault Protection Active');
// Function to animate progress bars smoothly
function updateProgress(elementId, targetPercentage) {
    const element = document.getElementById(elementId);
    let currentWidth = 0;
    const animationSpeed = 15; // Lower is faster

    const interval = setInterval(() => {
        if (currentWidth >= targetPercentage) {
            clearInterval(interval);
        } else {
            currentWidth++;
            element.style.width = currentWidth + '%';
        }
    }, animationSpeed);
}

// Initializing the bars on load
window.addEventListener('DOMContentLoaded', () => {
    // Example: Set Wardrobe Goal to 65% and Vault Unlock to 20%
    setTimeout(() => {
        updateProgress('wardrobe-fill', 65);
        updateProgress('vault-fill', 20);
    }, 500); // Small delay for visual effect
});
async function handleAccess() {
    const input = document.getElementById('vault-pass').value;
    const hash = await hashInput(input); // Your SHA-256 function

    if (hash === VAULT_HASH) {
        // Hide Login
        document.getElementById('login-container').classList.add('hidden');
        
        // Show Success Content
        const successDiv = document.getElementById('vault-success');
        successDiv.classList.remove('hidden');
        
        // Trigger specific bar animations once inside
        updateProgress('vault-fill', 100); 
        
        sessionStorage.setItem('vault_auth', 'true');
    } else {
        alert("Invalid Security Signature.");
    }
}

function lockVault() {
    sessionStorage.removeItem('vault_auth');
    window.location.reload(); // Hard reset for security
}