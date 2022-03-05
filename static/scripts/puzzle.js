$(document).ready( function () {
    let toAppend = '';
    table = $('#data');
    puzzles.forEach(function (p, index) {
      toAppend = toAppend.concat(`<tr>
        <td data-label="Puzzle"><a href="https://lichess.org/training/${p[0]}" target="_blank" style="text-decoration:none">${p[0]}</a></td>
        <td data-label="Played"><span style="color: var(--rating);font-family: arial, sans-serif;">${p[2]}</span></td>
        <td data-label="Rating"><span style="color: var(--rating);font-family: arial, sans-serif;">${p[1]}</span></td>
    </tr>`)
    });  
    table.append(toAppend);
    $('#loading').hide();
    toAppend = null;
    puzzles = null;
})

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

//

$('#in').click(function() {
   var min = parseInt( $('#min').val().replace(",",""), 10 );
   $('#data tbody tr').each(function() {
     var played = parseFloat( $('td:eq(1)', this).text().replace(",","") ) || 0; 
     if ((isNaN( min )) || ( min <= played )) {
        $(this).show()
     } else {
        $(this).hide()
     }   
   })
   $('#loading').hide();
});

//

var input = document.getElementById("min");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("in").click();
    }
});

$('#goto').click(function() {
   var page = $('#goto_in').val().trim();
   location.href = './' + page + '.html'
});

var gotop = document.getElementById("goto_in");
gotop.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("goto").click();
    }
});

function goto_bottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}