function highestProductOfThree(arr) {
    if (arr.length < 3) {
      return "Error: Array must have at least 3 integers.";
    }
    arr.sort((a, b) => a - b);  
    const l = arr.length;
    const res = arr[l - 1] * arr[l - 2] * arr[l - 3];
        return res;
    }
  
  const arr1 = [10, 5, 2, 8, 10];
  document.write(highestProductOfThree(arr1));

  document.getElementById('calc').onclick = () => {
    let input = document.getElementById('inp').value;
    let numbersArray = input.split(',').map(Number);
    displayResult(numbersArray);
}

function displayResult(array) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>Numbers Array:</strong> ${array.join(', ')}`;
}
