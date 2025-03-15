(function() {
    function addDownloadLinks() {
        document.querySelectorAll('img:not([data-download-added])').forEach(img => {
            let imgSrc = img.src;

            // Skip small icons or non-relevant images
            if (!imgSrc || imgSrc.includes('emoji') || img.width < 50) return;

            // Create download button
            let btn = document.createElement('a');
            btn.href = imgSrc;
            btn.download = "image.jpg"; // Forces download
            btn.innerText = "Download";
            btn.style.cssText = `
                display: inline-block;
                padding: 5px 10px;
                font-size: 12px;
                background: #ff4500;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                margin-top: 5px;
                position: relative;
                z-index: 1000;
            `;

            // Place button under image
            let parent = img.parentElement;
            if (parent) {
                parent.appendChild(btn);
            }

            // Mark image as processed
            img.setAttribute('data-download-added', 'true');
        });
    }

    // Run on page load
    addDownloadLinks();

    // Run on scroll for dynamically loaded images
    document.addEventListener('scroll', addDownloadLinks);
})();