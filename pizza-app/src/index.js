import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import BaseSelect from './pizza-base';
import IngredientsSelector from './ingredient-selector';

const App = ()=>{
    [ curIngredients, setIngredients ] = React.useState([]);
    const handleSetPreset = (to)=>{
        setIngredients(to);
        console.log(`set ingredents to ${to}`)
    }
    return (
        <div id="app-main">
            <Button variant="contained">Hello World</Button>
            <BaseSelect setIngs={handleSetPreset} />
            <IngredientsSelector ings={curIngredients}/>
        </div>
    )
}

const domContainer = document.getElementById('outer-div');
ReactDOM.render(<App />, domContainer);