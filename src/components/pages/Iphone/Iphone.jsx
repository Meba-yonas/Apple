import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Iphone = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://apple-hmje.onrender.com/iphones")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
                
			})
			.catch(() => console.log("error: unable to fetch!"));
	}, []);

	return (
		<div>
			<section className="internal-page-wrapper">
				<div className="container">
					<div className="row h-100 align-items justify-content-center text-center ">
						<div className="col-12 mt-5 pt-5">
							<h1 className="font-weight-bold">Iphone Page</h1>
							<div className="brief-description mb-5">
								The best for the brightest
							</div>
						</div>
					</div>

                    {/* {products?.map((product) => {
// 						let order1 = 1;
// 						let order2 = 2;
// 						if (flip) {
// 							order1 = 2;
// 							order2 = 1;
// 							flip = !flip;
// 						} else {
// 							flip = !flip;
// 						} */}

					{products?.map((product, index) => {
						const order1 = index % 2 === 0 ? 2 : 1;
						const order2 = index % 2 === 0 ? 1 : 2;

						return (
							<div
								key={product.product_url}
								className="row justify-content-center text-center product-holder h-100"
							>
								<div className={`col-md-6 col-sm-12 my-auto order-${order1}`}>
									<div className="product-title">{product.product_name}</div>
									<div className="product-brief">
										{product.product_brief_description}
									</div>
									<div className="starting-price">
										{`Starting at ${product.starting_price}`}
									</div>
									<div className="monthly-price">{product.price_range}</div>
									<div className="links-wrapper">
										<ul>
											<li>
												<Link to={`/iphone/${product.product_url}`}>
													Learn more
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className={`col-md-6 col-sm-12 my-auto order-${order2}`}>
									<div className="product-image">
										<img
											className="rounded pb-2"
											src={product.product_image}
											alt={product.product_name}
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Iphone;





// import React, { useEffect, useState } from "react";
// import {Link} from 'react-router-dom'
// const Iphone = () => {
// 	const [products, setProducts] = useState([]);
// 	useEffect(() => {
// 		fetch("http://localhost:3000/iphones")
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setProducts(data.products);
// 			})
// 			.catch(() => console.log("error:unable to fech!"));
// 	}, []);
// 	let flip = true;

// 	return (
// 		<div>
// 			<section className="internal-page-wrapper">
// 				<div className="container">
// 					<div className="row h-100 align-items justify-content-center text-center ">
// 						<div className="col-12 mt-5 pt-5">
// 							<h1 className="font-weight-bold">Iphone Page</h1>
// 							<div className="brief-description mb-5">
// 								The best for the brightest
// 							</div>
// 						</div>
// 					</div>
// 					{products?.map((product) => {
// 						let order1 = 1;
// 						let order2 = 2;
// 						if (flip) {
// 							order1 = 2;
// 							order2 = 1;
// 							flip = !flip;
// 						} else {
// 							flip = !flip;
// 						}
// 						let productDiv = (
// 							<div
// 								key={product.product_url}
// 								className="row justify-content-center text-center product-holder h-100"
// 							>
// 								<div className={col-md-6 col-sm-12 my-auto order-${order1}}>
// 									<div className="product-title">{product.product_name}</div>
// 									<div className="product-brief">
// 										{product.product_brief_description}
// 									</div>
// 									<div className="starting-price">
// 										{Starting at ${product.product_brief_description}}
// 									</div>
// 									<div className="monthly-price">{product.price_range}</div>
// 									<div className="links-wrapper">
// 										<ul>
// 											<li>
// 												<Link to={/iphone/${product.price_url}}>
// 													Learn more
// 												</Link>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 								<div className={col-md-6 col-sm-12 my-auto order-${order2}}>
// 									<div className="product-image">
// 										<img
// 											src={product.product_image}
// 											alt={product.product_name}
// 										/>
// 									</div>
// 								</div>
// 							</div>
// 						);
// 						return productDiv;
// 					})}
// 				</div>
// 			</section>
// 		</div>
// 	);
// };

// export default Iphone;
// change only this part 	