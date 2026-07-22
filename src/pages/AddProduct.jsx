// src/components/AddProduct.jsx
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addProduct } from '../api/api';
import { useNavigate } from 'react-router';


export default function AddProduct() {
  const queryClient = useQueryClient();
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [category, setCategory] = useState('');

  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      // This tells TanStack to instantly refresh the ProductList!
      queryClient.invalidateQueries({ queryKey: ['products'] });
       
      // Clear the input fields after success
      setName('');
      setCategory('');

      navigate('/products');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category) return;
    
    // Send the data to the "backend"
    mutation.mutate({ name, category });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Add a New Brand</h3>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Brand Name (e.g. Khaadi)" 
        style={{ marginRight: '10px' }}
      />
      <input 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Category" 
        style={{ marginRight: '10px' }}
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Adding to database...' : 'Add Brand'}
      </button>
    </form>
  );
}