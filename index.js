(function() {

function deleteItems2() {
    var Items = document.querySelectorAll('.block-2>ul>li.badge');
    if(Items.length > 0)
    for (var i = 0; i < Items.length; i++)
    {  Items[i].parentNode.removeChild(Items[i])} 
    }

var fuckedDelete = document.querySelector('input[name=del2]')
fuckedDelete.onclick = deleteItems2;



 function deleteItems() {
    var Items = document.querySelectorAll('.block-1>ul>li.badge');
    if(Items.length > 0)
    for (var i = 0; i < Items.length; i++)
    {  Items[i].parentNode.removeChild(Items[i])} 
    }


var fuckedDelete2 = document.querySelector('input[name=del1]')
fuckedDelete2.onclick = deleteItems;





  function deleteItems() {
       var Items = document.querySelectorAll('.block-1>ul>li.badge');
    if(Items.length > 0)
    for (var i = 0; i < Items.length; i++)
    {  Items[i].parentNode.removeChild(Items[i])} 
    }
    
  var messageAll = document.querySelector('div.alert');
   var upFuck = document.querySelector('input[name=question]') 
   
    upFuck.onclick = function() {
      messageAll.style.display = 'block';
    }
    
   var messageAll2 = document.querySelector('div.alert.a');
   var upFuck2 = document.querySelector('input[name=question-2]') 
   
    upFuck2.onclick = function() {
      messageAll2.style.display = 'block';
    }
   function getTarget(e) {                                                           
       // Объявляем функцию 
       if (!e) {                                                                                    
           // Если объект события отсутствует  
           e = window.event;                                                                  
           // Используем объект event, применявшийся в старых версиях IE  
       }   return e.target || e.srcElement;                                          
       // Получаем цель события 
   }
    
    function itemDone(e) {                                                           
        // Объявляем функцию                                                                                                      // Удаляем элемент из списка  v
        var target, elParent, elGrandparent;                                      
        // Объявляем переменные  
        target = getTarget(e);                                                            
        // Получаем ссылку того элемента, по которому был сделан щелчок 
        elParent = target.parentNode;                                               
        // Получаем соответствующий элемент из этого списка  
        elGrandparent = target.parentNode.parentNode;                  
        // Получаем соответствующий список 
        elGrandparent.removeChild(elParent);                                  
        // Удаляем элемент из списка
                      // Запрещаем переход по данной ссылке куда-либо с текущей страницы 
        if (e.preventDefault) {                                                             
            // Если метод preventDefault() применим    
            e.preventDefault();                                                                
            // Используем p
            reventDefault()   } else {                                                                                       
                // Иначе    
                e.returnValue = false;                                                            
                // Используем прием для старых версий IE 
            }
    }
    
    var el = document.getElementById('shoppingList');              
    // Получаем список покупок 
    if (el.addEventListener) {                                                          
    // Если слушатели событий применимы  
        el.addEventListener('click', function(e) {                            
    // Добавляем слушатель событий щелчка  
            itemDone(e);                                                                          
            // Вызывается функция 
            itemDone()  }, false);                                                                                    
            // В потоке выполнения программы наступает фаза всплывания событий 
    } else {                                                                                         
        // Иначе 
        el.attachEvent('onclick', function(e){                                  
    // Используем модель, применявшуюся в старых версиях IE: onclick    
            itemDone(e);                                                                          
            // Вызываем функцию 
            itemDone()  }); 
    }
    
}());
    
    
