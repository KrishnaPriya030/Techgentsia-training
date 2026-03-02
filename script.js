let current=""

    function appendOperator(operator){
        current+=operator;
        document.getElementById('display').value=current;
    };

function appendNumber(number){
    current+=number;
    document.getElementById('display').value=current;
};
function calculateResult(){
    try{
        current=eval(current);
        document.getElementById('display').value = current;
    } catch {
        document.getElementById('display').value = 'Error';
    }
};
function clearDisplay() {
    current= "";
    document.getElementById('display').value = "";
};
