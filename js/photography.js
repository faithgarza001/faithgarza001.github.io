// Futuristic Photography Gallery Interactive Features
// Author: Faith Garza

class FuturisticPhotographyGallery {
    constructor() {
        this.currentImageIndex = 0;
        this.images = [];
        this.filteredImages = [];
        this.currentFilter = 'all';
        this.mousePosition = { x: 0, y: 0 };
        this.isLuxury = document.querySelector('.photography-wrapper')?.classList.contains('luxury-mode');
        this.init();
    }

    init() {
        // In luxury mode, minimize movement and effects
        if (!this.isLuxury) {
            this.setupParallax();
        }
        this.setupFilterSystem();
        this.setupLightbox();
        this.setupCounters();
        this.setupIntersectionObserver();
        if (!this.isLuxury) {
            this.setupInteractiveLens();
            this.setupDynamicLighting();
            this.setupHolographicEffects();
        }
        this.collectImages();
    }

    // Interactive Lens Effect - cursor acts like camera lens
    setupInteractiveLens() {
    const gallery = document.querySelector('.futuristic-gallery');
        const photos = document.querySelectorAll('.photo-card img');
        
    if (!gallery || this.isLuxury) return;

        // Create lens element
        const lens = document.createElement('div');
        lens.className = 'camera-lens';
        lens.innerHTML = `
            <div class="lens-rim"></div>
            <div class="lens-center"></div>
            <div class="lens-focus-ring"></div>
        `;
        gallery.appendChild(lens);

        // Track mouse movement
        gallery.addEventListener('mousemove', (e) => {
            this.mousePosition = {
                x: e.clientX,
                y: e.clientY
            };
            this.updateLensPosition(lens, e);
            this.updatePhotoFocus(photos, e);
        });

        // Hide lens when leaving gallery
        gallery.addEventListener('mouseleave', () => {
            lens.style.opacity = '0';
            photos.forEach(img => {
                img.style.filter = 'brightness(0.8) contrast(1.2) blur(0px)';
            });
        });

        gallery.addEventListener('mouseenter', () => {
            lens.style.opacity = '1';
        });
    }

    updateLensPosition(lens, e) {
        const rect = document.querySelector('.futuristic-gallery').getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        lens.style.left = `${x - 50}px`;
        lens.style.top = `${y - 50}px`;
        
        // Lens breathing effect
        const intensity = Math.sin(Date.now() * 0.003) * 0.1 + 1;
        lens.style.transform = `scale(${intensity})`;
    }

    updatePhotoFocus(photos, e) {
        photos.forEach(img => {
            const rect = img.getBoundingClientRect();
            const imgCenterX = rect.left + rect.width / 2;
            const imgCenterY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(e.clientX - imgCenterX, 2) + 
                Math.pow(e.clientY - imgCenterY, 2)
            );
            
            // Focus effect based on distance
            const maxDistance = 300;
            const focusIntensity = Math.max(0, 1 - (distance / maxDistance));
            const blur = (1 - focusIntensity) * 5;
            const brightness = 0.6 + (focusIntensity * 0.6);
            const saturation = 0.8 + (focusIntensity * 0.4);
            
            img.style.filter = `brightness(${brightness}) contrast(1.2) blur(${blur}px) saturate(${saturation})`;
            
            // Add zoom effect for focused images
            if (focusIntensity > 0.7) {
                img.style.transform = `scale(${1 + focusIntensity * 0.05})`;
            } else {
                img.style.transform = 'scale(1)';
            }
        });
    }

    // Dynamic Lighting System - spotlight follows cursor
    setupDynamicLighting() {
    const gallery = document.querySelector('.futuristic-gallery');
    if (!gallery || this.isLuxury) return;

        // Create spotlight element
        const spotlight = document.createElement('div');
        spotlight.className = 'dynamic-spotlight';
        gallery.appendChild(spotlight);

        // Create additional atmospheric lights
        const atmosphericLights = document.createElement('div');
        atmosphericLights.className = 'atmospheric-lights';
        atmosphericLights.innerHTML = `
            <div class="light-beam light-1"></div>
            <div class="light-beam light-2"></div>
            <div class="light-beam light-3"></div>
        `;
        gallery.appendChild(atmosphericLights);

        gallery.addEventListener('mousemove', (e) => {
            this.updateSpotlight(spotlight, e);
            this.updateAtmosphericLights(atmosphericLights, e);
        });
    }

    updateSpotlight(spotlight, e) {
        const rect = document.querySelector('.futuristic-gallery').getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        spotlight.style.background = `
            radial-gradient(circle at ${x}% ${y}%, 
                rgba(0, 255, 255, 0.3) 0%, 
                rgba(0, 255, 255, 0.1) 30%, 
                transparent 70%)
        `;
    }

    updateAtmosphericLights(lights, e) {
        const rect = document.querySelector('.futuristic-gallery').getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const lightBeams = lights.querySelectorAll('.light-beam');
        lightBeams.forEach((beam, index) => {
            const offset = (index + 1) * 50;
            const delay = index * 0.1;
            
            setTimeout(() => {
                beam.style.left = `${x + offset}px`;
                beam.style.top = `${y + offset}px`;
            }, delay * 1000);
        });
    }

    // Holographic Effects and Glitch Animations
    setupHolographicEffects() {
    const frames = document.querySelectorAll('.hologram-frame');
    if (this.isLuxury) return; // skip busy effects
        
        frames.forEach((frame, index) => {
            // Random glitch intervals
            const glitchInterval = Math.random() * 5000 + 3000;
            
            setInterval(() => {
                this.triggerGlitchEffect(frame);
            }, glitchInterval);

            // Holographic scan effect
            frame.addEventListener('mouseenter', () => {
                this.triggerScanEffect(frame);
            });

            // 3D perspective on hover
            frame.addEventListener('mousemove', (e) => {
                this.update3DPerspective(frame, e);
            });

            frame.addEventListener('mouseleave', () => {
                frame.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)';
            });
        });
    }

    triggerGlitchEffect(frame) {
        const glitchOverlay = frame.querySelector('.glitch-overlay');
        if (glitchOverlay) {
            glitchOverlay.style.animation = 'none';
            setTimeout(() => {
                glitchOverlay.style.animation = 'glitchEffect 0.3s ease-in-out';
            }, 10);
        }
    }

    triggerScanEffect(frame) {
        const scanLine = frame.querySelector('.scan-line');
        if (scanLine) {
            scanLine.style.animation = 'none';
            setTimeout(() => {
                scanLine.style.animation = 'scanEffect 2s linear';
            }, 10);
        }
    }

    update3DPerspective(frame, e) {
        const rect = frame.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const rotateX = (e.clientY - centerY) / 10;
        const rotateY = (e.clientX - centerX) / 10;
        
        frame.style.transform = `
            rotateX(${-rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateZ(20px)
        `;
    }

    // Enhanced Filter System with Futuristic Animations
    setupFilterSystem() {
        const photoItems = document.querySelectorAll('.photo-item');
        const select = document.getElementById('categorySelect');
        const legacyButtons = document.querySelectorAll('.filter-btn');

        if (select) {
            select.addEventListener('change', (e) => {
                const filter = e.target.value;
                this.matrixFilterPhotos(filter, photoItems);
                this.currentFilter = filter;
                // Reset to page 1 on filter change
                if (this.pagination) {
                    this.pagination.currentPage = 1;
                    this.renderPagination();
                }
            });
        }

        // Keep legacy buttons functional if present
        legacyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.currentTarget.dataset.filter;
                legacyButtons.forEach(b => b.classList.toggle('active', b === e.currentTarget));
                this.matrixFilterPhotos(filter, photoItems);
                this.currentFilter = filter;
            });
        });
    }

    matrixFilterPhotos(filter, items) {
        const elegant = this.isLuxury;
        items.forEach((item, index) => {
            const category = item.dataset.category;
            const shouldShow = filter === 'all' || category === filter;
            if (shouldShow) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = elegant ? 'none' : 'translateY(0) scale(1)';
                    item.style.filter = 'none';
                }, elegant ? 0 : index * 80);
            } else {
                item.style.opacity = elegant ? '0' : '0';
                item.style.transform = elegant ? 'none' : 'translateY(16px) scale(0.98)';
                setTimeout(() => { item.style.display = 'none'; }, elegant ? 200 : 400);
            }
        });
    }

    // Parallax effect for hero section
    setupParallax() {
        const parallaxBg = document.querySelector('.parallax-bg');
        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (parallaxBg) {
                parallaxBg.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
    }

    // Enhanced Lightbox with Futuristic UI
    setupLightbox() {
        const lightbox = document.getElementById('lightbox');
        const photoCards = document.querySelectorAll('.photo-card');

        photoCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                this.openFuturisticLightbox(index);
            });
        });

        // Close lightbox
        document.querySelector('.lightbox-close').addEventListener('click', () => this.closeLightbox());
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) this.closeLightbox();
        });

        // Enhanced keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'flex') {
                switch(e.key) {
                    case 'Escape':
                        this.closeLightbox();
                        break;
                    case 'ArrowLeft':
                        this.previousImage();
                        break;
                    case 'ArrowRight':
                        this.nextImage();
                        break;
                    case ' ':
                        e.preventDefault();
                        this.toggleLightboxScan();
                        break;
                }
            }
        });
    }

    openFuturisticLightbox(index) {
        this.currentImageIndex = index;
        this.updateLightboxContent();
        
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'flex';
        lightbox.classList.add('futuristic-mode');
        
        // Add scanning animation
        setTimeout(() => {
            this.triggerLightboxScan();
        }, 300);
        
        document.body.style.overflow = 'hidden';
    }

    triggerLightboxScan() {
        const lightboxImg = document.querySelector('.lightbox-img');
        if (lightboxImg) {
            lightboxImg.style.animation = 'lightboxScan 2s ease-in-out';
        }
    }

    // Animated counters with digital effect
    setupCounters() {
        const counters = document.querySelectorAll('.stat-number');

        const animateCounter = (counter) => {
            const target = parseInt(counter.dataset.count);
            const increment = target / 60; // Slower, more digital feel
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    
                    // Digital flicker effect
                    if (Math.random() > 0.8) {
                        counter.style.textShadow = '0 0 20px var(--neon-cyan)';
                        setTimeout(() => {
                            counter.style.textShadow = 'none';
                        }, 50);
                    }
                    
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                    counter.style.color = 'var(--neon-cyan)';
                }
            };
            
            updateCounter();
        };

        // In one-pager mode, run immediately when dock is visible
        const dock = document.querySelector('.stats-dock');
        if (dock) {
            counters.forEach(c => animateCounter(c));
            return;
        }

        // Fallback for non-dock layouts
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Enhanced intersection observer for futuristic animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Add matrix digital rain effect
                    if (entry.target.classList.contains('equipment-card')) {
                        this.triggerMatrixEffect(entry.target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.equipment-card, .stat-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });
    }

    triggerMatrixEffect(element) {
        const matrix = document.createElement('div');
        matrix.className = 'matrix-rain';
        matrix.innerHTML = '01101001011001010110011101001001';
        element.appendChild(matrix);
        
        setTimeout(() => {
            matrix.remove();
        }, 2000);
    }

    collectImages() {
        const photoCards = document.querySelectorAll('.photo-card');
        this.images = Array.from(photoCards).map(card => {
            const img = card.querySelector('img');
            const panel = card.querySelector('.futuristic-panel');
            return {
                src: img.src,
                alt: img.alt,
                title: panel.querySelector('.hologram-text').textContent,
                description: panel.querySelector('.data-description').textContent,
                meta: Array.from(panel.querySelectorAll('.meta-row')).map(row => row.innerHTML),
                category: card.closest('.photo-item').dataset.category
            };
        });
        this.filteredImages = [...this.images];
    }

    closeLightbox() {
        document.getElementById('lightbox').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    updateLightboxContent() {
        const currentImage = this.images[this.currentImageIndex];
        if (!currentImage) return;

        const lightboxImg = document.querySelector('.lightbox-img');
        const lightboxTitle = document.querySelector('.lightbox-title');
        const lightboxDescription = document.querySelector('.lightbox-description');
        const lightboxMeta = document.querySelector('.lightbox-meta');

        lightboxImg.src = currentImage.src;
        lightboxImg.alt = currentImage.alt;
        lightboxTitle.textContent = currentImage.title;
        lightboxDescription.textContent = currentImage.description;
        lightboxMeta.innerHTML = currentImage.meta.join('');
    }

    previousImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.updateLightboxContent();
        this.triggerLightboxScan();
    }

    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.updateLightboxContent();
        this.triggerLightboxScan();
    }
}

// Scroll effects and parallax elements
class ScrollEffects {
    constructor() {
        this.isLuxury = document.querySelector('.photography-wrapper')?.classList.contains('luxury-mode');
        this.init();
    }

    init() {
        if (!this.isLuxury) {
            this.setupScrollIndicator();
            this.setupSmoothScrolling();
        }
    }

    setupScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            if (scrollIndicator) {
                const opacity = Math.max(0, 1 - (scrolled / windowHeight));
                scrollIndicator.style.opacity = opacity;
            }
        });
    }

    setupSmoothScrolling() {
        // Smooth scroll for any anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Equipment showcase interactions
class EquipmentShowcase {
    constructor() {
        this.init();
    }

    init() {
        this.setupEquipmentCards();
    }

    setupEquipmentCards() {
        const equipmentCards = document.querySelectorAll('.equipment-card');
        
        equipmentCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.animateIcon(card);
            });
        });
    }

    animateIcon(card) {
        const icon = card.querySelector('.equipment-icon i');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        }
    }
}

// Theme integration for photography page
class PhotographyTheme {
    constructor() {
        this.init();
    }

    init() {
        this.setupThemeCompatibility();
        this.observeThemeChanges();
    }

    setupThemeCompatibility() {
        // Ensure photography page responds to theme changes
        this.updateThemeElements();
    }

    updateThemeElements() {
        const isDark = document.documentElement.classList.contains('dark');
        const photoCards = document.querySelectorAll('.photo-card');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        // Adjust card shadows and overlays based on theme
        photoCards.forEach(card => {
            if (isDark) {
                card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
            } else {
                card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
            }
        });
    }

    observeThemeChanges() {
        // Watch for theme changes and update accordingly
        const observer = new MutationObserver(() => {
            this.updateThemeElements();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
}

// Initialize all futuristic photography features
document.addEventListener('DOMContentLoaded', function() {
    new FuturisticPhotographyGallery();
    new ScrollEffects();
    new EquipmentShowcase();
    new PhotographyTheme();
    
    // Page-specific optimizations
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    // Preload first few images for better performance
    const firstImages = Array.from(lazyImages).slice(0, 3);
    firstImages.forEach(img => {
        const imageLoader = new Image();
        imageLoader.src = img.src;
    });
    
    console.log('Futuristic photography gallery initialized with', lazyImages.length, 'images');
    console.log('Interactive lens and holographic effects active');
});

// =====================
// One-Pager Enhancements
// =====================
(function onePagerInit(){
    document.addEventListener('DOMContentLoaded', ()=>{
        const grid = document.getElementById('galleryGrid');
        if(!grid) return;

        // Pagination state
        const state = {
            perPage: 6,
            currentPage: 1
        };

        // Build pagination API on gallery instance-like object
        const photoItems = Array.from(grid.querySelectorAll('.photo-item'));

        function getFilteredItems(){
            const filter = document.getElementById('categorySelect')?.value || 'all';
            return photoItems.filter(item => filter==='all' || item.dataset.category===filter);
        }

        function render(){
            const items = getFilteredItems();
            const totalPages = Math.max(1, Math.ceil(items.length / state.perPage));
            if(state.currentPage>totalPages) state.currentPage = totalPages;
            const start = (state.currentPage-1)*state.perPage;
            const end = start + state.perPage;
            // Hide all
            photoItems.forEach(el=> el.style.display='none');
            // Show current slice
            items.slice(start,end).forEach(el=> el.style.display='block');
            // Update indicator
            const indicator = document.getElementById('pageIndicator');
            if(indicator) indicator.textContent = `${state.currentPage}/${totalPages}`;
            // Enable/disable buttons
            const prev = document.getElementById('pagePrev');
            const next = document.getElementById('pageNext');
            if(prev) prev.disabled = state.currentPage===1;
            if(next) next.disabled = state.currentPage===totalPages;
        }

        function attachPager(){
            const prev = document.getElementById('pagePrev');
            const next = document.getElementById('pageNext');
            prev?.addEventListener('click', ()=>{ if(state.currentPage>1){ state.currentPage--; render(); }});
            next?.addEventListener('click', ()=>{ state.currentPage++; render(); });
            const select = document.getElementById('categorySelect');
            select?.addEventListener('change', ()=>{ state.currentPage=1; render(); });
        }

        attachPager();
        render();

        // Segmented tabs (Gallery/Stats)
        const tabGallery = document.getElementById('tabGallery');
        const tabStats = document.getElementById('tabStats');
        const dock = document.querySelector('.stats-dock');
        function setTab(which){
                const gallerySection = document.querySelector('.one-pager-gallery');
                if(which==='gallery'){
                    tabGallery?.classList.add('active');
                    tabStats?.classList.remove('active');
                    gallerySection?.classList.remove('d-none');
                    dock?.classList.remove('only-stats');
                } else {
                    tabStats?.classList.add('active');
                    tabGallery?.classList.remove('active');
                    gallerySection?.classList.add('d-none');
                    dock?.classList.add('only-stats');
                }
        }
        tabGallery?.addEventListener('click', ()=> setTab('gallery'));
        tabStats?.addEventListener('click', ()=> setTab('stats'));

        // Stats dock collapse
        const toggle = document.getElementById('statsToggle');
        toggle?.addEventListener('click', ()=>{
                const wrapper = document.querySelector('.stats-dock');
                wrapper?.classList.toggle('dock-collapsed');
                const expanded = !wrapper?.classList.contains('dock-collapsed');
                toggle.setAttribute('aria-expanded', expanded? 'true':'false');
        });

        // Draggable stat tiles with persistence
        const container = document.getElementById('statsContainer');
        const key = 'photo_stats_order';
        function loadOrder(){
                try {
                        const saved = JSON.parse(localStorage.getItem(key)||'[]');
                        if(Array.isArray(saved) && saved.length){
                                saved.forEach(k=>{
                                        const el = container.querySelector(`[data-key="${k}"]`);
                                        if(el) container.appendChild(el);
                                });
                        }
                } catch(_){}
        }
        function saveOrder(){
                const order = Array.from(container.children).map(c=>c.getAttribute('data-key'));
                localStorage.setItem(key, JSON.stringify(order));
        }
        function enableDrag(){
                let dragEl=null;
                container?.addEventListener('dragstart', (e)=>{
                        dragEl = e.target.closest('.stat-item');
                });
                container?.addEventListener('dragover', (e)=>{
                        e.preventDefault();
                        const target = e.target.closest('.stat-item');
                        if(!dragEl || !target || dragEl===target) return;
                        const rect = target.getBoundingClientRect();
                        const before = (e.clientY - rect.top) < rect.height/2;
                        container.insertBefore(dragEl, before? target : target.nextSibling);
                });
                container?.addEventListener('drop', ()=>{ saveOrder(); });
        }
        loadOrder();
        enableDrag();
    });
})();