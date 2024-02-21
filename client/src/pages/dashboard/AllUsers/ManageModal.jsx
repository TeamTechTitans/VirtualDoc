import React, { useState } from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Select,
    Option,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import './style.css';

export default function ManageModal({ handleOpen, open, user }) {
  //  const { register, handleSubmit } = useForm();
    const [bloodGroup,setBloodGroup]=useState('');
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            loc:e.target.location.value,
            blood_group:bloodGroup,
            image:e.target.image.value
        }
        console.log(data);
        // const imageFile = { image: data.image[0] };
        // const res = await axios.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // })
        // if (res.data.success) {
        //     console.log("Hello")
        //     console.log(res.data)
        // }
    };

    return (

        <>
            <Dialog
                size="lg"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full overflow-auto">
                    <form onSubmit={handleSubmit} className="overflow-auto">
                        <CardBody className="flex flex-col gap-4">
                            <Typography variant="h4" className="text-center">
                                Manage {user?.name + '\'s '} Data
                                
                            </Typography>
                            <Typography
                                className="mb-3 font-normal text-red-400 max-w-[40rem] mx-auto text-center"
                                variant="paragraph"
                                color="gray"
                            >
                                Currently managing <b>{user?.name + '\'s '}</b> data. Remember without user's permission or any kinds of emergency issue you should not change the user data.
                            </Typography>

                            <div className="flex flex-col grid-cols-2 gap-5 md:grid">
                                <Input name ='name' label="Name" color="teal" defaultValue={user?.name} size="lg" />
                                <Input name ='email' label="Email" color="teal" size="lg" defaultValue={user?.email} />
                                <Input name ='location' label="Location" color="teal" defaultValue={user?.loc} size="lg" />
                                <div className="blood_group_c">
                                <Select
                                    id="blood_group"
                                    name="blood_group"  
                                    color="teal"
                                    label={`Select Blood Group ${user.blood_group}`}
                                    className="overflow-y-auto "
                                    size="lg"
                                    
                                    value={bloodGroup}
                                    onChange={(val) => setBloodGroup(val)}
                                    >
                                    <Option className=" bg-white " value="A+">A+</Option>
                                    <Option className=" bg-white " value="A-">A-</Option>
                                    <Option className=" bg-white " value="B+">B+</Option>
                                    <Option className=" bg-white "  value="B-">B-</Option>
                                    <Option className=" bg-white " value="AB+">AB+</Option>
                                    <Option className=" bg-white " value="AB-">AB-</Option>
                                    <Option className=" bg-white " value="O+">O+</Option>
                                    <Option className=" bg-white " value="O-">O-</Option>
                                    </Select>
                                </div>
                               
                                <Input name ='image' label="Image Url" color="teal" defaultValue={user?.image} size="lg" />
                                

                            </div>
                        </CardBody>
                        <CardFooter className="pt-0 flex gap-5 flex-wrap">
                            <Button type="submit" className="w-full max-w-[10rem] bg-red-500" fullWidth>
                                Update
                            </Button>
                            <Button className="max-w-[10rem] bg-secondary-blue" onClick={handleOpen} fullWidth>
                                Cancel
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </>
    )
}
