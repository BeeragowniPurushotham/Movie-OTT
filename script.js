document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Logged in successfully!');
    window.location.href = 'index.html';
});

document.getElementById('signup-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Account created successfully!');
    window.location.href = 'login.html';
});
// Script to handle login, signup, and logout functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check user login state on each page load
    const user = localStorage.getItem('user');
    if (user) {
        if (window.location.pathname.endsWith('login.html') || window.location.pathname.endsWith('signup.html')) {
            alert('You are already logged in.');
            window.location.href = 'index.html'; // Redirect to home page if logged in
        }
    } else {
        if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('subscription.html')) {
            alert('Please log in first.');
            window.location.href = 'login.html'; // Redirect to login if not logged in
        }
    }

    // Handle Signup
    document.getElementById('signup-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = this.querySelector('input[placeholder="Full Name"]').value;
        const email = this.querySelector('input[placeholder="Email"]').value;
        const password = this.querySelector('input[placeholder="Password"]').value;

        if (name && email && password) {
            localStorage.setItem('user', JSON.stringify({ name, email, password }));
            alert('Signup successful! You can now log in.');
            window.location.href = 'login.html';
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Handle Login
    document.getElementById('login-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[placeholder="Email"]').value;
        const password = this.querySelector('input[placeholder="Password"]').value;

        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            alert(`Welcome back, ${user.name}!`);
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password.');
        }
    });

    // Handle Logout
    const logoutButton = document.querySelector('nav ul li a[href="login.html"]');
    logoutButton?.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        alert('You have been logged out.');
        window.location.href = 'login.html';
    });
});
// Manage authentication
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('user');
    
    // Redirect based on login state
    if (user) {
        if (window.location.pathname.includes('login.html') || window.location.pathname.includes('signup.html')) {
            alert('You are already logged in.');
            window.location.href = 'index.html';
        }
    } else {
        if (window.location.pathname.includes('index.html') || window.location.pathname.includes('subscription.html')) {
            alert('Please log in first.');
            window.location.href = 'login.html';
        }
    }

    // Handle signup
    document.getElementById('signup-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.querySelector('input[placeholder="Full Name"]').value;
        const email = e.target.querySelector('input[placeholder="Email"]').value;
        const password = e.target.querySelector('input[placeholder="Password"]').value;

        if (name && email && password) {
            localStorage.setItem('user', JSON.stringify({ name, email, password }));
            alert('Signup successful!');
            window.location.href = 'login.html';
        } else {
            alert('Please fill all fields!');
        }
    });

    // Handle login
    document.getElementById('login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[placeholder="Email"]').value;
        const password = e.target.querySelector('input[placeholder="Password"]').value;

        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            alert(`Welcome back, ${user.name}!`);
            window.location.href = 'index.html';
        } else {
            alert('Invalid credentials!');
        }
    });

    // Handle logout
    document.querySelector('nav ul li a[href="login.html"]')?.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        alert('Logged out successfully!');
        window.location.href = 'login.html';
    });
});

// Show movie details
function showDetails(movieName) {
    alert(`Details for ${movieName} are not available yet!`);
}
