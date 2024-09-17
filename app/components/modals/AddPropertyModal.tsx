'use client';

import Image from "next/image";

import Modal from "./Modal";

import LoginModal from "./LoginModal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

const AddPropertyModal = () => {
    const addPropertyModal = useAddPropertyModal();

    return (
        <>
            <Modal
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label="Add property" 
                content={(
                            <p>YO</p>
                ) } 
            />      
        </>
    )
}

export default AddPropertyModal;