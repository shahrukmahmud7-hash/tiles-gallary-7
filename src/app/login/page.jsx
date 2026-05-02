"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";

const LogInPage = () => {

   const onSubmit = async(e) =>{
      e.preventDefault()

     const email = e.target.email.value;
    const password = e.target.password.value;
     
     const {data, error} = await authClient.signIn.email({
            email,
            password,
        })
           console.log({data, error})
            if(error){
      alert(error.message)
    } else {
      alert('succesfull');
    }
   }  

    const handleGooleLogin = async () => {

       const data = await authClient.signIn.social({
        provider: "google",
  });
        console.log(data , 'data');
    }
     
    const [isShowPassword , setIsShowPassword ] = useState(false)

    return (
        
       <Card className="mx-auto max-w-md w-full p-8 mt-10 rounded-2xl shadow-lg " > 

       <h1 className="text-center text-2xl font-bold" > Login </h1>
         <Form className="flex mx-auto flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter Your Email" />
        <FieldError />
      </TextField>

      <div className="relative">
         <TextField
         isRequired
         minLength={8}
         name="password"
        type={isShowPassword ? "text" : "password"}
        >
       <Label>Password</Label>
       <Input placeholder="Enter your password" className="pr-10" />
     <span
      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
      onClick={() => setIsShowPassword(!isShowPassword)}
     >
      {isShowPassword ? <FaEye /> : <FaEyeSlash />}
     </span>

       <Description>
        Must be at least 8 characters with 1 uppercase and 1 number
      </Description>
      <FieldError />
      </TextField>
   </div>

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
        <div className="flex items-center">
          <hr className="flex-1" />
        <span className="px-2 text-sm">OR</span>
          <hr className="flex-1" />
     </div>
      <Button variant="outline" className="w-full " onClick={handleGooleLogin}
      >
        <GrGoogle /> Login In With Google
      </Button>
          
        <p className="text-[#706F6F] my-3 text-center">
        Don’t have an account?{" "}
        <Link href="/register" className="text-orange-500">
          Register
        </Link>
      </p>

    </Card>
    );
};

export default LogInPage; 