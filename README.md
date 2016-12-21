# vanillaSmoothScroll
Little tool for smooth scrolling.
## Usage
*index.html*

    <button id="myButton" href="#somePlace" data-href="somePlace"></button>
    <button id="anotherButton" href="#anotherPlace" data-href="anotherPlace"></button>

    <div id="somePlace"></div>
    <div id="anotherPlace"></div>

*scripts.js*

    import smoothScrolling from 'smoothScrolling';

    // button with data-href equals href without hash
    const myButton = document.getElementById('myButton');

    smoothScrolling(myButton);

    // or array of such buttons
    const buttons = [myButton, document.getElementById('anotherButton')];

    smoothScrolling(buttons);
--------------------
## Look at the example in the repository