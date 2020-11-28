import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'simplecal';
    calcSyntax='';
    resultant='';
    operandOne='';
    operandOneDecimal=false;
    operandTwo='';
    operandTwoDecimal = false;
    operator='';
    operatorSelected=false;
    
    
    
    userInput(keyInput){
        
        if (this.operatorSelected){
            if (keyInput == '.'){
                if(this.operandOneDecimal==true){
                    return false;
                }
                this.operandOneDecimal=true;
            }
            this.operandTwo += keyInput;
        }else{
            if (keyInput == '.') {
                if (this.operandTwoDecimal == true) {
                    return false;
                }
                this.operandTwoDecimal = true;
            }
            this.operandOne += keyInput;
        }
        this.calcSyntax +=keyInput;
        
    }
    
    mathFunction(operatorKey){
        if (this.operatorSelected){
            alert("invalid operation");
            return false;
        }
        this.operatorSelected=true;
        this.calcSyntax += operatorKey;
        this.operator = operatorKey;
    }
    
    generateresult(){
        if (this.operandTwo==""){
            alert("invalid operation");
            return false;
        }
        this.resultant = eval(this.calcSyntax);
        this.operandOne = '';
        this.operandTwo = '';
        this.operator = '';
        this.operatorSelected = false;
        this.operandOneDecimal = false;
        this.operandTwoDecimal = false;
    }
    
    clearScreen(type){
        this.calcSyntax = '';
        this.resultant = '';
        this.operandOne = '';
        this.operandTwo = '';
        this.operator = '';
        this.operatorSelected = false;
        this.operandOneDecimal = false;
        this.operandTwoDecimal = false;
    }
}
