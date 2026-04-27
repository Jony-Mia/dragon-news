"use client";

import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

const Page = () => {

    return (
        <div className="container m-auto ">
            <h2 className="text-center font-bold my-3 text-2xl">Log In Form</h2>
            <Form className="lg:w-1/4 w-1/2 p-3 py-5 rounded-2xl m-auto shadow">
                <TextField type="email" >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                </TextField>
                <br />
                <TextField type="password" >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                </TextField>
                <Button className={"mt-3"}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Page;