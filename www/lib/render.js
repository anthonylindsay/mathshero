define(function () {
    return function render($html, $target_id) {
        document.getElementById($target_id).innerHTML = $html;
    };
});
