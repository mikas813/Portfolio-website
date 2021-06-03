export const type = (content, $el, status) => {
    status && document.querySelector(`.${$el}`).classList.add(status);
    const arr = content.split('');
    for (let i = 0; i < arr.length; i++) {
        (() => {
            setTimeout(() => {
                document.getElementById($el).innerHTML += arr[i];
            }, i * 50);
        })();
    }
};

