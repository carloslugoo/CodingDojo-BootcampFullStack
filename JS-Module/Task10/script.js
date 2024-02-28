var operand1 = '';
    var operand2 = '';
    var operator = '';

    function press(value) {
        if (operator === '') {
            operand1 += value;
        } else {
            operand2 += value;
        }
        updateDisplay();
    }

    function setOP(op) {
        operator = op;
        updateDisplay();
    }

    function clr() {
        operand1 = '';
        operand2 = '';
        operator = '';
        updateDisplay();
    }

    function calculate() {
        var result = 0;
        var num1 = parseFloat(operand1);
        var num2 = parseFloat(operand2);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Error';
                }
                break;
        }

        operand1 = result.toString();
        operand2 = '';
        operator = '';
        updateDisplay();
    }

    function updateDisplay() {
        display.textContent = (operand1 !== '' ? operand1 : '0') + (operator !== '' ? ' ' + operator : '') + (operand2 !== '' ? ' ' + operand2 : '');
    }