import useData from "../../Hook/useData";
import ProductCard from "../Products/ProductCard";
import ProductCardSkeleton from "../Products/ProductCardSkeleton";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const { data, error, isLoading } = useData("products/featured");
  //console.log(data);
  const skeletons = [1, 2, 3];
  return (
    <section className="featured_products">
      <h2>주요제품</h2>
      <div className="align_center featured_products_list">
        {error && <em className="form_error">{error}</em>}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
        {data &&
          !isLoading &&
          data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
      ​
    </section>
  );
};

export default FeaturedProducts;
