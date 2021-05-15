function generateStrArray() {
  const min = 65
  const max = 90
  let length = 5
  let StrArray = []
  let AllLettersArray = []
  let randomIndex

  for (let i = min; i <= max; i++) {
    AllLettersArray.push(String.fromCharCode(i))
  }

  while (length--) {
    randomIndex = Math.floor(Math.random() * AllLettersArray.length)
    StrArray.push(AllLettersArray[randomIndex])
    AllLettersArray.splice(randomIndex, 1)
  }
  return StrArray
}

document.addEventListener('DOMContentLoaded', function () {
  var GeneratedArray = generateStrArray()
  var select = document.getElementById('select_letter')
  GeneratedArray.forEach((letter) => {
    var option = document.createElement('option')
    option.text = letter
    option.value = letter
    select.appendChild(option)
  })
})

function onChange() {
  var selected_letter = document.getElementById('select_letter').value
  var filter_results = document.getElementById('filter-results')

  filter_results.replaceChildren()

  var FilteredList = list.filter((e) => e.name[0] === selected_letter)

  if (FilteredList.length == 0) {
    var appended_div = document.createElement('div')
    appended_div.innerText = 'No matched results'
    filter_results.appendChild(appended_div)
  } else {
    FilteredList.forEach((item) => {
      var appended_div = document.createElement('div')

      appended_div.innerText = item.name
      filter_results.appendChild(appended_div)
    })
  }
}
