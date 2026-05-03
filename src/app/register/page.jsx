"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import { Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

const RegisterPage = () => {

 const onSubmit = async (e) =>{
       e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data, error} = await authClient.signUp.email({
        name,
        email,
        password,
    })
    

    console.log({data, error})
    if(error){
      toast.error (error.message)
    } else {
      toast.success ('succesfull');
      router.push('/')
    }

   }

 const [isShowPassword , setIsShowPassword ] = useState(false)

    return (
         <Card className="mx-auto max-w-md w-full p-8 mt-10 rounded-2xl shadow-lg " > 
                   <h1 className="text-center text-2xl font-bold" > Register </h1>
                <Form className="flex mx-auto flex-col gap-4" onSubmit={onSubmit}>

                 <TextField isRequired name="name" type="text">
                  <Label>Name</Label>
                  <Input placeholder="Enter your name" />
                  <FieldError />
                </TextField>

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
               <button className="w-full bg-blue-500 hover:bg-blue-600 
               transition-colors duration-200 p-2 rounded-full
                text-white font-medium" >
                 Login
               </button>
             </div>
           </Form>
                <div className="flex items-center">
                      <hr className="flex-1" />
                    <span className="px-2 text-sm">OR</span>
                      <hr className="flex-1" />
                 </div>
                  {/* <Button variant="outline" className="w-full">
                    <GrGoogle /> Register In With Google
                  </Button> */}
                   <p className="text-[#706F6F] my-3 text-center">
                    Already have an account?{" "}
                 <Link href="/login" className="text-orange-500">
                  Login
               </Link>
      </p>
           </Card>
    );
};

export default RegisterPage;  