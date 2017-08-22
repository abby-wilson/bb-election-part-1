document.addEventListener("DOMContentLoaded", function() {

  var votes = $.ajax({
    url: 'https://bb-election-api.herokuapp.com',
    method: 'GET',
    dataType: 'json'
  })
  votes.done(function(data){
    console.log(data);
// CREATE NEW TABLE
    var list = document.body.querySelector('ul');

// ADD TABLE HEADERS
  var tr = document.createElement('tr');
  var leftRow = document.createElement('td');
  leftRow.innerHTML = 'Candidate Names';
  tr.appendChild(leftRow);
  var rightRow = document.createElement('td');
  rightRow.innerHTML = "Number of Votes";
  tr.appendChild(rightRow);
  list.appendChild(tr);

// ADD TABLE ROWS
  for (var index in data.candidates) {
    var names = data.candidates[index].name
      console.log(data.candidates[index].name)
      var tr = document.createElement('tr')
      var leftRow = document.createElement('td')
      leftRow.innerHTML = names
      tr.appendChild(leftRow)

    var votes = data.candidates[index].votes
      console.log(data.candidates[index].votes)
      var rightRow = document.createElement('td')
      rightRow.innerHTML = votes
      tr.appendChild(rightRow)
      list.appendChild(tr)
  }

  document.body.appendChild(list)
  })
});
