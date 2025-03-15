(function() {
    function addBannerDownloadButton() {
        // Wait for the banner image to load
        let banner = document.querySelector('header div[style*="background-image"]');
        
        if (banner) {
            // Extract image URL from inline style
            let bannerStyle = banner.style.backgroundImage;
            let imgUrl = bannerStyle.match(/url\(["']?(.*?)["']?\)/);
            if (imgUrl && imgUrl[1]) {
                imgUrl = imgUrl[1];

                // Check if button already exists
                if (document.getElementById('banner-download-btn')) return;

                // Create the download button
                let btn = document.createElement('a');
                btn.href = imgUrl;
                btn.download = "reddit_banner.jpg"; // Forces download
                btn.innerText = "Download Banner";
                btn.id = "banner-download-btn";
                btn.style.cssText = `
                    display: inline-block;
                    padding: 8px 12px;
                    font-size: 14px;
                    background: #ff4500;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                    margin-top: 10px;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    z-index: 1000;
                    cursor: pointer;
                `;

                // Append button to the banner container
                banner.appendChild(btn);
            }
        }
    }

    // Run the function after the page loads
    window.addEventListener('load', addBannerDownloadButton);
})();