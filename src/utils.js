export const type = (content, $el) => {
    const arr = content.split('');
    for (let i = 0; i < arr.length; i++) {
        (() => {
            setTimeout(() => {
                document.getElementById($el).innerHTML += arr[i];
            }, i * 50);
        })();
    }
};
