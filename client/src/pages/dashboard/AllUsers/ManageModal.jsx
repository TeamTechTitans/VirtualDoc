import React from "react";
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


export default function ManageModal({ handleOpen, open, user }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
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
                    <form onSubmit={handleSubmit(onSubmit)} className="overflow-auto">
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
                                <Input {...register('name')} label="Name" color="teal" defaultValue={user?.name} size="lg" />
                                <Input {...register("email")} label="Email" color="teal" size="lg" defaultValue={user?.email} />
                                <Input label="Location" color="teal" defaultValue={user?.loc} size="lg" />
                                <Select

                                    id="blood_group"
                                    name="blood_group"
                                    {...register('blood_group')}
                                    color="teal"
                                    label="Select Blood Group"
                                    value={user?.blood_group}
                                    onChange={(e) => e.target.value}
                                >
                                    <Option value="A+">A+</Option>
                                    <Option value="A-">A-</Option>
                                    <Option value="B+">B+</Option>
                                    <Option value="B-">B-</Option>
                                    <Option value="AB+">AB+</Option>
                                    <Option value="AB-">AB-</Option>
                                    <Option value="O+">O+</Option>
                                    <Option value="O-">O-</Option>
                                </Select>
                                <Input  {...register('image')} label="Image Url" color="teal" defaultValue={user?.image} size="lg" />
                                <Input  {...register('loc')} label="Location" color="teal" size="lg" defaultValue={user?.loc} />

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
