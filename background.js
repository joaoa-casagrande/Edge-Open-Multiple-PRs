function reddenPage() {
    var elsToShow = document.querySelectorAll("a[id*='issue_'][id*='_link']");
    elsToShow.forEach(element => {
        if(element.closest("div[id*='issue_']").className.includes("selected"))
        {
            const href = element.getAttribute("href");
            window.open(href, '_blank');
        }
    });
}
chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes('https://github.com/') && tab.url.includes('pulls')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: reddenPage
        });
    }

});