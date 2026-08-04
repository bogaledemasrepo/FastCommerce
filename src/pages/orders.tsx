import { useCallback, useEffect, useState } from "react";
import { apiUrl } from "../constants";

function Orders() {
    const [orders, setOrders] = useState<{ id: string; customerName: string; totalAmount: number; status: string }[]>([]);
    const accessToken = localStorage.getItem("access-token") || "";
    const fetchOrders = useCallback(() => {
        fetch(apiUrl + "/orders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                setOrders(res);
            }).catch(err => {
                console.log(err);
            })
    }, [accessToken]);
    useEffect(() => {
        fetchOrders()
    }, [fetchOrders]);
    if (orders.length === 0) {
        return (
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Customer Orders</h2>
                </div>
                <div className="flex justify-center items-center h-64">
                    <span className="text-lg font-bold">No orders found</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Orders</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <span>##</span>
                                </label>
                            </th>
                            <th>Customer Name</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td>{index + 1}</td>
                                <td>{order.customerName}</td>
                                <td>${order.totalAmount.toFixed(2)}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders