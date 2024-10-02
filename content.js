    window.addEventListener('load', function() {
        const observer = new MutationObserver(() => {
            const recommendedVideosSection = document.querySelector('#secondary-inner');
            const commentsSection = document.querySelector('#comments');
    
            if (recommendedVideosSection && commentsSection) {
                commentsSection.parentNode.removeChild(commentsSection);
                recommendedVideosSection.parentNode.removeChild(recommendedVideosSection);
    
                const primaryContainer = document.querySelector('#primary');
                primaryContainer.appendChild(recommendedVideosSection);
    
                const secondaryContainer = document.querySelector('#secondary');
                secondaryContainer.appendChild(commentsSection);
    
                commentsSection.style.height = '400px';          
                commentsSection.style.overflowY = 'auto';        
                commentsSection.style.overflowX = 'hidden';      
                
                observer.disconnect();
            }
        });
    
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });