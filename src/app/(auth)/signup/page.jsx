"use client";

import { Check } from "@gravity-ui/icons";
import { Button, Checkbox, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useState } from "react";

const Register = () => {
    let [visible, setVisible] = useState(false)
    return (
        <div className="container m-auto ">
            <h2 className="text-center font-bold my-3 text-2xl">SIgn up Form</h2>
            <Form className="lg:w-1/4 w-1/2 p-3 py-5 rounded-2xl m-auto shadow">
                <TextField type="text">
                    <Label>Username</Label>
                    <Input placeholder="Enter your name" />
                </TextField> <br />
                <TextField type="email" >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                </TextField>
                <br />
                <TextField type={visible ? "text" : "password"} >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                </TextField>
                <br />
                <Checkbox className={"flex items-center"} id="basic-terms" onClick={() => setVisible(!visible)}>
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                        <Label htmlFor="basic-terms">Show Password</Label>
                    </Checkbox.Content>
                </Checkbox>

                <Button className={"mt-3"}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;