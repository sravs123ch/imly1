// import React from 'react';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import StatusBadge from './Satus';
// import StatusSwitch from '../Orders/StatusSwitch';
// import { useState } from 'react';
// import FilterBar from './FilterBar';
// import { PlusIcon } from '@heroicons/react/20/solid';
// import { FaChevronRight} from 'react-icons/fa';
// import StatusUpdateDialog from '../Orders/StatusUpdateDialog';
// import { useNavigate } from "react-router-dom";


// export default function Orders() {
//     const [products, setProducts] = useState([
//         { id: 1, name: '1000252',productName:"Rivago", price: '₹1000', discount: '10%', size: 'M', stock: 50, image:'', status: 'Workstarted' },
//         { id: 2, name: '1000251', productName:"Casino",price: '₹1200', discount: '15%', size: 'L', stock: 32, image:'', status: ' Ready to Dispatch' },
//         { id: 3, name: '1000249', productName:"ACRILIA",price: '₹1500', discount: '20%', size: 'S', stock: 23, image:'', status: 'Payment Done' },
//         { id: 4, name: '1000248',productName:"ARTEX", price: '₹2500', discount: '25%', size: 'XL', stock: 30, image:'',  status: 'Site Clearance' },
//         { id: 5, name: '1000244',productName:"LAZZARO", price: '₹2000', discount: '30%', size: 'M', stock: 0, image: '', status: 'Cancelled' },
//         { id: 6, name: '1000241', productName:"Milano",price: '₹800', discount: '35%', size: 'L', stock: 0, image: '', status: ' Dispatched' },
//         { id: 7, name: '1000238', productName:"Lema",price: '₹1800', discount: '40%', size: 'S', stock: 0, image:'', status: 'Site Clearance' },
//         { id: 8, name: '1000231', productName:"viay",price: '₹1500', discount: '42%', size: 'L', stock: 0, image:'', status: 'Payment Done' },
//         { id: 9, name: '1000253', productName:"azmal",price: '₹1502', discount: '44%', size: 'XL', stock: 0, image:'', status: ' Readyto Dispatch' },
//         { id: 10, name: '1000265', productName:"Bindhu",price: '₹1505', discount: '45%', size: 'XXL', stock: 0, image:'', status: 'Workstarted' },
//     ]);
//     const [selectedFilter, setSelectedFilter] = useState('All');
//     const item = { name: 'Product Name', currentStatus: 'Pending' };
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const handleStatusChange = (id, newStatus) => {
//         console.log(`Status of item with ID ${id} changed to: ${newStatus}`);
//         setProducts((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id ? { ...item, status: newStatus } : item
//             )
//         );
//     };

//     // const handleStatusChange = (id, newStatus) => {
//     //     console.log(`Status of item with ID ${id} changed to: ${newStatus}`);
//     //     setProducts((prevItems) =>
//     //         prevItems.map((item) =>
//     //             item.id === id ? { ...item, status: newStatus } : item
//     //         )
//     //     );
//     // };
//     const navigate = useNavigate();
//     const handleCancel = (id) => {
//         // Update the status to 'Canceled'
//         const newStatus = 'Canceled';
//         console.log(`Canceling order with ID ${id}`);
        
//         // Call the function to update the product status
//         handleStatusChange(id, newStatus);
//     };
//     const handleOrderUpdate = (event, order) => {
//         event.preventDefault();
//         navigate("/update-order", { state: { order } });
//       };
    

//     const handleFilterChange = (filter) => {
//         setSelectedFilter(filter);
//     };

//     const filteredOrders = products.filter(product => selectedFilter === 'All' || product.status === selectedFilter);
//     return (
//         <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
//         <div className= "px-4 sm:px-6 lg:px-8 pt-4 w-auto bg-white">
//             <div className="sm:flex sm:items-center">
//                 <div className="sm:flex-auto">
//                     <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-2 text-custom-heading">Production Orders</h2>
//                 </div>

//             </div>
//             <div className="flex ml-20 justify-end mb-4">
//       <div className="flex flex-wrap space-x-2">
//             <FilterBar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
//             </div>
//             </div>
//             <div className="mt-8 flow-root">
//              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//         <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//                 <thead>
//                     <tr>
//                         <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-0">
//                             Order Id
//                         </th>
//                         <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-0">
//                             Product Name
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-center text-lg font-semibold text-gray-900">
//                             Price
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-center text-lg font-semibold text-gray-900">
//                             Payment Balance
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-center text-lg font-semibold text-gray-900">
//                             Status
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-center text-lg font-semibold text-gray-900">
//                         update order  
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                     {filteredOrders.map((product) => (
//                         <tr key={product.name}>
//                             <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                                 {product.name}
//                             </td>
//                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                 {product.productName}
//                             </td>
//                             <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
//                                 {product.price}
//                             </td>
//                             <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
//                                 {product.stock}
//                             </td>
//                             <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
//                                 <StatusBadge status={product.status} />
//                             </td>
//                             <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
//   <button
//     type="button"
//     className={`rounded-md w-20 h-8 text-xs font-semibold text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//       product.status === "Dispatched"
//         ? "bg-gray-400 cursor-not-allowed"
//         : product.status === "Canceled"
//         ? "bg-gray-300 cursor-not-allowed"
//         : "bg-red-600 hover:bg-red-500 focus:ring-red-500"
//     } whitespace-normal`}
//     disabled={product.status === "Dispatched" || product.status === "Canceled"}
//     key={product.id}
//     id={product.id}
//     onClick={() => handleCancel(product.id)}
//   >
//     {product.status === "Dispatched" ? (
//       <>
//         Already <br /> Dispatched
//       </>
//     ) : product.status === "Canceled" ? (
//       'Canceled'
//     ) : (
//       'Cancel Order'
//     )}
//   </button>
// </td>


// <td className="p-5 border-b-[1px] border-[#33333353] text-[#6c7079]">
// <button onClick className="bg-[#003375] border-none text-white w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer text-s    hover:bg-[#003375a7]">
                
//                 <span className="inline-block font-bold text-xl h-[36px] w-[10px] mt-[3px] mr-[2px] ">
//                   &gt;
//                 </span>
//               </button>
// </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     </div>
// </div>

//             <StatusUpdateDialog
//         isOpen={isDialogOpen}
//         onClose={() => setIsDialogOpen(false)}
//         item={item}
//       />
//         </div>
//         </div>
//     );
// }

import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StatusBadge from './Satus';

import FilterBar from './FilterBar';
import StatusUpdateDialog from '../Orders/StatusUpdateDialog';
import { PlusIcon } from '@heroicons/react/20/solid';
import { FaChevronRight } from 'react-icons/fa';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
     
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#003375', // Dark blue color
        color: theme.palette.common.white,
        fontWeight: 'bold',
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    },
    
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Orders() {
    const [products, setProducts] = useState([
        { id: 1, name: '1000252', productName: "Rivago", price: '₹1000', discount: '10%', size: 'M', stock: 50, image: '', status: 'Workstarted' },
        { id: 2, name: '1000251', productName: "Casino", price: '₹1200', discount: '15%', size: 'L', stock: 32, image: '', status: 'Ready to Dispatch' },
        { id: 3, name: '1000249', productName: "ACRILIA", price: '₹1500', discount: '20%', size: 'S', stock: 23, image: '', status: 'Payment Done' },
        { id: 4, name: '1000248', productName: "ARTEX", price: '₹2500', discount: '25%', size: 'XL', stock: 30, image: '', status: 'Site Clearance' },
        { id: 5, name: '1000244', productName: "LAZZARO", price: '₹2000', discount: '30%', size: 'M', stock: 0, image: '', status: 'Cancelled' },
        { id: 6, name: '1000241', productName: "Milano", price: '₹800', discount: '35%', size: 'L', stock: 0, image: '', status: 'Dispatched' },
        { id: 7, name: '1000238', productName: "Lema", price: '₹1800', discount: '40%', size: 'S', stock: 0, image: '', status: 'Site Clearance' },
        { id: 8, name: '1000231', productName: "viay", price: '₹1500', discount: '42%', size: 'L', stock: 0, image: '', status: 'Payment Done' },
        { id: 9, name: '1000253', productName: "azmal", price: '₹1502', discount: '44%', size: 'XL', stock: 0, image: '', status: 'Ready to Dispatch' },
        { id: 10, name: '1000265', productName: "Bindhu", price: '₹1505', discount: '45%', size: 'XXL', stock: 0, image: '', status: 'Workstarted' },
    ]);

    const [selectedFilter, setSelectedFilter] = useState('All');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const navigate = useNavigate();

    const handleStatusChange = (id, newStatus) => {
        setProducts((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, status: newStatus } : item
            )
        );
    };

    const handleCancel = (id) => {
        const newStatus = 'Canceled';
        handleStatusChange(id, newStatus);
    };

    const handleOrderUpdate = (event, order) => {
        event.preventDefault();
        navigate("/update-order", { state: { order } });
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredOrders = products.filter(product => selectedFilter === 'All' || product.status === selectedFilter);

    return (
        <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
            <div className="px-4 sm:px-6 lg:px-8 pt-4 w-auto bg-white">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-2 text-custom-heading">Production Orders</h2>
                    </div>
                </div>
                <div className="flex ml-20 justify-end mb-4">
                    <div className="flex flex-wrap space-x-2">
                        <FilterBar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
                    </div>
                </div>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Id</StyledTableCell>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Payment Balance</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredOrders.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell>{product.name}</StyledTableCell>
              <StyledTableCell>{product.productName}</StyledTableCell>
              <StyledTableCell align="right">{product.price}</StyledTableCell>
              <StyledTableCell align="right">{product.stock}</StyledTableCell>
              <StyledTableCell align="center">
                <StatusBadge status={product.status} />
              </StyledTableCell>
              <StyledTableCell align="center">
                <button
                  type="button"
                  className={`rounded-md w-20 h-8 text-xs font-semibold text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    product.status === "Dispatched"
                      ? "bg-gray-400 cursor-not-allowed"
                      : product.status === "Canceled"
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-500 focus:ring-red-500"
                  } whitespace-normal`}
                  disabled={product.status === "Dispatched" || product.status === "Canceled"}
                  onClick={() => handleCancel(product.id)}
                >
                  {product.status === "Dispatched" ? (
                    <>
                      Already <br /> Dispatched
                    </>
                  ) : product.status === "Canceled" ? (
                    'Canceled'
                  ) : (
                    'Cancel Order'
                  )}
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
                <StatusUpdateDialog
                    isOpen={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                    item={{}} // You may need to pass the actual item or update this as needed
                />
            </div>
        </div>
    );
}
