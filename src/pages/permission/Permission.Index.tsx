import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem} from "reactstrap";
import * as FaIcons from "react-icons/fa";
import { useEffect, useState } from "react";
import * as PermissionApi from "./consumeApi/PermissionApi";

import { productList } from "../../models/product";
import axios from 'axios';
import { Table ,Button,Input,InputNumber,Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { number } from "yup/lib/locale";





const Index = () => {
 
  localStorage.setItem("currentUrl", window.location.href)

  const [product,setProduct] = useState<Array<productList>>();
  useEffect(() => {
    
    const getAll= async()=>{
     setProduct(await PermissionApi.getAll());
     console.log(product);
    }
    //getPermission();
    getAll();
  }, []);



  const [data,setData] = useState();
  const [prices,setprices] = useState({
    priceMin:0,
    priceMax:0
  });

  const handleChange=(evt: React.ChangeEvent<HTMLInputElement>)=>{
  
    setprices({...prices,
      [evt.target.name]:evt.target.value
    }
    )
  }
    const updateTable = () =>{
      const newArr=product?.filter( p=>  p.price< prices.priceMax);
      const Arr=newArr?.filter(p=> p.price> prices.priceMin );
      setProduct(Arr);
    }



   const columns=[
    {
      title:'Codigo',
      dataIndex:'codeIntregration',
      key:'codeIntregration',
      
    },{
      title:'Producto',
      dataIndex:'productName',
      key:'productName'
    },
    {
      title:' Marca',
      dataIndex:'brand.nombre',
      key:'brand.nombre'
    },
    {
      title:'Precio',
      dataIndex:'price',
      key:'price'
    },
    {
      title:'Descripción',
      dataIndex:'description',
      key:'description'
    }];;
  
   



  return (
    <>
      <div className="d-flex justify-content-between align-content-normal mt-3">
        <h1>Productos</h1>
        <Breadcrumb className="mt-3">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="fw-bolder" active>
            Permisos
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <br/> 
      <div><h4>Escriba el rango de precios</h4></div>
     
     

     
      <div className="site-input-group-wrapper">
      <Input.Group size="large">
        <Row gutter={12}>
          <Col span={5}>
          <Input name="priceMin" type={'number'} placeholder="Rango menor" onChange={handleChange}/>
          </Col>
          <Col span={5}>
          <Input name="priceMax" type={'number'} placeholder="Rango menor"  onChange={handleChange}/>
          </Col>
          <Col span={5}>
          <Button type="primary" onClick={updateTable} >Primary Button</Button>
          </Col>
        </Row>
      </Input.Group>
     </div>
      <br/> 
      <br/>
      <Table columns={columns} dataSource={product}/>
      
      
    </>
  );
};

export default Index;
