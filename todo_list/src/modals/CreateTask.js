import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [place, setPlace] = useState('');
    const [person, setPerson] = useState('');
    const [price, setPrice] = useState('');

    const handleChange = (e) => {

        const { name, value } = e.target

        if (name === "place") {
            setPlace(value)
        }
        if (name === "person") {
            setPerson(value)
        }
        if (name === "price") {
            setPrice(value)
        }


    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = place
        taskObj["Description"] = person
        taskObj["Price"] = price
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Tour</ModalHeader>
            <ModalBody>

                <div className="form-group">
                    <label>Place</label>
                    <input type="text" className="form-control" value={place} onChange={handleChange} name="place" />
                </div>
                <div className="form-group">
                    <label>Person</label>
                    <input type="text" className="form-control" value={person} onChange={handleChange} name="person" />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" value={price} onChange={handleChange} name="price" />
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTaskPopup;