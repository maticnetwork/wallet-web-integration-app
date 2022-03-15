function loadDemoApp(url) {
    const origin = new URL(url || window.location.href);
    const srcList = {
        js: []
    }
    return fetch(origin + '/asset-manifest.json').then(response => {
        return response.json();
    }).then(assets => {
        // const assets = response.json();
        console.log(assets);
        const files = assets.files;
        for (const file in files) {
            const path = files[file];
            const splitted = files[file].split('.');
            const last = splitted.pop();
            if (last === 'js') {
                srcList.js.push(path);
            }
        }

        const promises = srcList.js.map(src => {
            return loadScript(src);
        });
        return Promise.all(promises);
    })


}

window.loadDemoApp = loadDemoApp;

function loadScript(src) {
    debugger;
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    return new Promise((res, rej) => {
        script.onload = res;
        script.onerror = rej;
    });
}