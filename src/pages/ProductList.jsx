import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/api";


export default function ProductList() {
  // TanStack handles the fetching and loading states automatically
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['products'], 
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading clothing catalog...</div>;
  if (isError) return <div>Error fetching data!</div>;

  return (
    <div>
      <h2>Clothing Brand Directory</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
}