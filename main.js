/*
thumbnail.js
version 1.1.0
*/
HTMLCollection.prototype.loop = function(f) {
    for(let i = this.length; i--;) f(this[i], i, this)
}
//the function that does all of the magic, o.O
document.addEventListener('keydown', e => {
    if(e.code === 'Escape'){
        //prevent the default action
        e.preventDefault()
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
        //bug fix - selects thumbnail.js canvas element in case another canvas element exists
        set(document.getElementsByTagName('ski')[0])
        size(window.innerWidth, window.innerHeight)
    }
})
