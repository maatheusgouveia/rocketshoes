import React from "react";
import {
	MdRemoveCircleOutline,
	MdAddCircleOutline,
	MdDelete
} from "react-icons/md";

import { Container, ProductTable, Total } from "./styles";

export default function Cart() {
	return (
		<Container>
			<ProductTable>
				<thead>
					<tr>
						<th />
						<th>PRODUTO</th>
						<th>QTD</th>
						<th>SUBTOTAL</th>
					</tr>
				</thead>
				<tbody>
					<td>
						<img
							style={{ width: 100 }}
							src="https://static.netshoes.com.br/produtos/tenis-adidas-kaptir-x-feminino/06/NQQ-1357-006/NQQ-1357-006_zoom2.jpg?ims=326x"
							alt="Tênis"
						/>
					</td>
					<td>
						<strong>Tênis topperson</strong>
						<span>R$129,90</span>
					</td>
					<td>
						<div>
							<button type="button">
								<MdRemoveCircleOutline
									size={20}
									color="#7159c1"
								/>
							</button>
							<input type="number" readOnly value="1" />
							<button type="button">
								<MdAddCircleOutline size={20} color="#7159c1" />
							</button>
						</div>
					</td>
					<td>
						<strong>R$258,80</strong>
					</td>
					<td>
						<button type="button">
							<MdDelete size={20} color="#7159c1" />
						</button>
					</td>
				</tbody>
			</ProductTable>

			<footer>
				<button type="button">Finalizar pedido</button>

				<Total>
					<span>TOTAL</span>
					<strong>R$280,90</strong>
				</Total>
			</footer>
		</Container>
	);
}
