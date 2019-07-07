import React from 'react';

const ProductItem = ({match}) => (
    <div className="al-product__item">
        <p>{match.params.id}都是西瓜啊</p>
    </div>
)

export default ProductItem