import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState( [ 'One Punch' ] );

    // const handleAdd = () => {
    //     // const addElement = 'Attack of Titans';
    //     setCategories( [ ...categories, 'Attack of Titans' ] );
    //     // setCategories( cats => [ ...cats, 'Attack of Titans' ] ); Otra forma de hacerlo
    // }

    return (
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( ( category ) => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ) )
                }
            </ol>

        </>
    );
};

export default GifExpertApp;
