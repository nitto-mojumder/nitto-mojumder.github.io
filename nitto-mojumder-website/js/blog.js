// Blog Data Structure
const blogPosts = [
    {
        id: 1,
        title: "The Future of Digital Marketing in 2024",
        excerpt: "Exploring emerging trends and strategies that will shape digital marketing in the coming year, including AI integration, voice search optimization, and personalized marketing.",
        category: "digital-marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2023-12-15",
        readTime: "5 min read",
        content: `<p>Digital marketing is evolving at an unprecedented pace, and 2024 promises to bring even more exciting changes. As someone currently mastering this field, I want to share the key trends that will dominate the landscape.</p>
                  
                  <h3>AI and Machine Learning Integration</h3>
                  <p>Artificial Intelligence is no longer a luxury but a necessity in digital marketing. From predictive analytics to personalized content creation, AI tools are becoming more accessible and powerful.</p>
                  
                  <h3>Voice Search Optimization</h3>
                  <p>With the rise of smart speakers and voice assistants, optimizing for voice search is crucial. Focus on conversational keywords and question-based content.</p>
                  
                  <h3>Video Content Dominance</h3>
                  <p>Short-form video content continues to dominate social media platforms. Platforms like TikTok and Instagram Reels are essential for brand visibility.</p>
                  
                  <h3>Personalization at Scale</h3>
                  <p>Customers expect personalized experiences. Advanced segmentation and automation tools make it possible to deliver tailored content to different audience segments.</p>`,
        views: 1250,
        likes: 89
    },
    {
        id: 2,
        title: "Preparing for Higher Studies in Canada",
        excerpt: "A comprehensive guide for international students planning to study in Canada, covering visa processes, university selection, and cultural adaptation.",
        category: "study-abroad",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2023-12-10",
        readTime: "7 min read",
        content: `<p>As someone planning to pursue higher studies in Canada, I've been researching extensively about the process. Here's what I've learned about preparing for this exciting journey.</p>
                  
                  <h3>Choosing the Right University</h3>
                  <p>Canada has excellent universities across different provinces. Consider factors like program reputation, location, cost of living, and post-graduation opportunities.</p>
                  
                  <h3>Visa Application Process</h3>
                  <p>The student visa process requires careful preparation. Key documents include acceptance letter, financial proof, and medical examination reports.</p>
                  
                  <h3>Financial Planning</h3>
                  <p>Calculate your total costs including tuition, accommodation, food, and healthcare. Explore scholarship opportunities and part-time work options.</p>
                  
                  <h3>Cultural Adaptation</h3>
                  <p>Canada is multicultural and welcoming, but preparing for the weather and understanding cultural nuances will help you adjust faster.</p>`,
        views: 980,
        likes: 67
    },
    {
        id: 3,
        title: "Building a Business from Scratch",
        excerpt: "Key lessons and strategies for aspiring entrepreneurs starting their journey, including idea validation, funding, and scaling.",
        category: "entrepreneurship",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2023-12-05",
        readTime: "8 min read",
        content: `<p>Starting a business is challenging but incredibly rewarding. Based on my research and preparation for my entrepreneurial journey, here are essential steps to build from scratch.</p>
                  
                  <h3>Idea Validation</h3>
                  <p>Before investing time and money, validate your business idea. Talk to potential customers, conduct market research, and build a minimum viable product (MVP).</p>
                  
                  <h3>Business Planning</h3>
                  <p>A solid business plan is your roadmap. Include market analysis, competitive landscape, marketing strategy, and financial projections.</p>
                  
                  <h3>Funding Strategies</h3>
                  <p>Explore different funding options: bootstrapping, angel investors, venture capital, or government grants. Choose what aligns with your growth plans.</p>
                  
                  <h3>Building Your Team</h3>
                  <p>You can't do everything alone. Hire people who complement your skills and share your vision. Culture fit is as important as skills.</p>`,
        views: 1520,
        likes: 104
    },
    {
        id: 4,
        title: "Content Creation Strategies for 2024",
        excerpt: "Learn how to create engaging content across multiple platforms, build an audience, and monetize your content creation efforts.",
        category: "content-creation",
        image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2023-11-28",
        readTime: "6 min read",
        content: `<p>Content creation is at the heart of digital presence. Whether for personal branding or business growth, these strategies will help you create impactful content in 2024.</p>
                  
                  <h3>Platform-Specific Content</h3>
                  <p>Each platform has its own audience and content preferences. What works on Instagram may not work on LinkedIn. Tailor your content for each platform.</p>
                  
                  <h3>Content Calendar Planning</h3>
                  <p>Consistency is key. Use a content calendar to plan your posts, ensuring a mix of educational, entertaining, and promotional content.</p>
                  
                  <h3>Storytelling Techniques</h3>
                  <p>People connect with stories. Share your journey, challenges, and successes. Authenticity builds trust and engagement.</p>
                  
                  <h3>Analytics and Optimization</h3>
                  <p>Regularly review your analytics to understand what content resonates with your audience. Use these insights to optimize future content.</p>`,
        views: 890,
        likes: 56
    },
    {
        id: 5,
        title: "Mindset of a Billionaire Entrepreneur",
        excerpt: "Exploring the thought patterns, habits, and perspectives that distinguish successful entrepreneurs on their path to building billion-dollar businesses.",
        category: "entrepreneurship",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2023-11-20",
        readTime: "9 min read",
        content: `<p>Achieving billionaire status requires more than just a great idea—it requires the right mindset. Through studying successful entrepreneurs, I've identified key mindset shifts necessary for massive success.</p>
                  
                  <h3>Long-Term Vision</h3>
                  <p>Billionaire entrepreneurs think in decades, not quarters. They're willing to make short-term sacrifices for long-term gains.</p>
                  
                  <h3>Problem-Solving Orientation</h3>
                  <p>They see problems as opportunities. Instead of complaining about challenges, they focus on creating solutions that can scale.</p>
                  
                  <h3>Resilience and Grit</h3>
                  <p>Failure is part of the journey. What distinguishes successful entrepreneurs is their ability to learn from failures and keep moving forward.</p>
                  
                  <h3>Continuous Learning</h3>
                  <p>The most successful entrepreneurs are voracious learners. They constantly update their knowledge and adapt to changing markets.</p>`,
        views: 2100,
        likes: 142
    },
    {
        id: 6,
        title: "SEO Mastery: Beyond the Basics",
        excerpt: "Advanced SEO techniques that go beyond keyword stuffing, focusing on user intent, technical SEO, and E-A-T principles.",
        category: "digital-marketing",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2023-11-15",
        readTime: "7 min read",
        content: `<p>Search Engine Optimization continues to evolve. To stay ahead in digital marketing, you need to master advanced SEO techniques that focus on user experience and search intent.</p>
                  
                  <h3>Understanding User Intent</h3>
                  <p>Google's algorithms are increasingly sophisticated at understanding user intent. Create content that answers questions and solves problems, not just includes keywords.</p>
                  
                  <h3>Technical SEO Fundamentals</h3>
                  <p>Page speed, mobile optimization, structured data, and site architecture are critical technical aspects that impact your search rankings.</p>
                  
                  <h3>E-A-T Principles</h3>
                  <p>Expertise, Authoritativeness, and Trustworthiness (E-A-T) are crucial for content ranking, especially in YMYL (Your Money Your Life) topics.</p>
                  
                  <h3>Content Depth and Quality</h3>
                  <p>Comprehensive, well-researched content outperforms shallow content. Aim to create the most valuable resource on your topic.</p>`,
        views: 1120,
        likes: 78
    }
];

// Blog System
class BlogSystem {
    constructor() {
        this.postsPerPage = 3;
        this.currentPage = 1;
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.init();
    }

    init() {
        this.loadPostsFromStorage();
        this.renderBlogPosts();
        this.renderPopularPosts();
        this.renderRecentPosts();
        this.setupEventListeners();
    }

    loadPostsFromStorage() {
        const savedPosts = localStorage.getItem('nitto_blog_posts');
        if (savedPosts) {
            try {
                const parsedPosts = JSON.parse(savedPosts);
                // Merge with default posts, avoiding duplicates
                parsedPosts.forEach(post => {
                    if (!blogPosts.find(p => p.id === post.id)) {
                        blogPosts.push(post);
                    }
                });
            } catch (error) {
                console.error('Error loading blog posts:', error);
            }
        }
    }

    savePostsToStorage() {
        localStorage.setItem('nitto_blog_posts', JSON.stringify(blogPosts));
    }

    getFilteredPosts() {
        let filtered = [...blogPosts];

        // Apply category filter
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(post => post.category === this.currentCategory);
        }

        // Apply search filter
        if (this.searchTerm) {
            const term = this.searchTerm.toLowerCase();
            filtered = filtered.filter(post => 
                post.title.toLowerCase().includes(term) || 
                post.excerpt.toLowerCase().includes(term) ||
                (post.content && post.content.toLowerCase().includes(term))
            );
        }

        // Sort by date (newest first)
        return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    renderBlogPosts() {
        const container = document.getElementById('blog-posts-container');
        if (!container) return;
        
        const filteredPosts = this.getFilteredPosts();
        
        // Calculate pagination
        const totalPages = Math.ceil(filteredPosts.length / this.postsPerPage);
        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const postsToShow = filteredPosts.slice(startIndex, endIndex);

        if (postsToShow.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-newspaper"></i>
                    <h3>No blog posts found</h3>
                    <p>${this.searchTerm ? 'Try a different search term' : 'Check back soon for new posts!'}</p>
                </div>
            `;
        } else {
            container.innerHTML = postsToShow.map(post => `
                <article class="blog-post" data-id="${post.id}">
                    <div class="post-image">
                        <img src="${post.image}" alt="${post.title}" loading="lazy">
                    </div>
                    <div class="post-content">
                        <div class="post-meta">
                            <span class="post-category">${this.getCategoryLabel(post.category)}</span>
                            <span class="post-date">
                                <i class="far fa-calendar"></i> ${this.formatDate(post.date)} • ${post.readTime}
                            </span>
                        </div>
                        <h2><a href="javascript:void(0)" onclick="blogSystem.viewPost(${post.id})">${post.title}</a></h2>
                        <p class="post-excerpt">${post.excerpt}</p>
                        <a href="javascript:void(0)" onclick="blogSystem.viewPost(${post.id})" class="read-more">Read More</a>
                        <div class="post-stats" style="margin-top: 15px; font-size: 0.9rem; color: var(--gray);">
                            <span><i class="far fa-eye"></i> ${post.views.toLocaleString()}</span>
                            <span style="margin-left: 15px;"><i class="far fa-heart"></i> ${post.likes}</span>
                        </div>
                    </div>
                </article>
            `).join('');
        }

        this.renderPagination(totalPages);
    }

    renderPopularPosts() {
        const container = document.getElementById('popular-posts');
        if (!container) return;
        
        const popularPosts = [...blogPosts]
            .sort((a, b) => b.views - a.views)
            .slice(0, 3);

        container.innerHTML = popularPosts.map(post => `
            <div class="popular-post">
                <div class="popular-post-img">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                </div>
                <div class="popular-post-content">
                    <h4><a href="javascript:void(0)" onclick="blogSystem.viewPost(${post.id})">${post.title}</a></h4>
                    <div class="popular-post-date">${this.formatDate(post.date)}</div>
                </div>
            </div>
        `).join('');
    }

    renderRecentPosts() {
        const container = document.getElementById('recent-posts');
        if (!container) return;
        
        const recentPosts = [...blogPosts]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);

        container.innerHTML = recentPosts.map(post => `
            <div class="blog-card">
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                </div>
                <div class="blog-content">
                    <span class="blog-category">${this.getCategoryLabel(post.category)}</span>
                    <h3><a href="javascript:void(0)" onclick="blogSystem.viewPost(${post.id})">${post.title}</a></h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-meta">
                        <span><i class="far fa-calendar"></i> ${this.formatDate(post.date)}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderPagination(totalPages) {
        const container = document.getElementById('pagination');
        if (!container) return;
        
        if (totalPages <= 1) {
            container.innerHTML = '';
            return;
        }

        let paginationHTML = '';
        
        // Previous button
        if (this.currentPage > 1) {
            paginationHTML += `<a href="#" class="page-prev" data-page="${this.currentPage - 1}">
                <i class="fas fa-chevron-left"></i>
            </a>`;
        }

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= this.currentPage - 1 && i <= this.currentPage + 1)) {
                paginationHTML += `<a href="#" class="page-number ${i === this.currentPage ? 'active' : ''}" data-page="${i}">${i}</a>`;
            } else if (i === this.currentPage - 2 || i === this.currentPage + 2) {
                paginationHTML += `<span class="page-dots">...</span>`;
            }
        }

        // Next button
        if (this.currentPage < totalPages) {
            paginationHTML += `<a href="#" class="page-next" data-page="${this.currentPage + 1}">
                <i class="fas fa-chevron-right"></i>
            </a>`;
        }

        container.innerHTML = paginationHTML;
        
        // Add event listeners to pagination buttons
        container.querySelectorAll('a[data-page]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentPage = parseInt(button.dataset.page);
                this.renderBlogPosts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    getCategoryLabel(category) {
        const labels = {
            'digital-marketing': 'Digital Marketing',
            'entrepreneurship': 'Entrepreneurship',
            'study-abroad': 'Study Abroad',
            'content-creation': 'Content Creation',
            'personal-growth': 'Personal Growth'
        };
        return labels[category] || category.replace('-', ' ');
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }

    setupEventListeners() {
        // Category filtering
        document.querySelectorAll('#categories-list a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentCategory = link.dataset.category;
                this.currentPage = 1;
                
                // Update active state
                document.querySelectorAll('#categories-list a').forEach(a => a.classList.remove('active'));
                link.classList.add('active');
                
                this.renderBlogPosts();
            });
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.searchTerm = searchInput.value.trim();
                this.currentPage = 1;
                this.renderBlogPosts();
            });
        }

        if (searchInput) {
            searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.searchTerm = searchInput.value.trim();
                    this.currentPage = 1;
                    this.renderBlogPosts();
                }
            });
        }

        // Newsletter subscription
        const subscribeForm = document.getElementById('subscribe-form');
        if (subscribeForm) {
            subscribeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = subscribeForm.querySelector('input').value;
                this.subscribeToNewsletter(email);
            });
        }
    }

    viewPost(postId) {
        const post = blogPosts.find(p => p.id === postId);
        if (!post) return;
        
        // Increase view count
        post.views++;
        this.savePostsToStorage();
        
        // Create modal to display post
        this.createPostModal(post);
    }

    createPostModal(post) {
        // Remove existing modal
        const existingModal = document.querySelector('.post-modal');
        if (existingModal) existingModal.remove();
        
        const modal = document.createElement('div');
        modal.className = 'post-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close"><i class="fas fa-times"></i></button>
                <div class="modal-header">
                    <img src="${post.image}" alt="${post.title}" class="modal-image">
                </div>
                <div class="modal-body">
                    <div class="modal-meta">
                        <span class="post-category">${this.getCategoryLabel(post.category)}</span>
                        <span class="post-date">
                            <i class="far fa-calendar"></i> ${this.formatDate(post.date)} • ${post.readTime}
                        </span>
                    </div>
                    <h1>${post.title}</h1>
                    <div class="post-content">${post.content}</div>
                    <div class="modal-footer">
                        <div class="post-stats">
                            <span><i class="far fa-eye"></i> ${post.views.toLocaleString()} views</span>
                            <span><i class="far fa-heart"></i> ${post.likes} likes</span>
                        </div>
                        <div class="social-share">
                            <button class="like-btn" onclick="blogSystem.likePost(${post.id})">
                                <i class="far fa-heart"></i> Like
                            </button>
                            <button class="share-btn" onclick="blogSystem.sharePost(${post.id})">
                                <i class="fas fa-share"></i> Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Add modal styles
        if (!document.querySelector('#modal-styles')) {
            const styles = document.createElement('style');
            styles.id = 'modal-styles';
            styles.textContent = `
                .post-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }
                
                .modal-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(5px);
                }
                
                .modal-content {
                    position: relative;
                    background-color: white;
                    border-radius: var(--radius);
                    max-width: 800px;
                    max-height: 90vh;
                    overflow-y: auto;
                    width: 100%;
                    z-index: 2;
                    animation: modalSlideIn 0.3s ease;
                }
                
                @keyframes modalSlideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                
                .modal-close {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    z-index: 3;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                }
                
                .modal-header {
                    height: 300px;
                    overflow: hidden;
                }
                
                .modal-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .modal-body {
                    padding: 30px;
                }
                
                .modal-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                
                .modal-body h1 {
                    font-size: 2.2rem;
                    margin-bottom: 25px;
                    color: var(--dark);
                }
                
                .post-content {
                    line-height: 1.8;
                    color: var(--gray);
                }
                
                .post-content h3 {
                    margin-top: 30px;
                    margin-bottom: 15px;
                    color: var(--dark);
                }
                
                .modal-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid var(--light-gray);
                    flex-wrap: wrap;
                    gap: 15px;
                }
                
                .social-share {
                    display: flex;
                    gap: 10px;
                }
                
                .like-btn, .share-btn {
                    padding: 8px 20px;
                    border: none;
                    border-radius: var(--radius);
                    cursor: pointer;
                    font-weight: 500;
                    transition: var(--transition);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .like-btn {
                    background-color: #f8fafc;
                    color: var(--dark);
                }
                
                .like-btn:hover {
                    background-color: #fee2e2;
                    color: #dc2626;
                }
                
                .share-btn {
                    background-color: var(--primary);
                    color: white;
                }
                
                .share-btn:hover {
                    background-color: var(--primary-dark);
                }
                
                @media (max-width: 768px) {
                    .modal-content {
                        max-height: 95vh;
                    }
                    
                    .modal-header {
                        height: 200px;
                    }
                    
                    .modal-body {
                        padding: 20px;
                    }
                    
                    .modal-body h1 {
                        font-size: 1.8rem;
                    }
                    
                    .modal-footer {
                        flex-direction: column;
                        align-items: stretch;
                    }
                }
            `;
            document.head.appendChild(styles);
        }
        
        // Close modal functionality
        modal.querySelector('.modal-close').addEventListener('click', () => {
            this.closeModal(modal);
        });
        
        modal.querySelector('.modal-overlay').addEventListener('click', () => {
            this.closeModal(modal);
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal(modal);
            }
        });
    }

    closeModal(modal) {
        modal.style.opacity = '0';
        modal.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }

    likePost(postId) {
        const post = blogPosts.find(p => p.id === postId);
        if (post) {
            post.likes++;
            this.savePostsToStorage();
            
            // Update like button
            const likeBtn = document.querySelector('.like-btn');
            if (likeBtn) {
                likeBtn.innerHTML = `<i class="fas fa-heart"></i> Liked (${post.likes})`;
                likeBtn.style.backgroundColor = '#fee2e2';
                likeBtn.style.color = '#dc2626';
                likeBtn.disabled = true;
            }
            
            // Update stats in modal
            const statsElement = document.querySelector('.post-stats span:nth-child(2)');
            if (statsElement) {
                statsElement.innerHTML = `<i class="fas fa-heart"></i> ${post.likes} likes`;
            }
        }
    }

    sharePost(postId) {
        const post = blogPosts.find(p => p.id === postId);
        if (!post) return;
        
        const shareUrl = window.location.href;
        const shareText = `Check out this post: ${post.title}`;
        
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: shareText,
                url: shareUrl,
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert('Link copied to clipboard!');
            });
        }
    }

    subscribeToNewsletter(email) {
        let subscribers = JSON.parse(localStorage.getItem('nitto_newsletter_subscribers') || '[]');
        
        if (!subscribers.includes(email)) {
            subscribers.push(email);
            localStorage.setItem('nitto_newsletter_subscribers', JSON.stringify(subscribers));
            
            if (window.website && window.website.showNotification) {
                window.website.showNotification(`Thank you for subscribing with ${email}! You'll receive updates on new blog posts.`, 'success');
            } else {
                alert(`Thank you for subscribing with ${email}!`);
            }
        } else {
            if (window.website && window.website.showNotification) {
                window.website.showNotification(`You're already subscribed with ${email}.`, 'info');
            } else {
                alert(`You're already subscribed with ${email}.`);
            }
        }
    }

    // Admin functions
    addNewPost(postData) {
        const newPost = {
            id: Date.now(), // Simple ID generation
            ...postData,
            date: new Date().toISOString().split('T')[0],
            views: 0,
            likes: 0
        };
        
        blogPosts.unshift(newPost);
        this.savePostsToStorage();
        this.renderBlogPosts();
        this.renderPopularPosts();
        this.renderRecentPosts();
        
        return newPost;
    }

    deletePost(postId) {
        const index = blogPosts.findIndex(post => post.id === postId);
        if (index !== -1) {
            blogPosts.splice(index, 1);
            this.savePostsToStorage();
            this.renderBlogPosts();
            this.renderPopularPosts();
            this.renderRecentPosts();
            return true;
        }
        return false;
    }
}

// Initialize blog system when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.blogSystem = new BlogSystem();
});