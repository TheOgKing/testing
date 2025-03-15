(function() {
    function addBannerDownloadButton() {
        // Wait for the banner image to be available
        setTimeout(() => {
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
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        background: #ff4500;
                        color: white;
                        padding: 10px 15px;
                        font-size: 14px;
                        border-radius: 5px;
                        text-decoration: none;
                        z-index: 9999;
                        font-family: Arial, sans-serif;
                        box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
                    `;

                    // Append button to the body (ensures visibility in iOS)
                    document.body.appendChild(btn);
                }
            }
        }, 2000); // Delay to ensure elements load properly
    }

    // Run after page loads
    window.addEventListener('load', addBannerDownloadButton);
})();