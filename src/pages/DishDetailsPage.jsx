import React from 'react';
import { useParams } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

const DishDetailsPage = () => {
  const { id } = useParams();
  const { menuItems } = useAdmin();
  const dish = menuItems.find(item => item.id === parseInt(id));

  if (!dish) {
    return (
      <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
        <h2>Dish not found</h2>
        <p>The dish you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <img
          src={dish.image}
          alt={dish.name}
          style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px' }}
        />
        <div style={{ padding: '32px 0' }}>
          <h1>{dish.name}</h1>
          <p style={{ fontSize: '18px', margin: '16px 0' }}>{dish.description}</p>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff6b35', margin: '20px 0' }}>
            ${dish.price}
          </div>

          <div style={{ marginTop: '32px' }}>
            <h3>Ingredients</h3>
            <ul>
              {dish.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '32px' }}>
            <h3>Nutritional Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '16px' }}>
              <div>Calories: {dish.nutritionalInfo.calories}</div>
              <div>Protein: {dish.nutritionalInfo.protein}g</div>
              <div>Carbs: {dish.nutritionalInfo.carbs}g</div>
              <div>Fat: {dish.nutritionalInfo.fat}g</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetailsPage;