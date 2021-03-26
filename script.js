 var array=[];	
		function backspace(calc) {											 
			size = calc.display.value.length; 
			calc.display.value = calc.display.value.substring(0, size-1); 
		} 		
		function calculate(calc) { 
			try {
                
            }
            catch (error) {
                calc.display.value = "There's been an error";
                console.log(error);
            }
            finally {
                if(calc.display.value.includes("/0")) { 
				size = calc.display.value.length; 
                calc.display.value = "cannot divide by zero";
                }
                else{ 
                    array.push(calc.display.value);
                    calc.display.value = eval(calc.display.value); 
                }     
            }
        }
            
        function clear(calc){
            calc.display.value = ' ';
        }
        function his(){
            var test=document.createElement('section');
            test.setAttribute('id','test');
            var ul=document.createElement('ul');

            document.body.appendChild(test);
            test.appendChild(ul);
            for (var i=0; i<array.length; i++){
                var li=document.createElement('li');
                ul.appendChild(li);
                li.innerHTML=array[i];

            }
        }
