/*
thumbnail.js
version 1.0.0

all code is made available and to be used under the MIT license. see here: http://opensource.org/licenses/mit-license.php
intended for use in the Khan Academy environment. use outside of an educational environment is not intended.
*/
HTMLCollection.prototype.loop = function(f) {
    for(let i = this.length; i--;) f(this[i], i, this)
}
//the function that does all of the magic, o.O
document.addEventListener('keydown', e => {
    if(e.code === 'Escape'){
        //prevent the default action
        e.preventDefault()
        //set the canvas to the correct canvas
        canvas = document.getElementsByName('ski')[0]
        //grab the code inputted by the user
        const CODE = document.getElementsByName('thumbnail')[0].innerText
        //reset the header
        //document.head.innerHTML = ''
        document.getElementsByTagName('style').loop(s => s.parentElement.removeChild(s))
        //create a new style tag
        const style = document.createElement('style')
        //set the style tag
        style.innerHTML = `
        * {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        body {
            user-select: none;
            width: 100vw;
            height: 100vh;
        }
        canvas [name='ski'] {
            width: 100vw;
            height: 100vh;
            z-index: 100;
        }`
        //add a new style tag
        document.head.appendChild(style)
        //reset the body
        document.body.innerHTML = ''
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
