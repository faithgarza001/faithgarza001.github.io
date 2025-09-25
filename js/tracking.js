// Custom Analytics Tracking System
// Author: Faith Garza
// Lightweight privacy-focused tracking solution

class SimpleAnalytics {
    constructor() {
        this.sessionId = this.generateSessionId();
        this.pageLoadTime = Date.now();
        this.init();
    }

    init() {
        this.trackPageView();
        this.trackUserBehavior();
        this.setupBeforeUnload();
    }

    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    trackPageView() {
        const pageData = {
            page: window.location.pathname,
            title: document.title,
            url: window.location.href,
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
            sessionId: this.sessionId,
            userAgent: navigator.userAgent,
            screenSize: `${screen.width}x${screen.height}`,
            windowSize: `${window.innerWidth}x${window.innerHeight}`,
            device: this.getDeviceType()
        };

        this.sendEvent('pageview', pageData);
    }

    getDeviceType() {
        const width = window.innerWidth;
        if (width <= 768) return 'mobile';
        if (width <= 1024) return 'tablet';
        return 'desktop';
    }

    trackUserBehavior() {
        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
            }
        });

        // Track clicks on important elements
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a, button, .menu-link');
            if (target) {
                this.sendEvent('click', {
                    element: target.tagName.toLowerCase(),
                    text: target.textContent?.trim().substring(0, 100),
                    href: target.href || null,
                    timestamp: new Date().toISOString(),
                    sessionId: this.sessionId
                });
            }
        });

        // Store max scroll for session end
        this.maxScrollDepth = () => maxScroll;
    }

    setupBeforeUnload() {
        window.addEventListener('beforeunload', () => {
            const sessionTime = Date.now() - this.pageLoadTime;
            this.sendEvent('session_end', {
                sessionDuration: sessionTime,
                maxScrollDepth: this.maxScrollDepth(),
                timestamp: new Date().toISOString(),
                sessionId: this.sessionId
            });
        });
    }

    sendEvent(eventType, data) {
        // Store locally for dashboard - can be extended to send to analytics server
        const events = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
        events.push({
            type: eventType,
            data: data,
            timestamp: Date.now()
        });

        // Keep only last 1000 events to prevent storage bloat
        if (events.length > 1000) {
            events.splice(0, events.length - 1000);
        }

        localStorage.setItem('portfolio_analytics', JSON.stringify(events));

        // Also increment simple page view counter
        if (eventType === 'pageview') {
            const pageViews = JSON.parse(localStorage.getItem('portfolio_page_views') || '{}');
            const page = data.page || window.location.pathname;
            pageViews[page] = (pageViews[page] || 0) + 1;
            pageViews['total'] = (pageViews['total'] || 0) + 1;
            localStorage.setItem('portfolio_page_views', JSON.stringify(pageViews));
        }
    }

    // Method to get analytics data (used by dashboard)
    static getAnalyticsData() {
        const events = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
        const pageViews = JSON.parse(localStorage.getItem('portfolio_page_views') || '{}');
        
        return {
            events: events,
            pageViews: pageViews,
            summary: this.generateSummary(events, pageViews)
        };
    }

    static generateSummary(events, pageViews) {
        const pageViewEvents = events.filter(e => e.type === 'pageview');
        const uniqueSessions = new Set(pageViewEvents.map(e => e.data.sessionId)).size;
        const totalViews = pageViews.total || 0;
        
        return {
            totalViews: totalViews,
            uniqueVisitors: uniqueSessions,
            topPages: Object.entries(pageViews)
                .filter(([page]) => page !== 'total')
                .sort(([,a], [,b]) => b - a)
                .slice(0, 5)
                .map(([page, views]) => ({ page, views }))
        };
    }
}

// Initialize analytics tracking on page load
document.addEventListener('DOMContentLoaded', () => {
    new SimpleAnalytics();
});

// Global export for dashboard integration
window.SimpleAnalytics = SimpleAnalytics;