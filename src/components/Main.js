import React, { useState } from "react";
import { Layout, Divider, Typography, Row, Col } from "antd";
import GenerateButton from "./GenerateButton";
import Display from "./Display";
import {GenerateNRIC, HeartSvg} from "./HelperFunctions";
import Icon,{GithubOutlined,LinkedinOutlined} from '@ant-design/icons'
const { Header, Content, Footer } = Layout;
const { Text } = Typography;

function Main() {
  const [loading, setLoading] = useState(false);
  const [currentNRIC, setCurrentNRIC] = useState([]);
  
  

  async function handleClick() {
    
    setLoading(true);
    let func = await GenerateNRIC()
    
    setTimeout(() => {
        console.log(func)
        setLoading(false);
        setCurrentNRIC(prevState=>[...prevState, {index: currentNRIC.length +1 , nric: func}])
        
    }, 500)
    
  };

  
  const HeartIcon = props => <Icon component={HeartSvg} {...props} />;

  console.log(currentNRIC)
  return (
    <div>
      <Layout style={{ backgroundColor: "lightblue", height: "100vh" }}>
        
        <div>
          <Text strong style={{ color: "#005ce6", fontSize: 25, textAlign: "center" }}>
            Random NRIC Generator
          </Text>
          </div>
       
        <Content style={{ padding: "20px", textAlign: "center" , height: "70vh", overflow: "scroll" }}>
          <div className="">
          <Text style={{ color: "navy", fontSize: 20}}>
            {" "}
            Click on the button below to generate a random NRIC number
          </Text>
          <Divider />
            <GenerateButton loading={loading} handleClick={handleClick} />
            <Row justify="center" style={{ padding: "20px" }} >
                
                <Display currentNRIC={currentNRIC} />
              
            </Row>
            
          </div>
        </Content>
        <Footer style={{ backgroundColor: "white"}}>
         <span style={{ textAlign: "center" , fontSize: 17}}>
           <HeartIcon style={{ color: 'hotpink' }} /> Created by Kimberly Phua
           </span>
        <a style={{fontSize: 27, paddingLeft: "10px"}} href="https://github.com/kimmyphua" target="_blank"><GithubOutlined /></a>
         <a style={{fontSize: 27, paddingLeft: "10px"}} href="https://www.linkedin.com/in/kimberlyphua/" target="_blank"><LinkedinOutlined /></a>
        </Footer>
      </Layout>
    </div>
  );
}

export default Main;
