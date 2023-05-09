// /*
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("Enter Your Email");
  const [password, setPassword] = useState("Enter Your Password");
  const [show, setShow] = useState(false); //done by myself.see chakraUI site
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the fields",
        status: "warning",
        duration: 50000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      // return;
    }
    console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log(config);
      //Code is runnning Fine uptil this point
      //This is the portion that is giving Status Code 431

      const { data } = await axios.post(
        //original working
        // const data = await axios.post(
        //changed working
        "/api/user/login",
        { email, password },
        config
      );

      console.log(data);
      toast({
        title: "Login is Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
      // return;
    } catch (error) {
      console.log(error);
      toast({
        title: "ERROR Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      // return;
    }
  };
  return (
    <VStack spacing="5px" color="black">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>

      <FormControl position="relative" id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          width="85%"
          type={show ? "text" : "password"}
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          position="absolute"
          right="8px"
          top="50%"
          h="1.75rem"
          size="sm"
          onClick={handleClick}
        >
          {show ? "Hide" : "Show"}
        </Button>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        LogIn
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Guest User LogIn
      </Button>
    </VStack>
  );
};

export default Login;
// */
