const mysql = require("mysql2");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

 

app.post("/insertData", (req, res) => {
	const {
		product_id: pid,
		product_name: p_name,
		product_url: p_url,
		description_id: p_desc_id,
		product_image: p_img,
		price_range,
		product_brief_description: p_brief_desc,
		product_link: p_link,
		starting_price,
		price_id,
	} = req.body;

	// Validation
	if (
		!pid ||
		!p_name ||
		!p_url ||
		!p_desc_id ||
		!p_img ||
		!price_range ||
		!p_brief_desc ||
		!p_link ||
		!starting_price ||
		!price_id
	) {
		return res.status(400).send("All fields are required.");
	}

	const sql1 =
		"INSERT INTO products(product_id, product_url, product_name) VALUES (?, ?, ?)";
	const sql2 =
		"INSERT INTO product_price(price_id, product_id, price_range, starting_price) VALUES (?, ?, ?, ?)";
	const sql3 =
		"INSERT INTO product_description(description_id, product_id, product_brief_description,product_image, product_link) VALUES (?, ?, ?, ?, ?)";

	db.query(sql1, [pid, p_url, p_name], (err, result) => {
		if (err) {
			return res
				.status(500)
				.send("Error inserting into products: " + err.message);
		}
		db.query(
			sql2,
			[price_id, pid, price_range, starting_price],
			(err, result) => {
				if (err) {
					return res
						.status(500)
						.send("Error inserting into product_price: " + err.message);
				}
				db.query(
					sql3,
					[p_desc_id, pid, p_brief_desc, p_img, p_link],
					(err, result) => {
						if (err) {
							return res
								.status(500)
								.send(
									"Error inserting into product_description: " + err.message
								);
						}
						res.send("Data inserted successfully!");
					}
				);
			}
		);
	});
});

app.get("/iphones", (req, res) => {
	const sql = `
        SELECT p.product_id, p.product_name, p.product_url, 
               pd.product_brief_description, pd.product_image, 
               pp.price_range, pp.starting_price
        FROM products p
        JOIN product_description pd ON p.product_id = pd.product_id
        JOIN product_price pp ON p.product_id = pp.product_id
    `;
	db.query(sql, (err, rows, fields) => {
		if (err) return res.status(500).send(err.message);

		let iphones = { products: [] };
		rows.forEach((row) => {
			iphones.products.push({
				product_id: row.product_id,
				product_name: row.product_name,
				product_url: row.product_url,
				product_brief_description: row.product_brief_description,
				product_image: row.product_image,

				price_range: row.price_range,
				starting_price: row.starting_price,
			});
		});
		res.json(iphones);
	});
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
