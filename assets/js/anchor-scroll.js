/**
 * AnchorScrollPlugin — Docsify plugin for anchor link scrolling.
 *
 * Docsify encodes in-page anchor links as query parameters in the URL hash,
 * e.g. a link to `#menus-settings-and-logs` becomes `#/page?id=menus-settings-and-logs`.
 * The browser cannot scroll natively to these targets; this plugin handles it.
 *
 * Two cases are covered:
 *  1. Initial page load / cross-page navigation: `hook.doneEach` fires after
 *     Docsify has rendered the content, then scrolls to the target element.
 *  2. Same-page anchor clicks: only the hash changes without a re-render, so
 *     a `hashchange` listener handles the scroll directly.
 *
 * Usage in index.html (load this script before the $docsify config):
 *
 *   <script src="assets/js/anchor-scroll.js"></script>
 *   <script>
 *     window.$docsify = {
 *       plugins: [
 *         AnchorScrollPlugin.create({ isDebug: false })
 *       ]
 *     };
 *   </script>
 *
 * @param {object}  [param]          - Optional configuration object.
 * @param {boolean} [param.isDebug]  - If true, logs debug output to the console.
 */
;(function() {
    function create(param) {
        var isDebug = (typeof param === 'object') && param.isDebug || false;
        var dd = function() { if (isDebug) console.log.apply(console, ['[anchor-scroll]'].concat(Array.prototype.slice.call(arguments))); };

        return function(hook) {
            function scrollToId(trigger) {
                var match = window.location.hash.match(/[?&]id=([^&]+)/);
                dd(trigger + ' fired, hash:', window.location.hash);
                if (!match) { dd('no id param found, skipping'); return; }
                dd('id param found:', match[1]);
                var el = document.getElementById(match[1]);
                if (el) { dd('element found, scrolling'); el.scrollIntoView(); }
                else { dd('element not found (content not yet rendered?):', match[1]); }
            }

            hook.doneEach(function() { scrollToId('doneEach'); });
            window.addEventListener('hashchange', function() { scrollToId('hashchange'); });
        };
    }

    window.AnchorScrollPlugin = { create: create };
}());
