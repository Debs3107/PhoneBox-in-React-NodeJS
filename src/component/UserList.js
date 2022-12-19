import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { deleteUserFromServer, getAllUserFromServer } from "../component/source/UserApi.js";

export function UserList() {

    const [UserList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [isModalOpened, setIsModalOpened] = useState(false);

    const openModal = () => {
        setIsModalOpened(true);
    }
    const closeModal = () => {
        setIsModalOpened(false);
    }
    async function getAllUser() {
        const response = await getAllUserFromServer();
        setUserList(response.data);
    }
    const deleteUser = async () => {
        const response = await deleteUserFromServer(selectedUser);
        console.log(response.data);
        closeModal();
        getAllUser();
    }

    useEffect(() => {
        getAllUser();
    }, []);

    return (
        <>
            <Container className="mt-4 mb-4 text-center">
                <Alert>
                    List of Users
                </Alert>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            UserList.map((user) => {
                                return (
                                    <tr>

                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>+91-{user.phone}</td>
                                        <td>{user.password}</td>

                                        <td><Button variant="danger" className="btn-sm" onClick={() => {
                                            setSelectedUser(user.name);
                                            openModal();
                                        }}>Delete</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            <Modal show={isModalOpened} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete user with name {selectedUser}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={deleteUser}>
                        Yes, Delete
                    </Button>
                    <Button variant="danger" onClick={closeModal}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}