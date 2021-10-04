// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   setMinPrice, setMaxPrice, setCategory, removeCategory,
// } from '../../../redux/productsReducer/products';
// import { Row, Accordion, Form, FloatingLabel } from 'react-bootstrap';

// const handleCategoryFilter = (e) => (dispatch) => {
//   const id = e.target.id;
//   const setFilter = e.target.checked
//     ? dispatch(setCategory(id))
//     : dispatch(removeCategory(id));
//   return setFilter;
// };

// const Filters = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.productsInfoReducer.filter.filtersData.categories);
//   const manufactures = useSelector((state) => state.productsInfoReducer.filter.filtersData.manufactures);
//   const keys = useSelector((state) => state.productsInfoReducer.filter.filtersData.keys);

//   return (
//     <Row>
//       <Accordion defaultActiveKey='0' flush>
//         <Accordion.Item eventKey='0'>
//           <Accordion.Header>Price Range</Accordion.Header>
//           <Accordion.Body>
//             <FloatingLabel
//               controlId='floatingInput'
//               label='Min'
//               className='mb-3'
//             >
//               <Form.Control
//                 className="price-range-form"
//                 type='number'
//                 placeholder='name@example.com'
//                 onChange={(e) => dispatch(setMinPrice(Number(e.target.value)))}
//               />
//             </FloatingLabel>
//             <FloatingLabel controlId='floatingPassword' label='Max'>
//               <Form.Control
//                 className="price-range-form"
//                 type='number'
//                 placeholder='Password'
//                 onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
//               />
//             </FloatingLabel>
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey='1'>
//           <Accordion.Header>Manufacturers</Accordion.Header>
//           <Accordion.Body>
//             {manufactures.map((value) => (
//               <Form.Check
//                 key={value}
//                 id={value}
//                 type='checkbox'
//                 label={value}
//                 onChange={(e) => dispatch(handleCategoryFilter(e))}
//               />
//             ))}
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey='2'>
//           <Accordion.Header>Category</Accordion.Header>
//           <Accordion.Body>
//             {categories.map((category) => (
//               <Form.Check
//                 key={category}
//                 id={category}
//                 type='checkbox'
//                 label={category}
//                 onChange={(e) => dispatch(handleCategoryFilter(e))}
//               />
//             ))}
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey='3'>
//           <Accordion.Header>Keys</Accordion.Header>
//           <Accordion.Body>
//             {keys.map((key) => (
//               <Form.Check
//                 key={key}
//                 id={key}
//                 type='checkbox'
//                 label={key}
//                 onChange={(e) => dispatch(handleCategoryFilter(e))}
//               />
//             ))}
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     </Row>
//   );
// };

// export default Filters;
