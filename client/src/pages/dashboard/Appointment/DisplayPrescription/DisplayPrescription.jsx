import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

import {
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter, 
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../lib/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
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


const DisplayPrescription = ({appointment_id,doctor_email,patient_email,patient_name}) => {
    const pdfRef=useRef();
    const TABLE_HEAD = ["Medicine Name", "Dosage", "Duration"];
    const [open, setOpen] = useState(0);
    const [size, setSize] = React.useState(null);
    const handleOpenModal = (value) => setSize(value);
    const axiosPublic = useAxiosPublic();
    const { data: prescription={} } = useQuery({
        queryKey: ['prescription',appointment_id],
        queryFn: async () => {
          //const res = await fetch(`${apiLink}/doctors`);
          const res = await axiosPublic.get(`/prescription/${appointment_id}`)
          //const doctors = await res.json();
          //console.log(res.data);
          return res.data;
        },
      });
        // Extract relevant information from the prescription object
     const { _id: prescriptionId, filtered_doctor_id, filtered_patient_id } = prescription;
     
    //  console.log('filter doctor i',filtered_doctor_id); 
      const { data: doctors = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
          //const res = await fetch(`${apiLink}/doctors`);
          const res = await axiosPublic.get(`/doctors`)
          //const doctors = await res.json();
          //console.log('one doctor data',res.data);
          return res.data;
        },
      });
      const filteredDoctor = doctors?.find((doc) => doc?._id ===filtered_doctor_id );

      //console.log(filteredDoctor);
      // const [loader, setLoader] = useState(false);

      // const downloadPDF = () =>{
      //   const capture = document.querySelector('.actual-receipt');
      //   setLoader(true);
      //   html2canvas(capture,{ backgroundColor: '#ffffff' }).then((canvas)=>{
      //     const imgData = canvas.toDataURL('img/png');
      //     const doc = new jsPDF('p', 'mm', 'a4');
      //     const componentWidth = doc.internal.pageSize.getWidth();
      //     const componentHeight = doc.internal.pageSize.getHeight();
      //     doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      //     setLoader(false);
      //     doc.save('receipt.pdf');
      //   })
      // }
      const contentToPrint = useRef(null);
      const downloadPDF = useReactToPrint({
        content:()=>contentToPrint.current,
        documentTitle: "prescription",
        removeAfterPrint: true,
      });
    return (<>
        <div className="flex">
          {
            prescription?._id?
            <Button onClick={() => handleOpenModal("lg")} variant="gradient">
            View Prescription
          </Button>:
            <Button disabled className='disabled:opacity-50 disabled:cursor-not-allowed' variant="gradient">
            Not Prescribed
          </Button>
          }

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

            <div>
            <Card className="w-full max-w-[48rem] ">
       
                <CardBody ref={contentToPrint}>
                    <div className='flex justify-between border-b-2 border-black'>
                        <div>

                            <Typography variant="paragraph" color="gray" className="mb-4 first-letter:uppercase">
                            {/* {doctor.name} */}
                            Doctor Name: {filteredDoctor?.name}
                            </Typography>
                            <Typography variant="paragraph" color="gray" className="mb-4 first-letter:uppercase">
                            Doctor Email:{filteredDoctor?.education}
                            </Typography>
                            <Typography variant="paragraph" color="gray" className="mb-4 first-letter:uppercase">
                            Doctor Reg:{filteredDoctor?.registration}
                            </Typography>
                            <Typography variant="paragraph" color="gray" className="mb-4 first-letter:uppercase">
                            Email:{filteredDoctor?.email}
                            </Typography>
                        </div>
                        <div>
                            <img
                            src="https://i.ibb.co/7SB2n72/logo.png"
                            alt="card-image"
                            className="h-16 w-16 object-cover mx-auto"
                            />
                            <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
                                VirtualDoc
                            </Typography>
                        </div>
                    </div>
                    <div className='flex justify-between border-b-2 my-3 border-black'>
                        <div>
                            <Typography variant="h6" color="gray" className="mb-4 first-letter:uppercase">
                            Patient Id: {prescription.advice}
                            </Typography>
                            <Typography variant="h6" color="gray" className="mb-4 first-letter:uppercase">
                            Patient Name:{patient_name}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6" color="gray" className="mb-4 first-letter:uppercase">
                               Prescription Date: {prescription.prescription_add_date}
                            </Typography>
                            <Typography variant="h6" color="gray" className="mb-2 text-center">
                                Prescription Time:{prescription.prescription_add_time}
                            </Typography>
                        </div>
                    </div>
                    <div>   
                    <table className="table-auto w-full pr-5 text-center font-barlow">
                        <thead>
                            <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                key={head}
                                className="border-b border-blue-gray-10 p-4"
                                >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                                </th>
                            ))}
                            </tr>
                        </thead>
                        <tbody className=''>
                        {Object.keys(prescription).map((key) => {
                            
        // Check if the key starts with "medicine_name_medicine_"
                            if (key.startsWith('medicine_name_medicine_')) {
                            const index = key.replace('medicine_name_medicine_', ''); // Extract the index from the key
                            const isLast = index === Object.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                            const medicineName = prescription[key];
                            const dosageKey = `medicine_dosage_medicine_${index}`;
                            const durationKey = `medicine_duration_medicine_${index}`;
                            const dosage = prescription[dosageKey];
                            const duration = prescription[durationKey];

                            return (
                                <tr className="font-barlow" key={index}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3 font-bold mx-3">
                                       
                                            <Typography
                                            variant="small"
                                            color="blue-gray"
                                            >
                                            
                                            {medicineName}
                                            
                                            </Typography>
                                        
                                        </div>
                                    </td>
                                    <td  className={classes}>
                                        <Typography
                                        variant="small"
                                        color="blue-gray"

                                        >
                                        {dosage}
                                        </Typography>
                                    </td>
                                    <td  className={classes}>
                                        <Typography
                                        variant="small"
                                        color="blue-gray"

                                        >
                                        {duration}
                                        </Typography>
                                    </td>

                                 </tr>
                            );
                            }

                                return null; // Skip other properties in the prescription object
                            })}
                        </tbody>
                 </table> 


                    </div>
                    <Typography variant="h6" color="blue-gray" className="my-2 ">
                    Advice:{prescription.advice}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="my-2 ">
                    Follow-up Date:{prescription.follow_up_date}
                    </Typography>
                </CardBody>
                <div className='mx-auto'>
                <Button onClick={downloadPDF} variant="gradient">
                  Download Prescription
                </Button>    
                </div>
            </Card>
            </div>

          </DialogBody>

        </Dialog>
          </>);
};

export default DisplayPrescription;