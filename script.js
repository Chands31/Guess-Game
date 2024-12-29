'use strict';
const x = function(){
  console.log(23);
}

document.querySelector('.check').addEventListener('check', function () {
  console.log(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = 'Ho Ho Correct Number';
});
