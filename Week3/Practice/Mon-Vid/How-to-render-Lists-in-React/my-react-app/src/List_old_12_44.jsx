function List() {
    const fruits = [
        {id: 1, name:"apple", calories: 95}, 
        {id: 2, name:"orange", calories: 45}, 
        {id: 3, name:"banana", calories: 105}, 
        {id: 4, name:"coconut", calories: 159}, 
        {id: 5, name:"pineapple", calories: 37},
    ];

    // sort alphabetical
    // fruits.sort((a, b) => a.name.localeCompare(b.name))
    
    // sort REVERSE alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name))
    

    // Sort numetic order, you can reverse it by flipping a and b
    // fruits.sort((a, b) => a.calories - b.calories);

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories > 100);



    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                                {fruit.name}: &nbsp;
                                                <b>{fruit.calories}</b>kcal</li>);

    return(<ol>{listItems}</ol>);

    // const listItems = lowCalFruits.map(lowCalfruit => <li key={lowCalfruit.id}>
    //                                             {lowCalfruit.name}: &nbsp;
    //                                             <b>{lowCalfruit.calories}</b>kcal</li>);

    // return(<ol>{listItems}</ol>);

    // const listItems = highCalFruits.map(highCalfruit => <li key={highCalfruit.id}>
    //                                                     {highCalfruit.name}: &nbsp;
    //                                                     <b>{highCalfruit.calories}</b>kcal</li>);

    return(<ol>{listItems}</ol>);
}

export default List