import React, { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../lib/hooks/useAxiosPublic';
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const Prescription = ({ filtered_doctor_id, filtered_patient_id, appointments_id }) => {
  const axiosPublic = useAxiosPublic()
  const [open, setOpen] = useState(0);
  const [size, setSize] = React.useState(null);
  const handleOpenModal = (value) => setSize(value);
  const [addMedicineList, setAddMedicineList] = useState([]);
  const { register, handleSubmit } = useForm();
  // console.log('addmedicine',addMedicineList);
  let currentdate = new Date();
  let date = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear();

  let time = currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const addMedicine = () => {
    const newMedicineList = [...addMedicineList, { id: addMedicineList.length + 1 }]
    //console.log('newMedicineList',newMedicineList);
    setAddMedicineList(newMedicineList);
    handleOpen(newMedicineList.length);

  }
  const onSubmit = async (data) => {

    // console.log('i/p data',data);
    // Additional data to be sent along with React Hook Form data
    const additionalData = {
      prescription_add_time: time,
      prescription_add_date: date,
      filtered_doctor_id: filtered_doctor_id,
      filtered_patient_id: filtered_patient_id,
      appointments_id: appointments_id
    };

    // Combine React Hook Form data and additional data
    const postData = {
      ...data,
      ...additionalData,
    };

    const res = await axiosPublic.post('/prescription/addPrescription', postData)
    // console.log('response',res.data);
    handleOpenModal(null);
  }
  return (<>
    <div className="flex">
      <Button onClick={() => handleOpenModal("lg")} variant="gradient">
        Add Prescription
      </Button>
    </div>
    <Dialog className="h-[42rem] overflow-scroll"
      open={
        size === "lg"
      }
      size={size || "md"}
      handler={handleOpenModal}
    >
      {/* <DialogHeader>Prescription</DialogHeader> */}
      <DialogBody >
        <div className='mx-auto container'>
          <div>
            <h3 className='text-3xl text-center'>Prescription</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {
              addMedicineList.map(medicine => <Accordion key={medicine.id} open={open === medicine.id} icon={<Icon id={medicine.id} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(medicine.id)}>Add Medicine-{medicine.id}</AccordionHeader>
                <AccordionBody>
                  <div className="grid lg:grid-cols-3 grid-col-1 items-end gap-6 mx-auto container">
                    <Input size="md" {...register(`medicine_name_medicine_${medicine.id}`)} label="Medicine name" />
                    <Input size="md" {...register(`medicine_dosage_medicine_${medicine.id}`)} label="Dosage" />
                    <Input size="md" {...register(`medicine_duration_medicine_${medicine.id}`)} label="Duration" />
                  </div>
                </AccordionBody>
              </Accordion>)

            }
            <Button onClick={addMedicine} className='my-4' variant="filled">Add Medicine</Button>
            <div class="space-y-5 my-6 ">
              <div className=''>
                <h2 className='text-2xl'>Doctor's Advice</h2>
              </div>
              <div class="relative w-full">
                <textarea {...register("advice")}
                  class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "></textarea>
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Advice
                </label>
              </div>
            </div>
            <div class="space-y-5 my-6 ">
              <div className=''>
                <h2 className='text-2xl'>Next Follow-Up</h2>
              </div>
              <div className="md:w-72 w-full">
                <Input type='date' {...register("follow_up_date")} label="Username" />
              </div>
            </div>
            <div className='flex justify-center'>
              <Button onClick={() => handleOpenModal(null)} type='submit'>Save Prescription</Button>
              <Button
                variant="text"
                color="red"
                onClick={() => handleOpenModal(null)}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
            </div>
          </form>
        </div>
      </DialogBody>
      <DialogFooter>

      </DialogFooter>
    </Dialog>
  </>);
};

export default Prescription;