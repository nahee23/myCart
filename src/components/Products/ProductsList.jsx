import React from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";
import useData from "../../Hook/useData";

const ProductsList = () => {
  const { data, error } = useData("products");
  console.log(data);

  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>상품목록</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">정렬방법</option>
          <option value="price desc">가격높은순</option>
          <option value="price asc">가격낮은순</option>
          <option value="rate desc">평점높은순</option>
          <option value="rate asc">평점낮은순</option>
        </select>
      </header>

      <div className="products_list">
        {error && <em className="form_error">{error}</em>}
        {data.products &&
          data.products.map((p) => (
            <ProductCard
              key={p._id}
              id={p._id}
              image={p.images[0]}
              title={p.title}
              price={p.price}
              rating={p.reviews.rate}
              ratingCounts={p.reviews.counts}
              stock={p.stock}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductsList;
