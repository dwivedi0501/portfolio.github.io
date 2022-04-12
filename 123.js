function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector('.cross').style.display = 'none';
        document.querySelector('.hamburger').addEventListener("click", () => {
            document.querySelector('.sidebar').classList.toggle('sidebargo')
            if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
                document.querySelector('.ham').style.display = 'inline'
                document.getElementById('123').style.display='inline'
                document.querySelector('.cross').style.display = 'none'
            }
            else {
                setTimeout(() => {
                    document.querySelector('.cross').style.display = 'inline'
                }, 530)
                document.getElementById('123').style.display='none'
                document.querySelector('.ham').style.display = 'none'
            }
        })
    } else {
        document.querySelector('.cross').style.display = 'none';
        document.querySelector('.hamburger').addEventListener("click", () => {
            document.querySelector('.sidebar').classList.toggle('sidebargo')
            if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
                document.querySelector('.ham').style.display = 'inline'
                document.querySelector('.cross').style.display = 'none'
            }
            else {
                setTimeout(() => {
                    document.querySelector('.cross').style.display = 'inline'
                }, 530)
                document.querySelector('.ham').style.display = 'none'
            }
        })
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time