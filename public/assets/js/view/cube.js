
$(function () {
    var hexaDemo5,
        question = [
            {
                value: '1',
                style: {
                    backgroundColor: '#e67e22'
                }
            },
            {
                value: '2',
                style: {
                    backgroundColor: '#1ABC9C'
                }
            },
            {
                value: '3',
                style: {
                    backgroundColor: '#f1c40f'
                }
            },
            {
                value: '4',
                style: {
                    backgroundColor: '#2ECC71'
                }
            },
            {
                value: '5',
                style: {
                    backgroundColor: '#3498DB'
                }
            },
            {
                value: '6',
                style: {
                    backgroundColor: '#E74C3C'
                }
            },
            {
                value: '7',
                style: {
                    backgroundColor: '#9B59B6'
                }
            },
            {
                value: '8',
                style: {
                    backgroundColor: '#BDC3C7'
                }
            },
            {
                value: '9',
                style: {
                    backgroundColor: '#447788'
                }
            },
            {
                value: '0',
                style: {
                    backgroundColor: '#203537'
                }
            }				
        ];
        operation = [
            {
                value: '÷',
                style: {
                    backgroundColor: '#3498DB'
                }
            },
            {
                value: '×',
                style: {
                    backgroundColor: '#E74C3C'
                }
            },
            {
                value: '-',
                style: {
                    backgroundColor: '#9B59B6'
                }
            },
            {
                value: '+',
                style: {
                    backgroundColor: '#BDC3C7'
                }
            }
        ];
        equal = [
            {
                value: '=',
                style: {
                    backgroundColor: '#2ECC71'
                }
            }
        ];
        answer = [
            {
                value: '?',
                style: {
                    backgroundColor: '#e67e22'
                }
            },
            {
                value: '1',
                style: {
                    backgroundColor: '#e67e22'
                }
            },
            {
                value: '2',
                style: {
                    backgroundColor: '#1ABC9C'
                }
            },
            {
                value: '3',
                style: {
                    backgroundColor: '#f1c40f'
                }
            },
            {
                value: '4',
                style: {
                    backgroundColor: '#2ECC71'
                }
            },
            {
                value: '5',
                style: {
                    backgroundColor: '#3498DB'
                }
            },
            {
                value: '6',
                style: {
                    backgroundColor: '#E74C3C'
                }
            },
            {
                value: '7',
                style: {
                    backgroundColor: '#9B59B6'
                }
            },
            {
                value: '8',
                style: {
                    backgroundColor: '#BDC3C7'
                }
            },
            {
                value: '9',
                style: {
                    backgroundColor: '#447788'
                }
            },
            {
                value: '0',
                style: {
                    backgroundColor: '#203537'
                }
            },
            
        ];
    document.addEventListener('DOMContentLoaded', function(){
        var submit = document.getElementById('submit'),
            output = document.getElementById('output');
        hexaDemo5 = new HexaFlip(document.getElementById('hexaflip-demo5'),
            {set1: question, set2: operation, set3: question, set4: equal, set5:answer, set6:answer},
            {fontSize: 100, margin: 4, perspective: 1000}
        );
        
        /*
        var one = document.getElementById('tens-place'),
            ten = document.getElementById('ones-plae'),

        document.getElementById('set-button').addEventListener('click', function(){
            var time = {
                set5: one.value,
                set6: ten.value,
            }
            hexaDemo5.setValue(time);
        });
        */
        
        submit.addEventListener('click', function(){
            if(hexaDemo5.getValue().join(' ') === 'red yellow blue green'){
                output.innerHTML = 'password correct!';
                hexaDemo5.flip();
                hexaDemo5.flip();
                hexaDemo5.flip();
                hexaDemo5.flip();
                hexaDemo5.flip();
                hexaDemo5.flip();
                hexaDemo5.flip();
                hexaDemo5.flip();
            }else{
                output.innerHTML = 'password incorrect.';
            }
        }, false);
        

    }, false);

});