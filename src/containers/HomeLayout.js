import "./homelayout.css";
import { useFetch } from "../utils/hooks";
import { Link } from 'react-router-dom'

function HomeLayout() {
    const {data, isLoading, isError} = useFetch('http://localhost:4000/api/products')

  return (
    <section className="products">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && isError && <h1>Sorry some error occured</h1>}
      {!isLoading &&
        !isError &&
        data.length > 0 &&
        data.map((product) => {
          return (
            <div className="product-card">
              <Link to={`/products/${product._id}`}>
                <div className="product-image">
                  <img src={product.image} />
                </div>
                <div className="product-info">
                  <h5>{product.title}</h5>
                  <h6>${product.price}</h6>
                </div>
              </Link>
            </div>
          );
        })}
    </section>
  );
}

export default HomeLayout;
