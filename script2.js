////////////////////////////////// Price Control
var PriceController = (function () {
    var listOfPrices = {
      list : []  
    };
    var updateList = function(price) {
        this.price = price;
    };    
    
    return {
        addList : function(input) {
            var newItem;
            
            newItem = new updateList(input);
            listOfPrices.list.push(newItem);
            
            return newItem;
        },
        
        listShow : function() {
            return listOfPrices.list;
        },
        
        testing: function() {
            console.log(listOfPrices);
        }
    };
})();

////////////////////////////////// UI control
var UIController = (function() {
    
    return {
        
    display : function(obj, arr) {
        document.querySelector('.display').textContent = obj;
        document.querySelector('._' + obj).classList.add('called');
        
        // Addding the previous calls
        document.querySelector('.prev1').textContent = arr[arr.length - 1];
        if (arr.length === 2)
            document.querySelector('.prev2').textContent = arr[arr.length - 2];
        
        else if (arr.length >=3){
            document.querySelector('.prev2').textContent = arr[arr.length - 2];            document.querySelector('.prev3').textContent = arr[arr.length - 3];
        }
    },
        
    addPrice : function() {
        
        return {
            price : document.querySelector(".priceAdd").value
        };
      },
        
    clearFields: function() {
            var fields, fieldsArr;
            
            fields = document.querySelector('.priceAdd');
            
        /*
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
                */
        fields.value = "";
            
        },
       
    addTable : function(obj, arr) {
        
        var html, newHtml;
        html = '<div class="price",id="pr%id%">%price%<input type="checkbox", class = "cb"></div>';
        newHtml = html.replace('%id%', arr.length);
        newHtml = newHtml.replace('%price%', obj.price.price);
        
        document.querySelector('.values').insertAdjacentHTML('beforeend', newHtml);
        
    }
    };
})();

////////////////////////////////// Event listners onn
var controller = function(UICtrl, PCtrl) {
    var collection = [];
    var count = 0;
    
    var setEventListeners = function() {
        console.log('Application set');
        document.querySelector('.btn-roll').addEventListener('click', showOn);
        document.querySelector('.plus').addEventListener('click', CtrlAddItem);
    };
    
    
    var showOn = function() {
            var number, inspector;
            
            number = Math.ceil(Math.random() * 90);
            inspector = collection.indexOf(number);

            if (inspector !== -1)
                showOn();
            else {
                collection.push(number);
                UICtrl.display(number, collection);
            }
        };
    
    var CtrlAddItem = function() {
        var newItem;
        input = UICtrl.addPrice();
        
        // Adding item to the price Controller
        newItem = PCtrl.addList(input);
        
        // Updating the UI
        UICtrl.addTable(newItem, PCtrl.listShow);
        
        // clearing the entries
        UICtrl.clearFields();
        
    };
    
    return {
        start : function() {
            setEventListeners();
        }
    }
}(UIController, PriceController);
controller.start();
