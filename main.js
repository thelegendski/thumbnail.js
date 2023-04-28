/*
    thumbnail.js
    version 1.1.3
    thumbnail.js has a dependency of ski.js/defer.min.js
*/
HTMLCollection.prototype.forEach = function(func) {
    for(let i = this.length; i--;) func(this[i], i, this)
}
//the function that does all of the magic, o.O
document.addEventListener('keydown', e => {
    if(e.code === 'Escape'){
        //prevent the default action
        e.preventDefault()
        //grab the code inputted by the user
        const CODE = document.getElementsByName('thumbnail')[0].innerText
        //clears all previous stylin'
        document.getElementsByTagName('style').forEach(s => s.parentElement.removeChild(s))
        //create a new style tag
        const style = document.createElement('style')
        //set the style tag
        style.innerHTML = `* {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        body {
            user-select: none;
            width: 100vw;
            height: 100vh;
        }
        canvas {
            width: 100vw;
            height: 100vh;
            z-index: 100;
        }`
        //add the new style tag
        document.head.appendChild(style)
        //reset the body
        document.body.innerHTML = ''
        //create a canvas element
        const canvas = document.createElement("canvas")
        //ski.js needs to recognize the canvas
        set(canvas)
        //an' set its resolution
        size(window.innerWidth, window.innerHeight, true)
        //add a canvas element
        document.body.appendChild(canvas)
        canvas.style.display = 'block'
        //create a script [code]
        const code = document.createElement('script')
        //set the type of the script [code]
        code.type = 'module'
        //set the script [code]
        code.innerHTML = CODE
        //add the script [code]
        document.body.appendChild(code)
    }
})
