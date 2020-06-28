export default function (t) {
    document.title = t || '思博威';
    let i = document.createElement('iframe');
    i.setAttribute('src', '/favicon.png');
    i.style.display = 'none';
    const iframeCallback = function () {
        setTimeout(function () {
            i.removeEventListener('load', iframeCallback);
            document.body.removeChild(i);
        }, 0)
    };
    i.addEventListener('load', iframeCallback);
    document.body.appendChild(i);
}