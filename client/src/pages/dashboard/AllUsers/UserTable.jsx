import { useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import {
    Button,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Select,
    Option,
} from "@material-tailwind/react";




export default function UserTable({ classes, user, index }) {

    let [isOpen, setIsOpen] = useState(false);
    let [bloodGroup, setBloodGroup] = useState();
    let [role, setRole] = useState()

    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }

    const handleActionSubmit = () => {

    }

    const handleDelete = () => {

    }


    return (
        <tr className="font-barlow" key={index}>
            <td className={classes}>
                <Typography
                    variant="small"
                    color="blue-gray"

                >
                    {user?.name}
                </Typography>
            </td>
            <td className={classes}>
                <Typography
                    variant="small"
                    color="blue-gray"

                >
                    {user?.email}
                </Typography>
            </td>
            <td className={classes}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-center"
                >
                    {user?.loc}
                </Typography>
            </td>
            <td className={classes}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-center"
                >
                    {user?.blood_group}
                </Typography>
            </td>
            <td className={classes + ' flex gap-3'}>
                <button
                    type="button"
                    onClick={openModal}
                    className={'cursor-pointer font-medium text-sm text-white bg-secondary-blue  px-2 hover:underline'}
                >
                    Edit
                </button>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <form onSubmit={handleActionSubmit} className="overflow-auto">
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
                                                    <Input variant="outlined" name='name' label="Name" color="teal" defaultValue={user?.name} size="lg" />
                                                    <Input variant="outlined" name='email' label="Email" color="teal" size="lg" defaultValue={user?.email} />
                                                    <Input variant="outlined" name='location' label="Location" color="teal" defaultValue={user?.loc} size="lg" />
                                                    <div className="role">
                                                        <Select
                                                            variant="outlined"
                                                            id="role"
                                                            name="role"
                                                            color="teal"
                                                            label={`Change Role: ${user?.role}`}
                                                            className="overflow-y-auto "
                                                            size="lg"

                                                            value={user?.role}
                                                            onChange={(val) => setRole(val)}
                                                        >
                                                            <Option className=" bg-white " value="user">user</Option>
                                                            <Option className=" bg-white " value="admin">admin</Option>

                                                        </Select>
                                                    </div>
                                                    <div className="blood_group_c">
                                                        <Select
                                                            id="blood_group"
                                                            name="blood_group"
                                                            color="teal"
                                                            variant="outlined"
                                                            label={`Select Blood Group ${user?.blood_group}`}
                                                            className="overflow-y-auto z-50"
                                                            size="lg"

                                                            value={user?.blood_group}
                                                            onChange={(val) => setBloodGroup(val)}
                                                        >
                                                            <Option className=" bg-white " value="A+">A+</Option>
                                                            <Option className=" bg-white " value="A-">A-</Option>
                                                            <Option className=" bg-white " value="B+">B+</Option>
                                                            <Option className=" bg-white " value="B-">B-</Option>
                                                            <Option className=" bg-white " value="AB+">AB+</Option>
                                                            <Option className=" bg-white " value="AB-">AB-</Option>
                                                            <Option className=" bg-white " value="O+">O+</Option>
                                                            <Option className=" bg-white " value="O-">O-</Option>
                                                        </Select>
                                                    </div>

                                                    <Input name='image' label="Image Url" color="teal" defaultValue={user?.image} size="lg" />


                                                </div>
                                            </CardBody>
                                            <CardFooter className="pt-0 flex gap-5 flex-wrap">
                                                <Button type="submit" className="w-full max-w-[10rem] bg-red-500" fullWidth>
                                                    Update
                                                </Button>
                                                <Button className="max-w-[10rem] bg-secondary-blue" onClick={closeModal} fullWidth>
                                                    Cancel
                                                </Button>
                                            </CardFooter>
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
                <button type="button" className="px-2 text-sm py-1 text-white bg-red-500 hover:underline rounded-none normal-case" color="red">Delete</button>
            </td>
        </tr>
    )
}
