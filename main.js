var array = [6, 2, 3, 1, 7, 4, 8, 5]

sortArray(array);

DrawArray();

function sortArray()
{
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if(array[i]>array[j])
            {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp; 
            }
        }
        
    }
    
}

function DrawArray()
{
    var container=document.createElement('div');
    container.className = "container";

    var wrapper = document.createElement('div');
    wrapper.className = "blocks-wrapper";
    container.append(wrapper);
    
    for (let i = 0; i < array.length; i++) {
        var block = wrapper.appendChild(document.createElement('div'));
        block.innerHTML=array[i];
        block.className = "block";
        block.id = "block-"+array[i];
        
    }
    document.body.append(container);
}
