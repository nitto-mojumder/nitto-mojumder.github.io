// Admin Panel System
class AdminPanel {
    constructor() {
        this.isAuthenticated = false;
        this.currentSection = 'dashboard';
        this.blogSystem = null;
        this.init();
    }

    init() {
        this.checkAuthentication();
        this.setupEventListeners();
        
        // Initialize blog system if we're authenticated
        if (this.isAuthenticated) {
            this.blogSystem = window.blogSystem || new BlogSystem();
            this.loadDashboard();
            this.updateCurrentYear();
        }
    }

    checkAuthentication() {
        const isLoggedIn = localStorage.getItem('nitto_admin_logged_in') === 'true';
        const username = localStorage.getItem('nitto_admin_username');
        
        if (isLoggedIn && username) {
            this.isAuthenticated = true;
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('admin-dashboard').style.display = 'block';
        } else {
            this.isAuthenticated = false;
            document.getElementById('login-screen').style.display = 'flex';
            document.getElementById('admin-dashboard').style.display = 'none';
        }
    }

    setupEventListeners() {
        // Login form
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        // Logout button
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                this.handleLogout();
            });
        }

        // Navigation
        document.querySelectorAll('.admin-nav-link[data-section]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.switchSection(section);
            });
        });

        // Quick actions
        document.querySelectorAll('.action-btn[data-action]').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                this.handleQuickAction(action);
            });
        });

        // Add post form
        const addPostForm = document.getElementById('add-post-form');
        if (addPostForm) {
            addPostForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAddPost();
            });

            // Save draft button
            const saveDraftBtn = document.getElementById('save-draft');
            if (saveDraftBtn) {
                saveDraftBtn.addEventListener('click', () => {
                    this.saveAsDraft();
                });
            }
        }

        // Post search
        const searchPostBtn = document.getElementById('search-post-btn');
        if (searchPostBtn) {
            searchPostBtn.addEventListener('click', () => {
                this.searchPosts();
            });
        }

        const postSearchInput = document.getElementById('post-search');
        if (postSearchInput) {
            postSearchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.searchPosts();
                }
            });
        }

        // Category filter
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => {
                this.filterPosts();
            });
        }

        // Refresh posts button
        const refreshBtn = document.getElementById('refresh-posts');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                this.loadPosts();
            });
        }
    }

    handleLogin() {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        
        // Default credentials (change these after first login!)
        const defaultUsername = 'admin';
        const defaultPassword = 'nitto2023';
        
        // Check saved credentials or defaults
        const savedUsername = localStorage.getItem('nitto_admin_username') || defaultUsername;
        const savedPassword = localStorage.getItem('nitto_admin_password') || defaultPassword;
        
        if (username === savedUsername && password === savedPassword) {
            this.isAuthenticated = true;
            localStorage.setItem('nitto_admin_logged_in', 'true');
            
            // Save username if using default (for future changes)
            if (!localStorage.getItem('nitto_admin_username')) {
                localStorage.setItem('nitto_admin_username', username);
            }
            
            // Save password if using default (for future changes)
            if (!localStorage.getItem('nitto_admin_password')) {
                localStorage.setItem('nitto_admin_password', password);
            }
            
            // Show success message
            this.showNotification('Login successful! Loading admin panel...', 'success');
            
            // Reload to show admin dashboard
            setTimeout(() => {
                location.reload();
            }, 1000);
        } else {
            this.showNotification('Invalid credentials. Please try again.', 'error');
            passwordInput.value = '';
        }
    }

    handleLogout() {
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('nitto_admin_logged_in');
            this.isAuthenticated = false;
            this.showNotification('Logged out successfully.', 'info');
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    }

    switchSection(section) {
        this.currentSection = section;
        
        // Update active nav link
        document.querySelectorAll('.admin-nav-link[data-section]').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`.admin-nav-link[data-section="${section}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Hide all sections
        document.querySelectorAll('.admin-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show current section
        const currentSection = document.getElementById(`${section}-section`);
        if (currentSection) {
            currentSection.classList.add('active');
        }
        
        // Load section data
        switch(section) {
            case 'dashboard':
                this.loadDashboard();
                break;
            case 'posts':
                this.loadPosts();
                break;
            case 'analytics':
                this.loadAnalytics();
                break;
        }
    }

    loadDashboard() {
        if (!this.blogSystem) return;
        
        const posts = this.blogSystem.getFilteredPosts();
        
        // Update stats
        const totalPosts = posts.length;
        const totalViews = posts.reduce((sum, post) => sum + post.views, 0);
        const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
        
        // Count unique categories
        const categories = [...new Set(posts.map(post => post.category))];
        
        document.getElementById('total-posts').textContent = totalPosts;
        document.getElementById('total-views').textContent = totalViews.toLocaleString();
        document.getElementById('total-likes').textContent = totalLikes.toLocaleString();
        document.getElementById('total-categories').textContent = categories.length;
        
        // Load recent activities
        this.loadRecentActivities();
        
        // Update last saved time
        this.updateLastSaved();
    }

    loadRecentActivities() {
        const activities = JSON.parse(localStorage.getItem('nitto_admin_activities') || '[]');
        const container = document.getElementById('activity-list');
        
        if (!container) return;
        
        if (activities.length === 0) {
            container.innerHTML = `
                <div class="activity-item">
                    <div class="activity-icon">
                        <i class="fas fa-info-circle"></i>
                    </div>
                    <div class="activity-content">
                        <p>No recent activities</p>
                        <small>Activities will appear here</small>
                    </div>
                </div>
            `;
            return;
        }
        
        container.innerHTML = activities.slice(0, 5).map(activity => `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="fas ${activity.icon || 'fa-info-circle'}"></i>
                </div>
                <div class="activity-content">
                    <p>${activity.title}</p>
                    <small>${activity.time}</small>
                </div>
            </div>
        `).join('');
    }

    addActivity(title, icon = 'fa-info-circle') {
        const activities = JSON.parse(localStorage.getItem('nitto_admin_activities') || '[]');
        
        const now = new Date();
        const timeString = now.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        activities.unshift({
            title,
            icon,
            time: timeString
        });
        
        // Keep only last 20 activities
        if (activities.length > 20) {
            activities.pop();
        }
        
        localStorage.setItem('nitto_admin_activities', JSON.stringify(activities));
        
        // Update last saved time
        this.updateLastSaved();
        
        // Reload activities if we're on dashboard
        if (this.currentSection === 'dashboard') {
            this.loadRecentActivities();
        }
    }

    loadPosts() {
        if (!this.blogSystem) return;
        
        const container = document.getElementById('posts-table-body');
        if (!container) return;
        
        const posts = this.blogSystem.getFilteredPosts();
        
        if (posts.length === 0) {
            container.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 40px; color: var(--gray);">
                        <i class="fas fa-newspaper" style="font-size: 2rem; margin-bottom: 10px; display: block; opacity: 0.5;"></i>
                        No blog posts found
                    </td>
                </tr>
            `;
        } else {
            container.innerHTML = posts.map(post => `
                <tr>
                    <td>#${post.id}</td>
                    <td><strong>${post.title}</strong></td>
                    <td><span class="post-category" style="background-color: rgba(26, 115, 232, 0.1); color: var(--primary); padding: 5px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">${this.blogSystem.getCategoryLabel(post.category)}</span></td>
                    <td>${this.blogSystem.formatDate(post.date)}</td>
                    <td>${post.views.toLocaleString()}</td>
                    <td>${post.likes}</td>
                    <td class="post-actions">
                        <button class="action-btn-small view-btn" title="View" onclick="admin.viewPost(${post.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn-small edit-btn" title="Edit" onclick="admin.editPost(${post.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn-small delete-btn" title="Delete" onclick="admin.deletePost(${post.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
        }
        
        // Update post counts
        document.getElementById('shown-posts').textContent = posts.length;
        document.getElementById('total-posts-count').textContent = posts.length;
    }

    searchPosts() {
        const searchTerm = document.getElementById('post-search').value.trim();
        
        // For now, just filter in the UI
        const rows = document.querySelectorAll('#posts-table-body tr');
        
        rows.forEach(row => {
            const title = row.querySelector('td:nth-child(2) strong')?.textContent.toLowerCase() || '';
            if (title.includes(searchTerm.toLowerCase())) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
        
        // Update shown posts count
        const shownRows = Array.from(rows).filter(row => row.style.display !== 'none');
        document.getElementById('shown-posts').textContent = shownRows.length;
    }

    filterPosts() {
        const category = document.getElementById('category-filter').value;
        
        // For now, just filter in the UI
        const rows = document.querySelectorAll('#posts-table-body tr');
        
        rows.forEach(row => {
            const categoryCell = row.querySelector('.post-category');
            if (!categoryCell) return;
            
            const postCategory = categoryCell.textContent.toLowerCase().replace(' ', '-');
            
            if (category === 'all' || postCategory === category) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
        
        // Update shown posts count
        const shownRows = Array.from(rows).filter(row => row.style.display !== 'none');
        document.getElementById('shown-posts').textContent = shownRows.length;
    }

    handleAddPost() {
        if (!this.blogSystem) return;
        
        const title = document.getElementById('post-title').value.trim();
        const category = document.getElementById('post-category').value;
        const excerpt = document.getElementById('post-excerpt').value.trim();
        const content = document.getElementById('post-content').value.trim();
        const image = document.getElementById('post-image').value.trim();
        const readTime = document.getElementById('post-read-time').value.trim() || '5 min read';
        
        // Validate
        if (!title || !category || !excerpt || !content || !image) {
            this.showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate image URL
        if (!image.startsWith('http')) {
            this.showNotification('Please enter a valid image URL starting with http:// or https://', 'error');
            return;
        }
        
        const postData = {
            title,
            category,
            excerpt,
            content: content.replace(/\n/g, '<br>'), // Convert newlines to breaks
            image,
            readTime
        };
        
        // Add the post
        const newPost = this.blogSystem.addNewPost(postData);
        
        // Add activity
        this.addActivity(`Added new post: "${title}"`, 'fa-plus-circle');
        
        // Reset form
        document.getElementById('add-post-form').reset();
        
        // Switch to posts section
        this.switchSection('posts');
        
        // Show success message
        this.showNotification(`Post "${title}" published successfully!`, 'success');
    }

    saveAsDraft() {
        const title = document.getElementById('post-title').value.trim();
        
        if (!title) {
            this.showNotification('Please at least enter a title to save as draft.', 'error');
            return;
        }
        
        // Save draft to localStorage
        const draft = {
            title,
            category: document.getElementById('post-category').value,
            excerpt: document.getElementById('post-excerpt').value.trim(),
            content: document.getElementById('post-content').value.trim(),
            image: document.getElementById('post-image').value.trim(),
            readTime: document.getElementById('post-read-time').value.trim(),
            timestamp: new Date().toISOString()
        };
        
        let drafts = JSON.parse(localStorage.getItem('nitto_post_drafts') || '[]');
        drafts.push(draft);
        localStorage.setItem('nitto_post_drafts', JSON.stringify(drafts));
        
        this.showNotification(`Draft "${title || 'Untitled'}" saved successfully!`, 'success');
        this.addActivity(`Saved draft: "${title || 'Untitled'}"`, 'fa-save');
    }

    viewPost(postId) {
        if (!this.blogSystem) return;
        
        const post = blogPosts.find(p => p.id === postId);
        if (post) {
            // Open post in new tab or modal
            window.open(`#view-post-${postId}`, '_blank');
            
            // For now, show an alert with post info
            this.showNotification(`Viewing: ${post.title}`, 'info');
        }
    }

    editPost(postId) {
        const post = blogPosts.find(p => p.id === postId);
        if (!post) {
            this.showNotification('Post not found.', 'error');
            return;
        }
        
        // Switch to add post section
        this.switchSection('add-post');
        
        // Fill form with post data
        document.getElementById('post-title').value = post.title;
        document.getElementById('post-category').value = post.category;
        document.getElementById('post-excerpt').value = post.excerpt;
        document.getElementById('post-content').value = post.content.replace(/<br>/g, '\n'); // Convert breaks to newlines
        document.getElementById('post-image').value = post.image;
        document.getElementById('post-read-time').value = post.readTime;
        
        // Change form to edit mode
        const form = document.getElementById('add-post-form');
        form.dataset.editId = postId;
        
        // Change submit button text
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-save"></i> Update Post';
        
        this.showNotification(`Editing post: "${post.title}"`, 'info');
        this.addActivity(`Started editing post #${postId}`, 'fa-edit');
    }

    deletePost(postId) {
        if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
            return;
        }
        
        if (this.blogSystem.deletePost(postId)) {
            this.addActivity(`Deleted post #${postId}`, 'fa-trash');
            this.loadPosts();
            this.showNotification('Post deleted successfully.', 'success');
        } else {
            this.showNotification('Failed to delete post.', 'error');
        }
    }

    loadAnalytics() {
        if (!this.blogSystem) return;
        
        const posts = this.blogSystem.getFilteredPosts();
        
        // Calculate category distribution
        const categoryCounts = {};
        posts.forEach(post => {
            categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
        });
        
        // Find most popular category
        let mostPopularCategory = 'None';
        let maxCount = 0;
        
        Object.entries(categoryCounts).forEach(([category, count]) => {
            if (count > maxCount) {
                maxCount = count;
                mostPopularCategory = this.blogSystem.getCategoryLabel(category);
            }
        });
        
        // Calculate averages
        const totalViews = posts.reduce((sum, post) => sum + post.views, 0);
        const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
        const avgViews = posts.length > 0 ? Math.round(totalViews / posts.length) : 0;
        const avgLikes = posts.length > 0 ? Math.round(totalLikes / posts.length) : 0;
        
        // Find most recent post
        let lastPostDate = 'None';
        if (posts.length > 0) {
            const dates = posts.map(post => new Date(post.date));
            const latestDate = new Date(Math.max(...dates));
            lastPostDate = latestDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        
        // Update UI
        document.getElementById('most-popular-category').textContent = mostPopularCategory;
        document.getElementById('avg-views').textContent = avgViews.toLocaleString();
        document.getElementById('avg-likes').textContent = avgLikes;
        document.getElementById('last-post-date').textContent = lastPostDate;
        
        // Load top posts
        this.loadTopPosts();
        
        // Render chart if Chart.js is available
        this.renderCategoryChart(categoryCounts);
    }

    loadTopPosts() {
        if (!this.blogSystem) return;
        
        const container = document.getElementById('top-posts-list');
        if (!container) return;
        
        const topPosts = [...this.blogSystem.getFilteredPosts()]
            .sort((a, b) => b.views - a.views)
            .slice(0, 5);
        
        if (topPosts.length === 0) {
            container.innerHTML = `
                <div class="top-post-item" style="justify-content: center; padding: 20px; color: var(--gray);">
                    <i class="fas fa-chart-line" style="margin-right: 10px;"></i>
                    No posts yet
                </div>
            `;
            return;
        }
        
        container.innerHTML = topPosts.map(post => `
            <div class="top-post-item">
                <div class="top-post-title">${post.title}</div>
                <div class="top-post-stats">
                    <span><i class="fas fa-eye"></i> ${post.views.toLocaleString()}</span>
                    <span><i class="fas fa-heart"></i> ${post.likes}</span>
                </div>
            </div>
        `).join('');
    }

    renderCategoryChart(categoryCounts) {
        const canvas = document.getElementById('category-chart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Clear previous chart
        if (this.chartInstance) {
            this.chartInstance.destroy();
        }
        
        const categories = Object.keys(categoryCounts).map(cat => 
            this.blogSystem.getCategoryLabel(cat)
        );
        const counts = Object.values(categoryCounts);
        
        // Generate colors
        const colors = [
            'rgba(59, 130, 246, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(245, 158, 11, 0.7)',
            'rgba(239, 68, 68, 0.7)',
            'rgba(139, 92, 246, 0.7)'
        ];
        
        // Check if Chart is available
        if (typeof Chart === 'undefined') {
            // Load Chart.js dynamically
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            script.onload = () => {
                this.createChart(ctx, categories, counts, colors);
            };
            document.head.appendChild(script);
        } else {
            this.createChart(ctx, categories, counts, colors);
        }
    }

    createChart(ctx, categories, counts, colors) {
        this.chartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: categories,
                datasets: [{
                    data: counts,
                    backgroundColor: colors.slice(0, categories.length),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                family: 'Poppins',
                                size: 12
                            }
                        }
                    }
                }
            }
        });
    }

    handleQuickAction(action) {
        switch(action) {
            case 'add-post':
                this.switchSection('add-post');
                break;
                
            case 'view-posts':
                this.switchSection('posts');
                break;
                
            case 'clear-cache':
                if (confirm('Clear browser cache? This will not delete blog posts.')) {
                    localStorage.removeItem('nitto_admin_activities');
                    localStorage.removeItem('nitto_newsletter_subscribers');
                    localStorage.removeItem('nitto_contacts');
                    this.showNotification('Cache cleared successfully.', 'success');
                    this.loadDashboard();
                }
                break;
                
            case 'backup-data':
                this.backupData();
                break;
        }
    }

    backupData() {
        if (!this.blogSystem) return;
        
        const posts = this.blogSystem.getFilteredPosts();
        const subscribers = JSON.parse(localStorage.getItem('nitto_newsletter_subscribers') || '[]');
        const contacts = JSON.parse(localStorage.getItem('nitto_contacts') || '[]');
        const activities = JSON.parse(localStorage.getItem('nitto_admin_activities') || '[]');
        
        const data = {
            exportDate: new Date().toISOString(),
            blogPosts: posts,
            subscribers: subscribers,
            contacts: contacts,
            activities: activities,
            totalPosts: posts.length,
            totalSubscribers: subscribers.length,
            totalContacts: contacts.length
        };
        
        const dataStr = JSON.stringify(data, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `nitto-backup-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        this.showNotification('Backup downloaded successfully!', 'success');
        this.addActivity('Exported website data backup', 'fa-download');
    }

    updateLastSaved() {
        const lastSaved = localStorage.getItem('nitto_last_saved');
        const timeElement = document.getElementById('last-saved-time');
        
        if (timeElement) {
            if (lastSaved) {
                const date = new Date(lastSaved);
                timeElement.textContent = date.toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
            } else {
                timeElement.textContent = 'Never';
            }
        }
        
        // Update the saved timestamp
        localStorage.setItem('nitto_last_saved', new Date().toISOString());
    }

    updateCurrentYear() {
        const yearElement = document.getElementById('admin-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    // Utility function to show notification
    showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.admin-notification');
        existingNotifications.forEach(note => note.remove());
        
        const notification = document.createElement('div');
        notification.className = `admin-notification admin-notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 15px;
            animation: slideIn 0.3s ease;
            max-width: 400px;
        `;
        
        // Notification content
        const content = notification.querySelector('.notification-content');
        content.style.cssText = `
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 1;
        `;
        
        // Close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            line-height: 1;
            padding: 0;
            margin: 0;
        `;
        
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
}

// Initialize admin panel when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.admin = new AdminPanel();
});