import React, { Component } from 'react';

class AddExpenseForm extends Component {
    state = {
        formData: {
            price: '',
            date: '',
            reason: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.formData)
    }
    handleChange = (e) => {
        const formData = this.state.formData;
        formData[e.target.name] = e.target.value;
        this.setState({ formData })
    }
    render() {
        return (
            <h1>joel</h1>
            //     <Modal
            //         size="lg"
            //         aria-labelledby="contained-modal-title-vcenter"
            //         centered
            //     >
            //         <Modal.Header closeButton>
            //             <Modal.Title id="contained-modal-title-vcenter">
            //                 Modal heading
            //   </Modal.Title>
            //         </Modal.Header>
            //         <Modal.Body>
            //             <h4>Centered Modal</h4>
            //             <p>
            //                 Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            //                 dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            //                 consectetur ac, vestibulum at eros.
            //   </p>
            //         </Modal.Body>
            //         <Modal.Footer>
            //             <Button >Close</Button>
            //         </Modal.Footer>
            //     </Modal>
        );
    }
}

export default AddExpenseForm;

